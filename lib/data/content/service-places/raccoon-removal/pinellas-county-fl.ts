import { TRAP_RULES_2026, TRAP_RULES_SOURCE } from "../../notes.ts";
import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Raccoon removal in Pinellas County (TTR-738, Rhea). County-wide raccoon facts:
 * the county feeding ordinance, county parks that name raccoons, the 2025 rabid
 * raccoon, flood guidance and the county's wildlife contacts.
 */
const ENFORCE = "https://pinellas.gov/animal-services-enforcement/";
const DOH2025 = "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf";
const DOH2024 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf";
const RABIES = "https://pinellas.floridahealth.gov/2026/04/10/rabies-safety/";
const FLOOD = "https://pinellas.gov/safety-tips-before-during-and-after-a-flood/";
const INJURED = "https://pinellas.gov/injured-or-orphaned-wildlife/";

export const raccoonRemovalPinellasCounty = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "pinellas-county-fl",
  placeName: "Pinellas County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-pinellas-county",
  order: 10,
  heading: "Raccoon Removal in Pinellas County, FL",
  heroText: "Thumping in the attic or a torn soffit somewhere in Pinellas? We find the raccoon's way in, look for young, remove the animals and close the opening. Call (844) 264-6254.",
  answerHeading: "Who handles a raccoon living in a Pinellas County house?",
  answer:
    "A private wildlife company. Pinellas County Animal Services offers help with sick or injured wildlife and refers residents to FWC's list of trappers, so a healthy raccoon in your attic is the owner's to handle. Pro Wildlife Removal gets raccoons out of Pinellas attics, soffits and crawl spaces, checks for young and seals the entry. Call (844) 264-6254.",
  points: ["Call (844) 264-6254", "County bans feeding nuisances", "Rabid raccoon found in 2025"],
  localHeading: "Raccoons in Pinellas County",
  localIntro: "Pinellas is the most crowded county in Florida, yet its parks still list raccoons by name. These are the county facts that matter when one moves into a house.",
  local: [
    { icon: "balance", title: "Feeding can be a violation", text: p("Pinellas County Code Sec. 14-30(4) makes it a public nuisance to put out food or garbage in a way that attracts cats, dogs, raccoons, coyotes or other wildlife.") },
    { icon: "search", title: "A rabid raccoon in 2025", text: p("The state health department's 2025 county table listed one rabid raccoon for Pinellas and no other animals. Its 2024 table listed a single Pinellas bat.") },
    { icon: "leaf", title: "Lake Seminole Park", text: p("The county describes its 258-acre Lake Seminole Park as designated wildlife habitat and sanctuary, home to raccoons, alligators, hawks, eagles and turtles.") },
    { icon: "drop", title: "Mangroves and marsh", text: p("Joe's Creek Management Area near Seminole covers about 300 acres of mangrove swamp, marsh and flatwoods draining to Boca Ciega Bay. The county lists raccoons there along with coyotes, armadillos and snakes.") },
    { icon: "home", title: "After a flood", text: p("Pinellas County's flood safety tips warn returning residents to watch for snakes, raccoons and possums that may have moved into an evacuated home looking for shelter.") },
    { icon: "critter", title: "Tortoise eggs on the menu", text: p("A UF/IFAS Extension agent in Pinellas notes that raccoons, like armadillos, can dig up gopher tortoise eggs. Eggs are one more reason not to leave food out that keeps raccoons close to a yard.") },
    { icon: "map-pin", title: "No feeding in county parks", text: p("Pinellas County park rules forbid feeding or disturbing wildlife, and the county's campground rules name raccoons outright. They also ban releasing any animal on park land.") },
  ],
  contactsHeading: "Pinellas contacts for sick, biting or indoor raccoons",
  contactsIntro: "Who to call in Pinellas when a raccoon is the problem, from the county's and the health department's own pages.",
  contacts: [
    { icon: "users", title: "Sick or injured raccoon", text: p("Pinellas County Animal Services, (727) 582-2600, option 4, offers pickup and transport help for sick or injured wildlife.") },
    { icon: "phone", title: "Bitten or scratched", text: p("Get medical care, then report it to DOH-Pinellas at 727-824-6932.") },
    { icon: "home", title: "A raccoon in the house", text: p("A private wildlife company. Call us at (844) 264-6254.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "Florida's trap, check and release rules, before you set a trap of your own." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Pinellas County raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Can feeding raccoons break county code in Pinellas County?",
      "Leaving food or garbage out so that it draws raccoons and creates a nuisance violates county code Sec. 14-30(4). DOH-Pinellas also asks residents not to feed wild animals, including by accident with outdoor pet food or open garbage cans.",
    ),
    faq(
      "Will Pinellas County Animal Services take a raccoon out of my attic?",
      "No. The county helps with sick or injured wildlife and points residents to FWC's list of trappers. A healthy raccoon in a house calls for a private wildlife company.",
    ),
    faq(
      "Can I trap a raccoon myself and let it go in a Pinellas park?",
      "No. County park rules ban releasing any animal on park land. Florida's own rules on trapping are changing, too:",
      TRAP_RULES_2026,
    ),
    faq(
      "Has rabies been found in Pinellas raccoons?",
      "Yes. The state confirmed one rabid raccoon in Pinellas County in 2025. Keep pets vaccinated, never handle a raccoon, and report any bite or scratch to DOH-Pinellas at 727-824-6932.",
    ),
    faq(
      "What's the wait for a raccoon visit in Pinellas County?",
      "Same-day raccoon appointments are often available in Pinellas County. Call (844) 264-6254.",
    ),
  ],
  ctaHeading: "Raccoon in your Pinellas home?",
  ctaText: "Got a raccoon denning in your Pinellas house? Call (844) 264-6254.",
  seo: {
    title: "Raccoon Removal in Pinellas County | Pro Wildlife Removal",
    description:
      "Raccoon removal in Pinellas County, FL: raccoons out of attics and soffits, young found first, entries fixed, and the county feeding rule. (844) 264-6254.",
  },
  sources: [
    { title: "Pinellas County: About Pinellas, facts (3,425 people per square mile, the most densely populated county in Florida)", url: "https://pinellas.gov/about-pinellas-facts/" },
    { title: "Pinellas County: Animal Services enforcement (Sec. 14-30(4): food or garbage that attracts cats, dogs, raccoons, coyotes or other wildlife is a public nuisance; FWC list of licensed trappers)", url: ENFORCE },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Pinellas: 1 raccoon; total 1)", url: DOH2025 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Pinellas: 1 bat; total 1)", url: DOH2024 },
    { title: "Pinellas County: Lake Seminole Park (258 acres of designated wildlife habitat and sanctuary; raccoons, alligators, hawks, eagles, turtles)", url: "https://pinellas.gov/parks/lake-seminole-park/" },
    { title: "Pinellas County: Joe's Creek Management Area (300 acres near Seminole; mangrove swamp, marsh, flatwoods; coyotes, raccoons, armadillos, marsh rabbits, snakes, gopher tortoises; Boca Ciega Bay)", url: "https://pinellas.gov/joes-creek-management-area/" },
    { title: "Pinellas County: Safety tips before, during and after a flood (watch for snakes, raccoons, possums that may have moved into an evacuated home)", url: FLOOD },
    { title: "UF/IFAS Extension Pinellas: Gopher Tortoise Day, April 10, 2025 (raccoons and armadillos can dig up tortoise eggs)", url: "https://blogs.ifas.ufl.edu/pinellasco/2025/04/10/gopher-tortoise-day-shell-a-brate-this-keystone-species/" },
    { title: "Pinellas County: Park rules, Code Ch. 90 (no feeding, disturbing or removing wildlife; no release or transplant of any animals)", url: "https://pinellas.gov/park-rules/" },
    { title: "Pinellas County: Camping information (prohibited: feeding wildlife, including birds, squirrels and raccoons)", url: "https://pinellas.gov/camping-information/" },
    { title: "Pinellas County: Injured or orphaned wildlife (Animal Services (727) 582-2600 option 4: wildlife pickup and transport assistance for sick or injured wildlife)", url: INJURED },
    { title: "DOH-Pinellas: Rabies safety, April 10, 2026 (don't feed wild animals, including with outdoor pet food or open garbage cans; report bites and scratches to 727-824-6932)", url: RABIES },
    TRAP_RULES_SOURCE,
  ],
  clientQuestions: ["A real Google review from a Pinellas County raccoon job (TTR-723), and real Pinellas raccoon job photos."],
});
