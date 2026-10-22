import type { ProseSection as Prose } from "@/lib/types";
import { Heading } from "@/components/ui/HighlightText";
import { RichText } from "@/components/ui/RichText";
import { CtaRow, SectionShell } from "./SectionShell";

/** Heading and longer text in a readable column. Short text is centered like the design's section intros. */
export function ProseSection({ section: s }: { section: Prose }) {
  const words = (s.body ?? []).length;
  const center = s.align === "center" || words <= 2;
  return (
    <SectionShell tone={s.tone}>
      <div className={`mx-auto max-w-[860px] ${center ? "text-center" : ""}`} data-reveal>
        {s.eyebrow ? <p className="eyebrow mb-3">{s.eyebrow}</p> : null}
        {s.heading ? <Heading text={s.heading} highlight={s.highlight} className="text-h2 font-bold" /> : null}
        <RichText value={s.intro} className="mt-4" />
        <RichText value={s.body} className={`${s.heading ? "mt-5" : ""} ${center ? "[&_ul]:text-left [&_ol]:text-left" : ""}`} />
        <CtaRow ctas={s.ctas} align={center ? "center" : "left"} className="mt-8" />
      </div>
    </SectionShell>
  );
}
