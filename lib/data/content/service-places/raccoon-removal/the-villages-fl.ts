import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * HELD (Ben, Oct 26, 2026: 5 facts; unregistered until a 6th Villages item turns up).
 * Raccoon removal in The Villages (TTR-738, Nia). Every card is one true fact
 * about raccoons in The Villages or its three counties: the 2019 rabies warning
 * and La Zamora report, a 2025 Fenney Nature Trail photo (news, dated), Sumter
 * County's nuisance wildlife page and the state's county rabies tables.
 */
const WARNING = "https://www.villages-news.com/2019/12/04/residents-warned-after-raccoon-found-near-the-villages-tests-positive-for-rabies/";
const LAZAMORA = "https://www.villages-news.com/2019/10/03/raccoon-suspected-of-being-rabid-shot-and-killed-in-village-of-la-zamora/";
const FENNEY = "https://www.villages-news.com/2025/06/05/raccoon-enjoying-a-beautiful-day-at-fenney-nature-trail/";
const SUMTER = "https://www.sumtercountyfl.gov/1180/Nuisance-Wildlife";
const RELOCATE = "https://myfwc.com/conservation/you-conserve/wildlife/relocate/";
const TRASH = "https://www.districtgov.org/how-to/faqs/";

export const raccoonRemovalTheVillages = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "the-villages-fl",
  placeName: "The Villages",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-the-villages",
  county: "Sumter",
  order: 94,
  heroText: "A raccoon in the garage, under the lanai or tearing into trash bags in The Villages? We get it out, check for young before anything is closed and seal the way in. Call (727) 594-7705.",
  answerHeading: "Who removes raccoons in The Villages?",
  answer:
    "A private trapper. Sumter County lists raccoons as nuisance wildlife, says its Animal Services generally deals only with domestic animals, and refers residents to private trappers. Pro Wildlife Removal gets raccoons out of homes in The Villages, checks for young and seals the opening. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "A 2019 rabies warning", "Lake, Sumter and Marion"],
  localHeading: "What to know about raccoons in The Villages",
  localIntro: "Raccoons in The Villages have made the news for rabies scares and nature-trail photos alike. Here is what the reports and the county records show.",
  local: [
    { icon: "phone", title: "The northwest Villages, 2019", text: p("A raccoon tested positive for rabies near The Villages in December 2019, and the Marion and Sumter health departments put out a warning that covered the northwest portion of The Villages along with Summerfield and Oxford, Villages-News reported.") },
    { icon: "critter", title: "A suspected case in La Zamora, 2019", text: p("In October 2019, an animal control officer told Lady Lake police that a staggering raccoon at a La Zamora home \"could likely be the onset of rabies,\" and the officer put it down, according to the police report Villages-News quoted.") },
    { icon: "leaf", title: "On the Fenney Nature Trail", text: p("Villages-News ran a reader's photo in June 2025 of a raccoon at the Fenney Nature Trail in The Villages.") },
    { icon: "search", title: "Raccoons on Sumter's nuisance list", text: p("Sumter County's nuisance wildlife page names raccoons among the animals that can be a nuisance to residents, and says referrals to private trappers are provided in most situations.") },
    { icon: "drop", title: "A raccoon scratch counts", text: p("Sumter County lists a bite or scratch from a raccoon as an exposure to report right away to the Sumter County Health Department, at 352-569-3131.") },
    { icon: "map-pin", title: "Three counties' rabies tables", text: p("The state's tables listed no rabid raccoons in Sumter County from 2022 through 2025 and one in Lake County in 2023. Marion, which holds the Villages' northern edge, had 7 in 2024 and 6 in 2025.") },
  ],
  contactsIntro: "Who handles what when a raccoon is the problem in The Villages, from Sumter County's own page.",
  contacts: [
    { icon: "phone", title: "Bitten or scratched", text: p("Sumter County Health Department, 352-569-3131.") },
    { icon: "map-pin", title: "Wildlife questions", text: p("FWC's office in Ocala, 352-732-1225, the number Sumter County gives.") },
    { icon: "users", title: "A raccoon in your home", text: p("A private trapper. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "What Florida law allows once a raccoon is in a trap, and where it can go." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a raccoon job in The Villages, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Will Sumter County Animal Services take a raccoon away?",
      "Generally not. Sumter County says Animal Services generally deals only with domestic animals and refers residents to private trappers, though it gives field support when the health department sees a public health risk.",
    ),
    faq(
      "How do I keep raccoons out of my trash in The Villages?",
      "In Districts 1 through 11, household waste goes out in sealed bags, with no garbage cans allowed. Put bags out close to pickup time rather than the night before.",
    ),
    faq(
      "Can a trapped raccoon be released on the golf course or a nature trail?",
      "No, not without written permission. FWC says a nuisance raccoon must go back on your own property or on 40 or more contiguous acres in the same county with the landowner's written permission, and public land needs the land manager's.",
    ),
    faq(
      "What counts as a raccoon exposure?",
      "Sumter County lists a bite or scratch from a raccoon as an exposure. Wash it, get medical care and report it to the Sumter County Health Department at 352-569-3131.",
    ),
    faq(
      "How soon can you come out for a raccoon in The Villages?",
      "Same-day appointments for raccoons are often available in The Villages. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a raccoon call in The Villages]",
    ),
  ],
  ctaHeading: "Raccoon at your home in The Villages?",
  ctaText: "Villagers with a raccoon problem can call (727) 594-7705.",
  seo: {
    title: "Raccoon Removal in The Villages, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in The Villages, FL: raccoons out of garages, lanais and attics, young checked first, openings sealed, plus the 2019 rabies reports.",
  },
  sources: [
    { title: "Villages-News, Dec. 4, 2019: Residents warned after raccoon found near The Villages tests positive for rabies (Marion and Sumter health departments; Summerfield/Oxford area and northwest portion of The Villages)", url: WARNING },
    { title: "Villages-News, Oct. 3, 2019: Raccoon suspected of being rabid shot and killed in Village of La Zamora (Lady Lake Police Department report; animal control officer said the behavior \"could likely be the onset of rabies\")", url: LAZAMORA },
    { title: "Villages-News, June 5, 2025: Raccoon enjoying a beautiful day at Fenney Nature Trail (reader photo)", url: FENNEY },
    { title: "Sumter County: Nuisance wildlife (raccoons among examples; Animal Services generally deals only with domestic animals; field support at the health department's request; referrals to private trappers in most situations; FWC Ocala 352-732-1225; raccoon bite or scratch is an exposure; report to the Sumter County Health Department, 352-569-3131)", url: SUMTER },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Sumter: none listed)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2022.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Sumter: 1 bat; Lake: 1 fox, 1 raccoon)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2023.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Sumter: 1 cat; Marion: 7 raccoons)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Sumter: none listed; Marion: 6 raccoons)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
    { title: "U.S. Census Bureau: 2020 place codes (The Villages CDP in Marion and Sumter counties)", url: "https://www2.census.gov/geo/docs/reference/codes2020/place/st12_fl_place2020.txt" },
    { title: "The Villages District Government: FAQs (Districts 1-11: household waste in sealed bags; no garbage cans or bins)", url: TRASH },
    { title: "FWC: Relocating nuisance wildlife (own property or 40+ contiguous acres in the county with written permission; public land needs the land manager's written permission)", url: RELOCATE },
  ],
  clientQuestions: ["Typical response time for a raccoon call in The Villages?", "A real Google review from a raccoon job in The Villages (TTR-723), and real raccoon job photos there."],
});
