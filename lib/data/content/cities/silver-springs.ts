import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Silver Springs page, new for the rebuild (Nia, Oct 26, 2026; Kia: every Google Ads area gets a page). Checkable local facts only; news items carry their year. */
const WFTV = "https://www.wftv.com/news/local/rabies-alert-3-raccoons-test-positive-marion-county/R44CSNWUMVDI7EZUDAD43JY2LI/";

export const silverSprings = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-silver-springs-fl",
  name: "Silver Springs",
  county: "Marion",
  order: 41,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN SILVER SPRINGS",
  summary: "Wildlife removal in Silver Springs, FL: raccoons, rats, squirrels, bats, opossums and more, east of Ocala in Marion County.",
  heroText: "East of Ocala, around Silver Springs State Park, where the park's own plan lists raccoons, three kinds of squirrel and bats. Call (727) 594-7705.",
  answerHeading: "Who removes wildlife in Silver Springs, FL?",
  answer:
    "In Silver Springs, as across Marion County, DOH-Marion's alerts send residents to Marion County Animal Services for strays and bites to pets, and to the health department for human bites. For raccoons, rats or squirrels living in your home, call Pro Wildlife Removal. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Raccoon rabies zone, 2023", "Squirrels and bats in the park"],
  townsHeading: "Silver Springs and nearby",
  townsIntro: "Silver Springs sits just east of Ocala. We cover it along with the rest of Marion County.",
  towns: [
    {
      title: "Marion County",
      href: "/service-areas/marion-county/",
      items: [
        { label: "Ocala", href: "/service-areas/marion-county/ocala/" },
        { label: "Belleview" },
        { label: "Summerfield" },
        { label: "Dunnellon" },
      ],
    },
  ],
  localHeading: "Wildlife around Silver Springs",
  localIntro: "Silver Springs has had a raccoon rabies zone, and its state park keeps records of raccoons, squirrels and bats. Here is what they show.",
  local: [
    { icon: "critter", title: "A rabies zone in Silver Springs", text: p("WFTV reported in July 2023 that three Marion raccoons had tested positive in a single week. The Silver Springs zone, between County Road 314 and Gores Landing, was one of three that DOH-Marion set, and people inside it were told to avoid all contact with wildlife, raccoons and bats in particular.") },
    { icon: "home", title: "Raccoons and squirrels as park nuisances", text: p("The park's 2014 management plan names raccoons as native animals that can become nuisance cases, and its 2010 plan, written when it was Silver River State Park, names raccoons and gray squirrels.") },
    { icon: "leaf", title: "Fox squirrels in the sandhill", text: p("Sherman's fox squirrels live in the park's sandhill, the 2014 plan says. The 2010 plan adds the pastures and says they are seen often, though the park doesn't support a large population.") },
    { icon: "search", title: "Three kinds of squirrel", text: p("The 2014 plan's mammal list includes the gray squirrel, the fox squirrel and the southern flying squirrel, along with the raccoon.") },
    { icon: "drop", title: "Bats on the park's list", text: p("The 2014 plan lists the red bat in the park. A hoary bat was also documented there by the Florida Natural Areas Inventory, but none has been seen since the 1970s.") },
    { icon: "map-pin", title: "Raccoons in Marion's tables", text: p("Across Marion County, the state's rabies tables listed 7 rabid raccoons in 2024 and 6 in 2025.") },
  ],
  rats: {
    heading: "Rodent records along East Highway 40",
    intro: "State restaurant inspections are the local rat record for businesses with a Silver Springs address.",
    cards: [
      { icon: "building", title: "Ten closures at two addresses", text: p("By our count of DBPR's emergency closure files, food businesses with a Silver Springs address were closed 10 times for rodents from 2015 through 2025, all at two addresses on East Highway 40. One address was closed 6 times under four business names, the last in December 2023.") },
      { icon: "search", title: "About 500 droppings, 2025", text: p("A May 2025 complaint inspection at a pizza restaurant on East Silver Springs Boulevard found about 500 rodent droppings in dry storage, the Ocala Star-Banner reported.") },
    ],
    link: { label: "rat removal in Ocala", href: "/services/rat-removal/ocala-fl/" },
  },
  contactsHeading: "Marion County and FWC numbers near Silver Springs",
  contactsIntro: "Near the state park, strays and pet bites go to Marion County, human bites to DOH-Marion, and alligators to FWC.",
  contacts: [
    { icon: "users", title: "Marion County Animal Services", text: p("352-671-8727, the number DOH-Marion gives for strays and for bites to pets or livestock.") },
    { icon: "phone", title: "Human bites: DOH-Marion", text: p("352-629-0137, to report a bite or scratch from any animal.") },
    { icon: "map-pin", title: "FWC: Northeast Region", text: p("FWC's Northeast Region office in Ocala, 352-732-1225. Nuisance alligators: 866-FWC-GATOR.") },
  ],
  servicesIntro: "The park's raccoons, squirrels and bats are all on this list, along with every other animal we remove near Silver Springs.",
  servicesHeading: "Animals we remove in Silver Springs",
  reviewsIntro: "[PLACEHOLDER: reviews from Silver Springs customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Has rabies been found in Silver Springs?",
      "Yes. In July 2023, DOH-Marion named an area of Silver Springs, north of County Road 314 and south of Gores Landing, as one of three alert zones after three Marion raccoons tested positive that week. Keep pets vaccinated and avoid raccoons.",
    ),
    faq(
      "Who do I call about a bear in Silver Springs?",
      "FWC. Its Northeast Region office is in Ocala, 352-732-1225.",
    ),
    faq(
      "Who do I call about a stray or a bite in Silver Springs?",
      "Marion County Animal Services, 352-671-8727, for strays and bites to pets or livestock. Report human bites to DOH-Marion at 352-629-0137.",
    ),
    faq(
      "Do you come out to Silver Springs the same day?",
      "Same-day appointments are often available in Silver Springs. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Wildlife problem in Silver Springs?",
  ctaText: "Silver Springs homeowners can call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal Silver Springs, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Silver Springs, FL: raccoons, rats, squirrels and bats, plus a local rabies zone, park wildlife records and who to call about strays.",
  },
  sources: [
    { title: "Florida DBPR: Emergency closures by calendar year, 2015-2025 (Business City Silver Springs, conditions naming rodents: 10 closures, all at two E Hwy 40 addresses; 6 at one address under four business names, Oct. 2018 to Dec. 7, 2023; tally by our research helper, Oct 26, 2026)", url: "https://www2.myfloridalicense.com/hotels-restaurants/reports-statistics/reports-statistics-archive/" },
    { title: "Ocala Star-Banner via Yahoo News, May 6, 2025: 9 Marion County restaurants cited for high-priority violations (Silver Springs Pizza, E. Silver Springs Blvd.: about 500 rodent droppings in dry storage, May 2, 2025)", url: "https://www.yahoo.com/news/articles/9-marion-county-restaurants-cited-090333438.html" },
    { title: "WFTV, July 14, 2023: Rabies alert, three raccoons test positive in Marion County (Silver Springs zone: north of County Road 314, south of Gores Landing, east of NE 147th Avenue Road, west of CR 314A; avoid all contact with wildlife, particularly raccoons, bats, foxes, skunks, otters, bobcats and coyotes)", url: WFTV },
    { title: "Florida DEP: Silver Springs State Park Unit Management Plan Amendment, Dec. 17, 2014, bundled in the same PDF with the 2010 Silver River State Park Unit Management Plan (2014: raccoons can become nuisance cases, Sherman's fox squirrels in sandhill; 2010: nuisance raccoons and gray squirrels, Sherman's fox squirrels in pasture and sandhill, observed often, not a large population; 2014 mammal list: gray squirrel, fox squirrel, southern flying squirrel, raccoon, red bat; hoary bat documented by FNAI, not seen since the 1970s)", url: "https://floridadep.gov/sites/default/files/SilverSprings_2014_ApprovedPlan%26Amendment.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Marion: 7 raccoons)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Marion: 6 raccoons)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
    { title: "DOH-Marion: Rabies advisory, Sept. 18, 2026 (Marion County Animal Services 352-671-8727; DOH-Marion 352-629-0137)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/09/rabies-advisory-marion-9-18-26.pdf" },
    { title: "FWC: Regional offices (Northeast Region includes Marion; Ocala office 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Real job photos and reviews from Silver Springs customers."],
});
