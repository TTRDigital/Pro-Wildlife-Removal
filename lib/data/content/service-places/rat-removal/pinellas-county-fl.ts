import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Rat removal in Pinellas County (TTR-738, Rhea). County-wide rat facts: the
 * Extension office's rodenticide warning after the Philippe Park owl deaths,
 * county landlord and code rules, and what two Pinellas cities do about rats.
 */
const RODENTS = "https://blogs.ifas.ufl.edu/pinellasco/2022/07/25/management-of-rodents/";
const LANDLORD = "https://pinellas.gov/landlord-tenant-information/";
const TERMS = "https://pinellas.gov/special-magistrate-terms-and-definitions/";
const REPORT = "https://pinellas.gov/report-request-contact-us/";
const STPETE = "https://www.stpete.org/residents/good_neighbor_guides/rodent_insect_control.php";
const SAFETY = "https://www.cityofsafetyharbor.com/948/Protecting-Our-Wildlife";

export const ratRemovalPinellasCounty = servicePlacePage({
  service: "rat-removal",
  animal: "Rat",
  animals: "Rats",
  place: "pinellas-county-fl",
  placeName: "Pinellas County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-pinellas-county",
  order: 10,
  heading: "Rat Removal in Pinellas County, FL",
  heroText: "Scratching overhead in a Pinellas home, from St. Pete to Tarpon Springs? We find the gaps rats use, trap the ones already inside and seal the house. Call (727) 594-7705.",
  answerHeading: "Who gets rid of rats in Pinellas County?",
  answer:
    "In Pinellas County, rats inside a house are the occupant's or owner's job, and in most rentals Florida law puts extermination on the landlord. Cities like St. Petersburg help only outdoors. Pro Wildlife Removal finds how rats get into Pinellas homes, traps the ones inside and seals the openings. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Renters: the landlord's job", "Poison killed park owls"],
  localHeading: "What Pinellas County says about rats",
  localIntro: "The county Extension office, the county code and two Pinellas cities all weigh in on rats and the safest way to fight them.",
  local: [
    { icon: "leaf", title: "The Philippe Park owls", text: p("UF/IFAS Extension Pinellas reports that necropsies confirmed several owls found dead in local parks, including the well-known great horned owls at Philippe Park in Safety Harbor, died of rodenticide poisoning.") },
    { icon: "search", title: "No bird-safe poison", text: p("After those deaths, the county's Extension agent got requests for \"bird-friendly\" rat poison. The answer: it doesn't exist. The strongest anticoagulant baits, sold only commercially, stay in a rat's body tissue for months and pass to whatever eats it.") },
    { icon: "wrench", title: "Least toxic first", text: p("The Extension office's advice for Pinellas homes is to rodent-proof the building with chew-resistant materials and take away garbage, pet food, bird feed and fallen fruit before reaching for any poison.") },
    { icon: "home", title: "Renting? Check the lease", text: p("Pinellas County's landlord and tenant page says that, unless the lease says otherwise, Florida law requires the landlord to exterminate rats, bugs and wood-destroying organisms.") },
    { icon: "balance", title: "How the county code defines it", text: p("In Pinellas code cases, \"infestation\" means insects, rodents or other pests within or around a dwelling, and \"extermination\" includes getting rid of their harborage and food, not only poisoning or trapping.") },
    { icon: "building", title: "St. Pete helps outside only", text: p("St. Petersburg's Rodent Control Program inspects neighborhoods and may set free tamper-resistant bait stations outdoors. For rats inside a home, the city points residents to a private exterminator.") },
    { icon: "droppings", title: "Safety Harbor's warning", text: p("The City of Safety Harbor warns that rat poison can raise rodent numbers over time, because it kills the owls and other predators that keep rats in check.") },
  ],
  contactsIntro: "Who handles which part of a rat problem in Pinellas, from the county's and cities' own pages.",
  contacts: [
    { icon: "building", title: "Trash piled on a neighbor's lot", text: p("Pinellas County Public Works, (727) 464-8900, routes garbage complaints on private property to County Code Enforcement.") },
    { icon: "map-pin", title: "Rats outdoors in St. Pete", text: p("St. Petersburg Sanitation, 727-893-7398, schedules the city's Rodent Control Technicians.") },
    { icon: "users", title: "Rats inside your home", text: p("That's work for a private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "rats-in-attic", label: "Rats in the attic" },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Pinellas County rat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Does Pinellas County remove rats from homes?",
      "No. Pinellas County Animal Services lists pets, cruelty cases and stray cats among its duties, not rodents. Inside a home, rats are a job for the occupant, the owner or a private company. In St. Petersburg, the city can help with rats outdoors.",
    ),
    faq(
      "My Pinellas rental has rats. Who pays?",
      "Usually the landlord. Pinellas County's landlord and tenant page says Florida law requires landlords to exterminate rats unless the lease states otherwise. Put the request in writing and keep a copy.",
    ),
    faq(
      "Is there a rat poison that won't hurt owls?",
      "Not according to UF/IFAS Extension Pinellas, which says \"bird-friendly\" rodenticides don't exist. Its agent recommends sealing entry points and removing food first. Sealing is the core of our [rat removal](/services/rat-removal/) work.",
    ),
    faq(
      "What draws rats to Pinellas yards?",
      "Food and cover. The Extension office lists garbage, pet food, bird feed and fallen fruit. Pick up dropped fruit and spilled seed before dark.",
    ),
    faq(
      "How soon can you get to a rat problem in Pinellas County?",
      "Same-day rat inspections are often available in Pinellas County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a rat call in Pinellas County]",
    ),
  ],
  ctaHeading: "Rats in your Pinellas home?",
  ctaText: "Anywhere in Pinellas County, rat calls go to (727) 594-7705.",
  seo: {
    title: "Rat Removal in Pinellas County | Pro Wildlife Removal",
    description:
      "Rat removal in Pinellas County, FL: roof rats trapped and sealed out, county rules for renters, and why local experts warn against poison. (727) 594-7705.",
  },
  sources: [
    { title: "UF/IFAS Extension Pinellas: Rodent management options in and around the home, July 25, 2022 (owls in local parks, including the great horned owls at Philippe Park, died of rodenticide poisoning per necropsy; \"bird-friendly\" rodenticides don't exist; SGARs commercial only and remain in tissue for months; rodent proofing; remove garbage, pet food, bird feed, fallen fruits)", url: RODENTS },
    { title: "Pinellas County: Landlord tenant information (landlord required, unless the lease says otherwise, to exterminate rats, bugs and wood-destroying organisms; Fla. Stat. Ch. 83)", url: LANDLORD },
    { title: "Pinellas County: Special Magistrate terms and definitions (extermination: eliminating harborage places and food; infestation: insects, rodents or other pests within or around a dwelling)", url: TERMS },
    { title: "Pinellas County Public Works: Report / request / contact us ((727) 464-8900; garbage on private property goes to County Code Enforcement)", url: REPORT },
    { title: "Pinellas County: Animal Services enforcement (responsible for cruelty, hoarding, dangerous dogs, nuisance pets, stray and feral cat programs, tethering)", url: "https://pinellas.gov/animal-services-enforcement/" },
    { title: "City of St. Petersburg: Rodent and insect control (occupants of single and two-family homes responsible; Rodent Control Technicians; free tamper-resistant outdoor bait stations; private exterminator inside; Sanitation 727-893-7398)", url: STPETE },
    { title: "City of Safety Harbor: Protecting our wildlife (rat poison increases the rodent population long term by killing natural predators such as owls)", url: SAFETY },
  ],
  clientQuestions: ["Typical response time for a rat call in Pinellas County?", "A real Google review from a Pinellas County rat job (TTR-723), and real Pinellas rat job photos."],
});
