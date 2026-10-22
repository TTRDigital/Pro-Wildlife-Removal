import { Check } from "lucide-react";
import type { SplitSection as Split } from "@/lib/types";
import { Heading } from "@/components/ui/HighlightText";
import { RichText } from "@/components/ui/RichText";
import { Photo } from "@/components/ui/Photo";
import { CtaRow, SectionShell } from "./SectionShell";

/** Photo beside copy: eyebrow, h2, short paragraphs, check list, button (pw-split). */
export function SplitSection({ section: s }: { section: Split }) {
  const left = s.imageSide !== "right";
  return (
    <SectionShell tone={s.tone}>
      <div className={`grid items-center gap-8 min-[900px]:gap-12 ${left ? "min-[900px]:grid-cols-[45fr_55fr]" : "min-[900px]:grid-cols-[55fr_45fr]"}`}>
        {s.image ? (
          <div className={`relative h-[260px] overflow-hidden rounded-[var(--radius-card)] min-[900px]:h-[440px] ${left ? "" : "min-[900px]:order-2"}`} data-reveal>
            <Photo image={s.image} sizes="(min-width: 900px) 45vw, 100vw" />
          </div>
        ) : null}
        <div data-reveal>
          {s.eyebrow ? <p className="eyebrow mb-3">{s.eyebrow}</p> : null}
          {s.heading ? <Heading text={s.heading} highlight={s.highlight} className="text-h2 font-bold" /> : null}
          <RichText value={s.body} className={s.heading ? "mt-4" : ""} />
          {s.checklist?.length ? (
            <ul className="mt-6 grid gap-3.5">
              {s.checklist.map((c) => (
                <li key={c} className="flex items-start gap-3 font-display text-[1.0625rem] leading-[1.7] text-body">
                  <span className="tick">
                    <Check className="h-[13px] w-[13px]" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          ) : null}
          <CtaRow ctas={s.ctas} align="left" className="mt-8" />
        </div>
      </div>
    </SectionShell>
  );
}
