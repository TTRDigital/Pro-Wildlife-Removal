import { Check } from "lucide-react";
import type { AnswerSection as Answer } from "@/lib/types";
import { Heading } from "@/components/ui/HighlightText";
import { RichText } from "@/components/ui/RichText";
import { toneClass } from "./SectionShell";

/**
 * The short answer under the hero (what AI search quotes): a calm white
 * panel with a blue edge, the question as its heading, the answer in a
 * slightly larger size, and up to four short facts as check chips.
 */
export function AnswerSection({ section: s }: { section: Answer }) {
  if (!s.text?.length) return null;
  return (
    <section className={`${toneClass(s.tone)} py-10 md:py-14`}>
      <div className="wrap">
        <div className="relative mx-auto max-w-[920px] overflow-hidden rounded-[22px] border border-line bg-white p-6 shadow-[0_20px_50px_-30px_rgb(14_42_71/0.35)] sm:p-9" data-reveal>
          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-blue to-navy" />
          {s.eyebrow ? <p className="eyebrow mb-2">{s.eyebrow}</p> : null}
          {s.heading ? <Heading text={s.heading} highlight={s.highlight} className="font-display text-[1.375rem] leading-snug font-bold md:text-[1.625rem]" /> : null}
          <RichText value={s.text} className={`${s.heading ? "mt-3" : ""} [&_p]:text-[1.0625rem] md:[&_p]:text-[1.1875rem] [&_p]:leading-[1.7] [&_p]:text-navy/85`} />
          {s.points?.length ? (
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {s.points.map((p) => (
                <li key={p} className="inline-flex items-center gap-2 rounded-full bg-tint px-3.5 py-2 font-display text-sm font-semibold text-navy">
                  <Check className="h-4 w-4 flex-none text-blue-deep" strokeWidth={3} aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
