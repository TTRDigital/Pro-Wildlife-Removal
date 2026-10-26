import type { Img, Post } from "./types";
import { images } from "./data/images";
import { library } from "./data/library";

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
      library["raccoon-under-roof-tiles-1"],
      library["raccoon-on-a-roof-2"],
      library["raccoon-held-by-a-technician-1"],
      library["baby-raccoons-2"],
      library["raccoon-on-a-roof-1"],
      library["raccoon-caught-in-a-cage-trap-18"],
      library["raccoon-caught-in-a-cage-trap-34"],
      library["raccoon-caught-in-a-cage-trap-23"],
      library["raccoon-caught-in-a-cage-trap-16"],
      library["raccoon-caught-in-a-cage-trap-26"],
      library["raccoon-caught-in-a-cage-trap-28"],
      library["raccoons-caught-in-a-cage-trap-2"],
      library["raccoon-caught-in-a-cage-trap-4"],
      library["raccoon-inside-a-vehicle-1"],
      library["raccoon-caught-in-a-cage-trap-12"],
      library["raccoon-caught-in-a-cage-trap-17"],
      library["raccoon-caught-in-a-cage-trap-22"],
      library["raccoon-caught-in-a-cage-trap-31"],
      library["raccoon-caught-in-a-cage-trap-15"],
      library["raccoon-caught-in-a-cage-trap-19"],
    ],
  },
  {
    key: "squirrel",
    label: "Squirrels",
    test: /squirrel/,
    images: [
      library["squirrel-held-by-a-technician-1"],
      library["squirrel-on-a-tile-roof-1"],
      library["squirrel-in-a-cage-trap-1"],
      library["squirrels-in-cage-traps-1"],
      library["squirrel-in-the-attic-1"],
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
      library["opossum-caught-in-a-cage-trap-12"],
      library["opossum-held-by-the-tail-1"],
      library["opossum-caught-in-a-cage-trap-9"],
      library["opossums-caught-in-cage-traps-1"],
      library["opossum-caught-in-a-cage-trap-13"],
      library["opossum-caught-in-a-cage-trap-18"],
      library["opossum-caught-in-a-cage-trap-2"],
      library["opossum-caught-in-a-cage-trap-4"],
      library["opossum-caught-in-a-cage-trap-14"],
      library["opossum-caught-in-a-cage-trap-6"],
      library["opossum-caught-in-a-cage-trap-7"],
      library["opossum-caught-in-a-cage-trap-20"],
      library["opossum-caught-in-a-cage-trap-1"],
      library["opossums-caught-in-cage-traps-2"],
    ],
  },
  {
    key: "snake",
    label: "Snakes",
    test: /snake/,
    images: [
      library["rattlesnake-in-the-grass-1"],
      library["snake-by-a-wall-1"],
      library["snake-on-a-lattice-1"],
      library["rattlesnake-held-by-a-technician-1"],
      library["coral-snake-1"],
      library["snake-held-on-a-stick-1"],
      library["snake-on-pavement-1"],
    ],
  },
  {
    key: "armadillo",
    label: "Armadillos",
    test: /armadillo/,
    images: [
      library["armadillo-in-the-grass-1"],
      library["armadillo-held-by-a-technician-1"],
      library["armadillo-leaving-a-trap-1"],
      library["armadillo-in-a-cage-trap-7"],
      library["armadillo-in-a-cage-trap-6"],
      library["armadillo-burrow-hole-1"],
      library["armadillo-in-a-cage-trap-4"],
      library["armadillo-in-a-cage-trap-8"],
      library["armadillo-in-a-cage-trap-1"],
      library["armadillo-in-a-cage-trap-2"],
    ],
  },
  {
    key: "bee",
    label: "Bees",
    test: /\bbees?\b|honey|hive|wasp|hornet/,
    images: [
      library["bee-swarm-on-a-porch-railing-1"],
      library["bee-swarm-on-a-post-1"],
      library["honey-bee-colony-in-a-wall-1"],
      library["technician-in-a-bee-suit-at-a-wall-1"],
      library["honeycomb-removed-from-a-hive-1"],
      library["bee-swarm-in-a-garage-ceiling-1"],
      library["bee-job-removed-comb-in-a-bucket-1"],
    ],
  },
  {
    key: "bat",
    label: "Bats",
    test: /\bbats?\b|guano/,
    images: [
      library["bat-colony-1"],
      library["bat-colony-2"],
      library["bat-caught-in-netting-1"],
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
      library["rat-caught-in-a-trap-1"],
      library["rat-caught-in-a-trap-2"],
      library["rat-signs-inside-a-wall-1"],
      library["rat-held-by-the-tail-at-the-truck-1"],
      library["rats-huddled-together-pro-wildlife-watermark-1"],
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

/** A post's animal photo: the nth of its animal's photos when a list numbers its posts (so no two cards match, Kia), else one picked by its slug. */
export function topicImage(post: Pick<Post, "title" | "slug">, nth?: number) {
  const t = postTopic(post);
  if (!t) return undefined;
  // The client's own photos when it has some (Ben); stock only for an animal with none.
  const own = t.images.filter((i) => i.src.startsWith("/images/library/"));
  const pool = own.length ? own : t.images;
  // a numbered list runs through all its photos (the client's first) before any repeats
  if (nth !== undefined) return t.images[nth % t.images.length];
  let h = 0;
  for (const c of post.slug) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return pool[h % pool.length];
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

/** A link's animal photo: the client's own first photo of the animal a service link is about (Ben: real photos over stock on every tile). */
export function animalPhoto(href?: string) {
  return href ? pageAnimal(href)?.images[0] : undefined;
}

/* The client's own photo of each kind of job, for cards about the work rather than an animal. */
const jobPhotos: [RegExp, Img][] = [
  // what an attic inspection finds: whether the client does attic clean-up is still a question to them (Ben)
  [/attic|clean/i, library["droppings-on-an-attic-floor-1"]],
  [/honeycomb|hive/i, library["honeycomb-removed-from-a-hive-1"]],
  [/exclusion|seal|repair/i, library["hole-in-a-roof-entry-point-2"]],
  [/population|trapping/i, library["raccoons-caught-in-a-cage-trap-2"]],
];
export function jobPhoto(title?: string) {
  return title ? jobPhotos.find(([test]) => test.test(title))?.[1] : undefined;
}
