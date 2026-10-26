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
  heroText: "Bats roosting in a Hernando County attic, barn or soffit? We look for the gaps bats use, let them out through one-way devices when the season allows and seal the openings. Call (727) 594-7705.",
  answerHeading: "How are bats removed from a home in Hernando County?",
  answer:
    "Through exclusion: one-way devices at the entry points let the colony fly out and stop it from getting back in. FWC allows that without a permit only from August 15 to April 15, and bans killing, poisoning or relocating bats. Pro Wildlife Removal looks for the gaps in a Hernando home, fits the devices and seals up. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Exclusion Aug. 15 to April 15", "Several hundred bats at Chinsegut"],
  localHeading: "Hernando County bats, from Chinsegut to the rabies tables",
  localIntro: "Hernando has a public bat colony at an FWC wildlife area, and none of the state's 2022 to 2025 county tables, or their surveillance footnotes, list a rabid bat from Hernando. These are the local facts.",
  local: [
    { icon: "leaf", title: "Chinsegut's colony", text: p("The Great Florida Birding Trail lists a large colony of Brazilian free-tailed bats at FWC's 820-acre Chinsegut Wildlife and Environmental Area, off Lake Lindsey Road in Brooksville.") },
    { icon: "home", title: "Bat houses, monitored", text: p("FWC lists maintaining the Chinsegut bat houses, home to several hundred Brazilian free-tailed bats, among the area's regular wildlife monitoring work, alongside bird surveys and kestrel nest boxes.") },
    { icon: "sound", title: "Bat Night at Chinsegut", text: p("FWC listed an International Bat Night at its Chinsegut Conservation Center for August 30, 2025, with a Florida Bat Conservancy speaker and, weather permitting, a look at bats emerging from the Chinsegut bat boxes.") },
    { icon: "search", title: "No rabid bats on four years of tables", text: p("None of the state's 2022 to 2025 county tables, or their surveillance footnotes, list a rabid bat from Hernando. The only Hernando entries in those four years were two rabid raccoons in 2025.") },
    { icon: "critter", title: "Bats on the rabies list", text: p("DOH-Hernando's rabies surveillance page lists raccoons, bats and foxes among the animals reported with rabies in Florida.") },
    { icon: "phone", title: "Bats get tested", text: p("Per DOH-Hernando, a dog, cat or ferret that bites someone is quarantined for ten days, while other animals, bats among them, are tested for rabies. DOH-Hernando says to note where the animal is so animal control can pick it up.") },
    { icon: "map-pin", title: "Keep bats out of living space", text: p("Hernando's newest rabies alert, June 30, 2026, told residents to keep wildlife, bats included, out of living quarters, schools and other occupied spaces where they might meet people or pets.") },
    { icon: "drop", title: "The legal window", text: p("Bat pups are raised during FWC's maternity season, April 16 to August 14. In Hernando, as everywhere in Florida, one-way exclusion devices can go up only from August 15 to April 15 without a permit.") },
  ],
  contactsHeading: "Hernando offices for bat bites and exclusion rules",
  contactsIntro: "Bat bites in Hernando go to the health department and exclusion rules to FWC; their numbers below come from their own pages.",
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
      "None of the state's 2022 to 2025 county tables, or their surveillance footnotes, list a rabid bat from Hernando. Still, DOH-Hernando names bats among the animals reported with rabies in Florida, so don't handle one.",
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
      "How quickly can a Hernando County bat colony be looked at?",
      "Same-day appointments for bats are often available in Hernando County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a bat call in Hernando County]",
    ),
  ],
  ctaHeading: "Bats in your Hernando County home?",
  ctaText: "Bats in a Hernando roof? Call (727) 594-7705.",
  seo: {
    title: "Bat Removal in Hernando County, FL | Pro Wildlife Removal",
    description:
      "Bat removal in Hernando County, FL: colonies let out through one-way devices in the legal season and gaps sealed, plus Chinsegut's bats and the records.",
  },
  sources: [
    { title: "FWC Great Florida Birding Trail: Chinsegut WEA (large colony of Brazilian free-tailed bats; 820 acres; 23212 Lake Lindsey Rd, Brooksville)", url: CHIN_BT },
    { title: "FWC: Chinsegut WEA habitat and management (wildlife monitoring: breeding bird survey, kestrel nest boxes, bat houses home to several hundred Brazilian free-tailed bats)", url: CHIN_HAB },
    { title: "FWC: International Bat Night at Chinsegut Conservation Center, Aug. 30, 2025 (Florida Bat Conservancy speaker; the evening concludes watching bats emerge from the Chinsegut bat boxes)", url: "https://outreach.myfwc.com/events/EventDetails.aspx?id=1981027" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Hernando: none listed)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2022.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Hernando: none listed)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2023.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Hernando: none listed; four surveillance bats from Hillsborough and Polk footnoted)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Hernando: 2 raccoons, no bats)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
    { title: "DOH-Hernando: Rabies surveillance (raccoons, bats and foxes among the animals reported with rabies in Florida; dogs, cats and ferrets quarantined ten days, other animals tested; note where the animal is so animal control staff can pick it up; 352-540-6863 and 352-540-6812)", url: SURV },
    { title: "Florida DOH: DOH-Hernando rabies alert, June 30, 2026 (rabid feral cat off Westwood Drive; prevent wildlife, including bats, from entering living quarters or occupied spaces)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/07/rabies-alert-hernando-county-6-30-2026.pdf" },
    { title: "FWC news release, April 6, 2026 (maternity season April 16 to Aug. 14; exclusion devices legal Aug. 15 to April 15; four nights; 50°F)", url: SEASON },
    { title: "FWC: Bats in buildings (exclusion the only legal method; capture and relocation illegal; poison and fumigants illegal)", url: BIB },
    { title: "FWC: Regional offices (Southwest Region, 863-648-3200, includes Hernando)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Typical response time for a bat call in Hernando County?", "A real Google review from a Hernando County bat job (TTR-723), and real Hernando bat job photos."],
});
