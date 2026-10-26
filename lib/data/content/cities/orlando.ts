import { countyPage, S } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Orlando page, rewritten in place at its existing URL (Ben, Oct 26). Its searches name squirrels, snakes and raccoons, so each gets an Orlando fact or rule. Checkable local facts only; no residential street names. */
const OCAS_FAQ = "https://www.orangecountyanimalservicesfl.net/AboutUs/FAQ.aspx";
const OCAS_CONTACT = "https://www.ocnetpets.com/AboutUs/ContactUs.aspx";
const CODES = "https://orlando.gov/Our-Government/Departments-Offices/Economic-Development/Code-Enforcement/Citizens-Guide-to-City-of-Orlando-Codes";
const CARTS = "https://orlando.gov/yardwaste";
const EAST_ORANGE = "https://mynews13.com/fl/orlando/news/2023/10/24/health-department-issues-rabies-alert-in-east-orange-county";
const BELLE_ISLE = "https://www.floridahealth.gov/wp-content/uploads/2025/07/alert-orange-10-5-2023.pdf";
const OUC = "https://nextdoor.com/agency-detail/fl/orlando/orlando-utilities-commission-2/";
const SNAKEBITE = "https://www.clickorlando.com/news/local/2020/05/05/boy-bitten-by-venomous-snake-in-orange-county/";
const DBPR_2025 = "https://www2.myfloridalicense.com/hr/inspections/documents/2025-EOS.zip";
const DBPR_2026 = "https://www2.myfloridalicense.com/hotels-restaurants/public-records/";
const FWC_REGIONS = "https://myfwc.com/contact/fwc-staff/regional-offices/";
const FWC_BATS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";
const FWC_SQUIRRELS = "https://myfwc.com/media/tydhegay/livingwithsquirrels.pdf";
const DOH_RABIES = "https://www.floridahealth.gov/diseases-and-conditions/disease/rabies/";
const DOH_ORANGE = "https://orange.floridahealth.gov/programs-and-services/environmental-public-health/rabies-surveillance/";

export const orlando = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-orlando-fl",
  name: "Orlando",
  county: "Orange",
  order: 20,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "ORLANDO WILDLIFE REMOVAL",
  summary: "Orlando wildlife removal: raccoons, squirrels, snakes, rats, bats, opossums and armadillos out of Orlando homes and businesses.",
  heroText: "Rabid raccoons in east Orange, a snake that knocked out power in Baldwin Park, squirrels in the attic: Orlando keeps us busy. Call (727) 594-7705.",
  answerHeading: "Who handles animal removal in Orlando, FL?",
  answer:
    "A private company. Orange County Animal Services covers Orlando, and its FAQ says it doesn't trap nuisance wildlife such as raccoons and opossums. For raccoons, squirrels, snakes or rats in an Orlando home, Pro Wildlife Removal finds how they get in, removes them as Florida law allows and seals the entry points. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "County doesn't trap nuisance wildlife", "Rabies alerts in 2023"],
  townsHeading: "Orlando and nearby",
  townsIntro: "Florida's EDR puts Orlando at 340,681 people in April 2025, in an Orange County of about 1.54 million. We take calls in the city and the county around it.",
  towns: [
    {
      title: "Orange County",
      items: [{ label: "Orlando" }, { label: "Baldwin Park" }, { label: "Belle Isle" }, { label: "Hunters Creek" }],
    },
  ],
  localHeading: "Raccoons, snakes and squirrels in Orlando",
  localIntro: "Health department alerts, a utility's own notice and the county's rules show what these animals do here.",
  local: [
    { icon: "critter", title: "Three rabid raccoons in east Orange", text: p("DOH-Orange issued a 60-day rabies alert in October 2023 after three raccoons tested positive in three months in east Orange County, north of Colonial Drive and south of University Boulevard. One exposed a dog, which died, Spectrum News 13 reported.") },
    { icon: "home", title: "Belle Isle and Conway, 2023", text: p("Weeks earlier, a rabid dog led to an alert for the Belle Isle and Conway area. DOH-Orange told residents to keep outside garbage in covered containers so it doesn't draw wild animals.") },
    { icon: "wrench", title: "A snake on an underground cable", text: p("OUC said in July 2025 that one of four power interruptions in Baldwin Park that summer was caused by a snake touching an underground cable. It began fitting the neighborhood's switchgear with mesh to keep wildlife out.") },
    { icon: "search", title: "A venomous bite in Hunters Creek", text: p("In May 2020, Orange County Fire Rescue took a boy bitten by a venomous snake in the Hunters Creek area to a children's hospital, WKMG reported. A snake inside the house is a call to make right away.") },
    { icon: "leaf", title: "Squirrels: gray, yes; fox, no", text: p("FWC's squirrel guide says eastern gray squirrels can be taken as nuisance wildlife when they damage a building, but fox squirrels can't. Squirrel removal in an Orlando attic starts with knowing which one it is.") },
  ],
  rats: {
    heading: "Rats in Orlando",
    intro: "State restaurant inspections and the city's cart rules show where rats find food here.",
    cards: [
      { icon: "building", title: "Rodent closures, 2025 and 2026", text: p("By our count of DBPR's emergency closure files, state inspectors closed restaurants with Orlando addresses 23 times in 2025 for conditions naming rodents, and 25 times from January through Oct. 23, 2026. The Orlando mailing city includes unincorporated addresses.") },
      { icon: "home", title: "Out at 5 p.m., in by morning", text: p("City carts can go to the curb from 5 p.m. the night before pickup to 6 a.m. on pickup day, within 2 feet of the curb, and shouldn't be overloaded or have items on top. Solid Waste: 407-246-2314.") },
      { icon: "map-pin", title: "Overgrowth and garbage", text: p("The city's code guide prohibits excessive overgrowth, weeds, garbage and unsanitary materials, and gives owners 15 days to fix it. Code Enforcement: 407-246-2686.") },
    ],
    link: { label: "rat removal", href: "/services/rat-removal/" },
  },
  contactsHeading: "Orange County Animal Services, DOH and FWC",
  contactsIntro: "The City of Orlando has no animal control of its own; these are the numbers Orlando residents use, from each agency's page.",
  contacts: [
    { icon: "users", title: "Orange County Animal Services", text: p("3-1-1 or 407-836-3111. It helps injured wildlife but doesn't trap nuisance wildlife, and suggests a private trapper.") },
    { icon: "phone", title: "Rabies: DOH-Orange", text: p("407-858-1497, the department's rabies line.") },
    { icon: "map-pin", title: "State wildlife matters: FWC", text: p("Orange County is in FWC's Northeast Region: 352-732-1225 in Ocala.") },
  ],
  servicesIntro: "Raccoon removal, squirrel removal, snake removal and every other job below are available in Orlando. Pick one for the signs and how the work goes.",
  servicesHeading: "Animal removal in Orlando",
  reviewsIntro: "[PLACEHOLDER: reviews from Orlando customers, matched from the client's Google reviews (TTR-723)]",
  faqHeading: "Orlando wildlife questions",
  faqs: [
    faq(
      "Will Orange County Animal Services remove a raccoon from my Orlando home?",
      `No. Its FAQ says it doesn't trap nuisance wildlife such as opossums and raccoons, will help an injured animal, and suggests a private trapper ([Orange County](${OCAS_FAQ})). See [raccoon removal](/services/raccoon-removal/).`,
    ),
    faq(
      "Has rabies been found in Orange County?",
      `Yes. DOH-Orange issued two alerts in October 2023, one after three rabid raccoons in east Orange ([Spectrum News 13](${EAST_ORANGE})). The state's tables list 4 rabid bats and 3 raccoons in Orange in 2024, and 8 bats and 2 raccoons in 2025.`,
    ),
    faq(
      "Can I trap the squirrel in my attic?",
      `Only a gray squirrel. FWC says eastern gray squirrels may be taken as nuisance wildlife when they damage a building, but fox squirrels may not ([FWC](${FWC_SQUIRRELS})). See [squirrels in the attic](/services/squirrels-in-attic/).`,
    ),
    faq(
      "When can bats be removed from an Orlando building?",
      `From August 15 to April 15. FWC makes exclusion illegal during bat maternity season, April 16 to August 14 ([FWC](${FWC_BATS})).`,
    ),
    faq(
      "What should I do if a bat or raccoon bites someone?",
      `Florida DOH says to scrub the wound with soap and running water for five to ten minutes, see a health care provider, and call the county health department or animal control ([Florida DOH](${DOH_RABIES})).`,
    ),
    faq(
      "How soon can someone reach an Orlando home?",
      "Same-day appointments are often available in Orlando. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Wildlife in your Orlando home?",
  ctaText: "Raccoons, squirrels or snakes anywhere in Orlando: call (727) 594-7705.",
  seo: {
    title: "Orlando Wildlife Removal | Pro Wildlife Removal",
    description:
      "Orlando wildlife removal: raccoons, squirrels, snakes and rats, plus Orange County rabies alerts, Animal Services limits and city rules. (727) 594-7705.",
  },
  sources: [
    { title: "Orange County Animal Services: FAQ (does not trap nuisance wildlife, e.g. opossums and raccoons; helps injured wildlife; consult a private trapper; report injured animals to 3-1-1)", url: OCAS_FAQ },
    { title: "Orange County Animal Services: Contact (3-1-1 or 407-836-3111)", url: OCAS_CONTACT },
    { title: "City of Orlando: Citizen's guide to city codes (Orange County Animal Control regulates animal issues in the city; excessive overgrowth, weeds, garbage and unsanitary materials prohibited; 15 days to comply; Code Enforcement 407-246-2686)", url: CODES },
    { title: "City of Orlando: Solid Waste (carts out 5 p.m. the night before to 6 a.m. pickup day; within 2 feet of the curb; don't overload or put items on top; 407-246-2314)", url: CARTS },
    { title: "Spectrum News 13, Oct. 24, 2023: Health department issues rabies alert in east Orange County (three rabid raccoons in three months; a dog exposed and died; north of SR 50, south of University Blvd)", url: EAST_ORANGE },
    { title: "DOH-Orange: Rabies alert, Belle Isle/Conway area, Oct. 5, 2023 (rabid dog; secure outside garbage in covered containers)", url: BELLE_ISLE },
    { title: "Orlando Utilities Commission, Nextdoor agency post, July 18, 2025 (Baldwin Park interruptions; one caused by a snake contacting an underground cable; mesh netting on switchgear from July 17)", url: OUC },
    { title: "WKMG ClickOrlando, May 5, 2020: Boy bitten by venomous snake in Orange County (Hunters Creek area)", url: SNAKEBITE },
    { title: "FWC: Living with squirrels (eastern gray squirrels may be taken as nuisance wildlife under 68A-9.010; fox squirrels excluded)", url: FWC_SQUIRRELS },
    { title: "Florida DBPR: Emergency closures, calendar year 2025 (Business City Orlando, conditions naming rodents: 23 closures at 20 licenses; tally by our research helper, Oct 26, 2026)", url: DBPR_2025 },
    { title: "Florida DBPR: 2026 weekly emergency closure extracts through Oct. 25, 2026 (Business City Orlando, conditions naming rodents: 25 closures at 18 licenses, Jan. 1 to Oct. 23; tally by our research helper)", url: DBPR_2026 },
    S.doh2024,
    S.doh2025,
    { title: "DOH-Orange: Rabies surveillance (407-858-1497)", url: DOH_ORANGE },
    { title: "Florida DOH: Rabies (scrub the wound for five to ten minutes; see a provider; call the health department or animal control)", url: DOH_RABIES },
    { title: "FWC: Bats in buildings (exclusion illegal April 16 to August 14)", url: FWC_BATS },
    { title: "FWC: Regional offices (Northeast Region, Ocala, 352-732-1225, covers Orange County)", url: FWC_REGIONS },
    S.edr,
  ],
  clientQuestions: ["Reviews and real job photos from Orlando customers."],
});
