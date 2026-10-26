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
      href: "/about-us/service-area/wildlife-removal-marion-county-fl/",
      items: [
        { label: "Ocala", href: "/about-us/service-area/wildlife-removal-ocala-fl/" },
        { label: "Belleview" },
        { label: "Summerfield" },
        { label: "Dunnellon", href: "/about-us/service-area/wildlife-removal-dunnellon-fl/" },
      ],
    },
  ],
  localHeading: "Wildlife around Silver Springs",
  localIntro: "Silver Springs has had a raccoon rabies zone, and its state park keeps records of raccoons, squirrels and bats. Here is what they show.",
  local: [
    { icon: "critter", title: "A rabies zone in Silver Springs", text: p("In July 2023, WFTV reported that three raccoons had tested positive in Marion County that week. DOH-Marion named an area in Silver Springs, north of County Road 314 and south of Gores Landing, where the disease was active.") },
    { icon: "phone", title: "The advice then", text: p("Health officials told people in that 2023 zone to avoid all contact with wildlife, particularly raccoons, bats, foxes, skunks, otters, bobcats and coyotes.") },
    { icon: "home", title: "Raccoons and squirrels as park nuisances", text: p("The 2014 management plan for Silver Springs State Park lists raccoons and gray squirrels among the native animals that can become nuisance cases in the park.") },
    { icon: "leaf", title: "Fox squirrels in the sandhill", text: p("Sherman's fox squirrels live in the park's pastures and sandhill, the plan says, and are seen often, though the park doesn't support a large population.") },
    { icon: "search", title: "Three kinds of squirrel", text: p("The park plan's mammal list includes the gray squirrel, the fox squirrel and the southern flying squirrel, along with the raccoon.") },
    { icon: "drop", title: "Bats on the park's list", text: p("The plan lists the red bat in the park. A hoary bat was also documented there by the Florida Natural Areas Inventory, but none has been seen since the 1970s.") },
    { icon: "map-pin", title: "Raccoons in Marion's tables", text: p("Across Marion County, the state's rabies tables listed 7 rabid raccoons in 2024 and 6 in 2025.") },
  ],
  contactsIntro: "Who handles what in Silver Springs, from DOH-Marion's alerts and FWC's own pages.",
  contacts: [
    { icon: "users", title: "Marion County Animal Services", text: p("352-671-8727, the number DOH-Marion gives for strays and for bites to pets or livestock.") },
    { icon: "phone", title: "Human bites: DOH-Marion", text: p("352-629-0137, to report a bite or scratch from any animal.") },
    { icon: "map-pin", title: "Bears: FWC", text: p("FWC's Northeast Region office in Ocala, 352-732-1225.") },
  ],
  servicesIntro: "Every service we offer is available in Silver Springs. Choose an animal to learn more.",
  servicesHeading: "Animals we remove in Silver Springs",
  reviewsIntro: "[PLACEHOLDER: reviews from Silver Springs customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Has rabies been found in Silver Springs?",
      "Yes. In July 2023, DOH-Marion named an area of Silver Springs, north of County Road 314 and south of Gores Landing, after three Marion raccoons tested positive that week. Keep pets vaccinated and avoid raccoons.",
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
      "How soon can you get to Silver Springs?",
      "Same-day appointments are often available in Silver Springs. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time in Silver Springs]",
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
    { title: "WFTV, July 14, 2023: Rabies alert, three raccoons test positive in Marion County (Silver Springs zone: north of County Road 314, south of Gores Landing, east of NE 147th Avenue Road, west of CR 314A; avoid all contact with wildlife, particularly raccoons, bats, foxes, skunks, otters, bobcats and coyotes)", url: WFTV },
    { title: "Florida DEP: Silver Springs State Park Unit Management Plan Amendment, Dec. 17, 2014 (nuisance cases may arise from raccoons and gray squirrels; Sherman's fox squirrels in pasture and sandhill, observed often, not a large population; mammal list: gray squirrel, fox squirrel, southern flying squirrel, raccoon, red bat; hoary bat documented by FNAI, not seen since the 1970s)", url: "https://floridadep.gov/sites/default/files/SilverSprings_2014_ApprovedPlan%26Amendment.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Marion: 7 raccoons)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Marion: 6 raccoons)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
    { title: "DOH-Marion: Rabies advisory, Sept. 18, 2026 (Marion County Animal Services 352-671-8727; DOH-Marion 352-629-0137)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/09/rabies-advisory-marion-9-18-26.pdf" },
    { title: "FWC: Regional offices (Northeast Region includes Marion; Ocala office 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Typical response time in Silver Springs?", "Real job photos and reviews from Silver Springs customers."],
});
