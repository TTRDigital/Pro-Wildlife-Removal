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
const ALERT = "https://www.floridahealth.gov/wp-content/uploads/2026/09/rabies-alert-hillsborough-9-14-26.pdf";
const RABIES = "https://www.floridahealth.gov/diseases-and-conditions/disease/rabies/";
const RIVER = "https://www.swfwmd.state.fl.us/watersheds/hillsborough-river";
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
  heroText: "A raccoon in a Tampa attic, soffit or chimney? We find how it got in, check for kits, get it out and repair the opening it used. Call (727) 594-7705.",
  answerHeading: "Who removes raccoons from homes in Tampa?",
  answer:
    "A private wildlife company. The City of Tampa says wildlife on private property needs a private removal service, and its Solid Waste Department picks up only small dead animals in city rights-of-way, not on private property. Pro Wildlife Removal takes raccoons out of Tampa attics, soffits and chimneys, checks for kits and repairs the way in. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "City: private removal for private property", "Spring means kits"],
  localHeading: "What to know about raccoons in Tampa",
  localIntro: "Raccoons do well in cities, and Tampa sits on Tampa Bay with the Hillsborough River running to it. These are the local facts that shape a raccoon job here.",
  local: [
    { icon: "drop", title: "Water draws them", text: p("UF/IFAS says raccoons can reach 100 per square mile around plentiful food, especially in coastal and wetland habitats. Tampa is on Tampa Bay, and the Hillsborough River, the city's main drinking water source, flows 54 miles to the bay.") },
    { icon: "home", title: "Garbage twice a week", text: p("Tampa collects household garbage twice a week and asks that the cart lid close with nothing sticking out. UF/IFAS notes raccoons check out garbage cans that aren't secured, and suggests a raccoon-proof can or a weighted lid.") },
    { icon: "critter", title: "Kits in March and April", text: p("UF/IFAS says Florida raccoon litters are generally born in March and April, three or four young on average. A Tampa raccoon in the attic in spring could be a mother with young, so the job starts by looking for a litter.") },
    { icon: "search", title: "Rabies in Hillsborough", text: p("The Florida Department of Health confirmed six rabid animals in Hillsborough County in 2025: four bats, a cat and one raccoon. In 2024 the county's table listed two bats and a cat, and no raccoons.") },
    { icon: "sound", title: "Raccoons and bats lead", text: p("DOH names raccoons and bats as the main wildlife sources of rabies in Florida. Together they made up five of Hillsborough's six rabid animals in the 2025 table.") },
    { icon: "phone", title: "The latest alert", text: p("When a rabid cat was found in Gibsonton in September 2026, DOH-Hillsborough told residents to avoid physical contact with wild animals, naming raccoons first. Don't corner one in a garage or try to move it yourself.") },
    { icon: "map-pin", title: "Dead raccoons on the road", text: p("Tampa Solid Waste picks up small dead animals from city rights-of-way, and says it can't retrieve carcasses from private property, so one in your yard or inside a wall is yours to arrange.") },
  ],
  contactsIntro: "Who handles what when a raccoon is the problem in Tampa, from the city's and agencies' own pages.",
  contacts: [
    { icon: "home", title: "Dead raccoon on a city road", text: p("City of Tampa customer service, (813) 274-8811, for small dead animals in city rights-of-way.") },
    { icon: "phone", title: "Bitten or scratched", text: p("Scrub the wound with soap and water, see a doctor, then report it to DOH-Hillsborough at 813-307-8059.") },
    { icon: "users", title: "A raccoon in the house", text: p("A private wildlife company, per the city. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "Florida's trap, check and release rules, if you're thinking of doing it yourself." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Tampa raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Will the City of Tampa remove a raccoon from my attic?",
      "No. The City of Tampa's animal services page says wildlife on private property needs a private removal service. The city only collects small dead animals from its rights-of-way.",
    ),
    faq(
      "Is it baby season for raccoons in Tampa?",
      "If it's late winter or spring, assume so. In Florida, raccoon litters arrive mostly in March and April, per UF/IFAS. Sealing the hole while kits are inside traps them, so we look for young before anything is closed.",
    ),
    faq(
      "Do raccoons in Hillsborough County carry rabies?",
      "Some do. The state confirmed one rabid raccoon in Hillsborough in 2025, along with four bats and a cat, and DOH says to avoid contact with wild animals. Keep pets vaccinated and never handle a raccoon, even one that looks tame or sick.",
    ),
    faq(
      "How do I keep raccoons out of my Tampa garbage?",
      "Close the cart lid fully, as the city asks, or weight it as UF/IFAS suggests, and don't put it out until the night before pickup. UF/IFAS also suggests feeding pets during daylight hours, so there's no bowl out at night.",
    ),
    faq(
      "How soon can you get to a raccoon in Tampa?",
      "Same-day appointments for raccoons are often available in Tampa. Call (727) 594-7705.",
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
    { title: "City of Tampa: Dead animal removal, city road (813-274-8811; small dead animals in city rights-of-way; can't retrieve carcasses from private property)", url: "https://www.tampa.gov/service/dead-animal-removal-city-road" },
    { title: "City of Tampa: Residential trash collection (garbage twice per week; lid closed with nothing extending out; cart out the night before or by 6 a.m.)", url: TRASH },
    { title: "UF/IFAS EDIS WEC-34 (UW033): Northern raccoon (do well in urban areas; densities of 100 per square mile around abundant food, especially coastal and wetland habitats; litters generally born in March and April in Florida; average 3 to 4 young; check out unsecured garbage cans; raccoon-proof can or weighted lid; feed pets in daylight)", url: UFIFAS },
    { title: "SWFWMD: Hillsborough River (primary source of drinking water for the City of Tampa; travels 54 miles to Tampa Bay)", url: RIVER },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Hillsborough: 4 bats, 1 cat, 1 raccoon; total 6)", url: DOH2025 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Hillsborough table: 2 bats, 1 cat, no raccoons; 3 more bats found by surveillance testing are footnoted, not in the table)", url: DOH2024 },
    { title: "DOH-Hillsborough: Rabies alert, September 14, 2026 (rabid cat, Gibsonton, off US Hwy 41 and Alice Avenue; avoid physical contact with wild animals, e.g. raccoons, bats)", url: ALERT },
    { title: "Florida DOH: Rabies (main wildlife sources are raccoons and bats; avoid contact with wild or stray animals; scrub a wound with soap and running water)", url: RABIES },
    { title: "DOH-Hillsborough: Report an animal bite (813-307-8059)", url: "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/report-an-animal-bite/" },
  ],
  clientQuestions: ["Typical response time for a raccoon call in Tampa?", "A real Google review from a Tampa raccoon job (TTR-723), and real Tampa raccoon job photos."],
});
