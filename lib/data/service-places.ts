import type { ServicePlace } from "../types";

/**
 * Every animal-by-place page (TTR-738), one line per page. The pages live in
 * lib/data/content/service-places/<service>/<place>.ts; a page is on the site
 * (route, sitemap, link lists, redirects from old per-city URLs) once it is listed here.
 */
export const fallbackServicePlaces: ServicePlace[] = [];
