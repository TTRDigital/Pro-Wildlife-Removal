import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Raccoon removal in Hernando County (TTR-738, Nia). Every card is one true fact
 * about raccoons in Hernando: the state's 2022 to 2025 county tables, DOH-Hernando's
 * 2025 and 2026 notices, its rabies surveillance page and county garbage rules.
 */
const DOH2022 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2022.pdf";
const DOH2023 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2023.pdf";
const DOH2024 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf";
const DOH2025 = "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf";
const SURV = "https://hernando.floridahealth.gov/programs-and-services/environmental-public-health/rabies-surveillance/";
const JUNE2026 = "https://www.floridahealth.gov/wp-content/uploads/2026/06/rabies-alert-hernando-county-6-12-26.pdf";
const JULY2026 = "https://hernando.floridahealth.gov/2026/07/01/doh-hernando-issues-rabies-alert-2/";
const GARBAGE = "https://www.hernandocounty.us/living-here/garbage-recycling/residential-collection/garbage/";

export const raccoonRemovalHernandoCounty = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "hernando-county-fl",
  placeName: "Hernando County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-in-hernando-county-fl",
  order: 50,
  heroText: "A raccoon in the attic, the chimney or under the house, anywhere from Hernando Beach to Ridge Manor? We remove it, check for young and seal the opening. Call (727) 594-7705.",
  answerHeading: "Who removes raccoons from homes in Hernando County?",
  answer:
    "A private wildlife company. Hernando County Animal Services, under the Sheriff's Office, lists pet services such as surrenders, lost pets and dangerous dogs; wildlife isn't among them. Pro Wildlife Removal takes raccoons out of Hernando attics, crawl spaces and chimneys, checks for young first and seals the way in. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Two rabid raccoons in 2025", "Three rabies alerts since"],
  localHeading: "What to know about raccoons in Hernando County",
  localIntro: "Hernando went three years with no rabid animals on the state's tables, then had two rabid raccoons in 2025. Here is the record, and the county rules that matter.",
  local: [
    { icon: "search", title: "Quiet years, then two", text: p("The state's county tables listed no rabid animals at all for Hernando in 2022, 2023 or 2024. The 2025 table listed two, both raccoons.") },
    { icon: "critter", title: "Ted Road, May 2025", text: p("DOH-Hernando's June 2, 2025 advisory reported a rabid raccoon killed in the Brooksville area off Ted Road on May 28, 2025.") },
    { icon: "map-pin", title: "Neff Lake, June 2025", text: p("A week later, DOH-Hernando issued a 60-day alert for a rabid raccoon killed off Frog Lane, in the Spring Lake Highway and Neff Lake area, on June 9, 2025.") },
    { icon: "phone", title: "A raccoon attack in 2026", text: p("In June 2026, an unvaccinated cat that a raccoon attacked near Norvell Road in Spring Hill tested positive for rabies, and DOH-Hernando put that part of Spring Hill under a 60-day alert.") },
    { icon: "drop", title: "The newest alert", text: p("DOH-Hernando's July 1, 2026 alert followed a confirmed rabies case in an unvaccinated feral cat off Westwood Drive on June 29, 2026. The alert says rabies is present in the wild animal population and names raccoons first among wild animals to avoid.") },
    { icon: "leaf", title: "Raccoons lead the rabies reports", text: p("DOH-Hernando's rabies surveillance page lists raccoons first among animals reported with rabies in Florida, ahead of bats and foxes, and that animals other than dogs, cats and ferrets are tested rather than quarantined.") },
    { icon: "home", title: "Lids down, county rule", text: p("Hernando's garbage rules say cart lids must be closed to prevent scavenging of animals, and DOH-Hernando's 2026 alerts warn against attracting wild animals with open garbage cans.") },
  ],
  contactsIntro: "Who handles what when a raccoon is the problem in Hernando County, from the county's and DOH's own pages.",
  contacts: [
    { icon: "phone", title: "Bites and scratches", text: p("DOH-Hernando Environmental Public Health, 352-540-6812.") },
    { icon: "users", title: "A raccoon bit a pet or livestock", text: p("Hernando County Animal Services, 352-796-5062, after the vet.") },
    { icon: "home", title: "A raccoon living in your home", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "Before trapping one yourself: Florida's check times, release limits and the December 31, 2026 changes." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Hernando County raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Is there a rabies alert in Hernando County?",
      "The newest we found, the alert posted July 1, 2026, for a rabid feral cat off Westwood Drive, ran for 60 days. Check DOH-Hernando's newsroom for current alerts. Spring Hill had a separate alert in June 2026 after a raccoon attacked a cat that tested positive.",
    ),
    faq(
      "How many rabid raccoons has Hernando had?",
      "The state's tables listed none for Hernando from 2022 through 2024 and two raccoons in 2025. DOH-Hernando's 2025 notices reported rabid raccoons off Ted Road near Brooksville and in the Neff Lake area.",
    ),
    faq(
      "What happens to a raccoon that bites someone in Hernando?",
      "DOH-Hernando says dogs, cats and ferrets are quarantined for ten days, and other animals, raccoons included, are tested for rabies. Scrub the wound with soap and running water for five to ten minutes and call 352-540-6812.",
    ),
    faq(
      "Does Hernando County Animal Services handle raccoons?",
      "Its listed services are for pets: surrenders, lost and found pets, found kittens and dangerous dogs. A raccoon denning in your house is a job for a private wildlife company.",
    ),
    faq(
      "How soon can you come out for a raccoon in Hernando County?",
      "Same-day appointments for raccoons are often available in Hernando County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a raccoon call in Hernando County]",
    ),
  ],
  ctaHeading: "Raccoon in your Hernando County home?",
  ctaText: "For raccoons anywhere in Hernando, call (727) 594-7705.",
  seo: {
    title: "Raccoon Removal Hernando County, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in Hernando County, FL: raccoons out of attics, chimneys and crawl spaces, young checked first, plus its 2025 and 2026 rabies records.",
  },
  sources: [
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Hernando: none listed)", url: DOH2022 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Hernando: none listed)", url: DOH2023 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Hernando: none listed)", url: DOH2024 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Hernando: 2 raccoons, total 2)", url: DOH2025 },
    { title: "Florida DOH: DOH-Hernando rabies advisory, June 2, 2025 (raccoon killed in the Brooksville area off Ted Road, May 28, 2025)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/advisory-hernando-6-2-2025.pdf" },
    { title: "Florida DOH: DOH-Hernando rabies alert, June 9, 2025 (raccoon killed in the Spring Lake Highway/Neff Lake area off Frog Lane, June 9, 2025; 60 days)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/alert-hernando-6-9-2025.pdf" },
    { title: "Florida DOH: DOH-Hernando rabies alert, June 12, 2026 (unvaccinated cat attacked by a raccoon, Norvell Road, Spring Hill, June 10, 2026; 60 days)", url: JUNE2026 },
    { title: "DOH-Hernando: Rabies alert, July 1, 2026 (rabid cat off Westwood Drive, June 29, 2026; 60 days; Coral Rock Drive, Old Trilby Road, Lower Lake Road/McKinney Sink Road, Nature Coast Boulevard/Highway 75; 352-540-6812; Animal Services 352-796-5062)", url: JULY2026 },
    { title: "DOH-Hernando: Rabies surveillance (raccoons, bats and foxes among the animals reported with rabies in Florida; dogs, cats and ferrets quarantined ten days, other animals tested; scrub wounds five to ten minutes; 352-540-6812)", url: SURV },
    { title: "Florida DOH: DOH-Hernando rabies alert, June 30, 2026 (unvaccinated feral cat off Westwood Drive, June 29, 2026; rabies present in the wild animal population; avoid contact with wild animals, e.g. raccoons; don't attract them with open garbage cans)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/07/rabies-alert-hernando-county-6-30-2026.pdf" },
    { title: "UF/IFAS Extension Hernando County: WISE species profile, northern raccoon (illegal to feed raccoons intentionally)", url: "https://blogs.ifas.ufl.edu/hernandoco/2022/12/21/wildlife-invasive-species-education-wise-species-profile-the-northern-raccoon/" },
    { title: "Hernando County: Garbage (lids closed to prevent scavenging of animals; garbage outside the blue cart not collected)", url: GARBAGE },
    { title: "Hernando County Sheriff's Office: Animal Services (services listed: pet surrender, owner-requested euthanasia, pet licensing, TNVR, lost or found pets, found kittens, dangerous dogs)", url: "https://www.hernandosheriff.org/AnimalServices/" },
  ],
  clientQuestions: ["Typical response time for a raccoon call in Hernando County?", "A real Google review from a Hernando County raccoon job (TTR-723), and real Hernando raccoon job photos."],
});
