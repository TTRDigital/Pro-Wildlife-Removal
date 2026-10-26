import type { PostExtra } from "./index.ts";
import { faq } from "../pt.ts";

const EPA_RESTRICTIONS = "https://www.epa.gov/rodenticides/restrictions-rodenticide-products";

/* Search Console (Ben, Oct 26): "indoor rat poison" ranks at position 1, so the post keeps an indoor line. */
export const extra_ratBaitStationsAndSafety: PostExtra = {
  slug: "rat-bait-stations-and-safety-a-comprehensive-guide",
  seoDescription: "Rat bait stations explained: how they work, indoor and outdoor label rules from EPA, keeping children and pets safe, and when traps are the better choice.",
  faq: [
    faq(
      "Can I use rat poison indoors?",
      `Only as the label allows. EPA says consumer rodenticides now come as ready-to-use bait stations with block or paste bait, not loose pellets, and each is labeled for use indoors, or indoors and outdoors within 50 feet of a building ([EPA](${EPA_RESTRICTIONS})). Read the label before you buy, and keep stations away from children and pets.`,
    ),
  ],
  sources: [
    { title: "EPA: Restrictions on rodenticide products (consumer products are ready-to-use bait stations with block or paste bait; pellets no longer permitted; labeled for indoors, or indoors and outdoors within 50 feet of buildings)", url: EPA_RESTRICTIONS },
  ],
};
