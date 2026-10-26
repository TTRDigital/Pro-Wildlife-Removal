import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import type { Service, SiteSettings } from "@/lib/types";
import { SocialIcon } from "@/components/ui/SocialIcon";

const linkCls = "inline-flex min-h-11 items-center py-0.5 text-white/75 transition-colors hover:text-white md:min-h-9";

/** Footer: deep navy, the logo with the service area (no street address, the client's wish), the call block, link columns and the legal line. */
export function Footer({ settings, services }: { settings: SiteSettings; services: Service[] }) {
  const removal = services.filter((s) => s.group === "removal");
  const company = [
    { label: "About Us", href: "/about-us/" },
    { label: "How We Work", href: "/how-we-work/" },
    { label: "Service Area", href: "/about-us/service-area/" },
    { label: "Blog", href: "/blog/" },
    { label: "Contact Us", href: "/contact-us/" },
  ];
  const legal = [
    { label: "Terms of Service", href: "/terms-of-service/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Sitemap", href: "/sitemap/" },
  ];
  return (
    <footer className="bg-navy-2 font-display text-[0.9375rem] text-white/75">
      <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr] lg:gap-14 lg:py-16">
        <div>
          <Link href="/" aria-label={`${settings.name}, home`} className="inline-flex items-center gap-3">
            {settings.logo ? <Image src={settings.logo.src} alt="Pro Wildlife Removal" width={settings.logo.width ?? 480} height={settings.logo.height ?? 442} className="h-[68px] w-auto" sizes="74px" /> : null}
            <span className="font-display text-lg font-bold text-white">{settings.name}</span>
          </Link>
          <p className="mt-5 max-w-[420px] leading-relaxed">{settings.serviceAreaText}</p>
          <div className="mt-6 inline-flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 p-4">
            <a href={settings.phoneHref} data-track="click_to_call" className="inline-flex min-h-11 items-center gap-2.5 text-2xl font-extrabold tracking-[-0.5px] text-white hover:text-blue-light">
              <Phone className="h-5 w-5 text-cta" strokeWidth={2.5} aria-hidden="true" />
              {settings.phone}
            </a>
          </div>
        </div>
        <nav aria-label="Services">
          <h2 className="mb-3 text-xs font-bold tracking-[1.5px] text-white uppercase">Services</h2>
          <ul className="grid grid-cols-2 gap-x-6">
            {removal.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className={linkCls}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company">
          <h2 className="mb-3 text-xs font-bold tracking-[1.5px] text-white uppercase">Company</h2>
          <ul className="grid grid-cols-2 gap-x-6 lg:grid-cols-1">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col items-center gap-3 py-5 text-sm md:flex-row md:justify-between">
          <ul className="flex items-center gap-1">
            {settings.social.map((s) => (
              <li key={s.network}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.network === "x" ? "X (Twitter)" : s.network[0].toUpperCase() + s.network.slice(1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
                >
                  <SocialIcon network={s.network} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 text-center">
            <li className="w-full md:w-auto">
              {/* Year from the build: every publish rebuilds the site. */}
              &copy; {new Date().getFullYear()} {settings.name}
            </li>
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              Website by{" "}
              <a href="https://ttrdigitalmarketing.com/" target="_blank" rel="noopener" className={`${linkCls} underline-offset-2 hover:underline`}>
                TTR Digital Marketing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
