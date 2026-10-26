import { countyPage } from "../counties/build.ts";
import { countyGroups } from "../areas.ts";
import { faq, p } from "../pt.ts";
import { TRAP_RULES_SOURCE } from "../notes.ts";

/* Central Florida hub, rewritten in place at its existing URL (Ben, Oct 26). Region-wide facts only: the Florida rules every job here follows, and how county animal services split the work. Local facts live on the county and city pages. */
const FWC_FAQ = "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/";
const FWC_BATS = "https://myfwc.com/news/all-news/bat-maternity-0426/";
const FWC_FEEDING = "https://myfwc.com/conservation/you-conserve/wildlife/feeding/";
const FWC_SQUIRRELS = "https://myfwc.com/media/tydhegay/livingwithsquirrels.pdf";
const OCAS = "https://www.orangecountyanimalservicesfl.net/AboutUs/FAQ.aspx";
const CITRUS = "https://www.sheriffcitrus.org/programs___services/animal_control.php";
const SUMTER = "https://www.sumtercountyfl.gov/1180/Nuisance-Wildlife";

export const centralFlorida = countyPage({
  kind: "region",
  path: "about-us/service-area/wild-life-removal-central-florida",
  name: "Central Florida",
  county: "",
  order: 1,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN CENTRAL FLORIDA",
  heading: "Wildlife Removal in Central Florida",
  highlight: "Central Florida",
  summary: "Wildlife removal across Central Florida: raccoons, rats, bats, squirrels, opossums, snakes, armadillos and bees, county by county.",
  heroText: "From the Gulf coast to the Villages and Polk's lakes, one number covers our Central Florida service area. Call (727) 594-7705.",
  answerHeading: "Who removes wildlife in Central Florida?",
  answer:
    "Usually a private company. County animal services here focus on pets and strays: Orange says it doesn't trap nuisance wildlife, Sumter generally handles only domestic animals, and the Citrus Sheriff refers residents to a trapper. Pro Wildlife Removal removes raccoons, rats, bats, squirrels, snakes and other animals from homes, following FWC's rules, and seals the way in. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "One number, every county", "FWC rules on every job"],
  townsHeading: "Counties and cities we serve",
  townsIntro: "Each county and city has its own page with its local rules, records and contacts. Pick yours.",
  towns: countyGroups,
  localHeading: "Florida's rules for wildlife at home",
  localIntro: "Whatever the county, these state rules decide how a wildlife job in Central Florida is done.",
  local: [
    { icon: "critter", title: "Bats wait for August", text: p("FWC's maternity season runs April 16 through Aug. 14. Outside it, one-way devices go up for at least four nights with lows forecast at 50°F or warmer.") },
    { icon: "wrench", title: "Traps checked every day", text: p("Under FWC's nuisance wildlife rules, traps must be checked at least every 24 hours, and a native animal may be released only on the property where it was caught or on 40 or more contiguous acres in the same county with the landowner's written permission.") },
    { icon: "leaf", title: "No feeding raccoons", text: p("FWC rule 68A-4.001 bans placing food in a way that attracts raccoons, foxes or coyotes. Pet food left on a porch counts.") },
    { icon: "search", title: "Fox squirrels are off limits", text: p("FWC's squirrel guide lets property owners take eastern gray squirrels that damage a building, but not fox squirrels.") },
    { icon: "users", title: "Counties split the work", text: p("Orange County Animal Services says it doesn't trap nuisance wildlife, Sumter County says it deals mostly with domestic animals, and the Citrus County Sheriff refers nuisance wildlife to a trapper. That leaves animals in the attic to private companies.") },
  ],
  servicesIntro: "Every service below is available across our Central Florida counties. Pick an animal for the signs, the rules and how we handle it.",
  servicesHeading: "Wildlife removal services in Central Florida",
  reviewsIntro: "[PLACEHOLDER: reviews from Central Florida customers, matched from the client's Google reviews (TTR-723)]",
  faqHeading: "Central Florida wildlife questions",
  faqs: [
    faq(
      "Which counties do you serve?",
      "Pinellas, Pasco, Hillsborough, Hernando, Citrus, Sumter, Polk and Marion, with pages for Orlando, Sarasota and Lady Lake too. One number covers all of it: (727) 594-7705.",
    ),
    faq(
      "Can I release a trapped animal somewhere else in Florida?",
      `Only where FWC allows: on the property where it was caught, or on 40 or more contiguous acres in the same county with the landowner's written permission ([FWC](${FWC_FAQ})). Non-native animals can't be released.`,
    ),
    faq(
      "Is it ever legal to seal bats out in summer?",
      `Not without an FWC permit. Exclusion is illegal from April 16 to August 14 ([FWC](${FWC_BATS})). See [bat removal](/services/bat-removal/).`,
    ),
    faq(
      "Will my county's animal control remove a raccoon?",
      `Usually not. Orange County's FAQ says it doesn't trap nuisance wildlife ([Orange County](${OCAS})), and other counties say much the same. Your county's page here lists its numbers.`,
    ),
    faq(
      "How soon can someone come out?",
      "Same-day appointments are often available across Central Florida. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Wildlife problem anywhere in Central Florida?",
  ctaText: "One number for every county we serve: (727) 594-7705.",
  seo: {
    title: "Central Florida Service Area | Pro Wildlife Removal",
    description:
      "Wildlife removal across Central Florida: raccoons, rats, bats and squirrels, the FWC rules every job follows, and a page for each county. (727) 594-7705.",
  },
  sources: [
    { title: "FWC news release, April 6, 2026: Maternity season starts April 16 for Florida's bats (through Aug. 14; devices at least four nights; lows 50°F or higher)", url: FWC_BATS },
    { title: "FWC: FAQs, nuisance wildlife (24-hour trap checks; release on the same property or 40+ contiguous acres in the same county with written permission; native species only)", url: FWC_FAQ },
    TRAP_RULES_SOURCE,
    { title: "FWC: Feeding wildlife (68A-4.001 prohibits placing food in a manner that attracts raccoons, foxes and coyotes)", url: FWC_FEEDING },
    { title: "FWC: Living with squirrels (eastern gray squirrels may be taken as nuisance wildlife; fox squirrels excluded)", url: FWC_SQUIRRELS },
    { title: "Orange County Animal Services: FAQ (does not trap nuisance wildlife)", url: OCAS },
    { title: "Sumter County: Nuisance wildlife (Animal Services generally deals only with domestic animals)", url: SUMTER },
    { title: "Citrus County Sheriff's Office: Animal Control (nuisance wildlife referred to a nuisance trapper)", url: CITRUS },
  ],
  clientQuestions: ["Reviews and real job photos from across Central Florida."],
});
