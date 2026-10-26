import type { PostExtra } from "./index.ts";
import { faq, p } from "../pt.ts";

const CDC_RODENTS = "https://www.cdc.gov/healthy-pets/rodent-control/index.html";
const UC_RATS = "https://ipm.ucanr.edu/home-and-landscape/rats/";
const IFAS_SANTA_ROSA = "https://blogs.ifas.ufl.edu/santarosaco/2016/01/29/controlling-rats-and-mice-around-the-farm/";
const FDOH_LEPTO = "https://www.floridahealth.gov/diseases-and-conditions/disease/leptospirosis/";

export const extra_signsThatYourHouseHasRats: PostExtra = {
  slug: "signs-that-your-house-has-rats",
  more: p(
    "For a closer look at each clue, see our guides to [what rat poop looks like](/blog/what-does-rat-poop-look-like-a-comprehensive-guide/), [rats in attic signs](/blog/rats-in-attic-signs/), and [whether rats come out during the day](/blog/do-rats-come-out-during-the-day/). Not sure it's a rat at all? Our guide to [what animal is in your attic](/blog/what-animal-is-in-my-attic/) compares sounds and droppings. You can also read about [rats in the attic](/services/rats-in-attic/) and our [rat removal](/services/rat-removal/) service in Central Florida. Call (727) 594-7705.",
  ),
  faq: [
    faq(
      "How can I tell if the rats are still active or long gone?",
      "Droppings alone can't always tell you. The CDC suggests safely cleaning the area and checking again: if droppings are present after cleaning, rodents are still active.",
    ),
    faq(
      "Does a rat seen in daylight mean there are more hiding?",
      "Often, yes. UF/IFAS Extension Santa Rosa County says rodents seen repeatedly during the day point to an established population, and estimates that around barns and poultry houses there are likely 20 to 50 unseen for every one seen by day.",
    ),
    faq(
      "How do rat gnaw marks compare with mouse gnaw marks?",
      "By size. UC IPM says rats leave tooth marks about 1/6 inch (4 mm) wide, while mice leave scratchy marks of only about 1/12 inch (2 mm).",
    ),
    faq(
      "What outdoor clues point to rats around a Florida home?",
      "UC IPM lists rats running along utility lines or fence tops at dusk, burrows under garbage cans or compost piles, nests in woodpiles, and gnawed fruit or nuts in the yard.",
    ),
    faq(
      "Can rat urine make people sick in Florida?",
      "It can spread leptospirosis. The Florida Department of Health says people catch it through contact with water, soil or vegetation contaminated by infected animals' urine, and it generally takes 2 to 30 days to get sick after contact.",
    ),
  ],
  sources: [
    { title: "CDC: Controlling Wild Rodent Infestations (if droppings are present after cleaning, this indicates an active rodent presence)", url: CDC_RODENTS },
    { title: "UF/IFAS Extension Santa Rosa County: Controlling Rats and Mice around the Farm (rodents seen repeatedly during the day indicate an established population; likely 20 to 50 unseen for every one seen around barns and poultry houses)", url: IFAS_SANTA_ROSA },
    { title: "UC IPM Pest Notes: Rats (rat tooth marks 1/6 inch (4 mm) vs mouse 1/12 inch (2 mm); rats on utility lines or fence tops at dusk; burrows, woodpile nests, gnawed fruit)", url: UC_RATS },
    { title: "Florida Department of Health: Leptospirosis (contact with water, soil or vegetation contaminated with urine of infected animals; 2-30 days to get sick)", url: FDOH_LEPTO },
  ],
};
