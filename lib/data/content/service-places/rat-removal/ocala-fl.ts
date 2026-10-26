import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Rat removal in Ocala (TTR-738, Nia). Facts come from Florida DBPR's 2022-2025
 * emergency closure files (our count; restaurant inspection records, not home
 * reports, and no business named), DOH-Marion's rodent control and sanitary
 * nuisance pages, Ocala Ordinance 2025-41 and the city's 2026 solid waste study.
 */
const DBPR = "https://www2.myfloridalicense.com/hotels-restaurants/reports-statistics/reports-statistics-archive/";
const RODENT = "https://marion.floridahealth.gov/programs-and-services/environmental-public-health/rodent-control/";
const NUISANCE = "https://marion.floridahealth.gov/programs-and-services/environmental-public-health/sanitary-nuisances/";
const ORD = "https://ocala.legistar1.com/ocala/attachments/328f4e0a-dca3-45be-86a7-3e7bd4719767.pdf";
const STUDY = "https://ocala.legistar1.com/ocala/attachments/8ba9eb37-0655-4636-bf31-1cc4343d591a.pdf";

export const ratRemovalOcala = servicePlacePage({
  service: "rat-removal",
  animal: "Rat",
  animals: "Rats",
  place: "ocala-fl",
  placeName: "Ocala",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-ocala-fl",
  county: "Marion",
  order: 92,
  heroText: "Scratching in the ceiling, droppings in the pantry, chewed wires in the garage? We find how rats are getting into Ocala homes, seal the gaps we find and trap the ones inside. Call (727) 594-7705.",
  answerHeading: "Who gets rid of rats in an Ocala home?",
  answer:
    "A private company. DOH-Marion handles sanitary nuisance complaints and gives rodent advice, but rats inside an Ocala house are the owner's to deal with. Pro Wildlife Removal looks for the openings rats use, seals them, traps the rats left inside and cleans up after them. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Trash limit: seven days", "13 closures, 2022 to 2025"],
  localHeading: "What to know about rats in Ocala",
  localIntro: "Ocala's restaurant inspection records show rodents turning up across the city, and the city and DOH-Marion both have rules and advice that bear on them. Here is what they say.",
  local: [
    { icon: "search", title: "13 closures in four years", text: p("Florida DBPR's emergency closure records for 2022 through 2025 list 13 closures of Ocala food businesses where the conditions named rodents, at 10 different businesses, by our count of the state's files. They are restaurant inspection records, not home reports.") },
    { icon: "map-pin", title: "Along State Road 200 and downtown", text: p("Of those 13 Ocala closures, 4 were along State Road 200, on SW College Road and SW Highway 200, and 3 were in downtown Ocala. By year, the files show 3 in 2022, 3 in 2023, 6 in 2024 and 1 in 2025.") },
    { icon: "critter", title: "20 closures across Marion", text: p("Counting the whole county, the same DBPR files list 20 rodent closures at 16 Marion County food businesses from 2022 through 2025.") },
    { icon: "drop", title: "Floods move rodents, DOH-Marion says", text: p("DOH-Marion's rodent control page says infestations are more likely when events such as flooding displace rodents. It advises removing food and water sources and storing people and pet food in sealed containers.") },
    { icon: "wrench", title: "Clean droppings soaked, with gloves", text: p("For cleanup, DOH-Marion says to wear gloves and spray droppings, urine and nesting areas with disinfectant until thoroughly soaked before removing them, and to clear debris rodents can hide in.") },
    { icon: "home", title: "Seven days, by city code", text: p("Since Ocala City Council adopted Ordinance 2025-41 on October 7, 2025, it has been unlawful to let municipal solid waste pile up on any premises in the city for longer than seven days without arranging for its disposal.") },
    { icon: "leaf", title: "Weekly pickup", text: p("A solid waste study presented to the city in January 2026 lists residential trash, yard waste and bulk pickup in Ocala once a week each, for 17,371 residential accounts.") },
  ],
  contactsIntro: "Who handles what when rats are the problem in Ocala, from DOH-Marion's own pages.",
  contacts: [
    { icon: "search", title: "Sanitary nuisance complaints", text: p("DOH-Marion Environmental Public Health, 352-622-7744, for garbage, dead animals and other conditions under Florida Statute 386.041.") },
    { icon: "users", title: "Rats in your home", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "rats-in-attic", label: "Rats in the attic" },
  extraLink: { label: "Wildlife removal costs", href: "/blog/how-much-does-wildlife-removal-cost/", text: "What changes the price of a rat job in Ocala: the number of openings, the damage and the cleanup." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from an Ocala rat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Do the restaurant closures mean Ocala homes have rats?",
      "Not directly. DBPR's emergency closure files are restaurant inspection records, not home reports. They show rodents are active around Ocala, so it's worth checking your own home for gaps and droppings.",
    ),
    faq(
      "How long can trash sit at my Ocala home?",
      "No more than seven days without arranging disposal, under Ordinance 2025-41, which Ocala City Council adopted in October 2025. Trash that sits gives rats food.",
    ),
    faq(
      "Who do I call about a neighbor's garbage or a dead animal in Ocala?",
      "DOH-Marion investigates sanitary nuisance complaints, including garbage and dead animals, at 352-622-7744. If a nuisance is found, it issues a notice with time to correct it.",
    ),
    faq(
      "How should I clean up rat droppings?",
      "DOH-Marion says to wear gloves and soak droppings, urine and nesting material with disinfectant before you remove or clean them.",
    ),
    faq(
      "How soon can you come out for rats in Ocala?",
      "Same-day appointments for rats are often available in Ocala. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a rat call in Ocala]",
    ),
  ],
  ctaHeading: "Rats in your Ocala home?",
  ctaText: "For rats anywhere in Ocala, call (727) 594-7705.",
  seo: {
    title: "Rat Removal in Ocala, FL | Pro Wildlife Removal",
    description:
      "Rat removal in Ocala, FL: rats sealed out and trapped, plus the city's seven-day trash rule, DOH-Marion rodent advice and local restaurant closure counts.",
  },
  sources: [
    { title: "Florida DBPR, Division of Hotels and Restaurants: emergency closure records, 2022, 2023, 2024 and 2025 (2022-EOS.zip to 2025-EOS.zip; our count of rows with a Marion license, Business City Ocala and Conditions for Closure naming rodents, duplicates removed: 13 closures at 10 businesses; 3, 3, 6 and 1 by year; 4 on SW College Rd and SW Hwy 200, 3 downtown; Marion County overall: 20 closures at 16 businesses)", url: DBPR },
    { title: "DOH-Marion: Rodent control (infestations more likely when flooding displaces rodents; remove food and water sources; sealed containers; clear debris; gloves and disinfectant for cleanup; Environmental Public Health 352-622-7744)", url: RODENT },
    { title: "DOH-Marion: Sanitary nuisances (complaints investigated under F.S. 386.041; garbage and dead animals; notice with time to correct; 352-622-7744)", url: NUISANCE },
    { title: "City of Ocala: Ordinance 2025-41, amending Sec. 54-31(a) (no accumulation of municipal solid waste for longer than seven days without arranging disposal), adopted by City Council Oct. 7, 2025", url: ORD },
    { title: "City of Ocala: Solid waste study presentation, Jan. 13, 2026 (residential trash, yard waste and bulk once a week; 17,371 residential accounts)", url: STUDY },
  ],
  clientQuestions: ["Typical response time for a rat call in Ocala?", "A real Google review from an Ocala rat job (TTR-723), and real Ocala rat job photos."],
});
