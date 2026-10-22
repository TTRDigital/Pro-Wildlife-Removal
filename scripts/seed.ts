/**
 * Loads the built-in content (lib/data) and its photos into Sanity, so the
 * CMS starts full instead of empty: site settings, every page, 26 services,
 * 43 service areas, 56 blog posts, reviews and the FAQ library.
 *
 *   npm run seed                 # create documents that don't exist yet
 *   npm run seed -- --force      # overwrite everything with the built-in content
 *   npm run seed -- --dry-run    # build every document without uploading or writing
 *
 * Writes to project 5prlo93h / production unless NEXT_PUBLIC_SANITY_PROJECT_ID /
 * NEXT_PUBLIC_SANITY_DATASET say otherwise (environment or .env.local). Needs
 * SANITY_WRITE_TOKEN (an Editor token from sanity.io/manage > API > Tokens) in
 * .env.local. Without --force, anything an editor already changed is kept.
 */
import { createHash } from "node:crypto";
import { createReadStream, existsSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";
import { createClient } from "@sanity/client";
import type { Card, Cta, Hero, Img, PageContent, Rich, Section, SectionStyle, Seo } from "../lib/types";
import { fallbackSettings } from "../lib/data/site.ts";
import { fallbackPages } from "../lib/data/pages.ts";
import { fallbackServices } from "../lib/data/services.ts";
import { fallbackLocations } from "../lib/data/locations.ts";
import { fallbackPosts } from "../lib/data/posts.ts";
import { fallbackTestimonials } from "../lib/data/testimonials.ts";

const root = new URL("..", import.meta.url).pathname;

// Minimal .env.local reader so the script works without extra packages.
if (existsSync(join(root, ".env.local"))) {
  for (const line of readFileSync(join(root, ".env.local"), "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

// Imported after .env.local is loaded so its values apply.
const { dataset, projectId } = await import("../sanity/env.ts");
const token = process.env.SANITY_WRITE_TOKEN;
const force = process.argv.includes("--force");
const dryRun = process.argv.includes("--dry-run");

if (!dryRun && (!projectId || !token)) {
  console.error("Set SANITY_WRITE_TOKEN in .env.local (Editor token from sanity.io/manage > API > Tokens).");
  process.exit(1);
}

const client = createClient({ projectId: projectId || "dry-run", dataset, token, apiVersion: "2025-02-19", useCdn: false });

/* ---------- helpers ---------- */

let keyN = 0;
const key = () => `k${(keyN++).toString(36)}`;
const hash = (s: string) => createHash("sha1").update(s).digest("hex").slice(0, 16);
const uploaded = new Map<string, string>();

async function asset(src: string) {
  if (uploaded.has(src)) return uploaded.get(src)!;
  const file = join(root, "public", src);
  if (!existsSync(file)) throw new Error(`Missing image file: ${file}`);
  if (dryRun) {
    uploaded.set(src, `image-dry-${uploaded.size}`);
    return uploaded.get(src)!;
  }
  const doc = await client.assets.upload("image", createReadStream(file), { filename: basename(file) });
  uploaded.set(src, doc._id);
  process.stdout.write(".");
  return doc._id;
}

async function altImage(img?: Img, caption?: string) {
  if (!img) return undefined;
  return { _type: "altImage", alt: img.alt, ...(caption ? { caption } : {}), asset: { _type: "reference", _ref: await asset(img.src) } };
}

type Any = Record<string, unknown>;

/** Built-in Portable Text -> Sanity Portable Text (keys added, images uploaded). */
async function rich(blocks?: Rich) {
  if (!blocks?.length) return undefined;
  const out: Any[] = [];
  for (const b of blocks as Any[]) {
    if (b._type === "altImage") {
      const img = await altImage(b.image as Img, b.caption as string | undefined);
      if (img) out.push({ ...img, _key: key() });
    } else if (b._type === "table") {
      out.push({ _type: "table", _key: key(), hasHeader: !!b.hasHeader, rows: ((b.rows as { cells: string[] }[]) ?? []).map((r) => ({ _type: "row", _key: key(), cells: r.cells })) });
    } else {
      out.push({
        ...b,
        _key: key(),
        markDefs: ((b.markDefs as Any[]) ?? []).map((m) => ({ ...m })),
        children: ((b.children as Any[]) ?? []).map((c) => ({ _type: "span", marks: [], ...c, _key: key() })),
      });
    }
  }
  return out;
}

const ctas = (list?: Cta[]) => list?.map((c) => ({ _type: "cta", _key: key(), ...c }));
const seo = (s: Seo) => ({ _type: "seo", title: s.title, description: s.description });

async function style(st?: SectionStyle) {
  if (!st) return undefined;
  const { image, ...rest } = st;
  return { _type: "sectionStyle", ...rest, ...(image ? { image: await altImage(image) } : {}) };
}

async function hero(h: Hero) {
  return {
    _type: "pageHero",
    eyebrow: h.eyebrow,
    heading: h.heading,
    highlight: h.highlight,
    text: await rich(h.text),
    image: await altImage(h.image),
    badges: h.badges,
    ctas: ctas(h.ctas),
    rotator: h.rotator,
    rotatorSuffix: h.rotatorSuffix,
    style: await style(h.style),
  };
}

/* FAQ library: one document per distinct question + answer, referenced from the pages. */
const faqDocs = new Map<string, Any>();
async function faqRef(question: string, answer: Rich, category: string) {
  const id = `faq-${hash(question + JSON.stringify(answer))}`;
  if (!faqDocs.has(id)) faqDocs.set(id, { _id: id, _type: "faq", question, answer: await rich(answer), category });
  return { _type: "reference", _ref: id, _key: key() };
}

async function card(c: Card) {
  return { _type: "card", _key: key(), icon: c.icon, number: c.number, title: c.title, subtitle: c.subtitle, text: await rich(c.text), image: await altImage(c.image), href: c.href, accent: c.accent };
}

async function sections(list: Section[], category: string) {
  const out: Any[] = [];
  for (const s of list) {
    const x = s as Any;
    const base: Any = { _type: s._type, _key: key() };
    for (const f of ["tone", "eyebrow", "heading", "highlight", "variant", "columns", "imageSide", "align", "note", "area", "showForm", "form", "map", "group", "limit", "checklist"]) {
      if (x[f] !== undefined) base[f] = x[f];
    }
    for (const f of ["intro", "body", "outro", "text"]) {
      if (x[f]) base[f] = await rich(x[f] as Rich);
    }
    if (x.image) base.image = await altImage(x.image as Img);
    if (x.style) base.style = await style(x.style as SectionStyle);
    if (x.ctas) base.ctas = ctas(x.ctas as Cta[]);
    if (s._type === "cardsSection") base.cards = await Promise.all(s.cards.map(card));
    if (s._type === "trustBar") base.items = s.items.map((i) => ({ _type: "trustItem", _key: key(), ...i }));
    if (s._type === "areasSection")
      base.groups = s.groups.map((g) => ({ _type: "areaGroup", _key: key(), title: g.title, href: g.href, items: g.items.map((i) => ({ _type: "areaItem", _key: key(), ...i })) }));
    if (s._type === "faqSection") base.items = await Promise.all(s.items.map((f) => faqRef(f.question, f.answer, category)));
    out.push(base);
  }
  return out;
}

async function pageFields(p: PageContent, category: string) {
  return { design: p.design, hero: await hero(p.hero), sections: await sections(p.sections, category), seo: seo(p.seo) };
}

/* ---------- documents ---------- */

async function build() {
  const docs: Any[] = [];
  const s = fallbackSettings;
  docs.push({
    _id: "siteSettings",
    _type: "siteSettings",
    name: s.name,
    phone: s.phone,
    tollFree: s.tollFree,
    email: s.email,
    address: s.address,
    hours: s.hours.map((h) => ({ _type: "hoursRow", _key: key(), ...h })),
    announcement: s.announcement,
    serviceAreaText: s.serviceAreaText,
    license: s.license,
    googleRating: s.googleRating,
    reviewCount: s.reviewCount,
    reviewsUrl: s.reviewsUrl,
    mapEmbedUrl: s.mapEmbedUrl,
    social: s.social.map((x) => ({ _type: "socialLink", _key: key(), ...x })),
    countyLines: s.countyLines.map((x) => ({ _type: "countyLine", _key: key(), ...x })),
    headerCta: { _type: "cta", ...s.headerCta },
    defaultCta: s.defaultCta,
  });

  for (const [k, p] of Object.entries(fallbackPages)) {
    docs.push({ _id: `${k}Page`, _type: `${k}Page`, ...(await pageFields(p as PageContent, k)) });
  }
  for (const sv of fallbackServices) {
    docs.push({
      _id: `service-${sv.slug}`,
      _type: "service",
      title: sv.title,
      slug: { _type: "slug", current: sv.slug },
      group: sv.group,
      animal: sv.animal,
      order: sv.order,
      summary: sv.summary,
      cardImage: await altImage(sv.cardImage),
      ...(await pageFields(sv, sv.title)),
    });
  }
  for (const l of fallbackLocations) {
    docs.push({
      _id: `location-${l.path.replace(/\//g, "--")}`,
      _type: "location",
      name: l.name,
      path: { _type: "slug", current: l.path },
      kind: l.kind,
      county: l.county,
      order: l.order,
      summary: l.summary,
      ...(await pageFields(l, l.name)),
    });
  }
  for (const p of fallbackPosts) {
    docs.push({
      _id: `post-${p.slug}`,
      _type: "post",
      title: p.title,
      slug: { _type: "slug", current: p.slug },
      date: p.date,
      modified: p.modified,
      author: p.author,
      excerpt: p.excerpt,
      image: await altImage(p.image),
      body: await rich(p.body),
      seo: seo(p.seo),
    });
  }
  fallbackTestimonials.forEach((t, n) => docs.push({ _id: `testimonial-${n + 1}`, _type: "testimonial", ...t, order: n + 1 }));
  docs.push(...faqDocs.values());
  return docs;
}

const clean = (v: unknown): unknown =>
  Array.isArray(v) ? v.map(clean) : v && typeof v === "object" ? Object.fromEntries(Object.entries(v).filter(([, x]) => x !== undefined).map(([k, x]) => [k, clean(x)])) : v;

console.log(`Seeding ${projectId}/${dataset}${dryRun ? " (dry run)" : force ? " (overwriting)" : " (keeping existing documents)"}. Uploading photos`);
const docs = (await build()).map((d) => clean(d) as { _id: string; _type: string });
console.log(`\n${uploaded.size} photos. ${docs.length} documents.`);
const counts = docs.reduce<Record<string, number>>((a, d) => ((a[d._type] = (a[d._type] ?? 0) + 1), a), {});
console.log(counts);
if (dryRun) {
  console.log("Dry run, nothing written.");
  process.exit(0);
}

// Small transactions: blog posts and pages are large documents.
for (let i = 0; i < docs.length; i += 15) {
  const tx = client.transaction();
  for (const d of docs.slice(i, i + 15)) {
    if (force) tx.createOrReplace(d);
    else tx.createIfNotExists(d);
  }
  await tx.commit({ visibility: "async" });
  process.stdout.write(`${Math.min(i + 15, docs.length)}/${docs.length} `);
}
console.log("\nDone. Open /cms to see the content.");
