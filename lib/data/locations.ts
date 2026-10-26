/* Generated from the live site by the migration scripts, then edited by hand where noted. Edit content in /cms; this is the built-in fallback and the seed source. */
import { withLocationExtras } from "./content/page-extras.ts";
import type { Location } from "../types";
import { citrus } from "./content/counties/citrus.ts";
import { hernando } from "./content/counties/hernando.ts";
import { hillsborough } from "./content/counties/hillsborough.ts";
import { pasco } from "./content/counties/pasco.ts";
import { pinellas } from "./content/counties/pinellas.ts";
import { polk } from "./content/counties/polk.ts";
import { marion } from "./content/counties/marion.ts";
import { tampa } from "./content/cities/tampa.ts";
import { springHill } from "./content/cities/spring-hill.ts";
import { clearwater } from "./content/cities/clearwater.ts";
import { newPortRichey } from "./content/cities/new-port-richey.ts";
import { brooksville } from "./content/cities/brooksville.ts";
import { centralFlorida } from "./content/cities/central-florida.ts";
import { ladyLake } from "./content/cities/lady-lake.ts";
import { pineRidge } from "./content/cities/pine-ridge.ts";
import { lecanto } from "./content/cities/lecanto.ts";
import { sarasota } from "./content/cities/sarasota.ts";
import { orlando } from "./content/cities/orlando.ts";
import { winterHaven } from "./content/cities/winter-haven.ts";
import { landOLakes } from "./content/cities/land-o-lakes.ts";
import { hudson } from "./content/cities/hudson.ts";
import { stPetersburg } from "./content/cities/st-petersburg.ts";
import { trinity } from "./content/cities/trinity.ts";
import { odessa } from "./content/cities/odessa.ts";
import { holiday } from "./content/cities/holiday.ts";
import { ocala } from "./content/cities/ocala.ts";
import { silverSprings } from "./content/cities/silver-springs.ts";
import { theVillages } from "./content/cities/the-villages.ts";
import { dadeCity } from "./content/cities/dade-city.ts";
import { dunedin } from "./content/cities/dunedin.ts";
import { safetyHarbor } from "./content/cities/safety-harbor.ts";
import { palmHarbor } from "./content/cities/palm-harbor.ts";
import { pinellasPark } from "./content/cities/pinellas-park.ts";

const migratedLocations: Location[] = [
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/central-florida.ts
 centralFlorida,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/counties/citrus.ts
 citrus,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/counties/hernando.ts
 hernando,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/counties/hillsborough.ts
 hillsborough,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/counties/pasco.ts
 pasco,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/counties/pinellas.ts
 pinellas,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/counties/polk.ts
 polk,
 // Sumter County merged into The Villages (Ben, Oct 26); Wade 301s its old URL.
 // New for the rebuild (Nia, Oct 2026): lib/data/content/counties/marion.ts
 marion,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/brooksville.ts
 brooksville,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/clearwater.ts
 clearwater,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/dade-city.ts
 dadeCity,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/dunedin.ts
 dunedin,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/holiday.ts
 holiday,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/hudson.ts
 hudson,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/lady-lake.ts
 ladyLake,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/land-o-lakes.ts
 landOLakes,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/lecanto.ts
 lecanto,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/new-port-richey.ts
 newPortRichey,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/odessa.ts
 odessa,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/orlando.ts
 orlando,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/palm-harbor.ts
 palmHarbor,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/pine-ridge.ts
 pineRidge,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/pinellas-park.ts
 pinellasPark,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/safety-harbor.ts
 safetyHarbor,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/st-petersburg.ts
 stPetersburg,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/sarasota.ts
 sarasota,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/spring-hill.ts
 springHill,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/tampa.ts
 tampa,
 // New for the rebuild (Nia, Oct 2026): lib/data/content/cities/ocala.ts
 ocala,
 // New for the rebuild (Nia, Oct 2026): lib/data/content/cities/silver-springs.ts
 silverSprings,
 // Rewritten for the rebuild (Nia, Oct 2026): lib/data/content/cities/the-villages.ts
 theVillages,
 // Rewritten for the rebuild (Cole, Oct 2026): lib/data/content/cities/trinity.ts
 trinity,
 // Rat-in-city pages (Brooksville, Clearwater, Dade City, Dunedin, Hudson, New Port Richey, Safety Harbor, Spring Hill, St. Petersburg,
 // The Villages) removed (Ben, Oct 26): 301 to their city pages (Wade); their rat facts now live in each city page's "Rats in" section.
 // about-us/service-area/rat-removal-palm-harbor removed (Ben, Oct 26): 301 to its city page (Wade)
 // rat-removal-trinity removed (Ben, Oct 26): 301 to its city page (Wade)
 // Rewritten for the rebuild (Cole, Oct 2026) as the Winter Haven city page: lib/data/content/cities/winter-haven.ts
 winterHaven,
 // Manatee and Osceola pages held until the client confirms those counties (Ben, Oct 26)
];

export const fallbackLocations: Location[] = migratedLocations.map(withLocationExtras);
