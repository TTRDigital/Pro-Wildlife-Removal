import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";
import { TRAP_RULES_SOURCE } from "../../notes.ts";

/*
 * Raccoon removal in Polk County (TTR-738, Owen). Local facts: Polk Sheriff's Office
 * rabies releases (2019 to 2024), DOH-Polk raccoon alerts (2023, 2024), DOH rabid
 * raccoon counts for Polk, and the PCSO Animal Services FAQ. Sourced below.
 */
const DOH = "https://www.floridahealth.gov/wp-content/uploads/";
const PCSO = "https://www.polksheriff.org/news-investigations/";
const ALERT_2024 = `${DOH}2025/07/alert-polk-4-5-2024.pdf`;
const ALERT_2023 = `${DOH}2025/07/alert-polk-8-4-2023.pdf`;

export const raccoonRemovalPolkCounty = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "polk-county-fl",
  placeName: "Polk County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-polk-county",
  heroText: "A raccoon in a Polk County attic, crawl space or garage? We get it out the way Florida allows, look for young before anything is closed, and repair the spot it used. Call (727) 594-7705.",
  answerHeading: "Who gets a raccoon out of a house in Polk County?",
  answer:
    "Polk County's Sheriff's Office says Animal Control won't take nuisance wildlife calls or collect trapped raccoons, so a raccoon in your attic or under the house is a job for a private company. Pro Wildlife Removal gets it out, checks for kits in spring, and closes the opening it used. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Rabid raccoons: Frostproof, Lakeland", "Kits mostly March and April"],
  localHeading: "What to know about raccoons in Polk County",
  localIntro: "These facts about raccoons in Polk come from the Sheriff's Office, the health department, FWC and UF/IFAS.",
  local: [
    { icon: "map-pin", title: "Maniac Lane, Frostproof, 2024", text: p("On April 3, 2024, a dog killed a raccoon it was fighting near Maniac Lane in Frostproof. The raccoon was rabid, Polk's second case that year, and DOH-Polk set a 60-day alert bounded by State Highway 630 West, Lake Clinch, Kelly Road and US 27.") },
    { icon: "map-pin", title: "Green Road, Lakeland, 2023", text: p("In July 2023 a raccoon in unincorporated Lakeland fought a family dog and would not let go until the owner shot it. It tested positive, and the alert that followed ran from West Socrum Loop Road south to Duff Road.") },
    { icon: "users", title: "A teen bitten in Davenport", text: p("In November 2019, a 15-year-old in Davenport's Providence neighborhood was bitten on the hand while trying to help a sick raccoon. The Sheriff's Office later counted 11 rabies cases in Polk that year, six of them raccoons.") },
    { icon: "critter", title: "Poyner Road, Polk City, 2021", text: p("Polk's first rabies case of 2021 was a raccoon that fought a dog on Poyner Road in Polk City. The dog was vaccinated and went into a 45-day home quarantine.") },
    { icon: "search", title: "Polk's rabid raccoon count", text: p("Polk's row in the state rabies tables listed one rabid raccoon for 2023, one for 2024 and none for 2022 or 2025. Raccoons are tested only after they may have exposed a person, pet, livestock or captive wildlife, so untested ones aren't counted.") },
    { icon: "home", title: "Pet food and open cans", text: p("DOH-Polk's 2024 raccoon alert, and its June 2026 alert, told residents not to feed or attract wild or stray animals with outdoor pet food, open garbage cans or other food.") },
    { icon: "drop", title: "Alerts limit moving them", text: p("FWC's nuisance wildlife rule says moving a trapped animal never overrides a county health department rabies alert or quarantine. Polk had raccoon rabies alerts in 2023 and 2024, so check for an active alert first.") },
  ],
  contactsIntro: "Who handles what when a raccoon is the problem in Polk, from the Sheriff's Office and DOH-Polk's own pages.",
  contacts: [
    { icon: "phone", title: "Bitten or scratched", text: p("See a doctor, then report it to DOH-Polk, 863-519-8300, option 4.") },
    { icon: "users", title: "A raccoon attacked a pet", text: p("PCSO Animal Control, 863-577-1762. It responds to wildlife bites and attacks on people or animals.") },
    { icon: "home", title: "A raccoon in the attic", text: p("A private wildlife company, since Animal Control doesn't take nuisance calls. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Trapping a raccoon yourself", href: "/blog/raccoon-trapping-florida/", text: "Trap checks, release sites and the rule changes coming Dec 31, 2026." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Polk County raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Will Polk County Animal Control pick up a raccoon I trapped?",
      "No. The Sheriff's Office FAQ says Animal Control doesn't respond to nuisance wildlife calls or remove trapped nuisance wildlife, and points residents to the trapper list on MyFWC.com.",
    ),
    faq(
      "Where can I release a raccoon trapped in Polk County?",
      "On the property where you caught it, or on 40 or more contiguous acres in Polk with the owner's written permission. Until Dec 31, 2026, a live-trapped animal must be released or put down within 24 hours. FWC's trapping rules page says the changes taking effect that day cut it to 12 hours for animals released, relocated or killed off site. An active rabies alert takes priority over moving one.",
    ),
    faq(
      "Is it illegal to feed raccoons in Polk County?",
      "Florida law bans putting out food or garbage in a way that attracts raccoons and creates a public nuisance. That FWC rule applies across the state, Polk included.",
    ),
    faq(
      "Have rabid raccoons been found in Polk County?",
      "Yes. A rabid raccoon near Frostproof in April 2024 and another in north Lakeland in 2023 each set off a 60-day DOH-Polk alert. Keep pets vaccinated and keep them away from raccoons.",
    ),
    faq(
      "When do raccoons have babies in Polk County?",
      "UF/IFAS says Florida raccoons usually give birth once a year, in March or April. So a raccoon in a Polk attic in spring may have young with it.",
    ),
    faq(
      "How soon can you come out for a raccoon in Polk County?",
      "Same-day appointments for raccoons are often available in Polk County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a raccoon call in Polk County]",
    ),
  ],
  ctaHeading: "Raccoon in your Polk County home?",
  ctaText: "Raccoon trouble anywhere in Polk County? Call (727) 594-7705.",
  seo: {
    title: "Raccoon Removal in Polk County, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in Polk County, FL: raccoons out of attics and crawl spaces in Lakeland, Winter Haven and Bartow, kits checked first. Call (727) 594-7705.",
  },
  sources: [
    { title: "Polk County Sheriff's Office: Polk County has second confirmed case of rabies in 2024 (April 8, 2024; dog fought a raccoon, Maniac Lane, Frostproof)", url: `${PCSO}polk-county-news/2024/04/08/polk-county-has-second-confirmed-case-of-rabies-in-2024` },
    { title: "DOH-Polk: Rabies alert, April 5, 2024 (rabid raccoon, West Frostproof, April 3; 60 days; SR 630, Lake Clinch, Kelly Road, US 27; don't attract with outdoor pet food or open garbage cans)", url: ALERT_2024 },
    { title: "Polk County Sheriff's Office: Polk County has third confirmed case of rabies in 2023 (Aug 1, 2023; Green Road, unincorporated Lakeland; raccoon would not let go of the dog)", url: `${PCSO}2023/08/01/polk-county-has-third-confirmed-case-of-rabies-in-2023` },
    { title: "DOH-Polk: Rabies alert, Aug 4, 2023 (rabid raccoon, north Lakeland; West Socrum Loop Road, Duff Road, US 98, Kathleen Road)", url: ALERT_2023 },
    { title: "Polk County Sheriff's Office: 15-year-old bitten by raccoon in the 10th case of rabies in 2019 (Nov 18, 2019; Providence, Davenport)", url: `${PCSO}polk-county-news/2019/11/18/15-year-old-bitten-by-raccoon-in-the-10th-case-of-rabies-confirmed-in-polk-county-in-2019` },
    { title: "Polk County Sheriff's Office: First case of rabies confirmed in Polk for 2020 (2019: 11 cases, five bats and six raccoons)", url: `${PCSO}2020/01/28/first-case-of-rabies-confirmed-in-polk-for-2020` },
    { title: "Polk County Sheriff's Office: First case of rabies confirmed in Polk County in 2021 (June 18, 2021; Poyner Road, Polk City; dog in 45-day home quarantine)", url: `${PCSO}2021/06/18/first-case-of-rabies-confirmed-in-polk-county-in-2021` },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Polk: 1 bat)", url: `${DOH}2025/07/rabies-cases-county-animal-2022.pdf` },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Polk: 2 bats, 1 raccoon)", url: `${DOH}2025/07/rabies-cases-county-animal-2023.pdf` },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Polk: 3 bats, 1 cat, 1 raccoon)", url: `${DOH}2025/07/rabies-cases-county-animal-2024.pdf` },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Polk: 1 cat)", url: `${DOH}2025/09/rabies-cases-county-animal-2025.pdf` },
    { title: "Florida DOH: 20-year animal rabies summary, 2003 to 2022 (testing only on suspect animals that potentially exposed a person, pet, livestock or captive wildlife)", url: `${DOH}2025/07/rabies-fla-20yr-table.pdf` },
    { title: "Polk County Sheriff's Office: Animal Services FAQ (responds to wildlife bites and attacks; no nuisance wildlife calls or trapped nuisance wildlife; trapper list at MyFWC.com)", url: "https://www.polksheriff.org/animal-services/frequently-asked-questions" },
    { title: "DOH-Polk: Rabies alert, north Lakeland (case June 11, 2026; report bites to 863-519-8300, option 4; PCSO Animal Control 863-577-1762; don't feed or attract wild or stray animals with outdoor pet food or open garbage cans)", url: `${DOH}2026/06/rabies-alert-polk-county-6-15-26.pdf` },
    { title: "Florida Administrative Code 68A-9.010, Taking nuisance wildlife (release or euthanize within 24 hours; same county, 40 contiguous acres, written permission; transport does not supersede a county rabies alert or quarantine)", url: "https://www.law.cornell.edu/regulations/florida/Fla-Admin-Code-Ann-R-68A-9-010" },
    TRAP_RULES_SOURCE,
    { title: "Florida Administrative Code 68A-4.001(3) (food or garbage that attracts coyotes, foxes or raccoons and creates a public nuisance is prohibited)", url: "https://www.law.cornell.edu/regulations/florida/Fla-Admin-Code-Ann-R-68A-4-001" },
    { title: "UF/IFAS EDIS WEC-34 (UW033): Northern raccoon (one litter a year, in Florida generally March and April)", url: "https://ask.ifas.ufl.edu/publication/UW033" },
  ],
  clientQuestions: ["Typical response time for a raccoon call in Polk County?", "A real Google review from a Polk County raccoon job (TTR-723), and real Polk raccoon job photos."],
});
