import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * HELD (Ben, Oct 26, 2026: about 5 facts, 2 about the town; unregistered).
 * Raccoon removal in Silver Springs (TTR-738, Nia). Every card is one true fact
 * about raccoons in Silver Springs or Marion County: DOH-Marion's July 2023
 * alert, the 2014 and 2010 park management plans (one PDF), the state's
 * county rabies tables and DOH-Marion's 2026 notices.
 */
const ALERT2023 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/alert-marion-7-14-2023.pdf";
const SSSP = "https://floridadep.gov/sites/default/files/SilverSprings_2014_ApprovedPlan%26Amendment.pdf";
const RELOCATE = "https://myfwc.com/conservation/you-conserve/wildlife/relocate/";

export const raccoonRemovalSilverSprings = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "silver-springs-fl",
  placeName: "Silver Springs",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-silver-springs-fl",
  county: "Marion",
  order: 96,
  heroText: "A raccoon under a Silver Springs house, in the shed or knocking over the trash? We take it out, make sure no young are left behind and close the opening. Call (727) 594-7705.",
  answerHeading: "Who removes raccoons in Silver Springs?",
  answer:
    "A private wildlife company. In Silver Springs, as in the rest of Marion County, DOH-Marion takes human bite reports and Animal Services handles strays and pets, not a raccoon in the attic. Pro Wildlife Removal removes the raccoon, checks for young and closes the opening. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "A 2023 raccoon rabies zone", "Raccoons in the park plans"],
  localHeading: "What to know about raccoons in Silver Springs",
  localIntro: "Silver Springs has had a raccoon rabies zone of its own, and the state park's plans name raccoons as a nuisance risk. Here is what the records say.",
  local: [
    { icon: "critter", title: "A Silver Springs rabies zone, 2023", text: p("DOH-Marion's July 14, 2023 alert, issued after three raccoons tested positive, told people who live or work in Silver Springs north of County Road 314, south of Gores Landing, and between NE 147th Avenue Road and CR 314A that rabies was active near them.") },
    { icon: "map-pin", title: "Two county alerts in late 2025", text: p("Late in 2025, DOH-Marion issued 60-day raccoon alerts for the Meadow Wood Farms area in November and for a zone on Ocala's east side, out to SE 36th Avenue, in December.") },
    { icon: "home", title: "A nuisance risk in the park", text: p("Silver Springs State Park's 2014 management plan lists raccoons first among the native animals from which nuisance cases may arise, along with venomous snakes and alligators.") },
    { icon: "leaf", title: "In the 2010 plan as well", text: p("The 2010 plan for what was then Silver River State Park named raccoons and gray squirrels as nuisance cases that may arise, handled case by case.") },
    { icon: "drop", title: "Marion's raccoon count", text: p("Countywide, the state's rabies tables listed 7 rabid raccoons for Marion in 2024 and 6 in 2025, more than any other animal in either year.") },
    { icon: "search", title: "Raccoon notices in 2026", text: p("In 2026 so far, DOH-Marion has posted raccoon rabies notices for the Belleview area, Huntington, the Ocala area and Reddick.") },
  ],
  contactsIntro: "Who handles what when a raccoon is the problem in Silver Springs, from DOH-Marion's alerts.",
  contacts: [
    { icon: "phone", title: "Bitten or scratched", text: p("Get medical care and report it to DOH-Marion, 352-629-0137.") },
    { icon: "home", title: "A pet bitten by wildlife", text: p("See a vet right away, then call Marion County Animal Services, 352-671-8727.") },
    { icon: "users", title: "A raccoon in your home", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "Where Florida law lets a trapped raccoon go, and where it doesn't." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Silver Springs raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Has rabies been found in Silver Springs raccoons?",
      "Yes. In July 2023, DOH-Marion included a Silver Springs area between County Road 314 and Gores Landing in an alert after three Marion raccoons tested positive. Keep pets vaccinated and stay away from raccoons.",
    ),
    faq(
      "Can I release a trapped raccoon in Silver Springs State Park?",
      "Only with the land manager's written permission. FWC says public lands such as state parks can't be used as release sites without it.",
    ),
    faq(
      "Who do I call if a raccoon bites my dog?",
      "Get the dog to a vet right away, then call Marion County Animal Services at 352-671-8727, as DOH-Marion's alerts direct.",
    ),
    faq(
      "Do raccoons near the springs carry rabies?",
      "Any raccoon can. Raccoons outnumbered every other animal on Marion's rabies tables from 2022 to 2025, so treat every raccoon as a risk and don't hand-feed or corner one.",
    ),
    faq(
      "How soon can you come out for a raccoon in Silver Springs?",
      "Same-day appointments for raccoons are often available in Silver Springs. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Raccoon in your Silver Springs home?",
  ctaText: "Silver Springs raccoon calls go to (727) 594-7705.",
  seo: {
    title: "Raccoon Removal Silver Springs, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in Silver Springs, FL: raccoons out of homes and sheds, young checked first and the opening closed, plus the area's own 2023 rabies zone.",
  },
  sources: [
    { title: "Florida DOH: DOH-Marion rabies alert, July 14, 2023 (three raccoons; Silver Springs, north of CR 314, south of Gores Landing, east of NE 147th Avenue Road, west of CR 314A; also Fellowship and Blitchton areas; DOH-Marion 352-629-0137; Animal Services 352-671-8727)", url: ALERT2023 },
    { title: "Florida DEP: Silver Springs State Park Unit Management Plan Amendment, Dec. 17, 2014, bundled with the 2010 Silver River State Park Unit Management Plan (2014: nuisance cases may arise from raccoons, venomous snakes and alligators; 2010: raccoons, gray squirrels, venomous snakes and alligators, dealt with case by case)", url: SSSP },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Marion: 7 raccoons, 3 cats)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Marion: 6 raccoons, 1 cat, 1 coyote, 1 fox)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
    { title: "DOH-Marion: Rabies alert, Nov. 20, 2025 (raccoon, Meadow Wood Farms area; 60 days)", url: "https://marion.floridahealth.gov/2025/11/20/doh-marion-issues-rabies-alert-7/" },
    { title: "DOH-Marion: Rabies alert, Dec. 9, 2025 (raccoon killed Dec. 7, 2025; 60 days; NE 2nd St., SE 31st St., SE 36th Ave., SE 9th Ave.)", url: "https://marion.floridahealth.gov/2025/12/09/doh-marion-issues-rabies-alert-10/" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 and 2023 (Marion: 2 raccoons and 1 bat; 4 raccoons and 1 other)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2023.pdf" },
    { title: "DOH-Marion: Rabies advisory, March 2, 2026 (raccoon, Belleview area)", url: "https://marion.floridahealth.gov/2026/03/02/doh-marion-issues-rabies-advisory-2/" },
    { title: "Florida DOH: DOH-Marion rabies advisory, March 25, 2026 (raccoon, Huntington area)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/04/rabies-advisory-marion-3-25-2026.pdf" },
    { title: "DOH-Marion: Rabies alert, May 14, 2026 (raccoon, Ocala area)", url: "https://marion.floridahealth.gov/2026/05/14/doh-marion-issues-rabies-alert-11/" },
    { title: "DOH-Marion: Rabies advisory, July 31, 2026 (raccoon, Reddick)", url: "https://marion.floridahealth.gov/2026/07/31/doh-marion-issues-rabies-advisory-3/" },
    { title: "FWC: Relocating nuisance wildlife (publicly owned lands such as county, state or federal parks need the land manager's written permission)", url: RELOCATE },
  ],
  clientQuestions: ["A real Google review from a Silver Springs raccoon job (TTR-723), and real Silver Springs raccoon job photos."],
});
