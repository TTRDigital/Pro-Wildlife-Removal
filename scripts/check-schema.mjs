// Structured-data guard, run after `next build` (TTR-2510).
// usage: node scripts/check-schema.mjs [dir]   (default: .next/server)
// Pages are in .next/server/app on a plain build, and in .next/server/route-cache on Vercel (its build adapter).
// Reads the JSON-LD of every prerendered page and exits 1 if any block has a Review, Rating or
// AggregateRating (any type ending in Review or Rating), a review/aggregateRating/reviewRating property,
// or a PestControl type. Kia's rule: no review or rating markup on any client site; Pro Wildlife is never
// called pest control. The visible testimonials are fine; only the markup is checked.
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || ".next/server");
const BAD_TYPE = /(Review|Rating)$|^PestControl$/;
const BAD_KEYS = new Set(["review", "reviews", "aggregateRating", "reviewRating"]);

function* htmlFiles(dir) {
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) yield* htmlFiles(p);
    else if (name.endsWith(".html")) yield p;
  }
}

function problems(v, where, out) {
  if (Array.isArray(v)) v.forEach((x) => problems(x, where, out));
  else if (v && typeof v === "object") {
    for (const [k, x] of Object.entries(v)) {
      if (k === "@type") for (const t of [x].flat()) if (typeof t === "string" && BAD_TYPE.test(t)) out.push(`${where}: @type ${t}`);
      if (BAD_KEYS.has(k)) out.push(`${where}: property ${k}`);
      problems(x, where, out);
    }
  }
  return out;
}

let pages = 0;
let blocks = 0;
const found = [];
for (const file of htmlFiles(root)) {
  pages++;
  const html = readFileSync(file, "utf8");
  const rel = path.relative(root, file);
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    blocks++;
    try {
      problems(JSON.parse(m[1]), rel, found);
    } catch {
      found.push(`${rel}: JSON-LD block that does not parse`);
    }
  }
}

if (!pages) {
  console.error(`check-schema: no built pages found under ${root}`);
  process.exit(1);
}
for (const f of found) console.error(f);
console.log(`check-schema: ${pages} pages, ${blocks} JSON-LD blocks, ${found.length} problems`);
process.exit(found.length ? 1 : 0);
