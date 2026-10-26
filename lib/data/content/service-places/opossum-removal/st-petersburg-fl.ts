import { TRAP_RULES_2026, TRAP_RULES_SOURCE } from "../../notes.ts";
import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Opossum removal in St. Petersburg (TTR-738, Rhea). St. Pete opossum facts: the
 * Boyd Hill coyote diet study, the Fort De Soto camera study just south of the
 * city, a city Sanitation pickup, the city's rodent guide and its line on
 * nuisance wildlife, plus county flood guidance.
 */
const BOYD = "https://www.friendsofboydhill.org/s/Heinrich-et-al-2025-Coyote-diet-at-BHNP.pdf";
const FDS = "https://pmc.ncbi.nlm.nih.gov/articles/PMC11350757/";
const SCF_DEAD = "https://seeclickfix.com/issues/16412545";
const SCF = "https://seeclickfix.com/issues/23085918";
const RODENT = "https://www.stpete.org/residents/good_neighbor_guides/rodent_insect_control.php";
const FLOOD = "https://pinellas.gov/safety-tips-before-during-and-after-a-flood/";

export const opossumRemovalStPetersburg = servicePlacePage({
  service: "opossum-removal",
  animal: "Opossum",
  animals: "Opossums",
  place: "st-petersburg-fl",
  placeName: "St. Petersburg",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-services-saint-petersburg-fl",
  county: "Pinellas",
  order: 12,
  heroText: "An opossum under the porch, in the garage or living in the attic of your St. Pete home? We remove it, check for a pouch full of young and block the space. Call (727) 594-7705.",
  answerHeading: "Who removes opossums in St. Petersburg?",
  answer:
    "A private wildlife company. St. Petersburg says it has no wild animal service and that nuisance wildlife on private property needs a private, licensed handler. Pro Wildlife Removal removes opossums from St. Pete crawl spaces, garages and attics, looks for young and closes the way in. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Common around Boyd Hill", "City picks up road kills"],
  localHeading: "Opossums in St. Petersburg",
  localIntro: "Opossums are common across St. Pete, from its biggest preserve to the barrier islands south of the city. Here's what the local research and city records show.",
  local: [
    { icon: "leaf", title: "Plenty around Boyd Hill", text: p("Researchers studying coyotes at Boyd Hill Nature Preserve in 2025 noted the \"high abundance\" of Virginia opossums at the preserve and in the surrounding area.") },
    { icon: "critter", title: "Rarely on the coyote menu", text: p("Despite that abundance, the same study found opossum remains in only one coyote scat. The preserve's coyotes leaned on fruit, wasp galls and raccoons instead.") },
    { icon: "drop", title: "Mangroves at Fort De Soto", text: p("A 2024 study using 19 cameras at Fort De Soto County Park, just south of the city, found opossums among the three most-photographed mammals, and more likely near mangroves in the dry season.") },
    { icon: "building", title: "Dead ones on city streets", text: p("When a resident reported a dead possum on Colony Drive South in April 2024, St. Petersburg Sanitation said removal should occur within one to two business days, then closed the request.") },
    { icon: "home", title: "Leftover pet food", text: p("St. Pete's rodent guide warns residents not to overfeed outdoor pets, because whatever the pet leaves gets eaten by something else. FWC lists pet food among the main things that draw opossums.") },
    { icon: "map-pin", title: "After a flood", text: p("Pinellas County reminds residents returning home after flooding to watch for possums, snakes and raccoons that may have moved into an evacuated house.") },
  ],
  contactsIntro: "Who to call about an opossum in St. Petersburg, from the city's and county's own pages.",
  contacts: [
    { icon: "building", title: "Dead opossum on a city street", text: p("Report it on SeeClickFix St. Pete, or call Sanitation at 727-893-7398.") },
    { icon: "users", title: "Hurt or orphaned opossum", text: p("Tampa Bay Wildlife Rehabilitation, (727) 725-1691, which the county lists for small mammals.") },
    { icon: "home", title: "An opossum in your house", text: p("Call us at (727) 594-7705.") },
  ],
  attic: { slug: "opossums-in-attic", label: "Opossums in the attic" },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a St. Petersburg opossum job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Will the City of St. Petersburg remove an opossum from my yard?",
      "No. The city says neither it nor Pinellas County has a department for wild animals. It does pick up dead animals from city streets through Sanitation, but a live opossum on your property is for a private company.",
    ),
    faq(
      "Are there a lot of opossums in St. Pete?",
      "Yes. A 2025 study at Boyd Hill described opossums as highly abundant there and in nearby areas, and cameras at Fort De Soto ranked them among the three most-photographed mammals.",
    ),
    faq(
      "Can I trap an opossum in St. Petersburg and release it at a park?",
      "Not at a county park, where releasing animals is banned. Florida's trapping rules are also tightening:",
      TRAP_RULES_2026,
    ),
    faq(
      "How do I report a dead opossum on my St. Pete street?",
      "Use SeeClickFix St. Pete or call Sanitation at 727-893-7398. In a 2024 case, the city said a dead possum would be removed within one to two business days.",
    ),
    faq(
      "How soon can you get to an opossum in St. Petersburg?",
      "Same-day opossum appointments are often available in St. Petersburg. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for an opossum call in St. Petersburg]",
    ),
  ],
  ctaHeading: "Opossum at your St. Pete home?",
  ctaText: "St. Petersburg opossum calls go to (727) 594-7705.",
  seo: {
    title: "Opossum Removal in St. Petersburg, FL | Pro Wildlife Removal",
    description:
      "Opossum removal in St. Petersburg, FL: opossums out of crawl spaces, garages and attics, young checked, and how the city handles dead ones. (727) 594-7705.",
  },
  sources: [
    { title: "Heinrich et al., 2025, Coyote diet at Boyd Hill Nature Preserve, Southeastern Naturalist 24(3) (only 1 scat contained Virginia opossum despite their high abundance at BHNP and in the surrounding area; fruits key in the diet, wasp galls and raccoon important in summer)", url: BOYD },
    { title: "Seasonal variation in mammalian mesopredator spatiotemporal overlap on a barrier island complex, Animals, 2024 (19 unbaited cameras at Fort De Soto County Park, Feb. 2021 to July 2023; coyotes, raccoons and Virginia opossums most frequently photographed; in the dry season opossums more likely detected near mangroves)", url: FDS },
    { title: "SeeClickFix St. Pete #16412545, 6601 Colony Dr S, April 2024 (dead possum in the road; forwarded to Sanitation; removal within 1-2 business days; resolved; Customer Service 727-893-7398)", url: SCF_DEAD },
    { title: "City of St. Petersburg reply on SeeClickFix St. Pete #23085918, Oct. 2026 (no city or county department for wild animals; nuisance wildlife on private property needs privately licensed handlers)", url: SCF },
    { title: "City of St. Petersburg: Rodent and insect control (don't overfeed your outdoor pets)", url: RODENT },
    { title: "FWC: Opossum profile (attracted to garbage, pet food, cultivated fruits and vegetables)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/opossum/" },
    { title: "Pinellas County: Safety tips before, during and after a flood (snakes, raccoons, possums may move into an evacuated home)", url: FLOOD },
    { title: "Pinellas County: Injured or orphaned wildlife (Tampa Bay Wildlife Rehabilitation (727) 725-1691, small and large mammals)", url: "https://pinellas.gov/injured-or-orphaned-wildlife/" },
    { title: "Pinellas County: Park rules, Code Ch. 90 (no release or transplant of any animals)", url: "https://pinellas.gov/park-rules/" },
    TRAP_RULES_SOURCE,
  ],
  clientQuestions: ["Typical response time for an opossum call in St. Petersburg?", "A real Google review from a St. Petersburg opossum job (TTR-723), and real St. Pete opossum job photos."],
});
