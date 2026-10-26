import "server-only";
import { cache } from "react";
import { sanityFetch } from "@/lib/sanity/fetch";
import { merge } from "@/lib/merge";
import { hidePlaceholders } from "@/lib/placeholders";
import { fallbackSettings } from "@/lib/data/site";
import { fallbackPages, type PageKey } from "@/lib/data/pages";
import { fallbackServices } from "@/lib/data/services";
import { movedServices } from "@/lib/service-urls";
import { areaPath, foldedAreas, relinkAreas } from "@/lib/location-urls";
import { fallbackLocations } from "@/lib/data/locations";
import { fallbackPosts } from "@/lib/data/posts";
import { existingPlacePages, fallbackServicePlaces } from "@/lib/data/service-places";
import { fallbackTestimonials } from "@/lib/data/testimonials";
import type { Location, PageContent, PlacePage, Post, Service, ServicePlace, SiteSettings, Testimonial } from "@/lib/types";

/* ==========================================================================
   Content layer
   Every page reads through these functions at build time. Sanity values win
   when present; anything missing falls back to lib/data, so the site works
   before the CMS is filled in and an empty field never breaks a page.
   ========================================================================== */

/* ---------- GROQ fragments ---------- */

const IMG = `{ "src": asset->url, alt, "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height }`;
/** Portable Text with images resolved to { src, alt }. */
const RICH = `[]{ _type == "altImage" => { "_type": "altImage", _key, caption, "image": ${IMG} }, _type != "altImage" => @ }`;
const SEO = `seo{ title, description, noIndex, "image": ogImage${IMG} }`;
/** Look of a section on the old designs (colours, background photo). */
const STYLE = `style{ ..., "image": image${IMG} }`;
const HERO = `hero{ eyebrow, heading, highlight, "text": text${RICH}, "image": image${IMG}, badges, ctas[]{ label, href, style }, rotator, rotatorSuffix, "style": ${STYLE} }`;
const SECTIONS = `sections[]{
  ...,
  "image": image${IMG},
  "style": ${STYLE},
  "intro": intro${RICH},
  "body": body${RICH},
  "outro": outro${RICH},
  "text": text${RICH},
  cards[]{ ..., "image": image${IMG}, "text": text${RICH} },
  "items": select(_type == "faqSection" => items[]->{ question, "answer": answer${RICH} }, items)
}`;
const PAGE = `design, ${HERO}, ${SECTIONS}, ${SEO}`;

/* ---------- Settings & reviews ---------- */

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  const cms = await sanityFetch<Partial<SiteSettings>>(
    `*[_id == "siteSettings"][0]{ name, phone, tollFree, email, hours[]{ label, value }, announcement, serviceAreaText, license, googleRating, reviewCount, reviewsUrl, mapEmbedUrl,
      social[]{ network, href }, countyLines[]{ county, phone, href }, headerCta{ label, href }, defaultCta{ heading, highlight, text }, "logo": logo${IMG} }`,
    {},
    ["siteSettings"],
  );
  const s = merge(fallbackSettings, cms);
  // One phone number for the whole site (Kia, Oct 26, 2026): no county lines and no toll-free number,
  // whatever the CMS holds, so every template shows and calls the main line only.
  // tel: link always follows the displayed phone number.
  return relink({ ...s, countyLines: [], tollFree: undefined, phoneHref: telHref(s.phone) });
});

export function telHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return `tel:+${digits.length === 10 ? `1${digits}` : digits}`;
}

export const getTestimonials = cache(async (): Promise<Testimonial[]> => {
  const cms = await sanityFetch<Testimonial[]>(`*[_type == "testimonial"] | order(order asc){ name, quote, rating, source }`, {}, ["testimonial"]);
  return cms?.length ? cms.map((t) => ({ ...t, rating: t.rating ?? 5 })) : fallbackTestimonials;
});

/* ---------- Page singletons ---------- */

export const getPage = cache(async (key: PageKey): Promise<PageContent> => {
  const cms = await sanityFetch<Partial<PageContent>>(`*[_id == $id][0]{ ${PAGE} }`, { id: `${key}Page` }, [`${key}Page`]);
  return relink(hidePlaceholders(merge(fallbackPages[key] as PageContent, cms)));
});

/* ---------- Collections ---------- */

/** CMS documents merge over the built-in item with the same key; CMS-only items are added; built-in items missing from the CMS stay. */
function mergeList<T>(fallback: T[], cms: Partial<T>[] | null, key: (x: Partial<T>) => string | undefined, blank: (c: Partial<T>) => T): T[] {
  if (!cms?.length) return fallback;
  const byKey = new Map(fallback.map((f) => [key(f), f]));
  const merged = cms.filter((c) => key(c)).map((c) => merge(byKey.get(key(c)) ?? blank(c), c));
  const missing = fallback.filter((f) => !cms.some((c) => key(c) === key(f)));
  return [...merged, ...missing];
}

/** Every string in a piece of content with old service-area links swapped for the new URLs (no 301 hops on our own links). */
function relink<T>(v: T): T {
  if (typeof v === "string") return relinkAreas(v) as T;
  if (Array.isArray(v)) return v.map(relink) as T;
  if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, relink(x)])) as T;
  return v;
}

export const getServices = cache(async (): Promise<Service[]> => {
  const cms = await sanityFetch<Partial<Service>[]>(
    `*[_type == "service" && defined(slug.current)] | order(order asc){ "slug": slug.current, title, group, animal, order, summary, "cardImage": cardImage${IMG}, "cardVideo": cardVideo.asset->url, ${PAGE} }`,
    {},
    ["service"],
  );
  const list = mergeList(fallbackServices, cms, (s) => s.slug, (c): Service => ({ slug: c.slug ?? "", title: c.title ?? "", group: "removal", animal: "", order: 99, hero: { heading: c.title ?? "" }, sections: [], seo: { title: c.title ?? "", description: "" } }));
  // One page per animal: retired copies stay out of the site, menus and sitemap (they 301, see next.config.ts).
  return relink(hidePlaceholders(list.filter((s) => !(s.slug in movedServices)).sort((a, b) => a.order - b.order)));
});

export async function getService(slug: string) {
  return (await getServices()).find((s) => s.slug === slug) ?? null;
}

export const getLocations = cache(async (): Promise<Location[]> => {
  const cms = await sanityFetch<Partial<Location>[]>(
    `*[_type == "location" && defined(path.current)] | order(order asc){ "path": path.current, name, kind, county, order, summary, ${PAGE} }`,
    {},
    ["location"],
  );
  const list = mergeList(fallbackLocations, cms, (l) => l.path, (c): Location => ({ path: c.path ?? "", name: c.name ?? "", kind: "city", order: 999, hero: { heading: c.name ?? "" }, sections: [], seo: { title: c.name ?? "", description: "" } }));
  // /service-areas/ (Ben, Oct 26, 2026): folded pages leave the site, the rest move to their new path (lib/location-urls.ts).
  // A rat page that stays (Winter Haven) is now its city's page.
  const live = list.filter((l) => !(l.path in foldedAreas)).map((l) => ({ ...l, path: areaPath(l.path), kind: l.kind === "rat" ? ("city" as const) : l.kind }));
  return relink(hidePlaceholders(live.sort((a, b) => a.order - b.order)));
});

/** Animal-by-place pages (TTR-738), only those whose animal page is on the site. Built-in content for now; not in the CMS yet. */
export const getServicePlaces = cache(async (): Promise<ServicePlace[]> => {
  const services = new Set((await getServices()).map((s) => s.slug));
  return relink(hidePlaceholders(fallbackServicePlaces.filter((p) => services.has(p.service)).map((p) => ({ ...p, location: p.location && areaPath(p.location) })).sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || a.placeName.localeCompare(b.placeName))));
});

/** Every place page to link to: the new ones plus the existing pages that serve as place pages (only those still on the site). */
export const getPlacePages = cache(async (): Promise<PlacePage[]> => {
  const [places, locations] = await Promise.all([getServicePlaces(), getLocations()]);
  const live = new Set(locations.map((l) => l.path));
  return [...places.map((p) => ({ ...p, path: `services/${p.service}/${p.place}` })), ...existingPlacePages.filter((p) => live.has(p.path))];
});

export async function getServicePlace(service: string, place: string) {
  return (await getServicePlaces()).find((p) => p.service === service && p.place === place) ?? null;
}

export async function getLocation(path: string) {
  const p = path.replace(/^\/|\/$/g, "");
  return (await getLocations()).find((l) => l.path === p) ?? null;
}

export const getPosts = cache(async (): Promise<Post[]> => {
  const cms = await sanityFetch<Partial<Post>[]>(
    `*[_type == "post" && defined(slug.current)] | order(date desc){ "slug": slug.current, title, excerpt, date, modified, author, "image": image${IMG}, "body": body${RICH}, "faq": faq[]{ question, "answer": answer${RICH} }, ${SEO} }`,
    {},
    ["post"],
  );
  const list = mergeList(fallbackPosts, cms, (p) => p.slug, (c): Post => ({ slug: c.slug ?? "", title: c.title ?? "", body: [], seo: { title: c.title ?? "", description: "" } }));
  return relink(hidePlaceholders(list.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))));
});

export async function getPost(slug: string) {
  return (await getPosts()).find((p) => p.slug === slug) ?? null;
}
