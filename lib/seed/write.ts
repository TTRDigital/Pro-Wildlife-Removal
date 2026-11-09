/**
 * Plans and writes the seed. Shared by scripts/seed.ts and the protected /api/seed route.
 * Safe by construction: it only ever calls createIfNotExists. It never deletes and never
 * overwrites, and a document that already exists in Sanity (draft or published) is skipped.
 */
import type { SanityClient } from "@sanity/client";
import { buildSeedDocs, existingQuery, type SeedDoc } from "./build.ts";

export type SeedResult = {
  mode: "dry-run" | "apply";
  total: number;
  existing: number;
  toCreate: number;
  byType: Record<string, { total: number; toCreate: number }>;
  photos: number;
  created?: number;
  remaining?: number;
  photosUploaded?: number;
  note?: string;
};

export type LoadPhoto = (src: string) => Promise<{ data: Buffer | Uint8Array; filename: string }>;

export async function runSeed(opts: { client: SanityClient; apply: boolean; loadPhoto?: LoadPhoto; budgetMs?: number; seeAllDrafts?: boolean }): Promise<SeedResult> {
  const { client, apply, loadPhoto, budgetMs = 45_000 } = opts;
  const started = Date.now();
  const { docs, assets } = await buildSeedDocs();

  const ids = docs.map((d) => d._id);
  const found = await client.fetch<string[]>(existingQuery, { ids, drafts: ids.map((i) => `drafts.${i}`) }, { perspective: "raw" });
  const existing = new Set(found.map((id) => id.replace(/^drafts\./, "")));
  const toCreate = docs.filter((d) => !existing.has(d._id));

  const byType: SeedResult["byType"] = {};
  for (const d of docs) {
    const t = (byType[d._type] ??= { total: 0, toCreate: 0 });
    t.total++;
    if (!existing.has(d._id)) t.toCreate++;
  }
  const result: SeedResult = { mode: apply ? "apply" : "dry-run", total: docs.length, existing: existing.size, toCreate: toCreate.length, byType, photos: Object.keys(assets).length };
  if (!apply) return result;
  if (!loadPhoto) throw new Error("loadPhoto is required to apply");

  // Upload only the photos the documents to create need (Sanity de-duplicates identical files).
  const needed = new Set<string>();
  for (const d of toCreate) for (const m of JSON.stringify(d).matchAll(/image-dry-\d+/g)) needed.add(m[0]);
  const real = new Map<string, string>();
  const queue = [...needed];
  const worker = async () => {
    for (let id = queue.shift(); id; id = queue.shift()) {
      if (Date.now() - started > budgetMs) return;
      const { data, filename } = await loadPhoto(assets[id]);
      const doc = await client.assets.upload("image", Buffer.from(data), { filename });
      real.set(id, doc._id);
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker));
  result.photosUploaded = real.size;

  const swap = (d: SeedDoc): SeedDoc | null => {
    let ok = true;
    const text = JSON.stringify(d).replace(/image-dry-\d+/g, (m) => {
      const r = real.get(m);
      if (!r) ok = false;
      return r ?? m;
    });
    return ok ? (JSON.parse(text) as SeedDoc) : null;
  };

  let created = 0;
  for (let i = 0; i < toCreate.length; i += 15) {
    if (Date.now() - started > budgetMs + 10_000) break;
    const batch = toCreate.slice(i, i + 15).map(swap).filter((d): d is SeedDoc => d !== null);
    if (!batch.length) continue;
    const tx = client.transaction();
    for (const d of batch) tx.createIfNotExists(d);
    await tx.commit({ visibility: "async" });
    created += batch.length;
  }
  result.created = created;
  result.remaining = toCreate.length - created;
  if (result.remaining) result.note = "Time limit reached. Run it again to continue; documents already created are skipped.";
  return result;
}
