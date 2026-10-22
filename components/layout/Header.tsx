"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import type { CountyLine, Cta, Img } from "@/lib/types";
import { SocialIcon } from "@/components/ui/SocialIcon";

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

/**
 * Site header, as on the bat-removal page: navy top bar (social links,
 * county phone lines, phone), the main bar with the logo, menu and the
 * inspection button, and the "Serving Tampa Bay" strip. Sticky main bar;
 * full-screen menu on phones.
 */
export function Header({
  nav,
  cta,
  phone,
  phoneHref,
  logo,
  social,
  countyLines,
  announcement,
}: {
  nav: NavItem[];
  cta: Cta;
  phone: string;
  phoneHref: string;
  logo: Img;
  social: { network: string; href: string }[];
  countyLines: CountyLine[];
  announcement: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const active = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href.replace(/\/$/, "")));

  return (
    <>
      {/* Top bar */}
      <div className="hidden bg-navy text-white md:block">
        <div className="wrap flex h-11 items-center justify-between gap-6 text-sm">
          <ul className="flex items-center gap-4">
            {social.map((s) => (
              <li key={s.network}>
                <a href={s.href} target="_blank" rel="noopener" aria-label={s.network} className="text-white/85 hover:text-blue-light">
                  <SocialIcon network={s.network} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 font-display">
            {countyLines.length ? (
              <div className="group relative">
                <button type="button" className="inline-flex items-center gap-1.5 font-medium uppercase tracking-[0.06em] text-white/90 hover:text-white" aria-haspopup="true">
                  <MapPin className="h-4 w-4 text-blue-light" strokeWidth={2} aria-hidden="true" />
                  Locations
                  <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden="true" />
                </button>
                <div className="invisible absolute right-0 top-full z-50 w-72 pt-2 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="card overflow-hidden py-2 text-[0.9375rem] text-body">
                    {countyLines.map((c) => (
                      <li key={c.county} className="flex items-center justify-between gap-3 px-4 py-1.5">
                        {c.href ? (
                          <Link href={c.href} className="text-navy hover:text-blue-deep">
                            {c.county}
                          </Link>
                        ) : (
                          <span className="text-navy">{c.county}</span>
                        )}
                        <a href={`tel:+1${c.phone.replace(/\D/g, "")}`} data-track="click_to_call" className="font-semibold text-blue-deep hover:underline">
                          {c.phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
            <span className="h-4 w-px bg-white/40" aria-hidden="true" />
            <a href={phoneHref} data-track="click_to_call" className="inline-flex items-center gap-2 font-semibold text-white hover:text-blue-light">
              <Phone className="h-4 w-4 text-blue-light" strokeWidth={2} aria-hidden="true" />
              {phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
        <div className="wrap flex h-[76px] items-center justify-between gap-6 lg:h-[88px]">
          <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Pro Wildlife Removal, home">
            <Image src={logo.src} alt="" width={logo.width ?? 480} height={logo.height ?? 442} priority className="h-[58px] w-auto lg:h-[70px]" sizes="80px" />
            <span className="hidden font-display text-lg font-bold leading-tight text-navy sm:block xl:text-xl">
              Pro Wildlife
              <br />
              Removal
            </span>
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1 font-display text-[0.9375rem] font-semibold text-navy xl:gap-2">
              {nav.map((item) => (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 rounded-lg px-3 py-2.5 transition-colors hover:text-blue-deep ${active(item.href) ? "text-blue-deep" : ""}`}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                    {item.children ? <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" strokeWidth={2.25} aria-hidden="true" /> : null}
                  </Link>
                  {item.children ? (
                    <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <ul className={`card py-2 ${item.children.length > 9 ? "grid w-[520px] grid-cols-2" : "w-64"}`}>
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} className={`block px-4 py-2 text-[0.9375rem] font-medium hover:bg-tint hover:text-blue-deep ${pathname === c.href ? "text-blue-deep" : "text-navy"}`}>
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link href={cta.href} className="hidden min-h-11 items-center rounded-lg border-2 border-blue bg-blue px-5 font-display text-[0.9375rem] font-semibold text-white transition-colors hover:border-blue-hover hover:bg-blue-hover sm:inline-flex">
              {cta.label}
            </Link>
            <a href={phoneHref} data-track="click_to_call" aria-label={`Call ${phone}`} className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-navy text-navy md:hidden">
              <Phone className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white lg:hidden"
            >
              <Menu className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Announcement strip (pw-announce) */}
      <div className="bg-navy py-2.5 text-center font-display text-xs font-medium tracking-[0.4px] text-white">{announcement}</div>

      {/* Mobile menu */}
      <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" hidden={!open} className="fixed inset-0 z-[60] overflow-y-auto bg-white lg:hidden">
        <div className="wrap flex h-[76px] items-center justify-between border-b border-line">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
            <Image src={logo.src} alt="Pro Wildlife Removal" width={logo.width ?? 480} height={logo.height ?? 442} className="h-[54px] w-auto" sizes="60px" />
          </Link>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white">
            <X className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile" className="wrap py-4">
          <ul className="divide-y divide-line font-display text-lg font-semibold text-navy">
            {nav.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setSub(sub === item.label ? null : item.label)}
                      aria-expanded={sub === item.label}
                      className="flex min-h-14 w-full items-center justify-between"
                    >
                      {item.label}
                      <ChevronDown className={`h-5 w-5 text-blue transition-transform ${sub === item.label ? "rotate-180" : ""}`} strokeWidth={2.25} aria-hidden="true" />
                    </button>
                    {sub === item.label ? (
                      <ul className="mb-3 grid gap-0.5 border-l-2 border-blue pl-4 text-base font-medium">
                        <li>
                          <Link href={item.href} onClick={() => setOpen(false)} className="block py-2">
                            {item.label} overview
                          </Link>
                        </li>
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} onClick={() => setOpen(false)} className="block py-2">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : (
                  <Link href={item.href} onClick={() => setOpen(false)} className="flex min-h-14 items-center">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3">
            <Link href={cta.href} onClick={() => setOpen(false)} className="flex min-h-13 items-center justify-center rounded-lg bg-blue font-display font-semibold text-white">
              {cta.label}
            </Link>
            <a href={phoneHref} data-track="click_to_call" className="flex min-h-13 items-center justify-center gap-2 rounded-lg border-2 border-navy font-display font-semibold text-navy">
              <Phone className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              {phone}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
