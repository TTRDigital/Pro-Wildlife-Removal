// Content checker for the rebuilt pages (Cole, TTR-738).
// usage: node --experimental-strip-types --no-warnings scripts/check-content.mjs [--only <prefix>] [--quiet]
//   --only tampa-fl     print only pages whose key contains this text (checks still run on every page)
//   --quiet             print problems only
// Exits 1 if any page has a duplicate sentence, a banned word, an SEO length problem,
// or (animal x place pages) fewer than 6 local facts or a FAQ count outside 4 to 6.
// A second pass scans the visible text of EVERY rendered page (old migrated pages and posts too)
// for claims that must never render: "voted the best", "fully licensed", flat-rate or transparent
// pricing, 24/7 or round-the-clock service, moles or ducks, and any guarantee that isn't negated.
import { fileURLToPath } from "node:url";
import path from "node:path";

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const only = args.includes("--only") ? args[args.indexOf("--only") + 1] : "";
const quiet = args.includes("--quiet");

const { fallbackPages } = await import(repo + "/lib/data/pages.ts");
const { fallbackServices } = await import(repo + "/lib/data/services.ts");
const { fallbackLocations } = await import(repo + "/lib/data/locations.ts");
const { fallbackPosts } = await import(repo + "/lib/data/posts.ts");
const { fallbackServicePlaces } = await import(repo + "/lib/data/service-places.ts");
const { TRAP_RULES_2026 } = await import(repo + "/lib/data/content/notes.ts");

const txt = (r) => (r || []).map((b) => (b.children || []).map((c) => c.text).join("")).join("\n");
const shared = new Set(TRAP_RULES_2026.replace(/\*\*/g, "").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").split(/(?<=[.!?])\s+/).map((x) => x.trim()));

const pages = [["home", fallbackPages.home, "page"]];
for (const s of fallbackServices.filter((x) => x.sources)) pages.push([s.slug, s, "page"]);
for (const l of fallbackLocations.filter((x) => x.sources)) pages.push([(l.kind === "county" ? l.county : l.kind + ":" + l.name), l, "page"]);
for (const sp of fallbackServicePlaces) pages.push([`${sp.service}/${sp.place}`, sp, "place"]);
for (const po of fallbackPosts.filter((x) => x.sources))
  pages.push(["post:" + po.slug, { hero: { heading: po.title }, seo: po.seo, sections: [{ _key: "answer", body: po.body.slice(0, 1) }, { body: po.body }, { _type: "faqSection", items: po.faq || [] }] }, "post"]);

function allText(pg) {
  const out = [pg.hero.heading, txt(pg.hero.text)];
  for (const s of pg.sections) {
    out.push(...(s.points || []), s.heading || "", txt(s.intro), txt(s.body), txt(s.outro), txt(s.text), ...(s.checklist || []));
    (s.cards || []).forEach((c) => out.push(c.title, txt(c.text)));
    (s.items || []).forEach((f) => out.push(f.question, txt(f.answer)));
  }
  return out.filter(Boolean).join("\n").replace(/\*\*/g, "");
}

const seen = new Map();
const titles = new Map();
const descs = new Map();
let errors = 0;
for (const [key, pg, kind] of pages) {
  const problems = [];
  const t = allText(pg);
  const a = pg.sections.find((s) => s._key === "answer");
  const answerWords = txt(a?.text || a?.body).split(/\s+/).filter(Boolean).length;
  const flags = [...new Set(t.match(/—|–|\bbest\b|#1|guarantee|\bmoles?\b|\bducks?\b|licens|certified|24\/7|24 hours a day/gi) || [])];
  if (flags.length) problems.push(`flags: ${flags.join(", ")}`);
  if (answerWords < 40 || answerWords > 60) problems.push(`answer is ${answerWords} words (40 to 60)`);
  if (pg.seo) {
    if (pg.seo.title.length > 60) problems.push(`title ${pg.seo.title.length} chars (60 max)`);
    if (pg.seo.description.length < 150 || pg.seo.description.length > 155) problems.push(`description ${pg.seo.description.length} chars (150 to 155)`);
    if (titles.has(pg.seo.title)) problems.push(`same title as ${titles.get(pg.seo.title)}`);
    if (descs.has(pg.seo.description)) problems.push(`same description as ${descs.get(pg.seo.description)}`);
    titles.set(pg.seo.title, key);
    descs.set(pg.seo.description, key);
  }
  if (kind === "place") {
    const local = pg.sections.find((s) => s._key === "local")?.cards?.length || 0;
    const faqs = pg.sections.find((s) => s._type === "faqSection")?.items?.length || 0;
    if (local < 6) problems.push(`${local} local facts (6 or more)`);
    if (faqs < 4 || faqs > 6) problems.push(`${faqs} FAQs (4 to 6)`);
    if (!pg.sources?.length) problems.push("no sources");
  }
  for (const sent of t.split(/(?<=[.!?])\s+|\n/).map((x) => x.trim()).filter((x) => x.split(" ").length >= 8 && !x.includes("PLACEHOLDER") && !shared.has(x))) {
    if (seen.has(sent) && seen.get(sent) !== key) problems.push(`DUP with ${seen.get(sent)}: ${sent}`);
    else seen.set(sent, key);
  }
  const hard = problems.filter((p) => !/^flags: licens$/.test(p) && !(/^answer is/.test(p) && kind === "post"));
  errors += hard.length;
  if (only && !key.includes(only)) continue;
  if (quiet && !hard.length) continue;
  console.log(`${key}: ${t.split(/\s+/).length} words, answer ${answerWords}, placeholders ${(t.match(/\[PLACEHOLDER/g) || []).length}${problems.length ? "" : ", ok"}`);
  for (const p of problems) console.log("  " + p);
}
// Second pass: every rendered page, sourced or not.
const SKIP = new Set(["sources", "clientQuestions", "url", "href", "src", "slug", "_key", "_type", "style", "marks", "markDefs", "path", "image", "images", "icon", "design", "tone", "location", "service", "place", "county", "group", "animal"]);
const walk = (o, out) => {
  if (typeof o === "string") return void (o.includes("PLACEHOLDER") || out.push(o));
  if (Array.isArray(o)) return void o.forEach((x) => walk(x, out));
  if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) if (!SKIP.has(k)) walk(v, out);
};
const NEVER = /voted the best|fully licensed|flat[- ]rate|transparent pricing|24\/7|24 hours a day|round[- ]the[- ]clock|around the clock|\bmoles?\b|\bducks?\b/gi;
const rendered = [
  ...Object.entries(fallbackPages).map(([k, v]) => ["page:" + k, v]),
  ...fallbackServices.map((x) => ["service:" + x.slug, x]),
  ...fallbackLocations.map((x) => ["location:" + (x.path || x.slug || x.name), x]),
  ...fallbackPosts.map((x) => ["post:" + x.slug, x]),
  ...fallbackServicePlaces.map((x) => [`place:${x.service}/${x.place}`, x]),
];
let swept = 0;
for (const [key, obj] of rendered) {
  const out = [];
  walk(obj, out);
  const t = out.join("\n");
  const hits = [...t.matchAll(NEVER)].map((m) => m[0]);
  for (const m of t.matchAll(/guarantee\w*/gi)) {
    const before = t.slice(Math.max(0, m.index - 40), m.index);
    if (!/\b(not|no|cannot|never)\b[^.]*$|n't[^.]*$/i.test(before) && !/^guarantees and warranties/i.test(t.slice(m.index))) hits.push(m[0]);
  }
  if (!hits.length) continue;
  errors += hits.length;
  swept++;
  console.log(`${key}: never-render claim: ${[...new Set(hits)].join(", ")}`);
}
console.log(`${rendered.length} rendered pages swept, ${swept} with never-render claims`);
console.log(`${pages.length} pages checked, ${errors} problem${errors === 1 ? "" : "s"}`);
process.exit(errors ? 1 : 0);
