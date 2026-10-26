import { HelpCircle } from "lucide-react";
import type { AnswerSection as Answer } from "@/lib/types";
import type { IconName } from "@/lib/icons";
import { images } from "@/lib/data/images";
import { Heading } from "@/components/ui/HighlightText";
import { RichText } from "@/components/ui/RichText";
import { Icon } from "@/components/ui/Icon";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";
import { toneClass } from "./SectionShell";

/** An icon for each short fact, from its words; a check when nothing fits. */
function factIcon(text: string): IconName {
  const t = text.toLowerCase();
  if (/count|cit|area|town|florida/.test(t)) return "map-pin";
  if (/humane|legal|law|safe/.test(t)) return "shield-check";
  if (/seal|entry|exclu/.test(t)) return "home";
  if (/clean|sanit|guano|restor/.test(t)) return "spray";
  if (/inspect/.test(t)) return "search";
  if (/review|rated|star/.test(t)) return "star";
  if (/same|fast|day|hour/.test(t)) return "clock";
  return "badge-check";
}

/**
 * The short answer under the hero (what AI search quotes), as a two-part card: a navy panel
 * with the question as a big white heading and the living raccoon logo in the corner, then
 * the answer in a larger size and up to four facts as icon tiles. Stacked on phones.
 */
export function AnswerSection({ section: s }: { section: Answer }) {
  if (!s.text?.length) return null;
  return (
    <section className={`${toneClass(s.tone)} py-12 md:py-20`}>
      <div className="wrap">
        <div className="grid overflow-hidden rounded-[28px] border border-line bg-white shadow-[0_40px_80px_-40px_rgb(14_42_71/0.45)] lg:grid-cols-[5fr_7fr]" data-reveal>
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-navy via-navy-3 to-navy-2 p-6 pr-28 sm:p-10 lg:pr-10">
            <span aria-hidden="true" className="absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full bg-blue/25 blur-3xl" />
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-blue-light ring-1 ring-white/15">
              <HelpCircle className="h-6 w-6" strokeWidth={2.25} aria-hidden="true" />
            </span>
            {s.eyebrow ? <p className="mb-2 font-display text-xs font-bold tracking-[1.5px] text-blue-light uppercase">{s.eyebrow}</p> : null}
            {s.heading ? <Heading text={s.heading} highlight={s.highlight} className="max-w-[420px] text-[clamp(1.625rem,1.2rem+1.6vw,2.375rem)] leading-[1.12] font-extrabold tracking-[-0.02em] text-white" /> : null}
            <AnimatedLogo logo={images.logo} sizes="(min-width: 640px) 210px, 140px" className="pointer-events-none absolute -right-4 -bottom-6 -z-10 h-32 opacity-30 sm:h-48 lg:-right-4 lg:-bottom-6" />
          </div>
          <div className="p-7 sm:p-10">
            <RichText value={s.text} className="[&_p]:text-[1.0625rem] [&_p]:leading-[1.75] [&_p]:text-navy/85 md:[&_p]:text-[1.1875rem]" />
            {s.points?.length ? (
              <ul className={`mt-7 grid gap-3 ${s.points.length > 2 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
                {s.points.map((p, i) => (
                  <li key={p} data-reveal style={{ ["--i" as string]: i }} className="group flex items-center gap-3 rounded-2xl border border-line bg-tint-2 p-3.5 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-blue/30 sm:flex-col sm:items-start sm:gap-2.5 sm:p-4">
                    <span className="icon-bob flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-navy text-blue-light">
                      <Icon name={factIcon(p)} className="h-5 w-5" />
                    </span>
                    <span className="font-display text-[0.9375rem] leading-snug font-bold text-navy">{p}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
