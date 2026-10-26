import { countyPage } from "../../counties/build.ts";
import { faq, p } from "../../pt.ts";

/* Rat removal in The Villages, rewritten in place at its existing URL (Ben, Oct 26). Local rat records only; news items carry their year. */
const SANTIAGO = "https://www.clickorlando.com/news/2016/05/26/squirrel-sized-rats-invade-homes-in-the-villages/";
const BRIAR = "https://www.villages-news.com/2016/09/10/nervous-neighbors-complain-villa-bats-rats-owner-nevada/";
const LYNNHAVEN = "https://www.villages-news.com/2025/07/18/villagers-upset-that-site-of-fatal-fire-attracting-rats-and-buzzards/";
const TRASH = "https://www.districtgov.org/how-to/faqs/";
const SUMTER = "https://www.sumtercountyfl.gov/1180/Nuisance-Wildlife";
const GADSDEN = "https://gadsden.floridahealth.gov/programs-and-services/environmental-health/rodent-control/";
const SANTAROSA = "https://blogs.ifas.ufl.edu/santarosaco/2016/01/29/controlling-rats-and-mice-around-the-farm/";
const CDC = "https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html";

export const theVillagesRats = countyPage({
  kind: "rat",
  path: "about-us/service-area/rat-removal-services-the-villages-fl",
  name: "The Villages",
  county: "Sumter",
  order: 41,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "RAT REMOVAL IN THE VILLAGES",
  heading: "Rat Removal in The Villages, FL",
  highlight: "Rat Removal",
  summary: "Rat removal in The Villages, FL: rat removal for villas and homes, with the local rat reports and the county and district rules behind them.",
  heroText: "Rats in a villa attic or a garage in The Villages? We find how they get in, close it, trap the ones inside and clean up. Call (727) 594-7705.",
  answerHeading: "Who gets rid of rats in The Villages?",
  answer:
    "A private company. When rats turned up in the Village of Santiago in 2016, Sumter County told residents to call a commercial company, and the county says its Animal Services generally deals only with domestic animals. Pro Wildlife Removal closes the openings, traps the rats inside and cleans up after them. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "County refers rats to private companies", "Trash goes out in sealed bags"],
  townsHeading: "Rat removal around The Villages",
  townsIntro: "The Villages crosses Sumter, Lake and Marion counties. We take rat calls on every side, and handle the other animals too.",
  towns: [
    {
      title: "The Villages and nearby",
      href: "/about-us/service-area/wildlife-removal-the-villages/",
      items: [
        { label: "All wildlife in The Villages", href: "/about-us/service-area/wildlife-removal-the-villages/" },
        { label: "Sumter County", href: "/about-us/service-area/wildlife-removal-sumter-county-fl/" },
        { label: "Marion County", href: "/about-us/service-area/wildlife-removal-marion-county-fl/" },
        { label: "Wildwood" },
      ],
    },
  ],
  localHeading: "Rats on the record in The Villages",
  localIntro: "Local news and board meetings show where rats have caused trouble here, and the county and district rules show what keeps them fed.",
  local: [
    { icon: "search", title: "Santiago, 2016: rats the size of squirrels", text: p("Two Village of Santiago homeowners told News 6 in May 2016 about rats as big as squirrels, with things going missing or chewed. One was catching them in his possum and raccoon trap. The property manager pointed to a bird feeder that had been in the area until recently and about 400 acres of farmland nearby.") },
    { icon: "users", title: "The county's answer", text: p("Sumter County told News 6 that residents with rats should call a commercial company to remove them. Its nuisance wildlife page says Animal Services generally deals only with domestic animals.") },
    { icon: "home", title: "Briar Meadow South, 2016: an empty villa", text: p("Villages-News reported in September 2016 that neighbors told the Community Development District 4 board that an abandoned Legacy Villas home was overrun with mold, snakes, rats, bats and bees. The owner, who lived in Nevada, faced fines if the villa stayed out of compliance, and a supervisor urged neighbors to go to the Marion County Health Department.") },
    { icon: "map-pin", title: "Lynnhaven, 2025: a burned house", text: p("Villages-News reported in July 2025 that a Village of Lynnhaven home damaged in a fatal fire on Dec. 23, 2024 was drawing rats and buzzards, residents told the CDD 5 board. Sumter County had opened a code enforcement case on the property.") },
    { icon: "leaf", title: "Bags, not cans", text: p("In Districts 1 through 11, the district FAQ says household waste goes out in sealed bags, and garbage cans or bins aren't allowed. Set bags out close to collection time.") },
    { icon: "critter", title: "Roof rats live up high", text: p(`Florida DOH describes roof rats as good climbers that like high places such as attics, and UF/IFAS says a rat can squeeze through a hole about half an inch wide ([UF/IFAS](${SANTAROSA})). In a villa, that means soffits, roof returns and A/C line gaps.`) },
  ],
  contactsHeading: "Who to call about rats in The Villages",
  contactsIntro: "Who handles what when rats show up near your home.",
  contacts: [
    { icon: "users", title: "Sumter County Animal Services", text: p("(352) 689-4400. Pets and strays; the county says it generally doesn't handle wildlife.") },
    { icon: "home", title: "A neglected property next door", text: p("Bring it to your Community Development District board, as the Briar Meadow and Lynnhaven neighbors did, or to Sumter County code enforcement.") },
  ],
  servicesIntro: "Rats are the focus here, but we remove every animal below in The Villages.",
  servicesHeading: "Rats, and the other animals we remove in The Villages",
  reviewsIntro: "[PLACEHOLDER: reviews from The Villages rat removal customers, matched from the client's Google reviews (TTR-723)]",
  faqHeading: "Rat questions in The Villages",
  faqs: [
    faq(
      "Will Sumter County trap rats at my villa?",
      `Generally not. The county's nuisance wildlife page says Animal Services generally deals only with domestic animals and usually refers residents to private trappers, and in 2016 it told residents of The Villages to call a commercial company for rats ([Sumter County](${SUMTER})).`,
    ),
    faq(
      "Can a bird feeder bring rats to my yard?",
      "It can be part of it. When rats showed up in the Village of Santiago in 2016, the property manager pointed to a bird feeder nearby. Spilled seed under a feeder is food on the ground; see [what keeps rats away](/blog/what-keeps-rats-away/).",
    ),
    faq(
      "Is it safe to sweep up rat droppings in my garage?",
      `No. The CDC says not to sweep or vacuum rodent droppings, and to spray them with disinfectant first ([CDC](${CDC})). Our guide to [cleaning up rat droppings](/blog/how-to-clean-up-rat-droppings-florida-attic/) walks through it.`,
    ),
    faq(
      "How soon can you come out for rats in The Villages?",
      "For rats, same-day appointments are often available in The Villages. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for rat calls in The Villages]",
    ),
  ],
  ctaHeading: "Rats in your Villages home?",
  ctaText: "For rats anywhere in The Villages, call (727) 594-7705.",
  seo: {
    title: "Rat Removal in The Villages, FL | Pro Wildlife Removal",
    description:
      "Rat removal in The Villages, FL: rat removal for villas and homes, local rat reports from Santiago to Lynnhaven, and who handles what. (727) 594-7705.",
  },
  sources: [
    { title: "News 6 (ClickOrlando), May 2016: Squirrel-sized rats invade homes in The Villages (Villages of Santiago; caught in a possum and raccoon trap; bird feeder in the area until recently; about 400 acres of farmland nearby; Sumter County said residents should call a commercial company)", url: SANTIAGO },
    { title: "Villages-News, Sept. 10, 2016: Nervous neighbors complain about villa with bats, rats and owner in Nevada (Legacy Villas, Village of Briar Meadow South; mold, snakes, rats, bats and bees; CDD 4 supervisors; owner out of compliance, will be fined; take case to the Marion County Health Department)", url: BRIAR },
    { title: "Villages-News, July 18, 2025: Villagers upset that site of fatal fire attracting rats and buzzards (Village of Lynnhaven; Dec. 23 fire; CDD 5 board; Sumter County code enforcement case)", url: LYNNHAVEN },
    { title: "The Villages District Government: FAQs (Districts 1-11: household waste in sealed bags; no garbage cans or bins)", url: TRASH },
    { title: "Sumter County: Nuisance wildlife (Animal Services generally deals only with domestic animals; refers most nuisance wildlife reports to private trappers)", url: SUMTER },
    { title: "Sumter County: Animal Services contact (352-689-4400)", url: "https://www.sumtercountyfl.gov/1183/Contact-UsHours" },
    { title: "Florida DOH Gadsden: Rodent control (roof rats are good climbers and like high places such as attics)", url: GADSDEN },
    { title: "UF/IFAS Extension Santa Rosa: Controlling rats and mice around the farm (rats fit through holes as small as 1/2 inch)", url: SANTAROSA },
    { title: "CDC: How to clean up after rodents (don't sweep or vacuum; spray with disinfectant)", url: CDC },
  ],
  clientQuestions: ["Typical response time for rat calls in The Villages?", "Reviews and real job photos from rat customers in The Villages."],
});
