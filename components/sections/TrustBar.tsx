import type { SiteSettings, TrustBarSection } from "@/lib/types";
import { Icon } from "@/components/ui/Icon";

/** The trust points from the client-approved Google Ads landing pages; used under the hero when a page has no trust bar of its own. */
export function defaultTrust(settings: SiteSettings): TrustBarSection {
  return {
    _type: "trustBar",
    _key: "trust",
    items: [
      ...(settings.googleRating ? [{ icon: "star" as const, label: `${settings.googleRating} Google Rating` }] : []),
      { icon: "clock", label: "Same-Day Service" },
      { icon: "search", label: "Free Inspection" },
      { icon: "shield-check", label: "Sealed for Good" },
    ],
  };
}

/** Navy strip of four trust points under the hero: icon in a soft circle and a short label, 2x2 on phones, one row on desktop. */
export function TrustBar({ section }: { section: TrustBarSection }) {
  return (
    <div className="bg-navy py-7 md:py-9">
      <ul className="wrap grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 md:gap-6">
        {section.items.map((it, i) => (
          <li key={it.label} data-reveal style={{ ["--i" as string]: i }} className="flex min-w-0 flex-col items-center gap-2.5 text-center">
            <span className={`flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 ${it.icon === "star" ? "text-star" : "text-blue-light"}`}>
              <Icon name={it.icon} className="h-[22px] w-[22px]" />
            </span>
            <span className="font-display text-[0.8125rem] leading-snug font-bold tracking-[0.5px] text-white uppercase md:text-sm">{it.label}</span>
            {it.text ? <span className="text-sm leading-snug text-on-navy">{it.text}</span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
