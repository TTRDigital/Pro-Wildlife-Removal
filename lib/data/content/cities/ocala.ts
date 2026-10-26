import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Ocala page, new for the rebuild (Nia, Oct 26, 2026; Kia: every Google Ads area gets a page). Checkable local facts only. */
const EDR = "https://www.edr.state.fl.us/Content/population-demographics/data/Estimates2025.pdf";
const ALERT2026 = "https://marion.floridahealth.gov/2026/05/14/doh-marion-issues-rabies-alert-11/";
const ALERT2025 = "https://marion.floridahealth.gov/2025/11/25/doh-marion-issues-rabies-alert-8/";
const ALERT2024 = "https://marion.floridahealth.gov/2024/05/03/doh-marion-issues-rabies-alert/";
const BATHOUSE = "https://www.ocala-news.com/2026/04/28/free-class-on-owls-bats-at-ocala-park-this-week-3/";
const SQUIRREL = "https://www.ocala-news.com/2026/02/10/ocala-chinese-restaurant-fails-inspection-after-live-squirrel-found-in-kitchen/";

export const ocala = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-ocala-fl",
  name: "Ocala",
  county: "Marion",
  order: 40,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN OCALA",
  summary: "Wildlife removal in Ocala, FL: raccoons, rats, squirrels, bats, opossums, snakes, armadillos and more, across the city and southwest Ocala.",
  heroText: "The Marion County city with raccoon rabies alerts in 2024 and 2026 and a public bat house in one of its parks. Call (727) 594-7705.",
  answerHeading: "Who removes wildlife in Ocala, FL?",
  answer:
    "For wildlife living in your home, a private company. DOH-Marion's alerts send Ocala residents to Marion County Animal Services for strays and bites to pets, and to the health department for human bites. Pro Wildlife Removal handles raccoons, rats, squirrels and bats across Ocala. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Raccoon alerts in 2024 and 2026", "About 71,000 residents"],
  townsHeading: "Ocala and nearby",
  townsIntro: "Ocala had an estimated 71,017 residents in 2025, up from 63,591 at the 2020 Census. We also cover the Marion communities around it.",
  towns: [
    {
      title: "Marion County",
      href: "/about-us/service-area/wildlife-removal-marion-county-fl/",
      items: [
        { label: "Silver Springs", href: "/about-us/service-area/wildlife-removal-silver-springs-fl/" },
        { label: "Belleview" },
        { label: "Summerfield" },
        { label: "Dunnellon" },
        { label: "The Villages", href: "/about-us/service-area/wildlife-removal-the-villages/" },
      ],
    },
  ],
  localHeading: "Wildlife records in Ocala",
  localIntro: "Ocala has had several rabies notices in the last three years, and a city park that keeps a bat house. Here is what the records show.",
  local: [
    { icon: "critter", title: "Two rabid raccoons in 2024", text: p("In May 2024, DOH-Marion issued a 60-day rabies alert after two raccoons captured on April 26 in the Rainbow Lakes Estates and southwest Ocala areas tested positive.") },
    { icon: "map-pin", title: "A rabid cat downtown", text: p("A cat captured on November 20, 2025, off SE 3rd Street and Osceola Avenue in downtown Ocala tested positive for rabies. DOH-Marion's 60-day alert ran from Bonnie Heath Boulevard south to SE 19th Street.") },
    { icon: "search", title: "Another raccoon in 2026", text: p("On May 14, 2026, DOH-Marion issued another 60-day alert for Ocala, after a raccoon killed off SE 8th Street on May 11 tested positive. Its boundaries are NE 8th Street, SE 22nd Road, SE 22nd Loop and SW 4th Avenue.") },
    { icon: "home", title: "A bat house in a city park", text: p("Ocala's Programs in the Parks held a free owls and bats session on May 1, 2026, at Heritage Nature Conservancy on NE 3rd Street, Ocala-News reported, with a photo of the park's bat house.") },
    { icon: "wrench", title: "A squirrel in a kitchen", text: p("In February 2026, a southwest Ocala restaurant on State Road 200 was closed for a day after a state inspector found a live squirrel on an air duct above a storage closet and rodent droppings in the kitchen, Ocala-News reported.") },
    { icon: "leaf", title: "Raccoons lead Marion's rabies tables", text: p("The state's tables listed 7 rabid raccoons and 3 cats for Marion County in 2024, and 6 raccoons plus a cat, a coyote and a fox in 2025.") },
  ],
  contactsIntro: "Who handles what in Ocala, from DOH-Marion's alerts and FWC's own pages.",
  contacts: [
    { icon: "users", title: "Marion County Animal Services", text: p("352-671-8727, for strays and bites to pets or livestock, as DOH-Marion's alerts direct.") },
    { icon: "phone", title: "Human bites: DOH-Marion", text: p("352-629-0137, to report a bite or scratch.") },
    { icon: "map-pin", title: "Bears and alligators: FWC", text: p("FWC's Northeast Region office is in Ocala: 352-732-1225. Nuisance alligators: 866-FWC-GATOR.") },
  ],
  servicesIntro: "Every service we offer is available in Ocala. Choose an animal to learn more.",
  servicesHeading: "Animals we remove in Ocala",
  reviewsIntro: "[PLACEHOLDER: reviews from Ocala customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Has rabies been found in Ocala?",
      "Yes. DOH-Marion issued 60-day alerts for two rabid raccoons in southwest Ocala and Rainbow Lakes Estates in 2024, a rabid cat downtown in November 2025, and a rabid raccoon off SE 8th Street in May 2026.",
    ),
    faq(
      "Who do I call about a stray or a pet bitten by wildlife in Ocala?",
      "Marion County Animal Services, 352-671-8727, is the number DOH-Marion gives for strays and for bites to pets or livestock. Report human bites to DOH-Marion at 352-629-0137.",
    ),
    faq(
      "Where can I see bats in Ocala?",
      "Heritage Nature Conservancy on NE 3rd Street has a bat house, and the city held a free owls and bats program there on May 1, 2026, per Ocala-News.",
    ),
    faq(
      "Is FWC's office for Ocala local?",
      "Yes. FWC's Northeast Region office, which covers Marion County, is in Ocala: 352-732-1225. Call it about bears; call 866-FWC-GATOR about a nuisance alligator.",
    ),
    faq(
      "How soon can you get to Ocala?",
      "Same-day appointments are often available in Ocala. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time in Ocala]",
    ),
  ],
  ctaHeading: "Wildlife problem in Ocala?",
  ctaText: "Ocala homeowners can call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Ocala, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Ocala, FL: raccoons, rats, squirrels and bats, plus Ocala's recent rabies alerts and who to call for strays and bites. (727) 594-7705.",
  },
  sources: [
    { title: "Florida EDR: April 1, 2025 population estimates (Ocala 71,017; 2020 Census 63,591)", url: EDR },
    { title: "DOH-Marion: Rabies alert, May 3, 2024 (two raccoons captured April 26, 2024, Rainbow Lakes Estates and southwest Ocala areas; 60 days)", url: ALERT2024 },
    { title: "DOH-Marion: Rabies alert, Nov. 25, 2025 (cat captured Nov. 20, 2025, downtown Ocala off SE 3rd Street and Osceola Ave.; 60 days; Bonnie Heath Blvd., SE 19th St., SE 16th Ave., SW 16th Ave.)", url: ALERT2025 },
    { title: "DOH-Marion: Rabies alert, May 14, 2026 (raccoon killed off SE 8th St., Ocala area, May 11, 2026; 60 days; NE 8th St., SE 22nd Road, SE 22nd Loop, SW 4th Ave.; DOH-Marion 352-629-0137; Animal Services 352-671-8727)", url: ALERT2026 },
    { title: "Ocala-News, April 28, 2026: Free class on owls, bats at Ocala park this week (Programs in the Parks; May 1, 2026; Heritage Nature Conservancy, NE 3rd Street; photo of the bat house)", url: BATHOUSE },
    { title: "Ocala-News, Feb. 10, 2026: Ocala Chinese restaurant fails inspection after live squirrel found in kitchen (southwest Ocala, SW State Road 200; inspection Feb. 4; live squirrel on an air duct above a dry storage closet; seven rodent droppings; closed for a day)", url: SQUIRREL },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Marion: 3 cats, 7 raccoons)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Marion: 1 cat, 1 coyote, 1 fox, 6 raccoons)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
    { title: "FWC: Regional offices (Northeast Region includes Marion; Ocala office 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Typical response time in Ocala?", "Real job photos and reviews from Ocala customers."],
});
