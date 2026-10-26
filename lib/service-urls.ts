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
 * the "rat removal in <city>" pages fold into that city's page.
 */
export const movedLocations: Record<string, string> = {
  "rat-removal-trinity": "about-us/service-area/trinity-wildlife-removal",
  "about-us/service-area/rat-removal-palm-harbor": "about-us/service-area/wildlife-removal-palm-harbor",
};

/** Where a service slug lives now (itself if it never moved). */
export const serviceSlug = (slug: string) => movedServices[slug] ?? slug;
