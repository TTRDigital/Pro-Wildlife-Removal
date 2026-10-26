import type { Location, SiteSettings } from "@/lib/types";
import { getLocations, getPlacePages, getServices } from "@/lib/content";
import { withPlaceLinks, withServicesHere } from "@/lib/place-links";
import { locationSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageView } from "./PageView";

/** A service-area page (county, city or rat-removal page). Each keeps its own text from the live site. */
export async function LocationView({ location: base, settings }: { location: Location; settings: SiteSettings }) {
  const [places, services, locations] = await Promise.all([getPlacePages(), getServices(), getLocations()]);
  // "Services here": the animal-by-place pages for this city or county (TTR-738).
  // An old rat page used as a place page gets the place pages' "More in" and "nearby" lists instead.
  const self = places.find((p) => p.path === base.path && !p.anchor);
  const location = self ? withPlaceLinks(base, self, places, services, locations) : withServicesHere(base, places, services);
  const path = `/${location.path}/`;
  // Service Areas > county (when it has a page) > city.
  const parent = location.kind === "city" ? locations.find((l) => l.kind === "county" && location.path.startsWith(`${l.path}/`)) : undefined;
  return (
    <>
      <JsonLd data={locationSchema(location, path)} />
      <PageView
        page={location}
        settings={settings}
        path={path}
        map={location.kind === "region" ? undefined : { name: location.name, kind: location.kind === "county" ? "county" : "city", county: location.county }}
        crumbs={[
          { label: "Service Areas", href: "/service-areas/" },
          ...(parent ? [{ label: parent.name, href: `/${parent.path}/` }] : []),
          { label: location.name, href: path },
        ]}
      />
    </>
  );
}
