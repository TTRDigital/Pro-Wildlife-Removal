import type { Rich } from "./types";

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);

type Span = { text?: string };
type Block = { _type?: string; style?: string; listItem?: string; children?: Span[] };

/** Plain text of a Portable Text body (paragraphs separated by blank lines). */
export function richText(body: Rich | undefined): string {
  return (body ?? [])
    .filter((b) => (b as Block)._type === "block")
    .map((b) => ((b as Block).children ?? []).map((c) => c.text ?? "").join(""))
    .join("\n\n")
    .trim();
}

export function formatDate(iso: string | null | undefined) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

export const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
