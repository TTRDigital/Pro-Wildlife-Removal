import type { PlacePage, ServicePlace } from "../types";
import { raccoonRemovalTampa } from "./content/service-places/raccoon-removal/tampa-fl.ts";
import { ratRemovalTampa } from "./content/service-places/rat-removal/tampa-fl.ts";
import { batRemovalTampa } from "./content/service-places/bat-removal/tampa-fl.ts";
import { squirrelRemovalTampa } from "./content/service-places/squirrel-removal/tampa-fl.ts";
import { batRemovalPolkCounty } from "./content/service-places/bat-removal/polk-county-fl.ts";
import { raccoonRemovalPolkCounty } from "./content/service-places/raccoon-removal/polk-county-fl.ts";
import { ratRemovalPolkCounty } from "./content/service-places/rat-removal/polk-county-fl.ts";
import { squirrelRemovalPolkCounty } from "./content/service-places/squirrel-removal/polk-county-fl.ts";
import { batRemovalHillsboroughCounty } from "./content/service-places/bat-removal/hillsborough-county-fl.ts";
import { raccoonRemovalHillsboroughCounty } from "./content/service-places/raccoon-removal/hillsborough-county-fl.ts";
import { ratRemovalHillsboroughCounty } from "./content/service-places/rat-removal/hillsborough-county-fl.ts";
import { squirrelRemovalHillsboroughCounty } from "./content/service-places/squirrel-removal/hillsborough-county-fl.ts";
import { ratRemovalPalmHarbor } from "./content/service-places/rat-removal/palm-harbor-fl.ts";
import { raccoonRemovalPalmHarbor } from "./content/service-places/raccoon-removal/palm-harbor-fl.ts";
import { ratRemovalPinellasPark } from "./content/service-places/rat-removal/pinellas-park-fl.ts";
import { ratRemovalPascoCounty } from "./content/service-places/rat-removal/pasco-county-fl.ts";
import { batRemovalPascoCounty } from "./content/service-places/bat-removal/pasco-county-fl.ts";
import { raccoonRemovalPascoCounty } from "./content/service-places/raccoon-removal/pasco-county-fl.ts";
import { squirrelRemovalPascoCounty } from "./content/service-places/squirrel-removal/pasco-county-fl.ts";
import { raccoonRemovalNewPortRichey } from "./content/service-places/raccoon-removal/new-port-richey-fl.ts";
import { raccoonRemovalSpringHill } from "./content/service-places/raccoon-removal/spring-hill-fl.ts";
import { raccoonRemovalBrooksville } from "./content/service-places/raccoon-removal/brooksville-fl.ts";
import { batRemovalBrooksville } from "./content/service-places/bat-removal/brooksville-fl.ts";
import { squirrelRemovalBrooksville } from "./content/service-places/squirrel-removal/brooksville-fl.ts";
import { batRemovalLandOLakes } from "./content/service-places/bat-removal/land-o-lakes-fl.ts";
import { batRemovalHudson } from "./content/service-places/bat-removal/hudson-fl.ts";
import { raccoonRemovalLandOLakes } from "./content/service-places/raccoon-removal/land-o-lakes-fl.ts";
import { raccoonRemovalHernandoCounty } from "./content/service-places/raccoon-removal/hernando-county-fl.ts";
import { batRemovalHernandoCounty } from "./content/service-places/bat-removal/hernando-county-fl.ts";
import { ratRemovalHernandoCounty } from "./content/service-places/rat-removal/hernando-county-fl.ts";
import { squirrelRemovalHernandoCounty } from "./content/service-places/squirrel-removal/hernando-county-fl.ts";
import { batRemovalTheVillages } from "./content/service-places/bat-removal/the-villages-fl.ts";
import { ratRemovalPinellasCounty } from "./content/service-places/rat-removal/pinellas-county-fl.ts";
import { batRemovalPinellasCounty } from "./content/service-places/bat-removal/pinellas-county-fl.ts";
import { raccoonRemovalPinellasCounty } from "./content/service-places/raccoon-removal/pinellas-county-fl.ts";
import { raccoonRemovalStPetersburg } from "./content/service-places/raccoon-removal/st-petersburg-fl.ts";
import { raccoonRemovalDunedin } from "./content/service-places/raccoon-removal/dunedin-fl.ts";

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
  ratRemovalPolkCounty,
  batRemovalPolkCounty,
  raccoonRemovalPolkCounty,
  squirrelRemovalPolkCounty,
  // Hillsborough County (Owen)
  ratRemovalHillsboroughCounty,
  batRemovalHillsboroughCounty,
  raccoonRemovalHillsboroughCounty,
  squirrelRemovalHillsboroughCounty,
  // Palm Harbor (Owen)
  ratRemovalPalmHarbor,
  raccoonRemovalPalmHarbor,
  // Pinellas Park (Owen)
  ratRemovalPinellasPark,
  // Pasco (Nia)
  ratRemovalPascoCounty,
  batRemovalPascoCounty,
  raccoonRemovalPascoCounty,
  squirrelRemovalPascoCounty,
  raccoonRemovalNewPortRichey,
  // Spring Hill (Nia)
  raccoonRemovalSpringHill,
  // Brooksville (Nia)
  batRemovalBrooksville,
  squirrelRemovalBrooksville,
  raccoonRemovalBrooksville,
  // Hudson (Nia)
  batRemovalHudson,
  // Land O' Lakes (Nia)
  batRemovalLandOLakes,
  raccoonRemovalLandOLakes,
  // Hernando County (Nia)
  ratRemovalHernandoCounty,
  batRemovalHernandoCounty,
  raccoonRemovalHernandoCounty,
  squirrelRemovalHernandoCounty,
  // The Villages (Nia)
  batRemovalTheVillages,
  // Pinellas County (Rhea)
  ratRemovalPinellasCounty,
  batRemovalPinellasCounty,
  raccoonRemovalPinellasCounty,
  // St. Petersburg (Rhea)
  raccoonRemovalStPetersburg,
  // Dunedin (Rhea)
  raccoonRemovalDunedin,
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
  { service: "rat-removal", placeName: "The Villages", placeKind: "city", county: "Sumter", path: "about-us/service-area/rat-removal-services-the-villages-fl", location: "about-us/service-area/wildlife-removal-the-villages" },
  { service: "rat-removal", placeName: "St. Petersburg", placeKind: "city", county: "Pinellas", path: "about-us/service-area/rat-removal-services-st-petersburg-fl", location: "about-us/service-area/wildlife-removal-services-saint-petersburg-fl" },
];
