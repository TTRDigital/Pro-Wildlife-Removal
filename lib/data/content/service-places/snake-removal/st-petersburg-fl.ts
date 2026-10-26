import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Snake removal in St. Petersburg (TTR-738, Rhea). St. Pete snake facts: Boyd Hill
 * and Weedon Island reptile records, the city's rodent guide, a codes case on an
 * overgrown yard with snakes, and UF/IFAS Extension Pinellas snake research.
 */
const BOYD = "https://floridabirdingtrail.com/site/boyd-hill-nature-preserve/";
const WEEDON = "https://floridadep.gov/sites/default/files/Item%2006%20Weedon%20Island%20Preserve%20MP_0.pdf";
const RODENTS = "https://blogs.ifas.ufl.edu/pinellasco/2022/07/25/management-of-rodents/";
const AGENT = "https://blogs.ifas.ufl.edu/pinellasco/2025/11/17/spotlight-uf-ifas-extension-pinellas-countys-natural-resources-agent/";
const CITYRODENT = "https://www.stpete.org/residents/good_neighbor_guides/rodent_insect_control.php";
const SCF = "https://seeclickfix.com/issues/22731367";
const VENOM = "https://blogs.ifas.ufl.edu/pinellasco/2024/02/12/new-episode-from-naturally-florida-podcast-floridas-venomous-snakes/";

export const snakeRemovalStPetersburg = servicePlacePage({
  service: "snake-removal",
  animal: "Snake",
  animals: "Snakes",
  place: "st-petersburg-fl",
  placeName: "St. Petersburg",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-services-saint-petersburg-fl",
  county: "Pinellas",
  order: 12,
  heroText: "A snake in the pool cage, the shed or the kitchen of your St. Pete home? Keep kids and pets back and call. We'll identify it and take it away. Call (727) 594-7705.",
  answerHeading: "Who removes snakes in St. Petersburg?",
  answer:
    "A private wildlife company. The City of St. Petersburg has no wild animal service, and it says nuisance wildlife on private property needs a private handler. Most St. Pete snakes are harmless rodent hunters. Pro Wildlife Removal identifies and removes snakes from homes, garages and yards. If someone is bitten, call 911. Otherwise call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Bitten? Call 911", "Most are harmless"],
  localHeading: "Snakes in St. Petersburg",
  localIntro: "Between Boyd Hill, Weedon Island and miles of shoreline, St. Pete has more snake habitat than its streets suggest. Here's what local sources record.",
  local: [
    { icon: "leaf", title: "Boyd Hill's reptiles", text: p("FWC's Great Florida Birding Trail says Boyd Hill Nature Preserve supports more than 60 species of reptiles and amphibians, including the eastern indigo snake, a federally threatened species.") },
    { icon: "drop", title: "Weedon Island counts", text: p("The state-approved management plan for Weedon Island Preserve in north St. Petersburg lists 27 reptile species among the preserve's wildlife, along with 15 mammals and 8 amphibians.") },
    { icon: "critter", title: "Neighborhood rat hunters", text: p("UF/IFAS Extension Pinellas notes that the non-venomous snakes most often seen in local neighborhoods, black racers and rat snakes, are \"quite fond of rodents.\"") },
    { icon: "search", title: "A parasite in local snakes", text: p("Pinellas Extension and a University of Central Florida lab documented the county's first case of an invasive snake parasite. Of 42 snakes tested, 41% carried it.") },
    { icon: "wrench", title: "Lift the firewood", text: p("St. Petersburg's rodent guide asks residents to store firewood on open racks at least 18 inches off the ground and away from the house, which also takes away a favorite snake hiding spot.") },
    { icon: "building", title: "Overgrown yards go to Codes", text: p("When a resident on 23rd Avenue North reported a neighbor's overgrown lawn drawing snakes in September 2026, the city sent it to Codes Compliance, which opened a case.") },
  ],
  contactsIntro: "Who to call about a snake in St. Pete, from the city's and county's own pages.",
  contacts: [
    { icon: "phone", title: "A snakebite", text: p("Call 911 and get to care quickly.") },
    { icon: "building", title: "Overgrown lot next door", text: p("Report it through SeeClickFix St. Pete, which routes yard complaints to Codes Compliance.") },
    { icon: "home", title: "A snake in your home", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  reviewsIntro: "[PLACEHOLDER: a real Google review from a St. Petersburg snake job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Does St. Petersburg have someone to remove snakes?",
      "Not the city. St. Pete says neither it nor Pinellas County has a department for wild animals, and nuisance wildlife on private property needs a private, licensed handler.",
    ),
    faq(
      "Are there venomous snakes in St. Pete?",
      "Florida has six venomous species, and Brooker Creek Preserve in north Pinellas has four of them. But the snakes St. Pete residents see most, black racers and rat snakes, aren't venomous. If you can't identify one, keep your distance.",
    ),
    faq(
      "Is the indigo snake at Boyd Hill dangerous?",
      "No. The eastern indigo is non-venomous and federally protected. Leave it alone and keep pets away from it.",
    ),
    faq(
      "How do I make my St. Pete yard less inviting to snakes?",
      "Cut the rodent supply and the cover. The city's rodent guide suggests raised firewood racks, trimmed landscaping and no leftover pet food outside. Fewer rats means fewer snakes hunting them.",
    ),
    faq(
      "How soon can you get to a snake in St. Petersburg?",
      "Same-day snake appointments are often available in St. Petersburg. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a snake call in St. Petersburg]",
    ),
  ],
  ctaHeading: "Snake at your St. Pete home?",
  ctaText: "Keep back and call (727) 594-7705.",
  seo: {
    title: "Snake Removal in St. Petersburg, FL | Pro Wildlife Removal",
    description:
      "Snake removal in St. Petersburg, FL: snakes identified and removed from homes and yards, species at Boyd Hill and Weedon, and bite advice. (727) 594-7705.",
  },
  sources: [
    { title: "FWC Great Florida Birding Trail: Boyd Hill Nature Preserve (more than 60 species of reptiles and amphibians, including gopher tortoise, Florida box turtle and eastern indigo snake)", url: BOYD },
    { title: "FWC: Eastern indigo snake profile (non-venomous; federally threatened)", url: "https://myfwc.com/wildlifehabitats/profiles/reptiles/snakes/eastern-indigo-snake/" },
    { title: "Florida DEP: Weedon Island Preserve management plan (176 birds, 43 butterflies, 27 reptiles, 15 mammals, 8 amphibians, 126 fishes)", url: WEEDON },
    { title: "UF/IFAS Extension Pinellas: Rodent management options in and around the home, July 25, 2022 (black racers and rat snakes are quite fond of rodents)", url: RODENTS },
    { title: "UF/IFAS Extension Pinellas: Spotlight on the natural resources agent, Nov. 17, 2025 (first case of an invasive snake parasite in Pinellas County; 42 specimens, 41% positive; pygmy rattlesnakes at Brooker Creek diminished drastically)", url: AGENT },
    { title: "City of St. Petersburg: Rodent and insect control (firewood on open racks at least 18 inches above the ground and away from the house; keep landscaping away from the home; don't overfeed outdoor pets)", url: CITYRODENT },
    { title: "SeeClickFix St. Pete #22731367, 4041 23rd Ave N, Sept. 9, 2026 (overgrown lawn with snakes; forwarded to Codes Compliance; case opened)", url: SCF },
    { title: "City of St. Petersburg reply on SeeClickFix St. Pete #23085918 (no city or county department for wild animals; nuisance wildlife on private property needs privately licensed handlers)", url: "https://seeclickfix.com/issues/23085918" },
    { title: "Friends of Brooker Creek Preserve newsletter, Sept./Oct. 2015, Venomous Snakes by Craig Huegel (four venomous species of peninsular Florida, all rather common in Brooker Creek Preserve)", url: "https://friendsofbrookercreekpreserve.org/FOBCP/2015SeptOctNewsletter.pdf" },
    { title: "FWC: Living with snakes (only six of Florida's 50 snake species are venomous)", url: "https://myfwc.com/conservation/you-conserve/wildlife/snakes/" },
    { title: "UF/IFAS Extension Pinellas: Florida's venomous snakes, Feb. 12, 2024 (call 911 for a bite from a venomous or unidentified snake)", url: VENOM },
  ],
  clientQuestions: ["Typical response time for a snake call in St. Petersburg?", "A real Google review from a St. Petersburg snake job (TTR-723), and real St. Pete snake job photos."],
});
