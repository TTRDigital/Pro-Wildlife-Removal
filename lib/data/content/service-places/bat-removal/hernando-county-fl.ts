import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Bat removal in Hernando County (TTR-738, Nia). Every card is one true fact
 * about bats in Hernando: FWC's Chinsegut WEA colony, the state's 2022 to 2025
 * county tables, DOH-Hernando's surveillance page and 2026 alerts, and FWC rules.
 */
const CHIN_BT = "https://floridabirdingtrail.com/site/chinsegut-wildlife-and-environmental-area/";
const CHIN_HAB = "https://myfwc.com/recreation/lead/chinsegut/habitat/";
const SURV = "https://hernando.floridahealth.gov/programs-and-services/environmental-public-health/rabies-surveillance/";
const JUNE2026 = "https://www.floridahealth.gov/wp-content/uploads/2026/06/rabies-alert-hernando-county-6-12-26.pdf";
const SEASON = "https://myfwc.com/news/all-news/bat-maternity-0426/";
const BIB = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";

export const batRemovalHernandoCounty = servicePlacePage({
  service: "bat-removal",
  animal: "Bat",
  animals: "Bats",
  place: "hernando-county-fl",
  placeName: "Hernando County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-in-hernando-county-fl",
  order: 51,
  heroText: "Bats roosting in a Hernando County attic, barn or soffit? We find every gap, let them out through one-way devices when the season allows and seal the openings. Call (727) 594-7705.",
  answerHeading: "How are bats removed from a home in Hernando County?",
  answer:
    "Through exclusion: one-way devices at the entry points let the colony fly out and stop it from getting back in. FWC allows that only from August 15 to April 15, and bans killing, poisoning or relocating bats. Pro Wildlife Removal finds every gap in a Hernando home, fits the devices and seals up. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Exclusion Aug. 15 to April 15", "Hundreds of bats at Chinsegut"],
  localHeading: "What to know about bats in Hernando County",
  localIntro: "Hernando has a public bat colony at an FWC wildlife area, and its rabies records show how rarely bats test positive here. These are the local facts.",
  local: [
    { icon: "leaf", title: "Chinsegut's colony", text: p("The Great Florida Birding Trail lists a large colony of Brazilian free-tailed bats at FWC's 820-acre Chinsegut Wildlife and Environmental Area, off Lake Lindsey Road in Brooksville.") },
    { icon: "home", title: "Bat houses, monitored", text: p("FWC lists maintaining the Chinsegut bat houses, home to several hundred Brazilian free-tailed bats, among the area's regular wildlife monitoring work, alongside bird surveys and kestrel nest boxes.") },
    { icon: "search", title: "No rabid bats on four years of tables", text: p("The state's county tables listed no rabid bats for Hernando in 2022, 2023, 2024 or 2025. The only Hernando entries in those four years were two rabid raccoons in 2025.") },
    { icon: "critter", title: "Second on the state's list", text: p("DOH-Hernando's rabies surveillance page says raccoons are the animals reported with rabies most often in Florida, followed by bats and then foxes.") },
    { icon: "phone", title: "Bats get tested", text: p("Per DOH-Hernando, a dog, cat or ferret that bites someone is quarantined for ten days, while other animals, bats among them, are tested for rabies. That's why a bat that may have bitten someone shouldn't be let go.") },
    { icon: "map-pin", title: "Keep bats out of living space", text: p("Hernando's June 2026 Spring Hill rabies alert told residents to keep wildlife, bats included, out of living quarters, schools and other occupied spaces where they might meet people or pets.") },
    { icon: "drop", title: "The legal window", text: p("Bat pups are raised during FWC's maternity season, April 16 to August 14. In Hernando, as everywhere in Florida, one-way exclusion devices can go up only from August 15 to April 15 without a permit.") },
  ],
  contactsIntro: "Who handles what when bats are the problem in Hernando County, from each agency's own page.",
  contacts: [
    { icon: "phone", title: "Bitten, scratched or touched", text: p("DOH-Hernando, 352-540-6812, or 352-540-6863 for bite reports.") },
    { icon: "map-pin", title: "Exclusion questions", text: p("FWC's Southwest Region office, which covers Hernando: 863-648-3200.") },
    { icon: "users", title: "A colony in your building", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "bats-in-attic", label: "Bats in the attic" },
  extraLink: { label: "Bat removal cost in Florida", href: "/blog/how-much-does-bat-removal-cost-in-florida/", text: "How colony size, roof type and cleanup shape the cost of a bat job." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Hernando County bat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Are bats in Hernando County rabid?",
      "Rarely, on the record. The state's tables listed no rabid bats for Hernando from 2022 through 2025. Still, DOH-Hernando ranks bats second only to raccoons among rabid animals reported in Florida, so don't handle one.",
    ),
    faq(
      "Where can I see bats in Hernando County?",
      "At FWC's Chinsegut Wildlife and Environmental Area north of Brooksville, which the Birding Trail says has a large colony of Brazilian free-tailed bats. FWC also keeps bat houses there.",
    ),
    faq(
      "Can bats be removed from my Hernando home in July?",
      "Not with exclusion devices, unless FWC grants a permit, because July falls in the April 16 to August 14 maternity season. Plan the job for August 15 or later, on nights forecast at 50°F or warmer.",
    ),
    faq(
      "Can I trap the bats and release them somewhere else?",
      "No. FWC says the capture and relocation of bats is illegal, as are poisons and fumigants. Exclusion is the only legal way to get a colony out.",
    ),
    faq(
      "How soon can you come out for bats in Hernando County?",
      "Same-day appointments for bats are often available in Hernando County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a bat call in Hernando County]",
    ),
  ],
  ctaHeading: "Bats in your Hernando County home?",
  ctaText: "For bats anywhere in Hernando, call (727) 594-7705.",
  seo: {
    title: "Bat Removal in Hernando County, FL | Pro Wildlife Removal",
    description:
      "Bat removal in Hernando County, FL: colonies let out through one-way devices in the legal season and gaps sealed, plus Chinsegut's bats and the records.",
  },
  sources: [
    { title: "FWC Great Florida Birding Trail: Chinsegut WEA (large colony of Brazilian free-tailed bats; 820 acres; 23212 Lake Lindsey Rd, Brooksville)", url: CHIN_BT },
    { title: "FWC: Chinsegut WEA habitat and management (wildlife monitoring: breeding bird survey, kestrel nest boxes, bat houses home to several hundred Brazilian free-tailed bats)", url: CHIN_HAB },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Hernando: none listed)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2022.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Hernando: none listed)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2023.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Hernando: none listed; four surveillance bats from Hillsborough and Polk footnoted)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Hernando: 2 raccoons, no bats)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
    { title: "DOH-Hernando: Rabies surveillance (raccoons reported most frequently, followed by bats and foxes; dogs, cats and ferrets quarantined ten days, other animals tested; 352-540-6863 and 352-540-6812)", url: SURV },
    { title: "Florida DOH: DOH-Hernando rabies alert, June 12, 2026 (Spring Hill; prevent wildlife, including bats, from entering living quarters or occupied spaces)", url: JUNE2026 },
    { title: "FWC news release, April 6, 2026 (maternity season April 16 to Aug. 14; exclusion devices legal Aug. 15 to April 15; four nights; 50°F)", url: SEASON },
    { title: "FWC: Bats in buildings (exclusion the only legal method; capture and relocation illegal; poison and fumigants illegal)", url: BIB },
    { title: "FWC: Regional offices (Southwest Region, 863-648-3200, includes Hernando)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Typical response time for a bat call in Hernando County?", "A real Google review from a Hernando County bat job (TTR-723), and real Hernando bat job photos."],
});
