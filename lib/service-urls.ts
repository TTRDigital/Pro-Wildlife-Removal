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

/** Where a service slug lives now (itself if it never moved). */
export const serviceSlug = (slug: string) => movedServices[slug] ?? slug;
