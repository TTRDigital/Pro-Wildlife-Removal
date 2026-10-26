import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Bat removal in Hillsborough County (TTR-738, Owen). County-wide facts only; the
 * Tampa bat page covers the city. Sources: DOH rabies tables (Hillsborough rows and
 * footnotes), the Sept 2026 Gibsonton alert, DOH-Hillsborough's risk page, the NPS
 * bat tower form and the Hillsborough River State Park plan.
 */
const DOH = "https://www.floridahealth.gov/wp-content/uploads/";
const ALERT = `${DOH}2026/09/rabies-alert-hillsborough-9-14-26.pdf`;
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
    "Hillsborough County Animal Control says wildlife on private property needs a private removal service. For bats, Pro Wildlife Removal finds every gap they use, fits one-way exits outside FWC's April 16 to August 14 maternity season, then seals the openings once the bats are gone. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "County: private property is yours", "Four rabid bats in the 2025 table"],
  localHeading: "What to know about bats in Hillsborough County",
  localIntro: "These facts about bats in Hillsborough come from the state health department, DOH-Hillsborough, the National Park Service and a state park plan.",
  local: [
    { icon: "search", title: "From none to four", text: p("Hillsborough's row in the state rabies tables listed no rabid bats for 2022 or 2023, two for 2024 and four for 2025. The tables only count animals tested after a possible exposure.") },
    { icon: "critter", title: "Three more in a footnote", text: p("The 2024 table adds a footnote: three more rabid Hillsborough bats were identified through surveillance testing and are not included in the county's count.") },
    { icon: "map-pin", title: "Bats led 2025", text: p("Of the six rabid animals Hillsborough's 2025 row listed, four were bats. The other two were a cat and a raccoon.") },
    { icon: "home", title: "Gibsonton alert, September 2026", text: p("After a rabid cat was killed near US Highway 41 and Alice Avenue in Gibsonton on September 11, 2026, DOH-Hillsborough asked residents to keep bats out of living quarters and other occupied spaces in homes and schools.") },
    { icon: "phone", title: "A bite you might miss", text: p("DOH-Hillsborough's animal risk page lists bats among high-risk animals and, when it asks whether a bite broke the skin, notes that bat bites may not be clearly visible.") },
    { icon: "leaf", title: "Evening bats at the state park", text: p("The 2004 management plan for Hillsborough River State Park, south of Zephyrhills, lists the evening bat among the park's mammals, recorded flying over.") },
    { icon: "map-pin", title: "A bat tower in Temple Terrace", text: p("A 1980 National Park Service nomination form lists a Bat Tower in Temple Terrace among Dr. Charles Campbell's mosquito-control roosts, and names a Tampa bat roost as one of three such towers known to have survived at the time.") },
  ],
  contactsIntro: "Who handles what when bats are the problem in Hillsborough, from the county's and DOH-Hillsborough's own pages.",
  contacts: [
    { icon: "phone", title: "Possible bat bite", text: p("Report it to DOH-Hillsborough at 813-307-8059, and get medical advice.") },
    { icon: "users", title: "County Animal Control", text: p("(813) 744-5660. The county's animal services listing says to use private removal services for wildlife on private property.") },
    { icon: "home", title: "Bats roosting in the house", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "bats-in-attic", label: "Bats in the attic" },
  extraLink: { label: "What bat removal costs", href: "/blog/how-much-does-bat-removal-cost-in-florida/", text: "The parts of a Hillsborough bat job that shape the price." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Hillsborough County bat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Does Hillsborough County Animal Control remove bats from houses?",
      "No. County Animal Control serves all of Hillsborough, Tampa, Temple Terrace and Plant City included, and its services listing says wildlife on private property calls for a private removal service.",
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
    { title: "DOH-Hillsborough: Rabies alert, Sept 14, 2026 (rabid cat, Gibsonton, off US Hwy 41 and Alice Avenue, Sept 11; prevent wildlife, including bats, from entering living quarters)", url: ALERT },
    { title: "DOH-Hillsborough: Animal risk assessment (bats among high-risk animals; bat bites may not be clearly visible)", url: RISK },
    { title: "DOH-Hillsborough: Report an animal bite (813-307-8059)", url: BITE },
    { title: "Hillsborough County: Animal Control ((813) 744-5660; serves Hillsborough County including the cities of Tampa, Temple Terrace and Plant City)", url: ANIMAL_CONTROL },
    { title: "City of Tampa: Animal services, Hillsborough County (county Animal Services duties; for wildlife on private property, use private removal services)", url: "https://www.tampa.gov/service/animal-services-hillsborough-county" },
    { title: "Florida DEP: Hillsborough River State Park unit management plan, 2004 (mammal list: evening bat, overflying; about seven miles south of Zephyrhills)", url: "https://floridadep.gov/sites/default/files/2004%20Hillsborough%20River%20State%20Park.pdf" },
    { title: "National Park Service: National Register nomination, Sugarloaf Key bat tower, 1980 (lists the Bat Tower in Temple Terrace (Tampa); the Bat Roost in Tampa one of three known surviving towers)", url: "https://npgallery.nps.gov/GetAsset/ec7b09f7-19db-4c96-8170-e0efaca829a3" },
    { title: "FWC news release, April 6, 2026 (maternity season April 16 to Aug 14; exclusion devices at least four nights, lows forecast 50°F or above)", url: "https://myfwc.com/news/all-news/bat-maternity-0426/" },
    { title: "FWC: Bats in buildings (no exclusion during maternity season without a permit)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/" },
  ],
  clientQuestions: ["Typical response time for a bat call in Hillsborough County?", "A real Google review from a Hillsborough County bat job (TTR-723), and real Hillsborough bat job photos."],
});
