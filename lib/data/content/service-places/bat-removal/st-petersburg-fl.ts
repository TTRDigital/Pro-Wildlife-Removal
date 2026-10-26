import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Bat removal in St. Petersburg (TTR-738, Rhea). St. Pete bat facts: Boyd Hill
 * Nature Preserve's bat programs, the city's line on wildlife, the Pinellas
 * rabies tables and health department advice, the county's bat rescue, and the
 * FWC exclusion rules that apply in the city.
 */
const HIKE = "https://www.active.com/st-petersburg-fl/classes/lets-get-batty-2026";
const BOX = "https://baysoundings.com/event/in-your-backyard-build-a-bat-box-2/";
const SCF = "https://seeclickfix.com/issues/23085918";
const DOH2023 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2023.pdf";
const DOH2024 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf";
const RABIES = "https://pinellas.floridahealth.gov/2026/04/10/rabies-safety/";
const FWC = "https://myfwc.com/news/all-news/bat-maternity-0426/";
const PALMS = "https://blogs.ifas.ufl.edu/pinellasco/2018/02/13/palmettos/";

export const batRemovalStPetersburg = servicePlacePage({
  service: "bat-removal",
  animal: "Bat",
  animals: "Bats",
  place: "st-petersburg-fl",
  placeName: "St. Petersburg",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-services-saint-petersburg-fl",
  county: "Pinellas",
  order: 12,
  heroText: "Bats streaming out from under the tile roof or the soffit of your St. Pete home at dusk? We map every exit and set up a legal exclusion when the season allows. Call (727) 594-7705.",
  answerHeading: "How are bats removed from a St. Petersburg home?",
  answer:
    "With one-way exclusion devices that let bats leave and block their return, used only between August 15 and April 15 under FWC rules. The city of St. Petersburg doesn't handle wildlife on private property. Pro Wildlife Removal inspects St. Pete homes for bats year-round and excludes them in the legal window. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "No exclusion Apr 16 to Aug 14", "Killing bats is illegal"],
  localHeading: "Bats in St. Petersburg",
  localIntro: "St. Pete's nature preserve teaches residents to welcome bats, and the health department wants them kept out of living spaces. Both are true at once.",
  local: [
    { icon: "leaf", title: "Night hikes at Boyd Hill", text: p("Boyd Hill Nature Preserve held a \"Let's Get Batty!\" night hike on September 26, 2026, a trail walk to learn about Florida's native bat species and the role they play.") },
    { icon: "home", title: "Bat boxes, built locally", text: p("Boyd Hill also hosts bat box building workshops, like the one on September 27, 2025, which reminded residents that Florida is home to 13 bat species, all insect eaters.") },
    { icon: "balance", title: "The city won't remove them", text: p("St. Petersburg tells residents that neither the city nor Pinellas County has a department dealing with wild animals, and that nuisance wildlife on private property needs a private, licensed handler.") },
    { icon: "search", title: "Rabid bats in Pinellas", text: p("Florida's health department listed a rabid bat for Pinellas County in both its 2023 and 2024 county tables. DOH-Pinellas asks residents to keep bats out of living quarters and other occupied spaces.") },
    { icon: "clock", title: "Four nights, 50 degrees", text: p("FWC requires exclusion devices to stay up at least four nights and only when overnight lows are forecast at 50 degrees or warmer. A winter cold snap can push a St. Pete exclusion back a few days.") },
    { icon: "drop", title: "Palms are bat habitat", text: p("UF/IFAS Extension Pinellas points out that unpruned cabbage palms make great habitat for native bats, so check the palms in a St. Pete yard as well as the roofline.") },
  ],
  contactsIntro: "Who to call about bats in St. Pete, from county, health department and state pages.",
  contacts: [
    { icon: "critter", title: "A grounded or injured bat", text: p("Central Florida Bat Rescue, (727) 459-2472, on Pinellas County's rehabilitator list.") },
    { icon: "phone", title: "Possible bat contact", text: p("DOH-Pinellas, 727-824-6932, if a bat may have touched or bitten anyone.") },
    { icon: "home", title: "Bats in your roof or walls", text: p("Call us at (727) 594-7705.") },
  ],
  attic: { slug: "bats-in-attic", label: "Bats in the attic" },
  extraLink: { label: "Bat removal cost", href: "/blog/how-much-does-bat-removal-cost-in-florida/", text: "The parts of a Florida bat job, from inspection to sealing, that set the price." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a St. Petersburg bat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Can I get bats out of my St. Pete home in June?",
      "Not by exclusion. Florida's bat maternity season runs April 16 to August 14, and blocking bats from their roost then is illegal because pups that can't fly yet would be trapped. We can inspect and plan, then exclude after August 15.",
    ),
    faq(
      "Does the City of St. Petersburg remove bats?",
      "No. The city says it has no department for wild animals and that wildlife on private property needs a private, licensed handler.",
    ),
    faq(
      "Is it legal to kill bats in St. Petersburg?",
      "No. Killing or harming bats is illegal everywhere in Florida, and poisons can't be used on them. Exclusion is the only legal way to remove bats roosting in a building.",
    ),
    faq(
      "Should I put up a bat house?",
      "It can help, and Boyd Hill holds workshops on building one. A bat house gives bats somewhere to go after an exclusion, but it won't pull them out of your attic on its own.",
    ),
    faq(
      "How soon can you inspect for bats in St. Petersburg?",
      "Same-day bat inspections are often available in St. Petersburg. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a bat inspection in St. Petersburg]",
    ),
  ],
  ctaHeading: "Bats in your St. Pete home?",
  ctaText: "St. Petersburg bat calls go to (727) 594-7705.",
  seo: {
    title: "Bat Removal in St. Petersburg, FL | Pro Wildlife Removal",
    description:
      "Bat removal in St. Petersburg, FL: legal exclusion outside maternity season, Pinellas rabies records, and who to call about a grounded bat. (727) 594-7705.",
  },
  sources: [
    { title: "Active.com listing: Let's Get Batty!, Boyd Hill Nature Preserve, Sept. 26, 2026 (night-time trail hike on Florida's native bat species)", url: HIKE },
    { title: "Bay Soundings event listing: In your backyard, build a bat box!, Boyd Hill Nature Preserve, Sept. 27, 2025 (Florida is home to 13 species of bats; beneficial insect eaters)", url: BOX },
    { title: "City of St. Petersburg reply on SeeClickFix St. Pete #23085918, Oct. 2026 (no city or county department for wild animals; nuisance wildlife on private property needs privately licensed handlers)", url: SCF },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Pinellas: 1 bat)", url: DOH2023 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Pinellas: 1 bat)", url: DOH2024 },
    { title: "DOH-Pinellas: Rabies safety, April 10, 2026 (prevent wildlife, including bats, from entering living quarters or occupied spaces; 727-824-6932)", url: RABIES },
    { title: "Pinellas County: Injured or orphaned wildlife (Central Florida Bat Rescue (727) 459-2472)", url: "https://pinellas.gov/injured-or-orphaned-wildlife/" },
    { title: "FWC news release, April 6, 2026 (maternity season April 16 to Aug 14; illegal to block bats from roosts then; exclusion devices only Aug 15 to April 15; minimum four nights; overnight forecast 50ºF or above; killing or harming bats is illegal)", url: FWC },
    { title: "FWC: Living with bats (illegal to kill bats, rule 68A-4.001; no pesticides or poisons to harm, kill or deter bats)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/" },
    { title: "UF/IFAS Extension Pinellas: Parsing through the palmettos, Feb. 13, 2018 (cabbage palms, if left unpruned, are great habitat for native bats)", url: PALMS },
  ],
  clientQuestions: ["Typical response time for a bat inspection in St. Petersburg?", "A real Google review from a St. Petersburg bat job (TTR-723), and real St. Pete bat job photos."],
});
