import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Raccoon removal in St. Petersburg (TTR-738, Rhea). St. Pete raccoon facts: the
 * city's standard answer on nuisance wildlife, Boyd Hill's raccoons (2025 coyote
 * diet study), trash rules, code compliance on vacant homes, plus the Pinellas
 * feeding rule and rabies table.
 */
const SCF = "https://seeclickfix.com/issues/23085918";
const VACANT = "https://seeclickfix.com/issues/13850334";
const BOYD = "https://www.friendsofboydhill.org/s/Heinrich-et-al-2025-Coyote-diet-at-BHNP.pdf";
const TRASH = "https://www.stpete.org/residents/good_neighbor_guides/residential_trash_recycling.php";
const SCHEDULE = "https://www.stpete.org/residents/utilities/residential_trash___recycling/collection_schedule.php";
const ABOUT = "https://www.stpete.org/visitors/about_st_pete.php";
const DOH2025 = "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf";

export const raccoonRemovalStPetersburg = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "st-petersburg-fl",
  placeName: "St. Petersburg",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-services-saint-petersburg-fl",
  county: "Pinellas",
  order: 12,
  heroText: "Noise in the attic of your St. Pete bungalow, or a raccoon living under the porch? We find how it got in, look for babies, remove the raccoons and seal the entry. Call (727) 594-7705.",
  answerHeading: "Does St. Petersburg remove raccoons from homes?",
  answer:
    "No. The City of St. Petersburg says neither it nor Pinellas County runs a wild animal service, and raccoons on private property need a private wildlife trapper. Pro Wildlife Removal removes raccoons from St. Pete attics, porches and crawl spaces, checks for young and seals where they got in. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "City: private trappers only", "Trash goes out by 7 a.m."],
  localHeading: "Raccoons in St. Petersburg",
  localIntro: "St. Pete wraps around 244 miles of shoreline and keeps 137 parks, so raccoons are never far from a backyard. These are the local facts.",
  local: [
    { icon: "balance", title: "The city's standard answer", text: p("In replies to residents, St. Petersburg says nuisance wildlife on private property, raccoons included, must be handled by privately licensed handlers, trappers or transporters, and points to FWC's list of trappers.") },
    { icon: "leaf", title: "Boyd Hill's raccoons", text: p("A 2025 study of coyote diet at Boyd Hill Nature Preserve, published in Southeastern Naturalist, describes the preserve as having an abundant population of mid-size mammals, raccoons among them.") },
    { icon: "critter", title: "Coyotes eat them too", text: p("The same Boyd Hill study found raccoon remains in 16% of the coyote scat it examined, and named raccoons an important summer food for the preserve's coyotes.") },
    { icon: "home", title: "Lids and timing", text: p("St. Pete asks residents to roll bins to the curb by 7 a.m. on collection day, bring them back by 7 p.m., and never overfill them so the lid can close. That keeps carts off the street overnight.") },
    { icon: "wrench", title: "Broken lid? The city fixes it", text: p("A cart lid that won't shut is an open invitation. St. Petersburg Sanitation repairs broken or missing lids and wheels at 727-893-7398.") },
    { icon: "building", title: "Vacant houses go to Codes", text: p("When a resident reported raccoons and rats nesting in a vacant house with open walls on Orient Way NE, the city forwarded it to its Codes Compliance department.") },
    { icon: "search", title: "Rabies and the feeding rule", text: p("The state's 2025 county table listed one rabid raccoon in Pinellas, and Pinellas County Code Sec. 14-30(4) makes leaving food or garbage out to attract raccoons a public nuisance.") },
  ],
  contactsIntro: "Who handles what when raccoons are the problem in St. Pete, from the city's and agencies' own pages.",
  contacts: [
    { icon: "building", title: "Broken cart lid", text: p("St. Petersburg Sanitation, 727-893-7398.") },
    { icon: "phone", title: "Bitten or scratched", text: p("Wash the wound, see a doctor and call DOH-Pinellas, 727-824-6932, which evaluates possible rabies exposures.") },
    { icon: "home", title: "A raccoon in your home", text: p("A private wildlife company, per the city. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "What Florida allows if you set a raccoon trap, and what happens after it's caught." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a St. Petersburg raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Will the City of St. Petersburg trap a raccoon for me?",
      "No. The city says it only addresses wildlife in its natural habitat when the animal shows aggression. A raccoon on private property is a job for a private trapper or wildlife company.",
    ),
    faq(
      "Are there a lot of raccoons in St. Pete?",
      "Researchers studying Boyd Hill Nature Preserve in 2025 called its population of raccoons, opossums and armadillos abundant, and the city's long shoreline and many parks give them cover close to homes.",
    ),
    faq(
      "How do I keep raccoons out of my St. Pete trash?",
      "Follow the city's bin rules: out by 7 a.m. on pickup day, back by 7 p.m., lid fully closed. If the lid is broken, call Sanitation at 727-893-7398 to have it repaired.",
    ),
    faq(
      "There are raccoons living in the empty house next door. Who do I call?",
      "Report the property to the city. In a 2022 case on Orient Way NE, St. Pete forwarded a report of raccoons and rats in a vacant home to Codes Compliance. Raccoons inside your own home are yours to handle with a private company.",
    ),
    faq(
      "How soon can you get to a raccoon in St. Petersburg?",
      "Same-day raccoon appointments are often available in St. Petersburg. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a raccoon call in St. Petersburg]",
    ),
  ],
  ctaHeading: "Raccoon in your St. Pete home?",
  ctaText: "St. Petersburg raccoon calls go to (727) 594-7705.",
  seo: {
    title: "Raccoon Removal in St. Petersburg, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in St. Petersburg, FL: raccoons out of attics, porches and crawl spaces, young checked, entries fixed, plus trash rules. (727) 594-7705.",
  },
  sources: [
    { title: "City of St. Petersburg reply on SeeClickFix St. Pete #23085918, Oct. 2026 (neither the city nor Pinellas County has an animal services department for wild animals; city addresses wildlife in natural habitat only if aggressive; nuisance wildlife on private property, including raccoons, needs privately licensed handlers, trappers or transporters; FWC trapper list)", url: SCF },
    { title: "Heinrich et al., 2025, Coyote diet at Boyd Hill Nature Preserve, Southeastern Naturalist 24(3) (abundant mesomammal community including armadillo, raccoon and Virginia opossum; raccoons in 16% of scat; important in summer)", url: BOYD },
    { title: "City of St. Petersburg: About St. Pete (244 miles of shoreline; 137 parks and recreation areas)", url: ABOUT },
    { title: "City of St. Petersburg: Residential trash and recycling guide (bin at curb by 7 a.m., removed by 7 p.m.; don't overfill, lid must close; broken or missing lids 727-893-7398)", url: TRASH },
    { title: "City of St. Petersburg: Collection schedule (twice-weekly collection; one 90-gallon container for single-family homes)", url: SCHEDULE },
    { title: "SeeClickFix St. Pete #13850334, 8440 Orient Way NE, Dec. 24, 2022 (rats and raccoons nesting in a vacant house; city forwarded to Codes Compliance Assistance)", url: VACANT },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Pinellas: 1 raccoon)", url: DOH2025 },
    { title: "Pinellas County: Animal Services enforcement (Sec. 14-30(4): food or garbage that attracts cats, dogs, raccoons, coyotes or other wildlife is a public nuisance)", url: "https://pinellas.gov/animal-services-enforcement/" },
    { title: "DOH-Pinellas: Rabies information (report a possible rabies exposure at 727-824-6932)", url: "https://pinellas.floridahealth.gov/programs-and-services/infectious-diseases/epidemiology/rabies-information/" },
  ],
  clientQuestions: ["Typical response time for a raccoon call in St. Petersburg?", "A real Google review from a St. Petersburg raccoon job (TTR-723), and real St. Pete raccoon job photos."],
});
