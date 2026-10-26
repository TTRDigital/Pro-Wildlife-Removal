import type { AreasSection, Location, Section, Service, ServicePlace } from "@/lib/types";

/** Where a generated link list goes: before the FAQ, else before a closing call band, else at the end. */
function insert(sections: Section[], extra: Section): Section[] {
  let at = sections.findIndex((s) => s._type === "faqSection");
  if (at < 0) at = sections.at(-1)?._type === "ctaSection" ? sections.length - 1 : sections.length;
  return [...sections.slice(0, at), extra, ...sections.slice(at)];
}

export const placePath = (p: ServicePlace) => `/services/${p.service}/${p.place}/`;

/** An animal page with a "By city" list of its place pages (cities, then counties). */
export function withPlacesOf(service: Service, places: ServicePlace[]): Service {
  const mine = places.filter((p) => p.service === service.slug);
  if (!mine.length) return service;
  const group = (kind: ServicePlace["placeKind"], title: string) => {
    const items = mine.filter((p) => p.placeKind === kind).map((p) => ({ label: p.placeName, href: placePath(p) }));
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

/** A city or county page with a "Services here" list of the animal pages for that place. */
export function withServicesHere(location: Location, places: ServicePlace[], services: Service[]): Location {
  const mine = places.filter((p) => p.location === location.path);
  if (!mine.length) return location;
  const title = (p: ServicePlace) => services.find((s) => s.slug === p.service)?.title ?? p.service;
  const section: AreasSection = {
    _type: "areasSection",
    _key: "services-here",
    eyebrow: "Services here",
    heading: `Our services in ${location.name}`,
    groups: [{ items: mine.map((p) => ({ label: title(p), href: placePath(p) })) }],
  };
  return { ...location, sections: insert(location.sections, section) };
}
