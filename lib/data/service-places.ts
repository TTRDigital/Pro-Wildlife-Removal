import type { PlacePage, ServicePlace } from "../types";

/**
 * Every animal-by-place page (TTR-738), one line per page. The pages live in
 * lib/data/content/service-places/<service>/<place>.ts; a page is on the site
 * (route, sitemap, link lists, redirects from old per-city URLs) once it is listed here.
 */
export const fallbackServicePlaces: ServicePlace[] = [];

/**
 * Place pages that already exist at their own URL and keep it (Ben, Oct 26, 2026): the rat-removal-in-<city> pages
 * are the rat pages for these cities. They appear in the rat page's "By city" list and each city's "Services here".
 */
export const existingPlacePages: PlacePage[] = [
  { service: "rat-removal", placeName: "Brooksville", placeKind: "city", county: "Hernando", path: "about-us/service-area/expert-rat-removal-in-brooksville-fl", location: "about-us/service-area/wildlife-removal-service-in-brooksville-fl" },
  { service: "rat-removal", placeName: "Clearwater", placeKind: "city", county: "Pinellas", path: "about-us/service-area/rat-removal-services-clearwater-fl", location: "about-us/service-area/wildlife-removal-clearwater-fl" },
  { service: "rat-removal", placeName: "Dade City", placeKind: "city", county: "Pasco", path: "about-us/service-area/rat-removal-dade", location: "about-us/service-area/wildlife-removal-dade-city" },
  { service: "rat-removal", placeName: "Dunedin", placeKind: "city", county: "Pinellas", path: "about-us/service-area/rat-removal-services-dunedin-fl", location: "about-us/service-area/wildlife-removal-dunedin" },
  { service: "rat-removal", placeName: "Hudson", placeKind: "city", county: "Pasco", path: "about-us/service-area/rat-removal-services-hudson-fl", location: "about-us/service-area/hudson-wildlife-removal" },
  { service: "rat-removal", placeName: "New Port Richey", placeKind: "city", county: "Pasco", path: "rat-removal-new-port-richey", location: "about-us/service-area/wildlife-removal-new-port-richey" },
  { service: "rat-removal", placeName: "Safety Harbor", placeKind: "city", county: "Pinellas", path: "about-us/service-area/rat-removal-safety-harbor", location: "about-us/service-area/wildlife-removal-safety-harbor" },
  { service: "rat-removal", placeName: "Spring Hill", placeKind: "city", county: "Hernando", path: "about-us/service-area/rat-removal-services-spring-hill-fl", location: "about-us/service-area/wildlife-removal-spring-hill-fl" },
  { service: "rat-removal", placeName: "St. Petersburg", placeKind: "city", county: "Pinellas", path: "about-us/service-area/rat-removal-services-st-petersburg-fl", location: "about-us/service-area/wildlife-removal-services-saint-petersburg-fl" },
];
