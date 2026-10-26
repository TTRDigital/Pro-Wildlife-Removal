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
  const self = places.find((p) => p.path === base.path);
  const location = self ? withPlaceLinks(base, self, places, services, locations) : withServicesHere(base, places, services);
  const path = `/${location.path}/`;
  return (
    <>
      <JsonLd data={locationSchema(location, path)} />
      <PageView
        page={location}
        settings={settings}
        path={path}
        map={location.kind === "region" ? undefined : { name: location.name, kind: location.kind === "county" ? "county" : "city", county: location.county }}
        crumbs={[
          { label: "Service Area", href: "/about-us/service-area/" },
          { label: location.name, href: path },
        ]}
      />
    </>
  );
}
