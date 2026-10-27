/* Credits for the animal clips (public/videos; the full notes are in public/videos/CREDITS.md), shown on /credits/.
 * Every clip is real camera footage. CC BY clips need this credit (Ben: CC BY with credit, never BY-SA). */
export type ClipCredit = { clip: string; shows: string; author: string; source: string; license: string; licenseUrl?: string; date: string };

export const clipCredits: ClipCredit[] = [
  {
    clip: "Bats",
    shows: "Mexican free-tailed bats leaving the Congress Avenue Bridge, Austin, Texas",
    author: "cdempsey26",
    source: "https://commons.wikimedia.org/wiki/File:Bats_evacuating_the_Congress_Bridge_in_Austin_TX.webm",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    date: "2011",
  },
  {
    clip: "Armadillo",
    shows: "A wild nine-banded armadillo foraging in leaf litter",
    author: "gails_pictures (Flickr)",
    source: "https://commons.wikimedia.org/wiki/File:Nine-banded_Armadillo_(Dasypus_novemcinctus)._Armadillo_running_off_video.webm",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    date: "13 November 2017",
  },
  {
    clip: "Bees",
    shows: "A honey bee swarm gathering on a pine branch, Mississippi",
    author: "Dsgridgerunner",
    source: "https://commons.wikimedia.org/wiki/File:Honeybees_actively_swarming.webm",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    date: "1 April 2025",
  },
  {
    clip: "Rat",
    shows: "A wild brown rat on a riverside ledge, Ljubljana, Slovenia",
    author: "NaIzletuSi",
    source: "https://commons.wikimedia.org/wiki/File:2022-09-02_LJUBLJANA_Grudnovo_nabre%C5%BEje_RODENTIA_Rattus_PODGANA.webm",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    date: "2 September 2022",
  },
  {
    clip: "Raccoon",
    shows: "A raccoon searching a crevice, Helsinki Zoo",
    author: "Uusijani",
    source: "https://commons.wikimedia.org/wiki/File:Raccoon_(Procyon_lotor)_investigating_a_crevice.webm",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    date: "6 October 2013",
  },
  {
    clip: "Opossum",
    shows: "An opossum foraging in leaf litter, Missouri",
    author: "Candy Chambers, U.S. Fish and Wildlife Service",
    source: "https://commons.wikimedia.org/wiki/File:Opossum_in_Missouri_(31273107963).webm",
    license: "Public domain (U.S. federal work)",
    date: "3 January 2017",
  },
  {
    clip: "Snake",
    shows: "A black rat snake moving through leaf litter",
    author: "U.S. Fish and Wildlife Service, National Conservation Training Center",
    source: "https://commons.wikimedia.org/wiki/File:Black_Rat_Snake_(Elaphe_obsoleta).webm",
    license: "Public domain (U.S. federal work)",
    date: "2014",
  },
  {
    clip: "Squirrel",
    shows: "An eastern gray squirrel on a tree trunk, Orlando, Florida",
    author: "Benoît Prieur",
    source: "https://commons.wikimedia.org/wiki/File:Sciurus_carolinensis_in_Orlando_(May_2023).webm",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    date: "13 May 2023",
  },
];

/* Credits for the "Hear it" sounds (public/sounds; full notes in public/sounds/CREDITS.md). */
export const soundCredits: ClipCredit[] = [
  {
    clip: "Bees humming",
    shows: "A bee buzzing, Yosemite National Park, California",
    author: "U.S. National Park Service (Natural Sounds)",
    source: "https://www.nps.gov/subjects/sound/sounds-bee.htm",
    license: "Public domain (U.S. federal work)",
    date: "Undated",
  },
  {
    clip: "Squirrel chattering",
    shows: "A red squirrel chattering, Yellowstone National Park, Wyoming",
    author: "U.S. National Park Service (Natural Sounds)",
    source: "https://www.nps.gov/subjects/sound/sounds-squirrel.htm",
    license: "Public domain (U.S. federal work)",
    date: "Undated",
  },
  {
    clip: "Raccoon kit calling",
    shows: "A baby raccoon calling for its mother",
    author: "jnargus",
    source: "https://commons.wikimedia.org/wiki/File:Baby_Raccoon_Chatter_1.flac",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    date: "23 May 2014",
  },
];
