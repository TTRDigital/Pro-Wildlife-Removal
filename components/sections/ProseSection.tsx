import type { ReactNode } from "react";
import type { IconName } from "@/lib/icons";
import type { ProseSection as Prose } from "@/lib/types";
import { Heading } from "@/components/ui/HighlightText";
import { RichText } from "@/components/ui/RichText";
import { Icon } from "@/components/ui/Icon";
import { CtaRow, SectionShell } from "./SectionShell";

/** An icon for the section from its heading, so a long text has a visual anchor. */
function proseIcon(heading = ""): IconName {
  const t = heading.toLowerCase();
  if (/rule|law|legal|permit|fwc/.test(t)) return "balance";
  if (/why|danger|risk|health|matter|problem/.test(t)) return "shield-check";
  if (/cost|price|pay/.test(t)) return "balance";
  if (/clean|sanit|restor/.test(t)) return "spray";
  if (/seal|exclu|entry|prevent/.test(t)) return "exclusion";
  if (/sign|tell|identif/.test(t)) return "search";
  if (/area|count|cit|where/.test(t)) return "map-pin";
  if (/repair|service|solution/.test(t)) return "wrench";
  return "badge-check";
}

/** Heading and longer text (TextColumns); short text is a centred callout card. */
export function ProseSection({ section: s }: { section: Prose }) {
  // Text can arrive empty once placeholders are hidden: then there is nothing to show.
  if (!s.heading && !s.intro?.length && !s.body?.length) return null;
  const words = (s.body ?? []).length;
  const center = s.align === "center" || words <= 2;
  const card = s.tone === "tint" ? "bg-white" : "bg-tint-2";

  if (center)
    return (
      <SectionShell tone={s.tone}>
        <div
          className={`relative mx-auto max-w-[900px] overflow-hidden rounded-[28px] border border-line px-6 py-10 text-center shadow-[0_30px_60px_-40px_rgb(14_42_71/0.45)] sm:px-12 ${card}`}
          data-reveal
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue via-blue-light to-cta"
          />
          {s.heading ? (
            <span className="icon-bob mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-3 text-blue-light">
              <Icon name={proseIcon(s.heading)} className="h-6 w-6" />
            </span>
          ) : null}
          {s.eyebrow ? <p className="eyebrow mb-3">{s.eyebrow}</p> : null}
          {s.heading ? (
            <Heading
              text={s.heading}
              highlight={s.highlight}
              className="text-h2 font-extrabold tracking-[-0.02em]"
            />
          ) : null}
          <RichText value={s.intro} className="mt-4" />
          <RichText
            value={s.body}
            className={`prose-rows ${s.heading ? "mt-5" : ""} [&_ol]:text-left [&_ul]:text-left`}
          />
          <CtaRow ctas={s.ctas} align="center" className="mt-8" />
        </div>
      </SectionShell>
    );

  return (
    <TextColumns
      tone={s.tone}
      eyebrow={s.eyebrow}
      heading={s.heading}
      highlight={s.highlight}
      intro={s.intro}
      body={s.body}
      ctas={s.ctas}
    />
  );
}

/**
 * A longer text in two columns on desktop: eyebrow, heading and an icon tile on the left (they
 * stay in view while the text scrolls), the text in a card on the right with check-row bullets.
 * Shared by text sections and by photo-and-text sections that have no photo.
 */
export function TextColumns({
  tone,
  eyebrow,
  heading,
  highlight,
  intro,
  body,
  ctas,
  children,
}: Pick<
  Prose,
  "tone" | "eyebrow" | "heading" | "highlight" | "intro" | "body" | "ctas"
> & { children?: ReactNode }) {
  // No heading: just the text card, centred.
  if (!heading && !eyebrow)
    return (
      <SectionShell tone={tone}>
        <div
          className="relative mx-auto max-w-[860px] overflow-hidden rounded-[24px] border border-line bg-white p-6 shadow-[0_30px_60px_-40px_rgb(14_42_71/0.45)] sm:p-9"
          data-reveal
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue via-blue-light to-cta"
          />
          <RichText value={intro} />
          <RichText
            value={body}
            className={`prose-rows ${intro?.length ? "mt-4" : ""}`}
          />
          {children}
          <CtaRow ctas={ctas} align="left" className="mt-8" />
        </div>
      </SectionShell>
    );
  return (
    <SectionShell tone={tone}>
      <div className="grid gap-8 lg:grid-cols-[4fr_8fr] lg:gap-14">
        <div className="lg:sticky lg:top-36 lg:self-start" data-reveal>
          {heading ? (
            <span className="icon-bob mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-3 text-blue-light shadow-[0_14px_26px_-12px_rgb(14_42_71/0.7)]">
              <Icon name={proseIcon(heading)} className="h-7 w-7" />
            </span>
          ) : null}
          {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
          {heading ? (
            <Heading
              text={heading}
              highlight={highlight}
              className="text-h2 font-extrabold tracking-[-0.02em]"
            />
          ) : null}
          <RichText value={intro} className="mt-4" />
          <span
            aria-hidden="true"
            className="mt-6 hidden h-1 w-16 rounded-full bg-gradient-to-r from-blue to-cta lg:block"
          />
        </div>
        <div
          className="relative overflow-hidden rounded-[24px] border border-line bg-white p-6 shadow-[0_30px_60px_-40px_rgb(14_42_71/0.45)] sm:p-9"
          data-reveal
        >
          <RichText value={body} className="prose-rows" />
          {children}
          <CtaRow ctas={ctas} align="left" className="mt-8" />
        </div>
      </div>
    </SectionShell>
  );
}
