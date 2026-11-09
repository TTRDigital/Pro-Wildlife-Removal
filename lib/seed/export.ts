/**
 * Export mode: writes every seed document to JSON files, without a token or any network call,
 * so another tool (TTR OS) can load them into Sanity.
 *
 * - docs-01.json, docs-02.json ... : arrays of documents (each has _id and _type), every file under MAX_BYTES.
 *   Order matters: FAQs and reviews first, then settings, pages, services, areas and posts, so a document
 *   never refers to one that is written later.
 * - Photos: documents refer to photos by placeholder asset ids ("image-dry-N", the _ref of an image's asset).
 *   manifest.json lists every placeholder with the photo's path in the repo (public/...), so the loader
 *   uploads each photo once, then replaces the placeholder _ref with the real Sanity asset _id.
 * - Load with createIfNotExists only: never delete, never overwrite.
 */
import { mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { buildSeedDocs, type SeedDoc } from "./build.ts";

const MAX_BYTES = 1_800_000;
const ORDER = ["faq", "testimonial", "siteSettings", "homePage", "servicesPage", "serviceAreaPage", "aboutPage", "howWeWorkPage", "contactPage", "privacyPage", "termsPage", "sitemapPage", "blogPage", "service", "location", "post"];

export async function exportSeed(target: string) {
  const dir = dirname(target);
  const base = basename(target).replace(/\.json$/i, "");
  mkdirSync(dir, { recursive: true });
  // Replace an earlier export of the same name only.
  for (const f of readdirSync(dir)) if (new RegExp(`^${base}-\\d+\\.json$`).test(f)) rmSync(join(dir, f));

  const { docs, assets } = await buildSeedDocs();
  const rank = (d: SeedDoc) => {
    const i = ORDER.indexOf(d._type);
    return i < 0 ? ORDER.length : i;
  };
  const sorted = docs.map((d, n) => ({ d, n })).sort((a, b) => rank(a.d) - rank(b.d) || a.n - b.n).map((x) => x.d);

  const parts: SeedDoc[][] = [[]];
  let size = 2;
  for (const d of sorted) {
    const bytes = Buffer.byteLength(JSON.stringify(d)) + 2;
    if (size + bytes > MAX_BYTES && parts[parts.length - 1].length) {
      parts.push([]);
      size = 2;
    }
    parts[parts.length - 1].push(d);
    size += bytes;
  }
  const files = parts.map((part, i) => {
    const name = `${base}-${String(i + 1).padStart(2, "0")}.json`;
    writeFileSync(join(dir, name), JSON.stringify(part));
    return { file: name, documents: part.length, bytes: statSync(join(dir, name)).size };
  });

  const counts: Record<string, number> = {};
  for (const d of docs) counts[d._type] = (counts[d._type] ?? 0) + 1;
  const manifest = {
    project: "5prlo93h",
    dataset: "production",
    documents: docs.length,
    countsByType: counts,
    files,
    photoPlaceholders: Object.keys(assets).length,
    photos: Object.entries(assets).map(([placeholder, src]) => ({ placeholder, file: `public${src}` })),
    rules: "createIfNotExists only. Upload each photo once, replace every asset _ref that equals a placeholder with the uploaded asset _id. Never delete or overwrite.",
  };
  writeFileSync(join(dir, "manifest.json"), JSON.stringify(manifest, null, 1));
  return { documents: docs.length, countsByType: counts, files, photoPlaceholders: manifest.photoPlaceholders };
}
