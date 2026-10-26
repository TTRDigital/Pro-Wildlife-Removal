import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Brooksville city page, rewritten in place at its existing URL (Ben, Oct 26). Checkable local facts about rats, bats, squirrels and raccoons only. */
const TED_ROAD = "https://www.floridahealth.gov/wp-content/uploads/2025/07/advisory-hernando-6-2-2025.pdf";
const SPRING_HILL_ALERT = "https://www.floridahealth.gov/wp-content/uploads/2026/06/rabies-alert-hernando-county-6-12-26.pdf";
const CHIN_BT = "https://floridabirdingtrail.com/site/chinsegut-wildlife-and-environmental-area/";
const CHIN_FWC = "https://myfwc.com/recreation/lead/chinsegut/";
const NONGAME = "https://myfwc.com/hunting/regulations/nongame/";
const GOOD_NEIGHBOR = "https://www.cityofbrooksville.us/AgendaCenter/ViewFile/Agenda/_04252024-260";
const BN9 = "https://baynews9.com/fl/tampa/news/2018/06/01/hernando-sheriffs-office-brooksville-enforcement";
const DBPR = "https://www2.myfloridalicense.com/hotels-restaurants/reports-statistics/reports-statistics-archive/";
const SHERIFF = "https://www.hernandosheriff.org/AnimalServices/";
const COLLECTION = "https://www.hernandocounty.us/living-here/garbage-recycling/residential-collection/";
const DOH_RABIES = "https://hernando.floridahealth.gov/programs-and-services/environmental-public-health/rabies-surveillance/";
const FWC_BATS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";

export const brooksville = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-service-in-brooksville-fl",
  name: "Brooksville",
  county: "Hernando",
  order: 9,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN BROOKSVILLE",
  summary: "Wildlife removal in Brooksville, FL: raccoons, rats, bats, squirrels, opossums, snakes and more, in Hernando County's only city.",
  heroText: "Hernando's county seat, ringed by hills and pasture, with FWC land at Chinsegut to the north. Call (727) 594-7705.",
  answerHeading: "Who removes wildlife in Brooksville, FL?",
  answer:
    "Usually a private company. HCSO Animal Services handles pets and strays, and the city runs its own garbage collection. For raccoons, rats, bats or squirrels in your attic, walls or garage, Pro Wildlife Removal finds the way in, removes the animals legally, closes the gap and cleans up. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Rabid raccoon off Ted Road, 2025", "Bat colony at Chinsegut"],
  townsHeading: "Brooksville and nearby",
  townsIntro: "Brooksville is the only incorporated city in Hernando County. We cover the city, the country roads around it and the rest of the county.",
  towns: [
    {
      title: "Hernando County",
      href: "/about-us/service-area/wildlife-removal-in-hernando-county-fl/",
      items: [
        { label: "Rats in Brooksville", href: "/about-us/service-area/expert-rat-removal-in-brooksville-fl/" },
        { label: "Spring Hill", href: "/about-us/service-area/wildlife-removal-spring-hill-fl/" },
        { label: "Weeki Wachee" },
      ],
    },
  ],
  localHeading: "Raccoons, bats and squirrels around Brooksville",
  localIntro: "Health department notices, FWC's own pages and a city trail plan put these animals on the record in and around Brooksville.",
  local: [
    { icon: "critter", title: "A rabid raccoon off Ted Road", text: p("DOH-Hernando issued a rabies advisory on June 2, 2025, after a raccoon killed off Ted Road in the Brooksville area (ZIP 34601) on May 28 tested positive. The department warned that rabies may be present in the wild animal population.") },
    { icon: "leaf", title: "Free-tailed bats at Chinsegut", text: p("The Great Florida Birding and Wildlife Trail lists a large colony of Brazilian free-tailed bats at FWC's Chinsegut Wildlife and Environmental Area on Lake Lindsey Road.") },
    { icon: "map-pin", title: "Fox squirrels, hands off", text: p("FWC names fox squirrels among the wildlife at Chinsegut. Under FWC's nongame rules, fox squirrels may not be taken or pursued, so a fox squirrel in a Brooksville yard is not a removal job.") },
    { icon: "home", title: "No feeding on the trail", text: p("The city's Good Neighbor Trail to Russell Street Station Management Plan (1999), attached to an April 25, 2024 advisory committee agenda, says the city will prohibit feeding raccoons, squirrels and other wild animals in the trail project area. DOH-Hernando advises people not to feed wild animals.") },
    { icon: "building", title: "Rodent closures on Cortez and Jefferson", text: p("State restaurant inspectors shut food businesses with Brooksville addresses 17 times from 2022 through 2025 over rodent activity, by our count of DBPR's closure reports: 10 of them in 2023. Seven were on Cortez Boulevard and four on East Jefferson Street. These are restaurant records, not home reports.") },
    { icon: "search", title: "Raccoon rabies next door", text: p("On June 12, 2026, DOH-Hernando issued a 60-day rabies alert for part of Spring Hill after an unvaccinated cat attacked by a raccoon off Norvell Road tested positive.") },
    { icon: "wrench", title: "Bats on FWC's calendar", text: p("FWC makes bat exclusion illegal during maternity season, April 16 to August 14. A colony in a Brooksville attic or church eave has to wait for mid-August.") },
  ],
  contactsHeading: "Who to call in Brooksville",
  contactsIntro: "The public numbers for problems outside our work, each from the agency's own page.",
  contacts: [
    { icon: "users", title: "HCSO Animal Services", text: p("(352) 796-5062. Pets, strays and bites. The Sheriff's Office has also handled law enforcement inside Brooksville since June 2018.") },
    { icon: "phone", title: "Bites and scratches: DOH-Hernando", text: p("352-540-6812, Environmental Public Health, for any bite or scratch from a raccoon, bat or other animal.") },
    { icon: "home", title: "City garbage", text: p("Brooksville runs its own garbage collection through its Utilities Department: (352) 540-3860.") },
  ],
  servicesIntro: "We handle every animal below in Brooksville. Pick one to read the signs and what the job involves.",
  faqs: [
    faq(
      "Does the sheriff's Animal Services remove raccoons from homes?",
      `Its Animal Services pages list pet and stray services and don't mention removing wildlife from homes ([HCSO](${SHERIFF})). If a person is bitten or scratched, see a doctor and report it to DOH-Hernando at (352) 540-6812. For a raccoon in the attic, see [raccoon removal](/services/raccoon-removal/).`,
    ),
    faq(
      "Has rabies been found near Brooksville?",
      `Yes. A raccoon off Ted Road tested positive in May 2025, and DOH-Hernando issued an advisory ([DOH-Hernando](${TED_ROAD})). Report any bite to DOH-Hernando at 352-540-6812.`,
    ),
    faq(
      "Can I trap the fox squirrel raiding my feeder?",
      `No. FWC's nongame rules say fox squirrels may not be taken or pursued ([FWC](${NONGAME})). Gray squirrels in an attic are a different matter; see [squirrels in the attic](/services/squirrels-in-attic/).`,
    ),
    faq(
      "Where do the bats I see at dusk come from?",
      "The Birding Trail lists a large colony of Brazilian free-tailed bats at Chinsegut, north of town. If bats are using your roof, our guide to [who to call about a bat](/blog/who-to-call-for-bat-removal/) explains the rules.",
    ),
    faq(
      "How soon can you get to Brooksville?",
      "Same-day appointments are often available in Brooksville. Pro Wildlife Removal takes calls 24 hours a day at (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time in Brooksville]",
    ),
  ],
  ctaHeading: "Wildlife in your Brooksville home?",
  ctaText: "Anywhere in Brooksville, call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Brooksville, FL | Pro Wildlife Removal",
    description:
      "Brooksville wildlife removal: raccoons, rats, bats and squirrels, plus a Ted Road rabies advisory, Chinsegut's bat colony and who to call. (727) 594-7705.",
  },
  sources: [
    { title: "DOH-Hernando: Rabies advisory, June 2, 2025 (rabid raccoon killed in the Brooksville area off Ted Road, May 28, 2025; rabies may be present in the wild animal population; do not handle or feed wild animals)", url: TED_ROAD },
    { title: "DOH-Hernando: Rabies alert, June 12, 2026 (unvaccinated cat attacked by a raccoon, Norvell Road, Spring Hill area)", url: SPRING_HILL_ALERT },
    { title: "Great Florida Birding and Wildlife Trail: Chinsegut WEA (large colony of Brazilian free-tailed bats; Lake Lindsey Rd, Brooksville)", url: CHIN_BT },
    { title: "FWC: Chinsegut Wildlife and Environmental Area (gopher tortoises, fox squirrels and wading birds among the wildlife)", url: CHIN_FWC },
    { title: "FWC: Nongame wildlife regulations (fox squirrels may not be taken or pursued)", url: NONGAME },
    { title: "City of Brooksville: Good Neighbor Trail to Russell Street Station Management Plan (1999), attached to an April 25, 2024 advisory committee agenda (city will prohibit feeding raccoons, squirrels and other wild animals in the trail project area)", url: GOOD_NEIGHBOR },
    { title: "Florida DBPR: Hotels and restaurants reports archive, 2022-2025 emergency order sheets (Business City Brooksville, conditions naming rodents: 17 closures at 14 businesses; 2022 1, 2023 10, 2024 2, 2025 4; Cortez Blvd 7, E Jefferson St 4; tally by Owen, Oct 26, 2026)", url: DBPR },
    { title: "FWC: Bats in buildings (exclusion illegal during maternity season, April 16 to August 14)", url: FWC_BATS },
    { title: "Hernando County Sheriff's Office: Animal Services ((352) 796-5062; pet services; pet services)", url: SHERIFF },
    { title: "Bay News 9, June 1, 2018: Hernando sheriff takes over Brooksville law enforcement (June 2018)", url: BN9 },
    { title: "DOH-Hernando: Rabies surveillance (Environmental Public Health 352-540-6812)", url: DOH_RABIES },
    { title: "City of Brooksville: Utilities (city garbage collection; (352) 540-3860)", url: "https://www.cityofbrooksville.us/253/Utilities" },
    { title: "Hernando County: Residential collection (Coastal serves unincorporated areas, excluding the City of Brooksville; city (352) 540-3860)", url: COLLECTION },
  ],
  clientQuestions: ["Typical response time in Brooksville?", "Reviews and real job photos from Brooksville customers."],
});
