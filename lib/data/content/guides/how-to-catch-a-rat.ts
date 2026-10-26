import type { Post } from "../../../types";
import { faq, h3, p, rich, ul } from "../pt.ts";

/* Guide, refreshed at its existing URL (Ben, Oct 26). Queries: "best way to catch a rat" and variants (~130 impressions, position 50-60). Answer first, sources, no sales claims. */
const UC = "https://ipm.ucanr.edu/home-and-landscape/rats/";
const PINELLAS = "https://blogs.ifas.ufl.edu/pinellasco/2022/07/25/management-of-rodents/";
const FWC_FAQ = "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/";
const SANTAROSA = "https://blogs.ifas.ufl.edu/santarosaco/2016/01/29/controlling-rats-and-mice-around-the-farm/";

export const howToCatchARat: Post = {
  slug: "how-to-catch-a-rat-in-the-house-a-comprehensive-guide-for-florida-homeowners",
  title: "How to Catch a Rat in the House: A Florida Homeowner's Guide",
  excerpt:
    "Snap traps, set in the right places with a pea-sized bait, are what university experts recommend for rats in the house. Here's where to put them, how to bait them, and why trapping only works once the way in is closed.",
  date: "2026-10-26T00:00:00+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Josh Holmberg",
  body: rich(
    p(
      "**The short answer:** use snap traps. University of California experts recommend them as a safe, effective and economical way to trap rats. Set plenty of them where rats travel, bait each with a pea-sized amount of food, and keep them away from children and pets. Close the gaps rats use too, or new ones replace them. Call (727) 594-7705.",
    ),
    h3("Which rat you have changes where traps go"),
    p(
      `UC IPM says to put traps for Norway rats close to walls, behind objects, in dark corners and where you've found droppings. For roof rats, which climb and nest up high, it says to set them up off the ground: on ledges, shelves, pipes, fences, branches or overhead beams ([UC IPM](${UC})). Not sure which you have? See [Norway rat vs roof rat](/blog/norway-rat-vs-roof-rat-florida/).`,
    ),
    h3("How to bait and set them"),
    ul(
      `**Bait:** UC IPM suggests nuts, dried fruit, bacon or a piece of dry pet food, or a soft bait such as peanut butter. Use only a pea-sized amount, and tie dry bait to the trigger with thread or fine wire so the rat has to work at it ([UC IPM](${UC})).`,
      "**Prebait:** leave traps baited but unset until the bait has been taken several times, then set them so the trigger springs easily.",
      "**Use enough traps:** if every trap's bait disappears, UC IPM says to double the number of baited traps, and keep doubling until some bait goes untaken.",
      "**In the attic,** traps can be left set long-term where rats have been a problem before.",
    ),
    h3("Traps to skip"),
    ul(
      `**Glue boards.** UF/IFAS Extension in Pinellas says glue boards aren't humane because they prolong death ([UF/IFAS](${PINELLAS})), and UC IPM doesn't recommend them for homeowners. It adds that they should never be used outdoors, where other wildlife gets stuck.`,
      `**Live traps.** Florida doesn't allow non-native wildlife, which includes roof and Norway rats, to be released; FWC says it can only be moved to be euthanized ([FWC](${FWC_FAQ})). A live-caught rat still has to be dealt with.`,
      `**Poison indoors.** Pinellas Extension calls rodenticides a last resort. A poisoned rat often dies inside a wall; our [dead animal smell guide](/blog/dead-animal-smell-in-wall-or-attic-florida/) explains why, and our [bait station safety guide](/blog/rat-bait-stations-and-safety-a-comprehensive-guide/) covers the rules.`,
    ),
    p("Electronic traps work too, UC IPM says, but they cost more, need prebaiting, and have to be checked often."),
    h3("Handling a caught rat"),
    p(
      `UC IPM says never to touch a rodent with bare hands: wear disposable gloves, seal the rat in a plastic bag for the trash, and wash up thoroughly after handling traps ([UC IPM](${UC})). For droppings and nests, follow our [rat droppings cleanup guide](/blog/how-to-clean-up-rat-droppings-florida-attic/).`,
    ),
    h3("Why trapping alone isn't the whole fix"),
    p(
      `Rats breed quickly (see [how fast rats reproduce](/blog/how-fast-do-rats-reproduce/)), and new ones move in wherever the way is open. UF/IFAS Extension says rodent-proofing has to block every possible entry point, and rats get through gaps of about half an inch ([UF/IFAS](${SANTAROSA})). If you're catching rats week after week, the openings are the real problem. Our guides to [rats in the walls](/blog/rats-in-the-walls-florida/) and [signs of rats in the attic](/blog/rats-in-attic-signs/) help find them.`,
    ),
    p("See [rat removal](/services/rat-removal/) and [rats in the attic](/services/rats-in-attic/), or call (727) 594-7705."),
  ),
  faq: [
    faq(
      "What trap should I use for rats in the house?",
      "Snap traps. University of California experts recommend them as safe, effective and economical, as long as there are enough of them in the right places.",
    ),
    faq(
      "What bait catches rats?",
      "UC IPM suggests nuts, dried fruit, bacon, dry pet food or peanut butter, in a pea-sized amount. Where you put the trap matters more than the bait.",
    ),
    faq(
      "Can I catch a rat alive and let it go?",
      "Not in Florida. Roof and Norway rats are non-native, and FWC says non-native wildlife can only be moved to be euthanized, not released.",
    ),
    faq(
      "Why do I keep catching rats?",
      "Usually because the way in is still open. UF/IFAS Extension says every possible entry point has to be blocked; otherwise new rats keep replacing the ones you trap.",
    ),
  ],
  seo: {
    title: "How to Catch a Rat in the House | Pro Wildlife Removal",
    description:
      "How to catch a rat in the house: which traps work, where to set them for roof rats and Norway rats, how to bait them, and why sealing the gaps matters.",
  },
  sources: [
    { title: "University of California IPM: Rats (snap traps recommended as safe, effective and economical; placement for Norway and roof rats; out of reach of children and pets; baits, pea-sized; prebait; double traps if all bait taken; traps can stay set in attics; electronic traps; glue boards not recommended for nonprofessionals, never outdoors; gloves, sealed bag)", url: UC },
    { title: "UF/IFAS Extension Pinellas: Management of rodents (snap traps the affordable option; glue boards not humane; poison a last resort)", url: PINELLAS },
    { title: "FWC: FAQs, nuisance wildlife (non-native wildlife can't be released; only moved to be euthanized)", url: FWC_FAQ },
    { title: "UF/IFAS Extension Santa Rosa: Controlling rats and mice around the farm (block all possible entry points; ½-inch gaps)", url: SANTAROSA },
  ],
  clientQuestions: [],
};
