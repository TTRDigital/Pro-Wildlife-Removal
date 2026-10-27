import type { PostExtra } from "./index.ts";
import { faq, p } from "../pt.ts";

const FWC_NUISANCE = "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/";
const FWC_RELOCATE = "https://myfwc.com/conservation/you-conserve/wildlife/relocate/";
const FWC_BATS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";
const CDC_HISTO = "https://www.cdc.gov/histoplasmosis/about/index.html";

export const extra_typesOfAnimalsFoundUnderTheHouse: PostExtra = {
  slug: "types-of-animals-found-under-the-house",
  seoDescription: "Raccoons, opossums, rats, snakes and more can den under a Florida house. Learn the signs, the health risks, and what Florida rules say about removing them.",
  more: p(
    "For a closer look at particular animals, see our guides to [opossums under the house](/blog/opossums-under-house-crawl-space-removal/), [raccoons living under a deck](/blog/raccoons-under-deck/) and [a dead animal smell in a wall or attic](/blog/dead-animal-smell-in-wall-or-attic-florida/). Homeowners in Central Florida can also read about [opossum removal](/services/opossum-removal/), [snake removal](/services/snake-removal/) and [armadillo removal](/services/armadillo-removal/). To have our wildlife experts look under your foundation, call (844) 264-6254.",
  ),
  faq: [
    faq(
      "Am I allowed to remove an animal from under my own house in Florida?",
      "FWC says any person owning property may take nuisance wildlife that causes an annoyance within, under or upon a building on that property, or may authorize another person to do it for them. Owners and trappers still have to comply with the laws that protect wildlife, and FWC rules list some species that cannot be taken as nuisance animals.",
    ),
    faq(
      "Can I let a trapped animal go in a park or the woods?",
      "Only under limited conditions. FWC allows native nuisance animals to be released off the capture site on land of at least 40 contiguous acres in the same county, and the person releasing it must carry written permission from that landowner. FWC adds that county, state and federal parks cannot be used without written permission from the land manager, and nonnative animals may only be moved for humane euthanasia.",
    ),
    faq(
      "Does moving the animal far away help it?",
      "Usually not, according to FWC, which calls simple relocation a popular myth. Its relocation page says moved wildlife has a poor chance of survival, risks fights with resident animals, and can carry disease into the release area.",
    ),
    faq(
      "How should I bag a dead animal I find under the house?",
      "FWC advises working outdoors and upwind, picking the carcass up with disposable gloves or plastic bags over your hands, and tying it inside a heavy plastic trash bag with the open end pointed away from your face. The gloves go into a second heavy bag along with the first one, and that outer bag is tied and placed in the garbage.",
    ),
  ],
  sources: [
    { title: "FWC: FAQs: Nuisance Wildlife (property owners may take nuisance wildlife under or upon a building; release rules; carcass bagging steps)", url: FWC_NUISANCE },
    { title: "FWC: Bats in Buildings (Florida's 13 native bat species typically roost in trees, caves or other natural spaces but may be attracted to man-made structures)", url: FWC_BATS },
    { title: "CDC: About Histoplasmosis (the fungus spreads in bird and bat droppings that mix in soil)", url: CDC_HISTO },
    { title: "FWC: Relocating Wildlife (relocation called a popular myth; poor survival; parks need written permission from the land manager)", url: FWC_RELOCATE },
  ],
};
