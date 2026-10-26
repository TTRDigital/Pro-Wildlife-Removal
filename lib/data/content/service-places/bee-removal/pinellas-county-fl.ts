import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Bee removal in Pinellas County (TTR-738, Rhea). County-wide bee facts: the
 * unincorporated-county rule on bees on private property, Bee City USA and the
 * county's native bee work, the FDACS list for Pinellas, and African bees in the
 * Tampa Bay area. How the client handles bees is still a client question, so this
 * page doesn't describe a method.
 */
const CODE = "https://pinellas.gov/code-enforcement-frequently-asked-questions/";
const BEECITY = "https://pinellas.gov/pinellas-county-bee-city-usa/";
const BLOG = "https://blogs.ifas.ufl.edu/pinellasco/2024/04/11/did-you-know-we-are-a-bee-city/";
const FDACS = "https://www.fdacs.gov/Consumer-Resources/Consumer-Rights-and-Responsibilities/Pest-Control/Honey-Bee-Removal-or-Eradication-in-Florida";
const LIST = "https://www.fdacs.gov/content/download/120558/file/honeybeereList-2025-2026-end-of-q4.xlsx";
const IN1205 = "https://ask.ifas.ufl.edu/publication/IN1205";

export const beeRemovalPinellasCounty = servicePlacePage({
  service: "bee-removal",
  animal: "Bee",
  animals: "Bees",
  place: "pinellas-county-fl",
  placeName: "Pinellas County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-pinellas-county",
  order: 10,
  heading: "Bee Removal in Pinellas County, FL",
  heroText: "Honey bees going in and out of a wall, soffit or meter box at your Pinellas home? Keep people and pets back, don't spray, and call (727) 594-7705.",
  answerHeading: "Who removes bees from a house in Pinellas County?",
  answer:
    "In unincorporated Pinellas County, the county says property owners are responsible for removing bees on their land. Florida lets a registered beekeeper remove a colony alive, and only a licensed pest control company may kill one. Pro Wildlife Removal takes bee calls across Pinellas; call (727) 594-7705 and keep your distance until then.",
  points: ["Call (727) 594-7705", "Owner's job on private land", "Don't spray or seal the hole"],
  localHeading: "Bees in Pinellas County",
  localIntro: "Pinellas works hard to protect bees, and most of its bees never bother anyone. A honey bee colony inside a house is a different matter.",
  local: [
    { icon: "balance", title: "Bees on private property", text: p("Pinellas County Code Enforcement's FAQ says property owners are responsible for removing bees on private property. That answer covers unincorporated Pinellas; cities set their own rules.") },
    { icon: "leaf", title: "Florida's first Bee City county", text: p("Pinellas became a Bee City USA in March 2023, under Resolution No. 22-101, the first county in Florida with that designation. Its Parks and Conservation Resources Department runs the effort.") },
    { icon: "bug", title: "Most native bees live alone", text: p("The county notes that most of its native bees are solitary. Its iNaturalist bee projects ask residents to log native bees only, not honey bees, which are the kind that build colonies in walls.") },
    { icon: "star", title: "A national pollinator record", text: p("Pinellas County recorded the most pollinator observations in the nation during the September 2026 NRPA Parks for Pollinators BioBlitz.") },
    { icon: "map-pin", title: "Room for pollinators", text: p("UF/IFAS Extension Pinellas counts about 20,000 acres of parks and preserves in the county, and a 2023 bee survey at Eagle Lake Park logged 800 observations of 292 species of pollinators and host plants.") },
    { icon: "users", title: "33 local names on the state list", text: p("The Florida Department of Agriculture's Bee Removal or Eradication list has 33 entries for Pinellas County: registered beekeepers who remove bees, pest control companies that eradicate them, or both.") },
    { icon: "search", title: "African bees in the bay area", text: p("UF/IFAS says African honey bees were first documented in Florida in 2001 near the Port of Tampa, across the bay. Their colonies can defend in large numbers, so treat any Pinellas colony with care.") },
  ],
  contactsIntro: "Who handles what when bees move into a Pinellas home, from county and state pages.",
  contacts: [
    { icon: "phone", title: "Someone was stung many times", text: p("Call 911.") },
    { icon: "users", title: "Find a registered beekeeper", text: p("FDACS publishes its Bee Removal or Eradication list by county.") },
    { icon: "home", title: "A colony in your wall or roof", text: p("Call us at (727) 594-7705.") },
  ],
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Pinellas County bee job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Does Pinellas County remove bees from private property?",
      "No. The county's Code Enforcement FAQ says property owners are responsible for removing bees on private property in unincorporated Pinellas. Inside a city, check with that city.",
    ),
    faq(
      "Who is allowed to remove a honey bee colony in Florida?",
      "FDACS says a registered beekeeper can remove some established colonies alive and move them to an apiary, while killing a colony is pest control that only a licensed pest control company may do.",
      "[PLACEHOLDER: ask the client: how you handle bees (live removal by a registered beekeeper, eradication, or both) and who does the work]",
    ),
    faq(
      "Should I spray a bee colony in my Pinellas wall?",
      "No. UF/IFAS leaves colonies to a pest control operator or registered beekeeper, and says every remain, from wax and honey to pollen and dead bees, should come out afterward, sometimes with structural repair. Until then, keep people and pets away.",
    ),
    faq(
      "Are the bees at my house African bees?",
      "They could be. UF/IFAS says African bees had established colonies around Tampa by 2003 and have since hybridized with local European honey bees across the southern half of Florida. Treat every colony as if it might be defensive.",
    ),
    faq(
      "How soon can you look at a bee problem in Pinellas County?",
      "Same-day bee inspections are often available in Pinellas County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a bee call in Pinellas County]",
    ),
  ],
  ctaHeading: "Bees in your Pinellas home?",
  ctaText: "Keep back from the colony and call (727) 594-7705.",
  seo: {
    title: "Bee Removal in Pinellas County | Pro Wildlife Removal",
    description:
      "Bee removal in Pinellas County, FL: honey bee colonies in walls and roofs, who may remove or kill bees under Florida law, and county rules. (727) 594-7705.",
  },
  sources: [
    { title: "Pinellas County: Code Enforcement frequently asked questions (property owners are responsible for removing bees on private property; unincorporated county)", url: CODE },
    { title: "Pinellas County: Bee City (Bee City USA, first county in Florida, March 2023, Resolution No. 22-101; Parks and Conservation Resources; most native bees solitary; iNaturalist natives only, no honeybees; most pollinator observations in the nation in the September 2026 NRPA Parks for Pollinators BioBlitz)", url: BEECITY },
    { title: "UF/IFAS Extension Pinellas: Did you know we are a Bee City?, April 11, 2024 (20,000 acres of parks and preserves; 2023 Eagle Lake Park bioblitz: 800 observations of 292 species of pollinators and host plants)", url: BLOG },
    { title: "FDACS: Honey bee removal or eradication in Florida (registered beekeepers may remove some established colonies and relocate them; only a licensed pest control company may eradicate a colony, s. 482.021, F.S.; list of registered beekeepers and certified pest control operators)", url: FDACS },
    { title: "FDACS: Bee removal or eradication list, 2025-2026 (33 entries with County = Pinellas)", url: LIST },
    { title: "UF/IFAS EDIS ENY-170 (IN1205): Living with the African honey bee (first documented in Florida in 2001 near the Port of Tampa; African colonies send out far more defenders than European ones; established around Tampa by 2003; spread through the southern half of the state, hybridizing with European bees)", url: IN1205 },
    { title: "UF/IFAS Gardening Solutions: Nesting bees and what you should do (colony remains, wax, honey, pollen and bees, removed by the PCO or beekeeper; structural repair may be needed)", url: "https://gardeningsolutions.ifas.ufl.edu/design/gardening-with-wildlife/nesting-bees/" },
  ],
  clientQuestions: ["How do you handle bees (live removal by a registered beekeeper, eradication, or both), and who does the work?", "Typical response time for a bee call in Pinellas County?", "A real Google review from a Pinellas County bee job (TTR-723), and real Pinellas bee job photos."],
});
