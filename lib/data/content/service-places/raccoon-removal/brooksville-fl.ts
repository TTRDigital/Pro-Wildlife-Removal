import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Raccoon removal in Brooksville (TTR-738, Nia). Every card is one true fact
 * about raccoons in Brooksville or Hernando County: DOH-Hernando's 2025 and 2026
 * notices, the state rabies tables, the city's own trash service and UF/IFAS
 * Extension Hernando's raccoon profile.
 */
const ADV2025 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/advisory-hernando-6-2-2025.pdf";
const ALERT2025 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/alert-hernando-6-9-2025.pdf";
const ALERT2026 = "https://www.floridahealth.gov/wp-content/uploads/2026/07/rabies-alert-hernando-county-6-30-2026.pdf";
const DOH2025 = "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf";
const UTIL = "https://cityofbrooksville.us/253/Utilities";
const UFHERNANDO = "https://blogs.ifas.ufl.edu/hernandoco/2022/12/21/wildlife-invasive-species-education-wise-species-profile-the-northern-raccoon/";

export const raccoonRemovalBrooksville = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "brooksville-fl",
  placeName: "Brooksville",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-service-in-brooksville-fl",
  county: "Hernando",
  order: 42,
  heroText: "A raccoon in a Brooksville attic, under the porch or in the chicken pen? We get it out, look for young before anything is closed and seal the way in. Call (844) 264-6254.",
  answerHeading: "Who removes raccoons in Brooksville?",
  answer:
    "A private wildlife company. Hernando County Animal Services lists pet services, not wildlife, and a raccoon denning in a Brooksville attic or crawl space needs a private remover. Pro Wildlife Removal gets it out, checks for young first and seals the opening it used. Call (844) 264-6254.",
  points: ["Call (844) 264-6254", "Rabid raccoon off Ted Road, 2025", "City trash, city crews"],
  localHeading: "What to know about raccoons in Brooksville",
  localIntro: "DOH-Hernando reported a rabid raccoon in the Brooksville area in 2025. Here is what the records and local rules say.",
  local: [
    { icon: "critter", title: "Rabid raccoon off Ted Road", text: p("A raccoon killed in the Brooksville area off Ted Road, ZIP 34601, on May 28, 2025 tested positive for rabies. DOH-Hernando issued a rabies advisory on June 2, 2025.") },
    { icon: "map-pin", title: "A second one that June", text: p("On June 9, 2025, a rabid raccoon was killed in the Spring Lake Highway and Neff Lake area off Frog Lane. DOH-Hernando's 60-day alert ran between Kenova Street, Hayman Road, Spring Lake Highway and Cobb Road.") },
    { icon: "search", title: "Hernando's only rabid animals", text: p("The state's 2025 table listed two rabid raccoons for Hernando County and nothing else. Its 2024 table listed no rabid animals for the county at all.") },
    { icon: "home", title: "City carts, closed", text: p("The City of Brooksville's Utilities Department collects curbside residential trash in the city. Keeping city carts closed helps; DOH-Hernando asks residents not to attract wildlife with open garbage cans.") },
    { icon: "leaf", title: "Oaks, water and dens", text: p("UF/IFAS Extension Hernando County says raccoons really like to be near water, and that cavities in large trees such as oaks make good dens for raising young.") },
    { icon: "drop", title: "Feeding is against the law", text: p("Hernando's UF/IFAS Extension office says intentionally feeding raccoons is illegal, and warns that raccoons kill chickens and other poultry that aren't protected.") },
    { icon: "search", title: "A raccoon attack in Spring Hill", text: p("In June 2026, a cat attacked by a raccoon off Norvell Road in Spring Hill tested positive for rabies, and DOH-Hernando issued a 60-day alert.") },
    { icon: "phone", title: "The newest county alert", text: p("DOH-Hernando's latest rabies alert, from June 30, 2026, followed a rabid feral cat off Westwood Drive in southeast Hernando. It again asked residents not to attract wildlife with outdoor pet food or open garbage cans.") },
  ],
  contactsIntro: "Brooksville raccoon contacts: DOH-Hernando for bites, city Utilities for carts, and a private company for one inside.",
  contacts: [
    { icon: "phone", title: "Bitten or scratched", text: p("See a doctor first, then call DOH-Hernando at 352-540-6812 to report it.") },
    { icon: "home", title: "City trash questions", text: p("City of Brooksville Utilities, 352-540-3860.") },
    { icon: "users", title: "A raccoon in the house", text: p("A private wildlife company. Call us at (844) 264-6254.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "What a homeowner can and can't do with a trapped raccoon under Florida law." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Brooksville raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Have raccoons near Brooksville had rabies?",
      "Yes. One killed off Ted Road in May 2025 and another in the Spring Lake Highway and Neff Lake area in June 2025 both tested positive. Vaccinate your pets, and leave any raccoon, healthy-looking or not, alone.",
    ),
    faq(
      "What stops raccoons from getting into Brooksville city carts?",
      "Keep the city cart's lid shut and bags inside it. DOH-Hernando asks residents not to attract wildlife with open garbage cans or outdoor pet food. Questions about city pickups go to Utilities at 352-540-3860.",
    ),
    faq(
      "A raccoon is killing my chickens in Brooksville. What can I do?",
      "Lock poultry in a covered, predator-proof pen at night and don't leave feed out. UF/IFAS Extension Hernando warns raccoons kill unprotected poultry. If one is denning on your property, we can remove it.",
    ),
    faq(
      "Can I feed the raccoons that visit my yard?",
      "No. UF/IFAS Extension Hernando says intentionally feeding raccoons is illegal, and that fed raccoons lose their fear and can become a nuisance.",
    ),
    faq(
      "Can a raccoon in a Brooksville house be handled today?",
      "Same-day appointments for raccoons are often available in Brooksville. Call (844) 264-6254.",
    ),
  ],
  ctaHeading: "Raccoon in your Brooksville home?",
  ctaText: "Raccoon in a Brooksville attic or garage? Call (844) 264-6254.",
  seo: {
    title: "Raccoon Removal in Brooksville, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in Brooksville, FL: raccoons out of attics, crawl spaces and pens, young checked first, the way in sealed, plus 2025 rabies cases nearby.",
  },
  sources: [
    { title: "Florida DOH: DOH-Hernando rabies advisory, June 2, 2025 (raccoon killed in the Brooksville area off Ted Road, 34601, May 28, 2025)", url: ADV2025 },
    { title: "Florida DOH: DOH-Hernando rabies alert, June 9, 2025 (raccoon killed in the Spring Lake Highway/Neff Lake area off Frog Lane; 60 days; Kenova St., Hayman Road, Spring Lake Highway, Cobb Road)", url: ALERT2025 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Hernando: 2 raccoons, total 2)", url: DOH2025 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Hernando: none listed)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf" },
    { title: "City of Brooksville: Utilities (Solid Waste: curbside residential trash, single stream recyclables, bulk items; 352-540-3860)", url: UTIL },
    { title: "UF/IFAS Extension Hernando County: WISE species profile, northern raccoon (really like to be around water; cavities in large trees like oaks for dens; illegal to feed raccoons intentionally; fed raccoons lose their fear; kill chickens or other poultry if not protected)", url: UFHERNANDO },
    { title: "Florida DOH: DOH-Hernando rabies alert, June 30, 2026 (rabid unvaccinated feral cat off Westwood Drive, June 29, 2026; don't attract wildlife with outdoor pet food or open garbage cans; report injuries to 352-540-6812)", url: ALERT2026 },
    { title: "DOH-Hernando: Rabies alert, June 15, 2026 (unvaccinated cat attacked by a raccoon, Norvell Road, Spring Hill; 60 days)", url: "https://hernando.floridahealth.gov/2026/06/15/doh-hernando-issues-rabies-alert/" },
    { title: "Hernando County Sheriff's Office: Animal Services (services listed: pet surrender, owner-requested euthanasia, pet licensing, TNVR, lost or found pets, found kittens, dangerous dogs)", url: "https://www.hernandosheriff.org/AnimalServices/" },
  ],
  clientQuestions: ["A real Google review from a Brooksville raccoon job (TTR-723), and real Brooksville raccoon job photos."],
});
