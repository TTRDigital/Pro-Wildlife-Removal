import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ContactSection as Contact, SiteSettings } from "@/lib/types";
import { LeadForm } from "@/components/forms/LeadForm";
import { real } from "@/lib/placeholders";
import { CtaRow, SectionHeader, SectionShell } from "./SectionShell";

/** Contact details, office hours, county phone lines, map and (optionally) the estimate form. */
export function ContactSection({ section: s, settings }: { section: Contact; settings: SiteSettings }) {
  const a = settings.address;
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
            <MapPin className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </span>
          <address className="self-center not-italic">
            {a.street}
            <br />
            {a.city}, {a.region} {a.postalCode}
          </address>
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
      <div className={`grid items-start gap-8 ${s.form ? "lg:grid-cols-[1fr_1.15fr]" : "lg:grid-cols-2"}`}>
        {info}
        {s.form ? (
          <div id="estimate" className="card p-6 sm:p-8" data-reveal>
            <h3 className="mb-1 font-display text-h3 font-semibold text-navy">Request an inspection</h3>
            <p className="mb-6 text-[0.95rem]">Tell us what you are seeing or hearing and we will get back to you.</p>
            <LeadForm phone={settings.phone} phoneHref={settings.phoneHref} businessName={settings.name} />
          </div>
        ) : s.map && settings.mapEmbedUrl ? (
          <div className="card relative h-[380px] overflow-hidden lg:h-full lg:min-h-[460px]" data-reveal>
            <iframe title={`Map of ${settings.name}`} src={settings.mapEmbedUrl} className="absolute inset-0 h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        ) : null}
      </div>
      {s.form && s.map && settings.mapEmbedUrl ? (
        <div className="card relative mt-8 h-[360px] overflow-hidden" data-reveal>
          <iframe title={`Map of ${settings.name}`} src={settings.mapEmbedUrl} className="absolute inset-0 h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      ) : null}
      <CtaRow ctas={s.ctas} />
    </SectionShell>
  );
}
