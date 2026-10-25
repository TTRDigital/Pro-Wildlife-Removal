"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import type { CountyLine, Img } from "@/lib/types";
import { SocialIcon } from "@/components/ui/SocialIcon";

export type NavLink = { label: string; href: string; group?: string };
export type NavItem = { label: string; href: string; children?: NavLink[] };

/** Sub-links in their groups (e.g. Counties, Cities), in order; links without a group come last. */
function groups(links: NavLink[]) {
  const named = [...new Set(links.map((l) => l.group).filter((g): g is string => Boolean(g)))].map((g) => ({ title: g, links: links.filter((l) => l.group === g) }));
  const rest = links.filter((l) => !l.group);
  return { named, rest };
}

const telHref = (phone: string) => `tel:+1${phone.replace(/\D/g, "")}`;
const panel = "rounded-2xl border border-line bg-white p-2 shadow-[0_24px_50px_-20px_rgb(14_42_71/0.35)]";
const sublink = "block rounded-lg px-3 py-2.5 font-display text-[0.9375rem] leading-snug font-medium text-navy transition-colors hover:bg-tint hover:text-blue-deep";

/**
 * Site header, clean and light: on desktop a slim navy line (social links,
 * "Open 24/7", county phone lines) over a white bar with the logo, the
 * menu and the orange call button. On phones one white bar: logo, a round
 * call button and the menu button; the menu opens under it with the county
 * lines and a big call button. The header stays at the top while scrolling
 * and gains a shadow once the page moves.
 */
export function Header({ nav, phone, phoneHref, logo, social, countyLines }: { nav: NavItem[]; phone: string; phoneHref: string; logo: Img; social: { network: string; href: string }[]; countyLines: CountyLine[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // The menu item whose link (or one of its sub-links) best matches the page.
  const links = nav.flatMap((item) => [item.href, ...(item.children?.map((c) => c.href) ?? [])].map((href) => ({ item: item.label, href })));
  const current = links.filter((l) => (l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href))).sort((x, y) => y.href.length - x.href.length)[0]?.item;
  const active = (label: string) => label === current;

  return (
    <header className="sticky top-0 z-40">
      {/* Desktop top line */}
      <div className="hidden bg-navy-2 text-white/85 lg:block">
        <div className="wrap flex h-10 items-center justify-between font-display text-[0.8125rem] font-medium">
          <div className="flex items-center gap-4">
            <ul className="flex items-center">
              {social.map((s) => (
                <li key={s.network}>
                  <a href={s.href} target="_blank" rel="noopener" aria-label={`${s.network === "x" ? "X (Twitter)" : s.network[0].toUpperCase() + s.network.slice(1)}`} className="flex h-10 w-9 items-center justify-center hover:text-white">
                    <SocialIcon network={s.network} className="h-[15px] w-[15px]" />
                  </a>
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-2">
              <span className="live-dot !h-2 !w-2" aria-hidden="true" />
              Open 24/7
            </span>
          </div>
          {countyLines.length ? (
            <div className="group relative">
              <button type="button" className="flex h-10 items-center gap-1.5 hover:text-white" aria-haspopup="true">
                Locations
                <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
              </button>
              <div className="invisible absolute top-full right-0 z-50 w-80 pt-2 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <ul className={panel}>
                  {countyLines.map((c) => (
                    <li key={c.county} className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 hover:bg-tint">
                      {c.href ? (
                        <Link href={c.href} className="font-display text-sm font-medium text-navy hover:text-blue-deep">
                          {c.county}
                        </Link>
                      ) : (
                        <span className="font-display text-sm font-medium text-navy">{c.county}</span>
                      )}
                      <a href={telHref(c.phone)} data-track="click_to_call" className="font-display text-sm font-bold text-cta hover:underline">
                        {c.phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Main bar */}
      <div className={`relative border-b bg-white/95 backdrop-blur-md transition-shadow duration-300 ${scrolled || open ? "border-line shadow-[0_10px_30px_-18px_rgb(14_42_71/0.4)]" : "border-transparent"}`}>
        <div className="wrap flex h-16 items-center justify-between gap-4 lg:h-[76px]">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Pro Wildlife Removal, home">
            <Image src={logo.src} alt="Pro Wildlife Removal logo" width={logo.width ?? 480} height={logo.height ?? 442} priority className="h-[52px] w-auto lg:h-[60px]" sizes="66px" />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex h-11 items-center gap-1 rounded-lg px-3 font-display text-[0.9375rem] font-semibold transition-colors xl:px-3.5 ${active(item.label) ? "bg-tint text-blue-deep" : "text-navy hover:bg-tint-2 hover:text-blue-deep"}`}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                    {item.children ? <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" strokeWidth={2.25} aria-hidden="true" /> : null}
                  </Link>
                  {item.children?.some((c) => c.group) ? (
                    <div className="invisible absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3 opacity-0 transition-[opacity,transform] duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      {/* Two columns: the first group (counties), then the second (cities, in two short columns). */}
                      <div className={`grid w-[640px] grid-cols-[210px_1fr] gap-2 ${panel}`}>
                        {groups(item.children).named.map((g, gi) => (
                          <div key={g.title} className={gi ? "border-l border-line pl-2" : ""}>
                            <p className="px-3 pt-2 pb-1 font-display text-xs font-bold tracking-[1px] text-meta uppercase">{g.title}</p>
                            <ul className={gi ? "columns-2 gap-0" : ""}>
                              {g.links.map((c) => (
                                <li key={c.href} className="break-inside-avoid">
                                  <Link href={c.href} className={`${sublink} ${pathname === c.href ? "bg-tint" : ""}`}>
                                    {c.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <ul className="col-span-2 border-t border-line pt-1">
                          {groups(item.children).rest.map((c) => (
                            <li key={c.href}>
                              <Link href={c.href} className={`${sublink} font-semibold text-blue-deep`}>
                                {c.label} →
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : item.children ? (
                    <div className="invisible absolute top-full left-0 z-50 pt-3 opacity-0 transition-opacity duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <ul className={`w-[240px] ${panel}`}>
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} className={`${sublink} ${pathname === c.href ? "bg-tint" : ""}`}>
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

          <div className="flex items-center gap-2">
            <a
              href={phoneHref}
              data-track="click_to_call"
              className="call-pulse hidden min-h-11 items-center gap-2 rounded-xl bg-cta px-4 font-display text-[0.9375rem] font-bold text-white transition-colors hover:bg-cta-hover sm:inline-flex"
            >
              <Phone className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden="true" />
              {phone}
            </a>
            <a href={phoneHref} data-track="click_to_call" aria-label={`Call ${phone}`} className="call-pulse flex h-11 w-11 items-center justify-center rounded-full bg-cta text-white sm:hidden">
              <Phone className="h-5 w-5" strokeWidth={2.25} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy lg:hidden"
            >
              {open ? <X className="h-6 w-6" strokeWidth={2.25} aria-hidden="true" /> : <Menu className="h-6 w-6" strokeWidth={2.25} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Phone / tablet menu */}
        <nav id="mobile-menu" aria-label="Mobile" hidden={!open} className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-line bg-white lg:hidden">
          <ul className="wrap py-3">
            {nav.map((item) => (
              <li key={item.label} className="border-b border-line-2 last:border-b-0">
                {item.children ? (
                  <>
                    <div className="flex items-center justify-between">
                      <Link href={item.href} onClick={() => setOpen(false)} className="flex min-h-12 flex-1 items-center font-display text-lg font-semibold text-navy">
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setSub(sub === item.label ? null : item.label)}
                        aria-expanded={sub === item.label}
                        aria-label={`${item.label} submenu`}
                        className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${sub === item.label ? "bg-navy text-white" : "bg-tint text-navy"}`}
                      >
                        <ChevronDown className={`h-5 w-5 transition-transform ${sub === item.label ? "rotate-180" : ""}`} strokeWidth={2.25} aria-hidden="true" />
                      </button>
                    </div>
                    {sub === item.label ? (
                      <div className="pb-3">
                        {[...groups(item.children).named, { title: "", links: groups(item.children).rest }].map((g) =>
                          g.links.length ? (
                            <div key={g.title || "rest"}>
                              {g.title ? <p className="pt-3 pb-1 font-display text-xs font-bold tracking-[1px] text-meta uppercase">{g.title}</p> : null}
                              <ul className={g.title ? "grid grid-cols-2 gap-x-3" : ""}>
                                {g.links.map((c) => (
                                  <li key={c.href}>
                                    <Link href={c.href} onClick={() => setOpen(false)} className={`flex min-h-11 items-center font-display text-[0.9375rem] font-medium ${pathname === c.href ? "text-blue-deep" : "text-body"}`}>
                                      {c.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : null,
                        )}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <Link href={item.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center font-display text-lg font-semibold text-navy">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {countyLines.length ? (
            <div className="wrap pb-4">
              <p className="pb-2 font-display text-xs font-bold tracking-[1px] text-meta uppercase">Locations</p>
              <ul className="grid gap-1.5 rounded-2xl bg-tint-2 p-2">
                {countyLines.map((c) => (
                  <li key={c.county}>
                    <a href={telHref(c.phone)} data-track="click_to_call" className="flex min-h-11 items-center justify-between gap-3 rounded-xl px-3 hover:bg-white">
                      <span className="font-display text-[0.9375rem] font-medium text-navy">{c.county}</span>
                      <span className="font-display text-[0.9375rem] font-bold text-cta">{c.phone}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="wrap pb-6">
            <a href={phoneHref} data-track="click_to_call" className="flex min-h-[3.25rem] items-center justify-center gap-2.5 rounded-xl bg-cta font-display text-[1.0625rem] font-bold text-white">
              <Phone className="h-5 w-5" strokeWidth={2.25} aria-hidden="true" />
              Call {phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
