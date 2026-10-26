import "server-only";
import { cache } from "react";
import { sanityFetch } from "@/lib/sanity/fetch";
import { merge } from "@/lib/merge";
import { fallbackSettings } from "@/lib/data/site";
import { fallbackPages, type PageKey } from "@/lib/data/pages";
import { fallbackServices } from "@/lib/data/services";
import { fallbackLocations } from "@/lib/data/locations";
import { fallbackPosts } from "@/lib/data/posts";
import { fallbackTestimonials } from "@/lib/data/testimonials";
import type { Location, PageContent, Post, Service, SiteSettings, Testimonial } from "@/lib/types";

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
  return { ...s, countyLines: [], tollFree: undefined, phoneHref: telHref(s.phone) };
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
  return merge(fallbackPages[key] as PageContent, cms);
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

export const getServices = cache(async (): Promise<Service[]> => {
  const cms = await sanityFetch<Partial<Service>[]>(
    `*[_type == "service" && defined(slug.current)] | order(order asc){ "slug": slug.current, title, group, animal, order, summary, "cardImage": cardImage${IMG}, ${PAGE} }`,
    {},
    ["service"],
  );
  const list = mergeList(fallbackServices, cms, (s) => s.slug, (c): Service => ({ slug: c.slug ?? "", title: c.title ?? "", group: "removal", animal: "", order: 99, hero: { heading: c.title ?? "" }, sections: [], seo: { title: c.title ?? "", description: "" } }));
  return list.sort((a, b) => a.order - b.order);
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
  return list.sort((a, b) => a.order - b.order);
});

export async function getLocation(path: string) {
  const p = path.replace(/^\/|\/$/g, "");
  return (await getLocations()).find((l) => l.path === p) ?? null;
}

export const getPosts = cache(async (): Promise<Post[]> => {
  const cms = await sanityFetch<Partial<Post>[]>(
    `*[_type == "post" && defined(slug.current)] | order(date desc){ "slug": slug.current, title, excerpt, date, modified, author, "image": image${IMG}, "body": body${RICH}, ${SEO} }`,
    {},
    ["post"],
  );
  const list = mergeList(fallbackPosts, cms, (p) => p.slug, (c): Post => ({ slug: c.slug ?? "", title: c.title ?? "", body: [], seo: { title: c.title ?? "", description: "" } }));
  return list.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
});

export async function getPost(slug: string) {
  return (await getPosts()).find((p) => p.slug === slug) ?? null;
}
