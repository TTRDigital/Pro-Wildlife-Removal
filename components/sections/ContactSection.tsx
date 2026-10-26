import { Check, Mail, Phone } from "lucide-react";
import { images } from "@/lib/data/images";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";
import { Button } from "@/components/ui/Button";
import { RatingChip, perks } from "./PageHero";
import type { ContactSection as Contact, SiteSettings } from "@/lib/types";
import { real } from "@/lib/placeholders";
import { CtaRow, SectionHeader, SectionShell } from "./SectionShell";

/**
 * Call-only contact block (the client takes requests by phone and has no public street address):
 * a navy call panel (the number big, a ringing phone, the perks, the service area) beside the
 * name, number and email, and the rating. No visible hours (Ben, Oct 26).
 */
export function ContactSection({
  section: s,
  settings,
}: {
  section: Contact;
  settings: SiteSettings;
}) {
  const license = real(settings.license);
  const info = (
    <div className="card p-8" data-reveal>
      <p className="mb-5 font-display text-h3 font-semibold text-navy">
        {settings.name}
      </p>
      <ul className="grid gap-4">
        <li className="flex gap-3">
          <span className="ico h-10 w-10">
            <Phone className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </span>
          <div>
            <a
              href={settings.phoneHref}
              data-track="click_to_call"
              className="font-display text-lg font-bold text-navy hover:text-blue-deep"
            >
              {settings.phone}
            </a>
            {settings.tollFree ? (
              <p className="text-sm text-meta">{settings.tollFree}</p>
            ) : null}
          </div>
        </li>
        <li className="flex gap-3">
          <span className="ico h-10 w-10">
            <Mail className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </span>
          <a
            href={`mailto:${settings.email}`}
            className="self-center break-all font-semibold text-navy hover:text-blue-deep"
          >
            {settings.email}
          </a>
        </li>
      </ul>
      {license ? <p className="mt-5 text-sm text-meta">{license}</p> : null}
    </div>
  );
  return (
    <SectionShell tone={s.tone} id="contact">
      <SectionHeader
        eyebrow={s.eyebrow}
        heading={s.heading}
        highlight={s.highlight}
        intro={s.intro}
      />
      <div className="grid items-stretch gap-6 lg:grid-cols-[7fr_5fr] lg:gap-8">
        {/* the call panel: navy, the number big, a ringing phone */}
        <div
          className="relative isolate overflow-hidden rounded-[28px] bg-gradient-to-br from-navy via-navy-3 to-navy-2 p-7 text-white shadow-[0_40px_80px_-40px_rgb(14_42_71/0.6)] sm:p-10"
          data-reveal
        >
          <span
            aria-hidden="true"
            className="absolute -top-24 -right-24 -z-10 h-80 w-80 rounded-full bg-blue/25 blur-3xl"
          />
          <AnimatedLogo
            logo={images.logo}
            sizes="200px"
            className="pointer-events-none absolute -right-6 -bottom-8 -z-10 h-44 opacity-20 sm:h-56"
          />
          <span className="tag-nudge inline-flex rounded-md bg-cta px-2.5 py-1 font-display text-xs font-extrabold tracking-[1px] uppercase">
            Free Inspection
          </span>
          <a
            href={settings.phoneHref}
            data-track="click_to_call"
            className="group mt-5 flex items-center gap-4"
          >
            <span className="call-pulse flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-white text-cta sm:h-20 sm:w-20">
              <Phone
                className="phone-ring h-6 w-6 sm:h-9 sm:w-9"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </span>
            <span className="font-display text-[clamp(1.6rem,1.1rem+2.6vw,3.25rem)] leading-none font-extrabold whitespace-nowrap tracking-[-0.02em] group-hover:text-blue-light">
              {settings.phone}
            </span>
          </a>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {perks.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2 font-display text-[0.9375rem] font-semibold"
              >
                <Check
                  className="h-4 w-4 text-blue-light"
                  strokeWidth={3}
                  aria-hidden="true"
                />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-[520px] text-[0.95rem] text-on-navy">
            {settings.serviceAreaText}
          </p>
          <Button href={settings.phoneHref} className="mt-7 w-full sm:w-auto">
            Call {settings.phone}
          </Button>
        </div>
        <div className="flex flex-col gap-6">
          {info}
          <RatingChip settings={settings} className="self-start" />
        </div>
      </div>
      <CtaRow ctas={s.ctas} />
    </SectionShell>
  );
}
