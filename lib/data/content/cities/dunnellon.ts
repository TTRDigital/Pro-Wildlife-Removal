import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* HELD (Ben, Oct 26, 2026: 4 to 5 facts, short of 6). Unregistered; Dunnellon now lives in the Marion County "Communities we serve" section. Dunnellon page, new for the rebuild (Nia, Oct 26, 2026; Kia: every Google Ads area gets a page). Checkable local facts only, about rats, bats, squirrels and raccoons. */
const EDR = "https://www.edr.state.fl.us/Content/population-demographics/data/Estimates2025.pdf";
const RSAP = "https://floridadep.gov/sites/default/files/Rainbow-Springs-AP-Management-Plan.pdf";

export const dunnellon = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-dunnellon-fl",
  name: "Dunnellon",
  county: "Marion",
  order: 42,
  phone: { label: "Call (844) 264-6254", href: "tel:+18442646254" },
  eyebrow: "WILDLIFE REMOVAL IN DUNNELLON",
  summary: "Wildlife removal in Dunnellon, FL: raccoons, rats, squirrels, bats, opossums and more, on the Rainbow River in southwest Marion County.",
  heroText: "A small city on the Rainbow and Withlacoochee rivers, where the state's preserve plan documents raccoons and two kinds of squirrel. Call (844) 264-6254.",
  answerHeading: "Who removes wildlife in Dunnellon, FL?",
  answer:
    "Animals living in a Dunnellon home are a private company's job. DOH-Marion's alerts send Marion residents to Marion County Animal Services for strays and bites to pets, and to the health department for human bites. Pro Wildlife Removal handles raccoons, rats, squirrels and bats in Dunnellon. Call (844) 264-6254.",
  points: ["Call (844) 264-6254", "On the Rainbow River", "About 2,000 residents"],
  townsHeading: "Dunnellon and nearby",
  townsIntro: "Dunnellon had an estimated 2,022 residents in 2025. We serve it along with Ocala, Silver Springs and the rest of Marion.",
  towns: [
    {
      title: "Marion County",
      href: "/service-areas/marion-county/",
      items: [
        { label: "Ocala" },
        { label: "Silver Springs" },
        { label: "Belleview" },
        { label: "Summerfield" },
      ],
    },
  ],
  localHeading: "Wildlife along Dunnellon's rivers",
  localIntro: "Florida's management plan for the Rainbow Springs Aquatic Preserve, which takes in part of Dunnellon, keeps a list of the animals found along the river. Here is what it says about the ones we handle.",
  local: [
    { icon: "map-pin", title: "A preserve inside the city", text: p("The Rainbow Springs Aquatic Preserve lies in southwest Marion County and takes in part of the city of Dunnellon, following the 5.7-mile Rainbow River to the Withlacoochee, per the state's 2016 management plan.") },
    { icon: "critter", title: "Raccoons on the river", text: p("The plan's list of species documented in and around the preserve includes the raccoon.") },
    { icon: "leaf", title: "Gray squirrels", text: p("The gray squirrel is also on the plan's list of documented species along the Rainbow River.") },
    { icon: "search", title: "A fox squirrel FWC still watches", text: p("The plan documents Sherman's fox squirrel along the river. Now called the southern fox squirrel, it came off Florida's species of special concern list in 2018 but remains on FWC's Imperiled Species Management Plan.") },
    { icon: "home", title: "Raccoons in west Marion, 2024", text: p("In May 2024, DOH-Marion put the Rainbow Lakes Estates and southwest Ocala areas under a 60-day rabies alert after two raccoons captured there on April 26 tested positive.") },
    { icon: "drop", title: "Marion's rabies record", text: p("Marion County's rabies tables listed a rabid bat and 2 raccoons in 2022, and 6 rabid raccoons in 2025.") },
  ],
  rats: {
    heading: "Rodent closures around Dunnellon",
    intro: "Restaurant inspection records, not home reports, are Dunnellon's local rat record.",
    cards: [
      { icon: "building", title: "Eight closures, 2015 to 2025", text: p("By our count of DBPR's emergency closure files, food businesses with a Dunnellon address were closed 8 times for rodents from 2015 through 2025, at 5 businesses, most recently in 2021.") },
      { icon: "map-pin", title: "Inside city limits", text: p("Three of those closures were at addresses inside Dunnellon city limits: one on the US 41 corridor in June 2017, and one business on East Pennsylvania Avenue twice in 2018.") },
      { icon: "search", title: "45 droppings, January 2026", text: p("Ocala-News.com reported that a Dunnellon-area restaurant was shut on Jan. 26, 2026, after an inspector counted 45 rodent droppings in the kitchen and bar. It reopened the next day.") },
    ],
    link: { label: "rat removal", href: "/services/rat-removal/" },
  },
  contactsHeading: "Marion and FWC numbers for Dunnellon",
  contactsIntro: "Dunnellon relies on Marion County and FWC's Ocala office. These numbers come from DOH-Marion's alerts and FWC's pages.",
  contacts: [
    { icon: "users", title: "Marion County Animal Services", text: p("352-671-8727, for strays and for bites to pets or livestock.") },
    { icon: "phone", title: "Human bites: DOH-Marion", text: p("352-629-0137.") },
    { icon: "map-pin", title: "FWC: Northeast Region", text: p("FWC's Northeast Region office in Ocala, 352-732-1225. Nuisance alligators: 866-FWC-GATOR.") },
  ],
  servicesIntro: "In town or along the two rivers, Dunnellon homes can get any service below. Pick an animal to see how it works.",
  servicesHeading: "Animals we remove in Dunnellon",
  reviewsIntro: "[PLACEHOLDER: reviews from Dunnellon customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Are there raccoons and squirrels along the Rainbow River?",
      "Yes. The state's 2016 plan for the Rainbow Springs Aquatic Preserve documents raccoons, gray squirrels and Sherman's fox squirrels along the river.",
    ),
    faq(
      "Has rabies been found near Dunnellon?",
      "Marion County's tables listed 6 rabid raccoons in 2025. Check DOH-Marion's newsroom for current alerts, keep pets vaccinated and don't handle wildlife.",
    ),
    faq(
      "Who do I call about a bite in Dunnellon?",
      "For a person, DOH-Marion at 352-629-0137. For a pet or livestock bitten by an animal, Marion County Animal Services at 352-671-8727.",
    ),
    faq(
      "Do you get out to Dunnellon quickly?",
      "Same-day appointments are often available in Dunnellon. Call (844) 264-6254.",
    ),
  ],
  ctaHeading: "Wildlife problem in Dunnellon?",
  ctaText: "Dunnellon homeowners can call (844) 264-6254.",
  seo: {
    title: "Wildlife Removal in Dunnellon, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Dunnellon, FL: raccoons, rats, squirrels and bats, plus what the Rainbow River preserve plan records and who to call about a bite.",
  },
  sources: [
    { title: "Florida DBPR: Emergency closures by calendar year, 2015-2025 (Business City Dunnellon, conditions naming rodents: 8 closures at 5 businesses; 3 inside city limits per the Census Geocoder: June 14, 2017; July 11 and Sept. 6, 2018; tally by our research helper, Oct 26, 2026)", url: "https://www2.myfloridalicense.com/hotels-restaurants/reports-statistics/reports-statistics-archive/" },
    { title: "Ocala-News.com, Feb. 5, 2026: 45 rat feces at restaurant in Dunnellon golf club lead to failed health inspection (closed Jan. 26, reopened Jan. 27, 2026)", url: "https://www.ocala-news.com/2026/02/05/45-rat-feces-at-restaurant-in-dunnellon-golf-club-lead-to-failed-health-inspection/" },
    { title: "Florida EDR: April 1, 2025 population estimates (Dunnellon 2,022; 2020 Census 1,928)", url: EDR },
    { title: "Florida DEP: Rainbow Springs Aquatic Preserve Management Plan, June 2016 (southwest Marion County, encompassing a portion of the city of Dunnellon; 5.7 miles of Rainbow River to the Withlacoochee; documented species include raccoon, grey squirrel, Sherman's fox squirrel (SSC); potential species also listed)", url: RSAP },
    { title: "FWC: Southern fox squirrel profile (previously Sherman's fox squirrel; removed as a Species of Special Concern in 2018; remains on the Imperiled Species Management Plan)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/southern-fox-squirrel/" },
    { title: "DOH-Marion: Rabies alert, May 3, 2024 (two raccoons captured April 26, 2024, Rainbow Lakes Estates and southwest Ocala areas; 60 days)", url: "https://marion.floridahealth.gov/2024/05/03/doh-marion-issues-rabies-alert/" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Marion: 1 bat, 2 raccoons)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2022.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Marion: 6 raccoons)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
    { title: "DOH-Marion: Rabies advisory, Sept. 18, 2026 (Marion County Animal Services 352-671-8727; DOH-Marion 352-629-0137)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/09/rabies-advisory-marion-9-18-26.pdf" },
    { title: "FWC: Regional offices (Northeast Region includes Marion; Ocala office 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Real job photos and reviews from Dunnellon customers."],
});
