import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Bat removal in Hudson (TTR-738, Nia). Every card is one true fact about bats
 * in Hudson or Pasco County: the 2017 bat colony at Pasco Fire Station 39 in
 * Hudson (news reports, named as such; their "fruit bat" wording is left out,
 * since Florida's bats all eat insects), Pasco's rabies records and FWC rules.
 */
const WUSF = "https://www.wusf.org/news/2017-06-13/bats-force-shutdown-of-pasco-fire-station";
const FOX = "https://www.fox13news.com/news/bats-invade-pasco-fire-station-forcing-firefighters-out";
const FOXSYN = "https://www.fox5dc.com/news/bats-invade-pasco-fire-station-forcing-firefighters-out";
const RABIES = "https://www.pascocountyfl.gov/services/animal_services/programs/rabies_awareness.php";
const SEASON = "https://myfwc.com/news/all-news/bat-maternity-0426/";

export const batRemovalHudson = servicePlacePage({
  service: "bat-removal",
  animal: "Bat",
  animals: "Bats",
  place: "hudson-fl",
  placeName: "Hudson",
  placeKind: "city",
  location: "about-us/service-area/hudson-wildlife-removal",
  county: "Pasco",
  order: 25,
  heroText: "Bats tucked under Hudson soffits, tiles or fascia, and droppings piling up below? We look for every opening, fit one-way doors when the law allows and seal up after them. Call (727) 594-7705.",
  answerHeading: "How are bats removed from a Hudson building?",
  answer:
    "Bats in Hudson are let out, not trapped or killed: one-way devices at the entry points let them fly out and keep them from getting back in, and only from August 15 to April 15 under FWC rules. Pro Wildlife Removal checks for the gaps a colony uses, fits the devices and seals up after. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Exclusion Aug. 15 to April 15", "Hudson's fire station bats"],
  localHeading: "What to know about bats in Hudson",
  localIntro: "In 2017, a bat colony forced firefighters out of a Hudson fire station. What happened there shows how a bat colony can take over a building.",
  local: [
    { icon: "home", title: "Bats in Fire Station 39", text: p("In June 2017, Fox reported that bats had been getting into Pasco Fire Station 39 on County Line Road in Hudson for five years. WUSF, citing the Tampa Bay Times, reported 500 to 1,000 bats.") },
    { icon: "users", title: "Crews moved out", text: p("WUSF reported in 2017 that the bats had made the station an unsanitary and unsafe place to work. Per Fox's 2017 report, the engine company moved to Station 20 in Shady Hills and the rescue company to Hudson Station 10 while the bats were dealt with.") },
    { icon: "wrench", title: "One-way devices on the roof", text: p("Devices went on the roof at the entry points so bats could fly out but not get back in, Fox reported in 2017. Firefighters couldn't return until there had been no bat activity for at least 72 hours.") },
    { icon: "phone", title: "A possible bite, and rabies shots", text: p("One firefighter reported a bite she couldn't place, from an insect or a bat. As a precaution, Fox reported in 2017, each firefighter at the station was getting a rabies shot.") },
    { icon: "critter", title: "Report any bat contact", text: p("Pasco County Animal Services asks residents to report bare skin contact with a bat, or a bat found in a room where someone slept, to DOH-Pasco or the county. The county recorded one rabid bat from 2013 to 2023.") },
    { icon: "leaf", title: "Pups and the legal season", text: p("In 2017, WUSF reported full removal had to wait until after August, when the young matured, and Fox reported fire officials filed for an emergency removal with FWC. Without a permit, exclusion is legal only from August 15 to April 15.") },
  ],
  contactsIntro: "Who handles what when bats are the problem in Hudson, from each agency's own page.",
  contacts: [
    { icon: "phone", title: "Bitten, scratched or touched", text: p("DOH-Pasco, 352-521-1450, option 4.") },
    { icon: "map-pin", title: "Exclusion questions", text: p("FWC's Southwest Region office covers Pasco: 863-648-3200.") },
    { icon: "users", title: "Bats in your building", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "bats-in-attic", label: "Bats in the attic" },
  extraLink: { label: "Bat removal cost in Florida", href: "/blog/how-much-does-bat-removal-cost-in-florida/", text: "The parts of a bat job that set the price: inspection, exclusion, sealing and cleanup." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Hudson bat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "What happened with the bats at the Hudson fire station?",
      "In 2017, a colony that WUSF, citing the Tampa Bay Times, put at 500 to 1,000 bats forced crews out of Pasco Fire Station 39 on County Line Road. One-way devices went on the roof, and crews could return only after 72 hours with no bat activity, per Fox.",
    ),
    faq(
      "Can bats be removed from my Hudson home in summer?",
      "Not with exclusion devices, unless FWC grants a permit. Maternity season runs April 16 to August 14, and devices can go up from August 15 to April 15 on nights forecast at 50°F or warmer.",
    ),
    faq(
      "Should I worry about rabies from bats in Hudson?",
      "One rabid bat is on Pasco's 2013 to 2023 record, but bites can be hard to notice. Report any bare skin contact, or a bat in a room where someone slept, to DOH-Pasco.",
    ),
    faq(
      "Can I trap the bats and move them?",
      "No. FWC says killing bats is illegal under rule 68A-4.001, and capturing and relocating bats from a building is illegal too. Exclusion with one-way devices is the legal way out.",
    ),
    faq(
      "How soon can you come out for bats in Hudson?",
      "Same-day appointments for bats are often available in Hudson. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a bat call in Hudson]",
    ),
  ],
  ctaHeading: "Bats in your Hudson home?",
  ctaText: "Hudson bat calls go to (727) 594-7705.",
  seo: {
    title: "Bat Removal in Hudson, FL | Pro Wildlife Removal",
    description:
      "Bat removal in Hudson, FL: colonies let out through one-way devices in the legal season and gaps sealed, plus what Hudson's 2017 fire station colony shows.",
  },
  sources: [
    { title: "Fox 13, June 13, 2017: Bats invade Pasco fire station (Fire Station 39, County Line Road, Hudson; fire officials filed for an emergency removal with FWC; each firefighter getting a rabies shot)", url: FOX },
    { title: "Fox (syndicated), June 14, 2017: Bats invade Pasco fire station (bats getting in for five years; engine company to Station 20, Shady Hills; rescue company to Hudson Station 10; roof devices keep bats from getting back in; no bat activity for at least 72 hours before return; a possible bite; each firefighter getting a rabies shot)", url: FOXSYN },
    { title: "WUSF, June 13, 2017: Bats force shutdown of Pasco fire station (500 to 1,000 bats, citing the Tampa Bay Times; unsanitary and unsafe; full removal after August when the young mature)", url: WUSF },
    { title: "Pasco County: Rabies awareness (24 positive animals 2013-2023, 1 a bat; report bare skin contact with a bat, or a bat in a room where someone slept, to DOH-Pasco or PCAS)", url: RABIES },
    { title: "FWC news release, April 6, 2026 (maternity season April 16 to Aug. 14; exclusion devices legal Aug. 15 to April 15; four nights; 50°F)", url: SEASON },
    { title: "FWC: Bats in buildings (capture and relocation of bats illegal; no poisons or fumigants)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/" },
    { title: "FWC: Bats (illegal to kill, 68A-4.001)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/" },
    { title: "DOH-Pasco: Rabies advisory, July 30, 2026 (report bites and scratches, 352-521-1450, option 4)", url: "https://pasco.floridahealth.gov/2026/07/30/doh-pasco-issues-rabies-advisory/" },
    { title: "FWC: Regional offices (Southwest Region, 863-648-3200, includes Pasco)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Typical response time for a bat call in Hudson?", "A real Google review from a Hudson bat job (TTR-723), and real Hudson bat job photos."],
});
