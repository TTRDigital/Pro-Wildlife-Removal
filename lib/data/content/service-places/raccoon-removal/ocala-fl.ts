import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Raccoon removal in Ocala (TTR-738, Nia). Every card is one true fact about
 * raccoons in Ocala or Marion County: DOH-Marion's 2024-2026 rabies alerts and
 * advisories (each dated) and the state's 2022-2025 county rabies tables.
 */
const A2024 = "https://marion.floridahealth.gov/2024/05/03/doh-marion-issues-rabies-alert/";
const A2025OCT = "https://marion.floridahealth.gov/2025/10/09/doh-marion-issues-rabies-alert-6/";
const A2025NOV = "https://marion.floridahealth.gov/2025/11/20/doh-marion-issues-rabies-alert-7/";
const A2025DEC = "https://marion.floridahealth.gov/2025/12/09/doh-marion-issues-rabies-alert-10/";
const A2026 = "https://marion.floridahealth.gov/2026/05/14/doh-marion-issues-rabies-alert-11/";
const RELOCATE = "https://myfwc.com/conservation/you-conserve/wildlife/relocate/";

export const raccoonRemovalOcala = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "ocala-fl",
  placeName: "Ocala",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-ocala-fl",
  county: "Marion",
  order: 93,
  heroText: "A raccoon in an Ocala attic, under the deck or in the garbage every night? We get it out, check for young first, then seal the way in. Call (844) 264-6254.",
  answerHeading: "Who removes raccoons from Ocala homes?",
  answer:
    "A private wildlife company. DOH-Marion's alerts point Ocala residents to Marion County Animal Services for strays and bitten pets and to the health department for bites; neither is named for a raccoon in the attic. Pro Wildlife Removal gets the raccoon out of an Ocala home, checks for young and seals the opening. Call (844) 264-6254.",
  points: ["Call (844) 264-6254", "Three Ocala-area raccoon alerts since 2024", "Never handle a raccoon"],
  localHeading: "What to know about raccoons in Ocala",
  localIntro: "Rabid raccoons have set off three DOH-Marion alerts in and around Ocala since 2024, and more across the county. Here is what the records show.",
  local: [
    { icon: "critter", title: "Southwest of Ocala, spring 2024", text: p("Two raccoons captured on April 26, 2024 tested positive for rabies, and DOH-Marion answered on May 3 with a 60-day alert for two separate zones: the southwest Ocala area, between SW 80th and SW 110th Avenue, and Rainbow Lakes Estates, near Dunnellon.") },
    { icon: "map-pin", title: "East of downtown, December 2025", text: p("A raccoon killed on December 7, 2025 led to a 60-day DOH-Marion alert whose zone ran from NE 2nd Street south to SE 31st Street, between SE 9th Avenue and SE 36th Avenue.") },
    { icon: "search", title: "Off SE 8th Street, May 2026", text: p("DOH-Marion issued an Ocala raccoon alert on May 14, 2026, three days after a rabid raccoon was killed off SE 8th Street. It covered 60 days, inside NE 8th Street, SE 22nd Road, SE 22nd Loop and SW 4th Avenue.") },
    { icon: "leaf", title: "Meadow Wood Farms, November 2025", text: p("West of the city, a raccoon killed in the Meadow Wood Farms area on November 18, 2025 tested positive. Its alert zone ran from NW 35th Street to West Highway 328.") },
    { icon: "home", title: "Anthony, October 2025", text: p("North of Ocala, DOH-Marion put the Anthony area under a 60-day alert after a raccoon killed off NE 70 Street on October 5, 2025 tested positive.") },
    { icon: "drop", title: "Raccoons on Marion's tables", text: p("Raccoons were the majority of Marion's confirmed rabies cases on the state's tables: 2 of 3 in 2022, 4 of 5 in 2023, 7 of 10 in 2024 and 6 of 9 in 2025.") },
    { icon: "phone", title: "Four raccoon notices in 2026", text: p("Four of DOH-Marion's 2026 rabies notices so far followed rabid raccoons: in the Belleview area in February, Huntington in March, Ocala in May and Reddick in July.") },
  ],
  contactsIntro: "Who handles what when a raccoon is the problem in Ocala. The first two come from DOH-Marion's alerts.",
  contacts: [
    { icon: "phone", title: "Bitten or scratched", text: p("Get medical care, then report it to DOH-Marion at 352-629-0137.") },
    { icon: "home", title: "A pet bitten, or a stray", text: p("Marion County Animal Services, 352-671-8727.") },
    { icon: "users", title: "A raccoon in the house", text: p("A private wildlife company. Call us at (844) 264-6254.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "What Florida law lets a homeowner do with a trapped raccoon, and what it doesn't." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from an Ocala raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Has rabies been found in Ocala raccoons?",
      "Yes, several times. DOH-Marion issued Ocala-area raccoon alerts in May 2024, December 2025 and May 2026. Keep pets' rabies shots current, and don't touch a raccoon even if it looks healthy.",
    ),
    faq(
      "What do DOH-Marion's alerts ask Ocala residents to do?",
      "Avoid contact with wild or stray animals and don't attract them with outdoor pet food or open garbage cans. If an animal bites your pet, get it to a vet and call Animal Services at 352-671-8727.",
    ),
    faq(
      "Can I trap a raccoon and drive it out of town?",
      "Not freely. FWC says a trapped nuisance raccoon must be released or euthanized within 24 hours. It can only be moved and released within the county of capture, on at least 40 contiguous acres, with the landowner's written permission, and only if the move doesn't violate a rabies alert or area quarantine from the county health department or animal services.",
    ),
    faq(
      "How long does an Ocala rabies alert last?",
      "DOH-Marion's rabies alerts run 60 days inside set boundaries. For some single cases it issues an advisory instead, as it did for the Belleview area and Reddick in 2026.",
    ),
    faq(
      "How fast can you respond to an Ocala raccoon call?",
      "Same-day appointments for raccoons are often available in Ocala. Call (844) 264-6254.",
    ),
  ],
  ctaHeading: "Raccoon in your Ocala home?",
  ctaText: "Raccoon in an Ocala attic or shed? Call (844) 264-6254.",
  seo: {
    title: "Raccoon Removal in Ocala, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in Ocala, FL: raccoons out of attics and crawl spaces, young checked first and entry points sealed, plus Ocala's recent rabies alerts.",
  },
  sources: [
    { title: "DOH-Marion: Rabies alert, May 3, 2024 (two raccoons captured April 26, 2024; Rainbow Lakes Estates and southwest Ocala areas; 60 days; two sets of boundaries: SW 52nd St. to SW 80th St., SW 80th Ave. to SW 110th Ave.; and Pine Bluffs Blvd. to Tiger Lake Blvd./SW 59th Lane, Bluegill Road to Persimmon Lane)", url: A2024 },
    { title: "DOH-Marion: Rabies alert, Dec. 9, 2025 (raccoon killed Dec. 7, 2025; 60 days; NE 2nd St. north, SE 31st St. south, SE 36th Ave. east, SE 9th Ave. west)", url: A2025DEC },
    { title: "DOH-Marion: Rabies alert, May 14, 2026 (raccoon killed off SE 8th St., Ocala area, May 11, 2026; 60 days; NE 8th St., SE 22nd Road, SE 22nd Loop, SW 4th Ave.; DOH-Marion 352-629-0137; Animal Services 352-671-8727; outdoor pet food and open garbage cans)", url: A2026 },
    { title: "DOH-Marion: Rabies alert, Nov. 20, 2025 (raccoon killed Nov. 18, 2025, Meadow Wood Farms area; 60 days; NW 35th St. north, West Hwy 328 south, NW 120th Ave. east, NW 150th Ave. west)", url: A2025NOV },
    { title: "DOH-Marion: Rabies alert, Oct. 9, 2025 (raccoon killed Oct. 5, 2025, Anthony area off NE 70 Street; 60 days)", url: A2025OCT },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Marion: 2 raccoons, 1 bat)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2022.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Marion: 4 raccoons, 1 other; total 5)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2023.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Marion: 7 raccoons, 3 cats; total 10)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Marion: 6 raccoons, 1 cat, 1 coyote, 1 fox; total 9)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
    { title: "DOH-Marion: Rabies advisory, March 2, 2026 (raccoon, Belleview area, Feb. 24, 2026)", url: "https://marion.floridahealth.gov/2026/03/02/doh-marion-issues-rabies-advisory-2/" },
    { title: "Florida DOH: DOH-Marion rabies advisory, March 25, 2026 (raccoon, Huntington area off State Highway 35, March 20, 2026)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/04/rabies-advisory-marion-3-25-2026.pdf" },
    { title: "DOH-Marion: Rabies advisory, July 31, 2026 (raccoon, Reddick, off U.S. Route 441 and West Highway 316, July 26)", url: "https://marion.floridahealth.gov/2026/07/31/doh-marion-issues-rabies-advisory-3/" },
    { title: "FWC: Relocating nuisance wildlife (released or euthanized within 24 hours; off-site release only within the county of capture, 40+ contiguous acres, written permission of the owner, and no violation of a rabies alert or area quarantine)", url: RELOCATE },
  ],
  clientQuestions: ["A real Google review from an Ocala raccoon job (TTR-723), and real Ocala raccoon job photos."],
});
