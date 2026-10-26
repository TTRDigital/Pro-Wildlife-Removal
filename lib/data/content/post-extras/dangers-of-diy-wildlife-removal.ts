import type { PostExtra } from "./index.ts";
import { faq, p } from "../pt.ts";

const FWC_NEWS = "https://myfwc.com/news/all-news/wildlife-trapping-0226/";
const FWC_TRAP_RULES = "https://myfwc.com/wildlifehabitats/wildlife/trapping-rules/";
const DOH_RABIES = "https://www.floridahealth.gov/diseases-and-conditions/disease/rabies/";
const EPA_RODENTICIDES = "https://www.epa.gov/rodenticides/restrictions-rodenticide-products";
const CDC_CLEANUP = "https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html";
const FWC_RELOCATE = "https://myfwc.com/conservation/you-conserve/wildlife/relocate/";
const FWC_BATS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";

export const extra_dangersOfDiyWildlifeRemoval: PostExtra = {
  slug: "dangers-of-diy-wildlife-removal",
  seoDescription: "Why DIY wildlife removal in Florida is risky: bites and rabies, droppings and disease, poison rules, and FWC trapping changes that start Dec. 31, 2026.",
  more: p(
    "Before you set a trap or start pulling insulation apart, it helps to know the rules and the risks. Our guide to [Florida's wildlife trapping rules](/blog/florida-wildlife-trapping-rules/) explains what a homeowner may do, [wildlife exclusion vs trapping](/blog/wildlife-exclusion-vs-trapping-differences-for-homeowners/) compares the two approaches, and [rat bait stations and safety](/blog/rat-bait-stations-and-safety-a-comprehensive-guide/) covers poison around kids and pets. You can also read about [raccoon removal](/services/raccoon-removal/) and [dead animal removal](/services/dead-animal-removal/) in Central Florida. Call (727) 594-7705.",
  ),
  faq: [
    faq(
      "Will I need FWC registration to trap an animal at my house?",
      "Possibly, starting Dec. 31, 2026. FWC's February 2026 news release says that, with few exceptions, its new rules require annual registration and training at no cost for anyone using traps to capture wildlife. FWC's trapping rules page exempts homeowners trapping on their own property with only one regular-sized cage trap (20 inches wide and 28 inches high) aimed at nonnative or nuisance wildlife.",
    ),
    faq(
      "What should I do if a raccoon or other wild animal bites me?",
      "The Florida Department of Health says to scrub the wound right away with lots of soap and running water for five to ten minutes, then go to your health care provider or the nearest emergency room. It also says to call your county health department or animal control with a description of the animal and where it is.",
    ),
    faq(
      "Can I buy the same rat poison that pest control companies use?",
      "No. The EPA says second-generation anticoagulant rodenticides, such as brodifacoum and bromadiolone, are no longer registered for consumer products and are sold only to the commercial and structural pest control markets. Rodenticides sold to consumers come as ready-to-use bait stations holding block or paste bait.",
    ),
    faq(
      "Is it OK to sweep up droppings I find in the attic or garage?",
      "The CDC says not to vacuum or sweep rodent urine, droppings or nesting materials, because diseases mainly reach people when they breathe in contaminated air. Put on rubber or plastic gloves and spray the mess with a bleach solution or an EPA-registered disinfectant until it is very wet before you wipe it up.",
    ),
  ],
  sources: [
    { title: "FWC news release, Feb. 4, 2026: final trapping rule amendments (effective Dec. 31, 2026; with few exceptions, annual registration and training at no cost for anyone using traps)", url: FWC_NEWS },
    { title: "FWC: Wildlife trapping rules (homeowners on their own property using only one regular-sized 20\" wide by 28\" high cage trap for nonnative or nuisance wildlife exempt from registration, training and reporting)", url: FWC_TRAP_RULES },
    { title: "Florida Department of Health: Rabies (if an animal bites, scrub the wound with soap and running water for five to ten minutes; see a health care provider; call the county health department or animal control)", url: DOH_RABIES },
    { title: "EPA: Restrictions on rodenticide products (second-generation anticoagulants not registered for consumer products; consumer products are ready-to-use bait stations with block or paste bait)", url: EPA_RODENTICIDES },
    { title: "CDC: How to clean up after rodents (don't vacuum or sweep urine, droppings or nesting materials; gloves; spray with bleach solution or EPA-registered disinfectant until very wet)", url: CDC_CLEANUP },
    { title: "FWC: Relocating wildlife (native nuisance wildlife may be released off site only within the county of capture, on a minimum of 40 contiguous acres, with written permission from the release site owner; public lands need the land manager's written permission)", url: FWC_RELOCATE },
    { title: "FWC: Bats in buildings (exclusion is the only legal method; illegal during maternity season, April 16 to August 14; poison, relocations and fumigants illegal to use on bats in Florida)", url: FWC_BATS },
  ],
};
