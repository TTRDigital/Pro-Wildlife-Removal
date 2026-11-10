/**
 * Adds the `path` field TTR OS uses to find each page (e.g. "/about-us/") to the Sanity documents that lack it.
 * Locations get `urlPath` instead, because their `path` is already the old-site ID (a slug).
 *
 *   npm run backfill-paths            # DRY RUN (default): lists what it would set, writes nothing, no token needed
 *   npm run backfill-paths -- --write # sets only missing fields (never overwrites), published documents only
 *
 * --write needs SANITY_WRITE_TOKEN (Editor token) in the environment or .env.local; never commit it.
 * Reads from project 5prlo93h / production unless NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET say otherwise.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { createClient } from "@sanity/client";
import { areaPath } from "../lib/location-urls.ts";

const root = new URL("..", import.meta.url).pathname;
if (existsSync(join(root, ".env.local"))) {
  for (const line of readFileSync(join(root, ".env.local"), "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}
const write = process.argv.includes("--write");
const token = (process.env.SANITY_WRITE_TOKEN ?? "").trim();
if (write && !token) throw new Error("--write needs SANITY_WRITE_TOKEN (Editor token) in the environment or .env.local.");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5prlo93h",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: write ? token : undefined,
});

const singletons: Record<string, string> = {
  homePage: "/",
  servicesPage: "/services/",
  serviceAreaPage: "/service-areas/",
  aboutPage: "/about-us/",
  howWeWorkPage: "/how-we-work/",
  contactPage: "/contact-us/",
  blogPage: "/blog/",
  privacyPage: "/privacy-policy/",
  termsPage: "/terms-of-service/",
  sitemapPage: "/sitemap/",
};

type Doc = { _id: string; _type: string; path?: unknown; urlPath?: string; slug?: string; locPath?: string };
const docs = await client.fetch<Doc[]>(
  `*[_type in $types && !(_id in path("drafts.**"))]{ _id, _type, "path": select(_type == "location" => null, path), urlPath, "slug": slug.current, "locPath": select(_type == "location" => path.current) }`,
  { types: [...Object.keys(singletons), "service", "post", "location"] },
);

const plan: { id: string; type: string; field: "path" | "urlPath"; value: string }[] = [];
for (const d of docs) {
  if (d._type === "location") {
    if (!d.urlPath && d.locPath) plan.push({ id: d._id, type: d._type, field: "urlPath", value: `/${areaPath(d.locPath)}/` });
  } else if (typeof d.path !== "string" || !d.path) {
    const value = d._type in singletons ? singletons[d._type] : d._type === "service" && d.slug ? `/services/${d.slug}/` : d._type === "post" && d.slug ? `/blog/${d.slug}/` : "";
    if (value) plan.push({ id: d._id, type: d._type, field: "path", value });
  }
}
for (const p of plan) console.log(`${write ? "SET " : "would set "}${p.type.padEnd(16)} ${p.id.padEnd(40)} ${p.field} = ${p.value}`);
console.log(`${plan.length} of ${docs.length} documents need a page address.${write ? "" : " Dry run: nothing written. Add --write to apply."}`);
if (write) {
  for (let i = 0; i < plan.length; i += 50) {
    const tx = client.transaction();
    for (const p of plan.slice(i, i + 50)) tx.patch(p.id, (patch) => patch.setIfMissing({ [p.field]: p.value }));
    await tx.commit();
  }
  console.log("Done.");
}
