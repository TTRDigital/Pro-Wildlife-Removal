import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Bat removal in Polk County (TTR-738, Owen). Local facts: DOH rabid bat counts for
 * Polk by year, Polk Sheriff's Office rabies releases (all bats), DOH-Polk's alert
 * advice, and FWC's exclusion rules as they apply here. Sourced below.
 */
const DOH = "https://www.floridahealth.gov/wp-content/uploads/";
const PCSO_FAQ = "https://www.polksheriff.org/animal-services/frequently-asked-questions";
const ALERT = "https://www.floridahealth.gov/wp-content/uploads/2026/06/rabies-alert-polk-county-6-15-26.pdf";
const FWC_BUILDINGS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";
const FWC_SEASON = "https://myfwc.com/news/all-news/bat-maternity-0426/";

export const batRemovalPolkCounty = servicePlacePage({
  service: "bat-removal",
  animal: "Bat",
  animals: "Bats",
  place: "polk-county-fl",
  placeName: "Polk County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-polk-county",
  heroText: "Bats roosting in a Polk County roofline, attic or soffit? We find every gap they use, let them fly out through one-way devices when the law allows, and seal the house behind them. Call (727) 594-7705.",
  answerHeading: "Who removes bats from a house in Polk County?",
  answer:
    "Bats in a Polk County home need a private wildlife company: the Sheriff's Office says Animal Control doesn't take nuisance wildlife calls. Pro Wildlife Removal finds where bats enter, fits one-way exclusion devices outside FWC's April 16 to August 14 maternity season, then seals the gaps. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Rabid bats in Lakeland and Lake Wales", "No exclusions April 16 to Aug 14"],
  localHeading: "What to know about bats in Polk County",
  localIntro: "Bats show up in Polk's rabies reports year after year. These facts, from the state health department, the Sheriff's Office and FWC, shape a bat job here.",
  local: [
    { icon: "search", title: "A rabid bat most years", text: p("State health tables show rabid bats in Polk in 2022 (one), 2023 (two) and 2024 (three, plus a fourth found through surveillance testing). The 2025 table lists no Polk bats; its only case was a cat.") },
    { icon: "critter", title: "Only tested after contact", text: p("Those numbers are not a census. The Department of Health only tests suspect animals that may have exposed a person, pet, livestock or captive wildlife, so most bats in Polk are never tested at all.") },
    { icon: "map-pin", title: "Lake Wales, March 2026", text: p("Polk's first rabies case of 2026 was a bat. A Lake Wales resident on Masterpiece Road found his dog standing over it in the yard, and the state lab in Tampa confirmed rabies.") },
    { icon: "home", title: "Inside a home near Lakeland", text: p("Four days later, a man southwest of Lakeland saw one of his dogs pawing at a bat inside his house. It also tested positive, the county's second case in two weeks.") },
    { icon: "map-pin", title: "Lakewood Circle, July 2026", text: p("The Sheriff's Office reported Polk's fifth rabies case of 2026 on Lakewood Circle in Lakeland, where a woman's cat was playing with a bat outside. The bat was rabid; the cat was vaccinated.") },
    { icon: "users", title: "Among the toys, December 2024", text: p("A Lakeland family on Palm Drive West found a dead bat in a bag of their children's toys. It tested positive, and DOH-Polk handled rabies treatment for the exposed owner.") },
    { icon: "drop", title: "DOH-Polk: keep them out", text: p("In its June 2026 rabies alert, DOH-Polk asked residents to keep bats out of living quarters and other occupied spaces in homes and schools, where they might meet people and pets.") },
    { icon: "leaf", title: "The free-tailed bat moves indoors", text: p("Of Florida's 13 native bat species, FWC names the Brazilian free-tailed bat as the one commonly found in buildings. Killing or harming any bat is illegal here, as it is across the state.") },
  ],
  contactsIntro: "Who handles what when bats are the problem in Polk, from the Sheriff's Office and DOH-Polk's own pages.",
  contacts: [
    { icon: "phone", title: "Bitten or scratched", text: p("Get medical care, then report it to DOH-Polk at 863-519-8300, option 4.") },
    { icon: "users", title: "A pet or person touched a bat", text: p("PCSO Animal Control, 863-577-1762. The Sheriff's Office says it always takes bites involving a possible rabies carrier.") },
    { icon: "home", title: "Bats living in the house", text: p("A private wildlife company. Animal Control doesn't handle nuisance wildlife. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "bats-in-attic", label: "Bats in the attic" },
  extraLink: { label: "What bat removal costs", href: "/blog/how-much-does-bat-removal-cost-in-florida/", text: "What goes into the price of a bat exclusion in Florida." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Polk County bat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Will Polk County Animal Control get bats out of my house?",
      "No. The Sheriff's Office FAQ says Animal Control doesn't respond to nuisance wildlife calls. It does take reported bites involving a possible rabies carrier, and bats are one.",
    ),
    faq(
      "Can bats be removed from a Polk County home in summer?",
      "Not by exclusion. FWC's maternity season runs April 16 through August 14, and exclusion isn't allowed during it. Outside it, one-way devices must stay up at least four nights with lows forecast at 50°F or warmer.",
    ),
    faq(
      "Have rabid bats been found in Polk County?",
      "Yes, often. Bats were Polk's first and second rabies cases of 2026, in Lake Wales and near Lakeland, and another rabid bat turned up in Lakeland that July.",
    ),
    faq(
      "What should I do about a dead bat in my Polk home?",
      "Don't pick it up with bare hands, FWC warns. If a person or pet may have touched it, report the possible exposure to PCSO Animal Control (863-577-1762) or DOH-Polk (863-519-8300, option 4).",
    ),
    faq(
      "Will a bat house fix bats in my roof?",
      "No. FWC says a bat house is not a substitute for exclusion. UF/IFAS suggests putting one up several weeks before an eviction, mounted 12 to 15 feet high on a pole facing south or southeast.",
    ),
    faq(
      "How soon can you look at bats in Polk County?",
      "Same-day appointments for bats are often available in Polk County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a bat call in Polk County]",
    ),
  ],
  ctaHeading: "Bats in your Polk County home?",
  ctaText: "For bats anywhere in Polk County, call (727) 594-7705.",
  seo: {
    title: "Bat Removal in Polk County, FL | Pro Wildlife Removal",
    description:
      "Bat removal in Polk County, FL: bats excluded from homes in Lakeland, Lake Wales and Winter Haven, outside the April to August maternity season. Call now.",
  },
  sources: [
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Polk: 1 bat; total 1)", url: `${DOH}2025/07/rabies-cases-county-animal-2022.pdf` },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Polk: 2 bats, 1 raccoon; total 3)", url: `${DOH}2025/07/rabies-cases-county-animal-2023.pdf` },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Polk: 3 bats, 1 cat, 1 raccoon; total 5; footnote: 1 more Polk bat found through surveillance testing)", url: `${DOH}2025/07/rabies-cases-county-animal-2024.pdf` },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Polk: 1 cat; total 1)", url: `${DOH}2025/09/rabies-cases-county-animal-2025.pdf` },
    { title: "Florida DOH: 20-year animal rabies summary, 2003 to 2022 (testing only on suspect animals that potentially exposed a person, pet, livestock or captive wildlife)", url: `${DOH}2025/07/rabies-fla-20yr-table.pdf` },
    { title: "Polk County Sheriff's Office: First positive case of rabies in Polk County confirmed for 2026 (March 26, 2026; bat, Masterpiece Road, Lake Wales)", url: "https://apps.polksheriff.org/news-investigations/2026/03/26/first-positive-case-of-rabies-in-polk-county-confirmed-for-2026" },
    { title: "Polk County Sheriff's Office: 2nd case of rabies reported in as many weeks (March 31, 2026; bat in a home southwest of Lakeland)", url: "https://bradley.polksheriff.org/news-investigations/polk-county-news/2026/03/31/2nd-case-of-rabies-reported-in-as-many-weeks-in-polk-county" },
    { title: "Polk County Sheriff's Office: Fifth positive case of rabies in Polk County confirmed (July 30, 2026; bat, Lakewood Circle, Lakeland; cat vaccinated)", url: "https://polksheriff.org/news-investigations/2026/07/30/fifth-positive-case-of-rabies-in-polk-county-confirmed" },
    { title: "Polk County Sheriff's Office: Fifth positive rabies case for 2024 confirmed (Dec 3, 2024; dead bat among children's toys, Palm Drive West, Lakeland; DOH-Polk treating the owner)", url: "https://www.polksheriff.org/news-investigations/2024/12/03/fifth-positive-rabies-case-for-2024-confirmed" },
    { title: "Polk County Sheriff's Office: Animal Services FAQ (no nuisance wildlife calls; always takes bites involving a possible rabies carrier)", url: PCSO_FAQ },
    { title: "Polk County Sheriff's Office: Animal Services (863-577-1762)", url: "https://www.polksheriff.org/animal-services" },
    { title: "DOH-Polk: Rabies alert, north Lakeland (case June 11, 2026; PDF dateline misprints the year; keep bats out of living quarters; report bites to 863-519-8300, option 4)", url: ALERT },
    { title: "FWC news release, April 6, 2026 (maternity season April 16 to Aug 14; exclusion devices at least four nights, lows forecast 50°F or above; 13 native bat species; killing or harming bats illegal)", url: FWC_SEASON },
    { title: "FWC: Bats in buildings (Brazilian free-tailed bat commonly found in buildings; bat house not a substitute for exclusion; never handle a bat with bare hands)", url: FWC_BUILDINGS },
    { title: "UF/IFAS EDIS WEC246 (UW290): Effective bat houses for Florida (put houses up several weeks before an eviction)", url: "https://ask.ifas.ufl.edu/uw290" },
    { title: "UF/IFAS Gardening Solutions: Bat houses (12 to 15 feet up, south or southeast side of a freestanding pole)", url: "https://gardeningsolutions.ifas.ufl.edu/design/gardening-with-wildlife/bat-houses/" },
  ],
  clientQuestions: ["Typical response time for a bat call in Polk County?", "A real Google review from a Polk County bat job (TTR-723), and real Polk bat job photos."],
});
