import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Raccoon removal in Spring Hill (TTR-738, Nia). Every card is one true fact
 * about raccoons in Spring Hill or Hernando County: DOH-Hernando alerts, the
 * state rabies table, Hernando County garbage rules and UF/IFAS Extension Hernando.
 */
const JUNE2026 = "https://www.floridahealth.gov/wp-content/uploads/2026/06/rabies-alert-hernando-county-6-12-26.pdf";
const DOH2025 = "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf";
const GARBAGE = "https://www.hernandocounty.us/living-here/garbage-recycling/residential-collection/garbage/";
const ASSESS = "https://www.hernandocounty.us/living-here/garbage-recycling/solid-waste-assessments/collection-assessment/";
const UFHERNANDO = "https://blogs.ifas.ufl.edu/hernandoco/2022/12/21/wildlife-invasive-species-education-wise-species-profile-the-northern-raccoon/";

export const raccoonRemovalSpringHill = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "spring-hill-fl",
  placeName: "Spring Hill",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-spring-hill-fl",
  county: "Hernando",
  order: 30,
  heroText: "A raccoon denning under a Spring Hill house, in the attic or raiding the blue cart? We get it out, look for young first and seal how it got in. Call (727) 594-7705.",
  answerHeading: "Who removes raccoons from Spring Hill homes?",
  answer:
    "A private wildlife company. Hernando County Animal Services, part of the Sheriff's Office, lists pet services like surrenders, lost pets and dangerous dogs; wildlife isn't among them. For a raccoon in a Spring Hill attic or under the house, Pro Wildlife Removal takes it out, checks for young and closes the gap it used. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Spring Hill rabies alert, June 2026", "Lids closed, by county rule"],
  localHeading: "Raccoons, rabies and garbage rules in Spring Hill",
  localIntro: "Spring Hill had a raccoon-linked rabies alert in 2026, and Hernando's garbage rules are written with scavenging animals in mind. Here are the local facts.",
  local: [
    { icon: "critter", title: "A raccoon, a cat, a rabies alert", text: p("In June 2026, an unvaccinated cat in Spring Hill tested positive for rabies after a raccoon attacked it near Norvell Road. DOH-Hernando issued a 60-day rabies alert for the neighborhoods around it.") },
    { icon: "map-pin", title: "The 2026 alert area", text: p("That alert covered Elgin Boulevard on the north, Spring Hill Drive on the south, Barclay Avenue on the east and U.S. 19, Commercial Way, on the west.") },
    { icon: "search", title: "Two rabid raccoons in 2025", text: p("The state's 2025 table listed two rabid raccoons for Hernando County and no other rabid animals. DOH-Hernando's 2025 notices reported rabid raccoons off Ted Road near Brooksville and in the Spring Lake Highway and Neff Lake area.") },
    { icon: "home", title: "Lids closed against animals", text: p("Hernando County's garbage rules say cart lids must be closed to keep animals from scavenging, and only trash inside the blue cart with the lid shut gets collected. A bag left beside the cart stays behind for raccoons.") },
    { icon: "wrench", title: "Not out before 6 p.m.", text: p("Carts can't go to the curb before 6 p.m. the day before collection and must come back in by the end of collection day. Fewer hours at the curb means fewer nights a raccoon gets a shot at it.") },
    { icon: "drop", title: "Twice a week in the universal area", text: p("Homes in Spring Hill's universal, or mandatory, collection area pay a county assessment that covers garbage pickup twice a week, along with weekly recycling and yard waste.") },
    { icon: "leaf", title: "Feeding them is illegal", text: p("UF/IFAS Extension Hernando County says it is illegal to feed raccoons on purpose and that a fed raccoon loses its fear and can become a nuisance. Raccoons may raid trash cans, den under homes and kill chickens that aren't protected.") },
  ],
  contactsHeading: "Spring Hill contacts for raccoon bites and bitten pets",
  contactsIntro: "In Spring Hill, raccoon bites go to DOH-Hernando and bitten pets to Hernando County Animal Services, per their own pages.",
  contacts: [
    { icon: "phone", title: "Bitten or scratched", text: p("Get medical care, then report it to DOH-Hernando at 352-540-6812.") },
    { icon: "users", title: "A raccoon bit your pet", text: p("See a vet, then call Hernando County Animal Services at 352-796-5062, as DOH-Hernando asks.") },
    { icon: "home", title: "A raccoon in the house", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "Florida's rules on trapping a raccoon yourself, and where it can and can't be let go." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Spring Hill raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Was there a rabies alert in Spring Hill?",
      "Yes. DOH-Hernando issued a 60-day alert on June 12, 2026, after a cat attacked by a raccoon near Norvell Road tested positive for rabies. DOH-Hernando issued another 60-day alert on July 1, 2026, for a rabid cat off Westwood Drive. Keep pets vaccinated, and don't handle any raccoon.",
    ),
    faq(
      "I saw a raccoon in daylight in Spring Hill. Is it rabid?",
      "Not necessarily. UF/IFAS Extension Hernando says raccoons are nocturnal but do forage by day, and advises keeping your distance rather than assuming the worst. DOH-Hernando's advice holds either way: avoid physical contact with wild animals.",
    ),
    faq(
      "Which Hernando trash rules help keep raccoons away in Spring Hill?",
      "Follow the county's own rules: lid closed, everything inside the blue cart, and the cart out no earlier than 6 p.m. the night before pickup. Feed pets indoors too, since DOH-Hernando warns against attracting wildlife with outdoor pet food.",
    ),
    faq(
      "Can I put a dead raccoon in my Hernando County trash cart?",
      "No. Hernando County lists dead animals among the items that don't go in the cart. Call Hernando County Solid Waste at (352) 754-4112 for how to dispose of one.",
    ),
    faq(
      "Can you come to a Spring Hill raccoon call today?",
      "Same-day appointments for raccoons are often available in Spring Hill. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a raccoon call in Spring Hill]",
    ),
  ],
  ctaHeading: "Raccoon in your Spring Hill home?",
  ctaText: "Raccoon in a Spring Hill attic or lanai? Call (727) 594-7705.",
  seo: {
    title: "Raccoon Removal in Spring Hill, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in Spring Hill, FL: raccoons out of attics and from under homes, young checked first, gaps closed, plus a 2026 rabies alert and cart rules.",
  },
  sources: [
    { title: "Florida DOH: DOH-Hernando rabies alert, June 12, 2026 (unvaccinated cat attacked by a raccoon, Norvell Road, Spring Hill, June 10, 2026; 60 days; Elgin Blvd, Spring Hill Drive, Barclay Avenue, U.S. 19/Commercial Way; avoid attracting wildlife with outdoor pet food or open garbage cans; Animal Services 352-796-5062)", url: JUNE2026 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Hernando: 2 raccoons, total 2)", url: DOH2025 },
    { title: "Florida DOH: DOH-Hernando rabies advisory, June 2, 2025 (raccoon killed off Ted Road, Brooksville area, May 28, 2025; report injuries to 352-540-6812)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/advisory-hernando-6-2-2025.pdf" },
    { title: "Florida DOH: DOH-Hernando rabies alert, June 9, 2025 (raccoon killed in the Spring Lake Highway/Neff Lake area off Frog Lane)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/alert-hernando-6-9-2025.pdf" },
    { title: "DOH-Hernando: Rabies alert, July 1, 2026 (rabid cat off Westwood Drive, June 29, 2026; 60 days)", url: "https://hernando.floridahealth.gov/2026/07/01/doh-hernando-issues-rabies-alert-2/" },
    { title: "Hernando County: Garbage (twice per week; only waste inside the blue cart with the lid closed is collected; lids closed to prevent scavenging of animals; curbside no earlier than 6 p.m. the day before; carts removed by end of collection day; no dead animals in carts; Solid Waste (352) 754-4112)", url: GARBAGE },
    { title: "Hernando County: Solid waste collection assessment (universal, mandatory area of Spring Hill; twice per week garbage, weekly recycling and yard waste, 6 bulk collections a year)", url: ASSESS },
    { title: "Hernando County Sheriff's Office: Animal Services (352-796-5062; services listed: pet surrender, owner-requested euthanasia, pet licensing, TNVR, lost or found pets, found kittens, dangerous dogs)", url: "https://www.hernandosheriff.org/AnimalServices/" },
    { title: "UF/IFAS Extension Hernando County: WISE species profile, northern raccoon (illegal to feed raccoons intentionally; fed raccoons lose their fear, pillage trash, den under homes, kill unprotected poultry; forage by day too, keep your distance)", url: UFHERNANDO },
  ],
  clientQuestions: ["Typical response time for a raccoon call in Spring Hill?", "A real Google review from a Spring Hill raccoon job (TTR-723), and real Spring Hill raccoon job photos."],
});
