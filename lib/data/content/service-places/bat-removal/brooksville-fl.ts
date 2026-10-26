import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Bat removal in Brooksville (TTR-738, Nia). Every card is one true fact about
 * bats in Brooksville or Hernando County: FWC's Chinsegut WEA bat colony,
 * DOH-Hernando alerts and the state rabies tables, and FWC bat rules and profiles.
 */
const CHIN = "https://myfwc.com/recreation/lead/chinsegut/";
const CHIN_HAB = "https://myfwc.com/recreation/lead/chinsegut/habitat/";
const CHIN_BT = "https://floridabirdingtrail.com/site/chinsegut-wildlife-and-environmental-area/";
const DOH2024 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf";
const DOH2025 = "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf";
const JUNE2026 = "https://www.floridahealth.gov/wp-content/uploads/2026/07/rabies-alert-hernando-county-6-30-2026.pdf";
const FREETAIL = "https://myfwc.com/wildlifehabitats/profiles/mammals/bats/brazillian-free-tailed-bat/";
const SEASON = "https://myfwc.com/news/all-news/bat-maternity-0426/";

export const batRemovalBrooksville = servicePlacePage({
  service: "bat-removal",
  animal: "Bat",
  animals: "Bats",
  place: "brooksville-fl",
  placeName: "Brooksville",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-service-in-brooksville-fl",
  county: "Hernando",
  order: 40,
  heroText: "Bats streaming out of a Brooksville soffit, barn or attic at dusk? We look for the openings bats use, fit one-way doors when state rules allow and seal up once they're out. Call (727) 594-7705.",
  answerHeading: "How does a bat colony get out of a Brooksville house?",
  answer:
    "With one-way exclusion doors that let bats fly out but not back in, fitted only between August 15 and April 15 under FWC rules. Killing or poisoning bats is illegal in Florida. Pro Wildlife Removal checks a Brooksville home for the gaps a colony uses, fits the doors and seals the openings afterward. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Exclusion Aug. 15 to April 15", "Bat colony at Chinsegut"],
  localHeading: "What to know about bats in Brooksville",
  localIntro: "Brooksville has a large bat colony just up the road, at Chinsegut. Here is what FWC and the health department say about bats around town.",
  local: [
    { icon: "leaf", title: "A big colony up the road", text: p("FWC's Chinsegut Wildlife and Environmental Area sits six miles north of Brooksville. The Great Florida Birding Trail says it has a large colony of Brazilian free-tailed bats.") },
    { icon: "home", title: "Bats in bat houses", text: p("FWC maintains bat houses at Chinsegut that are home to several hundred Brazilian free-tailed bats, as part of the area's regular wildlife monitoring.") },
    { icon: "sound", title: "An evening of bats", text: p("For August 30, 2025, FWC scheduled an International Bat Night program at the Chinsegut Conservation Center north of Brooksville, featuring a talk from the Florida Bat Conservancy and, if the weather allowed, a chance to watch the colony leave the bat boxes.") },
    { icon: "critter", title: "The species in your roof", text: p("The Chinsegut bats are Brazilian free-tailed bats, which FWC says live throughout Florida and here prefer to roost in buildings: attics, sheds and bridges, as well as bat houses.") },
    { icon: "search", title: "Pups in June and July", text: p("FWC says Brazilian free-tailed bat pups are typically born in June or July. That falls inside the April 16 to August 14 maternity season, when exclusion devices can't go up without a permit.") },
    { icon: "map-pin", title: "Hernando's bat record", text: p("From 2022 through 2025, the state's county tables and their surveillance footnotes show no rabid bat from Hernando County. Its only entries in those years were two rabid raccoons in 2025.") },
    { icon: "drop", title: "Bats named in a Brooksville notice", text: p("When a rabid raccoon was killed off Ted Road in the Brooksville area in May 2025, DOH-Hernando's advisory told residents and visitors to avoid physical contact with wild animals, naming bats right after raccoons.") },
    { icon: "phone", title: "Keep them out of living space", text: p("DOH-Hernando's June 30, 2026 rabies alert, issued after a rabid feral cat was found in the Dade City area off Westwood Drive, told residents to keep wildlife, including bats, out of living quarters, schools and other occupied spaces.") },
  ],
  contactsIntro: "Brooksville bat questions split between DOH-Hernando, FWC and a private company, per their own pages.",
  contacts: [
    { icon: "phone", title: "Bitten, scratched or touched", text: p("Report it to DOH-Hernando at 352-540-6812. The CDC says not to release a bat that may have bitten someone until you've talked with public health.") },
    { icon: "map-pin", title: "Exclusion questions", text: p("FWC's Southwest Region office covers Hernando: 863-648-3200.") },
    { icon: "users", title: "A colony in your house", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "bats-in-attic", label: "Bats in the attic" },
  extraLink: { label: "Bat removal cost in Florida", href: "/blog/how-much-does-bat-removal-cost-in-florida/", text: "What goes into the price of a bat exclusion and seal-up." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Brooksville bat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Why are there so many bats around Brooksville?",
      "Brazilian free-tailed bats live throughout Florida, per FWC, and a large colony lives at FWC's Chinsegut Wildlife and Environmental Area north of town. They hunt insects at night and look for roosts in buildings by day.",
    ),
    faq(
      "Can I put up a bat house instead of evicting them?",
      "A bat house is a fine extra, and FWC keeps several at Chinsegut, but FWC says bat houses aren't a substitute for excluding a colony from a building. The colony still has to be let out and the gaps sealed.",
    ),
    faq(
      "When is bat season in Hernando County?",
      "FWC's maternity season runs April 16 to August 14 statewide, so a Brooksville exclusion happens from August 15 to April 15, on nights forecast at 50°F or warmer, with devices left up at least four nights.",
    ),
    faq(
      "Is it legal to kill bats in my Brooksville attic?",
      "No. FWC says killing bats is illegal under rule 68A-4.001, and poisons or pesticides to harm, kill or deter them are banned.",
    ),
    faq(
      "Can someone check our Brooksville roof for bats today?",
      "Same-day appointments for bats are often available in Brooksville. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Bats in your Brooksville home?",
  ctaText: "Bats in a Brooksville roof, close to Chinsegut or not? Call (727) 594-7705.",
  seo: {
    title: "Bat Removal in Brooksville, FL | Pro Wildlife Removal",
    description:
      "Bat removal in Brooksville, FL: colonies let out with one-way doors in the legal season and roofs sealed, plus the Chinsegut colony and Hernando records.",
  },
  sources: [
    { title: "FWC: Chinsegut Wildlife and Environmental Area (Hernando County, six miles north of Brooksville)", url: CHIN },
    { title: "FWC: Chinsegut WEA habitat and management (bat houses home to several hundred Brazilian free-tailed bats)", url: CHIN_HAB },
    { title: "FWC Great Florida Birding Trail: Chinsegut WEA (large colony of Brazilian free-tailed bats; 820 acres; Lake Lindsey Rd, Brooksville)", url: CHIN_BT },
    { title: "FWC: International Bat Night at Chinsegut Conservation Center, Aug. 30, 2025 (Florida Bat Conservancy speaker; watching bats emerge from the Chinsegut bat boxes)", url: "https://outreach.myfwc.com/events/EventDetails.aspx?id=1981027" },
    { title: "FWC: Brazilian free-tailed bat profile (found throughout Florida; in Florida prefers attics, sheds, bridges and bat houses; pups typically born June or July)", url: FREETAIL },
    { title: "FWC news release, April 6, 2026 (maternity season April 16 to Aug. 14; exclusion devices legal Aug. 15 to April 15; four nights; 50°F)", url: SEASON },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Hernando: none listed)", url: DOH2024 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Hernando: 2 raccoons, total 2)", url: DOH2025 },
    { title: "Florida DOH: DOH-Hernando rabies advisory, June 2, 2025 (raccoon killed in the Brooksville area off Ted Road, May 28, 2025; avoid physical contact with wild animals, e.g. raccoons, bats, foxes)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/advisory-hernando-6-2-2025.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Hernando: none listed)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2022.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Hernando: none listed)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2023.pdf" },
    { title: "Florida DOH: DOH-Hernando rabies alert, June 30, 2026 (rabid unvaccinated feral cat off Westwood Drive; prevent wildlife, including bats, from entering living quarters or occupied spaces; report injuries to DOH-Hernando at 352-540-6812)", url: JUNE2026 },
    { title: "CDC: Bats and rabies (don't release a bat that may have bitten someone until you talk with public health)", url: "https://www.cdc.gov/rabies/exposure/animals/bats.html" },
    { title: "FWC: Bats (illegal to kill, 68A-4.001; pesticides or poisons to harm, kill or deter bats prohibited; bat houses not a substitute for exclusion)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/" },
    { title: "FWC: Regional offices (Southwest Region, 863-648-3200, includes Hernando)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["A real Google review from a Brooksville bat job (TTR-723), and real Brooksville bat job photos."],
});
