import type { ServicePlace } from "../types";
import { raccoonRemovalTampa } from "./content/service-places/raccoon-removal/tampa-fl.ts";
import { ratRemovalPascoCounty } from "./content/service-places/rat-removal/pasco-county-fl.ts";
import { batRemovalPascoCounty } from "./content/service-places/bat-removal/pasco-county-fl.ts";
import { raccoonRemovalPascoCounty } from "./content/service-places/raccoon-removal/pasco-county-fl.ts";
import { squirrelRemovalPascoCounty } from "./content/service-places/squirrel-removal/pasco-county-fl.ts";

/*
 * Animal x place pages (TTR-738), served at /services/<service>/<place>/ by
 * Wade's route. Writers add one import and one line per page; keep the list
 * grouped by place. The 9 rat-in-city pages stay in locations.ts at their URLs.
 */
export const fallbackServicePlaces: ServicePlace[] = [
  // Tampa (Cole)
  raccoonRemovalTampa,
  // Pasco (Nia)
  ratRemovalPascoCounty,
  batRemovalPascoCounty,
  raccoonRemovalPascoCounty,
  squirrelRemovalPascoCounty,
];
