import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Bat removal in Pasco County (TTR-738, Nia). Every card is one true fact about
 * bats in Pasco: county and DOH rabies records, two documented Pasco bat
 * colonies (news reports, named as such), and FWC rules and species pages.
 */
const RABIES = "https://www.pascocountyfl.gov/services/animal_services/programs/rabies_awareness.php";
const DOH2024 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf";
const DOH2025 = "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf";
const FEB = "https://www.floridahealth.gov/wp-content/uploads/2026/02/alert-pascoe-02-05-26.pdf";
const FWC_BATS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/";
const SEASON = "https://myfwc.com/news/all-news/bat-maternity-0426/";

export const batRemovalPascoCounty = servicePlacePage({
  service: "bat-removal",
  animal: "Bat",
  animals: "Bats",
  place: "pasco-county-fl",
  placeName: "Pasco County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-in-pasco-county-fl",
  order: 21,
  heroText: "Bats pouring out of a Pasco roofline at dusk? We find every gap they use, fit one-way doors in the legal season and seal the roof once they're out. Call (727) 594-7705.",
  answerHeading: "How are bats removed from a Pasco County home?",
  answer:
    "Legally, bats in Pasco County come out through one-way exclusion doors, never by killing or poisoning them, and only from August 15 to April 15. Pro Wildlife Removal finds every gap in the roof or soffit, fits the doors, then seals the openings once the colony is gone. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Exclusion Aug. 15 to April 15", "No poisons, by state rule"],
  localHeading: "What to know about bats in Pasco County",
  localIntro: "Pasco has had big colonies in public buildings, and one rabid bat on a school campus. Here is what the county's records and FWC's rules say.",
  local: [
    { icon: "critter", title: "500 to 1,000 bats in a fire station", text: p("In June 2017, WUSF and Fox 13 reported that 500 to 1,000 bats had forced crews out of Pasco Fire Station 39 on County Line Road in Hudson. Bat boxes put up earlier didn't keep them out, and full removal had to wait until after August, when the pups matured.") },
    { icon: "search", title: "A rabid bat at Sunlake High", text: p("WUFT reported in 2014 that Brazilian free-tailed bats had moved into Sunlake High School in Land O' Lakes, and one found dead tested positive for rabies. FWC and a contractor put up one-way devices so the bats could leave but not return.") },
    { icon: "phone", title: "Report bat contact", text: p("Pasco County Animal Services says any bare skin contact with a bat should be reported to DOH-Pasco or the county, and so should a bat found in a room where someone was sleeping.") },
    { icon: "map-pin", title: "Rare, but on the record", text: p("Pasco counted 24 rabid animals from 2013 to 2023, and one was a bat. The state's county tables listed no rabid bats for Pasco in 2024 or 2025, while their statewide totals listed 30 bats and then 42.") },
    { icon: "home", title: "Keep them out of living space", text: p("When a rabid raccoon turned up near Zephyrhills in January 2026, DOH-Pasco's alert told residents to keep wildlife, bats included, out of living quarters and other occupied spaces.") },
    { icon: "leaf", title: "Pups in summer", text: p("FWC sets bat maternity season from April 16 to August 14. A Pasco roof can't get exclusion devices in that window without a permit, which is why the Hudson station had to wait until after August.") },
    { icon: "drop", title: "Bat houses for the evicted", text: p("After the Sunlake exclusion, WUFT reported, students planned two bat houses, each able to hold roughly 200 to 300 bats, set 15 to 20 feet up on poles near a ball field and a cypress swamp. In Hudson, bat boxes alone hadn't kept the colony out of the station.") },
  ],
  contactsIntro: "Who handles what when bats are the problem in Pasco, from each agency's own page.",
  contacts: [
    { icon: "phone", title: "Bitten, scratched or touched", text: p("DOH-Pasco, 352-521-1450, option 4. Don't release the bat until you've talked with them.") },
    { icon: "map-pin", title: "Exclusion questions", text: p("FWC's Southwest Region office covers Pasco: 863-648-3200.") },
    { icon: "users", title: "A colony in your roof", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "bats-in-attic", label: "Bats in the attic" },
  extraLink: { label: "Bat removal cost in Florida", href: "/blog/how-much-does-bat-removal-cost-in-florida/", text: "What a bat exclusion and roof sealing job costs, and why." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Pasco County bat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Can I get bats out of my Pasco home in the summer?",
      "Not with exclusion devices, unless FWC issues a permit. Maternity season runs April 16 to August 14, and exclusion is legal from August 15 to April 15, when overnight lows are forecast at 50°F or above.",
    ),
    faq(
      "Have bats in Pasco County tested positive for rabies?",
      "Rarely. The county lists one rabid bat among 24 rabid animals from 2013 to 2023, and a dead bat at Sunlake High School tested positive in 2014, per WUFT. Never handle a bat with bare hands.",
    ),
    faq(
      "What kind of bats live in Pasco roofs?",
      "Most often the Brazilian free-tailed bat, which FWC calls Florida's most common bat and says prefers attics, sheds and bridges. Evening bats use attics too.",
    ),
    faq(
      "Can I spray or poison bats in my attic?",
      "No. FWC says killing bats is illegal under rule 68A-4.001, and pesticides or poisons used to harm, kill or deter bats are banned too.",
    ),
    faq(
      "How soon can you come out for bats in Pasco County?",
      "Same-day appointments for bats are often available in Pasco County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a bat call in Pasco County]",
    ),
  ],
  ctaHeading: "Bats in your Pasco County roof?",
  ctaText: "For bats anywhere in Pasco, call (727) 594-7705.",
  seo: {
    title: "Bat Removal in Pasco County, FL | Pro Wildlife Removal",
    description:
      "Bat removal in Pasco County, FL: colonies excluded with one-way doors in the legal season and roofs sealed, plus Pasco's bat rabies record and who to call.",
  },
  sources: [
    { title: "WUSF, June 13, 2017: Bats force shutdown of Pasco fire station (500 to 1,000 bats; crew moved out; bat boxes didn't draw them; full removal after August when pups mature)", url: "https://www.wusf.org/news/2017-06-13/bats-force-shutdown-of-pasco-fire-station" },
    { title: "Fox 13: Bats invade Pasco fire station (Fire Station 39, County Line Road, Hudson)", url: "https://www.fox13news.com/news/bats-invade-pasco-fire-station-forcing-firefighters-out" },
    { title: "WUFT, Oct. 31, 2014: High school to build bat houses after recent infestation (Sunlake High School, Land O' Lakes; Brazilian free-tailed bats; one found dead with rabies; FWC and a contractor installed one-way bat excluders; two planned bat houses holding about 200 to 300 bats each, 15 to 20 feet up, near a baseball field and a cypress swamp)", url: "https://www.wuft.org/news/2014/10/31/high-school-to-build-bat-houses-after-recent-infestation/" },
    { title: "Pasco County: Rabies awareness (24 positive animals 2013-2023: 17 raccoons, 6 cats, 1 bat; report bare skin contact with a bat, or a bat in a room where someone slept, to DOH-Pasco or PCAS)", url: RABIES },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Pasco: 1 raccoon, no bats; state: 30 bats)", url: DOH2024 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Pasco: none; state: 42 bats)", url: DOH2025 },
    { title: "Florida DOH: DOH-Pasco rabies alert, Feb. 2026 (rabid raccoon off Alston Ave, Zephyrhills area, Jan. 30, 2026; prevent wildlife, including bats, from entering living quarters; 352-521-1450, option 4)", url: FEB },
    { title: "FWC news release, April 6, 2026 (maternity season April 16 to Aug. 14; exclusion devices legal Aug. 15 to April 15; four nights; 50°F)", url: SEASON },
    { title: "FWC: Bats (illegal to kill, 68A-4.001; pesticides or poisons to harm, kill or deter bats prohibited)", url: FWC_BATS },
    { title: "FWC: Brazilian free-tailed bat profile (state's most common bat; in Florida prefers attics, sheds, bridges and bat houses)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/bats/brazillian-free-tailed-bat/" },
    { title: "FWC: Evening bat profile (throughout Florida except the Keys; roosts in attic spaces, under bridges, in folded umbrellas)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/bats/evening-bat/" },
    { title: "CDC: Bats and rabies (don't release a bat that may have bitten someone until you talk with public health)", url: "https://www.cdc.gov/rabies/exposure/animals/bats.html" },
    { title: "FWC: Regional offices (Southwest Region, 863-648-3200, includes Pasco)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Typical response time for a bat call in Pasco County?", "A real Google review from a Pasco County bat job (TTR-723), and real Pasco bat job photos."],
});
