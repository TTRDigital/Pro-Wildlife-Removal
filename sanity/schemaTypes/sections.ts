import { defineArrayMember, defineField, defineType } from "sanity";
import { Columns2, FileText, Grid2x2, HelpCircle, LayoutList, MapPin, Megaphone, MessageSquareQuote, Newspaper, PhoneCall, ShieldCheck, Wrench } from "lucide-react";

/*
 * Page sections. Pages are built by stacking them. Each page is drawn in
 * its design (document field "design"): the old theme (components/old/
 * Classic.tsx), the 2025 template (components/old/Refresh.tsx) or the
 * bat-removal design (components/sections). "Look" holds a section's colours
 * on the old designs; "Background" (tone) is used by the bat-removal design.
 */

const tone = defineField({ name: "tone", title: "Background", type: "string", options: { list: [{ title: "White", value: "white" }, { title: "Light blue", value: "tint" }], layout: "radio" }, initialValue: "white" });
const eyebrow = defineField({ name: "eyebrow", title: "Small label above the heading", type: "string" });
const heading = defineField({ name: "heading", type: "string" });
const highlight = defineField({ name: "highlight", title: "Words of the heading shown in blue", type: "string" });
const intro = defineField({ name: "intro", title: "Intro", type: "richText" });
const ctas = defineField({ name: "ctas", title: "Buttons", type: "array", of: [defineArrayMember({ type: "cta" })], validation: (r) => r.max(2) });
const style = defineField({ name: "style", title: "Look (colours and background)", type: "sectionStyle" });
const head = [tone, eyebrow, heading, highlight, intro, style];
const titled = (fallback: string) => ({ select: { title: "heading", subtitle: "eyebrow" }, prepare: ({ title, subtitle }: { title?: string; subtitle?: string }) => ({ title: title || fallback, subtitle: [fallback, subtitle].filter(Boolean).join(" · ") }) });

export const trustBar = defineType({
  name: "trustBar",
  title: "Trust bar (navy strip)",
  type: "object",
  icon: ShieldCheck,
  fields: [
    defineField({
      name: "items",
      type: "array",
      validation: (r) => r.max(4),
      of: [defineArrayMember({ name: "trustItem", type: "object", fields: [defineField({ name: "icon", type: "icon" }), defineField({ name: "label", type: "string" }), defineField({ name: "text", type: "string" })], preview: { select: { title: "label" } } })],
    }),
  ],
  preview: { select: { items: "items" }, prepare: ({ items }) => ({ title: (items ?? []).map((i: { label?: string }) => i.label).join(" · ") || "Trust bar", subtitle: "Trust bar" }) },
});

export const splitSection = defineType({
  name: "splitSection",
  title: "Photo + text",
  type: "object",
  icon: Columns2,
  fields: [
    ...head.filter((f) => f.name !== "intro"),
    defineField({ name: "body", title: "Text", type: "richText" }),
    defineField({ name: "checklist", title: "Check list", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "image", type: "altImage" }),
    defineField({ name: "imageSide", title: "Photo side", type: "string", options: { list: ["left", "right"], layout: "radio" }, initialValue: "left" }),
    ctas,
  ],
  preview: { ...titled("Photo + text"), select: { title: "heading", subtitle: "eyebrow", media: "image" } },
});

export const cardsSection = defineType({
  name: "cardsSection",
  title: "Cards",
  type: "object",
  icon: Grid2x2,
  fields: [
    ...head,
    defineField({ name: "variant", title: "Card style", type: "string", options: { list: [{ title: "Icon", value: "icon" }, { title: "Numbered steps", value: "numbered" }, { title: "Left border", value: "accent" }, { title: "Photo on top", value: "photo" }, { title: "Plain", value: "plain" }] }, initialValue: "plain" }),
    defineField({ name: "columns", type: "number", options: { list: [2, 3, 4] }, initialValue: 3 }),
    defineField({ name: "cards", type: "array", of: [defineArrayMember({ type: "card" })] }),
    defineField({ name: "image", title: "Photo beside the cards (optional)", type: "altImage" }),
    defineField({ name: "outro", title: "Text under the cards", type: "richText" }),
    ctas,
  ],
  preview: titled("Cards"),
});

export const proseSection = defineType({
  name: "proseSection",
  title: "Text",
  type: "object",
  icon: FileText,
  fields: [...head, defineField({ name: "body", title: "Text", type: "richText" }), defineField({ name: "align", type: "string", options: { list: ["left", "center"], layout: "radio" } }), ctas],
  preview: titled("Text"),
});

export const faqSection = defineType({
  name: "faqSection",
  title: "FAQ",
  type: "object",
  icon: HelpCircle,
  fields: [...head, defineField({ name: "items", title: "Questions", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "faq" }] })], description: "Pick questions from the FAQ library, or create a new one here." }), ctas],
  preview: titled("FAQ"),
});

export const reviewsSection = defineType({
  name: "reviewsSection",
  title: "Reviews",
  type: "object",
  icon: MessageSquareQuote,
  description: "Shows the first reviews from the Reviews list.",
  fields: [...head, ctas],
  preview: titled("Reviews"),
});

export const areasSection = defineType({
  name: "areasSection",
  title: "Areas list",
  type: "object",
  icon: LayoutList,
  fields: [
    ...head,
    defineField({
      name: "groups",
      type: "array",
      of: [
        defineArrayMember({
          name: "areaGroup",
          type: "object",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" }),
            defineField({ name: "items", type: "array", of: [defineArrayMember({ name: "areaItem", type: "object", fields: [defineField({ name: "label", type: "string" }), defineField({ name: "href", title: "Link", type: "string" })], preview: { select: { title: "label", subtitle: "href" } } })] }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
    defineField({ name: "note", type: "text", rows: 2 }),
    ctas,
  ],
  preview: titled("Areas list"),
});

export const ctaSection = defineType({
  name: "ctaSection",
  title: "Navy call-to-action band",
  type: "object",
  icon: Megaphone,
  fields: [
    heading,
    highlight,
    defineField({ name: "text", type: "richText" }),
    defineField({ name: "area", title: "Service area line", type: "string", description: "Leave empty to use the one from Site settings." }),
    defineField({ name: "image", type: "altImage", description: "Without a photo, a call card is shown." }),
    ctas,
    style,
  ],
  preview: titled("Call to action"),
});

export const contactSection = defineType({
  name: "contactSection",
  title: "Contact details",
  type: "object",
  icon: PhoneCall,
  fields: [...head, ctas],
  preview: titled("Contact details"),
});

export const servicesSection = defineType({
  name: "servicesSection",
  title: "Services grid",
  type: "object",
  icon: Wrench,
  fields: [...head, defineField({ name: "group", type: "string", options: { list: ["all", "removal", "control", "tampa"] }, initialValue: "all" }), ctas],
  preview: titled("Services grid"),
});

export const locationsSection = defineType({
  name: "locationsSection",
  title: "Service areas grid",
  type: "object",
  icon: MapPin,
  description: "Lists every service-area page, grouped by county.",
  fields: [...head, ctas],
  preview: titled("Service areas grid"),
});

export const postsSection = defineType({
  name: "postsSection",
  title: "Latest blog posts",
  type: "object",
  icon: Newspaper,
  fields: [...head, defineField({ name: "limit", type: "number", initialValue: 3 }), ctas],
  preview: titled("Latest blog posts"),
});

export const sectionTypes = [trustBar, splitSection, cardsSection, proseSection, faqSection, reviewsSection, areasSection, ctaSection, contactSection, servicesSection, locationsSection, postsSection];

export const sectionsField = defineField({
  name: "sections",
  title: "Sections",
  type: "array",
  group: "content",
  of: sectionTypes.map((t) => defineArrayMember({ type: t.name })),
  description: "The page, top to bottom. Pages in the bat-removal design end with the navy call-to-action band (the default one if none is added).",
});
