import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Raccoon removal in Dunedin (TTR-738, Rhea). Dunedin raccoon facts: the city's
 * Honeymoon Island page, the state's 2022 Honeymoon and Caladesi Island park
 * plans (USDA removals, nest and trash raids), Dunedin's trash rules, and the
 * Pinellas feeding rule and FWC release rule.
 */
const BEACHES = "https://www.dunedin.gov/Community/Beaches-Coast";
const HONEYMOON = "https://floridadep.gov/sites/default/files/2022%20Approved%20Plan%20-%20Honeymoon%20Island.pdf";
const CALADESI = "https://floridadep.gov/sites/default/files/2022%20Approved%20Plan%20-%20Caladesi%20Island.pdf";
const TRASH = "https://www.dunedin.gov/City-Services/Garbage-Recycling/Residential-Trash-Yard-Bulk-Waste";
const GARBAGE = "https://www.dunedin.gov/City-Services/Garbage-Recycling";
const RELOCATE = "https://myfwc.com/conservation/you-conserve/wildlife/relocate/";

export const raccoonRemovalDunedin = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "dunedin-fl",
  placeName: "Dunedin",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-dunedin",
  county: "Pinellas",
  order: 13,
  heroText: "A raccoon in the attic or under the deck of your Dunedin home? We find where it's getting in, check for young, remove the raccoons and seal the gap. Call (727) 594-7705.",
  answerHeading: "Who gets a raccoon out of a Dunedin house?",
  answer:
    "A private wildlife company. Pinellas County Animal Services helps with sick or injured wildlife, but a raccoon living in a Dunedin attic or crawl space is the owner's to deal with. Pro Wildlife Removal removes raccoons from Dunedin homes, checks for young first and then seals the entry. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Honeymoon Island: 103 removed", "Bag trash before the cart"],
  localHeading: "Raccoons in Dunedin",
  localIntro: "Dunedin's islands and causeway put it next to some of the most raccoon-heavy ground in Pinellas. The state's own park plans say so.",
  local: [
    { icon: "leaf", title: "Named by the city", text: p("The City of Dunedin's beaches page lists raccoons, gopher tortoises and armadillos among the ground animals on Honeymoon Island, at the end of the 2.5-mile Dunedin Causeway.") },
    { icon: "search", title: "103 raccoons in nine days", text: p("Before the 2021 nesting season, the state brought in USDA to trap raccoons on Honeymoon Island's beach. The park's 2022 management plan says USDA staff removed 103 raccoons in nine days.") },
    { icon: "drop", title: "A \"significant issue\" for turtles", text: p("The same plan calls raccoon predation on sea turtle nests a significant issue on the island. Surveyors cage each nest they find to keep raccoons from digging up the eggs.") },
    { icon: "critter", title: "Beach birds too", text: p("Park staff on Honeymoon Island have documented raccoons raiding shorebird nests again and again, and raccoons are removed there before nesting season.") },
    { icon: "home", title: "Trash is the draw", text: p("On Caladesi Island, trash from visiting boats isn't allowed in park cans because raccoons raid them so often. At Honeymoon, the state moves curbside trash away from the shore to keep raccoons and fish crows from feeding there.") },
    { icon: "wrench", title: "Bag it, then cart it", text: p("Dunedin collects trash once a week and asks residents to bag household garbage before it goes in the cart. The city sets a window for carts: out after 6 p.m. the night before, off the curb by 7 a.m. the morning after pickup.") },
    { icon: "balance", title: "Parks aren't release sites", text: p("FWC says publicly owned land, including county, state and federal parks, can't be used to release a trapped nuisance animal without the land manager's written permission. Honeymoon and Caladesi are state parks.") },
  ],
  contactsIntro: "Who to call about a raccoon in Dunedin, from the county's and the health department's own pages.",
  contacts: [
    { icon: "users", title: "Sick or injured raccoon", text: p("Pinellas County Animal Services, (727) 582-2600, option 4, helps with pickup and transport.") },
    { icon: "phone", title: "A bite or scratch", text: p("Get it looked at, then report it to DOH-Pinellas, 727-824-6932.") },
    { icon: "home", title: "A raccoon in your home", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "Florida's trapping, checking and release rules in plain terms." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Dunedin raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Are there a lot of raccoons in Dunedin?",
      "Near the water, yes. The state's park plan records 103 raccoons removed from Honeymoon Island's beach in nine days in 2021, and the City of Dunedin lists raccoons among the island's ground animals.",
    ),
    faq(
      "Can I release a trapped raccoon on Honeymoon Island?",
      "No. FWC doesn't allow trapped nuisance animals to be released on state, county or federal park land without the land manager's written permission, and the park itself removes raccoons to protect turtle and bird nests.",
    ),
    faq(
      "What keeps raccoons out of Dunedin garbage carts?",
      "Bag household garbage before it goes in the cart, as the city asks, and keep the lid closed. Put the cart out no earlier than 6 p.m. the night before pickup.",
    ),
    faq(
      "Can I get in trouble for feeding raccoons in Dunedin?",
      "Florida's wildlife feeding rule prohibits placing food in a way that attracts raccoons, and Pinellas County Code Sec. 14-30(4) treats food or garbage set out to attract them as a public nuisance.",
    ),
    faq(
      "Could someone see our Dunedin raccoon problem today?",
      "Same-day raccoon appointments are often available in Dunedin. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a raccoon call in Dunedin]",
    ),
  ],
  ctaHeading: "Raccoon in your Dunedin home?",
  ctaText: "Raccoons in a Dunedin roof or crawl space? Call (727) 594-7705.",
  seo: {
    title: "Raccoon Removal in Dunedin, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in Dunedin, FL: raccoons out of attics and crawl spaces, young checked first, and what the state found on Honeymoon Island. (727) 594-7705.",
  },
  sources: [
    { title: "City of Dunedin: Beaches and coast (Honeymoon Island ground animals include gopher tortoises, raccoons and armadillos; 2.5-mile causeway route from Bayshore Boulevard)", url: BEACHES },
    { title: "Florida DEP: Honeymoon Island State Park unit management plan, 2022 (USDA removed 103 raccoons from the beach in 9 days; raccoon depredation of turtle nests a significant issue; self-releasing cages; bird nest predation by raccoons documented repeatedly; raccoons removed prior to nesting season; curbside trash moved away from the shore)", url: HONEYMOON },
    { title: "Florida DEP: Caladesi Island State Park unit management plan, 2022 (trash from visiting boats not allowed in park cans because raccoons frequently raid them)", url: CALADESI },
    { title: "City of Dunedin: Residential trash, yard and bulk waste (bag household garbage to avoid bugs and rodents; curb no earlier than 6 p.m. the night before; carts removed by 7 a.m. the day after)", url: TRASH },
    { title: "City of Dunedin: Garbage and recycling (trash, recycling and yard waste once a week)", url: GARBAGE },
    { title: "FWC: Relocating wildlife (publicly owned lands such as county, state or federal parks can't be relocation sites without written permission from the land manager)", url: RELOCATE },
    { title: "FWC: Detriments of feeding wildlife (rule prohibits placing food in a manner that attracts black bears, coyotes, foxes and raccoons)", url: "https://myfwc.com/conservation/you-conserve/wildlife/feeding/" },
    { title: "Pinellas County: Animal Services enforcement (Sec. 14-30(4): food or garbage that attracts raccoons or other wildlife is a public nuisance)", url: "https://pinellas.gov/animal-services-enforcement/" },
    { title: "Pinellas County: Injured or orphaned wildlife (Animal Services (727) 582-2600 option 4: wildlife pickup and transport for sick or injured wildlife)", url: "https://pinellas.gov/injured-or-orphaned-wildlife/" },
    { title: "DOH-Pinellas: Rabies information (report a possible rabies exposure at 727-824-6932)", url: "https://pinellas.floridahealth.gov/programs-and-services/infectious-diseases/epidemiology/rabies-information/" },
  ],
  clientQuestions: ["Typical response time for a raccoon call in Dunedin?", "A real Google review from a Dunedin raccoon job (TTR-723), and real Dunedin raccoon job photos."],
});
