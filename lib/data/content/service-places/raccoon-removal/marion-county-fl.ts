import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Raccoon removal in Marion County (TTR-738, Nia). Every card is one true fact
 * about raccoons in Marion: the state's 2022-2025 rabies tables, DOH-Marion's
 * 2023-2026 notices (each dated), and the Silver Springs and Rainbow Springs
 * management plans, which document raccoons.
 */
const WFTV = "https://www.wftv.com/news/local/rabies-alert-3-raccoons-test-positive-marion-county/R44CSNWUMVDI7EZUDAD43JY2LI/";
const BELLEVIEW = "https://marion.floridahealth.gov/2026/03/02/doh-marion-issues-rabies-advisory-2/";
const HUNTINGTON = "https://www.floridahealth.gov/wp-content/uploads/2026/04/rabies-advisory-marion-3-25-2026.pdf";
const REDDICK = "https://marion.floridahealth.gov/2026/07/31/doh-marion-issues-rabies-advisory-3/";
const SSSP = "https://floridadep.gov/sites/default/files/SilverSprings_2014_ApprovedPlan%26Amendment.pdf";
const RSAP = "https://floridadep.gov/sites/default/files/Rainbow-Springs-AP-Management-Plan.pdf";
const RELOCATE = "https://myfwc.com/conservation/you-conserve/wildlife/relocate/";

export const raccoonRemovalMarionCounty = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "marion-county-fl",
  placeName: "Marion County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-marion-county-fl",
  order: 95,
  heroText: "A raccoon in a Marion County attic, barn or feed room, or into the garbage every night? We get it out, check for young before anything is sealed and repair the way in. Call (727) 594-7705.",
  answerHeading: "Who removes raccoons from homes in Marion County?",
  answer:
    "A private wildlife company. Marion County Animal Services handles strays and bites to pets, and DOH-Marion handles human bites, but a raccoon living in a Marion home or barn is the owner's to have removed. Pro Wildlife Removal takes it out, checks for young and repairs the opening. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Raccoon rabies notices every year", "Ocala to Reddick to Belleview"],
  localHeading: "What to know about raccoons in Marion County",
  localIntro: "Raccoons turn up again and again in Marion's rabies notices, from Fellowship and Blitchton to Belleview and Reddick. Here is what DOH-Marion and the state's records show.",
  local: [
    { icon: "critter", title: "Year by year on the tables", text: p("Marion's rabies tables counted 2 rabid raccoons in 2022, 4 in 2023, 7 in 2024 and 6 in 2025, ahead of every other animal each year.") },
    { icon: "map-pin", title: "Three zones in one week, 2023", text: p("In July 2023, after three raccoons tested positive in a single week, DOH-Marion named alert areas in Silver Springs, the Fellowship area and the Blitchton area, WFTV reported.") },
    { icon: "search", title: "Belleview, February 2026", text: p("A raccoon killed in the southeast of the county, off U.S. 441 and SE 132nd Street Road near Belleview, on February 24, 2026, prompted a DOH-Marion rabies advisory.") },
    { icon: "leaf", title: "Huntington, March 2026", text: p("DOH-Marion counted a raccoon that died off State Highway 35 in the Huntington area on March 20, 2026 as the county's second confirmed rabies case of the year.") },
    { icon: "phone", title: "Reddick, July 2026", text: p("North of Ocala, a raccoon killed off U.S. Route 441 and West Highway 316 in Reddick on July 26, 2026 tested positive, and DOH-Marion issued an advisory on July 31.") },
    { icon: "home", title: "Nuisance cases at Silver Springs", text: p("Silver Springs State Park's 2014 management plan names raccoons among the native animals from which nuisance cases may arise in the park.") },
    { icon: "drop", title: "Documented on the Rainbow River", text: p("The 2016 management plan for the Rainbow Springs Aquatic Preserve, in southwest Marion, lists the raccoon among the species documented in and around the preserve.") },
  ],
  contactsIntro: "Who handles what when a raccoon is the problem in Marion County, from DOH-Marion's notices.",
  contacts: [
    { icon: "phone", title: "Bitten or scratched", text: p("See a doctor, then report it to DOH-Marion at 352-629-0137.") },
    { icon: "home", title: "Pets, livestock and strays", text: p("Marion County Animal Services, 352-671-8727.") },
    { icon: "users", title: "A raccoon in the house or barn", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "Florida's rules for a raccoon once it's trapped, from release sites to rabies alerts." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Marion County raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "How common is raccoon rabies in Marion County?",
      "It turns up every year. Marion's tables counted rabid raccoons in each year from 2022 to 2025, and DOH-Marion's 2026 notices named raccoon cases near Belleview, Huntington, Ocala and Reddick.",
    ),
    faq(
      "What should I do to protect my animals?",
      "DOH-Marion asks owners to vaccinate pets and livestock on their vet's schedule, supervise pets and secure livestock. If a wild animal bites one, get it veterinary care and call Animal Services at 352-671-8727.",
    ),
    faq(
      "Can I move a trapped raccoon to the Ocala National Forest?",
      "Not without written permission. FWC says public land can't be a release site without the land manager's written permission. Otherwise the raccoon goes back on your property or 40 or more contiguous acres in the county with the owner's permission.",
    ),
    faq(
      "Why do my garbage cans draw raccoons?",
      "Open garbage cans and outdoor pet food are easy meals. DOH-Marion's notices ask residents not to attract wildlife with either.",
    ),
    faq(
      "How soon can you come out for a raccoon in Marion County?",
      "Same-day appointments for raccoons are often available in Marion County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a raccoon call in Marion County]",
    ),
  ],
  ctaHeading: "Raccoon in your Marion County home?",
  ctaText: "For raccoons anywhere in Marion, call (727) 594-7705.",
  seo: {
    title: "Raccoon Removal in Marion County, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in Marion County, FL: raccoons out of homes and barns, young checked first and entry points repaired, plus DOH-Marion's rabies notices.",
  },
  sources: [
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Marion: 2 raccoons, 1 bat)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2022.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Marion: 4 raccoons, 1 other)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2023.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Marion: 7 raccoons, 3 cats)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Marion: 6 raccoons, 1 cat, 1 coyote, 1 fox)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
    { title: "WFTV, July 14, 2023: Rabies alert, three raccoons test positive in Marion County (Silver Springs, Fellowship area and Blitchton area zones)", url: WFTV },
    { title: "DOH-Marion: Rabies advisory, March 2, 2026 (raccoon killed off U.S. Route 441 and SE 132 St. Rd., Belleview area, southeast Marion, Feb. 24, 2026; vaccinate pets and livestock; outdoor pet food, open garbage cans; Animal Services 352-671-8727; DOH-Marion 352-629-0137)", url: BELLEVIEW },
    { title: "Florida DOH: DOH-Marion rabies advisory, March 25, 2026 (second confirmed case of 2026; raccoon died in the Huntington area off State Highway 35, March 20, 2026)", url: HUNTINGTON },
    { title: "DOH-Marion: Rabies advisory, July 31, 2026 (raccoon killed off U.S. Route 441 and West Highway 316 in Reddick, July 26)", url: REDDICK },
    { title: "DOH-Marion: Rabies alert, May 14, 2026 (raccoon, Ocala area off SE 8th St.)", url: "https://marion.floridahealth.gov/2026/05/14/doh-marion-issues-rabies-alert-11/" },
    { title: "Florida DEP: Silver Springs State Park Unit Management Plan Amendment, Dec. 17, 2014 (nuisance cases may arise from raccoons)", url: SSSP },
    { title: "Florida DEP: Rainbow Springs Aquatic Preserve Management Plan, June 2016 (southwest Marion County; raccoon among documented species)", url: RSAP },
    { title: "FWC: Relocating nuisance wildlife (own property or 40+ contiguous acres in the county with written permission; publicly owned lands need the land manager's written permission)", url: RELOCATE },
  ],
  clientQuestions: ["Typical response time for a raccoon call in Marion County?", "A real Google review from a Marion County raccoon job (TTR-723), and real Marion raccoon job photos."],
});
