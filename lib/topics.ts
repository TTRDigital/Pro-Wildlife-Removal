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
