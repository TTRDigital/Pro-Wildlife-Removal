/**
 * Loads the built-in content (lib/data) and its photos into Sanity.
 *
 *   npm run seed            # DRY RUN (default): reports what would be created, writes nothing
 *   npm run seed -- --write # creates only the documents that do not exist yet
 *
 * It never deletes and never overwrites: a document that already exists in Sanity
 * (draft or published) is left exactly as it is. Writes to project 5prlo93h / production
 * unless NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET say otherwise.
 * --write needs SANITY_WRITE_TOKEN (Editor token) in .env.local. The dry run needs no token.
 * The same logic runs from the protected /api/seed route (see README).
 */
import { existsSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";
import { createClient } from "@sanity/client";
import { runSeed } from "../lib/seed/write.ts";

const root = new URL("..", import.meta.url).pathname;

// Minimal .env.local reader so the script works without extra packages.
if (existsSync(join(root, ".env.local"))) {
  for (const line of readFileSync(join(root, ".env.local"), "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}
const { dataset, projectId } = await import("../sanity/env.ts");

if (process.argv.includes("--force")) {
  console.error("--force was removed: the seed never overwrites existing documents.");
  process.exit(1);
}
const apply = process.argv.includes("--write");
const token = process.env.SANITY_WRITE_TOKEN;
if (apply && !token) {
  console.error("Set SANITY_WRITE_TOKEN in .env.local (Editor token from sanity.io/manage > API > Tokens).");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token: apply ? token : undefined, apiVersion: "2025-02-19", useCdn: false });
console.log(`Seeding ${projectId}/${dataset} (${apply ? "WRITE: creates missing documents only" : "DRY RUN, nothing is written"}).`);
const result = await runSeed({
  client,
  apply,
  budgetMs: 3_600_000,
  loadPhoto: async (src) => ({ data: readFileSync(join(root, "public", src)), filename: basename(src) }),
});
console.log(JSON.stringify(result, null, 2));
if (!apply) console.log("Dry run, nothing written. Run with --write to create the missing documents.");
