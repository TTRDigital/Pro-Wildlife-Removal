import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import type { Service, SiteSettings } from "@/lib/types";
import { SocialIcon } from "@/components/ui/SocialIcon";

/** The live site's footer: #222 band with the framed logo, hours and service links, then the bar with social links, legal links and the phone number. */
export function Footer({ settings, services }: { settings: SiteSettings; services: Service[] }) {
  const removal = services.filter((s) => s.group === "removal");
  const half = Math.ceil(removal.length / 2);
  const a = settings.address;
  const legal = [
    { label: "Terms of Service", href: "/terms-of-service/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Sitemap", href: "/sitemap/" },
    { label: "Blog", href: "/blog/" },
  ];
  return (
    <footer className="bg-charcoal text-[#b5b5b5]">
      <div className="mx-auto grid w-full max-w-[1100px] gap-8 px-5 py-8 sm:grid-cols-2 lg:grid-cols-[180px_1fr_1.6fr] lg:gap-10">
        <div>
          <Link href="/" aria-label={`${settings.name}, home`} className="inline-block border-[3px] border-white p-1">
            {settings.logo ? <Image src={settings.logo.src} alt="Pro Wildlife Removal" width={settings.logo.width ?? 480} height={settings.logo.height ?? 442} className="h-[130px] w-auto" sizes="141px" /> : null}
          </Link>
        </div>
        <div>
          <h2 className="mb-5 font-old text-lg text-white">Hours of Operation</h2>
          <ul className="grid gap-1 font-sans text-base">
            {settings.hours.map((h) => (
              <li key={h.label}>
                {h.label}: {h.value}
              </li>
            ))}
          </ul>
          <address className="mt-4 font-sans text-sm leading-relaxed not-italic">
            {a.street}
            <br />
            {a.city}, {a.region} {a.postalCode}
          </address>
        </div>
        <nav aria-label="Services" className="sm:col-span-2 lg:col-span-1">
          <h2 className="mb-5 font-old text-lg text-white">Services</h2>
          <div className="grid grid-cols-2 gap-x-8 font-sans text-base">
            {[removal.slice(0, half), removal.slice(half)].map((col, i) => (
              <ul key={i} className="grid content-start gap-1">
                {col.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}/`} className="hover:text-white hover:underline">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </nav>
      </div>

      <div className="mx-auto w-full max-w-[1430px] px-1.5 pb-1.5">
        <div className="flex flex-col items-center justify-between gap-3 bg-[#1b1b1b] px-5 py-3 text-white sm:flex-row md:px-[75px]">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-old text-sm">
            <ul className="flex items-center gap-1">
              {settings.social.map((s) => (
                <li key={s.network}>
                  <a href={s.href} target="_blank" rel="noopener" aria-label={s.network === "x" ? "X (Twitter)" : s.network[0].toUpperCase() + s.network.slice(1)} className="flex h-8 w-8 items-center justify-center hover:text-old-blue">
                    <SocialIcon network={s.network} className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
            <p>
              {legal.map((l) => (
                <span key={l.href}>
                  <Link href={l.href} className="hover:underline">
                    {l.label}
                  </Link>
                  {" | "}
                </span>
              ))}
              Website by:{" "}
              <a href="https://ttrdigitalmarketing.com/" target="_blank" rel="noopener" className="hover:underline">
                TTR Digital Marketing
              </a>
            </p>
          </div>
          <a href={settings.phoneHref} data-track="click_to_call" className="flex min-h-11 items-center gap-2 font-old text-xl font-semibold text-white hover:text-old-blue">
            <Phone className="h-5 w-5 fill-current" strokeWidth={0} aria-hidden="true" />
            {settings.phone.replace(/[()]/g, "").replace(" ", "-")}
          </a>
        </div>
      </div>
    </footer>
  );
}
