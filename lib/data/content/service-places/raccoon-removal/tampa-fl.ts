import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Raccoon removal in Tampa (TTR-738). The model page for the animal x place set:
 * every card is one true fact about raccoons in Tampa or Hillsborough County,
 * sourced below. Nothing here is copied from the raccoon service page or the
 * Tampa city page.
 */
const DOH2024 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf";
const DOH2025 = "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf";
const ALERT = "https://www.floridahealth.gov/wp-content/uploads/2025/07/alert-hillsborough-dade-4-14-2025.pdf";
const UFIFAS = "https://ask.ifas.ufl.edu/publication/UW033";
const TRASH = "https://www.tampa.gov/solid-waste/programs/residential-trash-collection";

export const raccoonRemovalTampa = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "tampa-fl",
  placeName: "Tampa",
  placeKind: "city",
  location: "about-us/service-area/tampa/wildlife-removal-service-in-tampa-fl",
  county: "Hillsborough",
  order: 1,
  heroText: "A raccoon in a Tampa attic, soffit or chimney? We find how it got in, check for kits, get it out and rebuild the opening so the next one can't follow. Call (727) 594-7705.",
  answerHeading: "Who removes raccoons from homes in Tampa?",
  answer:
    "A private wildlife company. The City of Tampa says wildlife on private property needs a private removal service, and it only picks up dead animals from city rights-of-way. Pro Wildlife Removal takes raccoons out of Tampa attics, soffits and chimneys, checks for kits and repairs the way in. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "City: private property is yours", "Spring means kits"],
  localHeading: "What to know about raccoons in Tampa",
  localIntro: "Raccoons do well in cities, and Tampa gives them water on every side. These are the local facts that shape a raccoon job here.",
  local: [
    { icon: "drop", title: "Water draws them", text: p("UF/IFAS says raccoon numbers run highest in coastal and wetland habitats. Tampa sits on Hillsborough Bay, Old Tampa Bay and the Hillsborough River, so few neighborhoods are far from a shoreline or a creek.") },
    { icon: "leaf", title: "River swamp upstream", text: p("Upstream in Hillsborough County, FWC's Lower Hillsborough Wildlife Management Area protects nearly 2,800 acres of river swamp and hydric hammock along the Hillsborough River, part of the largest natural area in the Tampa Bay region.") },
    { icon: "home", title: "Garbage twice a week", text: p("Tampa collects household garbage twice a week and asks that the cart lid close with nothing sticking out. UF/IFAS notes raccoons check garbage cans that aren't secured, so a lid that shuts is the cheapest raccoon prevention there is.") },
    { icon: "critter", title: "Kits in March and April", text: p("Most Florida raccoons are born in March and April, UF/IFAS says, with three or four young on average. A Tampa raccoon in the attic in spring is often a mother, so the job starts by finding the litter.") },
    { icon: "search", title: "Rabies in Hillsborough", text: p("The Florida Department of Health confirmed six rabid animals in Hillsborough County in 2025: four bats, a cat and one raccoon. None of the county's three cases in 2024 were raccoons, but rabies never fully leaves the wild population.") },
    { icon: "phone", title: "The health department's advice", text: p("When a rabid stray cat was found in the Town and Country area in April 2025, DOH-Hillsborough told residents to avoid physical contact with wild animals, naming raccoons first. Don't corner one in a garage or try to move it yourself.") },
    { icon: "map-pin", title: "Dead raccoons on the road", text: p("Tampa Solid Waste picks up small dead animals from city rights-of-way. A raccoon that dies on your own property, or inside a wall, isn't the city's to remove.") },
  ],
  contactsIntro: "Who handles what when a raccoon is the problem in Tampa, from the city's and agencies' own pages.",
  contacts: [
    { icon: "home", title: "Dead raccoon on a city road", text: p("City of Tampa customer service, (813) 274-8811, for small dead animals in city rights-of-way.") },
    { icon: "phone", title: "Bitten or scratched", text: p("Wash the wound, see a doctor, then report it to DOH-Hillsborough at 813-307-8059.") },
    { icon: "users", title: "A raccoon in the house", text: p("A private wildlife company, per the city. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "Florida's trap, check and release rules, if you're thinking of doing it yourself." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Tampa raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Will the City of Tampa remove a raccoon from my attic?",
      "No. Tampa's animal services page says wildlife on private property needs a private removal service. The city only collects small dead animals from its rights-of-way.",
    ),
    faq(
      "Is it baby season for raccoons in Tampa?",
      "If it's late winter or spring, assume so. In Florida, raccoon litters arrive mostly in March and April, per UF/IFAS. Sealing the hole while kits are inside traps them, so we look for young before anything is closed.",
    ),
    faq(
      "Do raccoons in Hillsborough County carry rabies?",
      "Some do. The state confirmed one rabid raccoon in Hillsborough in 2025, along with four bats and a cat. Keep pets vaccinated and never handle a raccoon, even one that looks tame or sick.",
    ),
    faq(
      "How do I keep raccoons out of my Tampa garbage?",
      "Close the cart lid fully, as the city asks, and don't put it out until the night before pickup. UF/IFAS also suggests feeding pets during daylight hours, so there's no bowl out at night.",
    ),
    faq(
      "How soon can you get to a raccoon in Tampa?",
      "Same-day raccoon calls are often possible in Tampa. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a raccoon call in Tampa]",
    ),
  ],
  ctaHeading: "Raccoon in your Tampa home?",
  ctaText: "Tampa raccoon calls go to (727) 594-7705.",
  seo: {
    title: "Raccoon Removal in Tampa, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in Tampa, FL: raccoons out of attics, soffits and chimneys, kits found first, the way in rebuilt, plus Tampa's rules. Call (727) 594-7705.",
  },
  sources: [
    { title: "City of Tampa: Animal services, Hillsborough County (wildlife on private property: use private removal services)", url: "https://www.tampa.gov/service/animal-services-hillsborough-county" },
    { title: "City of Tampa: Dead animal removal, city road (813-274-8811; city rights-of-way only)", url: "https://www.tampa.gov/service/dead-animal-removal-city-road" },
    { title: "City of Tampa: Residential trash collection (garbage twice per week; lid closed with nothing extending out; cart out the night before or by 6 a.m.)", url: TRASH },
    { title: "UF/IFAS EDIS WEC-34 (UW033): Northern raccoon (do well in urban areas; densities highest in coastal and wetland habitats; one litter a year, in Florida generally March and April; litters average 3 to 4; check unsecured garbage cans; pet food; fruit)", url: UFIFAS },
    { title: "FWC: Lower Hillsborough Wildlife Management Area (nearly 2,800 acres; hydric hammock and river swamp along the Hillsborough River; part of the largest natural area in the Tampa Bay region)", url: "https://myfwc.com/recreation/cooperative/lower-hillsborough/" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Hillsborough: 4 bats, 1 cat, 1 raccoon; total 6)", url: DOH2025 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Hillsborough: 2 bats, 1 cat; total 3)", url: DOH2024 },
    { title: "DOH-Hillsborough: Rabies alert, April 14, 2025 (rabid stray cat, Town and Country, off Twelve Oaks Blvd; avoid physical contact with wild animals, e.g. raccoons)", url: ALERT },
    { title: "DOH-Hillsborough: Report an animal bite (813-307-8059)", url: "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/report-an-animal-bite/" },
  ],
  clientQuestions: ["Typical response time for a raccoon call in Tampa?", "A real Google review from a Tampa raccoon job (TTR-723), and real Tampa raccoon job photos."],
});
