import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Snake removal in Dunedin (TTR-738, Rhea). Dunedin snake facts: the state's 2022
 * Honeymoon and Caladesi Island park plans (diamondbacks, pygmy rattlesnakes,
 * species list, the city's report of more rattlesnake sightings), a diamondback
 * on the Dunedin Causeway, and Pinellas Extension bite advice.
 */
const HONEYMOON = "https://floridadep.gov/sites/default/files/2022%20Approved%20Plan%20-%20Honeymoon%20Island.pdf";
const CALADESI = "https://floridadep.gov/sites/default/files/2022%20Approved%20Plan%20-%20Caladesi%20Island.pdf";
const FOX13 = "https://www.fox13news.com/news/diamondback-rattlesnake-spotted-on-dunedin-causeway";
const VENOM = "https://blogs.ifas.ufl.edu/pinellasco/2024/02/12/new-episode-from-naturally-florida-podcast-floridas-venomous-snakes/";
const FWC = "https://myfwc.com/conservation/you-conserve/wildlife/snakes/";

export const snakeRemovalDunedin = servicePlacePage({
  service: "snake-removal",
  animal: "Snake",
  animals: "Snakes",
  place: "dunedin-fl",
  placeName: "Dunedin",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-dunedin",
  county: "Pinellas",
  order: 13,
  heroText: "A snake by the pool, in the garage or under the deck of your Dunedin home? Keep back, keep pets inside, and let us identify and remove it. Call (727) 594-7705.",
  answerHeading: "Who removes snakes from Dunedin homes?",
  answer:
    "A private wildlife company. Dunedin sits beside Honeymoon and Caladesi islands, where the state records eastern diamondback rattlesnakes, so a snake you can't identify deserves caution. Pro Wildlife Removal identifies and removes snakes from Dunedin homes and yards. If anyone is bitten, call 911 first. Otherwise call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Bitten? Call 911", "Rattlesnakes on the islands"],
  localHeading: "Snakes in Dunedin",
  localIntro: "Dunedin's barrier islands hold healthy rattlesnake populations, and the city has told the state its residents are seeing more of them.",
  local: [
    { icon: "map-pin", title: "Known for diamondbacks", text: p("The state's 2022 management plan for Honeymoon Island State Park, at the end of the Dunedin Causeway, says the park \"is noted for a population of eastern diamondback rattlesnakes.\"") },
    { icon: "leaf", title: "Caladesi has them too", text: p("Caladesi Island's 2022 plan describes a healthy population of eastern diamondback rattlesnakes on the island, commonly found in its coastal strand.") },
    { icon: "search", title: "Pygmy rattlesnakes in the dunes", text: p("Honeymoon Island's plan also lists the dusky pygmy rattlesnake among the snakes found occasionally in its dunes, along with the diamondback.") },
    { icon: "users", title: "Residents are seeing more", text: p("At the public meeting on the park plans, a City of Dunedin representative said residents had increasingly reported rattlesnake sightings, especially during COVID. Park staff said signs warn visitors.") },
    { icon: "drop", title: "On the causeway", text: p("Over Memorial Day weekend in 2020, Pinellas deputies learned of a big eastern diamondback on the Dunedin Causeway, FOX 13 reported. The snake was relocated to Brooker Creek Preserve.") },
    { icon: "critter", title: "Mostly harmless neighbors", text: p("Honeymoon Island's species list is mostly harmless snakes, such as the corn snake, eastern rat snake, common kingsnake and ribbon and garter snakes.") },
  ],
  contactsIntro: "Who to call about a snake in Dunedin, from county and state pages.",
  contacts: [
    { icon: "phone", title: "A bite", text: p("Call 911. Don't wait for symptoms.") },
    { icon: "map-pin", title: "A snake in a state park", text: p("Tell park staff at Honeymoon or Caladesi Island State Park.") },
    { icon: "home", title: "A snake at your home", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Dunedin snake job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Are there rattlesnakes in Dunedin?",
      "Yes, especially near the coast. State park plans record eastern diamondbacks on both Honeymoon and Caladesi islands and dusky pygmy rattlesnakes in Honeymoon's dunes, and a Dunedin city official told the state residents were reporting more rattlesnakes.",
    ),
    faq(
      "What should I do if I see a rattlesnake in my Dunedin yard?",
      "Back away slowly, keep children and pets inside, and watch where it goes from a safe distance. Don't try to kill or catch it. Call us to remove it.",
    ),
    faq(
      "What should I do if someone is bitten?",
      "Call 911 right away, as UF/IFAS Extension Pinellas advises for any bite from a venomous snake or a snake you can't identify. Skip snakebite kits.",
    ),
    faq(
      "Are most snakes in Dunedin venomous?",
      "No. FWC says only six of Florida's 50 snake species are venomous, and many of the snakes recorded on Honeymoon Island, like corn snakes and rat snakes, are harmless.",
    ),
    faq(
      "How soon can you remove a snake in Dunedin?",
      "Same-day snake appointments are often available in Dunedin. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a snake call in Dunedin]",
    ),
  ],
  ctaHeading: "Snake at your Dunedin home?",
  ctaText: "Keep your distance and call (727) 594-7705.",
  seo: {
    title: "Snake Removal in Dunedin, FL | Pro Wildlife Removal",
    description:
      "Snake removal in Dunedin, FL: snakes identified and removed, rattlesnakes on Honeymoon and Caladesi islands, and what to do after a bite. (727) 594-7705.",
  },
  sources: [
    { title: "Florida DEP: Honeymoon Island State Park unit management plan, 2022 (\"noted for a population of eastern diamondback rattlesnakes\"; eastern diamondback and dusky pigmy rattlesnake occasionally in the dunes; species list incl. corn snake, eastern rat snake, common kingsnake, peninsula ribbon snake, common garter snake; advisory group: City of Dunedin representative said residents increasingly reported rattlesnake sightings, especially during COVID; signage warns visitors)", url: HONEYMOON },
    { title: "Florida DEP: Caladesi Island State Park unit management plan, 2022 (healthy population of eastern diamondback rattlesnakes, commonly found in the coastal strand)", url: CALADESI },
    { title: "FOX 13: Diamondback rattlesnake spotted on Dunedin Causeway, May 28, 2020 (Pinellas deputies learned of a big one over Memorial Day weekend; relocated to Brooker Creek Preserve)", url: FOX13 },
    { title: "UF/IFAS Extension Pinellas: Florida's venomous snakes, Feb. 12, 2024 (avoid snakebite kits; call 911 if bitten by a venomous or unidentified snake)", url: VENOM },
    { title: "FWC: Living with snakes (only six of Florida's 50 snake species are venomous)", url: FWC },
  ],
  clientQuestions: ["Typical response time for a snake call in Dunedin?", "A real Google review from a Dunedin snake job (TTR-723), and real Dunedin snake job photos."],
});
