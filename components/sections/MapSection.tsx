import { MapPin } from "lucide-react";
import type { SiteSettings } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { SectionShell } from "./SectionShell";
import { perks } from "./PageHero";

export type MapPlace = { name: string; kind: "county" | "city"; county?: string };

/** "Pinellas" or "Pinellas County" -> "Pinellas County, FL"; a city -> "Tampa, FL". */
function placeQuery(p: MapPlace) {
  const name = p.kind === "county" && !/county$/i.test(p.name) ? `${p.name} County` : p.name;
  return `${name}, FL`;
}

/**
 * The page's county or city on a map (Kia: every location page shows where it is), beside its
 * name, the perks and the call button. A Google map embed that loads only when scrolled near
 * (it sits low on the page), so it does not weigh on the first load.
 */
export function MapSection({ place, settings, tone = "tint" }: { place: MapPlace; settings: SiteSettings; tone?: "tint" | "white" }) {
  const q = placeQuery(place);
  const zoom = place.kind === "county" ? 9 : 12;
  const label = q.replace(/, FL$/, ", Florida");
  return (
    <SectionShell tone={tone}>
      <div className="grid items-center gap-8 lg:grid-cols-[5fr_7fr] lg:gap-12">
        <div data-reveal>
          <span className="icon-bob mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-3 text-blue-light shadow-[0_14px_26px_-12px_rgb(14_42_71/0.7)]">
            <MapPin className="h-7 w-7" strokeWidth={2.25} aria-hidden="true" />
          </span>
          <p className="eyebrow mb-3">Service area</p>
          <h2 className="text-h2 font-extrabold tracking-[-0.02em]">{label}</h2>
          {place.kind === "city" && place.county ? <p className="mt-2 font-display text-lg font-semibold text-meta">{/county$/i.test(place.county) ? place.county : `${place.county} County`}</p> : null}
          <ul className="mt-5 grid gap-2">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-2.5 font-display font-semibold text-navy">
                <span className="tick !mt-0">
                  <svg viewBox="0 0 24 24" className="h-[13px] w-[13px]" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Button href={settings.phoneHref} className="mt-7 w-full sm:w-auto">
            Call {settings.phone}
          </Button>
        </div>
        <div className="relative" data-reveal>
          <span aria-hidden="true" className="absolute -right-4 -bottom-4 h-full w-full rounded-[26px] bg-gradient-to-br from-blue/25 to-cta/20" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-tint shadow-[0_24px_50px_-28px_rgb(14_42_71/0.5)] ring-1 ring-navy/5">
            <iframe
              title={`Map of ${label}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=${zoom}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
