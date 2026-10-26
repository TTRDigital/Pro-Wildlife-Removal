import type { AreasSection, Location, PlacePage, Section, Service, ServicePlace } from "@/lib/types";

/** Where a generated link list goes: before the FAQ, else before a closing call band, else at the end. */
function insert(sections: Section[], extra: Section): Section[] {
  let at = sections.findIndex((s) => s._type === "faqSection");
  if (at < 0) at = sections.at(-1)?._type === "ctaSection" ? sections.length - 1 : sections.length;
  return [...sections.slice(0, at), extra, ...sections.slice(at)];
}

export const placePath = (p: ServicePlace) => `/services/${p.service}/${p.place}/`;

/** An animal page with a "By city" list of its place pages (cities, then counties). */
export function withPlacesOf(service: Service, places: PlacePage[]): Service {
  const mine = places.filter((p) => p.service === service.slug);
  if (!mine.length) return service;
  const group = (kind: ServicePlace["placeKind"], title: string) => {
    const items = mine
      .filter((p) => p.placeKind === kind)
      .sort((a, b) => a.placeName.localeCompare(b.placeName))
      .map((p) => ({ label: p.placeName, href: `/${p.path}/` }));
    return items.length ? [{ title, items }] : [];
  };
  const section: AreasSection = {
    _type: "areasSection",
    _key: "by-city",
    eyebrow: "By city",
    heading: `${service.title} near you`,
    groups: [...group("city", "Cities"), ...group("county", "Counties")],
  };
  return { ...service, sections: insert(service.sections, section) };
}

/** Counties that share a border, for ordering "nearby" places outside the page's own county. */
const NEIGHBOURS: Record<string, string[]> = {
  Citrus: ["Marion", "Sumter", "Hernando"],
  Hernando: ["Citrus", "Sumter", "Pasco"],
  Hillsborough: ["Pinellas", "Pasco", "Polk"],
  Marion: ["Citrus", "Sumter"],
  Pasco: ["Hernando", "Hillsborough", "Pinellas", "Sumter", "Polk"],
  Pinellas: ["Hillsborough", "Pasco"],
  Polk: ["Hillsborough", "Pasco", "Sumter"],
  Sumter: ["Marion", "Citrus", "Hernando", "Pasco", "Polk"],
};

/**
 * An animal-by-place page with two link lists before its FAQ (Ben, TTR-846):
 * "More in <place>": the other animal pages for the same place, then that place's city or county page;
 * "<Animal> nearby": the same animal in the county and up to 3 places close by (same county first).
 */
export function withPlaceLinks<T extends { sections: Section[] }>(page: T, self: PlacePage, places: PlacePage[], services: Service[], locations: Location[]): T {
  const title = (slug: string) => services.find((s) => s.slug === slug)?.title ?? slug;
  const link = (p: PlacePage) => ({ label: `${title(p.service)} in ${p.placeName}`, href: `/${p.path}/` });
  const others = places.filter((p) => p.path !== self.path);
  const countyName = self.placeKind === "county" ? self.placeName.replace(/ County$/, "") : self.county;
  const sections: Section[] = [];

  // Every other service we offer, here (Kia): this place's page for it where there is one, else the service page.
  const here = services
    .filter((s) => s.group === "removal" && s.slug !== self.service)
    .map((s) => {
      const page = others.find((p) => p.service === s.slug && p.location && p.location === self.location);
      return page ? link(page) : { label: s.title, href: `/services/${s.slug}/` };
    });
  const home = locations.find((l) => l.path === self.location);
  if (home) here.push({ label: `Wildlife removal in ${home.name}`, href: `/${home.path}/` });
  if (here.length)
    sections.push({ _type: "areasSection", _key: "more-here", eyebrow: "More here", heading: `More in ${self.placeName}`, groups: [{ items: here }] });

  const same = others.filter((p) => p.service === self.service);
  const countyOf = (p: PlacePage) => (p.placeKind === "county" ? p.placeName.replace(/ County$/, "") : p.county);
  const inCounty = (p: PlacePage) => countyOf(p) === countyName;
  const border = NEIGHBOURS[countyName ?? ""] ?? [];
  const distance = (p: PlacePage) => {
    const i = border.indexOf(countyOf(p) ?? "");
    return (i < 0 ? 100 : i * 2) + (p.placeKind === "county" ? 0 : 1);
  };
  const county = self.placeKind === "city" ? same.find((p) => p.placeKind === "county" && inCounty(p)) : undefined;
  const near = [
    ...same.filter((p) => p.placeKind === "city" && inCounty(p)),
    ...same.filter((p) => !inCounty(p)).sort((a, b) => distance(a) - distance(b)),
  ].slice(0, 3);
  const nearby = [...(county ? [county] : []), ...near].map(link);
  if (self.placeKind === "city" && !county) {
    const c = locations.find((l) => l.kind === "county" && l.name === `${countyName} County`);
    if (c) nearby.unshift({ label: `Wildlife removal in ${c.name}`, href: `/${c.path}/` });
  }
  if (nearby.length)
    sections.push({ _type: "areasSection", _key: "nearby", eyebrow: "Nearby", heading: `${title(self.service)} nearby`, groups: [{ items: nearby }] });

  return { ...page, sections: sections.reduce(insert, page.sections) };
}

/** A city or county page with a "Services here" list of the animal pages for that place. */
export function withServicesHere(location: Location, places: PlacePage[], services: Service[]): Location {
  const mine = places.filter((p) => p.location === location.path);
  // Every service we offer, in every place (Kia): the page for this place where there is one, else the service page.
  const items = services
    .filter((s) => s.group === "removal")
    .map((s) => {
      const here = mine.find((p) => p.service === s.slug);
      return { label: s.title, href: here ? `/${here.path}/` : `/services/${s.slug}/` };
    });
  if (!items.length) return location;
  const section: AreasSection = {
    _type: "areasSection",
    _key: "services-here",
    eyebrow: "Services here",
    heading: `Our services in ${location.name}`,
    groups: [{ items }],
  };
  return { ...location, sections: insert(location.sections, section) };
}
