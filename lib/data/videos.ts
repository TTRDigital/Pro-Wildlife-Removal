/*
 * Short silent clips for the animal tiles, by service animal. Real footage only (never AI),
 * public domain or CC0 from Wikimedia Commons, trimmed to a few seconds and re-encoded into
 * public/videos. A service's own cardVideo wins over these. Sources:
 * - raccoon: commons.wikimedia.org/wiki/File:Raccoon_(Procyon_lotor)_investigating_a_crevice.webm (CC0)
 * - opossum: commons.wikimedia.org/wiki/File:Opossum_in_Missouri_(31273107963).webm (public domain)
 * Still to find: bat, rat, squirrel, snake, armadillo, bee (the tile shows its photo until then).
 */
export const animalVideos: Partial<Record<string, string>> = {
  raccoon: "/videos/raccoon.mp4",
  opossum: "/videos/opossum.mp4",
};
