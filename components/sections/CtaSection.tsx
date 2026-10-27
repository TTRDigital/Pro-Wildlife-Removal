import { Check, Phone } from "lucide-react";
import type { CtaSection as Cta, Rich, SiteSettings } from "@/lib/types";
import { images } from "@/lib/data/images";
import { Heading } from "@/components/ui/HighlightText";
import { RichText } from "@/components/ui/RichText";
import { Photo } from "@/components/ui/Photo";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";
import { RatingChip, perks } from "./PageHero";

const para = (text: string): Rich => [{ _type: "block", _key: "p", style: "normal", markDefs: [], children: [{ _type: "span", _key: "s", text, marks: [] }] }];

/**
 * Closing band on every page: deep navy with soft glows and a faint living logo,
 * heading with a blue phrase, short text, the phone number large, the service
 * area, and a white call card (Free Inspection, call button, perks, rating) or
 * the section's own photo on the right. The client takes requests by phone only.
 */
export function CtaSection({ section, settings }: { section?: Partial<Cta>; settings: SiteSettings }) {
  const heading = section?.heading || settings.defaultCta.heading;
  const highlight = section?.heading ? section.highlight : settings.defaultCta.highlight;
  const text = section?.text?.length ? section.text : section?.heading ? [] : para(settings.defaultCta.text);
  return (
    <section id="estimate" className="section on-navy relative isolate overflow-hidden bg-navy-2">
      {/* brand backdrop: soft glows and the living raccoon logo, faint (no photo, so the trucks don't repeat the hero's) */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-2 via-navy to-navy-3" />
      <span aria-hidden="true" className="absolute -top-32 -left-24 -z-10 h-96 w-96 rounded-full bg-blue/20 blur-3xl" />
      <span aria-hidden="true" className="absolute -right-24 -bottom-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-cta/15 blur-3xl" />
      <AnimatedLogo logo={images.logo} sizes="(min-width: 900px) 420px, 260px" className="pointer-events-none absolute right-[4%] bottom-[-18%] -z-10 h-[280px] opacity-[0.07] min-[900px]:right-[38%] min-[900px]:h-[440px]" />
      <div className="wrap grid items-center gap-9 min-[900px]:grid-cols-[55fr_45fr] min-[900px]:gap-14">
        <div data-reveal>
          <Heading text={heading} highlight={highlight} className="text-h2 font-extrabold tracking-[-0.02em] text-white" />
          <RichText value={text} className="mt-4" />
          <a href={settings.phoneHref} data-track="click_to_call" className="group mt-6 mb-3 inline-flex min-h-11 items-center gap-3.5 no-underline">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-cta text-white transition-transform duration-300 group-hover:scale-110">
              <Phone className="h-6 w-6" strokeWidth={2.25} aria-hidden="true" />
            </span>
            <span className="font-display text-[1.875rem] font-extrabold leading-tight tracking-[-0.5px] text-white md:text-[2.25rem]">{settings.phone}</span>
          </a>
          <p className="text-on-navy">{section?.area || settings.serviceAreaText}</p>
        </div>
        {!section?.image ? (
          <div className="rounded-[22px] bg-white p-6 text-center shadow-[0_30px_70px_-30px_rgb(0_0_0/0.7)] sm:p-8" data-reveal>
            <span className="tag-nudge mb-4 inline-flex rounded-md bg-cta px-2.5 py-1 font-display text-xs font-extrabold tracking-[1px] text-white uppercase">Free Inspection</span>
            <a
              href={settings.phoneHref}
              data-track="click_to_call"
              className="call-pulse inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-cta px-6 font-display text-lg font-bold text-white transition-colors hover:bg-cta-hover active:scale-[0.98]"
            >
              <Phone className="h-5 w-5 flex-none" strokeWidth={2.25} aria-hidden="true" />
              Call {settings.phone}
            </a>
            <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-2 font-display text-[0.9375rem] font-semibold text-navy">
                  <Check className="h-4 w-4 text-blue" strokeWidth={3} aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <RatingChip settings={settings} className="mt-4 justify-center" />
          </div>
        ) : (
          <div className="photo-live relative h-[260px] overflow-hidden rounded-[22px] min-[900px]:h-[400px]" data-reveal>
            <Photo image={section.image} sizes="(min-width: 900px) 45vw, 100vw" />
          </div>
        )}
      </div>
    </section>
  );
}
