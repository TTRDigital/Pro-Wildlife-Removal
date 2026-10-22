import Link from "next/link";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Service, SiteSettings } from "@/lib/types";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { real } from "@/lib/placeholders";

/** Footer from the bat-removal page (logo, hours, services, legal links, phone) in the new navy palette. */
export function Footer({ settings, services }: { settings: SiteSettings; services: Service[] }) {
  const a = settings.address;
  const license = real(settings.license);
  const removal = services.filter((s) => s.group === "removal");
  return (
    <footer className="on-navy bg-navy-2 text-on-navy">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.3fr_1.2fr] lg:gap-12 lg:py-16">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label={`${settings.name}, home`}>
            {settings.logo ? <Image src={settings.logo.src} alt="" width={settings.logo.width ?? 480} height={settings.logo.height ?? 442} className="h-24 w-auto rounded-xl bg-white p-2" sizes="110px" /> : null}
          </Link>
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed">{settings.serviceAreaText}</p>
          <ul className="mt-5 flex gap-3">
            {settings.social.map((s) => (
              <li key={s.network}>
                <a href={s.href} target="_blank" rel="noopener" aria-label={s.network} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-blue">
                  <SocialIcon network={s.network} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 flex items-center gap-2 font-display text-base font-semibold text-white">
            <Clock className="h-4 w-4 text-blue-light" strokeWidth={2} aria-hidden="true" />
            Hours of Operation
          </h2>
          <dl className="grid gap-1.5 text-[0.95rem]">
            {settings.hours.map((h) => (
              <div key={h.label}>
                <dt className="inline font-semibold text-white">{h.label}: </dt>
                <dd className="inline">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="mb-4 font-display text-base font-semibold text-white">Services</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[0.95rem]">
            {removal.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="hover:text-white hover:underline">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services/" className="font-semibold text-white hover:underline">
                All services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-base font-semibold text-white">Contact</h2>
          <ul className="grid gap-3 text-[0.95rem]">
            <li className="flex gap-2.5">
              <Phone className="mt-1 h-4 w-4 flex-none text-blue-light" strokeWidth={2} aria-hidden="true" />
              <a href={settings.phoneHref} data-track="click_to_call" className="font-display text-lg font-bold text-white hover:underline">
                {settings.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-1 h-4 w-4 flex-none text-blue-light" strokeWidth={2} aria-hidden="true" />
              <a href={`mailto:${settings.email}`} className="break-all hover:text-white hover:underline">
                {settings.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPin className="mt-1 h-4 w-4 flex-none text-blue-light" strokeWidth={2} aria-hidden="true" />
              <span>
                {a.street}, {a.city}, {a.region} {a.postalCode}
              </span>
            </li>
            <li>
              <Link href="/about-us/service-area/" className="font-semibold text-white hover:underline">
                Service area
              </Link>
            </li>
          </ul>
          {license ? <p className="mt-4 text-sm">{license}</p> : null}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-3 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {settings.name}
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            <li>
              <Link href="/terms-of-service/" className="hover:text-white hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy/" className="hover:text-white hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/sitemap/" className="hover:text-white hover:underline">
                Sitemap
              </Link>
            </li>
            <li>
              <Link href="/blog/" className="hover:text-white hover:underline">
                Blog
              </Link>
            </li>
            <li>
              Website by:{" "}
              <a href="https://ttrdigitalmarketing.com/" target="_blank" rel="noopener" className="hover:text-white hover:underline">
                TTR Digital Marketing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
