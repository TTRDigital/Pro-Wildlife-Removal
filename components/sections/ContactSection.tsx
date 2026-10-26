import { Mail, Phone } from "lucide-react";
import type { ContactSection as Contact, SiteSettings } from "@/lib/types";
import { real } from "@/lib/placeholders";
import { CtaRow, SectionHeader, SectionShell } from "./SectionShell";

/**
 * Call-only contact block (the client takes requests by phone and has no public street address):
 * a big tap-to-call card with the service area, beside the email. No visible hours (Ben, Oct 26).
 */
export function ContactSection({ section: s, settings }: { section: Contact; settings: SiteSettings }) {
  const license = real(settings.license);
  const info = (
    <div className="card p-8" data-reveal>
      <p className="mb-5 font-display text-h3 font-semibold text-navy">{settings.name}</p>
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
      </ul>
      {license ? <p className="mt-5 text-sm text-meta">{license}</p> : null}
    </div>
  );
  return (
    <SectionShell tone={s.tone} id="contact">
      <SectionHeader eyebrow={s.eyebrow} heading={s.heading} highlight={s.highlight} intro={s.intro} />
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div className="card flex flex-col items-center p-8 text-center sm:p-10" data-reveal>
          <a
            href={settings.phoneHref}
            data-track="click_to_call"
            className="inline-flex min-h-14 items-center gap-3 font-display text-[clamp(1.75rem,1.3rem+2vw,2.5rem)] font-bold text-navy hover:text-blue-deep"
          >
            <Phone className="h-8 w-8 flex-none" strokeWidth={2} aria-hidden="true" />
            {settings.phone}
          </a>
          <p className="mt-3 max-w-[460px] text-[0.95rem]">{settings.serviceAreaText}</p>
        </div>
        {info}
      </div>
      <CtaRow ctas={s.ctas} />
    </SectionShell>
  );
}
