import { countyPage, S } from "./build.ts";
import { faq, p } from "../pt.ts";

/* Marion County page, new for the rebuild (Nia, Oct 26, 2026; Kia: every Google Ads area gets a page). Checkable local facts only. */
const DOH2022 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2022.pdf";
const DOH2023 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2023.pdf";
const OCALA_ALERT = "https://marion.floridahealth.gov/2026/05/14/doh-marion-issues-rabies-alert-11/";
const BELLEVIEW = "https://marion.floridahealth.gov/2026/03/02/doh-marion-issues-rabies-advisory-2/";
const SUMMERFIELD = "https://www.villages-news.com/2019/12/04/residents-warned-after-raccoon-found-near-the-villages-tests-positive-for-rabies/";
const RSAP = "https://floridadep.gov/sites/default/files/Rainbow-Springs-AP-Management-Plan.pdf";

export const marion = countyPage({
  path: "about-us/service-area/wildlife-removal-marion-county-fl",
  name: "Marion County",
  county: "Marion",
  order: 8,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  summary: "Wildlife removal in Marion County: Ocala, Belleview, Dunnellon, Silver Springs, Summerfield and the Marion side of The Villages.",
  heroText: "Ocala, Belleview, Dunnellon and the country around them, where DOH-Marion has issued raccoon rabies notices from Reddick to Belleview in 2026. Call (727) 594-7705.",
  answerHeading: "Who handles wildlife removal in Marion County?",
  answer:
    "Marion County Animal Services handles pets, strays and animal bites to pets, and the health department handles human bites. Raccoons, rats, bats and squirrels living in a home are a job for a private company. Pro Wildlife Removal works across Marion County, from Ocala and Belleview to Dunnellon. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Six rabid raccoons in 2025", "Four 2026 raccoon notices"],
  townsHeading: "Marion towns we cover",
  townsIntro: "Florida's population tables list Belleview, Dunnellon, McIntosh, Ocala and Reddick as Marion's municipalities. We also cover communities like Silver Springs and Summerfield, and the Marion side of The Villages.",
  towns: [
    {
      title: "Marion County",
      href: "/service-areas/marion-county/",
      items: [
        { label: "Ocala", href: "/service-areas/marion-county/ocala/" },
        { label: "Belleview" },
        { label: "Dunnellon" },
        { label: "Silver Springs", href: "/service-areas/marion-county/silver-springs/" },
        { label: "Summerfield" },
        { label: "The Villages", href: "/service-areas/the-villages/" },
      ],
    },
  ],
  localHeading: "What drives wildlife calls in Marion",
  localIntro: "Marion grew from 375,908 people in the 2020 Census to an estimated 433,765 in 2025. Its rabies records, mostly raccoons, show why wildlife calls here deserve care.",
  local: [
    { icon: "critter", title: "Raccoons in Marion's rabies tables", text: p("The state's county tables listed 7 rabid raccoons and 3 rabid cats for Marion in 2024, and 6 raccoons plus a cat, a coyote and a fox in 2025. Marion's tables listed 2 raccoons in 2022 and 4 in 2023.") },
    { icon: "map-pin", title: "A rabid raccoon in Ocala", text: p("In May 2026, DOH-Marion put part of Ocala under a 60-day rabies alert after a raccoon killed off SE 8th Street on May 11 tested positive. The alert area runs between NE 8th Street, SE 22nd Road, SE 22nd Loop and SW 4th Avenue.") },
    { icon: "search", title: "Belleview, February 2026", text: p("DOH-Marion issued a rabies advisory after a raccoon killed off U.S. 441 and SE 132nd Street Road in the Belleview area on February 24, 2026 tested positive.") },
    { icon: "home", title: "A rabid bat in 2022", text: p("Marion's 2022 rabies table listed a rabid bat, alongside 2 raccoons.") },
    { icon: "phone", title: "Reddick, July 2026", text: p("DOH-Marion issued a rabies advisory on July 31, 2026 after a raccoon killed off U.S. Route 441 and West Highway 316 in Reddick on July 26 tested positive.") },
    { icon: "leaf", title: "Huntington, March 2026", text: p("DOH-Marion issued a rabies advisory in late March 2026 after a raccoon tested positive in the Huntington area off State Highway 35. It was the county's second confirmed rabies case of the year.") },
  ],
  communities: [
    {
      name: "Belleview",
      text: [
        "The raccoon behind DOH-Marion's March 2, 2026 advisory was a single confirmed case, killed in the southeast of the county off U.S. 441 and SE 132nd Street Road near Belleview.",
        "In it, the department warned that rabies may be present in the area's wild animals, and asked people not to draw them in with outdoor pet food or open garbage cans. It also asked homeowners to keep bats out of living quarters.",
      ],
    },
    {
      name: "Summerfield",
      text: [
        "In December 2019, the Marion and Sumter health departments warned residents of the Summerfield and Oxford area after a raccoon found near The Villages tested positive for rabies, Villages-News reported.",
        "The zone they named ran from SE Highway 42 south to Sumter County Road 202, between Sumter County Road 200 and SE 76th Champion Avenue.",
      ],
    },
    {
      name: "Dunnellon",
      text: [
        "Part of Dunnellon lies inside the Rainbow Springs Aquatic Preserve, which follows the Rainbow River 5.7 miles to the Withlacoochee.",
        "Raccoons, gray squirrels and Sherman's fox squirrels are among the species documented in the state's 2016 plan for the preserve. FWC rules say fox squirrels may not be taken or pursued.",
      ],
    },
  ],
  contactsHeading: "Marion's county shelter, DOH-Marion and FWC's Ocala office",
  contactsIntro: "Strays and bites to pets or livestock go to the county, human bites to DOH-Marion, and wildlife questions to FWC's Ocala office.",
  contacts: [
    { icon: "users", title: "Marion County Animal Services", text: p("352-671-8727, for bites to pets or livestock and stray animals, as DOH-Marion's alerts direct.") },
    { icon: "phone", title: "Human bites: DOH-Marion", text: p("352-629-0137, to report a bite or scratch from a wild or domestic animal.") },
    { icon: "map-pin", title: "FWC: Northeast Region", text: p("FWC's Northeast Region office in Ocala, 352-732-1225. Nuisance alligators: 866-FWC-GATOR.") },
  ],
  servicesIntro: "All nine services are available across Marion County. Tap an animal for the details.",
  faqs: [
    faq(
      "Has DOH-Marion issued a rabies alert lately?",
      "Check DOH-Marion before you act. The newest notice we found is a September 18, 2026 advisory after a rabid bobcat in the Rainbow Park area. Ocala had a 60-day raccoon alert in May 2026.",
    ),
    faq(
      "Does Marion County Animal Services remove raccoons from homes?",
      "DOH-Marion's alerts send residents to Animal Services, 352-671-8727, for bites to pets and livestock and for stray animals. A raccoon living in your attic is a job for a private wildlife company.",
    ),
    faq(
      "Which FWC office covers Marion County?",
      "FWC's Northeast Region office, which is in Ocala: 352-732-1225. For a nuisance alligator, call 866-FWC-GATOR.",
    ),
    faq(
      "How fast can you reach a home in Marion County?",
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
    { title: "Florida EDR: April 1, 2025 population estimates, Table 1 (Marion County 433,765; 2020 Census 375,908; municipalities Belleview, Dunnellon, McIntosh, Ocala, Reddick)", url: "https://www.edr.state.fl.us/Content/population-demographics/data/Estimates2025.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Marion: 1 bat, 2 raccoons; total 3)", url: DOH2022 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Marion: 4 raccoons, 1 other; total 5)", url: DOH2023 },
    { ...S.doh2024, title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Marion: 3 cats, 7 raccoons; total 10)" },
    { ...S.doh2025, title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Marion: 1 cat, 1 coyote, 1 fox, 6 raccoons; total 9)" },
    { title: "DOH-Marion: Rabies alert, May 14, 2026 (raccoon killed off SE 8th St., Ocala area, May 11, 2026; 60 days; NE 8th St., SE 22nd Road, SE 22nd Loop, SW 4th Ave.; DOH-Marion 352-629-0137; Animal Services 352-671-8727)", url: OCALA_ALERT },
    { title: "DOH-Marion: Rabies advisory, March 2, 2026 (single confirmed case; raccoon killed off U.S. Route 441 and SE 132 St. Rd., Belleview area, southeast Marion, Feb. 24, 2026; rabies may be present; outdoor pet food, open garbage cans; keep bats out of living quarters)", url: BELLEVIEW },
    { title: "Villages-News, Dec. 4, 2019: Residents warned after raccoon found near The Villages tests positive for rabies (Marion and Sumter health departments; Summerfield/Oxford area and northwest Villages; zone from SE Highway 42 to Sumter County Road 202, between County Road 200 and SE 76th Champion Avenue)", url: SUMMERFIELD },
    { title: "Florida DEP: Rainbow Springs Aquatic Preserve Management Plan, June 2016 (encompasses a portion of the city of Dunnellon; 5.7 miles of Rainbow River to the Withlacoochee; documented species include raccoon, grey squirrel, Sherman's fox squirrel)", url: RSAP },
    { title: "FWC: Nongame wildlife regulations (fox squirrels may not be taken or pursued)", url: "https://myfwc.com/hunting/regulations/nongame/" },
    { title: "DOH-Marion: Rabies advisory, July 31, 2026 (raccoon killed off U.S. Route 441 and West Highway 316 in Reddick on July 26)", url: "https://marion.floridahealth.gov/2026/07/31/doh-marion-issues-rabies-advisory-3/" },
    { title: "Florida DOH: DOH-Marion rabies advisory, March 25, 2026 (second confirmed case of 2026; raccoon died in the Huntington area off State Highway 35 on March 20, 2026)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/04/rabies-advisory-marion-3-25-2026.pdf" },
    { title: "Florida DOH: DOH-Marion rabies advisory, Sept. 18, 2026 (newest Marion notice: bobcat, Rainbow Park area, Sept. 15, 2026)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/09/rabies-advisory-marion-9-18-26.pdf" },
    { title: "FWC: Regional offices (Northeast Region includes Marion; Ocala office 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
    { title: "FWC: Nuisance alligators (866-FWC-GATOR)", url: "https://myfwc.com/conservation/you-conserve/wildlife/alligators/" },
  ],
  clientQuestions: ["Typical response time in Marion County?", "Real job photos and reviews from Marion County customers."],
});
