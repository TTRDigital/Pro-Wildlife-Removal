import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Raccoon removal in Pasco County (TTR-738, Nia). Every card is one true fact
 * about raccoons in Pasco: the county's rabies record, DOH-Pasco's 2026 alerts,
 * the county hen ordinance and FWC's release and feeding rules as they apply here.
 */
const RABIES = "https://www.pascocountyfl.gov/services/animal_services/programs/rabies_awareness.php";
const DOH2024 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf";
const FEB = "https://www.floridahealth.gov/wp-content/uploads/2026/02/alert-pascoe-02-05-26.pdf";
const JULY = "https://pasco.floridahealth.gov/2026/07/30/doh-pasco-issues-rabies-advisory/";
const RELOCATE = "https://myfwc.com/conservation/you-conserve/wildlife/relocate/";
const HENS = "https://www.pascocountyfl.gov/services/code_compliance/backyard_chicken_ordinance.php";

export const raccoonRemovalPascoCounty = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "pasco-county-fl",
  placeName: "Pasco County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-in-pasco-county-fl",
  order: 22,
  heroText: "Thumping overhead, a torn soffit or a raccoon raiding the hen house? We get raccoons out of Pasco homes, check for young and close the way in. Call (844) 264-6254.",
  answerHeading: "Who handles a raccoon in a Pasco County home?",
  answer:
    "Pasco County Animal Services' emergency service covers seriously injured stray pets and aggressive animals that threaten public safety, so a raccoon living in your attic or under your house calls for a private wildlife company. Pro Wildlife Removal gets it out, checks for babies first and seals the opening. Call (844) 264-6254.",
  points: ["Call (844) 264-6254", "A rabies alert and advisory in 2026", "Young often in spring"],
  localHeading: "Pasco raccoon facts: rabies cases, coops and parks",
  localIntro: "Raccoons lead Pasco's rabies records. These are the local facts and rules that matter before one is trapped or moved.",
  local: [
    { icon: "critter", title: "17 of Pasco's 24 rabies cases", text: p("From 2013 to 2023, Pasco County recorded 24 animals with rabies, and 17 of them were raccoons.") },
    { icon: "search", title: "The only case of 2024", text: p("The state's 2024 table lists a single confirmed rabid animal for Pasco County, and it was a raccoon. The 2025 table lists none for the county.") },
    { icon: "map-pin", title: "Zephyrhills alert, early 2026", text: p("A raccoon killed off Alston Avenue in the Zephyrhills area on January 30, 2026 tested positive for rabies. DOH-Pasco put a 60-day alert on the area between South Avenue, Tucker Road, Gall Boulevard and the Zephyrhills Airport.") },
    { icon: "phone", title: "Two more that summer", text: p("On July 30, 2026, DOH-Pasco issued a rabies advisory after two more raccoons tested positive on the east side of the county, and asked residents not to attract wildlife with pet food or open garbage.") },
    { icon: "home", title: "Hen coops must hold up", text: p("Pasco's November 2025 ordinance lets most homeowners keep up to four hens, but the coop must be covered and predator-secure and the feed kept in predator-proof containers. UF/IFAS lists poultry in pens among the animals raccoons prey on.") },
    { icon: "leaf", title: "No release in county parks", text: p("FWC says a trapped raccoon can only be released on the owner's land or on 40 or more contiguous acres in Pasco with written permission. County and state parks are off limits without the land manager's written OK.") },
    { icon: "drop", title: "Alerts limit moving them", text: p("FWC also says moving trapped wildlife must not break a rabies alert or quarantine set by the county health department, a real limit in a county that had two raccoon rabies notices in 2026.") },
  ],
  contactsHeading: "Pasco contacts for raccoon bites and bitten pets",
  contactsIntro: "Pasco raccoon calls split between DOH-Pasco, county Animal Services and a private company, per each one's own page.",
  contacts: [
    { icon: "phone", title: "Bitten or scratched", text: p("Get medical care, then report it to DOH-Pasco: 352-521-1450, option 4.") },
    { icon: "users", title: "A raccoon bit your pet", text: p("Take the pet to a vet, then call Pasco County Animal Services at 813-929-1212, as DOH-Pasco asks.") },
    { icon: "home", title: "A raccoon in the house", text: p("A private wildlife company. Call us at (844) 264-6254.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "The trap, check and release rules if you're weighing a do-it-yourself trap." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Pasco County raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Is there a rabies alert in Pasco County right now?",
      "Check DOH-Pasco before you act. The health department issued a raccoon rabies alert for the Zephyrhills area in February 2026 and an advisory for east Pasco on July 30, 2026. Either way, never handle a raccoon.",
    ),
    faq(
      "Can I trap a raccoon and drop it at Starkey or Withlacoochee?",
      "No. FWC doesn't allow releases on county, state or federal park land without the land manager's written permission. The legal options are your own property or 40-plus acres in Pasco with the owner's written permission.",
    ),
    faq(
      "A raccoon keeps hitting my hen coop. What does Pasco require?",
      "The county's hen ordinance requires a covered, predator-secure coop and feed in predator-proof containers. If a raccoon is denning on your property, we can remove it and help you find the weak spots.",
    ),
    faq(
      "Does Pasco County Animal Services take raccoons?",
      "Its emergency service is for seriously injured domestic strays and aggressive animals that threaten public safety. A raccoon living in an attic or under a house needs a private wildlife company.",
    ),
    faq(
      "Can you take a Pasco County raccoon call today?",
      "Same-day appointments for raccoons are often available in Pasco County. Call (844) 264-6254.",
    ),
  ],
  ctaHeading: "Raccoon in your Pasco County home?",
  ctaText: "Raccoons getting into a Pasco home? Call (844) 264-6254.",
  seo: {
    title: "Raccoon Removal in Pasco County, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in Pasco County, FL: raccoons out of attics and crawl spaces, young found first, entry sealed, plus Pasco's 2026 rabies alerts and rules.",
  },
  sources: [
    { title: "Pasco County: Rabies awareness (24 positive animals 2013-2023: 17 raccoons, 6 cats, 1 bat; avoid feeding or touching wildlife)", url: RABIES },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Pasco: 1 raccoon, total 1)", url: DOH2024 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Pasco: none)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
    { title: "Florida DOH: DOH-Pasco rabies alert, Feb. 6, 2026 (raccoon killed off Alston Ave, Zephyrhills area, Jan. 30, 2026; 60 days; South Ave, Tucker Road, Zephyrhills Airport, Gall Blvd; don't attract wildlife with outdoor pet food or open garbage cans; 352-521-1450 option 4; Animal Services 813-929-1212)", url: FEB },
    { title: "DOH-Pasco: Rabies advisory, July 30, 2026 (two rabid raccoons, east side of Pasco County; don't attract animals with pet food or open garbage)", url: JULY },
    { title: "Pasco County: Backyard chicken ordinance (November 2025; up to four hens; coops covered, ventilated and predator-secure; feed in rodent- and predator-proof containers)", url: HENS },
    { title: "FWC: Relocating nuisance wildlife (own property, or 40+ contiguous acres in the county of capture with written permission; must not violate a county rabies alert or quarantine; public parks need the land manager's written permission)", url: RELOCATE },
    { title: "UF/IFAS EDIS WEC-34 (UW033): Northern raccoon (births in Florida generally March and April; poultry in pens have fallen prey; raid pet food bowls and unsecured garbage cans)", url: "https://ask.ifas.ufl.edu/publication/UW033" },
    { title: "Pasco County: Animal Services (after-hours emergencies: seriously injured domestic strays, unconfined aggressive animals posing an immediate threat to public safety)", url: "https://www.pascocountyfl.gov/services/animal_services/index.php" },
  ],
  clientQuestions: ["A real Google review from a Pasco County raccoon job (TTR-723), and real Pasco raccoon job photos."],
});
