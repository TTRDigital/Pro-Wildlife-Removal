import type { Location, SiteSettings } from "@/lib/types";
import { getPlacePages, getServices } from "@/lib/content";
import { withServicesHere } from "@/lib/place-links";
import { locationSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageView } from "./PageView";

/** A service-area page (county, city or rat-removal page). Each keeps its own text from the live site. */
export async function LocationView({ location: base, settings }: { location: Location; settings: SiteSettings }) {
  const [places, services] = await Promise.all([getPlacePages(), getServices()]);
  // "Services here": the animal-by-place pages for this city or county (TTR-738).
  const location = withServicesHere(base, places, services);
  const path = `/${location.path}/`;
  return (
    <>
      <JsonLd data={locationSchema(location, path)} />
      <PageView
        page={location}
        settings={settings}
        path={path}
        crumbs={[
          { label: "Service Area", href: "/about-us/service-area/" },
          { label: location.name, href: path },
        ]}
      />
    </>
  );
}
