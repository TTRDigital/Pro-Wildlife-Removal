import { countyPage, S } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Lecanto page, rewritten in place at its existing URL (Ben, Oct 26). Lecanto is unincorporated Citrus County and home to the county government center (Inverness is the county seat). Checkable local facts only; no residential street names. */
const CODE = "https://www.citruscounty.gov/departments/growth_management/code_compliance/index.php";
const CODE_FAQ = "https://www.citruscounty.gov/departments/growth_management/code_compliance/faqs.php";
const GARBAGE = "https://www.citruscounty.gov/departments/public_works/solid_waste_management/residential_information___fees.php";
const SOLID_WASTE = "https://www.citruscounty.gov/departments/public_works/solid_waste_management/index.php";
const NUISANCE = "https://citrus.floridahealth.gov/programs-and-services/environmental-health/sanitary-nuisances/";
const RODENTS = "https://citrus.floridahealth.gov/programs-and-services/environmental-health/rodent-control/";
const EXTENSION = "https://sfyl.ifas.ufl.edu/citrus/";
const SHERIFF = "https://www.sheriffcitrus.org/programs___services/animal_control.php";
const CITRUS_ALERT = "https://www.floridahealth.gov/wp-content/uploads/2026/07/rabies-alert-citrus-county-7-23-2026.pdf";
const DOH_RABIES = "https://www.floridahealth.gov/diseases-and-conditions/disease/rabies/";
const FWC_FEEDING = "https://myfwc.com/conservation/you-conserve/wildlife/feeding/";
const CENSUS_PL = "https://www2.census.gov/programs-surveys/decennial/2020/data/01-Redistricting_File--PL_94-171/Florida/fl2020.pl.zip";
const GAZ = "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2020_Gazetteer/2020_gaz_place_12.txt";

export const lecanto = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-in-lecanto-fl",
  name: "Lecanto",
  county: "Citrus",
  order: 17,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN LECANTO",
  summary: "Wildlife removal in Lecanto, FL: raccoons, rats, bats, squirrels, opossums, snakes and armadillos, in the heart of Citrus County.",
  heroText: "Home of Citrus County's government center, with private trash haulers and county nuisance rules that bear on wildlife. Call (727) 594-7705.",
  answerHeading: "Who removes wildlife in Lecanto, FL?",
  answer:
    "A private company. Lecanto is unincorporated, so the Citrus County Sheriff's Animal Control covers it, and it handles domestic animals and livestock and sends nuisance wildlife calls to a trapper. For raccoons, rats, bats or squirrels in a Lecanto home, Pro Wildlife Removal finds the way in, removes them legally and seals the entry points. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Unincorporated Citrus County", "Private trash haulers"],
  townsHeading: "Lecanto and nearby",
  townsIntro: "The 2020 Census counted 6,301 people in the Lecanto CDP, spread over about 27 square miles of land. We cover Lecanto and the rest of Citrus County.",
  towns: [
    {
      title: "Citrus County",
      href: "/service-areas/citrus-county/",
      items: [
        { label: "Pine Ridge", href: "/service-areas/citrus-county/pine-ridge/" },
        { label: "Beverly Hills" },
        { label: "Crystal River" },
        { label: "Inverness" },
      ],
    },
  ],
  localHeading: "Lecanto's rules on garbage, nuisances and rodents",
  localIntro: "County government and the health department both work out of Lecanto, and their rules are the local record for animal problems here.",
  local: [
    { icon: "building", title: "Citrus County's government center", text: p("Citrus County's Lecanto Government Building houses Code Compliance, which takes complaints under the county's Nuisance Ordinance. It doesn't take anonymous complaints unless an officer sees an imminent threat.") },
    { icon: "home", title: "Garbage in a receptacle", text: p("The county's Code Compliance FAQ says the Nuisance Ordinance requires garbage to be kept in an appropriate receptacle and not allowed to overflow. Overflowing bins are what raccoons and rats look for.") },
    { icon: "wrench", title: "No county trash pickup", text: p("Citrus County doesn't collect residential garbage. Lecanto homes hire one of the 8 private haulers on the county's list, so pickup days and bins vary street by street.") },
    { icon: "search", title: "Sanitary nuisances", text: p("DOH-Citrus Environmental Health, also in Lecanto, investigates sanitary nuisance complaints under Florida Statute 386.041, which covers improperly handled garbage and dead animals.") },
    { icon: "critter", title: "Rodent advice from DOH-Citrus", text: p("The department's rodent page tells residents to store food in sealed containers and clear away the debris rodents hide in.") },
  ],
  contactsHeading: "Lecanto contacts for animals and nuisances",
  contactsIntro: "Most of the county offices Lecanto residents need are a short drive away, on the government campus.",
  contacts: [
    { icon: "users", title: "Code Compliance", text: p("(352) 527-5310, for Nuisance Ordinance complaints such as overflowing garbage.") },
    { icon: "phone", title: "DOH-Citrus", text: p("352-527-0068, for bites and sanitary nuisances.") },
    { icon: "leaf", title: "UF/IFAS Extension Citrus County", text: p("(352) 527-5700, for advice on yards and wildlife.") },
    { icon: "home", title: "Solid Waste Management", text: p("(352) 527-7670, for hauler and landfill questions.") },
  ],
  servicesIntro: "We handle every animal below in Lecanto. Pick one for the signs and what the job involves.",
  reviewsIntro: "[PLACEHOLDER: reviews from Lecanto customers, matched from the client's Google reviews (TTR-723)]",
  faqHeading: "Lecanto wildlife questions",
  faqs: [
    faq(
      "Who takes animal bite reports for Lecanto?",
      `Wash the wound with soap and water for 5 to 10 minutes and get medical care ([Florida DOH](${DOH_RABIES})). Then report it to DOH-Citrus at 352-527-0068 ([DOH-Citrus](${CITRUS_ALERT})).`,
    ),
    faq(
      "How many rabid animals has Citrus County recorded?",
      "Few in the state tables: one bat in 2024 and one cat in 2025. Tests usually follow a possible exposure, so the tables don't count every case.",
    ),
    faq(
      "Is it legal to leave food out for raccoons in Florida?",
      `No. FWC rule 68A-4.001 prohibits placing food in a way that attracts raccoons, along with coyotes and foxes ([FWC](${FWC_FEEDING})). See [raccoons in the attic](/services/raccoons-in-attic/).`,
    ),
    faq(
      "Will the county remove a raccoon from my Lecanto house?",
      `No. The Sheriff's Animal Control page says it handles domestic animals and livestock and refers nuisance wildlife to a trapper ([Citrus County Sheriff](${SHERIFF})). See [raccoon removal](/services/raccoon-removal/).`,
    ),
    faq(
      "How fast can someone come to Lecanto?",
      "Same-day appointments are often available in Lecanto. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Wildlife problem in Lecanto?",
  ctaText: "Anywhere in Lecanto, call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Lecanto, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Lecanto, FL: raccoons, rats, bats and squirrels, plus Citrus County's garbage and nuisance rules and who to call. Call (727) 594-7705.",
  },
  sources: [
    { title: "U.S. Census Bureau: 2020 Census redistricting data, Florida (Lecanto CDP: 6,301 people, 2,562 housing units)", url: CENSUS_PL },
    { title: "U.S. Census Bureau: 2020 Gazetteer, Florida places (Lecanto CDP: 26.93 square miles of land)", url: GAZ },
    { title: "Citrus County: Code Compliance (Lecanto Government Building; Nuisance Ordinance complaints; no anonymous complaints unless an imminent threat; (352) 527-5310)", url: CODE },
    { title: "Citrus County: Code Compliance FAQs (garbage kept in an appropriate receptacle, not allowed to overflow)", url: CODE_FAQ },
    { title: "Citrus County: Residential garbage pickup (the county doesn't collect; 8 private haulers listed, plus the cities of Crystal River and Inverness)", url: GARBAGE },
    { title: "Citrus County: Solid Waste Management ((352) 527-7670)", url: SOLID_WASTE },
    { title: "DOH-Citrus: Sanitary nuisances (Lecanto office; F.S. 386.041 covers improperly handled garbage and dead animals; 352-527-0068)", url: NUISANCE },
    { title: "DOH-Citrus: Rodent control (store food in sealed containers; clear debris)", url: RODENTS },
    { title: "UF/IFAS Extension Citrus County (Lecanto; (352) 527-5700)", url: EXTENSION },
    { title: "Citrus County Sheriff's Office: Animal Control (domestic animals and livestock; nuisance wildlife referred to a nuisance trapper)", url: SHERIFF },
    { title: "DOH-Citrus: Rabies alert, July 23, 2026 (report bites and exposures to 352-527-0068)", url: CITRUS_ALERT },
    { title: "Florida DOH: Rabies (scrub the wound with soap and running water for five to ten minutes; see a health care provider)", url: DOH_RABIES },
    S.doh2024,
    S.doh2025,
    { title: "FWC: Feeding wildlife (68A-4.001 prohibits placing food in a manner that attracts coyotes, foxes and raccoons)", url: FWC_FEEDING },
  ],
  clientQuestions: ["Reviews and real job photos from Lecanto customers."],
});
