import type { FaqSection as Faqs } from "@/lib/types";
import { RichText } from "@/components/ui/RichText";
import { JsonLd } from "@/components/ui/JsonLd";
import { richText } from "@/lib/text";
import { CtaRow, SectionHeader, SectionShell } from "./SectionShell";

/**
 * FAQ list from the design (pw-faq): native <details>, so answers work
 * without JavaScript and stay readable to search engines. The first one
 * starts open. Adds FAQPage schema.
 */
export function FaqSection({ section: s }: { section: Faqs }) {
  if (!s.items?.length) return null;
  return (
    <SectionShell tone={s.tone}>
      <SectionHeader eyebrow={s.eyebrow} heading={s.heading} highlight={s.highlight} intro={s.intro} />
      <div className="mx-auto w-full max-w-[860px]">
        {s.items.map((f, i) => (
          <details key={`${f.question}-${i}`} open={i === 0} className="group border-b border-line first:border-t">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-[22px] font-display text-lg font-semibold leading-[1.35] text-navy marker:hidden md:text-h3 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[inherit] font-semibold">{f.question}</h3>
              <span aria-hidden="true" className="-mt-1.5 h-3.5 w-3.5 flex-none rotate-45 border-b-2 border-r-2 border-blue transition-transform duration-200 group-open:mt-1 group-open:rotate-[225deg]" />
            </summary>
            <div className="pb-6">
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
