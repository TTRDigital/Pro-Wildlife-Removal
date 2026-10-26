import type { Faq, Post, Source } from "../../../types";
import { extra_squirrelPoopVsRatPoopHowToSpotTheDifference } from "./squirrel-poop-vs-rat-poop-how-to-spot-the-difference.ts";
import { extra_typesOfAnimalsFoundUnderTheHouse } from "./types-of-animals-found-under-the-house.ts";
import { extra_whatToDoAboutRaccoons } from "./what-to-do-about-raccoons.ts";
import { extra_ratsEnteringSoffits } from "./rats-entering-soffits.ts";
import { extra_effectiveRatControlTips } from "./effective-rat-control-tips.ts";
import { extra_howToGetRidOfRatsInTheHouse } from "./how-to-get-rid-of-rats-in-the-house.ts";
import { extra_whatKeepsRatsAway } from "./what-keeps-rats-away.ts";
import { extra_signsThatYourHouseHasRats } from "./signs-that-your-house-has-rats.ts";
import { extra_dangersOfDiyWildlifeRemoval } from "./dangers-of-diy-wildlife-removal.ts";
import { extra_tampaWildlifeInfestationDangers } from "./tampa-wildlife-infestation-dangers.ts";
import { extra_theDangersOfIgnoringWildlifeInYourAttic } from "./the-dangers-of-ignoring-wildlife-in-your-attic.ts";
import { extra_whySquirrelsReturnAfterRemoval } from "./why-squirrels-return-after-removal.ts";

/*
 * Additions to migrated blog posts (Ben's audit, Oct 26): a sourced FAQ, a closing
 * paragraph of in-text links to related posts and service pages, and SEO fixes.
 * One file per post slug; posts.ts applies them to the migrated post bodies.
 */
export type PostExtra = {
  slug: string;
  /** Appended to the end of the post body (Portable Text from pt.ts). */
  more?: Post["body"];
  faq?: Faq[];
  sources?: Source[];
  seoDescription?: string;
};

const extras: PostExtra[] = [
  extra_squirrelPoopVsRatPoopHowToSpotTheDifference,
  extra_typesOfAnimalsFoundUnderTheHouse,
  extra_whatToDoAboutRaccoons,
  extra_ratsEnteringSoffits,
  extra_dangersOfDiyWildlifeRemoval,
  extra_tampaWildlifeInfestationDangers,
  extra_theDangersOfIgnoringWildlifeInYourAttic,
  extra_effectiveRatControlTips,
  extra_howToGetRidOfRatsInTheHouse,
  extra_whatKeepsRatsAway,
  extra_signsThatYourHouseHasRats,
  extra_whySquirrelsReturnAfterRemoval,
];

export function withExtras(post: Post): Post {
  const x = extras.find((e) => e.slug === post.slug);
  if (!x) return post;
  return {
    ...post,
    body: [...post.body, ...(x.more ?? [])],
    faq: [...(post.faq ?? []), ...(x.faq ?? [])],
    sources: [...(post.sources ?? []), ...(x.sources ?? [])],
    seo: x.seoDescription ? { ...post.seo, description: x.seoDescription } : post.seo,
  };
}
