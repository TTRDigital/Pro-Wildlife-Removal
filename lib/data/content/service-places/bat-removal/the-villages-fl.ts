import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Bat removal in The Villages (TTR-738, Nia). Every card is one true fact about
 * bats in The Villages or its counties: the 2025 Hilltop starter shack colony
 * (Golf Course Industry, Villages-News; named as news, with years), a 2016
 * Briar Meadow South villa, the 2019 rabies warning, the Sumter and Marion
 * rabies tables, and FWC bat rules.
 */
const GCI = "https://www.golfcourseindustry.com/article/bats-eye-view";
const VN = "https://www.villages-news.com/2025/10/12/old-fashioned-solution-solves-bat-problem-at-starter-shack-in-the-villages/";
const BRIAR = "https://www.villages-news.com/2016/09/10/nervous-neighbors-complain-villa-bats-rats-owner-nevada/";
const SEASON = "https://myfwc.com/news/all-news/bat-maternity-0426/";

export const batRemovalTheVillages = servicePlacePage({
  service: "bat-removal",
  animal: "Bat",
  animals: "Bats",
  place: "the-villages-fl",
  placeName: "The Villages",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-the-villages",
  county: "Sumter",
  order: 90,
  heroText: "Bats under a villa's tile roof, in a lanai's eaves or a garage soffit in The Villages? We look for the openings bats use, fit one-way devices in the legal season and seal up behind them. Call (727) 594-7705.",
  answerHeading: "How are bats removed from a home in The Villages?",
  answer:
    "The way The Villages' own golf crews did it in 2025: one-way exclusion that lets bats leave and keeps them from coming back, done only from August 15 to April 15 under FWC rules. Bats can't legally be killed, poisoned or relocated. Pro Wildlife Removal looks for the gaps, fits the devices and seals up. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Exclusion Aug. 15 to April 15", "Hilltop's bats, 2025"],
  localHeading: "What to know about bats in The Villages",
  localIntro: "The Villages had a well-reported bat colony at a golf course in 2025, and bats have turned up in villas too. Here is what the records show.",
  local: [
    { icon: "critter", title: "Up to 300 bats in a starter's building", text: p("Golf Course Industry reported in December 2025 that somewhere between 100 and 300 bats had made a home in the starter's building at Hilltop Executive Golf Course, a danger to customers and employees.") },
    { icon: "wrench", title: "Nets, then a week's wait", text: p("Once August 15 arrived, the course's director of executive golf maintenance put up nets so the bats could get out but not back in, he told the magazine, then had to leave them undisturbed for seven days at a time until the bats were gone.") },
    { icon: "home", title: "Six bat houses", text: p("An Amenity Authority Committee board member, the maintenance team and The Villages' woodshop workers then built six bat houses in 2025: three at Hilltop and three at Silver Lake Executive Golf Course, as a trial run.") },
    { icon: "leaf", title: "On the Historic Side", text: p("Villages-News placed the Hilltop starter shack on the Historic Side of The Villages in its October 2025 story, and noted that Florida's strict rules ruled out forcibly evicting the bats.") },
    { icon: "search", title: "Bats in a Marion-side villa", text: p("In 2016, neighbors told Villages-News that a Legacy Villas home in the Village of Briar Meadow South was overrun with bats, rats and more, and were urged to take it to the Marion County Health Department.") },
    { icon: "phone", title: "Avoid bats, health officials said", text: p("When a rabid raccoon turned up near the northwest Villages in December 2019, the Marion and Sumter health departments told residents to avoid all contact with wildlife, naming bats along with raccoons.") },
    { icon: "map-pin", title: "Rabid bats on county tables", text: p("Sumter County's 2023 rabies table listed one rabid bat, its only case that year, and Marion County's 2022 table listed a rabid bat as well.") },
  ],
  contactsIntro: "Who handles what when bats are the problem in The Villages, from each agency's own page.",
  contacts: [
    { icon: "phone", title: "Bitten or touched by a bat", text: p("DOH-Sumter, 352-569-3102. On the Marion side, DOH-Marion, 352-629-0137.") },
    { icon: "map-pin", title: "Exclusion questions", text: p("FWC's Northeast Region office in Ocala, 352-732-1225.") },
    { icon: "users", title: "Bats in your villa", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "bats-in-attic", label: "Bats in the attic" },
  extraLink: { label: "Bat removal cost in Florida", href: "/blog/how-much-does-bat-removal-cost-in-florida/", text: "What a bat exclusion job involves and what drives its price." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a bat job in The Villages, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "When can bats be removed from a villa in The Villages?",
      "FWC allows exclusion from August 15 to April 15. Maternity season, April 16 to August 14, needs a permit, which is why the Hilltop crew waited for August 15 in 2025.",
    ),
    faq(
      "Will a bat house get bats out of my roof?",
      "No. FWC says a bat house isn't a substitute for exclusion, because bats rarely leave an occupied building on their own. At Hilltop, the bat houses went up after the colony was netted out.",
    ),
    faq(
      "Have bats in Sumter County had rabies?",
      "One did recently: Sumter's 2023 rabies table listed a single rabid bat. Never touch a bat bare-handed, and report any contact to DOH-Sumter, 352-569-3102.",
    ),
    faq(
      "Can I spray or trap the bats myself?",
      "No. FWC says killing bats is illegal, and poisons, fumigants and relocating bats aren't allowed. Exclusion is the legal way out.",
    ),
    faq(
      "How soon can you come out for bats in The Villages?",
      "Same-day appointments for bats are often available in The Villages. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a bat call in The Villages]",
    ),
  ],
  ctaHeading: "Bats in your home in The Villages?",
  ctaText: "Villagers with bats can call (727) 594-7705.",
  seo: {
    title: "Bat Removal in The Villages, FL | Pro Wildlife Removal",
    description:
      "Bat removal in The Villages, FL: colonies let out through one-way devices in the legal season and gaps sealed, plus the 2025 Hilltop golf course bat story.",
  },
  sources: [
    { title: "Golf Course Industry, Dec. 3, 2025: Bat's-eye view (Hilltop Executive Golf Course; 100 to 300 bats in the starter's building, a danger to customers and employees; nets after Aug. 15 so bats could get out but not back in; seven-day intervals; six bat houses built with The Villages' woodshop, three at Hilltop and three at Silver Lake; a trial run)", url: GCI },
    { title: "Villages-News, Oct. 12, 2025: Old-fashioned solution solves bat problem at starter shack in The Villages (Hilltop Starter Shack on the Historic Side; Florida's strict rules on removing bats; Woodworking Club built a bat house)", url: VN },
    { title: "Villages-News, Sept. 10, 2016: Neighbors complain about villa (Legacy Villas, Village of Briar Meadow South; overrun with mold, snakes, rats, bats and bees; Marion County Health Department)", url: BRIAR },
    { title: "Villages-News, Dec. 4, 2019: Residents warned after raccoon found near The Villages tests positive for rabies (Marion and Sumter health departments; avoid all contact with wildlife, particularly raccoons, bats)", url: "https://www.villages-news.com/2019/12/04/residents-warned-after-raccoon-found-near-the-villages-tests-positive-for-rabies/" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Sumter: 1 bat, total 1)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2023.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Marion: 1 bat, 2 raccoons)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2022.pdf" },
    { title: "FWC news release, April 6, 2026 (maternity season April 16 to Aug. 14; exclusion legal Aug. 15 to April 15)", url: SEASON },
    { title: "FWC: Bats (illegal to kill; bat house not a substitute for exclusion) and Bats in buildings (poison, relocations and fumigants illegal)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/" },
    { title: "FWC: Bats in buildings (poison, relocations and fumigants illegal)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/" },
    { title: "Florida DOH: DOH-Sumter rabies alert, June 26, 2026 (report bites to 352-569-3102)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/06/rabies-alert-sumter-county-6-26-2026.pdf" },
    { title: "DOH-Marion: Rabies advisory, Sept. 18, 2026 (DOH-Marion 352-629-0137)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/09/rabies-advisory-marion-9-18-26.pdf" },
    { title: "FWC: Regional offices (Northeast Region, Ocala, 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Typical response time for a bat call in The Villages?", "A real Google review from a bat job in The Villages (TTR-723), and real bat job photos there."],
});
