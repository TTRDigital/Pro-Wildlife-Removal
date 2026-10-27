import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * HELD (Ben, Oct 26, 2026: photos, specimens and conservation lines do not count; under 6).
 * Squirrel removal in Land O' Lakes (TTR-738, Nia). Every card is one true fact
 * about squirrels in Land O' Lakes or Pasco: the Cypress Creek Preserve plans
 * (2005, 2021), a 1975 UF Florida Museum specimen, dated Laker/Lutz News reader
 * photos, the Starkey Wilderness Preserve plan and FWC's fox squirrel rule.
 */
const CC2021 = "https://www.swfwmd.state.fl.us/sites/default/files/medias/documents/Cypress%20Creek%20Preserve%20Land%20Management%20Plan.pdf";
const CC2005 = "https://www.swfwmd.state.fl.us/sites/default/files/medias/documents/CypressCreekPreserve.pdf";
const CCPAGE = "https://www.swfwmd.state.fl.us/recreation/cypress-creek-preserve";
const UF = "https://www.gbif.org/occurrence/1122702977";
const LL2022 = "https://lakerlutznews.com/dennis-the-menace/";
const LL2020 = "https://lakerlutznews.com/scouting-for-a-snack/";
const LL2019 = "https://lakerlutznews.com/a-valentines-touch-of-romance/";
const STARKEY = "https://www.swfwmd.state.fl.us/sites/default/files/medias/documents/StarkeyWildernessPark.pdf";
const NONGAME = "https://myfwc.com/hunting/regulations/nongame/";

export const squirrelRemovalLandOLakes = servicePlacePage({
  service: "squirrel-removal",
  animal: "Squirrel",
  animals: "Squirrels",
  place: "land-o-lakes-fl",
  placeName: "Land O' Lakes",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-land-o-lakes",
  county: "Pasco",
  order: 99,
  heroText: "Squirrels on the roof, in the attic or raiding the bird feeder in Land O' Lakes? We get them out of the house, check for young before closing anything and seal the openings. Call (844) 264-6254.",
  answerHeading: "Who gets squirrels out of homes in Land O' Lakes?",
  answer:
    "A private wildlife company. Gray squirrels in a Land O' Lakes attic or soffit are the homeowner's to have removed; fox squirrels, which live in nearby preserves, may not be taken under FWC rules. Pro Wildlife Removal gets gray squirrels out, checks for young and seals the openings. Call (844) 264-6254.",
  points: ["Call (844) 264-6254", "Fox squirrels at Cypress Creek", "Gray squirrels on rooftops"],
  localHeading: "What to know about squirrels in Land O' Lakes",
  localIntro: "Gray squirrels turn up on Land O' Lakes rooftops and feeders, and fox squirrels live in the preserves around town. Here is what the records show.",
  local: [
    { icon: "home", title: "A squirrel on the roof, 2022", text: p("In February 2022, The Laker/Lutz News pictured a squirrel its staff had named Dennis, which hung around in front of the paper's Land O' Lakes office and up on the rooftop.") },
    { icon: "critter", title: "Into the bird feeder, 2020", text: p("A Land O' Lakes reader caught a squirrel in the act of stealing from the bird feeder in his backyard, in a photo The Laker/Lutz News ran in March 2020.") },
    { icon: "leaf", title: "In the oaks, 2019", text: p("In February 2019, The Laker/Lutz News ran a photo of squirrels a Land O' Lakes couple spotted on an oak tree during a Sunday morning walk.") },
    { icon: "search", title: "A gray squirrel in the museum", text: p("The University of Florida's Florida Museum holds an eastern gray squirrel, a female kept as skin and skull, collected in Land O' Lakes on March 2, 1975.") },
    { icon: "map-pin", title: "Fox squirrels at Cypress Creek", text: p("Cypress Creek Preserve, which the Southwest Florida Water Management District lists at a Land O' Lakes address, has fox squirrels among its wildlife, the district's 2021 management plan says.") },
    { icon: "drop", title: "Verified, and managed with fire", text: p("The district's 2005 plan for Cypress Creek Preserve listed Sherman's fox squirrel among its verified species, with a recommendation to keep fire-dependent habitat on a regular burn cycle.") },
    { icon: "wrench", title: "Starkey's fox squirrels too", text: p("In west Pasco, the 2005 plan for the Starkey Wilderness Preserve also lists Sherman's fox squirrel, with the same burn-cycle recommendation.") },
  ],
  contactsIntro: "Who handles what when squirrels are the problem in Land O' Lakes.",
  contacts: [
    { icon: "map-pin", title: "Fox squirrel questions", text: p("FWC's Southwest Region office, which covers Pasco, 863-648-3200.") },
    { icon: "users", title: "Squirrels in your attic", text: p("A private wildlife company. Call us at (844) 264-6254.") },
  ],
  attic: { slug: "squirrels-in-attic", label: "Squirrels in the attic" },
  extraLink: { label: "Squirrel poop vs rat poop", href: "/blog/squirrel-poop-vs-rat-poop-how-to-spot-the-difference/", text: "Not sure what's in the attic? Start with what it left behind." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Land O' Lakes squirrel job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Can I trap the fox squirrels near my Land O' Lakes home?",
      "No. FWC's nongame rules state that fox squirrels may not be taken or pursued. Gray squirrels in your attic are a different matter.",
    ),
    faq(
      "Do squirrels go after bird feeders in Land O' Lakes?",
      "Yes. A reader's backyard photo in The Laker/Lutz News in 2020 showed one stealing from a feeder.",
    ),
    faq(
      "Where do fox squirrels live around Land O' Lakes?",
      "In fire-managed pine and sandhill habitat. The water management district's plans for Cypress Creek Preserve and the Starkey Wilderness Preserve both list Sherman's fox squirrel.",
    ),
    faq(
      "Are squirrels on my roof a problem?",
      "They can be if they find a gap. A squirrel on The Laker/Lutz News office roof in 2022 shows how easily they reach a roof. From there, any gap into the attic is the risk.",
    ),
    faq(
      "How soon can you come out for squirrels in Land O' Lakes?",
      "Same-day appointments for squirrels are often available in Land O' Lakes. Call (844) 264-6254.",
    ),
  ],
  ctaHeading: "Squirrels in your Land O' Lakes attic?",
  ctaText: "Land O' Lakes squirrel calls go to (844) 264-6254.",
  seo: {
    title: "Squirrel Removal in Land O' Lakes, FL | Pro Wildlife Removal",
    description:
      "Squirrel removal in Land O' Lakes, FL: gray squirrels out of attics and soffits, young checked first, openings sealed, plus where local fox squirrels live.",
  },
  sources: [
    { title: "The Laker/Lutz News, Feb. 8, 2022: Dennis the menace? (squirrel named Dennis by staff, in front of the office in Land O' Lakes and up in the rooftop)", url: LL2022 },
    { title: "The Laker/Lutz News, March 4, 2020: Scouting for a snack (squirrel stealing from a bird feeder in a Land O' Lakes backyard)", url: LL2020 },
    { title: "The Laker/Lutz News, Feb. 13, 2019: A Valentine's touch of romance (squirrels on an oak tree, Land O' Lakes)", url: LL2019 },
    { title: "University of Florida, Florida Museum of Natural History: mammal specimen UF 21736 via GBIF (Sciurus carolinensis; female; skin and skull; collected March 2, 1975; municipality Land-O-Lakes, Pasco County)", url: UF },
    { title: "SWFWMD: Cypress Creek Preserve Land Management Plan, Sept. 28, 2021 (wildlife includes fox squirrels)", url: CC2021 },
    { title: "SWFWMD: Cypress Creek Preserve (8720 Pump Station Road, Land O' Lakes, FL 34639)", url: CCPAGE },
    { title: "SWFWMD: Cypress Creek Preserve Land Management Plan, Oct. 25, 2005 (verified species: Sherman's fox squirrel, SSC; maintain pyrogenic communities on appropriate burn frequency cycle)", url: CC2005 },
    { title: "SWFWMD: Starkey Wilderness Preserve Land Management Plan, June 28, 2005 (Sherman's fox squirrel, SSC; maintain pyrogenic communities on appropriate burn frequency cycle)", url: STARKEY },
    { title: "FWC: Nongame wildlife regulations (fox squirrels may not be taken or pursued)", url: NONGAME },
    { title: "FWC: Regional offices (Southwest Region includes Pasco; 863-648-3200)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["A real Google review from a Land O' Lakes squirrel job (TTR-723), and real Land O' Lakes squirrel job photos."],
});
