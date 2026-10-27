import type { FaqSection as Faqs } from "@/lib/types";
import { RichText } from "@/components/ui/RichText";
import { JsonLd } from "@/components/ui/JsonLd";
import { richText } from "@/lib/text";
import { CtaRow, SectionHeader, SectionShell } from "./SectionShell";

/**
 * FAQ list as rounded cards with a plus that turns into a minus: native <details>, so answers work
 * without JavaScript and stay readable to search engines. The first one
 * starts open. Adds FAQPage schema.
 */
export function FaqSection({ section: s }: { section: Faqs }) {
  if (!s.items?.length) return null;
  return (
    <SectionShell tone={s.tone}>
      <SectionHeader eyebrow={s.eyebrow} heading={s.heading} highlight={s.highlight} intro={s.intro} />
      <div className="mx-auto grid w-full max-w-[860px] gap-3">
        {s.items.map((f, i) => (
          <details key={`${f.question}-${i}`} open={i === 0} className="group rounded-2xl border border-line bg-white shadow-[0_2px_10px_rgb(14_42_71/0.04)] transition-[border-color,box-shadow] duration-300 open:border-blue/30 open:shadow-[0_14px_30px_-18px_rgb(14_42_71/0.35)]">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 marker:hidden md:px-6 md:py-5 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[1.0625rem] leading-snug font-bold text-navy md:text-lg">{f.question}</h3>
              <span aria-hidden="true" className="relative flex h-9 w-9 flex-none items-center justify-center rounded-full bg-tint text-blue-deep transition-[background-color,color,transform] duration-300 group-open:rotate-180 group-open:bg-navy group-open:text-white">
                <span className="absolute h-0.5 w-3.5 rounded bg-current" />
                <span className="absolute h-3.5 w-0.5 rounded bg-current transition-transform duration-300 group-open:scale-y-0" />
              </span>
            </summary>
            <div className="px-5 pb-5 md:px-6 md:pb-6">
              <RichText value={f.answer} />
            </div>
          </details>
        ))}
      </div>
      <CtaRow ctas={s.ctas} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: s.items.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: richText(f.answer) } })),
        }}
      />
    </SectionShell>
  );
}
