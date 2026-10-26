import type { PostExtra } from "./index.ts";
import { faq, p } from "../pt.ts";

const CDC_HISTO = "https://www.cdc.gov/histoplasmosis/about/index.html";
const DOH_HPS = "https://www.floridahealth.gov/diseases-and-conditions/disease/hantavirus-pulmonary-syndrome/";
const UC_RATS = "https://ipm.ucanr.edu/home-and-landscape/rats/";
const DOH_RABIES = "https://www.floridahealth.gov/diseases-and-conditions/disease/rabies/";
const FWC_BATS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";

export const extra_theDangersOfIgnoringWildlifeInYourAttic: PostExtra = {
  slug: "the-dangers-of-ignoring-wildlife-in-your-attic",
  seoDescription: "What happens when animals stay in a Florida attic: chewed wiring, soiled insulation, and health risks such as histoplasmosis and hantavirus from droppings.",
  more: p(
    "Knowing which animal is up there is the first step. Our guide to [what animal is in my attic](/blog/what-animal-is-in-my-attic/) walks through the sounds and droppings, and we also cover [bat guano in the attic](/blog/bat-guano-in-the-attic-risks-cleanup-insulation/) and [cleaning up rat droppings in a Florida attic](/blog/how-to-clean-up-rat-droppings-florida-attic/). For help with a specific animal, read about [rats in the attic](/services/rats-in-attic/), [bats in the attic](/services/bats-in-attic/) or [rat removal](/services/rat-removal/) in Central Florida. Call (727) 594-7705.",
  ),
  faq: [
    faq(
      "Can bat guano in my attic cause histoplasmosis?",
      "It is a known source. The CDC says histoplasmosis comes from breathing in spores of Histoplasma, a fungus that lives in soil and also spreads in bird and bat droppings that mix in soil. It notes the illness can become a long-term lung infection, especially in people with weakened immune systems.",
    ),
    faq(
      "Can cleaning out an attic full of rodent mess expose you to hantavirus?",
      "That is one of the ways it spreads. The Florida Department of Health lists breathing in contaminated air while cleaning up after rodents as a route of infection, along with bites and touching contaminated objects. It advises wearing gloves and soaking droppings, urine and nesting areas with disinfectant before removing them.",
    ),
    faq(
      "Can rats living in an attic start an electrical fire?",
      "University of California IPM says roof rats living in a home's attic can cause considerable damage and create safety concerns, naming electrical sparks and fires, through their gnawing and nest-building. It also notes rats gnaw on electrical wires and shred insulation for their nests.",
    ),
  ],
  sources: [
    { title: "CDC: About histoplasmosis (breathing in Histoplasma spores; fungus lives in soil and spreads in bird and bat droppings that mix in soil; long-term lung infection in people with weakened immune systems)", url: CDC_HISTO },
    { title: "Florida Department of Health: Hantavirus pulmonary syndrome (people get hantavirus from contact with rodents like rats and mice, especially their urine, droppings and saliva; breathing contaminated air when cleaning up after rodents; bites; contaminated objects; gloves and soaking with disinfectant before cleaning)", url: DOH_HPS },
    { title: "University of California IPM: Rats (roof rats in an attic can cause electrical sparks and fires through gnawing and nest-building; gnawing on electrical wires; shredding insulation)", url: UC_RATS },
    { title: "Florida Department of Health: Rabies (the main wildlife sources of rabies in Florida are raccoons and bats)", url: DOH_RABIES },
    { title: "FWC: Bats in buildings (maternity season April 16 to August 14; native bats typically roost in trees, caves or other natural spaces but may be attracted to man-made structures)", url: FWC_BATS },
  ],
};
