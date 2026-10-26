import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Bee removal in St. Petersburg (TTR-738, Rhea). St. Pete bee facts: the city's
 * line on bees on private property, city service requests about bees, the state
 * preemption on managed hives, local pollinator events and the FDACS removal
 * rules. The client's bee method is still a client question.
 */
const SCF = "https://seeclickfix.com/issues/23085918";
const PALM = "https://seeclickfix.com/issues/23047917";
const HIVE = "https://seeclickfix.com/issues/17153369";
const STATUTE = "https://www.flsenate.gov/Laws/Statutes/2025/586.10";
const BIOBLITZ = "https://pinellas.gov/news/parks-for-pollinators-returns-for-more-discovery/";
const APIARY = "https://blogs.ifas.ufl.edu/pinellasco/2023/03/14/three-farms-and-a-beehive/";
const FDACS = "https://www.fdacs.gov/Consumer-Resources/Consumer-Rights-and-Responsibilities/Pest-Control/Honey-Bee-Removal-or-Eradication-in-Florida";
const IN1205 = "https://ask.ifas.ufl.edu/publication/IN1205";

export const beeRemovalStPetersburg = servicePlacePage({
  service: "bee-removal",
  animal: "Bee",
  animals: "Bees",
  place: "st-petersburg-fl",
  placeName: "St. Petersburg",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-services-saint-petersburg-fl",
  county: "Pinellas",
  order: 12,
  heroText: "Bees pouring in and out of a gap in the stucco, a soffit or a fallen palm at your St. Pete home? Keep everyone back, skip the spray, and call (727) 594-7705.",
  answerHeading: "Who removes bees in St. Petersburg?",
  answer:
    "On private property, not the city. St. Petersburg says bees on private property need privately licensed handlers. In Florida, a registered beekeeper may remove a colony alive and only a licensed pest control company may kill one. Pro Wildlife Removal takes bee calls across St. Pete. Keep your distance and call (727) 594-7705.",
  points: ["Call (727) 594-7705", "City: private handlers only", "Hives next door: state rules"],
  localHeading: "Bees in St. Petersburg",
  localIntro: "St. Pete has beekeepers, pollinator events and plenty of wild colonies. Here's how the city and the state handle bees.",
  local: [
    { icon: "balance", title: "Private property is private", text: p("St. Petersburg's standard reply to residents lists bees first among the nuisance wildlife on private property that must be handled by privately licensed handlers, trappers or transporters.") },
    { icon: "leaf", title: "Bees in a fallen palm", text: p("When a dead palm with bees in it fell into the street on 30th Avenue North in October 2026, the request went from Parks and Recreation to city Forestry, which marked it completed.") },
    { icon: "building", title: "A neighbor's swarming hive", text: p("When a resident on Northmoor Avenue North reported a large hive swarming from the neighbor's yard in 2024, the city forwarded it to Codes Compliance, which opened a case.") },
    { icon: "shield-check", title: "Kept hives are the state's", text: p("Under section 586.10, Florida Statutes, the power to regulate managed honey bee colonies and where registered hives sit belongs to the state and overrides any city or county ordinance.") },
    { icon: "users", title: "Beekeepers in town", text: p("UF/IFAS Extension Pinellas Master Gardeners have visited the Pinellas Beekeepers site at the St. Pete College Apiary to handle worker bees up close.") },
    { icon: "star", title: "Pollinator counts in the city", text: p("Pinellas County's 2026 Parks for Pollinators BioBlitz included a Sept. 5 event at Raymond H. Neri Park on Duval Park Boulevard in St. Petersburg.") },
    { icon: "search", title: "African bees in the region", text: p("UF/IFAS says African honey bees were first documented in Florida near the Port of Tampa in 2001. Any wild colony in St. Pete could carry their genes.") },
  ],
  contactsIntro: "Who handles which bee problem in St. Pete, from city and state pages.",
  contacts: [
    { icon: "phone", title: "Multiple stings", text: p("Call 911, especially if the person has trouble breathing.") },
    { icon: "building", title: "Bees in a city tree or right-of-way", text: p("Report it through SeeClickFix St. Pete.") },
    { icon: "home", title: "A colony in your home", text: p("Call us at (727) 594-7705.") },
  ],
  reviewsIntro: "[PLACEHOLDER: a real Google review from a St. Petersburg bee job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Will the City of St. Petersburg remove bees from my house?",
      "No. The city says bees on private property must be handled by privately licensed handlers. Bees in a city tree or on a city right-of-way can be reported through SeeClickFix St. Pete.",
      "[PLACEHOLDER: ask the client: how you handle bees (live removal by a registered beekeeper, eradication, or both) and who does the work]",
    ),
    faq(
      "My neighbor keeps bees. Can St. Pete make them move the hives?",
      "Usually not on its own. Florida law gives the state authority over managed honey bee colonies and where registered hives are placed, overriding city ordinances. Concerns about a registered beekeeper go to the Florida Department of Agriculture.",
    ),
    faq(
      "Who is allowed to remove a bee colony in Florida?",
      "FDACS says a registered beekeeper can remove some colonies alive and relocate them, and only a licensed pest control company may eradicate one. The state keeps a list of both by county.",
    ),
    faq(
      "Should I spray the bees myself?",
      "No. UF/IFAS warns that every honey bee colony defends itself when disturbed, and a colony in Tampa Bay could be African. Keep people and pets away until it's handled.",
    ),
    faq(
      "How soon can you come out for bees in St. Petersburg?",
      "Same-day bee appointments are often available in St. Petersburg. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a bee call in St. Petersburg]",
    ),
  ],
  ctaHeading: "Bees in your St. Pete home?",
  ctaText: "Stay clear of the bees and call (727) 594-7705.",
  seo: {
    title: "Bee Removal in St. Petersburg, FL | Pro Wildlife Removal",
    description:
      "Bee removal in St. Petersburg, FL: honey bee colonies in walls and roofs, what the city will and won't do, and who may remove bees here. (727) 594-7705.",
  },
  sources: [
    { title: "City of St. Petersburg reply on SeeClickFix St. Pete #23085918, Oct. 2026 (nuisance wildlife on private property, bees first, needs privately licensed handlers, trappers or transporters)", url: SCF },
    { title: "SeeClickFix St. Pete #23047917, 1935 30th Ave N, Oct. 19, 2026 (dead palm with bees fell into street; assigned to Forestry; completed)", url: PALM },
    { title: "SeeClickFix St. Pete #17153369, 556 Northmoor Ave N, July 29, 2024 (large hive swarming from neighbor's yard; forwarded to Codes Compliance; case opened)", url: HIVE },
    { title: "Florida Statutes s. 586.10 (authority to regulate, inspect and permit managed honeybee colonies and their placement is preempted to the state and supersedes county and municipal ordinances)", url: STATUTE },
    { title: "UF/IFAS Extension Pinellas: Three farms and a beehive, March 14, 2023 (Master Gardeners visited the St. Pete College Apiary with the Pinellas County Beekeepers Association)", url: APIARY },
    { title: "Pinellas County: Parks for Pollinators returns, Aug. 31, 2026 (2026 BioBlitz; Sept. 5 at Raymond H. Neri Park, 4300 Duval Park Blvd., St. Petersburg)", url: BIOBLITZ },
    { title: "FDACS: Honey bee removal or eradication in Florida (registered beekeepers may remove and relocate some colonies; only a licensed pest control company may eradicate; list of beekeepers and pest control operators)", url: FDACS },
    { title: "UF/IFAS EDIS ENY-170 (IN1205): Living with the African honey bee (first documented 2001 near the Port of Tampa; all honey bees defend a disturbed colony)", url: IN1205 },
  ],
  clientQuestions: ["How do you handle bees (live removal by a registered beekeeper, eradication, or both), and who does the work?", "Typical response time for a bee call in St. Petersburg?", "A real Google review from a St. Petersburg bee job (TTR-723), and real St. Pete bee job photos."],
});
