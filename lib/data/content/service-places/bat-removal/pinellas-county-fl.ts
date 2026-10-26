import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Bat removal in Pinellas County (TTR-738, Rhea). County-wide bat facts: rabid
 * bats in 2023 and 2024, DOH-Pinellas advice, the bat rescue on the county's
 * list, the county mosquito office's view of bats, and UF/IFAS Extension Pinellas.
 */
const DOH2023 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2023.pdf";
const DOH2024 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf";
const DOH2025 = "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf";
const RABIES = "https://pinellas.floridahealth.gov/2026/04/10/rabies-safety/";
const BATS = "https://blogs.ifas.ufl.edu/pinellasco/2022/10/18/new-episode-from-naturally-florida-its-spooky-season-lets-chat-about-bats/";
const MOSQUITO = "https://pinellas.gov/frequently-asked-questions-mosquito/";
const MATERNITY = "https://myfwc.com/news/all-news/bat-maternity-0426/";

export const batRemovalPinellasCounty = servicePlacePage({
  service: "bat-removal",
  animal: "Bat",
  animals: "Bats",
  place: "pinellas-county-fl",
  placeName: "Pinellas County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-pinellas-county",
  order: 10,
  heading: "Bat Removal in Pinellas County, FL",
  heroText: "Droppings under the eaves or bats leaving a Pinellas roofline at dusk? We find every gap they use and plan a legal exclusion around Florida's maternity season. Call (727) 594-7705.",
  answerHeading: "How do you get bats out of a house in Pinellas County?",
  answer:
    "By exclusion: one-way devices let the bats out and keep them from coming back. In Pinellas County, as across Florida, that's only allowed from August 15 to April 15, outside the maternity season. Pro Wildlife Removal inspects Pinellas homes year-round and excludes bats when the law allows. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Exclusion Aug 15 to Apr 15", "Rabid bats found 2023, 2024"],
  localHeading: "Bats in Pinellas County",
  localIntro: "Bats are protected in Florida and useful in Pinellas, but the health department wants them out of living spaces. Here's what the local and state agencies say.",
  local: [
    { icon: "search", title: "Rabid bats two years running", text: p("The Florida Department of Health's county tables listed one rabid bat for Pinellas in 2023 and one in 2024, the only Pinellas entries in either year. The 2025 table listed a raccoon.") },
    { icon: "home", title: "Keep them out of living space", text: p("DOH-Pinellas asks residents to keep wildlife, bats included, out of living quarters and other spaces in homes and schools where they could contact people or pets.") },
    { icon: "critter", title: "A local bat rescue", text: p("Pinellas County's list of wildlife rehabilitators includes Central Florida Bat Rescue for injured or grounded bats.") },
    { icon: "bug", title: "Bats and mosquitoes", text: p("Pinellas County Mosquito Control says bats do eat mosquitoes, but only as a small fraction of their diet, so bats alone won't make a real dent in the county's mosquito numbers.") },
    { icon: "leaf", title: "Thirteen species live here", text: p("UF/IFAS Extension Pinellas notes that 13 bat species live in Florida year-round. It suggests leaving Spanish moss, dead palm fronds and old palm boots where possible, since bats roost in them.") },
    { icon: "clock", title: "Maternity season rules", text: p("FWC's bat maternity season runs April 16 to August 14. Exclusion devices can't be used then, so Pinellas homeowners who find bats in late spring should plan for exclusion after mid-August.") },
  ],
  contactsHeading: "Pinellas contacts for grounded bats, bites and roosts",
  contactsIntro: "Who to call about bats in Pinellas County, from the county's and the health department's own pages.",
  contacts: [
    { icon: "critter", title: "Injured or grounded bat", text: p("Central Florida Bat Rescue, (727) 459-2472, from the county's rehabilitator list. Don't pick it up bare-handed.") },
    { icon: "phone", title: "Bite, scratch or a bat in the bedroom", text: p("DOH-Pinellas, 727-824-6932, evaluates possible rabies exposures.") },
    { icon: "home", title: "Bats living in the house", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "bats-in-attic", label: "Bats in the attic" },
  extraLink: { label: "Bat removal cost", href: "/blog/how-much-does-bat-removal-cost-in-florida/", text: "Inspection, exclusion devices and sealing: what shapes the price of getting bats out." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Pinellas County bat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Can bats be removed in Pinellas County in the summer?",
      "Not by exclusion. From April 16 to August 14, Florida's bat maternity season, exclusion devices aren't allowed because flightless pups would be trapped inside. We can inspect and plan, then exclude from August 15 on.",
    ),
    faq(
      "Were any rabid bats confirmed in Pinellas County recently?",
      "Yes. The state confirmed a rabid bat in Pinellas in 2023 and another in 2024. Most bats aren't rabid, but never touch one with bare hands, and call DOH-Pinellas at 727-824-6932 if anyone has had contact.",
    ),
    faq(
      "I found a bat on the ground in Pinellas. Who do I call?",
      "Central Florida Bat Rescue, (727) 459-2472, is on Pinellas County's rehabilitator list. Keep pets and children away, and if you must contain it, use thick gloves and a box.",
    ),
    faq(
      "Will bats get rid of my mosquitoes?",
      "Not on their own. Pinellas County Mosquito Control says mosquitoes are only a small part of a bat's diet. UF/IFAS Extension Pinellas still credits bats with valuable pest control, and killing or harming bats is illegal in Florida.",
    ),
    faq(
      "How soon can you inspect for bats in Pinellas County?",
      "Same-day bat inspections are often available in Pinellas County. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Bats in your Pinellas home?",
  ctaText: "Bats in a Pinellas roof or wall? Call (727) 594-7705.",
  seo: {
    title: "Bat Removal in Pinellas County | Pro Wildlife Removal",
    description:
      "Bat removal in Pinellas County, FL: legal exclusion outside the April 16 to August 14 maternity season, rabies records and who to call. (727) 594-7705.",
  },
  sources: [
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Pinellas: 1 bat; total 1)", url: DOH2023 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Pinellas: 1 bat; total 1)", url: DOH2024 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Pinellas: 1 raccoon; total 1)", url: DOH2025 },
    { title: "DOH-Pinellas: Rabies safety, April 10, 2026 (prevent wildlife, including bats, from entering living quarters or occupied spaces; report to 727-824-6932)", url: RABIES },
    { title: "DOH-Pinellas: Rabies information (evaluates animal bites with Animal Services; report a possible rabies exposure at 727-824-6932)", url: "https://pinellas.floridahealth.gov/programs-and-services/infectious-diseases/epidemiology/rabies-information/" },
    { title: "Pinellas County: Injured or orphaned wildlife (Central Florida Bat Rescue (727) 459-2472, bats)", url: "https://pinellas.gov/injured-or-orphaned-wildlife/" },
    { title: "Pinellas County: Mosquito FAQ (bats and purple martins feed on mosquitoes opportunistically, a small fraction of their diet; no appreciable difference in mosquito populations)", url: MOSQUITO },
    { title: "UF/IFAS Extension Pinellas: Let's chat about bats, Oct. 18, 2022 (13 species live in Florida year-round; highly valuable pest management services; bats eat insects; leave Spanish moss, dead palm fronds and their boots, snags)", url: BATS },
    { title: "FWC news release, April 6, 2026 (bat maternity season April 16 to Aug 14; illegal to block bats from roosts then, to keep flightless pups from being trapped; exclusion devices only Aug 15 to April 15; killing or harming bats is illegal)", url: MATERNITY },
  ],
  clientQuestions: ["A real Google review from a Pinellas County bat job (TTR-723), and real Pinellas bat job photos."],
});
