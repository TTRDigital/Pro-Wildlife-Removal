import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Google Ads landing pages (rat, bat, squirrel, raccoon, wildlife). The static build in
 * ad-landing-pages/ reads these at build time and falls back to its built-in copy
 * (ad-landing-pages/src/content.mjs) for anything missing, so the pages never break.
 * Document id: landingPage-<slug>. Call-only pages: there is no form section on purpose.
 */
const ICONS = ["phone", "star", "shield", "clock", "alert", "check", "volume", "circle", "zap", "waves", "layers", "wind", "moon", "droplet", "home", "search", "pin", "heart", "award", "lock", "sparkles"];
const icon = (name = "icon") => defineField({ name, type: "string", options: { list: ICONS } });
const group = (name: string, title: string) => ({ name, title });

export const landingPage = defineType({
  name: "landingPage",
  title: "Ad landing page",
  type: "document",
  groups: [group("page", "Page & SEO"), group("hero", "Hero & trust bar"), group("inspect", "Inspection"), group("signs", "Signs / animals"), group("solution", "Solution & why"), group("proof", "Reviews, FAQ & urgency"), group("contact", "Contact")],
  fields: [
    // Page & SEO
    defineField({ name: "slug", title: "Page", type: "string", group: "page", options: { list: ["rat", "bat", "squirrel", "raccoon", "wildlife"] }, validation: (r) => r.required(), description: "Which ad page this is. The page is built at /<slug>/." }),
    defineField({ name: "host", title: "Ad hostname", type: "string", group: "page", description: "e.g. rat.prowildliferemoval.net (used by the preview index only)." }),
    defineField({ name: "title", title: "SEO title", type: "string", group: "page", validation: (r) => r.required() }),
    defineField({ name: "description", title: "SEO description", type: "text", rows: 3, group: "page", validation: (r) => r.required() }),
    defineField({ name: "noindex", title: "Hide from search engines (noindex)", type: "boolean", group: "page", initialValue: true, description: "Keep on for ad pages. The host also sends an X-Robots-Tag header." }),
    defineField({ name: "tel", title: "Call link", type: "string", group: "page", description: "e.g. tel:+17278556766. Visitors from Google Ads get a tracking number instead, automatically." }),
    defineField({ name: "variant", title: "Look", type: "string", group: "page", options: { list: [{ title: "Dark (default)", value: "dark" }, { title: "Light", value: "light" }], layout: "radio" } }),
    defineField({ name: "topbar", title: "Top strip text", type: "string", group: "page" }),
    defineField({ name: "headerLabel", title: "Header label (above the phone number)", type: "string", group: "page" }),
    // Hero & trust bar
    defineField({
      name: "hero",
      type: "object",
      group: "hero",
      fields: [
        defineField({ name: "badge", type: "string" }),
        defineField({ name: "h1Line1", title: "Headline, first line (highlighted)", type: "string" }),
        defineField({ name: "h1Line2", title: "Headline, second line", type: "string" }),
        defineField({ name: "sub", title: "Sub-headline", type: "text", rows: 2 }),
        defineField({ name: "note", title: "Small note under the button", type: "string" }),
        defineField({ name: "chips", type: "array", of: [defineArrayMember({ type: "object", name: "chip", fields: [icon(), defineField({ name: "text", type: "string" })], preview: { select: { title: "text", subtitle: "icon" } } })] }),
        defineField({ name: "image", title: "Image file name", type: "string", description: "A file in ad-landing-pages/public/img, e.g. rat-hero.jpg." }),
        defineField({ name: "alt", title: "Image description", type: "string" }),
      ],
    }),
    defineField({
      name: "trust",
      title: "Trust bar",
      type: "array",
      group: "hero",
      of: [defineArrayMember({ type: "object", name: "trustItem", fields: [icon(), defineField({ name: "title", type: "string" }), defineField({ name: "sub", title: "Small text", type: "string" }), defineField({ name: "stars", title: "Show five stars instead of small text", type: "boolean" })], preview: { select: { title: "title", subtitle: "sub" } } })],
    }),
    // Inspection
    defineField({
      name: "inspect",
      title: "Inspection section",
      type: "object",
      group: "inspect",
      fields: [
        defineField({ name: "kicker", type: "string" }),
        defineField({ name: "h2", title: "Heading", type: "string" }),
        defineField({ name: "p", title: "Text", type: "text", rows: 4 }),
        defineField({ name: "items", title: "Checklist", type: "array", of: [defineArrayMember({ type: "string" })] }),
        defineField({ name: "cta", title: "Button text", type: "string" }),
        defineField({ name: "images", type: "array", of: [defineArrayMember({ type: "object", name: "inspectImage", fields: [defineField({ name: "file", title: "Image file name", type: "string" }), defineField({ name: "alt", type: "string" })], preview: { select: { title: "file", subtitle: "alt" } } })] }),
      ],
    }),
    // Signs / animals
    defineField({
      name: "signs",
      title: "Signs section",
      type: "object",
      group: "signs",
      fields: [
        defineField({ name: "h2", title: "Heading", type: "string" }),
        defineField({ name: "p", title: "Text", type: "text", rows: 2 }),
        defineField({ name: "items", type: "array", of: [defineArrayMember({ type: "object", name: "sign", fields: [icon(), defineField({ name: "text", type: "string" })], preview: { select: { title: "text", subtitle: "icon" } } })] }),
      ],
    }),
    defineField({
      name: "animals",
      title: "Animals section (wildlife page)",
      type: "object",
      group: "signs",
      fields: [defineField({ name: "h2Line1", title: "Heading, first part", type: "string" }), defineField({ name: "h2Line2", title: "Heading, highlighted part", type: "string" }), defineField({ name: "list", type: "array", of: [defineArrayMember({ type: "string" })] })],
    }),
    // Solution & why
    defineField({
      name: "solution",
      title: "Solution steps",
      type: "object",
      group: "solution",
      fields: [
        defineField({ name: "h2", title: "Heading", type: "string" }),
        defineField({ name: "p", title: "Text", type: "text", rows: 2 }),
        defineField({ name: "iconCards", title: "Use icons instead of step numbers", type: "boolean" }),
        defineField({ name: "steps", type: "array", of: [defineArrayMember({ type: "object", name: "step", fields: [defineField({ name: "label", title: "Number (01) or icon name", type: "string" }), defineField({ name: "title", type: "string" }), defineField({ name: "text", type: "text", rows: 3 })], preview: { select: { title: "title", subtitle: "label" } } })] }),
      ],
    }),
    defineField({
      name: "why",
      title: "Why it can't wait",
      type: "object",
      group: "solution",
      fields: [
        defineField({ name: "h2", title: "Heading", type: "string" }),
        defineField({ name: "p", title: "Text", type: "text", rows: 2 }),
        defineField({ name: "items", type: "array", of: [defineArrayMember({ type: "object", name: "whyItem", fields: [defineField({ name: "title", type: "string" }), defineField({ name: "text", type: "text", rows: 2 }), icon()], preview: { select: { title: "title", subtitle: "text" } } })] }),
      ],
    }),
    // Reviews, FAQ, urgency
    defineField({ name: "reviews", type: "array", group: "proof", description: "Leave empty for no reviews block (raccoon page).", of: [defineArrayMember({ type: "object", name: "pageReview", fields: [defineField({ name: "quote", type: "text", rows: 4 }), defineField({ name: "name", type: "string" })], preview: { select: { title: "name", subtitle: "quote" } } })] }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "object",
      group: "proof",
      fields: [
        defineField({ name: "h2", title: "Heading", type: "string" }),
        defineField({ name: "p", title: "Text", type: "text", rows: 2 }),
        defineField({ name: "items", type: "array", of: [defineArrayMember({ type: "object", name: "faqItem", fields: [defineField({ name: "question", type: "string" }), defineField({ name: "answer", type: "text", rows: 4 })], preview: { select: { title: "question" } } })] }),
      ],
    }),
    defineField({ name: "urgency", title: "Urgency band", type: "object", group: "proof", fields: [defineField({ name: "h2", title: "Heading", type: "string" }), defineField({ name: "p", title: "Text", type: "string" }), defineField({ name: "cta", title: "Button text", type: "string" })] }),
    // Contact (call-only: no form)
    defineField({
      name: "contact",
      type: "object",
      group: "contact",
      fields: [
        defineField({ name: "p", title: "Text", type: "text", rows: 2 }),
        defineField({ name: "label", title: "Label above the number", type: "string" }),
        defineField({ name: "areasHeading", type: "string" }),
        defineField({ name: "areas", title: "Service areas text", type: "text", rows: 2 }),
        defineField({ name: "image", title: "Image file name", type: "string" }),
        defineField({ name: "alt", title: "Image description", type: "string" }),
      ],
    }),
  ],
  preview: { select: { title: "title", subtitle: "slug" } },
});
