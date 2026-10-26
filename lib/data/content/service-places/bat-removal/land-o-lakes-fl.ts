import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Bat removal in Land O' Lakes (TTR-738, Nia). Every card is one true fact about
 * bats in Land O' Lakes or Pasco County: the 2014 Brazilian free-tailed bat colony
 * at Sunlake High School (WUFT, named as news), Pasco's rabies page and FWC rules.
 */
const WUFT = "https://www.wuft.org/news/2014/10/31/high-school-to-build-bat-houses-after-recent-infestation/";
const RABIES = "https://www.pascocountyfl.gov/services/animal_services/programs/rabies_awareness.php";
const FREETAIL = "https://myfwc.com/wildlifehabitats/profiles/mammals/bats/brazillian-free-tailed-bat/";
const SEASON = "https://myfwc.com/news/all-news/bat-maternity-0426/";
const FWC_BATS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/";

export const batRemovalLandOLakes = servicePlacePage({
  service: "bat-removal",
  animal: "Bat",
  animals: "Bats",
  place: "land-o-lakes-fl",
  placeName: "Land O' Lakes",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-land-o-lakes",
  county: "Pasco",
  order: 26,
  heroText: "Bats slipping into a Land O' Lakes roofline or soffit at dusk? We track down every entry, fit one-way exclusion doors in the legal season and seal the gaps once they're out. Call (727) 594-7705.",
  answerHeading: "How do you get bats out of a Land O' Lakes home?",
  answer:
    "The same way a Land O' Lakes high school did in 2014: one-way exclusion doors that let bats leave but not come back, fitted between August 15 and April 15. Bats can't legally be killed, poisoned or moved. Pro Wildlife Removal finds every opening, fits the doors and seals up afterward. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Exclusion Aug. 15 to April 15", "Sunlake High's bats, 2014"],
  localHeading: "What to know about bats in Land O' Lakes",
  localIntro: "Land O' Lakes has a well-documented bat case: a colony at Sunlake High School in 2014. Here is what happened, and what Pasco and FWC say about bats.",
  local: [
    { icon: "home", title: "Five roosts at one school", text: p("WUFT reported in October 2014 that Brazilian free-tailed bats had been at Sunlake High School in Land O' Lakes since the year before, roosting in five different spots around the campus.") },
    { icon: "search", title: "A rabid bat on campus", text: p("A few weeks before that report, one of the Sunlake bats was found dead, and it tested positive for rabies, WUFT said.") },
    { icon: "wrench", title: "Out through one-way doors", text: p("A contractor and FWC finished removing the Sunlake colony in October 2014 with bat excluders, one-way doors that let the bats out and keep them from returning to their roosts.") },
    { icon: "leaf", title: "Bat houses by the cypress swamp", text: p("Teachers and about 50 student volunteers planned two bat houses from 2-by-2-foot boxes, each box sized for roughly 200 to 300 bats, on poles 15 to 20 feet up behind a ball field and near a cypress swamp.") },
    { icon: "critter", title: "A bat that likes buildings", text: p("The Sunlake colony was Brazilian free-tailed bats, which FWC says live throughout Florida. FWC says in Florida they prefer to roost in buildings such as attics and sheds, plus bridges and bat houses.") },
    { icon: "phone", title: "Bat contact gets reported", text: p("Pasco County Animal Services, based in Land O' Lakes, says bare skin contact with a bat, or a bat found in a room where someone slept, should be reported to DOH-Pasco or the county.") },
  ],
  contactsIntro: "Who handles what when bats are the problem in Land O' Lakes, from each agency's own page.",
  contacts: [
    { icon: "phone", title: "Bitten, scratched or touched", text: p("DOH-Pasco, 352-521-1450, option 4.") },
    { icon: "map-pin", title: "Exclusion questions", text: p("FWC's Southwest Region office covers Pasco: 863-648-3200.") },
    { icon: "users", title: "Bats in your home", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "bats-in-attic", label: "Bats in the attic" },
  extraLink: { label: "Bat removal cost in Florida", href: "/blog/how-much-does-bat-removal-cost-in-florida/", text: "What changes the price of an exclusion: roof type, colony size, cleanup." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Land O' Lakes bat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "What kind of bats are in Land O' Lakes roofs?",
      "Often Brazilian free-tailed bats, the species found at Sunlake High in 2014. FWC says they favor attics, sheds and bridges in Florida, since the state's caves are probably too humid for them.",
    ),
    faq(
      "When can bats be excluded in Land O' Lakes?",
      "From August 15 to April 15. FWC's maternity season runs April 16 to August 14, when exclusion devices need a permit, and devices should stay up at least four nights with lows forecast at 50°F or above.",
    ),
    faq(
      "Will a bat house get bats out of my attic?",
      "Not on its own. Sunlake planned its bat houses alongside the exclusion, not instead of it, and FWC says a bat house is not a substitute for exclusion because bats rarely leave an occupied building by choice.",
    ),
    faq(
      "Is it legal to kill or poison bats in Pasco?",
      "No. FWC says killing bats is illegal under rule 68A-4.001, and using pesticides or poisons to harm, kill or deter bats is prohibited.",
    ),
    faq(
      "How soon can you come out for bats in Land O' Lakes?",
      "Same-day appointments for bats are often available in Land O' Lakes. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a bat call in Land O' Lakes]",
    ),
  ],
  ctaHeading: "Bats in your Land O' Lakes home?",
  ctaText: "Land O' Lakes bat calls go to (727) 594-7705.",
  seo: {
    title: "Bat Removal in Land O' Lakes, FL | Pro Wildlife Removal",
    description:
      "Bat removal in Land O' Lakes, FL: colonies let out with one-way doors in the legal season and roofs sealed, plus the 2014 Sunlake High bats and the rules.",
  },
  sources: [
    { title: "WUFT, Oct. 31, 2014: High school to build bat houses after recent infestation (Sunlake High School, Land O' Lakes; Brazilian free-tailed bats since the year before at five locations; one found dead with rabies; Ecologix and FWC finished removal in October with one-way bat excluders; two bat houses of 2-by-2-foot boxes, 200 to 300 bats each box, 15 to 20 feet up, behind a baseball field and near a cypress swamp; about 50 student volunteers)", url: WUFT },
    { title: "FWC: Brazilian free-tailed bat profile (found throughout Florida; in Florida prefers attics, sheds, bridges and bat houses; Florida's caves probably too humid)", url: FREETAIL },
    { title: "Pasco County: Animal Services (19640 Dogpatch Lane, Land O' Lakes)", url: "https://www.pascocountyfl.gov/services/animal_services/index.php" },
    { title: "Pasco County: Rabies awareness (report bare skin contact with a bat, or a bat in a room where someone slept, to DOH-Pasco or PCAS)", url: RABIES },
    { title: "FWC news release, April 6, 2026 (maternity season April 16 to Aug. 14; exclusion devices legal Aug. 15 to April 15; four nights; 50°F)", url: SEASON },
    { title: "FWC: Bats (illegal to kill, 68A-4.001; pesticides or poisons prohibited; a bat house is not a substitute for exclusion)", url: FWC_BATS },
    { title: "FWC: Bats in buildings (poison, relocation and fumigants illegal)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/" },
    { title: "DOH-Pasco: Rabies advisory, July 30, 2026 (report bites and scratches, 352-521-1450, option 4)", url: "https://pasco.floridahealth.gov/2026/07/30/doh-pasco-issues-rabies-advisory/" },
    { title: "FWC: Regional offices (Southwest Region, 863-648-3200, includes Pasco)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Typical response time for a bat call in Land O' Lakes?", "A real Google review from a Land O' Lakes bat job (TTR-723), and real Land O' Lakes bat job photos."],
});
