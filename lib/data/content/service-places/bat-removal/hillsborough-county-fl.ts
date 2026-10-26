import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Bat removal in Hillsborough County (TTR-738, Owen). County-wide facts only; the
 * Tampa bat page covers the city. Sources: DOH rabies tables (Hillsborough rows and
 * footnotes), DOH-Hillsborough's risk page, the NPS
 * bat tower form and the Hillsborough River State Park plan.
 */
const DOH = "https://www.floridahealth.gov/wp-content/uploads/";
const RISK = "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/animal-risk-assessment/";
const BITE = "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/report-an-animal-bite/";
const ANIMAL_CONTROL = "https://hcfl.gov/locations/animal-control";

export const batRemovalHillsboroughCounty = servicePlacePage({
  service: "bat-removal",
  animal: "Bat",
  animals: "Bats",
  place: "hillsborough-county-fl",
  placeName: "Hillsborough County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-hillsborough-county",
  heroText: "Bats under the tiles or behind a soffit in Brandon, Riverview, Plant City or anywhere else in Hillsborough County? We find their way in, let them fly out when the law allows and close up behind them. Call (727) 594-7705.",
  answerHeading: "Who removes bats from homes in Hillsborough County?",
  answer:
    "The City of Tampa's listing for Hillsborough County Animal Services says wildlife on private property needs private removal services. For bats, Pro Wildlife Removal finds every gap they use, fits one-way exits outside FWC's April 16 to August 14 maternity season, then seals the openings once the bats are gone. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "County: private property is yours", "Four rabid bats in the 2025 table"],
  localHeading: "What to know about bats in Hillsborough County",
  localIntro: "These facts about bats in Hillsborough come from the state health department, DOH-Hillsborough, the National Park Service, a state park plan and local news.",
  local: [
    { icon: "search", title: "None, then two", text: p("Hillsborough's row in the state rabies tables listed no rabid bats for 2022 or 2023 and two for 2024. The tables count rabid animals that may have exposed people, pets or livestock.") },
    { icon: "critter", title: "Three more in a footnote", text: p("The 2024 table adds a footnote: three more rabid Hillsborough bats were identified through surveillance testing and are not included in the county's count.") },
    { icon: "map-pin", title: "Bats led 2025", text: p("Of the six rabid animals Hillsborough's 2025 row listed, four were bats. The other two were a cat and a raccoon.") },
    { icon: "phone", title: "A bite you might miss", text: p("DOH-Hillsborough's animal risk page lists bats among high-risk animals and, when it asks whether a bite broke the skin, notes that bat bites may not be clearly visible.") },
    { icon: "leaf", title: "Three bats at the state park", text: p("Hillsborough River State Park's 2020 plan lists three bats among its mammals: the Seminole bat, the evening bat and the eastern pipistrelle.") },
    { icon: "map-pin", title: "A bat tower in Temple Terrace", text: p("A 1980 National Park Service nomination form lists the Bat Tower in Temple Terrace among the roosts built to Dr. Charles Campbell's mosquito-control design. Local news reports the 1924 tower burned in 1979.") },
  ],
  contactsIntro: "Who handles what when bats are the problem in Hillsborough, from the county's and DOH-Hillsborough's own pages.",
  contacts: [
    { icon: "phone", title: "Possible bat bite", text: p("Report it to DOH-Hillsborough at 813-307-8059, and get medical advice.") },
    { icon: "users", title: "County Animal Control", text: p("(813) 744-5660, serving the whole county, Tampa, Temple Terrace and Plant City included. The City of Tampa's listing for the county service says to use private removal services for wildlife on private property.") },
    { icon: "home", title: "Bats roosting in the house", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "bats-in-attic", label: "Bats in the attic" },
  extraLink: { label: "What bat removal costs", href: "/blog/how-much-does-bat-removal-cost-in-florida/", text: "The parts of a Hillsborough bat job that shape the price." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Hillsborough County bat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Does Hillsborough County Animal Control remove bats from houses?",
      "Its listed services are stray pets, bites, and neglect and cruelty cases. For wildlife on private property, the City of Tampa's listing for the county service says to use private removal services.",
    ),
    faq(
      "Can bats be removed from a Hillsborough home in summer?",
      "Exclusion isn't allowed during FWC's maternity season, April 16 through August 14, without an FWC permit. After it ends, one-way devices go up for at least four nights with lows forecast at 50°F or above.",
    ),
    faq(
      "Have rabid bats been found in Hillsborough County?",
      "Yes. The state's 2025 table listed four rabid bats in Hillsborough, and its 2024 table listed two, with three more noted from surveillance testing.",
    ),
    faq(
      "Could someone in my home be bitten by a bat without knowing?",
      "DOH-Hillsborough says bat bites may not be clearly visible. If you think anyone in the house may have had contact with a bat, call DOH-Hillsborough at 813-307-8059.",
    ),
    faq(
      "How soon can you look at bats in Hillsborough County?",
      "Same-day appointments for bats are often available in Hillsborough County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a bat call in Hillsborough County]",
    ),
  ],
  ctaHeading: "Bats in your Hillsborough County home?",
  ctaText: "For bats anywhere in Hillsborough County, call (727) 594-7705.",
  seo: {
    title: "Bat Removal in Hillsborough County | Pro Wildlife Removal",
    description:
      "Bat removal in Hillsborough County, FL: bats excluded from homes in Brandon, Riverview and Plant City, outside the maternity season. Call (727) 594-7705.",
  },
  sources: [
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Hillsborough row: 3 cats; no bats)", url: `${DOH}2025/07/rabies-cases-county-animal-2022.pdf` },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Hillsborough row: 1 cat; no bats)", url: `${DOH}2025/07/rabies-cases-county-animal-2023.pdf` },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Hillsborough row: 2 bats, 1 cat; footnote: 3 more Hillsborough bats from surveillance testing, not in the table)", url: `${DOH}2025/07/rabies-cases-county-animal-2024.pdf` },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Hillsborough row: 4 bats, 1 cat, 1 raccoon; total 6)", url: `${DOH}2025/09/rabies-cases-county-animal-2025.pdf` },
    { title: "DOH-Hillsborough: Animal risk assessment (bats among high-risk animals; bat bites may not be clearly visible)", url: RISK },
    { title: "DOH-Hillsborough: Report an animal bite (813-307-8059)", url: BITE },
    { title: "Hillsborough County: Animal Control ((813) 744-5660; serves Hillsborough County including the cities of Tampa, Temple Terrace and Plant City)", url: ANIMAL_CONTROL },
    { title: "City of Tampa: Animal services, Hillsborough County (listed services: stray pets, bites, neglect and cruelty cases; for wildlife on private property, use private removal services)", url: "https://www.tampa.gov/service/animal-services-hillsborough-county" },
    { title: "Florida DEP: Hillsborough River State Park unit management plan, approved June 12, 2020 (mammals: Seminole bat, evening bat, eastern pipistrelle)", url: "https://floridadep.gov/sites/default/files/HRSP_06.12.2020%20Approved%20UMP_JA.pdf" },
    { title: "National Park Service: National Register nomination, Sugarloaf Key bat tower, 1980 (lists the Bat Tower in Temple Terrace (Tampa) among Campbell's roosts)", url: "https://npgallery.nps.gov/GetAsset/ec7b09f7-19db-4c96-8170-e0efaca829a3" },
    { title: "News, Temple Terrace Patch, June 27, 2011: Project aims to reconstruct Temple Terrace bat tower (built in 1924 along the Hillsborough River; arsonists burned it down in 1979)", url: "https://patch.com/florida/templeterrace/project-aims-to-reconstruct-temple-terrace-bat-tower" },
    { title: "FWC news release, April 6, 2026 (maternity season April 16 to Aug 14; exclusion devices at least four nights, lows forecast 50°F or above)", url: "https://myfwc.com/news/all-news/bat-maternity-0426/" },
    { title: "FWC: Bats in buildings (no exclusion during maternity season without a permit)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/" },
  ],
  clientQuestions: ["Typical response time for a bat call in Hillsborough County?", "A real Google review from a Hillsborough County bat job (TTR-723), and real Hillsborough bat job photos."],
});
