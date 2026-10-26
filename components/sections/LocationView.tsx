import type { Location, SiteSettings } from "@/lib/types";
import { locationSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageView } from "./PageView";

/** A service-area page (county, city or rat-removal page). Each keeps its own text from the live site. */
export function LocationView({ location, settings }: { location: Location; settings: SiteSettings }) {
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
