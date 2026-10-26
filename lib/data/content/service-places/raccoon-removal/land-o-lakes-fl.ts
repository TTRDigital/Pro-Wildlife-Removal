import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Raccoon removal in Land O' Lakes (TTR-738, Nia). Every card is one true fact
 * about raccoons in Land O' Lakes or Pasco County: the 2014 Land O' Lakes rabies
 * alert (Bay News 9, named as news), Pasco's rabies record and 2026 notices,
 * the county hen ordinance and FWC's release rule for the area's preserves.
 */
const BN9 = "https://baynews9.com/fl/tampa/news/2014/11/5/rabies_alert_issued_";
const RABIES = "https://www.pascocountyfl.gov/services/animal_services/programs/rabies_awareness.php";
const JULY = "https://pasco.floridahealth.gov/2026/07/30/doh-pasco-issues-rabies-advisory/";
const HENS = "https://www.pascocountyfl.gov/services/code_compliance/backyard_chicken_ordinance.php";
const RELOCATE = "https://myfwc.com/conservation/you-conserve/wildlife/relocate/";

export const raccoonRemovalLandOLakes = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "land-o-lakes-fl",
  placeName: "Land O' Lakes",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-land-o-lakes",
  county: "Pasco",
  order: 28,
  heroText: "A raccoon in a Land O' Lakes attic, under the lanai or after the backyard hens? We get it out, check for young first and fix the spot it came in. Call (727) 594-7705.",
  answerHeading: "Who handles raccoons in Land O' Lakes homes?",
  answer:
    "A private wildlife company. Pasco County Animal Services is headquartered in Land O' Lakes, but its emergency service covers stray pets and dangerous animals, not raccoons living in homes. Pro Wildlife Removal takes raccoons out of Land O' Lakes attics and crawl spaces, checks for young and repairs the entry. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Rabies alert here in 2014", "Hen coops must be secure"],
  localHeading: "What to know about raccoons in Land O' Lakes",
  localIntro: "Land O' Lakes has had a rabid raccoon attack a family dog, and Pasco's rabies records keep pointing at raccoons. Here are the local facts and rules.",
  local: [
    { icon: "critter", title: "A rabid raccoon and a family dog", text: p("In November 2014, Bay News 9 reported that Pasco officials issued a 60-day rabies alert in Land O' Lakes after a raccoon that attacked a vaccinated family dog tested positive.") },
    { icon: "map-pin", title: "The 2014 alert area", text: p("The alert ran from Marchmont Boulevard east to U.S. 41, and from Falling Rock Drive and Lake Vienna Drive north to Mitchelle Lane and Champions Avenue.") },
    { icon: "search", title: "Most of Pasco's rabid animals", text: p("From 2013 to 2023, 17 of the 24 rabid animals Pasco County recorded were raccoons, the county's rabies awareness page says.") },
    { icon: "phone", title: "Two more in 2026", text: p("DOH-Pasco issued a rabies advisory on July 30, 2026, after two raccoons on the east side of the county tested positive, and asked residents not to draw wildlife in with pet food or open garbage.") },
    { icon: "home", title: "Backyard hens need a secure coop", text: p("Since November 2025, Pasco lets most homeowners keep up to four hens, with a covered, predator-secure coop and feed in predator-proof containers. UF/IFAS notes that poultry in pens are among the raccoon's prey.") },
    { icon: "leaf", title: "The state tables", text: p("The state's 2024 table listed one rabid raccoon for Pasco; its 2025 table listed none.") },
  ],
  contactsIntro: "Who handles what when a raccoon is the problem in Land O' Lakes, from the county's and agencies' own pages.",
  contacts: [
    { icon: "phone", title: "Bitten or scratched", text: p("Wash it, see a doctor and report it to DOH-Pasco: 352-521-1450, option 4.") },
    { icon: "users", title: "A raccoon bit your dog", text: p("Get the dog to a vet, then call Pasco County Animal Services at 813-929-1212.") },
    { icon: "home", title: "A raccoon in your home", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "Florida's do-it-yourself trapping rules, including what changes on December 31, 2026." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Land O' Lakes raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Has there been a rabid raccoon in Land O' Lakes?",
      "Yes. In November 2014, a raccoon that attacked a vaccinated family dog tested positive, and Pasco officials put part of Land O' Lakes under a 60-day rabies alert, Bay News 9 reported.",
    ),
    faq(
      "Can I let a trapped raccoon go at Conner Preserve?",
      "No, not without the land manager's written permission. FWC allows a release only on your own land, or on 40 or more contiguous acres in Pasco with the owner's written permission.",
    ),
    faq(
      "Do I need to protect my backyard hens from raccoons?",
      "Pasco's hen ordinance already requires a covered, predator-secure coop and predator-proof feed containers. Shut the hens in before dark, since FWC says raccoons are active from late afternoon through the night.",
    ),
    faq(
      "Does Pasco Animal Services take raccoons out of houses?",
      "No. Its emergency service covers seriously injured stray pets and loose aggressive animals. For a raccoon living in your home, call a private wildlife company.",
    ),
    faq(
      "How soon can you come out for a raccoon in Land O' Lakes?",
      "Same-day appointments for raccoons are often available in Land O' Lakes. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a raccoon call in Land O' Lakes]",
    ),
  ],
  ctaHeading: "Raccoon in your Land O' Lakes home?",
  ctaText: "Land O' Lakes raccoon calls go to (727) 594-7705.",
  seo: {
    title: "Raccoon Removal in Land O' Lakes, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in Land O' Lakes, FL: raccoons out of attics and crawl spaces, young checked first, entry fixed, plus rabies history and hen coop rules.",
  },
  sources: [
    { title: "Bay News 9, Nov. 5, 2014: Rabies alert issued (Land O' Lakes; raccoon that attacked a vaccinated family dog tested positive; 60 days; U.S. 41, Falling Rock Drive and Lake Vienna Drive, Marchmont Boulevard, Mitchelle Lane and Champions Avenue)", url: BN9 },
    { title: "Pasco County: Rabies awareness (24 positive animals 2013-2023: 17 raccoons, 6 cats, 1 bat)", url: RABIES },
    { title: "DOH-Pasco: Rabies advisory, July 30, 2026 (two rabid raccoons, east side of Pasco County; don't attract animals with pet food or open garbage; 352-521-1450, option 4)", url: JULY },
    { title: "Pasco County: Backyard chicken ordinance (November 2025; up to four hens; coops covered and predator-secure; feed in rodent- and predator-proof containers)", url: HENS },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Pasco: 1 raccoon)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Pasco: none)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
    { title: "SWFWMD: Conner Preserve (3,486 acres; 22500 SR 52, Land O' Lakes)", url: "https://www.swfwmd.state.fl.us/recreation/conner-preserve" },
    { title: "FWC: Relocating nuisance wildlife (own property or 40+ contiguous acres in the county with written permission; public land needs the land manager's written permission)", url: RELOCATE },
    { title: "Pasco County: Animal Services (19640 Dogpatch Lane, Land O' Lakes; 813-929-1212; after-hours emergencies: seriously injured domestic strays, loose aggressive animals)", url: "https://www.pascocountyfl.gov/services/animal_services/index.php" },
    { title: "UF/IFAS EDIS WEC-34 (UW033): Northern raccoon (poultry in pens have fallen prey to raccoons)", url: "https://ask.ifas.ufl.edu/publication/UW033" },
    { title: "FWC: Raccoon profile (active late afternoon through the night)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/raccoon/" },
  ],
  clientQuestions: ["Typical response time for a raccoon call in Land O' Lakes?", "A real Google review from a Land O' Lakes raccoon job (TTR-723), and real Land O' Lakes raccoon job photos."],
});
