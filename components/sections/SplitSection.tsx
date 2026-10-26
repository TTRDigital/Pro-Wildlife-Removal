import { Check } from "lucide-react";
import type { SplitSection as Split } from "@/lib/types";
import { Heading } from "@/components/ui/HighlightText";
import { RichText } from "@/components/ui/RichText";
import { Photo } from "@/components/ui/Photo";
import { CtaRow, SectionShell } from "./SectionShell";
import { TextColumns } from "./ProseSection";

/** Photo beside copy: eyebrow, h2, short paragraphs, check list, button (pw-split). */
export function SplitSection({ section: s }: { section: Split }) {
  const left = s.imageSide !== "right";
  const checks = s.checklist?.length ? (
    <ul className="mt-6 grid gap-2.5">
      {s.checklist.map((c) => (
        <li
          key={c}
          className="flex items-start gap-3 rounded-xl bg-tint-2 px-4 py-3 font-display text-[1.0625rem] leading-[1.6] text-navy/90"
        >
          <span className="tick">
            <Check
              className="h-[13px] w-[13px]"
              strokeWidth={3}
              aria-hidden="true"
            />
          </span>
          {c}
        </li>
      ))}
    </ul>
  ) : null;
  // Without a photo, the text gets the two-column text layout instead of half a row.
  if (!s.image)
    return (
      <TextColumns
        tone={s.tone}
        eyebrow={s.eyebrow}
        heading={s.heading}
        highlight={s.highlight}
        body={s.body}
        ctas={s.ctas}
      >
        {checks}
      </TextColumns>
    );
  return (
    <SectionShell tone={s.tone}>
      <div
        className={`grid items-center gap-8 min-[900px]:gap-12 ${left ? "min-[900px]:grid-cols-[45fr_55fr]" : "min-[900px]:grid-cols-[55fr_45fr]"}`}
      >
        {s.image ? (
          <div
            className={`photo-live relative h-[240px] overflow-hidden rounded-[22px] shadow-[0_24px_50px_-28px_rgb(14_42_71/0.5)] sm:h-[320px] min-[900px]:h-[460px] ${left ? "" : "min-[900px]:order-2"}`}
            data-reveal
          >
            <Photo image={s.image} sizes="(min-width: 900px) 45vw, 100vw" />
          </div>
        ) : null}
        <div data-reveal>
          {s.eyebrow ? <p className="eyebrow mb-3">{s.eyebrow}</p> : null}
          {s.heading ? (
            <Heading
              text={s.heading}
              highlight={s.highlight}
              className="text-h2 font-extrabold tracking-[-0.02em]"
            />
          ) : null}
          <RichText
            value={s.body}
            className={`prose-rows ${s.heading ? "mt-4" : ""}`}
          />
          {checks}
          <CtaRow ctas={s.ctas} align="left" className="mt-8" />
        </div>
      </div>
    </SectionShell>
  );
}
