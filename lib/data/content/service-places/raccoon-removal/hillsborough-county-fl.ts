import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";
import { TRAP_RULES_SOURCE } from "../../notes.ts";

/*
 * Raccoon removal in Hillsborough County (TTR-738, Owen). County-wide and non-Tampa
 * facts only; the Tampa raccoon page covers the city. Sources: DOH rabies tables,
 * DOH-Hillsborough's risk page, the county conservation page, the 2004 state park plan,
 * and news reports of rabid raccoon cases (2017 to 2020), labeled as news.
 */
const DOH = "https://www.floridahealth.gov/wp-content/uploads/";
const RISK = "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/animal-risk-assessment/";
const NEIGHBOR = "https://hcfl.gov/residents/parks-and-leisure/conservation-lands/be-a-good-neighbor-to-nature";
const PARK_PLAN = "https://floridadep.gov/sites/default/files/2004%20Hillsborough%20River%20State%20Park.pdf";

export const raccoonRemovalHillsboroughCounty = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "hillsborough-county-fl",
  placeName: "Hillsborough County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-hillsborough-county",
  heroText: "A raccoon in the attic, under the deck or in the garage anywhere in Hillsborough County? We remove it the way Florida allows, look for young first and seal the way in. Call (727) 594-7705.",
  answerHeading: "Who gets a raccoon out of a home in Hillsborough County?",
  answer:
    "A private wildlife company. The City of Tampa's listing for Hillsborough County Animal Services says to use private removal services for wildlife on private property, and county Animal Control serves the whole county. Pro Wildlife Removal gets raccoons out of attics and crawl spaces, checks for young and seals the entry. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Rabid raccoon in the 2025 table", "County: garbage feeds a boom"],
  localHeading: "Hillsborough raccoon records, parks and news cases",
  localIntro: "These facts about raccoons in Hillsborough come from the state health department, DOH-Hillsborough, county conservation pages, a state park plan and news reports of rabid raccoon cases, labeled as news.",
  local: [
    { icon: "search", title: "One rabid raccoon in 2025", text: p("Hillsborough's row in the state rabies tables listed one rabid raccoon for 2025, alongside four bats and a cat. The rows for 2022, 2023 and 2024 listed no raccoons.") },
    { icon: "home", title: "Garbage and a population boom", text: p("Hillsborough County's conservation lands page warns that when raccoons and other predators get lots of human food, including garbage, it can cause an unsustainable population boom that threatens squirrels, birds and rabbits.") },
    { icon: "phone", title: "Feeding changes them", text: p("DOH-Hillsborough's animal risk page lists raccoons as high-risk animals and says most free-ranging wild animals avoid people unless artificial feeding has conditioned them otherwise.") },
    { icon: "map-pin", title: "Riverview, October 2019 (news)", text: p("On Oct. 15, 2019, a raccoon in Riverview attacked a dog and tested positive, Patch reported. It was the county's first confirmed rabies case of 2019, and no alert was issued for a single wildlife case.") },
    { icon: "home", title: "Valrico, January 2020 (news)", text: p("In January 2020 a Valrico man found a raccoon on one of his dogs and was bitten and scratched pulling them apart. The raccoon had rabies; the vaccinated dogs got boosters and a 45-day quarantine, Tampa Bay 28 reported.") },
    { icon: "search", title: "Carrollwood Village, March 2018 (news)", text: p("A raccoon that a dog killed during a fight on March 9, 2018, tested positive, Patch reported, and DOH-Hillsborough set a 60-day alert from County Line Road south to Kennedy Boulevard, between the Veterans Expressway and I-75.") },
    { icon: "users", title: "North of Lake Magdalene Boulevard, May 2017 (news)", text: p("Two rabid raccoons led to a 60-day DOH-Hillsborough alert in May 2017 for a neighborhood that news reports called Lutz, bounded by Lake Brant, US 41 and Lake Magdalene Boulevard. Patch said the first rabid raccoon of that year had been reported in Lutz on April 21.") },
    { icon: "critter", title: "Hillsborough River State Park", text: p("The park's 2004 plan named the raccoon a problem species: \"Feeding these mammals has made them bold and unafraid of visitors,\" and raccoons sometimes broke into tents and trailers to get food.") },
  ],
  contactsHeading: "Hillsborough contacts for dead, biting or indoor raccoons",
  contactsIntro: "A dead raccoon on a county road, a bite, and a raccoon indoors each go to a different Hillsborough contact, per the county's and DOH-Hillsborough's own pages.",
  contacts: [
    { icon: "map-pin", title: "Dead raccoon on a county road", text: p("To report a dead animal in a county right-of-way, use the county's online case request or call (813) 274-6600.") },
    { icon: "phone", title: "Bitten or scratched", text: p("Get medical care and report the bite to DOH-Hillsborough, 813-307-8059.") },
    { icon: "home", title: "A raccoon in the house", text: p("A private wildlife company, per the City of Tampa's listing for the county service. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "If you plan to trap one in Hillsborough yourself, read the trap check and release rules first." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Hillsborough County raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Will Hillsborough County Animal Control remove a raccoon from my attic?",
      "A raccoon in the attic isn't on its list, which covers stray pets, bites, and neglect and cruelty cases. The City of Tampa's listing for the county service points wildlife on private property to private removal services.",
    ),
    faq(
      "Who picks up a dead raccoon on a road in Hillsborough County?",
      "To report a dead animal in a county right-of-way, use the county's online case request or call (813) 274-6600. In Temple Terrace, Public Works removes dead animals from city roads ((813) 506-6570), but not from private property or county or state roads.",
    ),
    faq(
      "Does Florida law let me feed raccoons in Hillsborough County?",
      "Florida rule 68A-4.001(3) bans intentionally putting out food or garbage in a way that attracts raccoons and is likely to create a public nuisance. The county adds that feeding wild animals makes them lose their fear of people.",
    ),
    faq(
      "Where can a trapped raccoon be released in Hillsborough County?",
      "On the property where it was caught, or on 40 or more contiguous acres in Hillsborough with the landowner's written permission. Until Dec 31, 2026, it must be released or put down within 24 hours. FWC's new rules, starting Dec 31, 2026, set 12 hours for animals released or put down off site.",
    ),
    faq(
      "Has rabies been found in Hillsborough County raccoons?",
      "The state's 2025 table listed one rabid raccoon in Hillsborough, after none in the county's rows for 2022, 2023 or 2024. Keep your pets' rabies shots current and leave raccoons alone.",
    ),
    faq(
      "Can you get to a Hillsborough County raccoon the same day?",
      "Same-day appointments for raccoons are often available in Hillsborough County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a raccoon call in Hillsborough County]",
    ),
  ],
  ctaHeading: "Raccoon in your Hillsborough County home?",
  ctaText: "A raccoon in a Hillsborough attic, from Riverview to Carrollwood? Call (727) 594-7705.",
  seo: {
    title: "Raccoon Removal Hillsborough County | Pro Wildlife Removal",
    description:
      "Raccoon removal in Hillsborough County, FL: raccoons out of attics and crawl spaces in Brandon, Riverview and Plant City, young checked. (727) 594-7705.",
  },
  sources: [
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Hillsborough row: 3 cats; no raccoons)", url: `${DOH}2025/07/rabies-cases-county-animal-2022.pdf` },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Hillsborough row: 1 cat; no raccoons)", url: `${DOH}2025/07/rabies-cases-county-animal-2023.pdf` },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Hillsborough row: 2 bats, 1 cat; no raccoons)", url: `${DOH}2025/07/rabies-cases-county-animal-2024.pdf` },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Hillsborough row: 4 bats, 1 cat, 1 raccoon)", url: `${DOH}2025/09/rabies-cases-county-animal-2025.pdf` },
    { title: "DOH-Hillsborough: Animal risk assessment (raccoons among high-risk animals; wild animals avoid humans unless conditioned by artificial feeding)", url: RISK },
    { title: "Hillsborough County: Be a good neighbor to nature (human food, including garbage, can cause an unsustainable population boom in predators like raccoons; feeding makes wild animals lose their fear of humans)", url: NEIGHBOR },
    { title: "News, Patch, Oct 17, 2019: Raccoon that attacked dog in Riverview tests positive for rabies (Riverview, Oct 15; first confirmed case of 2019; no alert for a single wildlife case)", url: "https://patch.com/florida/bloomingdale/racoon-attacked-dog-riverview-tests-positive-rabies" },
    { title: "News, Tampa Bay 28 (ABC Action News), January 2020: Hillsborough County confirms rabies case (Valrico, Jan 25; man bitten and scratched; dogs boosted and quarantined 45 days; first case of 2020)", url: "https://www.tampabay28.com/news/region-hillsborough/hillsborough-county-confirms-rabies-case" },
    { title: "News, Patch, March 15, 2018: Raccoon found near Carrollwood tests positive for rabies (fought a dog March 9; killed by the dog; 60-day alert, County Line Road, Veterans Expressway, I-75, Kennedy Boulevard)", url: "https://patch.com/florida/carrollwood/raccoon-found-near-carrollwood-tests-positive-rabies" },
    { title: "News, Patch (Lutz), May 30, 2017: Rabies alert issued in Hillsborough County (two raccoons tested positive; 60-day alert; Lake Brant, US 41, Lake Magdalene Boulevard; first rabies-positive raccoon reported in Lutz April 21)", url: "https://patch.com/florida/lutz/rabies-alert-issued-hillsborough-county" },
    { title: "Florida DEP: Hillsborough River State Park unit management plan, 2004 (problem species include the raccoon; feeding made them bold; break into tents and trailers to get food)", url: PARK_PLAN },
    { title: "Hillsborough County: Animal Control ((813) 744-5660; serves Hillsborough County including the cities of Tampa, Temple Terrace and Plant City)", url: "https://hcfl.gov/locations/animal-control" },
    { title: "City of Tampa: Animal services, Hillsborough County (listed services: stray pets, bites, neglect and cruelty cases; for wildlife on private property, use private removal services)", url: "https://www.tampa.gov/service/animal-services-hillsborough-county" },
    { title: "Hillsborough County: Report a dead animal in the right-of-way (Code Enforcement, (813) 274-6600; online case request)", url: "https://hcfl.gov/residents/property-owners-and-renters/code-violations/report-a-dead-animal-in-the-right-of-way" },
    { title: "City of Temple Terrace FAQ (Public Works removes dead animals on city roads, (813) 506-6570; not on private property or county or state roads)", url: "https://www.templeterrace.gov/Faq.aspx?QID=149" },
    { title: "DOH-Hillsborough: Report an animal bite (813-307-8059)", url: "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/report-an-animal-bite/" },
    { title: "Florida Administrative Code 68A-4.001(3) (food or garbage that attracts coyotes, foxes or raccoons and creates a public nuisance is prohibited)", url: "https://www.law.cornell.edu/regulations/florida/Fla-Admin-Code-Ann-R-68A-4-001" },
    { title: "Florida Administrative Code 68A-9.010, Taking nuisance wildlife (release or euthanize within 24 hours; same county, 40 contiguous acres, written permission)", url: "https://www.law.cornell.edu/regulations/florida/Fla-Admin-Code-Ann-R-68A-9-010" },
    TRAP_RULES_SOURCE,
  ],
  clientQuestions: ["Typical response time for a raccoon call in Hillsborough County?", "A real Google review from a Hillsborough County raccoon job (TTR-723), and real Hillsborough raccoon job photos."],
});
