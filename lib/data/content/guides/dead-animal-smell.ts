import type { Post } from "../../../types";
import { faq, h3, p, rich, ul } from "../pt.ts";

/* Guide (TTR-738 blog #4): dead animal smell in a wall or attic. New slug. No odor-duration claim: no live primary source gives one. */
const CDC = "https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html";
const PI284 = "https://ask.ifas.ufl.edu/publication/PI284";
const FWC_BATS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";

export const deadAnimalSmell: Post = {
  slug: "dead-animal-smell-in-wall-or-attic-florida",
  title: "Dead Animal Smell in a Wall or Attic: What to Do in Florida",
  excerpt:
    "A rotten smell that gets stronger in one room usually means an animal died in a wall, ceiling or attic. Here's how to narrow down where it is, how to remove it safely, and why poison bait often causes it.",
  date: "2026-10-26T00:00:00+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Josh Holmberg",
  body: rich(
    p(
      "**The short answer:** a strong, sweet, rotten smell that's worst in one room usually means a rat, squirrel or other animal died inside a wall, ceiling or attic. Find where it's strongest, remove the carcass with gloves, double-bag it, disinfect the area, then find out how the animal got in. Call (727) 594-7705 if you can't reach it.",
    ),
    h3("Why it happens"),
    p(
      `Animals that get into a house often die where you can't see them. Poison bait is a common reason: UF/IFAS says rodents that eat anticoagulant bait, a common kind, usually die four days to two weeks after they start feeding, plenty of time to crawl back into a wall or attic first ([UF/IFAS](${PI284})). Animals sealed inside by a well-meant repair are another. FWC warns that bats shut into a building die there, and that their decay can produce strong odors and draw pests such as cockroaches ([FWC](${FWC_BATS})).`,
    ),
    h3("How to find where it is"),
    ul(
      "**Follow your nose room by room.** The smell is usually strongest on the wall, ceiling or closet nearest the carcass.",
      "**Check the attic above that room,** especially along the edges where the roof meets the walls, and around insulation that looks disturbed.",
      "**Look for stains** on drywall or ceiling, and for flies gathering at one spot on a window or light fixture.",
      "**Think about recent activity.** Scratching that stopped suddenly, or bait put out in the last couple of weeks, points to where the animal was living.",
    ),
    h3("Removing it safely"),
    p(`Here are the CDC's steps for dead rodents and their droppings. They're a sensible guide for other small animals too ([CDC](${CDC})):`),
    ul(
      "Open doors and windows for 30 minutes before you start.",
      "Wear rubber or plastic gloves.",
      "Wet the carcass and everything around it with a disinfectant or a bleach mix (1 part bleach, 9 parts water), then wait 5 minutes.",
      "Put the animal in a plastic bag with any used traps, then put that bag in a second bag, and throw it in a covered garbage can that's emptied regularly.",
      "Don't sweep or vacuum droppings, urine or nesting material. Wipe them up with paper towels after soaking.",
      "Wash your hands with soap and warm water after you take the gloves off.",
    ),
    p("If the animal is behind drywall, it may mean cutting a small access hole at the strongest spot."),
    h3("Why waiting it out isn't a plan"),
    p(
      `Removing the carcass matters for more than the smell. UF/IFAS advises removing dead rodents promptly so pets and wildlife don't eat a poisoned animal ([UF/IFAS](${PI284})). And a dead animal in the wall means there's a way in that's still open. Our [rats in the walls](/blog/rats-in-the-walls-florida/) guide covers finding it.`,
    ),
    h3("Stop the next one"),
    ul(
      "**Find the entry.** Look at roof returns, vents and gaps where pipes and A/C lines go through the wall.",
      "**Seal it the right way.** For rats, seal the gaps and then trap any left inside. For bats and other animals, seal only once they're out, so nothing is trapped inside.",
      "**Think twice about poison indoors.** Traps let you find and remove the animal; bait often doesn't.",
    ),
    p("See [dead animal removal](/services/dead-animal-removal/), [rats in the attic](/services/rats-in-attic/) and [rat removal](/services/rat-removal/), or call (727) 594-7705."),
  ),
  faq: [
    faq(
      "What does a dead animal in the wall smell like?",
      "Many people describe a strong, sweet, rotten smell that's worst near one wall, ceiling or closet. Flies gathering at one spot are another clue.",
    ),
    faq(
      "Why did the smell start after I put out rat poison?",
      "Poisoned rodents don't die right away. UF/IFAS says death from anticoagulant bait usually comes four days to two weeks after they start eating it, so they often die back in the wall or attic where they live.",
    ),
    faq(
      "Can I just throw a dead rat in the garbage?",
      "Yes, if you bag it properly. The CDC says to double-bag it with gloves on and put it in a covered garbage can that's emptied regularly, then disinfect the spot and wash your hands.",
    ),
    faq(
      "Should I cover the smell with air freshener?",
      "It won't fix anything. The carcass keeps decaying and can draw flies and other pests. Find it and remove it, or have it removed.",
    ),
  ],
  seo: {
    title: "Dead Animal Smell in a Wall or Attic | Pro Wildlife Removal",
    description:
      "A dead animal smell in a wall or attic? How to find where it is, remove it safely with CDC steps, and why rat poison is often the cause in Florida homes.",
  },
  sources: [
    { title: "CDC: How to clean up after rodents (ventilate 30 minutes; gloves; bleach 1:9, soak 5 minutes; double-bag dead rodents with traps; covered garbage can; no sweeping or vacuuming; wash hands)", url: CDC },
    { title: "UF/IFAS EDIS PI284: rodenticides (anticoagulants: deaths typically 4 days to 2 weeks after rodents begin feeding on bait; remove carcasses promptly to prevent secondary poisoning)", url: PI284 },
    { title: "FWC: Bats in buildings (bats sealed inside die; decay produces strong odors and can attract pests such as cockroaches)", url: FWC_BATS },
  ],
  clientQuestions: ["Do you cut and patch drywall to remove dead animals, or refer that out?"],
};
