/**
 * Service-area URLs (Ben, approved by Kia, Oct 26, 2026): the hub at /service-areas/, county pages at
 * /service-areas/<county>-county/, city pages at /service-areas/<county>-county/<city>/, and The Villages
 * at /service-areas/the-villages/.
 *
 * Location content keeps its old `path` as a stable ID (lib/data, the CMS). getLocations swaps in the new
 * path, so menus, breadcrumbs, link lists, the sitemap, canonicals, schema and llms.txt all follow this map,
 * and next.config.ts 301s every old URL straight to its new one. Paths are without slashes.
 * No imports here: next.config.ts reads this file.
 */

const OLD = "about-us/service-area/";
export const HUB = "service-areas";

/** Old path → new path for every page that stays (some with new content folded in). */
export const movedAreas: Record<string, string> = {
  // Region and counties
  [`${OLD}wild-life-removal-central-florida`]: `${HUB}/central-florida`,
  [`${OLD}wildlife-removal-in-citrus-county-fl`]: `${HUB}/citrus-county`,
  [`${OLD}wildlife-removal-in-hernando-county-fl`]: `${HUB}/hernando-county`,
  [`${OLD}wildlife-removal-hillsborough-county`]: `${HUB}/hillsborough-county`,
  [`${OLD}wildlife-removal-in-pasco-county-fl`]: `${HUB}/pasco-county`,
  [`${OLD}wildlife-removal-pinellas-county`]: `${HUB}/pinellas-county`,
  [`${OLD}wildlife-removal-polk-county`]: `${HUB}/polk-county`,
  [`${OLD}wildlife-removal-marion-county-fl`]: `${HUB}/marion-county`,
  // Held counties (not on the site yet)
  [`${OLD}wildlife-removal-manatee-county-fl`]: `${HUB}/manatee-county`,
  [`${OLD}wildlife-removal-osceola-county-fl`]: `${HUB}/osceola-county`,
  // Citrus
  [`${OLD}wildlife-removal-in-lecanto-fl`]: `${HUB}/citrus-county/lecanto`,
  [`${OLD}wildlife-removal-pine-ridge-fl`]: `${HUB}/citrus-county/pine-ridge`,
  // Hernando
  [`${OLD}wildlife-removal-service-in-brooksville-fl`]: `${HUB}/hernando-county/brooksville`,
  [`${OLD}wildlife-removal-spring-hill-fl`]: `${HUB}/hernando-county/spring-hill`,
  // Hillsborough
  [`${OLD}tampa/wildlife-removal-service-in-tampa-fl`]: `${HUB}/hillsborough-county/tampa`,
  [`${OLD}wildlife-removal-carrollwood-fl`]: `${HUB}/hillsborough-county/carrollwood`,
  [`${OLD}wildlife-removal-town-n-country-fl`]: `${HUB}/hillsborough-county/town-n-country`,
  // Marion
  [`${OLD}wildlife-removal-ocala-fl`]: `${HUB}/marion-county/ocala`,
  [`${OLD}wildlife-removal-silver-springs-fl`]: `${HUB}/marion-county/silver-springs`,
  [`${OLD}wildlife-removal-dunnellon-fl`]: `${HUB}/marion-county/dunnellon`,
  // Pasco
  [`${OLD}wildlife-removal-dade-city`]: `${HUB}/pasco-county/dade-city`,
  [`${OLD}wildlife-removal-holiday-fl`]: `${HUB}/pasco-county/holiday`,
  [`${OLD}hudson-wildlife-removal`]: `${HUB}/pasco-county/hudson`,
  [`${OLD}wildlife-removal-land-o-lakes`]: `${HUB}/pasco-county/land-o-lakes`,
  [`${OLD}wildlife-removal-new-port-richey`]: `${HUB}/pasco-county/new-port-richey`,
  [`${OLD}wildlife-removal-odessa-fl`]: `${HUB}/pasco-county/odessa`,
  [`${OLD}trinity-wildlife-removal`]: `${HUB}/pasco-county/trinity`,
  // Pinellas
  [`${OLD}wildlife-removal-clearwater-fl`]: `${HUB}/pinellas-county/clearwater`,
  [`${OLD}wildlife-removal-dunedin`]: `${HUB}/pinellas-county/dunedin`,
  [`${OLD}wildlife-removal-palm-harbor`]: `${HUB}/pinellas-county/palm-harbor`,
  [`${OLD}wildlife-removal-pinellas-park`]: `${HUB}/pinellas-county/pinellas-park`,
  [`${OLD}wildlife-removal-safety-harbor`]: `${HUB}/pinellas-county/safety-harbor`,
  [`${OLD}wildlife-removal-services-saint-petersburg-fl`]: `${HUB}/pinellas-county/st-petersburg`,
  // Polk: Winter Haven's only page was its rat page; it becomes the Winter Haven page.
  [`${OLD}rat-removal-services-winter-haven-fl`]: `${HUB}/polk-county/winter-haven`,
  // Further out, under their real counties (no county page yet)
  [`${OLD}wildlife-removal-lady-lake`]: `${HUB}/lake-county/lady-lake`,
  [`${OLD}wildlife-removal-orlando-fl`]: `${HUB}/orange-county/orlando`,
  [`${OLD}wildlife-removal-sarasota-fl`]: `${HUB}/sarasota-county/sarasota`,
  // The Villages: top level (it spans Sumter, Lake and Marion)
  [`${OLD}wildlife-removal-the-villages`]: `${HUB}/the-villages`,
};

/**
 * Pages folded into another (Ben, Oct 26, 2026): the "rat removal in <city>" pages become a "Rats in <city>"
 * section on the city page, and Sumter County merges into The Villages. They leave the site and 301 to the page
 * named here (an old path, resolved through movedAreas).
 */
export const foldedAreas: Record<string, string> = {
  [`${OLD}expert-rat-removal-in-brooksville-fl`]: `${OLD}wildlife-removal-service-in-brooksville-fl`,
  [`${OLD}rat-removal-services-clearwater-fl`]: `${OLD}wildlife-removal-clearwater-fl`,
  [`${OLD}rat-removal-dade`]: `${OLD}wildlife-removal-dade-city`,
  [`${OLD}rat-removal-services-dunedin-fl`]: `${OLD}wildlife-removal-dunedin`,
  [`${OLD}rat-removal-services-hudson-fl`]: `${OLD}hudson-wildlife-removal`,
  "rat-removal-new-port-richey": `${OLD}wildlife-removal-new-port-richey`,
  [`${OLD}rat-removal-safety-harbor`]: `${OLD}wildlife-removal-safety-harbor`,
  [`${OLD}rat-removal-services-spring-hill-fl`]: `${OLD}wildlife-removal-spring-hill-fl`,
  [`${OLD}rat-removal-services-st-petersburg-fl`]: `${OLD}wildlife-removal-services-saint-petersburg-fl`,
  [`${OLD}rat-removal-services-the-villages-fl`]: `${OLD}wildlife-removal-the-villages`,
  [`${OLD}wildlife-removal-sumter-county-fl`]: `${OLD}wildlife-removal-the-villages`,
  // Retired earlier
  "rat-removal-trinity": `${OLD}trinity-wildlife-removal`,
  [`${OLD}tampa`]: `${OLD}tampa/wildlife-removal-service-in-tampa-fl`,
};

/** Where a location lives now, from its old path (or its new one): new path without slashes. Unknown paths pass through. */
export function areaPath(path: string): string {
  const p = path.replace(/^\/|\/$/g, "");
  if (p === OLD.slice(0, -1)) return HUB;
  const kept = foldedAreas[p] ?? p;
  return movedAreas[kept] ?? kept;
}

/** Old URLs in text: an old service-area link (relative or on our domain) anywhere in a string. */
const OLD_LINK = /(?<![\w.-])((?:https?:\/\/(?:www\.)?prowildliferemoval\.net)?)\/(about-us\/service-area(?:\/[a-z0-9-]+)*|rat-removal-new-port-richey|rat-removal-trinity)\/?(?=[#?"')\]\s]|$)/g;

/** A string with every old service-area link swapped for its new URL. */
export const relinkAreas = (s: string) => s.replace(OLD_LINK, (_, host: string, path: string) => `${host}/${areaPath(path)}/`);

/** Written but held back (not on the site, never on the old one): no redirect until they launch. */
const held = new Set(["manatee-county-fl", "osceola-county-fl", "carrollwood-fl", "town-n-country-fl", "dunnellon-fl"].map((s) => `${OLD}wildlife-removal-${s}`));

/** Every old service-area URL (with slashes) and the URL it 301s to, in one hop. */
export function areaRedirects(): [string, string][] {
  const pairs: [string, string][] = [[`/${OLD}`, `/${HUB}/`]];
  for (const old of [...Object.keys(movedAreas), ...Object.keys(foldedAreas)]) if (!held.has(old)) pairs.push([`/${old}/`, `/${areaPath(old)}/`]);
  // County parents that have no page (yet): to the hub.
  for (const c of ["orange-county", "sarasota-county", "lake-county", "sumter-county"]) pairs.push([`/${HUB}/${c}/`, `/${HUB}/`]);
  return pairs;
}
