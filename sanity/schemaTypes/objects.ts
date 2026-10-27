import { defineArrayMember, defineField, defineType } from "sanity";
import { iconOptions } from "../../lib/icons";

/** SEO fields on every page. Lengths are warnings, not hard errors. */
export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({ name: "title", title: "SEO title", type: "string", description: "Shown in Google. Aim for under 60 characters.", validation: (r) => r.max(70).warning("Over 60-70 characters may be cut off in Google.") }),
    defineField({ name: "description", title: "Meta description", type: "text", rows: 3, description: "Aim for under 160 characters.", validation: (r) => r.max(170).warning("Over 160 characters may be cut off in Google.") }),
    defineField({ name: "ogImage", title: "Social share image", type: "image", description: "1200 x 630. Leave empty to use the page's main photo." }),
    defineField({ name: "noIndex", title: "Hide from search engines", type: "boolean", initialValue: false }),
  ],
});

/** Image that always has alt text. */
export const altImage = defineType({
  name: "altImage",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Alt text",
      type: "string",
      description: 'Describe what the photo shows, e.g. "Raccoon caught in a live cage trap".',
      validation: (r) =>
        r.custom((alt, ctx) => {
          const parent = ctx.parent as { asset?: unknown } | undefined;
          return parent?.asset && !alt ? "Alt text is required for accessibility." : true;
        }),
    }),
    defineField({ name: "caption", type: "string" }),
  ],
});

export const icon = defineType({ name: "icon", title: "Icon", type: "string", options: { list: [...iconOptions] } });

export const cta = defineType({
  name: "cta",
  title: "Button",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "href", title: "Link", type: "string", description: "A page on this site like /contact-us/, a full URL, or tel:+18442646254.", validation: (r) => r.required() }),
    defineField({ name: "style", type: "string", options: { list: ["primary", "outline"], layout: "radio" }, initialValue: "primary" }),
  ],
  preview: { select: { title: "label", subtitle: "href" } },
});

export const table = defineType({
  name: "table",
  title: "Table",
  type: "object",
  fields: [
    defineField({ name: "hasHeader", title: "First row is a header", type: "boolean", initialValue: true }),
    defineField({
      name: "rows",
      type: "array",
      of: [defineArrayMember({ name: "row", type: "object", fields: [defineField({ name: "cells", type: "array", of: [defineArrayMember({ type: "string" })] })], preview: { select: { cells: "cells" }, prepare: ({ cells }) => ({ title: (cells ?? []).join(" | ") }) } })],
    }),
  ],
  preview: { select: { rows: "rows" }, prepare: ({ rows }) => ({ title: `Table (${rows?.length ?? 0} rows)` }) },
});

/** Rich text: paragraphs, h2-h4, bullet and numbered lists, bold, italic, links, photos and tables. */
export const richText = defineType({
  name: "richText",
  title: "Text",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
        { title: "Heading 4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
          { title: "Underline", value: "underline" },
        ],
        annotations: [defineArrayMember({ name: "link", type: "object", fields: [defineField({ name: "href", title: "Link", type: "string" })] })],
      },
    }),
    defineArrayMember({ type: "altImage" }),
    defineArrayMember({ type: "table" }),
  ],
});

const bgOptions = [
  { title: "Navy", value: "navy" },
  { title: "Blue", value: "blue" },
  { title: "Beige", value: "beige" },
  { title: "White", value: "white" },
  { title: "Light grey", value: "light" },
  { title: "Light blue", value: "ice" },
  { title: "Black", value: "dark" },
];
const colorOptions = ["beige", "blue", "black", "white", "charcoal", "navy", "grey", "slate", "ink", "red", "orange"];
const color = (name: string, title: string) => defineField({ name, title, type: "string", options: { list: colorOptions } });

/** Look of a section on the old designs (classic and 2025 template pages): background colour or photo and text colours. */
export const sectionStyle = defineType({
  name: "sectionStyle",
  title: "Look",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({ name: "bg", title: "Background", type: "string", options: { list: bgOptions } }),
    defineField({ name: "image", title: "Background photo", type: "altImage", description: "Page headers: the full-width photo behind the heading." }),
    defineField({ name: "overlay", title: "Darken the photo (0-1)", type: "number", validation: (r) => r.min(0).max(1) }),
    color("heading", "Heading colour"),
    color("text", "Text colour"),
    color("link", "Link colour"),
    color("divider", "Divider bar colour"),
    color("frame", "Photo frame colour"),
    defineField({ name: "align", title: "Heading alignment", type: "string", options: { list: ["left", "center"], layout: "radio" } }),
    defineField({ name: "headingAbove", title: "Heading above the photo and text (instead of beside the photo)", type: "boolean" }),
  ],
});

export const pageHero = defineType({
  name: "pageHero",
  title: "Page header",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Small label above the heading", type: "string" }),
    defineField({ name: "heading", title: "Heading (H1)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "highlight", title: "Words of the heading shown in blue", type: "string", description: "Must match part of the heading exactly." }),
    defineField({ name: "text", title: "Intro", type: "richText" }),
    defineField({ name: "image", title: "Photo", type: "altImage" }),
    defineField({ name: "badges", title: "Small tags under the intro", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "ctas", title: "Buttons", type: "array", of: [defineArrayMember({ type: "cta" })], description: "First button = main button. The phone number button is added automatically.", validation: (r) => r.max(2) }),
    defineField({ name: "rotator", title: "Typed words under the heading", type: "array", of: [defineArrayMember({ type: "string" })], description: "Home page: the animal names typed one after another." }),
    defineField({ name: "rotatorSuffix", title: "Word after the typed words", type: "string", description: "e.g. Removal" }),
    defineField({ name: "style", title: "Look", type: "sectionStyle" }),
  ],
});

export const card = defineType({
  name: "card",
  title: "Card",
  type: "object",
  fields: [
    defineField({ name: "icon", type: "icon" }),
    defineField({ name: "number", title: "Step number", type: "string", description: "e.g. 01" }),
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "subtitle", title: "Small label under the title", type: "string" }),
    defineField({ name: "text", type: "richText" }),
    defineField({ name: "image", type: "altImage" }),
    defineField({ name: "href", title: "Link (optional)", type: "string" }),
    defineField({ name: "accent", title: "Left border", type: "string", options: { list: ["blue", "navy"], layout: "radio" } }),
  ],
  preview: { select: { title: "title", subtitle: "subtitle", media: "image" } },
});

export const objectTypes = [seo, altImage, icon, cta, table, richText, sectionStyle, pageHero, card];
