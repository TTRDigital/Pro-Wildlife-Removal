import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Rat removal in Polk County (TTR-738, Owen). Every card names rats or rodents in
 * Polk: county Code Enforcement and illegal dumping pages, Lake Wales's urban chicken
 * rules, and UF/IFAS Extension Polk County posts. Sourced below.
 */
const CODE = "https://www.polkfl.gov/public-safety/code-enforcement/";
const DUMPING = "https://www.polkfl.gov/illegal-dumping-in-polk-county/";
const CHICKENS_LW = "https://www.lakewalesfl.gov/830/Urban-Chicken-Program";
const IFAS = "https://blogs.ifas.ufl.edu/polkco/";
const LAKELAND_FAQ = "https://lakelandgov.net/departments/community-economic-development/code-enforcement/faqs";

export const ratRemovalPolkCounty = servicePlacePage({
  service: "rat-removal",
  animal: "Rat",
  animals: "Rats",
  place: "polk-county-fl",
  placeName: "Polk County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-polk-county",
  heroText: "Scratching in a Polk County attic or wall, or droppings in the garage? We find where the rats get in, close those gaps, trap the ones inside and clean up after them. Call (727) 594-7705.",
  answerHeading: "Who gets rid of rats in a Polk County home?",
  answer:
    "Rats in a Polk County home are a job for a private company. Polk County Code Enforcement does list rat infestations among the nuisances it inspects, along with trash on lots. Pro Wildlife Removal finds how rats get in, seals those gaps, traps the rats inside and cleans up. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "County code covers rat infestations", "UF/IFAS: poison as a last resort"],
  localHeading: "What to know about rats in Polk County",
  localIntro: "These facts about rats in Polk come from the county, the City of Lake Wales and UF/IFAS Extension Polk County.",
  local: [
    { icon: "search", title: "A code enforcement matter", text: p("Polk County Code Enforcement's inspection system covers nuisances that include rat infestations, trash on lots, high weeds on vacant lands and unsanitary conditions.") },
    { icon: "map-pin", title: "Dumping draws rats", text: p("In a December 2023 post, Polk County called illegal dumping a health risk because it becomes a breeding ground for insects and draws in disease-carrying animals such as rats.") },
    { icon: "home", title: "Lake Wales coops", text: p("Under the City of Lake Wales Urban Chicken Program, every pen must be built and kept impermeable to rodents, with nothing able to live underneath it or inside its walls.") },
    { icon: "leaf", title: "Lake Wales feed rules", text: p("Lake Wales also requires chicken feed to be stored in containers rats can't get into, with tight caps or lids. Rodents in the chicken area can end a household's place in the program.") },
    { icon: "users", title: "Keep rats away from the flock", text: p("UF/IFAS Extension Polk County's backyard chicken biosecurity post tells keepers to avoid rats and mites where chickens are, and to set up an integrated pest management plan.") },
    { icon: "critter", title: "Poison last", text: p("A UF/IFAS Extension Polk County post on a Naturally Florida podcast episode urges using rat poison only as a last resort, to protect owls, hawks and pets from primary and secondary poisoning.") },
  ],
  contactsIntro: "Who to call about rats and the conditions around them in Polk, from each agency's own page.",
  contacts: [
    { icon: "search", title: "Rats or trash on a nearby lot", text: p("Polk County Code Enforcement, (863) 534-6054, for unincorporated Polk.") },
    { icon: "home", title: "Garbage or a dead animal left out", text: p("DOH-Polk investigates sanitary nuisances, including garbage and dead animals: 863-519-8330, option 7.") },
    { icon: "users", title: "Rats inside your home", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "rats-in-attic", label: "Rats in the attic" },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Polk County rat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Can Polk County do anything about rats on a neighbor's property?",
      "Code Enforcement inspects nuisances in unincorporated Polk, and its page names rat infestations, trash on lots and high weeds on vacant lands. File a complaint online through the Polk County Access Portal; the office's number is (863) 534-6054. Inside Lakeland and other cities, the city's own code office handles it.",
    ),
    faq(
      "Should I put out rat poison in my Polk County yard?",
      "UF/IFAS Extension Polk County says to use rat poisons only as a last resort, after other pest management steps, because owls, hawks and pets can be poisoned too.",
    ),
    faq(
      "Can I keep backyard chickens in Lake Wales without drawing rats?",
      "Lake Wales's chicken program requires pens impermeable to rodents and feed in rat-proof containers with tight lids. If rodents show up, the city can end your participation.",
    ),
    faq(
      "How soon can you come out for rats in Polk County?",
      "Same-day appointments for rats are often available in Polk County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a rat call in Polk County]",
    ),
  ],
  ctaHeading: "Rats in your Polk County home?",
  ctaText: "For rats anywhere in Polk County, call (727) 594-7705.",
  seo: {
    title: "Rat Removal in Polk County, FL | Pro Wildlife Removal",
    description:
      "Rat removal in Polk County, FL: entry gaps sealed, rats trapped and cleaned up in Lakeland, Winter Haven and Lake Wales homes. Call (727) 594-7705 today.",
  },
  sources: [
    { title: "Polk County: Code Enforcement (nuisances include rat infestations, trash on lots, high weeds on vacant lands and unsanitary conditions; (863) 534-6054)", url: CODE },
    { title: "Polk County: Illegal dumping in Polk County (Dec 27, 2023; breeding ground for insects; draws in disease-transmitting animals such as rats)", url: DUMPING },
    { title: "City of Lake Wales: Urban Chicken Program (revised 06/23/2026; pens impermeable to rodents; feed in containers impenetrable by rats, with tight lids; rodents may end participation)", url: CHICKENS_LW },
    { title: "UF/IFAS Extension Polk County: Backyard chickens: biosecurity (April 1, 2022; avoid rats and mites where chickens are)", url: `${IFAS}2022/04/01/backyard-chickens-biosecurity/` },
    { title: "UF/IFAS Extension Polk County: Naturally Florida, Rat poisons and wildlife (July 18, 2022; rat poisons only as a last resort; owls, hawks, pets)", url: `${IFAS}2022/07/18/new-episode-from-naturally-florida-rat-poison-and-wildlife-whats-the-big-deal/` },
    { title: "City of Lakeland: Code Enforcement FAQs (Polk County enforces its own codes outside Lakeland's city limits, in unincorporated Polk)", url: LAKELAND_FAQ },
    { title: "Polk County: Contact us (Polk County Access Portal; Code Enforcement (863) 534-6054)", url: "https://www.polkfl.gov/contact-us/" },
    { title: "DOH-Polk: Sanitary nuisances (garbage, offal, dead animals; 863-519-8330, option 7)", url: "https://polk.floridahealth.gov/programs-and-services/environmental-health/sanitary-nuisances/" },
  ],
  clientQuestions: ["Typical response time for a rat call in Polk County?", "A real Google review from a Polk County rat job (TTR-723), and real Polk rat job photos."],
});
