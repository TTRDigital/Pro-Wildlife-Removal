import type { Post } from "../../../types";
import { faq, h3, p, rich, table, ul } from "../pt.ts";

/* Guide, rewritten for the rebuild (Ben, Oct 26): how fast do rats reproduce. Same URL as the old post. Every figure is linked; the old post's unlinked gestation, weaning and "5 to 7 weeks" maturity figures and its population model are cut. Maturity follows DOH-Gadsden ("2-3 months after birth"). */
const DOH = "https://gadsden.floridahealth.gov/programs-and-services/environmental-health/rodent-control/";
const UC = "https://ipm.ucanr.edu/home-and-landscape/rats/";
const CDC = "https://www.cdc.gov/healthy-pets/rodent-control/index.html";
const SANTAROSA = "https://blogs.ifas.ufl.edu/santarosaco/2016/01/29/controlling-rats-and-mice-around-the-farm/";

export const howFastDoRatsReproduce: Post = {
  slug: "how-fast-do-rats-reproduce",
  title: "How Fast Do Rats Reproduce? The Rat Breeding Cycle in Florida",
  excerpt:
    "A roof rat can have several litters a year, and her young can breed within a few months. Here's what Florida DOH and university experts say about rat breeding, and why one rat in the attic is worth acting on.",
  date: "2026-10-26T00:00:00+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Josh Holmberg",
  body: rich(
    p(
      `**The short answer:** fast. Florida DOH says a roof rat can have up to 8 litters a year with 6 to 8 young in each, and those young become sexually active 2 to 3 months after birth ([Florida DOH](${DOH})). That's how a few attic rats become many in one season. Call (727) 594-7705 for an inspection.`,
    ),
    h3("The numbers, by source"),
    table(
      ["", "Florida DOH (Gadsden)", "University of California IPM"],
      ["Roof rat litters", "Up to 8 a year", "Usually 3 to 5 on average"],
      ["Young per litter", "6 to 8", "Up to 8"],
      ["Age at breeding", "Sexually active 2 to 3 months after birth", "Not stated"],
      ["Norway rat", "Not stated", "4 to 6 litters a year; can wean 20 or more young a year"],
    ),
    p(
      `The two agencies give different figures: Florida DOH gives the upper end for roof rats ([Florida DOH](${DOH})), and UC IPM gives averages ([UC IPM](${UC})).`,
    ),
    h3("Why it matters in a Florida attic"),
    p(
      `Roof rats generally like high places such as attics, Florida DOH says ([Florida DOH](${DOH})), while Norway rats burrow to nest under buildings and other structures. A warm attic with insulation to nest in and fruit trees or pet food nearby gives a female everything she needs to raise one litter after another. More on telling the two species apart in [Norway rat vs roof rat](/blog/norway-rat-vs-roof-rat-florida/).`,
    ),
    h3("Signs they're breeding"),
    ul(
      `**Droppings that keep coming back.** The CDC says droppings that reappear after a cleanup mean rats are still active ([CDC](${CDC})).`,
      "**More noise over time,** especially scratching that spreads to new parts of the ceiling.",
      "**Nests** of shredded insulation or paper, sometimes with young in them.",
      "**Fresh gnaw marks** on wiring, wood or stored boxes.",
    ),
    p("Our guides to [signs your house has rats](/blog/signs-that-your-house-has-rats/) and [rats in the attic](/blog/rats-in-attic-signs/) go into more detail."),
    h3("What to do about it"),
    p(
      `Because young rats grow up and breed so quickly, catching a few isn't enough if the way in is still open. UF/IFAS Extension says rodent-proofing has to block every possible entry point to work, and rats can get through gaps of about half an inch ([UF/IFAS](${SANTAROSA})). UF/IFAS lists rodent-proofing first, then sanitation, then trapping ([UF/IFAS](${SANTAROSA})).`,
    ),
    p("See [rat removal](/services/rat-removal/), [rats in the attic](/services/rats-in-attic/) and [how to catch a rat in the house](/blog/how-to-catch-a-rat-in-the-house-a-comprehensive-guide-for-florida-homeowners/), or call (727) 594-7705."),
  ),
  faq: [
    faq(
      "How many babies can a rat have in a year?",
      `Florida DOH says a roof rat can have up to 8 litters a year with 6 to 8 young each ([Florida DOH](${DOH})). UC IPM puts the roof rat average at 3 to 5 litters of up to 8 ([UC IPM](${UC})).`,
    ),
    faq(
      "How old are rats when they start breeding?",
      `Florida DOH says roof rats become sexually active 2 to 3 months after birth ([Florida DOH](${DOH})), so young born in the attic can be breeding within the same season.`,
    ),
    faq(
      "Can one rat turn into an infestation?",
      `It can grow quickly: Florida DOH says young roof rats can breed 2 to 3 months after birth ([Florida DOH](${DOH})). That's why it pays to seal entry points and trap early.`,
    ),
    faq(
      "Will trapping alone stop rats breeding?",
      `Not if the gaps they use stay open. UF/IFAS Extension says rodent-proofing must block all possible entry points, followed by sanitation and then trapping ([UF/IFAS](${SANTAROSA})).`,
    ),
  ],
  seo: {
    title: "How Fast Do Rats Reproduce? | Pro Wildlife Removal",
    description:
      "How fast do rats reproduce? Florida DOH and UC IPM figures on litters, litter size and breeding age, the signs rats are breeding, and how to stop it early.",
  },
  sources: [
    { title: "Florida DOH Gadsden: Rodent control (roof rats up to 8 litters a year of 6-8; sexually active 2-3 months after birth; roof rats like high places such as attics; Norway rats burrow under buildings and slabs)", url: DOH },
    { title: "University of California IPM: Rats (roof rats average 3 to 5 litters, up to 8 young each; Norway rats 4 to 6 litters a year, can wean 20 or more young annually)", url: UC },
    { title: "CDC: Controlling wild rodent infestations (droppings present after cleaning indicate an active rodent population)", url: CDC },
    { title: "UF/IFAS Extension Santa Rosa: Controlling rats and mice around the farm (½-inch gaps; block all possible entry points; rodent-proofing, then sanitation, then trapping)", url: SANTAROSA },
  ],
  clientQuestions: [],
};
