import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/* Bat removal in Tampa (TTR-738). Every card is one sourced fact about bats in Tampa or Hillsborough County. */
const PARK = "https://www.tampa.gov/art-programs/Riverfront-Park";
const DOH2024 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf";
const DOH2025 = "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf";
const ALERT = "https://www.floridahealth.gov/wp-content/uploads/2026/09/rabies-alert-hillsborough-9-14-26.pdf";
const GUIDE = "https://escambia.floridahealth.gov/wp-content/uploads/sites/19/2025/04/rabiesguide2014-web.pdf";
const FWC = "https://myfwc.com/news/all-news/bat-maternity-0426/";

export const batRemovalTampa = servicePlacePage({
  service: "bat-removal",
  animal: "Bat",
  animals: "Bats",
  place: "tampa-fl",
  placeName: "Tampa",
  placeKind: "city",
  location: "about-us/service-area/tampa/wildlife-removal-service-in-tampa-fl",
  county: "Hillsborough",
  order: 3,
  heroText: "Bats under the tiles, in a soffit or in the attic of a Tampa home? We find every exit, set one-way doors when Florida law allows and seal the openings once the colony is out. Call (727) 594-7705.",
  answerHeading: "How are bats removed from a Tampa home?",
  answer:
    "By exclusion: one-way doors on the exits the colony uses, then sealing once every bat is out. In Tampa, as everywhere in Florida, that's legal without an FWC permit only from August 15 to April 15, and bats can't be captured, relocated or poisoned. Pro Wildlife Removal inspects first and plans around the season. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Exclusion only, Aug 15 to Apr 15", "Free-tails active all year"],
  localHeading: "What to know about bats in Tampa",
  localIntro: "The City of Tampa says bats live all over the city. Here's what the city and the health department say about them.",
  local: [
    { icon: "sound", title: "Throughout the city", text: p("The City of Tampa says bats can be found throughout the city, and that Brazilian free-tailed bats are the most common in the area. It notes these bats stay active year-round.") },
    { icon: "home", title: "A bat house downtown", text: p("At Julian B. Lane Riverfront Park, the city's bat house was built by biologist Steve Barlow and can hold about 4,000 bats.") },
    { icon: "search", title: "Rabid bats in Hillsborough", text: p("Hillsborough's 2025 table listed four rabid bats among six rabid animals, according to the Florida Department of Health.") },
    { icon: "map-pin", title: "More than the table shows", text: p("In 2024 the county's table listed two rabid bats, and a footnote adds three more from Hillsborough found through surveillance testing that aren't counted in the table.") },
    { icon: "leaf", title: "A first in the nation", text: p("The state's rabies guide says rabies in insect-eating bats in the United States was first recognized in 1953, in a yellow bat from Hillsborough County.") },
    { icon: "phone", title: "Keep them out of living space", text: p("The September 2026 DOH-Hillsborough rabies alert tells residents to keep bats and other wildlife out of living quarters or occupied spaces in homes, schools and similar areas.") },
    { icon: "critter", title: "Hands off a grounded bat", text: p("The city says free-tails rarely bite unless handled in self-defense, and that a bat found alone or on the ground shouldn't be handled at all.") },
  ],
  contactsIntro: "Who to call about bats in Tampa, from the agencies' own pages.",
  contacts: [
    { icon: "phone", title: "Bat contact or a bite", text: p("If a bat may have touched anyone, or someone woke up with one in the room, call DOH-Hillsborough at 813-307-8059; the bat may need testing.") },
    { icon: "users", title: "A colony in the house", text: p("The City of Tampa says wildlife on private property needs a private removal service. Call us at (727) 594-7705.") },
    { icon: "map-pin", title: "Rules and permits", text: p("FWC sets the maternity season and issues the permits required for exclusion between April 16 and August 14.") },
  ],
  attic: { slug: "bats-in-attic", label: "Bats in the attic" },
  extraLink: { label: "Bat maternity season", href: "/blog/bat-maternity-season-guide/", text: "Why exclusion stops from April 16 to August 14, and what you can do meanwhile." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Tampa bat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Can bats be removed from a Tampa house in summer?",
      "Only with an FWC permit. Bat maternity season runs April 16 through August 14, and exclusion devices are legal from August 15 to April 15. A summer call usually means an inspection now and the exclusion once the season opens.",
    ),
    faq(
      "Are Tampa's bats active in winter?",
      "The City of Tampa says Brazilian free-tailed bats, the most common bats here, stay active year-round. FWC still requires overnight lows forecast at 50°F or warmer during an exclusion.",
    ),
    faq(
      "Do bats in Hillsborough County carry rabies?",
      "Some do. Four of Hillsborough's six rabid animals in the 2025 state table were bats. Never handle a bat, and call DOH-Hillsborough if a person or pet may have been exposed.",
    ),
    faq(
      "There's one bat flying in my living room. What do I do?",
      "Close it into one room with a window or door open to the outside and let it leave. If it may have touched anyone, or someone woke up with it in the room, call DOH-Hillsborough first.",
    ),
    faq(
      "How soon can you look at a bat problem in Tampa?",
      "Same-day appointments for bat inspections are often available in Tampa. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a bat inspection in Tampa]",
    ),
  ],
  ctaHeading: "Bats in your Tampa home?",
  ctaText: "Tampa bat calls go to (727) 594-7705.",
  seo: {
    title: "Bat Removal in Tampa, FL | Pro Wildlife Removal",
    description:
      "Bat removal in Tampa, FL: legal exclusion with one-way doors from August 15 to April 15, then sealing, plus Tampa's bats and rabies data. (727) 594-7705.",
  },
  sources: [
    { title: "City of Tampa: Julian B. Lane Riverfront Park art (bat house built by biologist Steve Barlow, about 4,000 bats; bats throughout the City of Tampa; Brazilian free-tailed bats most common, active year-round; rarely bite unless handled; don't handle a bat alone or on the ground)", url: PARK },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Hillsborough: 4 bats, 1 cat, 1 raccoon; total 6)", url: DOH2025 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Hillsborough table: 2 bats, 1 cat; footnote: 3 more rabid bats from Hillsborough found by surveillance testing, not in the table)", url: DOH2024 },
    { title: "Florida DOH: Rabies Prevention and Control in Florida, 2014 (first U.S. recognition of rabies in insectivorous bats, 1953, a yellow bat from Hillsborough County)", url: GUIDE },
    { title: "DOH-Hillsborough: Rabies alert, September 14, 2026 (prevent wildlife, including bats, from entering living quarters or occupied spaces in homes, schools and similar areas)", url: ALERT },
    { title: "FWC news release, April 2026 (maternity season April 16 through Aug. 14; exclusion devices legal Aug. 15 to April 15; devices up at least four nights; lows at 50°F or warmer)", url: FWC },
    { title: "FWC: Bats in buildings (a single bat in the living space; no trapping, poison or relocation)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/" },
    { title: "City of Tampa: Animal services, Hillsborough County (wildlife on private property: use private removal services)", url: "https://www.tampa.gov/service/animal-services-hillsborough-county" },
    { title: "DOH-Hillsborough: Report an animal bite (813-307-8059)", url: "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/report-an-animal-bite/" },
  ],
  clientQuestions: ["Typical response time for a bat inspection in Tampa?", "A real Google review from a Tampa bat job (TTR-723), and real Tampa bat job photos."],
});
