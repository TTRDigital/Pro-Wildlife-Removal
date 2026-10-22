/* Constants for the inspection form, also used by app/api/lead/route.ts. */

export const serviceOptions = [
  "Bat removal",
  "Rat / rodent removal",
  "Raccoon removal",
  "Squirrel removal",
  "Snake removal",
  "Opossum removal",
  "Armadillo removal",
  "Bee removal",
  "Mole control",
  "Dead animal removal",
  "Attic cleanup / restoration",
  "Exclusion / damage repair",
  "Other wildlife",
] as const;

export const propertyOptions = ["Home", "Business / commercial", "Rental / HOA"] as const;

export const attributionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"] as const;

export const ATTRIBUTION_STORAGE_KEY = "pwr_attribution";

/** Minimum time a human needs to fill the form. Faster submits are treated as suspect. */
export const MIN_FILL_MS = 2500;
