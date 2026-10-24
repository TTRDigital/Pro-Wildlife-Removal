import type { CSSProperties } from "react";
import type { BgKey, ColorKey, Section, SectionStyle } from "@/lib/types";
import { slugify } from "@/lib/text";

/*
 * Colours of the old designs, taken from the live pages. Sections pass their
 * colours to CSS as custom properties (--bg, --h heading, --t text, --l link,
 * --d divider bar, --f photo frame); globals.css (.o-*, .r-*) uses them.
 */

export const BG: Record<BgKey, string> = {
  navy: "#173a5a",
  blue: "#519dce",
  beige: "#ebe7e4",
  white: "#ffffff",
  light: "#fafafa",
  ice: "#e3f5ff",
  dark: "#0f0f0f",
};

export const FG: Record<ColorKey, string> = {
  beige: "#ebe7e4",
  blue: "#519dce",
  black: "#000000",
  white: "#ffffff",
  charcoal: "#222222",
  navy: "#173a5a",
  grey: "#7a7a7a",
  slate: "#788094",
  ink: "#0c0c23",
  red: "#ff0000",
  orange: "#ce6802",
};

const dark = (bg: BgKey) => bg === "navy" || bg === "blue" || bg === "dark";

/** Old theme (2019): defaults per background when the live page set no colour. */
const classicDefaults: Record<"dark" | "light", Required<Pick<SectionStyle, "heading" | "text" | "divider" | "frame">>> = {
  dark: { heading: "beige", text: "beige", divider: "blue", frame: "white" },
  light: { heading: "navy", text: "grey", divider: "blue", frame: "navy" },
};

/** Links the live page coloured white on beige/white are unreadable; they get navy instead. */
function linkColor(style: SectionStyle, bg: BgKey): string | undefined {
  if (!style.link) return undefined;
  if (!dark(bg) && (style.link === "white" || style.link === "beige")) return FG.navy;
  return FG[style.link];
}

export function classicVars(style: SectionStyle | undefined, fallbackBg: BgKey = "beige"): CSSProperties {
  const s = style ?? {};
  const bg = s.bg ?? fallbackBg;
  const d = classicDefaults[dark(bg) ? "dark" : "light"];
  const text = s.text ?? d.text;
  const link = linkColor(s, bg);
  return {
    "--bg": BG[bg],
    "--h": FG[s.heading ?? d.heading],
    "--t": FG[text],
    "--l": link ?? "inherit",
    // Links in text are always underlined, not told apart by colour alone (WCAG 1.4.1).
    "--lu": "underline",
    "--d": FG[s.divider ?? (bg === "blue" ? "beige" : d.divider)],
    "--f": FG[s.frame ?? d.frame],
  } as CSSProperties;
}

/** 2025 template: white/ice/light bands with charcoal headings and slate text; navy and dark bands with white text. */
export function refreshVars(style: SectionStyle | undefined, fallbackBg: BgKey = "white"): CSSProperties {
  const s = style ?? {};
  const bg = s.bg ?? fallbackBg;
  const onDark = dark(bg);
  return {
    "--bg": BG[bg],
    "--h": onDark ? "#ffffff" : FG[s.heading && s.heading !== "white" ? s.heading : "charcoal"],
    "--t": onDark ? "rgb(255 255 255 / 0.88)" : "#5d6578",
  } as CSSProperties;
}

/** Plain-text name of a section (its heading, or its first card or question). */
export function sectionName(s: Section): string | undefined {
  if ("heading" in s && s.heading) return s.heading;
  if (s._type === "cardsSection") return s.cards?.[0]?.title;
  if (s._type === "faqSection") return "Frequently Asked Questions";
  if (s._type === "reviewsSection") return "Reviews";
  if (s._type === "contactSection") return "Contact Us";
  return undefined;
}

/** One unique id per section, from its heading ("#bat-removal"), so every section can be linked to and indexed. */
export function sectionIds(sections: Section[], reserved: string[] = []): string[] {
  const used = new Set(reserved);
  return sections.map((s, i) => {
    const base =
      slugify(sectionName(s) ?? "")
        .slice(0, 60)
        .replace(/-+$/, "") || `section-${i + 1}`;
    let id = base;
    for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
    used.add(id);
    return id;
  });
}
