"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import type { CountyLine, Img } from "@/lib/types";
import { SocialIcon } from "@/components/ui/SocialIcon";

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

/**
 * The live site's header: navy top bar (social links, county phone lines,
 * phone) and the blue menu bar with the logo overlapping both. Both bars
 * stay at the top while scrolling. Phones get a menu button that opens the
 * menu under the bar.
 */
export function Header({ nav, phone, phoneHref, logo, social, countyLines }: { nav: NavItem[]; phone: string; phoneHref: string; logo: Img; social: { network: string; href: string }[]; countyLines: CountyLine[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);

  // The menu item whose link (or one of its sub-links) best matches the page.
  const links = nav.flatMap((item) => [item.href, ...(item.children?.map((c) => c.href) ?? [])].map((href) => ({ item: item.label, href })));
  const current = links.filter((l) => (l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href))).sort((x, y) => y.href.length - x.href.length)[0]?.item;
  const active = (label: string) => label === current;

  return (
    <header className="sticky top-0 z-40">
      {/* Top bar */}
      <div className="bg-old-navy text-white">
        <div className="mx-auto flex h-8 w-full max-w-[1240px] items-center px-5 justify-center gap-6 font-sans text-[0.9375rem] md:h-[62px] md:justify-between md:text-base">
          <ul className="hidden items-center gap-3 md:flex">
            {social.map((s) => (
              <li key={s.network}>
                <a href={s.href} target="_blank" rel="noopener" aria-label={`${s.network === "x" ? "X (Twitter)" : s.network[0].toUpperCase() + s.network.slice(1)}`} className="flex h-8 w-8 items-center justify-center hover:text-old-blue">
                  <SocialIcon network={s.network} className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 md:gap-4">
            {countyLines.length ? (
              <div className="group relative">
                <button type="button" className="flex min-h-8 items-center uppercase hover:text-old-blue" aria-haspopup="true">
                  Locations
                </button>
                <div className="invisible absolute top-full left-1/2 z-50 w-72 -translate-x-1/2 pt-2 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 md:right-0 md:left-auto md:translate-x-0">
                  <ul className="bg-old-navy py-2 text-sm shadow-[0_6px_20px_rgb(0_0_0/0.3)]">
                    {countyLines.map((c) => (
                      <li key={c.county} className="flex items-center justify-between gap-3 px-4 py-1.5">
                        {c.href ? (
                          <Link href={c.href} className="uppercase hover:underline">
                            {c.county}
                          </Link>
                        ) : (
                          <span className="uppercase">{c.county}</span>
                        )}
                        <a href={`tel:+1${c.phone.replace(/\D/g, "")}`} data-track="click_to_call" className="font-semibold text-old-blue hover:underline">
                          {c.phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
            <span aria-hidden="true">|</span>
            <a href={phoneHref} data-track="click_to_call" className="flex min-h-8 items-center gap-1.5 hover:text-old-blue">
              <Phone className="h-4 w-4 fill-current" strokeWidth={0} aria-hidden="true" />
              {phone}
            </a>
          </div>
        </div>
      </div>

      {/* Menu bar */}
      {/* Darker than the brand blue so white menu text passes contrast (5.4:1; beige on #519dce was 2.4:1). */}
      <div className="relative bg-[#2f6f9f] shadow-[0_0_10px_rgb(0_0_0/0.5)]">
        <div className="relative mx-auto flex h-[75px] w-full max-w-[1240px] px-5 items-center justify-between md:h-[74px]">
          <Link href="/" className="relative z-10 block shrink-0 md:absolute md:-top-7 md:left-5" aria-label="Pro Wildlife Removal, home">
            <Image src={logo.src} alt="Pro Wildlife Removal logo" width={logo.width ?? 480} height={logo.height ?? 442} priority className="h-[70px] w-auto md:h-[150px]" sizes="(min-width: 768px) 163px, 76px" />
          </Link>

          <nav aria-label="Main" className="ml-auto hidden lg:block">
            <ul className="flex font-sans text-base tracking-[0.6px] uppercase">
              {nav.map((item) => (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex h-[74px] items-center gap-1.5 px-[15px] text-white transition-colors hover:text-beige ${active(item.label) ? "bg-old-navy text-white" : ""}`}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                    {item.children ? <ChevronDown className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" /> : null}
                  </Link>
                  {item.children ? (
                    <div className="invisible absolute top-full left-0 z-50 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <ul className="w-[200px] bg-old-navy py-1 text-xs tracking-[0.6px]">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} className={`block px-[15px] py-3 leading-snug text-white hover:bg-white/10 ${pathname === c.href ? "bg-white/10" : ""}`}>
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

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-12 w-12 items-center justify-center text-white lg:hidden"
          >
            {open ? <X className="h-9 w-9" strokeWidth={2.5} aria-hidden="true" /> : <Menu className="h-9 w-9" strokeWidth={2.5} aria-hidden="true" />}
          </button>
        </div>

        {/* Phone / tablet menu */}
        <nav id="mobile-menu" aria-label="Mobile" hidden={!open} className="max-h-[calc(100vh-110px)] overflow-y-auto bg-old-navy lg:hidden">
          <ul className="o-wrap py-2 font-sans text-base tracking-[0.6px] text-white uppercase">
            {nav.map((item) => (
              <li key={item.label} className="border-b border-white/10 last:border-b-0">
                {item.children ? (
                  <>
                    <div className="flex items-center justify-between">
                      <Link href={item.href} onClick={() => setOpen(false)} className="flex min-h-12 flex-1 items-center">
                        {item.label}
                      </Link>
                      <button type="button" onClick={() => setSub(sub === item.label ? null : item.label)} aria-expanded={sub === item.label} aria-label={`${item.label} submenu`} className="flex h-12 w-12 items-center justify-center">
                        <ChevronDown className={`h-5 w-5 transition-transform ${sub === item.label ? "rotate-180" : ""}`} strokeWidth={2.25} aria-hidden="true" />
                      </button>
                    </div>
                    {sub === item.label ? (
                      <ul className="pb-2 pl-4 text-sm">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} onClick={() => setOpen(false)} className="flex min-h-11 items-center">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : (
                  <Link href={item.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
