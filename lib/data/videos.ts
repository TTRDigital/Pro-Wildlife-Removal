/* Short silent loops for the animal tiles (a service's own cardVideo wins over these). Real camera footage only (no AI), each CC0, public
 * domain or CC BY (credited on /credits/, never BY-SA: Ben); source page, author, date and license for every clip are in
 * public/videos/CREDITS.md and lib/data/credits.ts. Each is at most about 400 KB and 6 s, muted, loaded only in view.
 * - raccoon: commons.wikimedia.org/wiki/File:Raccoon_(Procyon_lotor)_investigating_a_crevice.webm (CC0, Uusijani, 2013)
 * - opossum: commons.wikimedia.org/wiki/File:Opossum_in_Missouri_(31273107963).webm (public domain, USFWS, 2017)
 * - snake: commons.wikimedia.org/wiki/File:Black_Rat_Snake_(Elaphe_obsoleta).webm (public domain, USFWS/NCTC, 2014)
 * - squirrel: commons.wikimedia.org/wiki/File:Sciurus_carolinensis_in_Orlando_(May_2023).webm (CC0, Benoît Prieur, 2023)
 * - bee: commons.wikimedia.org/wiki/File:Honeybees_actively_swarming.webm (CC0, Dsgridgerunner, 2025)
 * - bat: commons.wikimedia.org/wiki/File:Bats_evacuating_the_Congress_Bridge_in_Austin_TX.webm (CC BY 3.0, cdempsey26, 2011)
 * - armadillo: commons.wikimedia.org/wiki/File:Nine-banded_Armadillo_(Dasypus_novemcinctus)._Armadillo_running_off_video.webm (CC BY 2.0, gails_pictures on Flickr, 2017)
 * Still to find: rat (the tile shows its photos until then).
 */
export const animalVideos: Partial<Record<string, string>> = {
  raccoon: "/videos/raccoon.mp4",
  opossum: "/videos/opossum.mp4",
  snake: "/videos/snake.mp4",
  squirrel: "/videos/squirrel.mp4",
  bee: "/videos/bee.mp4",
  bat: "/videos/bat.mp4",
  armadillo: "/videos/armadillo.mp4",
};
