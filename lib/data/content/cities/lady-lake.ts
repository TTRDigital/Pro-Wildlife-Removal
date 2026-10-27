import { countyPage, S } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Lady Lake page, rewritten in place at its existing URL (Ben, Oct 26). A town in Lake County beside The Villages; its searches name Lake County, rodents and squirrels. Checkable local facts only; no residential street names. */
const ANIMAL_CONTROL = "https://www.ladylakefl.gov/291/Animal-Control";
const PD_2024 = "https://ladylakefl.gov/DocumentCenter/View/882/2024-PD-Annual-Report-Final---ADA";
const SHELTER = "https://c.lakecountyfl.gov/offices/animal_services/";
const TRASH = "https://www.ladylakefl.gov/170/Trash-Collection";
const CODE = "https://www.ladylakefl.gov/237/Code-Enforcement";
const CASES = "https://www.ladylakefl.gov/239/Case-Procedure";
const LEESBURG = "https://lake.floridahealth.gov/2025/06/06/doh-lake-issues-rabies-alert-2/";
const TAVARES = "https://lake.floridahealth.gov/2026/04/24/doh-lake-issues-rabies-alert-3/";
const DOH_2023 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2023.pdf";
const IFAS_LAWN = "https://blogs.ifas.ufl.edu/lakeco/2026/09/15/florida-lawn-insect-control/";
const IFAS_GRAPES = "https://blogs.ifas.ufl.edu/lakeco/2026/01/12/discovery-gardens-the-grape-arbor/";
const FWC_REGIONS = "https://myfwc.com/contact/fwc-staff/regional-offices/";
const FWC_SQUIRRELS = "https://myfwc.com/media/tydhegay/livingwithsquirrels.pdf";

export const ladyLake = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-lady-lake",
  name: "Lady Lake",
  county: "Lake",
  order: 15,
  phone: { label: "Call (844) 264-6254", href: "tel:+18442646254" },
  eyebrow: "WILDLIFE REMOVAL IN LADY LAKE",
  summary: "Wildlife removal in Lady Lake and Lake County, FL: rodents, squirrels, raccoons, bats, opossums, snakes and armadillos.",
  heroText: "A Lake County town on US 441, next door to The Villages, where the town's own rules on trash and stray-cat feeding bear on rodents and raccoons. Call (844) 264-6254.",
  answerHeading: "Who handles wildlife in Lady Lake, FL?",
  answer:
    "A private company. Lady Lake moved its animal control to the Lake County Sheriff's Office in 2024, and the town's page covers pets and strays, not wildlife. For rodents, squirrels, raccoons or bats in a Lady Lake home, Pro Wildlife Removal finds the way in, removes them as Florida law allows and seals the entry points. Call (844) 264-6254.",
  points: ["Call (844) 264-6254", "Animal control: Lake County Sheriff", "Feeding stray cats is banned"],
  townsHeading: "Lady Lake and Lake County",
  townsIntro: "Florida's EDR puts Lady Lake at 16,978 people in April 2025, in a Lake County of 445,881. We take wildlife removal calls in Lady Lake and across Lake County.",
  towns: [
    {
      title: "Lake County and nearby",
      items: [{ label: "The Villages", href: "/service-areas/the-villages/" }, { label: "Leesburg" }, { label: "Fruitland Park" }, { label: "Tavares" }],
    },
  ],
  localHeading: "Lady Lake's rules, and Lake County's rabies record",
  localIntro: "Town pages, the sheriff's handover and DOH-Lake's alerts are the local record for animal problems here.",
  local: [
    { icon: "users", title: "Animal control moved to the sheriff", text: p("The Lady Lake Police Department's 2024 annual report lists the transition of animal control to the Lake County Sheriff's Office. The town's page now sends animal calls to the Sheriff's Animal Enforcement Unit and says nothing about wildlife.") },
    { icon: "home", title: "No feeding stray cats", text: p("The town says feeding stray cats is against Lady Lake's ordinance, and points residents to Lake County's trap-neuter program. Food left out for cats feeds raccoons and rodents too.") },
    { icon: "critter", title: "Rabies in Lake County", text: p("DOH-Lake issued 60-day rabies alerts after rabid cats in western Leesburg in June 2025 and in Tavares in April 2026. The state's tables list a rabid fox and raccoon in Lake County in 2023, a bat in 2024 and a cat in 2025.") },
    { icon: "leaf", title: "Lawns dug up overnight", text: p("UF/IFAS Extension in Lake County wrote in 2026 that armadillos, raccoons and other wildlife frequently dig up lawns looking for white grubs, and that the grape arbor at its Discovery Gardens draws squirrels and raccoons.") },
  ],
  rats: {
    heading: "Rodents in Lady Lake",
    intro: "Rodent control in Lady Lake starts with the town's own trash and property rules.",
    cards: [
      { icon: "home", title: "Out by 7 a.m., in by night", text: p("The town's Waste Management pickup is twice a week. Garbage goes to the curb by 7 a.m. and containers come back in by the end of the day, and yard waste must be bagged or containerized.") },
      { icon: "building", title: "Property standards", text: p("Lady Lake Code Enforcement opens a case when a property falls below the town's minimum maintenance standards, usually with 3 to 30 days to fix it; unpaid fines can become liens.") },
    ],
    link: { label: "rodent removal", href: "/services/rat-removal/" },
  },
  contactsHeading: "Lady Lake and Lake County contacts",
  contactsIntro: "The numbers Lady Lake residents need, from the town's and each agency's pages.",
  contacts: [
    { icon: "users", title: "Sheriff's Animal Enforcement", text: p("352-343-2101, extension 5, the number on the town's Animal Control page.") },
    { icon: "home", title: "Lake County Animal Shelter", text: p("352-343-9688, for domestic animals and the trap-neuter program.") },
    { icon: "wrench", title: "Code Enforcement", text: p("352-751-1562, for properties below the town's maintenance standards.") },
    { icon: "map-pin", title: "State wildlife matters: FWC", text: p("For Lake County, FWC's Northeast Region office in Ocala: 352-732-1225.") },
  ],
  servicesIntro: "Rodent removal, squirrel removal and every other job below are available in Lady Lake and across Lake County. Pick one for the details.",
  servicesHeading: "Wildlife removal in Lake County",
  reviewsIntro: "[PLACEHOLDER: reviews from Lady Lake customers, matched from the client's Google reviews (TTR-723)]",
  faqHeading: "Lady Lake wildlife questions",
  faqs: [
    faq(
      "Who do I call about an animal problem in Lady Lake?",
      `For pets and strays, the Lake County Sheriff's Animal Enforcement Unit, 352-343-2101, extension 5 ([Town of Lady Lake](${ANIMAL_CONTROL})). For rodents, squirrels or raccoons living in your home, a private wildlife control company.`,
    ),
    faq(
      "Can I feed the stray cats in my Lady Lake neighborhood?",
      `No. The town says feeding stray cats is against Lady Lake's ordinance, and it points residents to Lake County's trap-neuter program at 352-343-9688 ([Town of Lady Lake](${ANIMAL_CONTROL})).`,
    ),
    faq(
      "Can I trap a squirrel in my Lady Lake attic?",
      `A gray squirrel, yes, under FWC's nuisance rules; a fox squirrel, no ([FWC](${FWC_SQUIRRELS})). See [squirrels in the attic](/services/squirrels-in-attic/) for how squirrel removal works.`,
    ),
    faq(
      "Has rabies turned up near Lady Lake?",
      `In Lake County, yes. DOH-Lake issued alerts after rabid cats in western Leesburg in 2025 and Tavares in 2026 ([2026](${TAVARES})). Report bites to DOH-Lake at 352-707-6104.`,
    ),
    faq(
      "How soon can someone reach Lady Lake?",
      "Same-day appointments are often available in Lady Lake. Call (844) 264-6254.",
    ),
  ],
  ctaHeading: "Wildlife in your Lady Lake home?",
  ctaText: "Anywhere in Lady Lake or Lake County, call (844) 264-6254.",
  seo: {
    title: "Wildlife Removal in Lady Lake, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Lady Lake and Lake County, FL: rodents, squirrels, raccoons and bats, plus the town's trash and stray-cat rules. Call (844) 264-6254.",
  },
  sources: [
    { title: "Town of Lady Lake: Animal Control (animal services through the Lake County Sheriff's Office Animal Enforcement Unit, 352-343-2101 ext. 5; feeding stray cats against town ordinance; Community Caturday 352-343-9688)", url: ANIMAL_CONTROL },
    { title: "Lady Lake Police Department: 2024 annual report (facilitated the transition of animal control services to the Lake County Sheriff's Office)", url: PD_2024 },
    { title: "Lake County Office of Animal Services (shelter for the domestic animals of Lake County; 352-343-9688)", url: SHELTER },
    { title: "Town of Lady Lake: Trash collection (Waste Management; twice-weekly pickup; curb by 7 a.m., containers in by end of day; yard waste bagged or containerized)", url: TRASH },
    { title: "Town of Lady Lake: Code Enforcement (minimum maintenance standards; 352-751-1562)", url: CODE },
    { title: "Town of Lady Lake: Case procedure (courtesy notice usually 3 to 30 days; Special Magistrate; unpaid fines become liens)", url: CASES },
    { title: "DOH-Lake: Rabies alert, June 6, 2025 (rabid cat, western Leesburg)", url: LEESBURG },
    { title: "DOH-Lake: Rabies alert, April 24, 2026 (rabid cat, Tavares; bites 352-707-6104)", url: TAVARES },
    { title: "Florida DOH: Animal rabies by county and animal, 2023 (Lake: 1 fox, 1 raccoon)", url: DOH_2023 },
    S.doh2024,
    S.doh2025,
    { title: "UF/IFAS Extension Lake County, Sept. 15, 2026: Florida lawn insect control (armadillos, raccoons and other wildlife dig up lawns for white grubs)", url: IFAS_LAWN },
    { title: "UF/IFAS Extension Lake County, Jan. 12, 2026: Discovery Gardens, the grape arbor (muscadines attract squirrels, raccoons and deer)", url: IFAS_GRAPES },
    { title: "FWC: Living with squirrels (gray squirrels may be taken as nuisance wildlife; fox squirrels excluded)", url: FWC_SQUIRRELS },
    { title: "FWC: Regional offices (Northeast Region, Ocala, 352-732-1225, covers Lake County)", url: FWC_REGIONS },
    S.edr,
  ],
  clientQuestions: ["Reviews and real job photos from Lady Lake customers."],
});
