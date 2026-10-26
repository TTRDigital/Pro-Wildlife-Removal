import type { PlacePage, ServicePlace } from "../types";
import { raccoonRemovalTampa } from "./content/service-places/raccoon-removal/tampa-fl.ts";
import { ratRemovalTampa } from "./content/service-places/rat-removal/tampa-fl.ts";
import { batRemovalTampa } from "./content/service-places/bat-removal/tampa-fl.ts";
import { squirrelRemovalTampa } from "./content/service-places/squirrel-removal/tampa-fl.ts";
import { batRemovalPolkCounty } from "./content/service-places/bat-removal/polk-county-fl.ts";
import { ratRemovalPinellasCounty } from "./content/service-places/rat-removal/pinellas-county-fl.ts";
import { raccoonRemovalPinellasCounty } from "./content/service-places/raccoon-removal/pinellas-county-fl.ts";
import { squirrelRemovalPinellasCounty } from "./content/service-places/squirrel-removal/pinellas-county-fl.ts";
import { snakeRemovalPinellasCounty } from "./content/service-places/snake-removal/pinellas-county-fl.ts";
import { batRemovalPinellasCounty } from "./content/service-places/bat-removal/pinellas-county-fl.ts";
import { opossumRemovalPinellasCounty } from "./content/service-places/opossum-removal/pinellas-county-fl.ts";
import { armadilloRemovalPinellasCounty } from "./content/service-places/armadillo-removal/pinellas-county-fl.ts";
import { beeRemovalPinellasCounty } from "./content/service-places/bee-removal/pinellas-county-fl.ts";
import { deadAnimalRemovalPinellasCounty } from "./content/service-places/dead-animal-removal/pinellas-county-fl.ts";
import { raccoonRemovalClearwater } from "./content/service-places/raccoon-removal/clearwater-fl.ts";
import { snakeRemovalClearwater } from "./content/service-places/snake-removal/clearwater-fl.ts";
import { beeRemovalClearwater } from "./content/service-places/bee-removal/clearwater-fl.ts";
import { deadAnimalRemovalClearwater } from "./content/service-places/dead-animal-removal/clearwater-fl.ts";

/*
 * Animal x place pages (TTR-738), served at /services/<service>/<place>/ by
 * Wade's route. Writers add one import and one line per page; keep the list
 * grouped by place. The 9 rat-in-city pages stay in locations.ts at their URLs.
 */
export const fallbackServicePlaces: ServicePlace[] = [
  // Tampa (Cole)
  ratRemovalTampa,
  batRemovalTampa,
  squirrelRemovalTampa,
  raccoonRemovalTampa,
  // Polk County (Owen)
  batRemovalPolkCounty,
  // Pinellas County (Rhea)
  ratRemovalPinellasCounty,
  raccoonRemovalPinellasCounty,
  squirrelRemovalPinellasCounty,
  snakeRemovalPinellasCounty,
  batRemovalPinellasCounty,
  opossumRemovalPinellasCounty,
  armadilloRemovalPinellasCounty,
  beeRemovalPinellasCounty,
  deadAnimalRemovalPinellasCounty,
  // Clearwater (Rhea)
  raccoonRemovalClearwater,
  snakeRemovalClearwater,
  beeRemovalClearwater,
  deadAnimalRemovalClearwater,
];

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
  // Clearwater (Rhea)
];
