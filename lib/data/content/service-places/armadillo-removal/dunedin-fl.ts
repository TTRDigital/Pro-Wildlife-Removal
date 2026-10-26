import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Armadillo removal in Dunedin (TTR-738, Rhea). Dunedin armadillo facts: the
 * city's Honeymoon Island page and the state's 2022 Honeymoon and Caladesi
 * Island park plans, Pinellas Extension on tortoise eggs, and FWC rules.
 */
const BEACHES = "https://www.dunedin.gov/Community/Beaches-Coast";
const HONEYMOON = "https://floridadep.gov/sites/default/files/2022%20Approved%20Plan%20-%20Honeymoon%20Island.pdf";
const CALADESI = "https://floridadep.gov/sites/default/files/2022%20Approved%20Plan%20-%20Caladesi%20Island.pdf";
const TORTOISE = "https://blogs.ifas.ufl.edu/pinellasco/2025/04/10/gopher-tortoise-day-shell-a-brate-this-keystone-species/";
const FWC = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/armadillo/";
const RELOCATE = "https://myfwc.com/conservation/you-conserve/wildlife/relocate/";

export const armadilloRemovalDunedin = servicePlacePage({
  service: "armadillo-removal",
  animal: "Armadillo",
  animals: "Armadillos",
  place: "dunedin-fl",
  placeName: "Dunedin",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-dunedin",
  county: "Pinellas",
  order: 13,
  heroText: "Small holes torn through your Dunedin lawn overnight, or a burrow beside the foundation? We find the armadillo and handle it within Florida's rules. Call (727) 594-7705.",
  answerHeading: "How do I get an armadillo out of my Dunedin yard?",
  answer:
    "Under FWC rules, a Dunedin homeowner may live-trap a nuisance armadillo, but it must be euthanized, released on site, or taken to private land of 40 acres or more in Pinellas with the owner's written permission. Pro Wildlife Removal handles armadillos digging lawns or burrowing under Dunedin homes. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "On Honeymoon for years", "Not native to the islands"],
  localHeading: "Armadillos in Dunedin",
  localIntro: "The state treats armadillos on Dunedin's barrier islands as a problem species. Here's what the city and the park plans say.",
  local: [
    { icon: "leaf", title: "On the city's own list", text: p("The City of Dunedin's beaches page names armadillos, along with gopher tortoises and raccoons, among the ground animals on Honeymoon Island.") },
    { icon: "clock", title: "Around for years", text: p("Honeymoon Island's 2022 state park plan says nine-banded armadillos have been documented on the island for many years, more steadily than coyotes.") },
    { icon: "search", title: "Marked non-native", text: p("In the Honeymoon Island species list, the nine-banded armadillo carries the plan's asterisk for non-native species.") },
    { icon: "balance", title: "Caladesi wants them gone", text: p("Caladesi Island's 2022 plan says armadillos are established on the island and should be removed when possible.") },
    { icon: "drop", title: "Turtle nests under cages", text: p("On Caladesi, staff cage sea turtle nests every summer to keep raccoons and armadillos from eating eggs and hatchlings. Honeymoon staff watch for armadillo damage to turtle nests and gopher tortoises.") },
    { icon: "critter", title: "Tortoise eggs at risk", text: p("UF/IFAS Extension Pinellas notes armadillos can dig up gopher tortoise eggs. Tortoises live on Honeymoon Island and in Dunedin's own Hammock Park.") },
  ],
  contactsIntro: "Who to call about an armadillo in Dunedin, from state pages.",
  contacts: [
    { icon: "search", title: "Free advice from FWC", text: p("FWC's Wildlife Interaction Reporting Form gives quick technical help with armadillos.") },
    { icon: "map-pin", title: "Armadillos in a state park", text: p("Let Honeymoon or Caladesi Island State Park staff know.") },
    { icon: "home", title: "An armadillo at your home", text: p("Call us at (727) 594-7705.") },
  ],
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Dunedin armadillo job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Why are there so many armadillo holes in my Dunedin lawn?",
      "Armadillos root for earthworms and insect larvae. FWC says moist soil and lush vegetation bring those foods to the surface, so keeping watering and fertilizing to a minimum can help.",
    ),
    faq(
      "Can I release a trapped armadillo on Honeymoon Island?",
      "No. FWC doesn't allow nuisance armadillos to be released on publicly owned land, and the state's Caladesi plan says armadillos on the islands should be removed, not added.",
    ),
    faq(
      "Are armadillos native to Dunedin?",
      "No. The Honeymoon Island plan lists the nine-banded armadillo as non-native. FWC says the species spread into Florida and was also introduced, and is now naturalized here.",
    ),
    faq(
      "Do armadillos carry disease?",
      "They can. FWC lists leprosy, St. Louis encephalitis and leptospires among the diseases armadillos may carry. Use gloves and avoid handling one.",
    ),
    faq(
      "How soon can you come out for an armadillo in Dunedin?",
      "Same-day armadillo appointments are often available in Dunedin. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for an armadillo call in Dunedin]",
    ),
  ],
  ctaHeading: "Armadillo digging up your Dunedin yard?",
  ctaText: "For armadillos in Dunedin, call (727) 594-7705.",
  seo: {
    title: "Armadillo Removal in Dunedin, FL | Pro Wildlife Removal",
    description:
      "Armadillo removal in Dunedin, FL: lawn digging and burrows handled under FWC rules, and what state park plans say about Honeymoon Island. (727) 594-7705.",
  },
  sources: [
    { title: "City of Dunedin: Beaches and coast (Honeymoon Island ground animals include gopher tortoises, raccoons and armadillos)", url: BEACHES },
    { title: "Florida DEP: Honeymoon Island State Park unit management plan, 2022 (nine-banded armadillo and coyote documented on the island for many years; coyotes more sporadic than armadillo; monitor sea turtle nesting and gopher tortoise mortality for coyote, raccoon and armadillo impacts; species list marks nine-banded armadillo as non-native)", url: HONEYMOON },
    { title: "Florida DEP: Caladesi Island State Park unit management plan, 2022 (nine-banded armadillos established and should be removed when possible; staff cage sea turtle nests every summer against raccoons and armadillos)", url: CALADESI },
    { title: "UF/IFAS Extension Pinellas: Gopher Tortoise Day, April 10, 2025 (raccoons and armadillos can dig up tortoise eggs)", url: TORTOISE },
    { title: "FWC Great Florida Birding Trail: Hammock Park (gopher tortoises)", url: "https://floridabirdingtrail.com/site/hammock-park/" },
    { title: "FWC: Armadillo profile (range expanded into Florida; introductions; naturalized; live-trap or humanely destroy; euthanize, release on-site, or 40+ acres in the same county with written permission; minimize watering and fertilization; diseases incl. leprosy; Wildlife Interaction Reporting Form)", url: FWC },
    { title: "FWC: Relocating wildlife (publicly owned lands such as county, state or federal parks can't be relocation sites without the land manager's written permission)", url: RELOCATE },
  ],
  clientQuestions: ["Typical response time for an armadillo call in Dunedin?", "How does the client handle armadillos (trapping, exclusion fencing, burrow work)?", "A real Google review from a Dunedin armadillo job (TTR-723), and real Dunedin armadillo job photos."],
});
