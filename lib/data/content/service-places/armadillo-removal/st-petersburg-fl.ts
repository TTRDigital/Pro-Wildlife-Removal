import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Armadillo removal in St. Petersburg (TTR-738, Rhea). St. Pete armadillo facts:
 * the 2025 Boyd Hill coyote diet study, the 2024 Fort De Soto camera study, a
 * Weedon Island field guide, tortoise egg predation, and FWC and county release
 * rules that apply in the city.
 */
const BOYD = "https://www.friendsofboydhill.org/s/Heinrich-et-al-2025-Coyote-diet-at-BHNP.pdf";
const FDS = "https://pmc.ncbi.nlm.nih.gov/articles/PMC11350757/";
const WEEDON = "https://www.marine.usf.edu/pjocean/packets/sp00/s00u3le1.pdf";
const TRAIL = "https://floridabirdingtrail.com/site/boyd-hill-nature-preserve/";
const TORTOISE = "https://blogs.ifas.ufl.edu/pinellasco/2025/04/10/gopher-tortoise-day-shell-a-brate-this-keystone-species/";
const FWC = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/armadillo/";
const SCF = "https://seeclickfix.com/issues/23085918";

export const armadilloRemovalStPetersburg = servicePlacePage({
  service: "armadillo-removal",
  animal: "Armadillo",
  animals: "Armadillos",
  place: "st-petersburg-fl",
  placeName: "St. Petersburg",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-services-saint-petersburg-fl",
  county: "Pinellas",
  order: 12,
  heroText: "Shallow holes all over the lawn, or a burrow by the slab of your St. Pete home? We find the armadillo and deal with the burrow under Florida's rules. Call (727) 594-7705.",
  answerHeading: "How do I get rid of an armadillo in St. Petersburg?",
  answer:
    "St. Petersburg doesn't remove wildlife from private property, so it's up to the owner or a private company. Under FWC rules, a trapped armadillo must be euthanized, released on site, or moved to 40 or more acres in Pinellas with permission. Pro Wildlife Removal handles armadillos digging St. Pete yards. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Abundant at Boyd Hill", "Not native here"],
  localHeading: "Armadillos in St. Petersburg",
  localIntro: "Armadillos turn up from Boyd Hill in the south of the city to Weedon Island in the north. Here's what researchers and local sources have recorded.",
  local: [
    { icon: "leaf", title: "Abundant at Boyd Hill", text: p("A 2025 Southeastern Naturalist study of coyotes at Boyd Hill Nature Preserve lists the nine-banded armadillo first among the preserve's abundant mid-size mammals.") },
    { icon: "search", title: "Flagged as non-native", text: p("The same study marks the armadillo with an asterisk meaning \"not native to central Florida.\" Only one coyote scat in the study held armadillo remains.") },
    { icon: "drop", title: "41 sightings at Fort De Soto", text: p("Trail cameras at Fort De Soto County Park, just south of St. Pete, detected nine-banded armadillos 41 times between 2021 and 2023, mostly in dunes, marshes and forest.") },
    { icon: "map-pin", title: "Weedon Island too", text: p("A University of South Florida field lesson for Weedon Island Preserve, in north St. Pete, tells visitors walking the trails to keep their eyes open for squirrels, armadillos and foxes.") },
    { icon: "critter", title: "Bad news for tortoise nests", text: p("UF/IFAS Extension Pinellas says armadillos can dig up gopher tortoise eggs. Boyd Hill is one of the St. Pete preserves where gopher tortoises live.") },
    { icon: "balance", title: "Release rules", text: p("FWC doesn't allow nuisance armadillos to be released on publicly owned land, and Pinellas County park rules ban releasing any animal in a county park.") },
  ],
  contactsIntro: "Who to call about an armadillo in St. Pete, from city and state pages.",
  contacts: [
    { icon: "search", title: "Free advice from FWC", text: p("FWC's Wildlife Interaction Reporting Form offers technical help with armadillo problems.") },
    { icon: "balance", title: "The city's position", text: p("St. Pete says nuisance wildlife on private property needs a private, licensed handler.") },
    { icon: "home", title: "An armadillo under your home", text: p("Call us at (727) 594-7705.") },
  ],
  reviewsIntro: "[PLACEHOLDER: a real Google review from a St. Petersburg armadillo job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Why are armadillos digging up my St. Pete lawn?",
      "They're hunting earthworms and insect larvae. FWC says moist soil and lush turf bring those to the surface, so keeping watering and fertilizing to a minimum can make a yard less appealing.",
    ),
    faq(
      "Are armadillos native to St. Petersburg?",
      "No. Armadillos spread into Florida from the west and were also introduced, and a 2025 Boyd Hill study lists them as not native to central Florida. FWC now considers them naturalized.",
    ),
    faq(
      "Can I take a trapped armadillo to Boyd Hill or Weedon Island?",
      "No. FWC doesn't allow nuisance armadillos to be released on public land. The legal options are release on site, euthanasia, or a private property of 40 acres or more in Pinellas County, with the owner's written permission.",
    ),
    faq(
      "Will the City of St. Petersburg remove an armadillo?",
      "No. The city says it has no department for wild animals, and nuisance wildlife on private property needs a private, licensed handler.",
    ),
    faq(
      "How soon can you come out for an armadillo in St. Petersburg?",
      "Same-day armadillo appointments are often available in St. Petersburg. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for an armadillo call in St. Petersburg]",
    ),
  ],
  ctaHeading: "Armadillo digging up your St. Pete yard?",
  ctaText: "For armadillos in St. Petersburg, call (727) 594-7705.",
  seo: {
    title: "Armadillo Removal in St. Petersburg | Pro Wildlife Removal",
    description:
      "Armadillo removal in St. Petersburg, FL: lawn digging and burrows handled under FWC rules, where they live in St. Pete, and release rules. (727) 594-7705.",
  },
  sources: [
    { title: "Heinrich et al., 2025, Coyote diet at Boyd Hill Nature Preserve, Southeastern Naturalist 24(3) (abundant mesomammal community including nine-banded armadillo, raccoon and Virginia opossum; armadillo marked *not native to central Florida; a single scat with armadillo remains)", url: BOYD },
    { title: "Seasonal variation in mammalian mesopredator spatiotemporal overlap on a barrier island complex, Animals, 2024 (19 cameras at Fort De Soto County Park, Feb. 2021 to July 2023; nine-banded armadillos detected 41 times, primarily in dunes, marshes and forests)", url: FDS },
    { title: "University of South Florida, Project Oceanography: Weedon Island, Lesson I, land (keep your eyes open for squirrels, armadillos and foxes)", url: WEEDON },
    { title: "UF/IFAS Extension Pinellas: Gopher Tortoise Day, April 10, 2025 (raccoons and armadillos can dig up tortoise eggs)", url: TORTOISE },
    { title: "FWC Great Florida Birding Trail: Boyd Hill Nature Preserve (gopher tortoise among its reptiles)", url: TRAIL },
    { title: "FWC: Armadillo profile (range expanded into Florida; introductions; naturalized; live-captured nuisance armadillos euthanized, released on-site, or on 40+ acres in the same county with written permission; not publicly owned lands; minimize watering and fertilization; Wildlife Interaction Reporting Form)", url: FWC },
    { title: "Pinellas County: Park rules, Code Ch. 90 (no release or transplant of any animals)", url: "https://pinellas.gov/park-rules/" },
    { title: "City of St. Petersburg reply on SeeClickFix St. Pete #23085918, Oct. 2026 (no city or county department for wild animals; nuisance wildlife on private property needs privately licensed handlers)", url: SCF },
  ],
  clientQuestions: ["Typical response time for an armadillo call in St. Petersburg?", "How does the client handle armadillos (trapping, exclusion fencing, burrow work)?", "A real Google review from a St. Petersburg armadillo job (TTR-723), and real St. Pete armadillo job photos."],
});
