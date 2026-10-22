import type { Location, LocationsSection as Locs } from "@/lib/types";
import { AreasSection } from "./AreasSection";

/** Every service-area page, grouped by county. */
export function locationGroups(locations: Location[]) {
  const href = (l: Location) => `/${l.path}/`;
  const counties = locations.filter((l) => l.kind === "county");
  const byCounty = new Map<string, Location[]>();
  for (const l of locations) {
    if (l.kind === "county") continue;
    const key = l.county ? `${l.county} County` : "Central Florida";
    byCounty.set(key, [...(byCounty.get(key) ?? []), l]);
  }
  const names = [...new Set([...counties.map((c) => c.name), ...byCounty.keys()])].sort((a, b) => (a === "Central Florida" ? 1 : b === "Central Florida" ? -1 : a.localeCompare(b)));
  return names.map((name) => {
    const county = counties.find((c) => c.name === name);
    const items = (byCounty.get(name) ?? []).map((l) => ({ label: l.kind === "rat" ? `Rat removal: ${l.name}` : l.name, href: href(l) }));
    return { title: name, href: county ? href(county) : undefined, items: county ? [{ label: `Wildlife removal in ${name}`, href: href(county) }, ...items] : items };
  });
}

/** Every service-area page, grouped by county, in the design's county cards. */
export function LocationsSection({ section, locations }: { section: Locs; locations: Location[] }) {
  const groups = locationGroups(locations);
  return <AreasSection section={{ ...section, _type: "areasSection", groups }} />;
}
