import { countyPage, S } from "./build.ts";
import { faq, p } from "../pt.ts";

/* Marion County page, new for the rebuild (Nia, Oct 26, 2026; Kia: every Google Ads area gets a page). Checkable local facts only. */
const DOH2022 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2022.pdf";
const DOH2023 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2023.pdf";
const OCALA_ALERT = "https://marion.floridahealth.gov/2026/05/14/doh-marion-issues-rabies-alert-11/";
const BELLEVIEW = "https://marion.floridahealth.gov/2026/03/02/doh-marion-issues-rabies-advisory-2/";
const BOBCAT = "https://www.floridahealth.gov/wp-content/uploads/2026/09/rabies-advisory-marion-9-18-26.pdf";
const BEARS = "https://myfwc.com/wildlifehabitats/wildlife/bear/bmu/central/";
const ONF = "https://www.fs.usda.gov/r08/florida/recreation/ocala-national-forest";

export const marion = countyPage({
  path: "about-us/service-area/wildlife-removal-marion-county-fl",
  name: "Marion County",
  county: "Marion",
  order: 8,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  summary: "Wildlife removal in Marion County: Ocala, Belleview, Dunnellon, Silver Springs, Summerfield and the Marion side of The Villages.",
  heroText: "Home to Ocala, Belleview and Dunnellon, and to black bears of the Ocala/St. Johns subpopulation, in a county that keeps growing. Call (727) 594-7705.",
  answerHeading: "Who handles wildlife removal in Marion County?",
  answer:
    "Marion County Animal Services handles pets, strays and animal bites to pets, and the health department handles human bites. Raccoons, rats, bats and squirrels living in a home are a job for a private company. Pro Wildlife Removal works across Marion County, from Ocala and Belleview to Dunnellon. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Six rabid raccoons in 2025", "Central bear range"],
  townsHeading: "Marion towns we cover",
  townsIntro: "Ocala, Belleview and Dunnellon are Marion's cities. We also cover communities like Silver Springs and Summerfield, and the Marion side of The Villages.",
  towns: [
    {
      title: "Marion County",
      href: "/about-us/service-area/wildlife-removal-marion-county-fl/",
      items: [
        { label: "Ocala", href: "/about-us/service-area/wildlife-removal-ocala-fl/" },
        { label: "Belleview" },
        { label: "Dunnellon" },
        { label: "Silver Springs" },
        { label: "Summerfield" },
        { label: "The Villages", href: "/about-us/service-area/wildlife-removal-the-villages/" },
      ],
    },
  ],
  localHeading: "What drives wildlife calls in Marion",
  localIntro: "Marion grew from 375,908 people in the 2020 Census to an estimated 433,765 in 2025. Its rabies records and bear range explain a lot of the wildlife calls here.",
  local: [
    { icon: "critter", title: "Raccoons in Marion's rabies tables", text: p("The state's county tables listed 7 rabid raccoons and 3 rabid cats for Marion in 2024, and 6 raccoons plus a cat, a coyote and a fox in 2025. Marion's tables listed 2 raccoons in 2022 and 4 in 2023.") },
    { icon: "map-pin", title: "A rabid raccoon in Ocala", text: p("In May 2026, DOH-Marion put part of Ocala under a 60-day rabies alert after a raccoon killed off SE 8th Street on May 11 tested positive. The alert area runs between NE 8th Street, SE 22nd Road, SE 22nd Loop and SW 4th Avenue.") },
    { icon: "search", title: "Belleview, February 2026", text: p("DOH-Marion issued a rabies advisory after a raccoon killed off U.S. 441 and SE 132nd Street Road in the Belleview area on February 24, 2026 tested positive.") },
    { icon: "phone", title: "The newest notice", text: p("DOH-Marion's latest advisory, September 18, 2026, followed a rabid bobcat killed off State Road 40 and SW 140th Avenue in the Rainbow Park area. It again told residents not to attract wildlife with outdoor pet food or open garbage cans.") },
    { icon: "leaf", title: "Ocala National Forest bears", text: p("FWC's Central bear management unit includes Marion and holds the Ocala/St. Johns bear subpopulation, named for the Ocala National Forest. FWC says 22% of the unit's bear calls from 2016 to 2025 involved bears in garbage.") },
    { icon: "drop", title: "A forest of lakes", text: p("The U.S. Forest Service says the Ocala National Forest has more than 600 lakes and rivers, with springs such as Juniper, Alexander and Silver Glen.") },
    { icon: "home", title: "Bats in Marion's 2026 cases", text: p("In August 2026, Ocala-News reported that Marion had already passed its annual average for rabies cases, with infections that year in a coyote, a cat, a fox, bats and several raccoons across the Ocala, Huntington and Belleview areas.") },
  ],
  contactsIntro: "Who handles what in Marion County, from DOH-Marion's alerts and FWC's own pages.",
  contacts: [
    { icon: "users", title: "Marion County Animal Services", text: p("352-671-8727, for bites to pets or livestock and stray animals, as DOH-Marion's alerts direct.") },
    { icon: "phone", title: "Human bites: DOH-Marion", text: p("352-629-0137, to report a bite or scratch from a wild or domestic animal.") },
    { icon: "map-pin", title: "Bears and alligators: FWC", text: p("FWC's Northeast Region office in Ocala, 352-732-1225. Nuisance alligators: 866-FWC-GATOR.") },
  ],
  servicesIntro: "All nine services are available across Marion County. Tap an animal for the details.",
  faqs: [
    faq(
      "Is there a rabies alert in Marion County?",
      "Check DOH-Marion before you act. The newest notice we found is a September 18, 2026 advisory after a rabid bobcat in the Rainbow Park area. Ocala had a 60-day raccoon alert in May 2026.",
    ),
    faq(
      "Does Marion County Animal Services remove raccoons from homes?",
      "DOH-Marion's alerts send residents to Animal Services, 352-671-8727, for bites to pets and livestock and for stray animals. A raccoon living in your attic is a job for a private wildlife company.",
    ),
    faq(
      "Are there bears in Marion County?",
      "Yes. FWC's Central bear management unit includes Marion and the Ocala/St. Johns bear subpopulation. FWC handles bear problems; secure garbage and call its Ocala office, 352-732-1225.",
    ),
    faq(
      "Which FWC office covers Marion County?",
      "FWC's Northeast Region office, which is in Ocala: 352-732-1225. For a nuisance alligator, call 866-FWC-GATOR.",
    ),
    faq(
      "How soon can you come out in Marion County?",
      "Same-day appointments are often available in Marion County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time in Marion County]",
    ),
  ],
  ctaHeading: "Wildlife problem in Marion County?",
  ctaText: "Anywhere in Marion County, call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Marion County, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Marion County, FL: Ocala, Belleview, Dunnellon, Silver Springs and Summerfield. Raccoons, rats, bats and squirrels: (727) 594-7705.",
  },
  sources: [
    { title: "Florida EDR: April 1, 2025 population estimates, Table 1 (Marion County 433,765; 2020 Census 375,908)", url: "https://www.edr.state.fl.us/Content/population-demographics/data/Estimates2025.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Marion: 1 bat, 2 raccoons; total 3)", url: DOH2022 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Marion: 4 raccoons, 1 other; total 5)", url: DOH2023 },
    { ...S.doh2024, title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Marion: 3 cats, 7 raccoons; total 10)" },
    { ...S.doh2025, title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Marion: 1 cat, 1 coyote, 1 fox, 6 raccoons; total 9)" },
    { title: "DOH-Marion: Rabies alert, May 14, 2026 (raccoon killed off SE 8th St., Ocala area, May 11, 2026; 60 days; NE 8th St., SE 22nd Road, SE 22nd Loop, SW 4th Ave.; DOH-Marion 352-629-0137; Animal Services 352-671-8727)", url: OCALA_ALERT },
    { title: "DOH-Marion: Rabies advisory, March 2, 2026 (raccoon killed off U.S. Route 441 and SE 132 St. Rd., Belleview area, Feb. 24, 2026)", url: BELLEVIEW },
    { title: "Florida DOH: DOH-Marion rabies advisory, Sept. 18, 2026 (bobcat killed off State Road 40 and SW 140 Ave., Rainbow Park area, Sept. 15, 2026; don't attract wildlife with outdoor pet food or open garbage cans; Animal Services 352-671-8727; DOH-Marion 352-629-0137)", url: BOBCAT },
    { title: "Ocala-News, Aug. 5, 2026: Marion health officials issue rabies warning after another rabid raccoon tests positive (passed annual average; 2026 cases in a coyote, a cat, a fox, bats and multiple raccoons across Ocala, Huntington and Belleview)", url: "https://www.ocala-news.com/2026/08/05/marion-health-officials-issue-rabies-warning-after-another-rabid-raccoon-tests-positive/" },
    { title: "FWC: Central bear management unit (includes Marion; Ocala/St. Johns subpopulation named after the Ocala National Forest; 2016-2025 calls: In Garbage 22%)", url: BEARS },
    { title: "USDA Forest Service: Ocala National Forest (more than 600 lakes and rivers; Juniper Springs, Alexander Springs, Silver Glen Springs)", url: ONF },
    { title: "FWC: Regional offices (Northeast Region includes Marion; Ocala office 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
    { title: "FWC: Nuisance alligators (866-FWC-GATOR)", url: "https://myfwc.com/conservation/you-conserve/wildlife/alligators/" },
  ],
  clientQuestions: ["Typical response time in Marion County?", "Real job photos and reviews from Marion County customers."],
});
