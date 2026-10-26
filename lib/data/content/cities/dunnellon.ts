import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Dunnellon page, new for the rebuild (Nia, Oct 26, 2026; Kia: every Google Ads area gets a page). Checkable local facts only, about rats, bats, squirrels and raccoons. */
const EDR = "https://www.edr.state.fl.us/Content/population-demographics/data/Estimates2025.pdf";
const RSAP = "https://floridadep.gov/sites/default/files/Rainbow-Springs-AP-Management-Plan.pdf";

export const dunnellon = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-dunnellon-fl",
  name: "Dunnellon",
  county: "Marion",
  order: 42,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN DUNNELLON",
  summary: "Wildlife removal in Dunnellon, FL: raccoons, rats, squirrels, bats, opossums and more, on the Rainbow River in southwest Marion County.",
  heroText: "A small city on the Rainbow and Withlacoochee rivers, where the state's preserve plan documents raccoons and two kinds of squirrel. Call (727) 594-7705.",
  answerHeading: "Who removes wildlife in Dunnellon, FL?",
  answer:
    "Animals living in a Dunnellon home are a private company's job. DOH-Marion's alerts send Marion residents to Marion County Animal Services for strays and bites to pets, and to the health department for human bites. Pro Wildlife Removal handles raccoons, rats, squirrels and bats in Dunnellon. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "On the Rainbow River", "About 2,000 residents"],
  townsHeading: "Dunnellon and nearby",
  townsIntro: "Dunnellon had an estimated 2,022 residents in 2025. We serve it along with Ocala, Silver Springs and the rest of Marion.",
  towns: [
    {
      title: "Marion County",
      href: "/about-us/service-area/wildlife-removal-marion-county-fl/",
      items: [
        { label: "Ocala", href: "/about-us/service-area/wildlife-removal-ocala-fl/" },
        { label: "Silver Springs", href: "/about-us/service-area/wildlife-removal-silver-springs-fl/" },
        { label: "Belleview" },
        { label: "Summerfield" },
      ],
    },
  ],
  localHeading: "Wildlife along Dunnellon's rivers",
  localIntro: "Florida's management plan for the Rainbow Springs Aquatic Preserve, which takes in part of Dunnellon, keeps a list of the animals found along the river. Here is what it says about the ones we handle.",
  local: [
    { icon: "map-pin", title: "A preserve inside the city", text: p("The Rainbow Springs Aquatic Preserve lies in southwest Marion County and takes in part of the city of Dunnellon, following the 5.7-mile Rainbow River to the Withlacoochee, per the state's 2016 management plan.") },
    { icon: "critter", title: "Raccoons on the river", text: p("The plan's list of species documented in and around the preserve includes the raccoon.") },
    { icon: "leaf", title: "Gray squirrels", text: p("The gray squirrel is also on the plan's list of documented species along the Rainbow River.") },
    { icon: "search", title: "A protected fox squirrel", text: p("The plan documents Sherman's fox squirrel along the river and marks it as a state species of special concern, its status when the plan was written in 2016.") },
    { icon: "home", title: "Bats and rats in range", text: p("Six bat species, from the evening bat to the Mexican free-tailed bat, plus Norway and black rats, are on the plan's list of potential species: within range of the preserve but not yet documented there.") },
    { icon: "drop", title: "Marion's rabies record", text: p("Marion County's rabies tables listed a rabid bat and 2 raccoons in 2022, and 6 rabid raccoons in 2025.") },
  ],
  contactsIntro: "Who handles what in Dunnellon, from DOH-Marion's alerts and FWC's own pages.",
  contacts: [
    { icon: "users", title: "Marion County Animal Services", text: p("352-671-8727, for strays and for bites to pets or livestock.") },
    { icon: "phone", title: "Human bites: DOH-Marion", text: p("352-629-0137.") },
    { icon: "map-pin", title: "Bears and alligators: FWC", text: p("FWC's Northeast Region office in Ocala, 352-732-1225. Nuisance alligators: 866-FWC-GATOR.") },
  ],
  servicesIntro: "Every service we offer is available in Dunnellon. Choose an animal to learn more.",
  servicesHeading: "Animals we remove in Dunnellon",
  reviewsIntro: "[PLACEHOLDER: reviews from Dunnellon customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Are there raccoons and squirrels along the Rainbow River?",
      "Yes. The state's 2016 plan for the Rainbow Springs Aquatic Preserve documents raccoons, gray squirrels and Sherman's fox squirrels along the river.",
    ),
    faq(
      "Has rabies been found near Dunnellon?",
      "Marion County's tables listed 6 rabid raccoons in 2025. Check DOH-Marion's newsroom for current alerts, keep pets vaccinated and don't handle wildlife.",
    ),
    faq(
      "Who do I call about a bite in Dunnellon?",
      "For a person, DOH-Marion at 352-629-0137. For a pet or livestock bitten by an animal, Marion County Animal Services at 352-671-8727.",
    ),
    faq(
      "How soon can you get to Dunnellon?",
      "Same-day appointments are often available in Dunnellon. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time in Dunnellon]",
    ),
  ],
  ctaHeading: "Wildlife problem in Dunnellon?",
  ctaText: "Dunnellon homeowners can call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Dunnellon, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Dunnellon, FL: raccoons, rats, squirrels and bats, plus what the Rainbow River preserve plan records and who to call about a bite.",
  },
  sources: [
    { title: "Florida EDR: April 1, 2025 population estimates (Dunnellon 2,022; 2020 Census 1,928)", url: EDR },
    { title: "Florida DEP: Rainbow Springs Aquatic Preserve Management Plan, June 2016 (southwest Marion County, encompassing a portion of the city of Dunnellon; 5.7 miles of Rainbow River to the Withlacoochee; documented species include raccoon, grey squirrel, Sherman's fox squirrel (SSC); potential species, in range but not documented: Rafinesque's big-eared, red, southeastern, evening, Eastern pipistrelle and Mexican free-tailed bats, southern flying squirrel, Norway rat, black rat)", url: RSAP },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Marion: 1 bat, 2 raccoons)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2022.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Marion: 6 raccoons)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
    { title: "DOH-Marion: Rabies advisory, Sept. 18, 2026 (Marion County Animal Services 352-671-8727; DOH-Marion 352-629-0137)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/09/rabies-advisory-marion-9-18-26.pdf" },
    { title: "FWC: Regional offices (Northeast Region includes Marion; Ocala office 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Typical response time in Dunnellon?", "Real job photos and reviews from Dunnellon customers."],
});
