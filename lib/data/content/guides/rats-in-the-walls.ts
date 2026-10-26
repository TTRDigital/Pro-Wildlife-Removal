import type { Post } from "../../../types";
import { faq, h3, p, rich, ul } from "../pt.ts";

/* Guide (TTR-738 rats and bats): rats in the walls. Distinct from signs-that-your-house-has-rats and rats-in-attic-signs: focuses on walls, sealing and why bait leads to the smell (links blog #4). */
const SANTAROSA = "https://blogs.ifas.ufl.edu/santarosaco/2016/01/29/controlling-rats-and-mice-around-the-farm/";
const GADSDEN = "https://gadsden.floridahealth.gov/programs-and-services/environmental-health/rodent-control/";
const DUVAL = "https://sfyl.ifas.ufl.edu/media/sfylifasufledu/duval/horticulture/commercial-hort/CC-Feb_Mar-2023.pdf";
const PINELLAS = "https://blogs.ifas.ufl.edu/pinellasco/2022/07/25/management-of-rodents/";
const UW372 = "https://ask.ifas.ufl.edu/publication/UW372";
const PI284 = "https://ask.ifas.ufl.edu/publication/PI284";
const IN1397 = "https://ask.ifas.ufl.edu/publication/IN1397";

export const ratsInTheWalls: Post = {
  slug: "rats-in-the-walls-florida",
  title: "Rats in the Walls: How to Tell and What to Do in Florida",
  excerpt:
    "Scratching inside the walls at night usually means rats using the wall as a highway between the attic and food. Here's how to confirm it, how they get in, and why bait often ends with a smell.",
  date: "2026-10-26T00:00:00+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Josh Holmberg",
  body: rich(
    p(
      "**The short answer:** scratching or scurrying inside a wall at night, with droppings or gnawing nearby, usually means rats. In Florida it's often roof rats moving between the attic and food below. Seal the gaps they use, then trap the rats inside along their paths. Poison can leave a dead rat in the wall. Call (727) 594-7705.",
    ),
    h3("How to tell it's rats"),
    ul(
      `**Night noise.** UF/IFAS says rats are most active at night, and Florida DOH says roof rats peak about an hour after sunset and an hour before dawn ([Florida DOH](${GADSDEN})).`,
      `**Droppings or urine stains,** which UF/IFAS calls the usual first signs. Check baseboards, cabinets and under sinks ([UF/IFAS](${SANTAROSA})).`,
      `**Rub marks and gnawing.** UF/IFAS Extension in Duval lists droppings, urine, rub marks and gnawing as the tell-tale signs, and DOH describes dark grease stains where rats run.`,
      `**Sounds that move up and down,** which suggests rats traveling between the attic and floor level.`,
    ),
    p(`If you're not sure it's rats, our guide to [what animal is in your attic](/blog/what-animal-is-in-my-attic/) compares the usual suspects.`),
    h3("Roof rats or Norway rats?"),
    p(
      `Florida DOH says roof rats prefer high places such as attics, while Norway rats tend to stay on lower floors. Roof rats are strong climbers: UF/IFAS says they can jump three feet straight up and more than four feet across, and recommends pruning limbs away from the house ([UF/IFAS](${IN1397})). More on telling them apart in [Norway rat vs roof rat](/blog/norway-rat-vs-roof-rat-florida/).`,
    ),
    h3("How they get into the walls"),
    p(
      `UF/IFAS says rats can get through gaps of about half an inch, and DOH notes roof rats need only a hole the size of a quarter. Common routes are roof returns, gaps where pipes and A/C lines go through the wall, and openings under the eaves. UF/IFAS Extension in Duval warns that rodents easily chew through spray foam ([UF/IFAS](${DUVAL})). UF/IFAS Extension in Santa Rosa says to close gaps with mortar, concrete, sheet metal or 19-gauge hardware cloth with no openings over ¼ inch ([UF/IFAS](${SANTAROSA})).`,
    ),
    h3("Trap, don't poison, inside walls"),
    ul(
      `**Snap traps** are the most affordable option, UF/IFAS Extension in Pinellas says, and glue boards aren't humane because they prolong death ([UF/IFAS](${PINELLAS})).`,
      `**Place traps along walls,** near holes, or across beams and rafters where rats travel, as UF/IFAS advises.`,
      `**Poison is a last resort.** Pinellas Extension says rodenticides can take several days to kill, and UF/IFAS says toxic baits are legal only for non-native rats and house mice and must be in bait boxes ([UF/IFAS](${UW372})).`,
    ),
    h3("Why bait can end with a smell"),
    p(
      `Poisoned rats don't die on the spot. Our [dead animal smell](/blog/dead-animal-smell-in-wall-or-attic-florida/) guide has UF/IFAS's timeline for anticoagulant bait ([UF/IFAS](${PI284})), and by then a rat may be back inside the wall it lives in. That guide also covers what to do if it happens.`,
    ),
    h3("The usual order"),
    ul(
      "**Inspect** the roofline, attic and outside walls for every gap.",
      "**Seal** the openings, leaving none the rats can still use.",
      "**Trap** the rats left inside along their paths, and check the traps often.",
      "**Clean up** droppings with gloves and disinfectant, never by sweeping or vacuuming.",
    ),
    p("See [rat removal](/services/rat-removal/), [rats in the attic](/services/rats-in-attic/) and [rat removal in Tampa](/services/rat-removal/tampa-fl/), or call (727) 594-7705."),
  ),
  faq: [
    faq(
      "How do I know if rats are in my walls?",
      "Listen for scratching or scurrying at night, and look for droppings, urine stains, gnaw marks and dark rub marks near baseboards, under sinks and where pipes come through.",
    ),
    faq(
      "Will rats in the walls leave on their own?",
      "Not usually, as long as they have food nearby and a way in. The openings have to be sealed and the rats inside trapped.",
    ),
    faq(
      "Should I put poison in the walls?",
      "UF/IFAS Extension treats poison as a last resort. Poisoned rats can take days to die, often back inside the wall, which leaves a dead rat you can't reach and a smell.",
    ),
    faq(
      "Can I fill the holes with spray foam?",
      "UF/IFAS Extension warns rodents easily chew through spray foam. Use mortar, sheet metal or heavy hardware cloth instead, then trap any rats left inside.",
    ),
  ],
  seo: {
    title: "Rats in the Walls in Florida | Pro Wildlife Removal",
    description:
      "Rats in the walls? How to tell it's rats, how roof rats get into Florida walls, why traps beat poison inside walls, and the seal-then-trap order to use.",
  },
  sources: [
    { title: "UF/IFAS Extension Santa Rosa: Controlling rats and mice around the farm (droppings or urine stains first signs, active at night; ½-inch gaps; seal with mortar, concrete, sheet metal or 19-gauge hardware cloth with no openings over ¼ inch; trap along walls, near holes, along beams and rafters)", url: SANTAROSA },
    { title: "Florida DOH Gadsden: Rodent control (roof rats most active one hour after sunset and before dawn; high places such as attics; Norway rats lower floors; quarter-sized hole; grease stains; gnawing)", url: GADSDEN },
    { title: "UF/IFAS Extension Duval: Commercial horticulture newsletter, Feb/Mar 2023 (droppings, urine, rub marks, gnawing; rodents easily chew through spray foam)", url: DUVAL },
    { title: "UF/IFAS EDIS IN1397: Landscaping methods to prevent pests from entering your home (jump three feet up, more than four feet across; prune limbs away from the house)", url: IN1397 },
    { title: "UF/IFAS Extension Pinellas: Management of rodents (snap traps most affordable; glue boards not humane; rodenticides take several days; poison as a last resort)", url: PINELLAS },
    { title: "UF/IFAS EDIS UW372 (toxic baits legal only for non-native rats and house mice; bait boxes required by law)", url: UW372 },
    { title: "UF/IFAS EDIS PI284 (anticoagulants: deaths typically 4 days to 2 weeks after feeding on bait)", url: PI284 },
  ],
  clientQuestions: [],
};
