import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* HELD by Ben (Oct 26): under 3 town facts about rats, bats, squirrels or raccoons; not registered in locations.ts.
 * Silver Springs page, new for the rebuild (Nia, Oct 26, 2026; Kia: every Google Ads area gets a page). Checkable local facts only; news items carry their year. */
const WFTV = "https://www.wftv.com/news/local/rabies-alert-3-raccoons-test-positive-marion-county/R44CSNWUMVDI7EZUDAD43JY2LI/";
const BEAR = "https://www.ocala-news.com/2024/05/15/large-black-bear-spotted-in-ocala/";
const HUNT = "https://www.ocala-news.com/2026/08/27/applications-for-marion-countys-bear-hunting-season-open-soon/";
const MONKEYS = "https://www.ocala-news.com/2025/10/22/kayakers-capture-video-of-monkeys-jumping-into-water-at-silver-springs-state-park/";

export const silverSprings = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-silver-springs-fl",
  name: "Silver Springs",
  county: "Marion",
  order: 41,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN SILVER SPRINGS",
  summary: "Wildlife removal in Silver Springs, FL: raccoons, rats, squirrels, bats, opossums and more, east of Ocala in Marion County.",
  heroText: "East of Ocala, where homes sit near the Silver Springs Forest, Gores Landing and a state park known for its monkeys. Call (727) 594-7705.",
  answerHeading: "Who removes wildlife in Silver Springs, FL?",
  answer:
    "In Silver Springs, as across Marion County, DOH-Marion's alerts send residents to Marion County Animal Services for strays and bites to pets, and to the health department for human bites. For raccoons, rats or squirrels living in your home, call Pro Wildlife Removal. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Raccoon rabies zone, 2023", "Bears nearby"],
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
        { label: "Dunnellon" },
      ],
    },
  ],
  localHeading: "Wildlife around Silver Springs",
  localIntro: "Silver Springs has had a raccoon rabies zone, bears at a boat ramp and a famous monkey troop. Here is what the records and reports show.",
  local: [
    { icon: "critter", title: "A rabies zone in Silver Springs", text: p("In July 2023, WFTV reported that three raccoons had tested positive in Marion County that week. DOH-Marion named an area in Silver Springs, north of County Road 314 and south of Gores Landing, where the disease was active.") },
    { icon: "phone", title: "The advice then", text: p("Health officials told people in that 2023 zone to avoid all contact with wildlife, particularly raccoons, bats, foxes, skunks, otters, bobcats and coyotes.") },
    { icon: "map-pin", title: "A bear at Mill Dam", text: p("In May 2024, Ocala-News ran a reader's photo of a large black bear out at night at the Mill Dam Boat Ramp in Silver Springs.") },
    { icon: "leaf", title: "Bear hunting grounds", text: p("Ocala-News reported in August 2026 that the Silver Springs Forest and Gores Landing are among the public hunting grounds in Marion's central bear zone, where 172 permit holders took 52 bears in the first hunt, in December 2025.") },
    { icon: "home", title: "Trash still matters", text: p("The same 2026 report noted that regulated bear hunts do not eliminate residential nuisance bear encounters, so residents still need to secure their trash.") },
    { icon: "drop", title: "The park's monkeys", text: p("Rhesus macaques were first brought to the Silver Springs area more than 85 years ago by a tour boat operator, Ocala-News reported in 2025, and they now number in the hundreds.") },
    { icon: "search", title: "Raccoons in Marion's tables", text: p("Across Marion County, the state's rabies tables listed 7 rabid raccoons in 2024 and 6 in 2025.") },
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
      "Are there bears in Silver Springs?",
      "Yes. A reader photographed a large black bear at the Mill Dam Boat Ramp in 2024, and the Silver Springs Forest is a public bear hunting ground. FWC's Ocala office, 352-732-1225, handles bear problems.",
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
      "Wildlife removal in Silver Springs, FL: raccoons, rats, squirrels and bats, plus local rabies and bear reports, and who to call about strays or bites.",
  },
  sources: [
    { title: "WFTV, July 14, 2023: Rabies alert, three raccoons test positive in Marion County (Silver Springs zone: north of County Road 314, south of Gores Landing, east of NE 147th Avenue Road, west of CR 314A; avoid all contact with wildlife, particularly raccoons, bats, foxes, skunks, otters, bobcats and coyotes)", url: WFTV },
    { title: "Ocala-News, May 15, 2024: Large black bear spotted (reader photo; Mill Dam Boat Ramp in Silver Springs, at night)", url: BEAR },
    { title: "Ocala-News, Aug. 27, 2026: Applications for Marion County's bear hunting season open soon (public grounds include Ocala WMA, Marshall Swamp, Silver Springs Forest, Gores Landing; December 2025 hunt: 172 permit holders, 52 bears; hunts do not eliminate residential nuisance bear encounters; secure trash)", url: HUNT },
    { title: "Ocala-News, Oct. 22, 2025: Kayakers capture video of monkeys at Silver Springs State Park (rhesus macaques introduced over 85 years ago by tour boat operator Colonel Tooey; now number in the hundreds)", url: MONKEYS },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Marion: 7 raccoons)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Marion: 6 raccoons)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
    { title: "DOH-Marion: Rabies advisory, Sept. 18, 2026 (Marion County Animal Services 352-671-8727; DOH-Marion 352-629-0137)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/09/rabies-advisory-marion-9-18-26.pdf" },
    { title: "FWC: Regional offices (Northeast Region includes Marion; Ocala office 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Typical response time in Silver Springs?", "Real job photos and reviews from Silver Springs customers."],
});
