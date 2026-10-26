import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";
import { TRAP_RULES_SOURCE } from "../../notes.ts";

/*
 * Raccoon removal in Hillsborough County (TTR-738, Owen). County-wide and non-Tampa
 * facts only; the Tampa raccoon page covers the city. Sources: DOH rabies tables,
 * the Sept 2026 Gibsonton alert, DOH-Hillsborough's risk page, county conservation
 * and preserve pages, the Alafia River Corridor plan, the state park plan.
 */
const DOH = "https://www.floridahealth.gov/wp-content/uploads/";
const ALERT = `${DOH}2026/09/rabies-alert-hillsborough-9-14-26.pdf`;
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
  heroText: "A raccoon in the attic, under the deck or in the garage anywhere in Hillsborough County? We remove it the way Florida allows, look for young first and repair the way in. Call (727) 594-7705.",
  answerHeading: "Who gets a raccoon out of a home in Hillsborough County?",
  answer:
    "A private wildlife company. Hillsborough County Animal Control, which serves the unincorporated county, Tampa, Temple Terrace and Plant City, points homeowners to private removal services for wildlife on private property. Pro Wildlife Removal gets raccoons out of attics and crawl spaces, checks for young and repairs the entry. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Rabid raccoon in the 2025 table", "County: garbage feeds a boom"],
  localHeading: "What to know about raccoons in Hillsborough County",
  localIntro: "These facts about raccoons in Hillsborough come from the state health department, DOH-Hillsborough, county conservation pages and two land management plans.",
  local: [
    { icon: "search", title: "First in four years", text: p("Hillsborough's row in the state rabies tables listed one rabid raccoon for 2025, alongside four bats and a cat. The rows for 2022, 2023 and 2024 listed no raccoons.") },
    { icon: "map-pin", title: "Gibsonton alert, 2026", text: p("DOH-Hillsborough's September 2026 alert, set off by a rabid cat in Gibsonton, named raccoons first among wild animals to avoid. It also told residents not to attract them with outdoor pet food or open garbage cans.") },
    { icon: "home", title: "Garbage and a population boom", text: p("Hillsborough County's conservation lands page warns that when raccoons and other predators get lots of human food, including garbage, it can cause an unsustainable population boom that threatens squirrels, birds and rabbits.") },
    { icon: "phone", title: "Feeding changes them", text: p("DOH-Hillsborough's animal risk page lists raccoons as high-risk animals and says most free-ranging wild animals avoid people unless artificial feeding has conditioned them otherwise.") },
    { icon: "leaf", title: "Rhodine Scrub, Riverview", text: p("The county's page for Rhodine Scrub Nature Preserve in Riverview says the preserve has plenty of mammals and reptiles, raccoons among them.") },
    { icon: "drop", title: "Alafia River heron island", text: p("The management plan for the Alafia River Corridor Nature Preserve says alligators there help deter raccoons and other predators from reaching a heron rookery island.") },
    { icon: "critter", title: "Hillsborough River State Park", text: p("The park's 2004 plan names the raccoon as a problem species. Visitors feeding them made them bold, and raccoons steal food and sometimes break into tents and trailers to get it.") },
  ],
  contactsIntro: "Who handles what when a raccoon is the problem in Hillsborough, from the county's and DOH-Hillsborough's own pages.",
  contacts: [
    { icon: "map-pin", title: "Dead raccoon on a county road", text: p("County policy makes Animal Control responsible for small dead animals on county property, roads and rights-of-way: (813) 744-5660.") },
    { icon: "phone", title: "Bitten or scratched", text: p("Get medical care and report the bite to DOH-Hillsborough, 813-307-8059.") },
    { icon: "home", title: "A raccoon in the house", text: p("A private wildlife company, per the county. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "If you plan to trap one in Hillsborough yourself, read the trap check and release rules first." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Hillsborough County raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Will Hillsborough County Animal Control remove a raccoon from my attic?",
      "No. Hillsborough County's animal services listing says to use private removal services for wildlife on private property, and county Animal Control serves Temple Terrace and Plant City as well as Tampa.",
    ),
    faq(
      "Who picks up a dead raccoon on a road in Hillsborough County?",
      "On county roads and rights-of-way, county policy assigns small dead animals to Animal Control, (813) 744-5660. In Temple Terrace, Public Works says it won't remove a dead animal from private property.",
    ),
    faq(
      "Is it illegal to feed raccoons in Hillsborough County?",
      "Florida rule 68A-4.001(3) bans putting out food or garbage in a way that attracts raccoons and creates a public nuisance. The county adds that feeding wild animals makes them lose their fear of people.",
    ),
    faq(
      "Where can a trapped raccoon be released in Hillsborough County?",
      "On the property where it was caught, or on 40 or more contiguous acres in Hillsborough with the landowner's written permission. Until Dec 31, 2026, it must be released or put down within 24 hours; FWC's new rules cut that to 12 hours for animals taken off site.",
    ),
    faq(
      "Has rabies been found in Hillsborough County raccoons?",
      "The state's 2025 table listed one rabid raccoon in Hillsborough, after three years with none in the county's row. Keep your pets' rabies shots current and leave raccoons alone.",
    ),
    faq(
      "How soon can you come out for a raccoon in Hillsborough County?",
      "Same-day appointments for raccoons are often available in Hillsborough County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a raccoon call in Hillsborough County]",
    ),
  ],
  ctaHeading: "Raccoon in your Hillsborough County home?",
  ctaText: "Raccoon trouble anywhere in Hillsborough County? Call (727) 594-7705.",
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
    { title: "DOH-Hillsborough: Rabies alert, Sept 14, 2026 (rabid cat, Gibsonton; avoid wild animals, e.g. raccoons; don't attract them with outdoor pet food or open garbage cans)", url: ALERT },
    { title: "DOH-Hillsborough: Animal risk assessment (raccoons among high-risk animals; wild animals avoid humans unless conditioned by artificial feeding)", url: RISK },
    { title: "Hillsborough County: Be a good neighbor to nature (human food, including garbage, can cause an unsustainable population boom in predators like raccoons; feeding makes wild animals lose their fear of humans)", url: NEIGHBOR },
    { title: "Hillsborough County: Rhodine Scrub Nature Preserve, Riverview (plenty of mammals and reptiles, including raccoons)", url: "https://hcfl.gov/locations/rhodine-scrub-nature-preserve" },
    { title: "Alafia River Corridor Nature Preserve management plan (alligators help deter raccoons and other predators from the heron rookery island)", url: "https://www.swfwmd.state.fl.us/sites/default/files/medias/documents/AlafiaRiverCorridorNaturePreserve.pdf" },
    { title: "Florida DEP: Hillsborough River State Park unit management plan, 2004 (problem species include the raccoon; feeding made them bold; break into tents and trailers to get food)", url: PARK_PLAN },
    { title: "Hillsborough County: Animal Control ((813) 744-5660; serves Hillsborough County including the cities of Tampa, Temple Terrace and Plant City)", url: "https://hcfl.gov/locations/animal-control" },
    { title: "City of Tampa: Animal services, Hillsborough County (county Animal Services duties; for wildlife on private property, use private removal services)", url: "https://www.tampa.gov/service/animal-services-hillsborough-county" },
    { title: "Hillsborough County Board policy 09.06.01.00 (Animal Control removes small dead animals from county property, roads and rights-of-way)", url: "https://hcfl.gov/policies/board-policy---section-number-09-06-01-00" },
    { title: "City of Temple Terrace FAQ (Public Works will not remove a dead animal on private property)", url: "https://www.templeterrace.gov/Faq.aspx?QID=149" },
    { title: "DOH-Hillsborough: Report an animal bite (813-307-8059)", url: "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/report-an-animal-bite/" },
    { title: "Florida Administrative Code 68A-4.001(3) (food or garbage that attracts coyotes, foxes or raccoons and creates a public nuisance is prohibited)", url: "https://www.law.cornell.edu/regulations/florida/Fla-Admin-Code-Ann-R-68A-4-001" },
    { title: "Florida Administrative Code 68A-9.010, Taking nuisance wildlife (release or euthanize within 24 hours; same county, 40 contiguous acres, written permission)", url: "https://www.law.cornell.edu/regulations/florida/Fla-Admin-Code-Ann-R-68A-9-010" },
    TRAP_RULES_SOURCE,
  ],
  clientQuestions: ["Typical response time for a raccoon call in Hillsborough County?", "A real Google review from a Hillsborough County raccoon job (TTR-723), and real Hillsborough raccoon job photos."],
});
