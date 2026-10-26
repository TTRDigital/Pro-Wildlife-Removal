import { countyPage, S } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Winter Haven city page, rewritten in place at the old rat page's URL (Ben's list keeps Winter Haven as a Polk city page; Wade moves the URL). Checkable local facts only; no street names. */
const FOX13 = "https://www.fox13news.com/news/winter-haven-woman-mistakes-mouse-bat-polk-county-records-6th-rabies-case";
const INWOOD = "https://polk.floridahealth.gov/2024/07/24/doh-polk-issues-rabies-alert-2/";
const INWOOD_PCSO = "https://crimeview.polksheriff.org/news-investigations/2024/07/23/positive-rabies-case-confirmed-third-this-year";
const BAT2022 = "https://www.polksheriff.org/news-investigations/polk-county-news/2022/03/03/polk-county-has-first-confirmed-case-of-rabies-in-2022";
const BAT2023 = "https://infusion.polksheriff.org/citizen-alerts/main-alerts/rabid-bat-in-winter-haven";
const BAT2020 = "https://infusion.polksheriff.org/news-investigations/2020/04/21/second-case-of-rabies-confirmed-in-polk-county";
const BAT2018 = "https://infusion.polksheriff.org/citizen-alerts/main-alerts/bat-tests-positive-for-rabies";
const BARTOW2026 = "https://blog.polksheriff.org/news-investigations/2026/04/11/polk-county-has-third-confirmed-rabies-case";
const ANIMAL_CONTROL = "https://www.polksheriff.org/animal-services";
const FWC_REGIONS = "https://myfwc.com/contact/fwc-staff/regional-offices/";
const FWC_BATS = "https://myfwc.com/news/all-news/bat-maternity-0426/";
const LAKES = "https://mywinterhaven.com/DocumentCenter/View/2263";
const GARBAGE = "https://mywinterhaven.com/353/Residential-Garbage";
const SOLID_WASTE = "https://mywinterhaven.com/409/Garbage-Recycling";
const CODE = "https://mywinterhaven.com/343/Code-Compliance";
const IN1397 = "https://ask.ifas.ufl.edu/publication/IN1397";

export const winterHaven = countyPage({
  kind: "city",
  path: "about-us/service-area/rat-removal-services-winter-haven-fl",
  name: "Winter Haven",
  county: "Polk",
  order: 43,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN WINTER HAVEN",
  summary: "Wildlife removal in Winter Haven, FL: bats, rats, raccoons, squirrels, opossums, snakes and more, around the Chain of Lakes.",
  heroText: "Polk's Chain of Lakes City, where rabid bats have turned up in yards and dogs' mouths more than once. Call (727) 594-7705.",
  answerHeading: "Who removes wildlife in Winter Haven, FL?",
  answer:
    "A private company. Polk County Animal Control lists bites, dogs, cats, quarantines and adoptions among its duties, not removing nuisance wildlife from homes. For bats, rats, squirrels or raccoons in a Winter Haven attic, wall or garage, Pro Wildlife Removal finds the way in, removes the animals as Florida law allows and closes the gap. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Rabid bat in Eloise, 2026", "City garbage: bagged and tied"],
  townsHeading: "Winter Haven and nearby",
  townsIntro: "Florida's EDR puts Winter Haven at 60,837 people in April 2025, up from 49,219 at the 2020 Census. The city calls itself the Chain of Lakes City for its 18 lakes joined by navigable canals. We cover the city and the rest of Polk County.",
  towns: [
    {
      title: "Polk County",
      href: "/about-us/service-area/wildlife-removal-polk-county/",
      items: [{ label: "Lakeland" }, { label: "Auburndale" }, { label: "Lake Alfred" }, { label: "Eagle Lake" }, { label: "Bartow" }, { label: "Haines City" }],
    },
  ],
  localHeading: "Rabid bats and a rabid cat in Winter Haven",
  localIntro: "Sheriff's and health department releases show bats as Winter Haven's recurring rabies story, year after year.",
  local: [
    { icon: "critter", title: "Eloise, 2026: the \"mouse\" was a bat", text: p("In September 2026, FOX 13 reported that a resident in the Eloise area picked up what seemed to be a mouse in the yard. It was a bat, the state lab confirmed rabies, and it was Polk County's sixth rabies case of the year.") },
    { icon: "search", title: "Dogs with bats, 2022 and 2023", text: p("PCSO reported family dogs in Winter Haven found with live bats in their mouths twice: in the Lake Mirror area in March 2022, and again in March 2023. Both bats tested rabid, and each was Polk's first rabies case of its year.") },
    { icon: "leaf", title: "Rabid bats in 2018 and 2020", text: p("PCSO alerts also list a rabid bat in Winter Haven in July 2018, and an injured bat a resident found in April 2020 that tested rabid. In 2019, by PCSO's count, Polk had 11 rabies cases: five bats and six raccoons.") },
    { icon: "users", title: "Inwood, 2024: a rabid cat", text: p("DOH-Polk issued a 60-day rabies alert in July 2024 after an unvaccinated cat from the Inwood area of Winter Haven tested positive. PCSO said the cat had bitten and scratched its owner.") },
    { icon: "home", title: "Bats inside Polk homes, 2026", text: p("Polk's third rabies case of 2026 was a Brazilian free-tailed bat found inside a Bartow home near the family cat, and PCSO said the first two cases that year were bats too.") },
    { icon: "wrench", title: "Sealing bats out: August to April", text: p("FWC allows exclusion devices only from Aug. 15 to April 15 without a permit, left up at least four nights with lows forecast at 50°F or warmer. A colony found in a Winter Haven roof in June waits until mid-August.") },
  ],
  rats: {
    heading: "Rats and Winter Haven garbage rules",
    intro: "The city's own collection rules bear on what rats find to eat. Here is what they say, and who to call.",
    cards: [
      { icon: "home", title: "Bagged, tied, out by 7 a.m.", text: p(`Winter Haven's residential garbage rules say all garbage must be bagged and securely tied, and carts go to the curb by 7 a.m. on collection day ([City of Winter Haven](${GARBAGE})). Loose food scraps are what draw rats to a cart.`) },
      { icon: "map-pin", title: "Keep carts clear of low branches", text: p(`The same rules keep carts at least 3 feet from low branches and utility poles. UF/IFAS notes that rats use tree limbs as a highway into a house ([UF/IFAS](${IN1397})), so trimming limbs back from the roof helps too.`) },
      { icon: "phone", title: "City carts or county carts?", text: p("Blue and green carts mean the city collects: Solid Waste & Recycling, 863-291-5756. Gray and black carts mean Polk County serves the address: 863-284-4319.") },
      { icon: "building", title: "A neglected lot next door", text: p("Winter Haven's Safe Neighborhoods office handles code compliance: 863-291-5697, or code@mywinterhaven.com.") },
    ],
    link: { label: "rat removal", href: "/services/rat-removal/" },
  },
  contactsHeading: "Polk Animal Control, DOH-Polk and FWC",
  contactsIntro: "Who handles what, from each agency's own page.",
  contacts: [
    { icon: "users", title: "Polk County Animal Control (PCSO)", text: p("863-577-1762. Dogs, cats, bites and quarantines, plus reports of possible rabies exposure.") },
    { icon: "phone", title: "Bites: DOH-Polk", text: p("863-519-8300, the number in DOH-Polk's 2024 Winter Haven rabies alert.") },
    { icon: "map-pin", title: "FWC Southwest Region", text: p("Lakeland office, 863-648-3200; Polk is one of its 12 counties.") },
  ],
  servicesIntro: "Bats lead the local record, but each animal below is a Winter Haven job for us too. Tap one for the signs and the work.",
  faqs: [
    faq(
      "Does Polk County Animal Control remove raccoons or bats from homes?",
      `Its duties page lists bites, dangerous dogs, sick or injured dogs and cats, quarantines and adoptions, and doesn't list removing wildlife from homes ([PCSO](${ANIMAL_CONTROL})). Report a possible rabies exposure to it at 863-577-1762. For a bat colony in the roof, see [bat removal](/services/bat-removal/).`,
    ),
    faq(
      "I found a bat on the ground in my yard. What should I do?",
      `Leave it alone, and keep pets away. The Eloise bat that tested rabid in 2026 was picked up because it looked like a mouse ([FOX 13](${FOX13})). If anyone or any pet touched it, call PCSO Animal Control at 863-577-1762.`,
    ),
    faq(
      "Has rabies been found in Winter Haven?",
      "Yes, mostly in bats. PCSO reported rabid bats in Winter Haven in 2018, 2020, 2022, 2023 and 2026, and DOH-Polk issued an alert in 2024 after a rabid cat in the Inwood area.",
    ),
    faq(
      "Why does Winter Haven want garbage bagged and tied?",
      "It's in the city's collection guidelines. Tied bags inside the cart keep scraps from spilling, which leaves less for rats and raccoons. Our guide to [what keeps rats away](/blog/what-keeps-rats-away/) covers the rest of the yard.",
    ),
    faq(
      "Can someone come out to Winter Haven today?",
      "Same-day appointments are often available in Winter Haven. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time in Winter Haven]",
    ),
  ],
  ctaHeading: "Wildlife in your Winter Haven home?",
  ctaText: "Anywhere around the Chain of Lakes, call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Winter Haven, FL | Pro Wildlife Removal",
    description:
      "Winter Haven wildlife removal: bats, rats, raccoons and squirrels, plus the city's rabid bat cases, garbage rules and who to call. Call (727) 594-7705.",
  },
  sources: [
    { title: "FOX 13, Sept. 16, 2026: Winter Haven woman mistakes bat for mouse as Polk County records 6th rabies case (Eloise area; state lab confirmed rabies; PCSO Animal Control 863-577-1762)", url: FOX13 },
    { title: "DOH-Polk: Rabies alert, July 24, 2024 (unvaccinated cat, Inwood area of Winter Haven; 60 days; DOH-Polk 863-519-8300)", url: INWOOD },
    { title: "PCSO, July 23, 2024: Positive rabies case confirmed, third this year (cat bit and scratched its owner in Winter Haven)", url: INWOOD_PCSO },
    { title: "PCSO, March 3, 2022: Polk County has first confirmed case of rabies in 2022 (family dog with a live bat, Lake Mirror area, Winter Haven)", url: BAT2022 },
    { title: "PCSO citizen alert, March 28, 2023: Rabid bat in Winter Haven (family dog found with a live bat; Polk's first case of 2023)", url: BAT2023 },
    { title: "PCSO, April 21, 2020: Second case of rabies confirmed in Polk County (injured bat found by a Winter Haven resident; 11 cases in 2019: five bats, six raccoons)", url: BAT2020 },
    { title: "PCSO citizen alert, July 27, 2018: Bat tests positive for rabies (Winter Haven)", url: BAT2018 },
    { title: "PCSO, April 11, 2026: Polk County has third confirmed rabies case (Brazilian free-tailed bat inside a Bartow home; first two 2026 cases were bats)", url: BARTOW2026 },
    { title: "Polk County Sheriff's Office: Animal Services (bites, dangerous dogs, sick or injured dogs and cats, quarantine, adoptions; (863) 577-1762)", url: ANIMAL_CONTROL },
    { title: "FWC: Regional offices (Southwest Region, Lakeland, 863-648-3200; 12 counties including Polk)", url: FWC_REGIONS },
    { title: "FWC news release, April 6, 2026: Maternity season starts April 16 for Florida's bats (exclusion Aug. 15 to April 15; at least four nights; lows 50°F or higher)", url: FWC_BATS },
    { title: "City of Winter Haven: Winter Haven In Brief, Annual Lakes Report, July 2025 (Chain of Lakes City; chain of 18 lakes connected by navigable canals)", url: LAKES },
    { title: "City of Winter Haven: Residential garbage (bagged and securely tied; curbside by 7 a.m.; 3 feet from low branches and utility poles)", url: GARBAGE },
    { title: "City of Winter Haven: Solid Waste & Recycling (city blue and green carts, 863-291-5756; gray and black carts served by Polk County, 863-284-4319)", url: SOLID_WASTE },
    { title: "City of Winter Haven: Safe Neighborhoods (Code Compliance) (863-291-5697; code@mywinterhaven.com)", url: CODE },
    { title: "UF/IFAS EDIS IN1397: Landscaping methods to prevent pests from entering your home (rats use limbs as a highway into the house)", url: IN1397 },
    S.edr,
  ],
  clientQuestions: ["Typical response time in Winter Haven?", "Reviews and real job photos from Winter Haven customers."],
});
