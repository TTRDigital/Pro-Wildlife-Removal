// Rewrites old service-area links in lib/data to their /service-areas/ URLs (Wade, Oct 26, 2026).
// usage: node --experimental-strip-types --no-warnings scripts/rewrite-location-links.mjs [--dry]
// Only links change (href values and [text](/url) links); each location's own `path:` field stays as its ID.
// The site already rewrites these when it reads content (lib/content.ts), so this is clean-up, not a fix.
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { relinkAreas } from "../lib/location-urls.ts";

const dry = process.argv.includes("--dry");
const files = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? files(join(dir, f)) : f.endsWith(".ts") ? [join(dir, f)] : []));
let total = 0;
for (const file of files("lib/data")) {
  const before = readFileSync(file, "utf8");
  const after = relinkAreas(before);
  if (after === before) continue;
  const n = before.split("\n").filter((l, i) => l !== after.split("\n")[i]).length;
  total += n;
  console.log(`${file}: ${n} line(s)`);
  if (!dry) writeFileSync(file, after);
}
console.log(`${dry ? "Would change" : "Changed"} ${total} line(s).`);
