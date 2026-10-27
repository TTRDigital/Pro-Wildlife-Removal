import type { Post } from "../../../types";
import { faq, h3, p, rich, table } from "../pt.ts";

/* Guide (TTR-738 blog #5): what animal is in my attic? By time of night, sound and droppings. Links the existing droppings and noises posts instead of repeating them. */
const DUVAL = "https://sfyl.ifas.ufl.edu/media/sfylifasufledu/duval/horticulture/commercial-hort/CC-Feb_Mar-2023.pdf";
const GADSDEN = "https://gadsden.floridahealth.gov/programs-and-services/environmental-health/rodent-control/";
const FWC_SQ = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/squirrels/";
const FLYING = "https://gardeningsolutions.ifas.ufl.edu/design/gardening-with-wildlife/cavity-dwellers/";
const FWC_RAC = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/raccoon/";
const UW471 = "https://ask.ifas.ufl.edu/publication/UW471";
const UW548 = "https://ask.ifas.ufl.edu/publication/UW548";
const FWC_BATS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";
const UW369 = "https://ask.ifas.ufl.edu/publication/UW369";

export const whatAnimalIsInMyAttic: Post = {
  slug: "what-animal-is-in-my-attic",
  title: "What Animal Is in My Attic? Sounds, Times and Droppings",
  excerpt:
    "When you hear it is the strongest clue: night means rats or another nocturnal animal, daytime means squirrels, dusk and dawn mean bats. Here's how to narrow it down by time, sound and droppings.",
  date: "2026-10-26T00:00:00+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Josh Holmberg",
  body: rich(
    p(
      "**The short answer:** start with when you hear it. Noise at night into early morning points to rats, and heavier thumps at night to a raccoon or opossum. Noise in the daytime is usually squirrels. Quiet attics with animals leaving at dusk are bats. Droppings then confirm it. Call (844) 264-6254 for an inspection.",
    ),
    h3("Step 1: When do you hear it?"),
    p(
      `UF/IFAS Extension in Duval County puts it simply: noise from night to early morning is likely a nocturnal animal such as a roof rat, Norway rat or house mouse, and noise during the day is more likely a squirrel ([UF/IFAS](${DUVAL})).`,
    ),
    table(
      ["Animal", "When it's active", "What the agencies say"],
      ["Roof rat", "Night, peaking near dusk and dawn", "Most active one hour after sunset and one hour before dawn, and likes high places such as attics (Florida DOH)"],
      ["Norway rat", "Night, from about dusk", "Mainly nocturnal, and tends to live on lower floors (Florida DOH)"],
      ["Gray squirrel", "Daytime", "Active during the day, and sometimes nests in attics (FWC)"],
      ["Flying squirrel", "Night", "Nocturnal, sometimes nests in attics, with excited cheeps in the first hours after dark (UF/IFAS)"],
      ["Raccoon", "Late afternoon through the night", "Usually active from late afternoon and through the night (FWC)"],
      ["Opossum", "Night", "Nocturnal and solitary (UF/IFAS)"],
      ["Bats", "Leaving at dusk, returning at dawn", "Seen entering or leaving at dawn or dusk (FWC)"],
    ),
    h3("Step 2: What does it sound like?"),
    p(
      `Light, quick scurrying and gnawing are typical of rats. Heavy walking and thumps suggest something bigger: our post on [raccoon noises at night](/blog/raccoon-noises-at-night/) covers the sounds raccoons make, and [raccoon vs rats in the attic](/blog/raccoon-vs-rats-in-the-attic-how-to-tell-the-difference/) compares the two. UF/IFAS says opossums hiss, click, growl and screech ([UF/IFAS](${UW471})). Bats are different: UF/IFAS notes they're quiet, don't chatter or gnaw on wood, and you can confirm them by watching them leave the eaves at dusk ([UF/IFAS](${UW548})).`,
    ),
    h3("Step 3: What did it leave behind?"),
    p(
      `UF/IFAS says droppings the size of rice grains could be from rats, mice or bats, smaller oval pellets could be from squirrels, and raccoon scat has blunt ends and is about an inch thick ([UF/IFAS](${UW369})). Florida DOH adds that rats leave dark grease stains from their fur along pipes, wires and the holes they use ([Florida DOH](${GADSDEN})).`,
    ),
    p(
      `To tell bat guano from mouse droppings, FWC says bat droppings crumble to powder when crushed and may show shiny bits of insect wings, while mouse droppings don't crumble, and bat guano piles up where mouse droppings don't ([FWC](${FWC_BATS})). For pictures and sizes, see [what rat poop looks like](/blog/what-does-rat-poop-look-like-a-comprehensive-guide/) and [squirrel poop vs rat poop](/blog/squirrel-poop-vs-rat-poop-how-to-spot-the-difference/).`,
    ),
    h3("Why it matters which animal it is"),
    p(
      "Each animal comes with its own Florida rules. FWC allows bat exclusion without a permit only from August 15 to April 15, and what can be done with a trapped raccoon, opossum or rat depends on the species. Our guide to [Florida wildlife trapping rules](/blog/florida-wildlife-trapping-rules/) covers the details. Naming the animal correctly decides what's legal and what works.",
    ),
    p("Next steps by animal: [rats in the attic](/services/rats-in-attic/), [squirrels in the attic](/services/squirrels-in-attic/), [raccoons in the attic](/services/raccoons-in-attic/), [opossums in the attic](/services/opossums-in-attic/) and [bats in the attic](/services/bats-in-attic/)."),
  ),
  faq: [
    faq(
      "What animal makes noise in the attic at night?",
      "Often rats, especially roof rats, which Florida DOH says are most active an hour after sunset and an hour before dawn. Heavier thumps at night suggest a raccoon or opossum, and soft cheeps in the first hours after dark can be flying squirrels.",
    ),
    faq(
      "What's in my attic in the morning?",
      "Daytime noise is probably gray squirrels, which FWC says are active during the day and sometimes nest in attics.",
    ),
    faq(
      "How can I tell if I have bats and not rats?",
      "Bats are quiet and don't gnaw, so watch the eaves at dusk for bats flying out. Their droppings crumble to powder and pile up under the roost, which mouse droppings don't.",
    ),
    faq(
      "Should I go up and look myself?",
      "You can look for droppings and damage, but wear gloves, don't sweep or vacuum droppings, and never touch a bat or a cornered animal.",
    ),
  ],
  seo: {
    title: "What Animal Is in My Attic? | Pro Wildlife Removal",
    description:
      "What animal is in your attic? Tell rats, squirrels, raccoons, opossums and bats apart by when you hear them, the sounds they make and their droppings.",
  },
  sources: [
    { title: "UF/IFAS Extension Duval: Commercial horticulture newsletter, Feb/Mar 2023 (night to early morning: roof rat, Norway rat or house mouse; daytime: squirrel)", url: DUVAL },
    { title: "Florida DOH Gadsden: Rodent control (roof rats most active one hour after sunset and one hour before dawn, like high places such as attics; Norway rats nocturnal, active from dusk, lower floors; grease stains)", url: GADSDEN },
    { title: "FWC: Squirrels (gray squirrels active during the day; sometimes nest in attics)", url: FWC_SQ },
    { title: "UF/IFAS Gardening Solutions: Cavity dwellers (southern flying squirrels nocturnal; sometimes nest in attics; cheeps in the first hours after sunset)", url: FLYING },
    { title: "FWC: Raccoon profile (active from late afternoon and through the night)", url: FWC_RAC },
    { title: "UF/IFAS EDIS UW471: Virginia opossum (nocturnal and solitary; hissing, clicking, growling and screeching)", url: UW471 },
    { title: "UF/IFAS EDIS UW548: Has Your House Gone Batty? Facts about Bats (bats are quiet, don't chatter or gnaw; confirm by watching them exit at dusk)", url: UW548 },
    { title: "FWC: Bats in buildings (seen entering or leaving at dawn or dusk; bat droppings crumble to powder, may show insect wing pieces, pile up)", url: FWC_BATS },
    { title: "UF/IFAS EDIS UW369: identifying wildlife signs (rice-grain droppings: rats, mice, bats; smaller oval pellets: squirrels; raccoon scat blunt-ended, about 1 inch thick)", url: UW369 },
  ],
  clientQuestions: [],
};
