import type { Img, Post } from "./types";
import { images } from "./data/images";

/*
 * Blog topics: which animal a post is about, from its title and slug, with the site's real
 * photos of that animal (the first is the one its service page opens on). Used to file posts
 * under the blog's topic buttons and to give a post without its own photo a fitting one
 * instead of a plain logo tile; each post always gets the same one, neighbours mostly differ.
 * Checked in this order, so "Raccoon vs Rats in the Attic" files under raccoons.
 */
export const topics: {
  key: string;
  label: string;
  test: RegExp;
  images: Img[];
}[] = [
  {
    key: "raccoon",
    label: "Raccoons",
    test: /raccoon/,
    images: [
      images.raccoonRemoval,
      images.proWildLifeRemovalTamparemediationCompany1,
      images.raccoonOnRoof,
      images.raccoonUnderRoofTiles,
      images.babyRaccoonRescue,
      images.babyRaccoonsInTowel,
      images.raccoonLiveTrapGravel,
      images.raccoonTrapDriveway,
      images.raccoonTrapNight,
      images.img1RaccoonRemovalTampaServices,
      images.areRaccoonsInvadingYourHome,
      images.areYouATampaHomeownerLookOutForPropertyDamageCau,
      images.gmb3000x200021,
      images.may142024RaccoonRemoval,
      images.raccoons,
    ],
  },
  {
    key: "squirrel",
    label: "Squirrels",
    test: /squirrel/,
    images: [
      images.squirrelRemoval2,
      images.proWildlifeRemovalIsAtYourService,
      images.squirrelOnTileRoof,
      images.squirrelRemoval3,
      images.squirrelRemoval644x6521,
    ],
  },
  {
    key: "opossum",
    label: "Opossums",
    test: /opossum|possum/,
    images: [
      images.opossumRemoval4,
      images.opossumHeldByTail,
      images.opossumInTrap,
      images.opossumTrapUnderDeck,
      images.twoOpossumsTrapped,
      images.opossumTrapLawn,
      images.opossumTrapMulch,
      images.img1TrustedLeaderInOpossumRemovalInTampaFl,
      images.exclusion2,
      images.gmb3000x200023,
      images.needOpossumRemovalTampaServices,
      images.prowildlifeOpossumImage,
      images.wildlifeRemovalHillsboroughCounty,
    ],
  },
  {
    key: "snake",
    label: "Snakes",
    test: /snake/,
    images: [
      images.snakeRemoval3,
      images.snakeOnLattice,
      images.coralSnakeFound,
      images.snakeOnCatchStick,
      images.snakeHeldGlove,
      images.alwaysCallOurSnakeRemovalExpertsInTampaFloridaFo,
      images.callTheCertifiedAndLicensedSnakeRemovalTampaExpe,
      images.coralSnake,
      images.cottonmouthWaterMoccasin,
      images.image28,
      images.odessaSnakeHandlers,
      images.snakeInYourHouseCallOurSnakeRemovalTampaExpertsR,
      images.snakeRemoval,
    ],
  },
  {
    key: "armadillo",
    label: "Armadillos",
    test: /armadillo/,
    images: [
      images.armadilloRemoval2,
      images.armadilloTrapGrass,
      images.armadilloTrapYard,
      images.armadilloBurrow,
      images.img1ArmadilloRemovalTampaServices,
      images.armadilloTrappers,
      images.needArmadilloRemovalTampaServicesForYourHomeOrBu,
      images.proWildlifeArmadillo,
    ],
  },
  {
    key: "bee",
    label: "Bees",
    test: /\bbees?\b|honey|hive|wasp|hornet/,
    images: [
      images.beeRemoval,
      images.wildlifeRemovalOrlandoFlImage2,
      images.beeSwarmBlocks,
      images.beeColonyWall,
      images.honeycombRemoved,
      images.beeRemoval2,
      images.beeRemovalTampaLocalsTrust,
      images.expertInRemovingAllTypesOfTampasStingingInsects,
      images.honeycombRemoval2,
      images.whatToDoWhenYouFindABeesNestAtYourHome,
    ],
  },
  {
    key: "bat",
    label: "Bats",
    test: /\bbats?\b|guano/,
    images: [
      images.batRemoval2,
      images.batRemovalImage,
      images.batRemoval,
      images.expertBatRemovalTampaFlServicesAvailable247,
      images.homeRepairs2,
      images.itsImportantToRemoveBatsFromYourPropertyDueToThe,
      images.proWildlifeRemovalsProvenBatExclusionAndRemovalP,
      images.youCanTrustTheLicensedWildlifeExpertsAtProWildli,
      images.floridaLawProhibitsBatRemovalOrExclusion,
    ],
  },
  {
    key: "rat",
    label: "Rats",
    test: /\brats?\b|rodent|\bmice\b|\bmouse\b/,
    images: [
      images.ratRemoval2,
      images.ratsInAttic,
      images.ratUnderAtticDuct,
      images.ratCaughtTruck,
      images.ratDroppingsAttic,
      images.rodentDroppingsAtticBoard,
      images.brooksvilleRatImage,
      images.imageInfestation,
      images.imageRatCage,
      images.imageRatInfestation,
      images.prowildlifeBlogGraphicImage,
      images.rat644x6521,
      images.ratRemovalBanner,
      images.ratRemovalImage2,
      images.ratRemovalTrinityImage1,
    ],
  },
];

export function postTopic(post: Pick<Post, "title" | "slug">) {
  const text = `${post.title} ${post.slug.replace(/-/g, " ")}`.toLowerCase();
  return topics.find((t) => t.test.test(text));
}

/** The photo for a post without its own: one of its animal's photos, picked by its slug. */
export function topicImage(post: Pick<Post, "title" | "slug">) {
  const t = postTopic(post);
  if (!t) return undefined;
  let h = 0;
  for (const c of post.slug) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return t.images[h % t.images.length];
}

/** The animal a service page is about, from its address (the service, its place pages and attic pages). */
export function pageAnimal(path: string) {
  const m = path.match(/^\/services\/(rat|bat|raccoon|squirrel|opossum|snake|armadillo|bee)s?-(?:removal|in-attic)\b/);
  return m ? topics.find((t) => t.key === m[1]) : undefined;
}

/**
 * An animal page's sections with that animal in their photos (Kia): a photo beside the copy
 * that is not one of the animal's (a house, the truck, an iguana) or repeats the hero becomes
 * the next of its photos the page does not show yet, and a copy-only section gets one, on
 * alternating sides. Words are untouched.
 */
export function animalSections<S extends { _type: string; heading?: string; image?: Img; imageSide?: "left" | "right" }>(sections: S[], pool: Img[], hero: Img[]): S[] {
  const ours = new Set(pool.map((p) => p.src));
  const shown = new Set(hero.map((p) => p.src));
  const spare = pool.filter((p) => !shown.has(p.src) && !sections.some((s) => s.image?.src === p.src));
  let n = 0;
  return sections.map((s) => {
    if (s._type !== "splitSection" || n >= spare.length) return s;
    if (s.image && ours.has(s.image.src) && !shown.has(s.image.src)) return s;
    if (!s.image && !s.heading) return s;
    const image = spare[n++];
    return s.image ? { ...s, image } : { ...s, image, imageSide: n % 2 ? "right" : "left" };
  });
}
