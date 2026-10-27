import { countyPage, S } from "../counties/build.ts";
import { faq, p } from "../pt.ts";
import { theVillagesRatsInput } from "./rats/the-villages.ts";

/* The Villages page, rewritten in place at its existing URL (Nia, Oct 26, 2026). The Sumter County page was merged in here (Cole, Oct 26; Wade 301s the old URL). Checkable local facts about rats, bats, squirrels and raccoons only; news items carry their year. */
const BATS = "https://www.villages-news.com/2025/10/12/old-fashioned-solution-solves-bat-problem-at-starter-shack-in-the-villages/";
const GCI = "https://www.golfcourseindustry.com/article/bats-eye-view";
const BRIAR = "https://www.villages-news.com/2016/09/10/nervous-neighbors-complain-villa-bats-rats-owner-nevada/";
const SANTIAGO = "https://www.clickorlando.com/news/2016/05/26/squirrel-sized-rats-invade-homes-in-the-villages/";
const LYNNHAVEN = "https://www.villages-news.com/2025/07/18/villagers-upset-that-site-of-fatal-fire-attracting-rats-and-buzzards/";
const RABIES2019 = "https://www.villages-news.com/2019/12/04/residents-warned-after-raccoon-found-near-the-villages-tests-positive-for-rabies/";
const LAZAMORA = "https://www.villages-news.com/2019/10/03/raccoon-suspected-of-being-rabid-shot-and-killed-in-village-of-la-zamora/";
const FOXSQ = "https://www.villages-news.com/2025/05/08/rare-black-southern-fox-squirrel-in-the-village-of-summerhill/";
const TRASH = "https://www.districtgov.org/how-to/faqs/";
const WEBSTER = "https://www.floridahealth.gov/wp-content/uploads/2026/06/rabies-alert-sumter-county-6-26-2026.pdf";
const SUMTERVILLE = "https://www.floridahealth.gov/wp-content/uploads/2025/07/alert-sumter-6-19-2024.pdf";

export const theVillages = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-the-villages",
  name: "The Villages",
  county: "Sumter",
  order: 29,
  phone: { label: "Call (844) 264-6254", href: "tel:+18442646254" },
  eyebrow: "WILDLIFE REMOVAL IN THE VILLAGES",
  summary: "Wildlife removal in The Villages, FL: rats, bats, squirrels, raccoons, opossums, snakes, armadillos and more, on every side of The Villages.",
  heroText: "Rats in villas, bats at a golf starter shack, raccoons and fox squirrels: The Villages has seen them all on the record. Call (844) 264-6254.",
  answerHeading: "Who removes wildlife in The Villages, FL?",
  answer:
    "A private company. In 2016, Sumter County told residents of The Villages with rats to call a commercial company, and the county says its Animal Services generally deals only with domestic animals. Pro Wildlife Removal handles rats, bats, squirrels and raccoons in homes across The Villages. Call (844) 264-6254.",
  points: ["Call (844) 264-6254", "Lake, Sumter and Marion counties", "Bats at Hilltop, 2025"],
  townsHeading: "The Villages and nearby",
  townsIntro: "The Villages spreads across Lake, Sumter and Marion counties. The Census Bureau's The Villages CDP covers the Sumter and Marion parts; the oldest villages, such as Orange Blossom Gardens and La Zamora, are in Lake County, in and around Lady Lake. We cover every village, and the rest of Sumter County too: Bushnell is the county seat and Wildwood the largest city. The Census Bureau estimates Sumter grew from about 130,000 people in 2020 to about 158,000 in 2025, yet the 2020 Census still counted 89% of its land as rural.",
  towns: [
    {
      title: "Lake, Sumter and Marion counties",
      items: [
        { label: "Marion County", href: "/service-areas/marion-county/" },
        { label: "Lady Lake" },
        { label: "Wildwood" },
        { label: "Bushnell" },
        { label: "Webster" },
        { label: "Sumterville" },
        { label: "Lake Panasoffkee" },
        { label: "Summerfield" },
        { label: "Ocala" },
      ],
    },
  ],
  localHeading: "Rats, bats, raccoons and squirrels in The Villages",
  localIntro: "From villas to golf courses, The Villages has a long local record with the animals we handle. Here is what news reports and the health departments show.",
  local: [
    { icon: "critter", title: "Bats at the Hilltop starter shack", text: p("In 2025, Golf Course Industry reported 100 to 300 bats roosting in the starter's building at Hilltop Executive Golf Course in the Village of Orange Blossom Gardens, on the Historic Side in Lake County. Crews waited until Aug. 15 to put up nets that let the bats out but not back in.") },
    { icon: "home", title: "Bat houses by the woodworkers", text: p("Villages-News reported in October 2025 that The Villages Woodworking Club built bat houses as a new home for the bats, since Florida's strict rules ruled out evicting them from the starter shack by force.") },
    { icon: "search", title: "Rats in a Village of Santiago home", text: p("In May 2016, News 6 reported rats getting into homes in the Village of Santiago. Sumter County said residents with a rat problem should call a commercial company to remove them.") },
    { icon: "wrench", title: "Rats and bats at a Briar Meadow villa", text: p("A Legacy Villas home in the Village of Briar Meadow South, on the Marion side, was overrun with rats, bats and more, neighbors told the District 4 board in September 2016, Villages-News reported. They were urged to take the case to the Marion County Health Department.") },
    { icon: "map-pin", title: "A burned house draws rats", text: p("In July 2025, Lynnhaven residents told their district board that a fire-damaged home in the Village of Lynnhaven was attracting rats and buzzards, and Sumter County had opened a code enforcement case.") },
    { icon: "phone", title: "A rabid raccoon nearby, 2019", text: p("In December 2019, the Marion and Sumter health departments warned residents of the northwest portion of The Villages after a raccoon nearby tested positive for rabies, and told them to avoid raccoons and bats.") },
    { icon: "drop", title: "A staggering raccoon in La Zamora", text: p("Also in 2019, Lady Lake police shot a raccoon suspected of being rabid at a home in the Village of La Zamora, in Lady Lake (Lake County). The officer wrote that it appeared to stagger, then collapsed, as he approached.") },
    { icon: "phone", title: "Rabid cats in Webster and Sumterville", text: p("Elsewhere in Sumter County, the Department of Health issued rabies alerts after a rabid cat in the Webster area in June 2026 and another in the Sumterville area in June 2024. Food left out for outdoor cats feeds raccoons too.") },
    { icon: "leaf", title: "A black fox squirrel", text: p("In May 2025, Villages-News ran a reader's photo of a rare black southern fox squirrel in the Village of Summerhill.") },
  ],
  rats: { heading: theVillagesRatsInput.localHeading, intro: theVillagesRatsInput.localIntro, cards: [...theVillagesRatsInput.local, ...(theVillagesRatsInput.contacts ?? [])] },
  contactsHeading: "Sumter, DOH and FWC contacts for The Villages",
  contactsIntro: "Who handles what in The Villages, from Sumter County's and the health departments' own pages.",
  contacts: [
    { icon: "users", title: "Sumter County Animal Services", text: p("352-689-4400, option 3 for animal control complaints. The county says it generally deals only with domestic animals.") },
    { icon: "phone", title: "Bites: DOH-Sumter", text: p("352-569-3102, the number in DOH-Sumter's June 2026 rabies alert.") },
    { icon: "map-pin", title: "FWC: Northeast Region", text: p("FWC's Northeast Region office in Ocala, 352-732-1225. Nuisance alligators: 866-FWC-GATOR.") },
  ],
  servicesIntro: "Every critter below, possums and armadillos included, is one we remove in The Villages, whichever county your village sits in.",
  servicesHeading: "Animals we remove in The Villages",
  reviewsIntro: "[PLACEHOLDER: reviews from customers in The Villages, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Will Sumter County remove rats or raccoons from my villa?",
      "Usually not. Sumter County says Animal Services generally deals only with domestic animals, and in 2016 it told residents of The Villages with rats to call a commercial company.",
    ),
    faq(
      "Have rabid animals been found elsewhere in Sumter County?",
      `Yes, in cats. DOH issued alerts after a rabid cat near Webster in June 2026 ([DOH](${WEBSTER})) and one near Sumterville in June 2024 ([DOH](${SUMTERVILLE})). Report any animal bite to DOH-Sumter at 352-569-3102, and keep pets' rabies shots current.`,
    ),
    faq(
      "Can bats be removed from a building in The Villages in summer?",
      "Only with an FWC permit. Maternity season runs April 16 to August 14. The Hilltop crew in 2025 put up its nets on Aug. 15, Golf Course Industry reported.",
    ),
    faq(
      "Do you handle possum removal in The Villages?",
      "Yes. Opossums (possums) are on our list in every village. Under FWC's nuisance wildlife rules, a trapped opossum can only be released on the same property, or on at least 40 contiguous acres in the same county with the landowner's written permission. See [opossum removal](/services/opossum-removal/).",
    ),
    faq(
      "Why does my trash have to go out in bags?",
      "In Districts 1 through 11, the district's FAQ says household waste goes out in sealed bags, and garbage cans aren't allowed. Set bags out close to pickup time so they don't sit overnight for rats or raccoons.",
    ),
    faq(
      "Is the black squirrel in my yard a fox squirrel?",
      "It may be. FWC says fox squirrels range from buff to gray and in some cases black, and weigh one to three pounds. A rare black southern fox squirrel was photographed in the Village of Summerhill in 2025, Villages-News reported. FWC's rules say fox squirrels may not be taken or pursued, so leave it be.",
    ),
    faq(
      "How quickly can someone reach a home in The Villages?",
      "Same-day appointments are often available in The Villages. Call (844) 264-6254.",
    ),
  ],
  ctaHeading: "Wildlife problem in The Villages?",
  ctaText: "Villagers can call (844) 264-6254.",
  seo: {
    title: "Wildlife Removal in The Villages, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in The Villages, FL: rats, bats, squirrels and raccoons out of villas and homes, plus local rat, bat and rabies reports and who to call.",
  },
  sources: [
    { title: "Golf Course Industry, Dec. 3, 2025: Bat's-eye view (Kelsie Horner; Hill Top Executive Golf Course, The Villages; removal banned until Aug. 15, when the crew started; 100 to 300 bats in the starter's building; nets put up after Aug. 15 so bats could get out but not back in; six bat houses at Hilltop and Silver Lake)", url: GCI },
    { title: "Villages-News, Oct. 12, 2025: Old-fashioned solution solves bat problem at starter shack in The Villages (Hilltop Starter Shack on the Historic Side; Florida's strict rules on removing bats; Woodworking Club built bat houses)", url: BATS },
    { title: "News 6 (ClickOrlando), May 25, 2016: Squirrel-sized rats invade homes in The Villages (Villages of Santiago, Sumter County; Sumter County said residents should call a commercial company)", url: SANTIAGO },
    { title: "Villages-News, Sept. 10, 2016: Nervous neighbors complain about villa (Legacy Villas, Village of Briar Meadow South; overrun with mold, snakes, rats, bats and bees; take the case to the Marion County Health Department)", url: BRIAR },
    { title: "Villages-News, July 18, 2025: Villagers upset that site of fatal fire attracting rats and buzzards (Village of Lynnhaven; Sumter County code enforcement case)", url: LYNNHAVEN },
    { title: "Villages-News, Dec. 4, 2019: Residents warned after raccoon found near The Villages tests positive for rabies (Marion and Sumter health departments; northwest portion of The Villages; avoid raccoons, bats and other wildlife)", url: RABIES2019 },
    { title: "Villages-News, Oct. 3, 2019: Raccoon suspected of being rabid shot and killed in Village of La Zamora (Lady Lake Police Department report; staggered and collapsed)", url: LAZAMORA },
    { title: "Villages-News, May 8, 2025: Rare black southern fox squirrel in the Village of Summerhill (reader photo)", url: FOXSQ },
    { title: "The Villages District Government: FAQs (Districts 1-11: household waste in sealed bags; no garbage cans or bins)", url: TRASH },
    { title: "Sumter County: Nuisance wildlife (Animal Services generally deals only with domestic animals; referrals to private trappers)", url: "https://www.sumtercountyfl.gov/1180/Nuisance-Wildlife" },
    { title: "Florida DOH: DOH-Sumter rabies alert, June 26, 2026 (rabid cat, Webster area; report bites to 352-569-3102)", url: WEBSTER },
    { title: "Florida DOH: Sumter rabies alert, June 19, 2024 (rabid cat, Sumterville area)", url: SUMTERVILLE },
    { title: "Sumter County: Animal Services contact (352-689-4400, option 3 for animal control complaints)", url: "https://www.sumtercountyfl.gov/1183/Contact-UsHours" },
    { title: "FWC: FAQs, nuisance wildlife (release on same property or 40+ contiguous acres in the same county with written permission)", url: "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/" },
    S.censusPop,
    S.censusUR,
    S.edr,
    S.seats,
    { title: "FWC news release, April 6, 2026 (bat maternity season April 16 to Aug. 14)", url: "https://myfwc.com/news/all-news/bat-maternity-0426/" },
    { title: "FWC: Nongame wildlife regulations (fox squirrels may not be taken or pursued)", url: "https://myfwc.com/hunting/regulations/nongame/" },
    { title: "FWC: Fox squirrel profile (one to three pounds; buff to gray, in some instances black)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/fox-squirrel/" },
    { title: "The Villages: Hill Top Executive golf course (in the Village of Orange Blossom Gardens)", url: "https://www.thevillages.com/golf/hill-top-executive" },
    { title: "GrowthSpotter, Jan. 27, 2016: The Villages returns to its origin, buying mobile home lots in first community (Orange Blossom Gardens in northern Lake County off U.S. 441; parcels being annexed into Lady Lake)", url: "https://www.growthspotter.com/?p=8168" },
    { title: "U.S. Census Bureau: 2020 place codes (The Villages CDP in Marion and Sumter counties)", url: "https://www2.census.gov/geo/docs/reference/codes2020/place/st12_fl_place2020.txt" },
    { title: "FWC: Regional offices (Northeast Region, Ocala, 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
    { title: "FWC: Nuisance alligators (866-FWC-GATOR)", url: "https://myfwc.com/conservation/you-conserve/wildlife/alligators/" },
    ...theVillagesRatsInput.sources,
  ],
  clientQuestions: ["Real job photos and reviews from customers in The Villages."],
});
