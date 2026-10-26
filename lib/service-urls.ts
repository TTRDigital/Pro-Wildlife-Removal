/**
 * One service page per animal, at /services/<animal>-removal/ (Ben, Oct 25, 2026).
 * Every retired service slug and the page it now lives on. The old pages are
 * dropped from the site (lib/content.ts) and 301 to the new one (next.config.ts).
 * No imports here: next.config.ts reads this file.
 */
export const movedServices: Record<string, string> = {
  // Renamed to the clean URL
  "armadillo-removal-2": "armadillo-removal",
  "dead-animal-tampla-fl": "dead-animal-removal",
  // "Control" copies
  "bat-control": "bat-removal",
  "rat-control": "rat-removal",
  "raccoon-control": "raccoon-removal",
  "squirrel-control": "squirrel-removal",
  "snake-control": "snake-removal",
  "opossum-control": "opossum-removal",
  "armadillo-control": "armadillo-removal",
  "bee-control": "bee-removal",
  // Tampa copies
  "bat-removal-tampa": "bat-removal",
  "rat-removal-tampa": "rat-removal",
  "raccoon-removal-tampa": "raccoon-removal",
  "tampa-squirrel-removal": "squirrel-removal",
  "snake-removal-tampa": "snake-removal",
  "opossum-removal-tampa": "opossum-removal",
  "armadillo-removal-tampa": "armadillo-removal",
  "bee-removal-tampa": "bee-removal",
};

/**
 * Retired service-area pages (path without slashes) and the page they now live on (Ben, Oct 26, 2026):
 * the "rat removal in <city>" pages fold into that city's page. The rest of the service-area moves are in lib/location-urls.ts.
 */
export const movedLocations: Record<string, string> = {
  "about-us/service-area/rat-removal-palm-harbor": "about-us/service-area/wildlife-removal-palm-harbor",
};

/**
 * Old per-city service URLs (all Tampa so far; path without slashes) and the animal-by-place page that
 * replaces each (TTR-738). Place pages are only for rats, bats, squirrels and raccoons (Kia, Oct 26, 2026). Until that page exists, the old URL keeps going to the general animal page.
 */
export const cityCopies: Record<string, { service: string; place: string }> = {
  "services/bat-removal-tampa": { service: "bat-removal", place: "tampa-fl" },
  "services/rat-removal-tampa": { service: "rat-removal", place: "tampa-fl" },
  "services/raccoon-removal-tampa": { service: "raccoon-removal", place: "tampa-fl" },
  "services/tampa-squirrel-removal": { service: "squirrel-removal", place: "tampa-fl" },
  "wildlife-removal-services/bat-removal-tampa": { service: "bat-removal", place: "tampa-fl" },
  "wildlife-removal-services/rat-removal-tampa": { service: "rat-removal", place: "tampa-fl" },
  "wildlife-removal-services/raccoon-removal-tampa": { service: "raccoon-removal", place: "tampa-fl" },
  "wildlife-removal-services/tampa-squirrel-removal": { service: "squirrel-removal", place: "tampa-fl" },
  // The old Palm Harbor rat page (retired, see movedLocations) has a rat place page now (Oct 26, 2026).
  "about-us/service-area/rat-removal-palm-harbor": { service: "rat-removal", place: "palm-harbor-fl" },
};

/** Where a service slug lives now (itself if it never moved). */
export const serviceSlug = (slug: string) => movedServices[slug] ?? slug;
