import { Clock, Mail, Phone } from "lucide-react";
import type { ContactSection as Contact, SiteSettings } from "@/lib/types";
import { real } from "@/lib/placeholders";
import { CtaRow, SectionHeader, SectionShell } from "./SectionShell";

/**
 * Call-only contact block (the client takes requests by phone, has no public street address and is open 24/7):
 * a big tap-to-call card with the hours and service area, beside the email, hours and county phone lines.
 */
export function ContactSection({ section: s, settings }: { section: Contact; settings: SiteSettings }) {
  const license = real(settings.license);
  const info = (
    <div className="card p-8" data-reveal>
      <h3 className="mb-5 font-display text-h3 font-semibold text-navy">{settings.name}</h3>
      <ul className="grid gap-4">
        <li className="flex gap-3">
          <span className="ico h-10 w-10">
            <Phone className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </span>
          <div>
            <a href={settings.phoneHref} data-track="click_to_call" className="font-display text-lg font-bold text-navy hover:text-blue-deep">
              {settings.phone}
            </a>
            {settings.tollFree ? <p className="text-sm text-meta">{settings.tollFree}</p> : null}
          </div>
        </li>
        <li className="flex gap-3">
          <span className="ico h-10 w-10">
            <Mail className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </span>
          <a href={`mailto:${settings.email}`} className="self-center break-all font-semibold text-navy hover:text-blue-deep">
            {settings.email}
          </a>
        </li>
        <li className="flex gap-3">
          <span className="ico h-10 w-10">
            <Clock className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </span>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 self-center">
            {settings.hours.map((h) => (
              <div key={h.label} className="contents">
                <dt className="font-semibold text-navy">{h.label}</dt>
                <dd>{h.value}</dd>
              </div>
            ))}
          </dl>
        </li>
      </ul>
      {license ? <p className="mt-5 text-sm text-meta">{license}</p> : null}
      {settings.countyLines.length ? (
        <>
          <h4 className="mt-7 mb-3 font-display text-base font-semibold text-navy">Local lines by county</h4>
          <ul className="grid gap-x-6 gap-y-1.5 text-[0.95rem] sm:grid-cols-2">
            {settings.countyLines.map((c) => (
              <li key={c.county} className="flex justify-between gap-3 border-b border-line-2 py-1">
                <span>{c.county}</span>
                <a href={`tel:+1${c.phone.replace(/\D/g, "")}`} className="font-semibold text-navy hover:text-blue-deep">
                  {c.phone}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
  return (
    <SectionShell tone={s.tone} id="contact">
      <SectionHeader eyebrow={s.eyebrow} heading={s.heading} highlight={s.highlight} intro={s.intro} />
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div className="card flex flex-col items-center p-8 text-center sm:p-10" data-reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[1.5px] text-blue-deep">Call us, open 24/7</p>
          <a
            href={settings.phoneHref}
            data-track="click_to_call"
            className="mt-3 inline-flex min-h-14 items-center gap-3 font-display text-[clamp(1.75rem,1.3rem+2vw,2.5rem)] font-bold text-navy hover:text-blue-deep"
          >
            <Phone className="h-8 w-8 flex-none" strokeWidth={2} aria-hidden="true" />
            {settings.phone}
          </a>
          {settings.hours.map((h) => (
            <p key={h.label} className="mt-2 font-semibold text-navy">
              {h.label} {h.value}
            </p>
          ))}
          <p className="mt-3 max-w-[460px] text-[0.95rem]">{settings.serviceAreaText}</p>
        </div>
        {info}
      </div>
      <CtaRow ctas={s.ctas} />
    </SectionShell>
  );
}
