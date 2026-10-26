import { images } from "../../images.ts";
import type { Post } from "../../../types";
import { faq, h3, p, rich, table, ul } from "../pt.ts";

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
  author: "Josh Holmberg",
  image: images.batRemovalCostImageE1702083484199,
  body: rich(
    p(
      "**The short answer:** bat removal in Florida is priced per house, not per bat. Cost depends on how many openings the colony uses, how hard they are to reach, how long the bats have been there and how much guano has to come out. It starts with an inspection: call (727) 594-7705.",
    ),
    h3("What changes the price of bat removal"),
    p("Bats can't be trapped or poisoned in Florida, so every colony in a building is removed by exclusion: one-way devices on the exits, then sealing. These are the things that make one exclusion cost more than another."),
    table(
      ["Factor", "Why it changes the price"],
      ["Number of active exits", "Each exit the bats use needs a one-way device, and FWC requires the devices to stay up at least four nights."],
      ["Other gaps on the house", "Openings the bats aren't using right now still have to be sealed, or the colony moves to them."],
      ["Roof height and type", "A steep, two-story tile roof takes more time and equipment than a single-story shingle roof."],
      ["How long the colony has been there", "An old roost leaves more guano on the insulation, and sometimes the insulation has to come out."],
      ["Roof condition", "Rotted fascia, loose soffits or cracked tiles need a contractor's repair before they can be sealed."],
      ["Timing", "From April 16 to August 14, exclusion waits unless FWC issues a permit, so the job may be split into an inspection now and exclusion later."],
    ),
    h3("Why timing matters in Florida"),
    p(
      `FWC's April 2026 announcement sets bat maternity season at April 16 through August 14. April 15 is the last day to exclude bats without a permit, and exclusion is legal again from August 15. The exclusion itself has rules too: devices on the key exits, left up at least four nights, with overnight lows forecast at 50°F or warmer. ([FWC](${RELEASE}))`,
      "Our [bat maternity season guide](/blog/bat-maternity-season-guide/) has the full calendar. That doesn't change what an exclusion costs, but it changes when you pay for it. A summer call usually means an inspection and some sealing of gaps the bats aren't using, then the exclusion once the season opens.",
    ),
    h3("What a bat removal job usually includes"),
    ul(
      "**Inspection** of the whole roofline and attic to find every opening, the roost and the extent of the guano.",
      "**One-way exclusion devices** on the active exits, left up until no bats are left.",
      "**Sealing** of every opening once the bats are out.",
      "**Guano cleanup** and, where needed, insulation removal. Our guide to [attic cleanup costs](/blog/attic-wildlife-cleanup-cost-in-florida-prices-tips/) covers that part.",
    ),
    h3("Doing it yourself versus calling a pro"),
    p(`Florida's rules leave little room for do-it-yourself bat removal. Florida law protects bats: FWC says harming them isn't allowed, poison, relocation and fumigants are illegal to use on bats, and bats sealed inside a building die there ([FWC](${BUILDINGS})). The savings from a store-bought device disappear fast if a missed opening lets the colony back in, or if bats end up trapped in a wall.`),
    p("What you can do yourself: watch the roofline at dusk to see where the bats come out, and keep the attic door closed. That information also makes the inspection quicker."),
    h3("Cleanup: the part of the bill people forget"),
    p(
      "Guano builds up under the roost for as long as the colony stays. The CDC recommends a respirator in a confined space with bat droppings, and FWC notes that guano in a dry, unused space can usually be left alone. In a used attic, with ductwork and stored belongings, it usually comes out. That can range from a light cleanup to removing all the insulation under the roost.",
    ),
    h3("How to get an accurate quote"),
    p("Bat quotes vary because houses vary. Ask these questions, of us or anyone else, so you're comparing the same job:"),
    ul(
      "**Does it cover every opening,** or only the ones the bats use today? Sealing only the obvious gap just moves the colony.",
      "**When will the exclusion happen?** Exclusion between April 16 and August 14 is illegal without an FWC permit. If someone offers it, ask to see the permit.",
      "**How long do the one-way devices stay up?** FWC's minimum is four nights with overnight lows forecast at 50°F or warmer.",
      "**Is guano cleanup included,** or priced after the bats are out?",
      "**What happens if bats get back in?** Ask what the follow-up covers and for how long.",
    ),
    h3("Red flags"),
    ul(
      "**Anyone offering to trap, poison or fumigate bats.** FWC says relocation, poison and fumigants are illegal on bats in Florida.",
      "**An exclusion booked in June or July without a permit.** That's maternity season, when pups can't fly yet.",
      "**Sealing the holes the same day.** Bats that can't get out die inside the building, FWC warns. Sealing comes after the devices have done their job.",
    ),
    h3("Signs you're dealing with a large colony"),
    p("Bigger colonies take longer to clear and leave more guano. FWC's brochure says to look for bats at dusk or dawn as they leave or return, light brown stains around the openings they use, and black, dry guano under the roost. Many bats leaving several gaps at sunset, or a deep pile of guano on the insulation, usually means a bigger job. Florida has 13 resident bat species, and FWC describes the Brazilian free-tailed bat as common in buildings."),
    h3("Ways to keep the cost down"),
    ul(
      "**Call early.** A young roost leaves less guano behind than one that has been there for years.",
      "**Plan around the calendar.** Book the inspection in spring or summer so the exclusion can start soon after August 15.",
      "**Don't block the exits yourself.** Trapped bats mean dead bats in the walls and a second bill for [odor and dead animal removal](/services/dead-animal-removal/).",
      "**Put up a bat house before the exclusion.** FWC suggests one close to the roost, in the bats' flight path, on a pole or building. It doesn't replace exclusion, but gives the colony somewhere to go.",
    ),
    p("Read more on our [bat removal](/services/bat-removal/) and [bats in the attic](/services/bats-in-attic/) pages, see [Florida's trapping rules](/blog/florida-wildlife-trapping-rules/) for the other animals, or call (727) 594-7705. We exclude bats across [Pinellas](/service-areas/pinellas-county/), [Hillsborough](/service-areas/hillsborough-county/) and seven more counties."),
  ),
  faq: [
    faq("Is bat removal cheaper in winter?", "Not necessarily cheaper, but easier to schedule. Exclusion is allowed from August 15 to April 15, as long as overnight lows are forecast at 50°F or warmer during the exclusion."),
    faq("Does homeowners insurance cover bat removal?", "It depends entirely on your policy. Ask your insurer before the work starts, and keep the inspection report."),
    faq("Can I just buy a one-way device and do it myself?", "You can, but the rules still apply: no exclusion in maternity season without a permit, devices on every key exit for at least four nights, and every other gap sealed. A missed gap means paying twice."),
  ],
  seo: {
    title: "Bat Removal Cost in Florida (2026) | Pro Wildlife Removal",
    description:
      "What sets bat removal cost in Florida: number of exits, roof height, how long the colony has been there, guano cleanup and the April 16 to Aug 14 season.",
  },
  sources: [
    { title: "FWC news release, April 6, 2026 (maternity season April 16 to Aug 14; exclusion Aug 15 to April 15; four nights; 50°F; permits during the season)", url: RELEASE },
    { title: "FWC: Bats in buildings (harming not allowed; poison, relocation and fumigants illegal; sealed-in bats die; guano can be left in dry unused spaces; CDC respirator advice)", url: BUILDINGS },
    { title: "FWC and UF/IFAS: A guide to living with bats (13 resident species; signs: dusk and dawn, light brown stains, black dry guano)", url: "https://myfwc.com/media/nu2fvsvj/livingwithbats.pdf" },
    { title: "FWC: Bats (Brazilian free-tailed bat common in buildings; bat houses not a substitute for exclusion)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/" },
  ],
  clientQuestions: [
    "Can the site show a typical price range for bat exclusion, and for guano cleanup?",
    "What does a bat job include as standard (inspection fee, follow-up, warranty) and what is priced separately?",
    "Named author for guides and posts (the plan asks for a named person).",
  ],
};
