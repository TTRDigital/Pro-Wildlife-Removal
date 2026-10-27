import { defineArrayMember, defineField, defineType } from "sanity";
import { sectionsField } from "./sections";

const groups = [
  { name: "content", title: "Content", default: true },
  { name: "seo", title: "SEO" },
];
const seoField = defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" });
const heroField = defineField({ name: "hero", title: "Page header", type: "pageHero", group: "content" });
const designField = defineField({
  name: "design",
  title: "Design",
  type: "string",
  group: "content",
  description: "How the page is drawn, as on the old site.",
  options: { list: [{ title: "Old site (2019)", value: "classic" }, { title: "2025 template", value: "refresh" }, { title: "Bat-removal design", value: "new" }], layout: "radio" },
  initialValue: "classic",
});

/* ---------- Singletons ---------- */

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Business name", type: "string" }),
    defineField({ name: "phone", type: "string", description: "As shown, e.g. (844) 264-6254. The call links follow it." }),
    defineField({ name: "tollFree", title: "Vanity / toll-free number", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({
      name: "address",
      type: "object",
      fields: [defineField({ name: "street", type: "string" }), defineField({ name: "city", type: "string" }), defineField({ name: "region", title: "State", type: "string" }), defineField({ name: "postalCode", title: "ZIP", type: "string" })],
    }),
    defineField({
      name: "hours",
      type: "array",
      of: [defineArrayMember({ name: "hoursRow", type: "object", fields: [defineField({ name: "label", title: "Day(s)", type: "string" }), defineField({ name: "value", title: "Hours", type: "string" })], preview: { select: { title: "label", subtitle: "value" } } })],
      description: "e.g. Monday – Friday / 8AM – 7PM",
    }),
    defineField({ name: "announcement", title: "Strip under the header", type: "string" }),
    defineField({ name: "serviceAreaText", title: "Service area line", type: "text", rows: 2 }),
    defineField({ name: "license", title: "License / permit line", type: "string", description: "Shown in the footer and contact details. Hidden while it says [PLACEHOLDER]." }),
    defineField({ name: "googleRating", title: "Google rating", type: "string" }),
    defineField({ name: "reviewCount", title: "Google review count", type: "string" }),
    defineField({ name: "reviewsUrl", title: "Reviews link", type: "url" }),
    defineField({ name: "mapEmbedUrl", title: "Google Maps embed URL", type: "url" }),
    defineField({
      name: "social",
      type: "array",
      of: [defineArrayMember({ name: "socialLink", type: "object", fields: [defineField({ name: "network", type: "string", options: { list: ["facebook", "x", "google", "instagram", "youtube", "yelp"] } }), defineField({ name: "href", title: "Link", type: "url" })], preview: { select: { title: "network", subtitle: "href" } } })],
    }),
    defineField({
      name: "countyLines",
      title: "Locations menu (phone line per county)",
      type: "array",
      of: [defineArrayMember({ name: "countyLine", type: "object", fields: [defineField({ name: "county", type: "string" }), defineField({ name: "phone", type: "string" }), defineField({ name: "href", title: "Page", type: "string" })], preview: { select: { title: "county", subtitle: "phone" } } })],
    }),
    defineField({ name: "headerCta", title: "Header button", type: "cta" }),
    defineField({
      name: "defaultCta",
      title: "Default call-to-action band",
      type: "object",
      description: "Used at the bottom of pages that have no band of their own.",
      fields: [defineField({ name: "heading", type: "string" }), defineField({ name: "highlight", title: "Words shown in blue", type: "string" }), defineField({ name: "text", type: "text", rows: 3 })],
    }),
    defineField({ name: "logo", type: "altImage", description: "Leave empty to use the built-in logo." }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});

/** Every page singleton has the same shape: header, sections, SEO. */
const pageDoc = (name: string, title: string) =>
  defineType({
    name,
    title,
    type: "document",
    groups,
    fields: [designField, heroField, sectionsField, seoField],
    preview: { prepare: () => ({ title }) },
  });

export const pageSingletons = [
  pageDoc("homePage", "Home"),
  pageDoc("servicesPage", "Services"),
  pageDoc("serviceAreaPage", "Service area"),
  pageDoc("aboutPage", "About us"),
  pageDoc("howWeWorkPage", "How we work"),
  pageDoc("contactPage", "Contact us"),
  pageDoc("blogPage", "Blog"),
  pageDoc("privacyPage", "Privacy policy"),
  pageDoc("termsPage", "Terms of service"),
  pageDoc("sitemapPage", "Sitemap"),
];

/* ---------- Collections ---------- */

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  groups,
  fields: [
    defineField({ name: "title", title: "Name", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "URL", type: "slug", group: "content", description: "The page lives at /services/<this>/. Do not change it after launch.", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "group", type: "string", group: "content", options: { list: [{ title: "Wildlife removal", value: "removal" }, { title: "Wildlife control", value: "control" }, { title: "Tampa services", value: "tampa" }] }, validation: (r) => r.required() }),
    defineField({ name: "animal", type: "string", group: "content" }),
    defineField({ name: "order", type: "number", group: "content" }),
    defineField({ name: "summary", title: "Card text", type: "text", rows: 2, group: "content" }),
    defineField({ name: "cardImage", title: "Card photo", type: "altImage", group: "content", description: "Leave empty to use the page header photo." }),
    designField,
    heroField,
    sectionsField,
    seoField,
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "slug.current", media: "hero.image" } },
});

export const location = defineType({
  name: "location",
  title: "Service area",
  type: "document",
  groups,
  fields: [
    defineField({ name: "name", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({
      name: "path",
      title: "URL path",
      type: "slug",
      group: "content",
      description: "Without slashes, e.g. about-us/service-area/wildlife-removal-clearwater-fl. Pages either sit under about-us/service-area/ or at the root. Do not change it after launch.",
      validation: (r) => r.required().custom((v) => (v?.current && /^[a-z0-9-]+(\/[a-z0-9-]+)*$/.test(v.current) ? true : "Lowercase words separated by - and /")),
    }),
    defineField({ name: "kind", type: "string", group: "content", options: { list: [{ title: "Region", value: "region" }, { title: "County", value: "county" }, { title: "City", value: "city" }, { title: "Rat removal (city)", value: "rat" }] } }),
    defineField({ name: "county", type: "string", group: "content", description: "County name without the word County, e.g. Pinellas." }),
    defineField({ name: "order", type: "number", group: "content" }),
    defineField({ name: "summary", type: "text", rows: 2, group: "content" }),
    designField,
    heroField,
    sectionsField,
    seoField,
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "path.current", media: "hero.image" } },
});

export const post = defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  groups,
  fields: [
    defineField({ name: "title", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "URL", type: "slug", group: "content", description: "The post lives at /blog/<this>/.", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "date", title: "Published", type: "datetime", group: "content" }),
    defineField({ name: "modified", title: "Updated", type: "datetime", group: "content" }),
    defineField({ name: "author", type: "string", group: "content" }),
    defineField({ name: "excerpt", type: "text", rows: 3, group: "content" }),
    defineField({ name: "image", title: "Featured image", type: "altImage", group: "content" }),
    defineField({ name: "body", type: "richText", group: "content" }),
    seoField,
  ],
  orderings: [{ title: "Newest", name: "date", by: [{ field: "date", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "date", media: "image" } },
});

export const testimonial = defineType({
  name: "testimonial",
  title: "Review",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "quote", type: "text", rows: 5, validation: (r) => r.required() }),
    defineField({ name: "rating", type: "number", initialValue: 5, validation: (r) => r.min(1).max(5) }),
    defineField({ name: "source", type: "string", options: { list: ["Google", "Yelp", "Facebook"] } }),
    defineField({ name: "order", type: "number", description: "Lower numbers show first." }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "quote" } },
});

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", type: "richText", validation: (r) => r.required() }),
    defineField({ name: "category", type: "string", description: "Where it was first used, e.g. Bat removal." }),
  ],
  preview: { select: { title: "question", subtitle: "category" } },
});

export const singletonNames = ["siteSettings", ...pageSingletons.map((p) => p.name)];
export const documentTypes = [siteSettings, ...pageSingletons, service, location, post, testimonial, faq];
