/* Short silent loops for the animal tiles (a service's own cardVideo wins over these). Real camera footage only (no AI), each CC0 or public
 * domain; source page, author, date and license for every clip are in public/videos/CREDITS.md.
 * - raccoon: commons.wikimedia.org/wiki/File:Raccoon_(Procyon_lotor)_investigating_a_crevice.webm (CC0, Uusijani, 2013)
 * - opossum: commons.wikimedia.org/wiki/File:Opossum_in_Missouri_(31273107963).webm (public domain, USFWS, 2017)
 * - snake: commons.wikimedia.org/wiki/File:Black_Rat_Snake_(Elaphe_obsoleta).webm (public domain, USFWS/NCTC, 2014)
 * - squirrel: commons.wikimedia.org/wiki/File:Sciurus_carolinensis_in_Orlando_(May_2023).webm (CC0, Benoît Prieur, 2023)
 * Still to find: bat, rat, armadillo, bee (the tile shows its photo until then).
 */
export const animalVideos: Partial<Record<string, string>> = {
  raccoon: "/videos/raccoon.mp4",
  opossum: "/videos/opossum.mp4",
  snake: "/videos/snake.mp4",
  squirrel: "/videos/squirrel.mp4",
};
