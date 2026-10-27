import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Bat removal in Hillsborough County (TTR-738, Owen). County-wide facts only; the
 * Tampa bat page covers the city. Sources: DOH rabies tables (Hillsborough rows and
 * footnotes), DOH-Hillsborough's risk page, and news reports of DOH-Hillsborough rabid bat
 * cases (Carrollwood 2020, Sun City Center 2018, North Westshore 2018), labeled as news.
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
  heroText: "Bats under the tiles or behind a soffit in Brandon, Riverview, Plant City or anywhere else in Hillsborough County? We find their way in, let them fly out when the law allows and close up behind them. Call (844) 264-6254.",
  answerHeading: "Who removes bats from homes in Hillsborough County?",
  answer:
    "The City of Tampa's listing for Hillsborough County Animal Services says wildlife on private property needs private removal services. For bats, Pro Wildlife Removal finds every gap they use, fits one-way exits outside FWC's April 16 to August 14 maternity season, then seals the openings once the bats are gone. Call (844) 264-6254.",
  points: ["Call (844) 264-6254", "County: private property is yours", "Four rabid bats in the 2025 table"],
  localHeading: "Rabid bat records and cases in Hillsborough County",
  localIntro: "These facts about bats in Hillsborough come from the state health department, DOH-Hillsborough and news reports of local rabid bat cases, labeled as news.",
  local: [
    { icon: "search", title: "None, then two", text: p("Hillsborough's row in the state rabies tables listed no rabid bats for 2022 or 2023 and two for 2024. The tables count rabid animals that may have exposed people, pets or livestock.") },
    { icon: "critter", title: "Three more in a footnote", text: p("The 2024 table adds a footnote: three more rabid Hillsborough bats were identified through surveillance testing and are not included in the county's count.") },
    { icon: "map-pin", title: "Bats led 2025", text: p("Of the six rabid animals Hillsborough's 2025 row listed, four were bats. The other two were a cat and a raccoon.") },
    { icon: "phone", title: "A bite you might miss", text: p("DOH-Hillsborough's animal risk page lists bats among high-risk animals and, when it asks whether a bite broke the skin, notes that bat bites may not be clearly visible.") },
    { icon: "home", title: "Carrollwood, July 2020 (news)", text: p("A DOH-Hillsborough release reprinted by Patch said a Carrollwood woman picked up a bat she saw on a sidewalk during a night walk and it bit her finger. The bat had rabies; no area alert followed because it was a single wildlife case.") },
    { icon: "map-pin", title: "Sun City Center, July 2018 (news)", text: p("FOX 13 reported that a woman in a Sun City Center parking lot felt something hit her arm and later found a small bat clinging to it at home. It tested positive, and the health department notified homes and businesses within 500 feet.") },
    { icon: "critter", title: "On its back in the grass, March 2018 (news)", text: p("In March 2018 a bat found lying on its back in the grass near the 1300 block of North Westshore Boulevard tested positive for rabies, FOX 13 and ABC Action News reported, and one person had been exposed to it.") },
  ],
  contactsHeading: "Hillsborough numbers for bat bites and roosting bats",
  contactsIntro: "In Hillsborough, possible bat bites go to DOH-Hillsborough and stray or bite calls to county Animal Control, per their own pages.",
  contacts: [
    { icon: "phone", title: "Possible bat bite", text: p("Report it to DOH-Hillsborough at 813-307-8059, and get medical advice.") },
    { icon: "users", title: "County Animal Control", text: p("(813) 744-5660, serving the whole county, Tampa, Temple Terrace and Plant City included. The City of Tampa's listing for the county service says to use private removal services for wildlife on private property.") },
    { icon: "home", title: "Bats roosting in the house", text: p("A private wildlife company. Call us at (844) 264-6254.") },
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
      "Has Hillsborough County had rabid bats lately?",
      "Yes. The state's 2025 table listed four rabid bats in Hillsborough, and its 2024 table listed two, with three more noted from surveillance testing.",
    ),
    faq(
      "Could someone in my home be bitten by a bat without knowing?",
      "DOH-Hillsborough says bat bites may not be clearly visible. If you think anyone in the house may have had contact with a bat, call DOH-Hillsborough at 813-307-8059.",
    ),
    faq(
      "How fast can you inspect a bat roost in Hillsborough County?",
      "Same-day appointments for bats are often available in Hillsborough County. Call (844) 264-6254.",
    ),
  ],
  ctaHeading: "Bats in your Hillsborough County home?",
  ctaText: "From Carrollwood to Sun City Center, Hillsborough bat calls go to (844) 264-6254.",
  seo: {
    title: "Bat Removal in Hillsborough County | Pro Wildlife Removal",
    description:
      "Bat removal in Hillsborough County, FL: bats excluded from homes in Brandon, Riverview and Plant City, outside the maternity season. Call (844) 264-6254.",
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
    { title: "News, Patch, July 30, 2020: Bat with rabies bites Carrollwood resident (DOH-Hillsborough release of July 29, 2020; picked up a bat on a sidewalk; bitten on the finger; no alert for a single wildlife case)", url: "https://patch.com/florida/westchase/bat-rabies-bites-carrollwood-resident" },
    { title: "News, FOX 13, July 19, 2018: Rabid bat found clinging to woman's arm in Sun City Center (parking lot in Sun City Center; homes and businesses within 500 feet notified)", url: "https://fox13news.com/news/rabid-bat-found-clinging-to-womans-arm-in-sun-city-center" },
    { title: "News, FOX 13, March 9, 2018: Rabid bat reported in Hillsborough County (found near North Westshore Boulevard, per DOH)", url: "https://www.fox13news.com/news/rabid-bat-reported-in-hillsborough-county" },
    { title: "News, Tampa Bay 28 (ABC Action News), March 2018: Person exposed to rabid bat in Hillsborough County (1300 block of N. Westshore Blvd; in the grass on its back; one person exposed)", url: "https://www.tampabay28.com/news/region-hillsborough/person-exposed-to-rabid-bat-in-hillsborough-co" },
    { title: "FWC news release, April 6, 2026 (maternity season April 16 to Aug 14; exclusion devices at least four nights, lows forecast 50°F or above)", url: "https://myfwc.com/news/all-news/bat-maternity-0426/" },
    { title: "FWC: Bats in buildings (no exclusion during maternity season without a permit)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/" },
  ],
  clientQuestions: ["A real Google review from a Hillsborough County bat job (TTR-723), and real Hillsborough bat job photos."],
});
