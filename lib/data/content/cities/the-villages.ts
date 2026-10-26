import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* The Villages page, rewritten in place at its existing URL (Nia, Oct 26, 2026). Checkable local facts about rats, bats, squirrels and raccoons only; news items carry their year. */
const BATS = "https://www.villages-news.com/2025/10/12/old-fashioned-solution-solves-bat-problem-at-starter-shack-in-the-villages/";
const GCI = "https://www.golfcourseindustry.com/article/bats-eye-view";
const BRIAR = "https://www.villages-news.com/2016/09/10/nervous-neighbors-complain-villa-bats-rats-owner-nevada/";
const SANTIAGO = "https://www.clickorlando.com/news/2016/05/26/squirrel-sized-rats-invade-homes-in-the-villages/";
const LYNNHAVEN = "https://www.villages-news.com/2025/07/18/villagers-upset-that-site-of-fatal-fire-attracting-rats-and-buzzards/";
const RABIES2019 = "https://www.villages-news.com/2019/12/04/residents-warned-after-raccoon-found-near-the-villages-tests-positive-for-rabies/";
const LAZAMORA = "https://www.villages-news.com/2019/10/03/raccoon-suspected-of-being-rabid-shot-and-killed-in-village-of-la-zamora/";
const FOXSQ = "https://www.villages-news.com/2025/05/08/rare-black-southern-fox-squirrel-in-the-village-of-summerhill/";
const TRASH = "https://www.districtgov.org/how-to/faqs/";

export const theVillages = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-the-villages",
  name: "The Villages",
  county: "Sumter",
  order: 29,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN THE VILLAGES",
  summary: "Wildlife removal in The Villages, FL: rats, bats, squirrels, raccoons, opossums, snakes, armadillos and more, on every side of The Villages.",
  heroText: "Rats in villas, bats at a golf starter shack, raccoons and fox squirrels: The Villages has seen them all on the record. Call (727) 594-7705.",
  answerHeading: "Who removes wildlife in The Villages, FL?",
  answer:
    "A private company. In 2016, Sumter County told residents of The Villages with rats to call a commercial company, and the county says its Animal Services generally deals only with domestic animals. Pro Wildlife Removal handles rats, bats, squirrels and raccoons in homes across The Villages. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Sumter and Marion counties", "Bats at Hilltop, 2025"],
  townsHeading: "The Villages and nearby",
  townsIntro: "The Villages spans parts of Sumter and Marion counties, by the Census Bureau's count, and we cover every village.",
  towns: [
    {
      title: "Sumter and Marion counties",
      href: "/about-us/service-area/wildlife-removal-sumter-county-fl/",
      items: [
        { label: "Sumter County", href: "/about-us/service-area/wildlife-removal-sumter-county-fl/" },
        { label: "Marion County", href: "/about-us/service-area/wildlife-removal-marion-county-fl/" },
        { label: "Wildwood" },
        { label: "Summerfield" },
        { label: "Ocala", href: "/about-us/service-area/wildlife-removal-ocala-fl/" },
      ],
    },
  ],
  localHeading: "Rats, bats, raccoons and squirrels in The Villages",
  localIntro: "From villas to golf courses, The Villages has a long local record with the animals we handle. Here is what news reports and the health departments show.",
  local: [
    { icon: "critter", title: "Bats at the Hilltop starter shack", text: p("In 2025, Golf Course Industry reported 100 to 300 bats roosting in the starter's building at Hilltop Executive Golf Course on the Historic Side. Crews waited until Aug. 15 to put up nets that let the bats out but not back in.") },
    { icon: "home", title: "Bat houses by the woodworkers", text: p("Villages-News reported in October 2025 that The Villages Woodworking Club built bat houses for the evicted colony, and that Florida's strict rules ruled out forcibly evicting the bats from the starter shack.") },
    { icon: "search", title: "Rats in a Village of Santiago home", text: p("In May 2016, News 6 reported rats getting into homes in the Village of Santiago. Sumter County said residents with a rat problem should call a commercial company to remove them.") },
    { icon: "wrench", title: "Rats and bats at a Briar Meadow villa", text: p("A Legacy Villas home in the Village of Briar Meadow South, on the Marion side, was overrun with rats, bats and more, neighbors told Villages-News in 2016. They were urged to take the case to the Marion County Health Department.") },
    { icon: "map-pin", title: "A burned house draws rats", text: p("In July 2025, Lynnhaven residents told their district board that a fire-damaged home on Due West Drive was attracting rats and buzzards, and Sumter County had opened a code enforcement case.") },
    { icon: "phone", title: "A rabid raccoon nearby, 2019", text: p("In December 2019, the Marion and Sumter health departments warned residents of the northwest portion of The Villages after a raccoon nearby tested positive for rabies, and told them to avoid raccoons and bats.") },
    { icon: "drop", title: "A staggering raccoon in La Zamora", text: p("Also in 2019, Lady Lake police shot a raccoon suspected of being rabid at a home on Del Rio Drive in the Village of La Zamora. The officer reported it staggered and collapsed as he approached.") },
    { icon: "leaf", title: "A black fox squirrel", text: p("In May 2025, Villages-News ran a reader's photo of a rare black southern fox squirrel in the Village of Summerhill.") },
  ],
  contactsIntro: "Who handles what in The Villages, from Sumter County's and the health departments' own pages.",
  contacts: [
    { icon: "users", title: "Sumter County Animal Services", text: p("352-689-4400. The county says it generally deals only with domestic animals.") },
    { icon: "phone", title: "Bites: DOH-Sumter", text: p("352-569-3102, the number in DOH-Sumter's June 2026 rabies alert.") },
    { icon: "map-pin", title: "Bears and wildlife questions: FWC", text: p("FWC's Northeast Region office in Ocala, 352-732-1225.") },
  ],
  servicesIntro: "Every service we offer is available in The Villages. Choose an animal to learn more.",
  servicesHeading: "Animals we remove in The Villages",
  reviewsIntro: "[PLACEHOLDER: reviews from customers in The Villages, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Will Sumter County remove rats or raccoons from my villa?",
      "No. Sumter County says Animal Services generally deals only with domestic animals, and in 2016 it told residents of The Villages with rats to call a commercial company.",
    ),
    faq(
      "Can bats be removed from a building in The Villages in summer?",
      "Only with an FWC permit. Maternity season runs April 16 to August 14, which is why the Hilltop crew in 2025 waited until August 15 to put up its nets.",
    ),
    faq(
      "Why does my trash have to go out in bags?",
      "In Districts 1 through 11, the district's FAQ says household waste goes out in sealed bags, and garbage cans aren't allowed. Set bags out close to pickup time so they don't sit overnight for rats or raccoons.",
    ),
    faq(
      "Is the black squirrel in my yard a fox squirrel?",
      "Likely. A rare black southern fox squirrel was photographed in the Village of Summerhill in 2025. FWC says fox squirrels are protected from hunting statewide, so leave it be.",
    ),
    faq(
      "How soon can you get to The Villages?",
      "Same-day appointments are often available in The Villages. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time in The Villages]",
    ),
  ],
  ctaHeading: "Wildlife problem in The Villages?",
  ctaText: "Villagers can call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in The Villages, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in The Villages, FL: rats, bats, squirrels and raccoons out of villas and homes, plus local rat, bat and rabies reports and who to call.",
  },
  sources: [
    { title: "Golf Course Industry, Dec. 3, 2025: Bat's-eye view (Hilltop Executive Golf Course, The Villages; 100 to 300 bats in the starter's building; nets put up after Aug. 15 so bats could get out but not back in; six bat houses at Hilltop and Silver Lake)", url: GCI },
    { title: "Villages-News, Oct. 12, 2025: Old-fashioned solution solves bat problem at starter shack in The Villages (Hilltop Starter Shack on the Historic Side; Florida's strict rules on removing bats; Woodworking Club built bat houses)", url: BATS },
    { title: "News 6 (ClickOrlando), May 25, 2016: Squirrel-sized rats invade homes in The Villages (Villages of Santiago, Sumter County; Sumter County said residents should call a commercial company)", url: SANTIAGO },
    { title: "Villages-News, Sept. 10, 2016: Nervous neighbors complain about villa (Legacy Villas, Village of Briar Meadow South; overrun with mold, snakes, rats, bats and bees; take the case to the Marion County Health Department)", url: BRIAR },
    { title: "Villages-News, July 18, 2025: Villagers upset that site of fatal fire attracting rats and buzzards (Due West Drive, Village of Lynnhaven; Sumter County code enforcement case)", url: LYNNHAVEN },
    { title: "Villages-News, Dec. 4, 2019: Residents warned after raccoon found near The Villages tests positive for rabies (Marion and Sumter health departments; northwest portion of The Villages; avoid raccoons, bats and other wildlife)", url: RABIES2019 },
    { title: "Villages-News, Oct. 3, 2019: Raccoon suspected of being rabid shot and killed in Village of La Zamora (Del Rio Drive; Lady Lake Police Department report; staggered and collapsed)", url: LAZAMORA },
    { title: "Villages-News, May 8, 2025: Rare black southern fox squirrel in the Village of Summerhill (reader photo)", url: FOXSQ },
    { title: "The Villages District Government: FAQs (Districts 1-11: household waste in sealed bags; no garbage cans or bins)", url: TRASH },
    { title: "Sumter County: Nuisance wildlife (Animal Services generally deals only with domestic animals; referrals to private trappers)", url: "https://www.sumtercountyfl.gov/1180/Nuisance-Wildlife" },
    { title: "Florida DOH: DOH-Sumter rabies alert, June 26, 2026 (report bites to 352-569-3102)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/06/rabies-alert-sumter-county-6-26-2026.pdf" },
    { title: "Sumter County: Animal Services contact (352-689-4400)", url: "https://www.sumtercountyfl.gov/1183/Contact-UsHours" },
    { title: "FWC news release, April 6, 2026 (bat maternity season April 16 to Aug. 14)", url: "https://myfwc.com/news/all-news/bat-maternity-0426/" },
    { title: "FWC: Fox squirrel profile (protected from hunting throughout the state)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/fox-squirrel/" },
    { title: "U.S. Census Bureau: 2020 place codes (The Villages CDP in Marion and Sumter counties)", url: "https://www2.census.gov/geo/docs/reference/codes2020/place/st12_fl_place2020.txt" },
    { title: "FWC: Regional offices (Northeast Region, Ocala, 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Typical response time in The Villages?", "Real job photos and reviews from customers in The Villages."],
});
