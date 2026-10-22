import { Phone } from "lucide-react";
import type { CtaSection as Cta, Rich, SiteSettings } from "@/lib/types";
import { Heading } from "@/components/ui/HighlightText";
import { RichText } from "@/components/ui/RichText";
import { Photo } from "@/components/ui/Photo";
import { LeadForm } from "@/components/forms/LeadForm";

const para = (text: string): Rich => [{ _type: "block", _key: "p", style: "normal", markDefs: [], children: [{ _type: "span", _key: "s", text, marks: [] }] }];

/**
 * Navy closing band (pw-navy + pw-cta-grid): heading with a blue phrase,
 * short text, the phone number large, the service area, and a photo or
 * the estimate form on the right.
 */
export function CtaSection({ section, settings, form = false }: { section?: Partial<Cta>; settings: SiteSettings; form?: boolean }) {
  const heading = section?.heading || settings.defaultCta.heading;
  const highlight = section?.heading ? section.highlight : settings.defaultCta.highlight;
  const text = section?.text?.length ? section.text : section?.heading ? [] : para(settings.defaultCta.text);
  const showForm = form || section?.showForm || !section?.image;
  return (
    <section id="estimate" className="section on-navy bg-navy">
      <div className="wrap grid items-center gap-8 min-[900px]:grid-cols-[55fr_45fr] min-[900px]:gap-12">
        <div data-reveal>
          <Heading text={heading} highlight={highlight} className="text-h2 font-bold text-white" />
          <RichText value={text} className="mt-4" />
          <a href={settings.phoneHref} data-track="click_to_call" className="mt-6 mb-3 inline-flex min-h-11 items-center gap-3.5 no-underline">
            <Phone className="h-7 w-7 flex-none text-blue" strokeWidth={2} aria-hidden="true" />
            <span className="font-display text-[1.75rem] font-bold leading-tight tracking-[-0.5px] text-white md:text-[2.125rem]">{settings.phone}</span>
          </a>
          <p className="text-on-navy">{section?.area || settings.serviceAreaText}</p>
        </div>
        {showForm ? (
          <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-[0_24px_60px_-24px_rgb(0_0_0/0.5)] sm:p-8" data-reveal>
            <h3 className="mb-1 font-display text-h3 font-semibold text-navy">Request an inspection</h3>
            <p className="mb-6 text-[0.95rem]">Tell us what you are seeing or hearing and we will get back to you.</p>
            <LeadForm phone={settings.phone} phoneHref={settings.phoneHref} businessName={settings.name} compact />
          </div>
        ) : section?.image ? (
          <div className="relative h-[260px] overflow-hidden rounded-[var(--radius-card)] min-[900px]:h-[400px]" data-reveal>
            <Photo image={section.image} sizes="(min-width: 900px) 45vw, 100vw" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
