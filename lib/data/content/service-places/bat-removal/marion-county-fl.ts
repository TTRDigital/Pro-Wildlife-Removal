import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Bat removal in Marion County (TTR-738, Nia). Every card is one true fact about
 * bats in Marion: the state's 2022-2025 rabies tables, UF/IFAS Extension Marion
 * (2021), DOH-Marion's 2026 advice, the Silver Springs and Rainbow Springs
 * management plans, Ocala's park bat house and a 2016 villa report (news, dated).
 */
const UFMARION = "https://blogs.ifas.ufl.edu/marionco/2021/06/22/summer-wildlife-happenings/";
const SSSP = "https://floridadep.gov/sites/default/files/SilverSprings_2014_ApprovedPlan%26Amendment.pdf";
const RSAP = "https://floridadep.gov/sites/default/files/Rainbow-Springs-AP-Management-Plan.pdf";
const BATHOUSE = "https://www.ocala-news.com/2026/04/28/free-class-on-owls-bats-at-ocala-park-this-week-3/";
const ADVISORY = "https://www.floridahealth.gov/wp-content/uploads/2026/09/rabies-advisory-marion-9-18-26.pdf";

export const batRemovalMarionCounty = servicePlacePage({
  service: "bat-removal",
  animal: "Bat",
  animals: "Bats",
  place: "marion-county-fl",
  placeName: "Marion County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-marion-county-fl",
  order: 91,
  heroText: "Bats in a Marion County attic, barn or soffit, or streaming out of the roofline at dusk? We look for the openings bats use, let them out with one-way devices in the legal season and seal up. Call (727) 594-7705.",
  answerHeading: "How are bats removed from a Marion County home?",
  answer:
    "By exclusion: one-way devices at the entry points let the colony fly out and keep it from coming back, fitted only from August 15 to April 15 under FWC rules. Pro Wildlife Removal checks a Marion home for the gaps bats use, fits the devices and seals them after. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "A rabid bat on the 2022 table", "No palm pruning in pup season"],
  localHeading: "What to know about bats in Marion County",
  localIntro: "Marion has its own record of rabid bats, Extension advice on bats in palms, and state park plans that list the bats living there. Here is what they say.",
  local: [
    { icon: "search", title: "One rabid bat in four years", text: p("Marion's 2022 rabies table listed a rabid bat along with 2 raccoons. The county's 2023, 2024 and 2025 tables listed no rabid bats.") },
    { icon: "leaf", title: "Palm skirts are roosts", text: p("UF/IFAS Extension Marion County wrote in 2021 that dead palm fronds are a favorite roost for several bat species, and asked residents not to prune palm skirts during the bat maternity period.") },
    { icon: "critter", title: "Pup season, Extension says", text: p("The same 2021 Extension post said baby bats are called pups, that Florida has 13 native bat species and that it is illegal to harm or kill bats at any time of year.") },
    { icon: "home", title: "A bat house in Ocala", text: p("Ocala's Programs in the Parks series held a free owls and bats session at Heritage Nature Conservancy on May 1, 2026, Ocala-News reported, and pictured the park's bat house.") },
    { icon: "drop", title: "Bats in the state parks", text: p("Silver Springs State Park's 2014 management plan lists the red bat, and notes a hoary bat documented there that hasn't been seen since the 1970s. The Rainbow Springs Aquatic Preserve plan lists six bat species as potential, not yet documented.") },
    { icon: "map-pin", title: "A villa overrun, 2016", text: p("In 2016, neighbors of a Legacy Villas home in the Village of Briar Meadow South, on the Marion side of The Villages, told Villages-News it was overrun with bats, rats and more.") },
    { icon: "phone", title: "Keep bats out, DOH-Marion says", text: p("DOH-Marion's September 2026 rabies advisory told Marion residents to keep wildlife, bats included, out of living quarters and other occupied spaces.") },
  ],
  contactsIntro: "Who handles what when bats are the problem in Marion County, from each agency's own page.",
  contacts: [
    { icon: "phone", title: "Bitten or touched by a bat", text: p("DOH-Marion, 352-629-0137.") },
    { icon: "map-pin", title: "Exclusion questions", text: p("FWC's Northeast Region office in Ocala, 352-732-1225, or UF/IFAS Extension Marion, 352-671-8400.") },
    { icon: "users", title: "Bats in your home", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "bats-in-attic", label: "Bats in the attic" },
  extraLink: { label: "Bat removal cost in Florida", href: "/blog/how-much-does-bat-removal-cost-in-florida/", text: "What goes into a bat exclusion and seal-up, and what changes the price." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Marion County bat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "When can bats be excluded in Marion County?",
      "From August 15 to April 15, under FWC's rules. Maternity season, April 16 to August 14, needs a permit. Devices should stay up at least four nights with lows forecast at 50°F or higher.",
    ),
    faq(
      "Should I trim my palm trees if bats roost in them?",
      "Not during pup season. UF/IFAS Extension Marion asks residents to leave the dead fronds, or skirts, alone during the maternity period, since several bat species roost there.",
    ),
    faq(
      "Have bats in Marion County had rabies?",
      "Marion's 2022 table listed one rabid bat; its 2023 to 2025 tables listed none. Never handle a bat, and report any bite or bare-skin contact to DOH-Marion, 352-629-0137.",
    ),
    faq(
      "Can I poison or trap the bats in my attic?",
      "No. Extension Marion and FWC both say killing or harming bats is illegal, and FWC bans poisons, fumigants and relocation. One-way exclusion is the legal method.",
    ),
    faq(
      "How soon can you come out for bats in Marion County?",
      "Same-day appointments for bats are often available in Marion County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a bat call in Marion County]",
    ),
  ],
  ctaHeading: "Bats in your Marion County home?",
  ctaText: "For bats anywhere in Marion, call (727) 594-7705.",
  seo: {
    title: "Bat Removal in Marion County, FL | Pro Wildlife Removal",
    description:
      "Bat removal in Marion County, FL: colonies let out through one-way devices in the legal season and roofs sealed, plus local bat records and palm tips.",
  },
  sources: [
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Marion: 1 bat, 2 raccoons)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2022.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Marion: no bats)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2023.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Marion: no bats; surveillance footnote covers Hillsborough and Polk only)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Marion: no bats; surveillance footnote covers Brevard only)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
    { title: "UF/IFAS Extension Marion County, June 22, 2021: Summer wildlife happenings (baby bats are pups; 13 native bat species; illegal year-round to harm or kill bats; dead palm fronds a favorite roost; avoid pruning palm skirts during the maternal period; 352-671-8400)", url: UFMARION },
    { title: "Ocala-News, April 28, 2026: Free class on owls, bats at Ocala park (Heritage Nature Conservancy; May 1, 2026; bat house photo)", url: BATHOUSE },
    { title: "Florida DEP: Silver Springs State Park Unit Management Plan Amendment, Dec. 17, 2014 (red bat on the mammal list; hoary bat documented by FNAI, not seen since the 1970s)", url: SSSP },
    { title: "Florida DEP: Rainbow Springs Aquatic Preserve Management Plan, June 2016 (potential, not documented: Rafinesque's big-eared, red, southeastern, evening, Eastern pipistrelle and Mexican free-tailed bats)", url: RSAP },
    { title: "Villages-News, Sept. 10, 2016: Neighbors complain about villa (Legacy Villas, Village of Briar Meadow South; overrun with mold, snakes, rats, bats and bees; Marion County Health Department)", url: "https://www.villages-news.com/2016/09/10/nervous-neighbors-complain-villa-bats-rats-owner-nevada/" },
    { title: "Florida DOH: DOH-Marion rabies advisory, Sept. 18, 2026 (prevent wildlife, including bats, from entering living quarters; DOH-Marion 352-629-0137)", url: ADVISORY },
    { title: "FWC news release, April 6, 2026 (maternity season April 16 to Aug. 14; exclusion Aug. 15 to April 15; four nights; 50°F)", url: "https://myfwc.com/news/all-news/bat-maternity-0426/" },
    { title: "FWC: Bats in buildings (poison, relocations and fumigants illegal)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/" },
    { title: "FWC: Regional offices (Northeast Region includes Marion; Ocala office 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Typical response time for a bat call in Marion County?", "A real Google review from a Marion County bat job (TTR-723), and real Marion bat job photos."],
});
