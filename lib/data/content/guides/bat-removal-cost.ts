import { images } from "../../images.ts";
import type { Post } from "../../../types";
import { h3, p, rich, table, ul } from "../pt.ts";

/*
 * Guide: bat removal cost. Rewritten in place at the existing slug (Ben, Oct 26):
 * the old post already gets search impressions. No price figures until the client
 * gives ranges; the range slot is a placeholder.
 */

const RELEASE = "https://myfwc.com/news/all-news/bat-maternity-0426/";
const BUILDINGS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";

export const batRemovalCost: Post = {
  slug: "how-much-does-bat-removal-cost-in-florida",
  title: "How Much Does Bat Removal Cost in Florida?",
  excerpt:
    "Bat removal cost in Florida depends on how many openings the bats use, how hard they are to reach, how long the colony has been there and how much guano cleanup the attic needs.",
  date: "2023-12-09T00:52:59+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Pro Wildlife Removal",
  image: images.batRemovalCostImageE1702083484199,
  body: rich(
    p(
      "**The short answer:** bat removal in Florida is priced per house, not per bat. The cost depends on how many openings the colony uses, how high and hard they are to reach, how long the bats have been there and how much guano and insulation has to come out. Every job starts with an inspection. Call (727) 594-7705 to book one.",
      "[PLACEHOLDER: ask the client: can the site show a typical price range for bat exclusion, and for guano cleanup?]",
    ),
    h3("What changes the price of bat removal"),
    p("Bats can't be trapped or poisoned in Florida, so every bat job is an exclusion: one-way devices on the exits, then sealing. These are the things that make one exclusion cost more than another."),
    table(
      ["Factor", "Why it changes the price"],
      ["Number of active exits", "Each exit the bats use needs a one-way device, and FWC requires the devices to stay up at least four nights."],
      ["Other gaps on the house", "Openings the bats aren't using right now still have to be sealed, or the colony moves to them."],
      ["Roof height and type", "A steep, two-story tile roof takes more time and equipment than a single-story shingle roof."],
      ["How long the colony has been there", "An old roost leaves more guano on the insulation, and sometimes the insulation has to be replaced."],
      ["Repairs", "Rotted fascia, loose soffits or cracked tiles have to be fixed before they can be sealed."],
      ["Timing", "From April 16 to August 14, exclusion waits unless FWC issues a permit, so the job may be split into an inspection now and exclusion later."],
    ),
    h3("Why timing matters in Florida"),
    p(
      `FWC's April 2026 announcement sets bat maternity season at April 16 through August 14. April 15 is the last day to exclude bats without a permit, and exclusion is legal again from August 15. The exclusion itself has rules too: devices on the key exits, left up at least four nights, with overnight lows forecast at 50°F or warmer. ([FWC](${RELEASE}))`,
      "That doesn't change what an exclusion costs, but it changes when you pay for it. A summer call usually means an inspection and some sealing of gaps the bats aren't using, then the exclusion once the season opens.",
    ),
    h3("What a bat removal job usually includes"),
    ul(
      "**Inspection** of the whole roofline and attic to find every opening, the roost and the extent of the guano.",
      "**One-way exclusion devices** on the active exits, left up until no bats are left.",
      "**Sealing** of every opening once the bats are out.",
      "**Guano cleanup** and, where needed, insulation removal and replacement.",
    ),
    p("[PLACEHOLDER: ask the client: what your bat job includes as standard (inspection fee, follow-up visit, warranty on the sealing) and what is priced separately]"),
    h3("Doing it yourself versus calling a pro"),
    p(`Florida's rules leave little room for do-it-yourself bat removal. FWC says it's illegal to kill bats, poison, relocation and fumigants are illegal to use on bats, and bats sealed inside a building die there ([FWC](${BUILDINGS})). The savings from a store-bought device disappear fast if a missed opening lets the colony back in, or if bats end up trapped in a wall.`),
    p("What you can do yourself: watch the roofline at dusk to see where the bats come out, and keep the attic door closed. That information also makes the inspection quicker."),
    h3("Cleanup: the part of the bill people forget"),
    p(
      "Guano builds up under the roost for as long as the colony stays. The CDC recommends a respirator in a confined space with bat droppings, and FWC notes that guano in a dry, unused space can usually be left alone. In a used attic, with ductwork and stored belongings, it usually comes out. That can range from a light cleanup to replacing all the insulation under the roost.",
    ),
    h3("Common questions"),
    h3("Is bat removal cheaper in winter?"),
    p("Not necessarily cheaper, but easier to schedule. Exclusion is allowed from August 15 to April 15, as long as overnight lows are forecast at 50°F or warmer during the exclusion."),
    h3("Does homeowners insurance cover bat removal?"),
    p("It depends entirely on your policy. Ask your insurer before the work starts, and keep the inspection report."),
    h3("Can I just buy a one-way device and do it myself?"),
    p("You can, but the rules still apply: no exclusion in maternity season without a permit, devices on every key exit for at least four nights, and every other gap sealed. A missed gap means paying twice."),
    p("Read more on our [bat removal](/services/bat-removal/) and [bats in the attic](/services/bats-in-attic/) pages, or call (727) 594-7705, 24/7."),
  ),
  seo: {
    title: "How Much Does Bat Removal Cost in Florida? (2026 Guide) | Pro Wildlife Removal",
    description:
      "What decides bat removal cost in Florida: number of exits, roof height, how long the colony has been there, guano cleanup and the April 16 to August 14 maternity season.",
  },
  sources: [
    { title: "FWC news release, April 6, 2026 (maternity season April 16 to Aug 14; exclusion Aug 15 to April 15; four nights; 50°F; permits during the season)", url: RELEASE },
    { title: "FWC: Bats in buildings (illegal to kill; poison, relocation and fumigants illegal; sealed-in bats die; guano can be left in dry unused spaces; CDC respirator advice)", url: BUILDINGS },
  ],
  clientQuestions: [
    "Can the site show a typical price range for bat exclusion, and for guano cleanup?",
    "What does a bat job include as standard (inspection fee, follow-up, warranty) and what is priced separately?",
    "Named author for guides and posts (the plan asks for a named person).",
  ],
};
