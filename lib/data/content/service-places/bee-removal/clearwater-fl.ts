import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Bee removal in Clearwater (TTR-738, Rhea). Clearwater bee facts: the city's
 * pollinator program and pesticide advice, Pinellas' Bee City designation, the
 * FDACS removal list for Pinellas, and African bees in the Tampa Bay area. The
 * client's bee method is still a client question, so no method is described.
 */
const POLLINATORS = "https://www.myclearwater.com/Sustainability-Resiliency/08-Pollinators";
const PLANTS = "https://www.myclearwater.com/Sustainability-Resiliency/04-Resilient-Clearwater-Plants-and-Trees";
const BEECITY = "https://pinellas.gov/pinellas-county-bee-city-usa/";
const FDACS = "https://www.fdacs.gov/Consumer-Resources/Consumer-Rights-and-Responsibilities/Pest-Control/Honey-Bee-Removal-or-Eradication-in-Florida";
const LIST = "https://www.fdacs.gov/content/download/120558/file/honeybeereList-2025-2026-end-of-q4.xlsx";
const IN1205 = "https://ask.ifas.ufl.edu/publication/IN1205";

export const beeRemovalClearwater = servicePlacePage({
  service: "bee-removal",
  animal: "Bee",
  animals: "Bees",
  place: "clearwater-fl",
  placeName: "Clearwater",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-clearwater-fl",
  county: "Pinellas",
  order: 11,
  heroText: "A steady line of bees disappearing into a wall, a soffit or the eaves of your Clearwater home? Stay back, don't spray, and call (727) 594-7705.",
  answerHeading: "Who do I call about a bee colony in my Clearwater house?",
  answer:
    "Florida law decides who can do the work: a registered beekeeper may remove a colony alive, and only a licensed pest control company may kill one. Clearwater, which promotes pollinators citywide, doesn't remove bees from homes. Pro Wildlife Removal takes bee calls in Clearwater. Until then, give the colony space and call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Don't spray or plug it", "City backs pollinators"],
  localHeading: "Bees in Clearwater",
  localIntro: "Clearwater wants more bees in its gardens, just not inside its walls. Here's what the city, the county and the state say.",
  local: [
    { icon: "leaf", title: "A city pollinator program", text: p("Clearwater launched its Pollinator Power campaign in 2025 to get residents planting pollinator-friendly landscapes, and proclaimed Pollinator Week at the June 18, 2026, City Council meeting.") },
    { icon: "spray", title: "Go easy on pesticides", text: p("The city's pollinator page asks residents to avoid or limit pesticides and herbicides, especially neonicotinoids, which is one more reason not to grab a can of spray when bees show up.") },
    { icon: "bug", title: "Plant for bees, not walls", text: p("Clearwater's resilient landscaping guidance tells residents to plant nectar and host plants for butterflies and bees. Bees working the flowers are welcome; a colony in the soffit is the problem.") },
    { icon: "star", title: "Inside a Bee City county", text: p("Clearwater sits in Pinellas, which in March 2023 became Florida's first county designated a Bee City USA.") },
    { icon: "users", title: "Who's on the state's list", text: p("The Florida Department of Agriculture's bee removal and eradication list has 33 Pinellas County entries, a mix of registered beekeepers who remove bees and pest control companies that eradicate them.") },
    { icon: "search", title: "African bees nearby since 2001", text: p("UF/IFAS says African honey bees were first found in Florida near the Port of Tampa in 2001 and had colonies around Tampa by 2003. Any Clearwater colony could be African or a hybrid.") },
  ],
  contactsIntro: "Who handles what when bees move into a Clearwater home, from state and county pages.",
  contacts: [
    { icon: "phone", title: "Many stings, or trouble breathing", text: p("Call 911.") },
    { icon: "users", title: "The state's removal list", text: p("FDACS publishes its Bee Removal or Eradication list, sorted by county.") },
    { icon: "home", title: "A colony in your home", text: p("Call us at (727) 594-7705.") },
  ],
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Clearwater bee job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Does the City of Clearwater remove bees?",
      "No. Clearwater's animal issue page sends animal matters to Pinellas County and FWC and doesn't list bee removal. Bees in or on a house are a job for a registered beekeeper or a licensed pest control company.",
      "[PLACEHOLDER: ask the client: how you handle bees (live removal by a registered beekeeper, eradication, or both) and who does the work]",
    ),
    faq(
      "Is it okay to spray the bees myself?",
      "Clearwater asks residents to avoid or limit pesticides, and UF/IFAS warns untrained people not to disturb a colony. All honey bees defend a disturbed nest, UF/IFAS notes, and wax, honey and dead bees left in a wall still have to come out afterward.",
    ),
    faq(
      "Will a swarm on a tree in my Clearwater yard leave on its own?",
      "Often. UF/IFAS says a resting swarm usually stays a few hours to a few days while scouts look for a home. Keep people and pets away, and call if it starts moving into the house.",
    ),
    faq(
      "Are Clearwater bees African bees?",
      "They might be. African bees have been established around Tampa since 2003 and have mixed with European bees across southern Florida, per UF/IFAS. Give every colony plenty of room.",
    ),
    faq(
      "How soon can you come out for bees in Clearwater?",
      "Same-day bee appointments are often available in Clearwater. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a bee call in Clearwater]",
    ),
  ],
  ctaHeading: "Bees in your Clearwater walls?",
  ctaText: "Stay clear of the colony and call (727) 594-7705.",
  seo: {
    title: "Bee Removal in Clearwater, FL | Pro Wildlife Removal",
    description:
      "Bee removal in Clearwater, FL: honey bee colonies in walls and soffits, who may remove or kill bees in Florida, and city pesticide advice. (727) 594-7705.",
  },
  sources: [
    { title: "City of Clearwater: Pollinators (2025 Pollinator Power campaign; Pollinator Week proclaimed at the June 18, 2026, City Council meeting; avoid or limit pesticides and herbicides, especially neonicotinoids)", url: POLLINATORS },
    { title: "City of Clearwater: Resilient Clearwater, plants and trees (plant nectar and host plants for butterflies and bees)", url: PLANTS },
    { title: "City of Clearwater: Report an animal issue (Pinellas County Animal Services and FWC manage animal-related issues)", url: "https://www.myclearwater.com/Report-a-Problem/Report-an-Animal-Issue" },
    { title: "Pinellas County: Bee City (Bee City USA, first county in Florida, March 2023)", url: BEECITY },
    { title: "FDACS: Honey bee removal or eradication in Florida (registered beekeepers may remove and relocate some colonies; only a licensed pest control company may eradicate a colony, s. 482.021, F.S.)", url: FDACS },
    { title: "FDACS: Bee removal or eradication list, 2025-2026 (33 entries with County = Pinellas)", url: LIST },
    { title: "UF/IFAS EDIS ENY-170 (IN1205): Living with the African honey bee (first documented 2001 near the Port of Tampa; established around Tampa by 2003; hybridizing with European bees; all honey bees defend a disturbed colony)", url: IN1205 },
    { title: "UF/IFAS Gardening Solutions: Nesting bees and what you should do (swarms stay a few hours to a few days; colony remains, wax, honey, pollen and bees, removed by the PCO or beekeeper)", url: "https://gardeningsolutions.ifas.ufl.edu/design/gardening-with-wildlife/nesting-bees/" },
  ],
  clientQuestions: ["How do you handle bees (live removal by a registered beekeeper, eradication, or both), and who does the work?", "Typical response time for a bee call in Clearwater?", "A real Google review from a Clearwater bee job (TTR-723), and real Clearwater bee job photos."],
});
