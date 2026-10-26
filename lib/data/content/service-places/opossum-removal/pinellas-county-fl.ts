import { TRAP_RULES_2026, TRAP_RULES_SOURCE } from "../../notes.ts";
import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Opossum removal in Pinellas County (TTR-738, Rhea). County-wide opossum facts:
 * flood guidance, DOH-Pinellas advice on pet food and garbage, the county's
 * rabies record, rehabilitators, park release rules and a county road pickup.
 */
const FLOOD = "https://pinellas.gov/safety-tips-before-during-and-after-a-flood/";
const RABIES = "https://pinellas.floridahealth.gov/2026/04/10/rabies-safety/";
const INJURED = "https://pinellas.gov/injured-or-orphaned-wildlife/";
const FWC = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/opossum/";
const SCF = "https://seeclickfix.com/issues/22386793";

export const opossumRemovalPinellasCounty = servicePlacePage({
  service: "opossum-removal",
  animal: "Opossum",
  animals: "Opossums",
  place: "pinellas-county-fl",
  placeName: "Pinellas County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-pinellas-county",
  order: 10,
  heading: "Opossum Removal in Pinellas County, FL",
  heroText: "An opossum under the house, in the garage or up in the attic in Pinellas? We get it out, check for young and close off the space it was using. Call (727) 594-7705.",
  answerHeading: "Who removes opossums in Pinellas County?",
  answer:
    "A private wildlife company, unless the opossum is sick, hurt or orphaned, when Pinellas County Animal Services and local rehabilitators can help. Pro Wildlife Removal removes opossums from Pinellas attics, crawl spaces and sheds, looks for young and blocks the way back in. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "No rabid opossums on record", "Floods push them indoors"],
  localHeading: "Opossums in Pinellas County",
  localIntro: "Opossums are Florida's only marsupial and a regular in Pinellas neighborhoods. These local facts help explain why one ends up under a house.",
  local: [
    { icon: "home", title: "Storms drive them inside", text: p("Pinellas County's flood safety page reminds residents coming back to an evacuated house to watch for possums, raccoons and snakes that took shelter there from the water.") },
    { icon: "balance", title: "Pet food and open cans", text: p("DOH-Pinellas asks residents not to feed wild animals, even by accident through outdoor pet food or open garbage cans. Those are exactly what FWC says pulls opossums into yards.") },
    { icon: "search", title: "No rabid opossums recorded", text: p("In the state's county rabies tables for 2022 through 2025, Pinellas had no confirmed rabid opossums. Its cases were bats and one raccoon. A cornered opossum can still bite, so don't handle one.") },
    { icon: "critter", title: "Help for orphaned young", text: p("Pinellas County's rehabilitator list includes Tampa Bay Wildlife Rehabilitation and the Sanctuary at Solid Rock, which take small mammals. The county advises leaving young animals in place and calling first.") },
    { icon: "map-pin", title: "Not in county parks", text: p("Pinellas County park rules ban releasing or transplanting any animal on park land, so a trapped opossum can't be dropped off at a county park.") },
    { icon: "wrench", title: "Dead opossum on a county road", text: p("When a resident reported a dead opossum on Tarpon Lake Boulevard in 2026, Pinellas County Animal Services passed it to county Public Works, which opened a service request.") },
  ],
  contactsIntro: "Who to call about an opossum in Pinellas County, from the county's own pages and service records.",
  contacts: [
    { icon: "users", title: "Injured or orphaned opossum", text: p("Tampa Bay Wildlife Rehabilitation, (727) 725-1691, or the Sanctuary at Solid Rock, (727) 656-2920, from the county's list.") },
    { icon: "building", title: "Dead one on a county road", text: p("Pinellas County Public Works, (727) 464-8900.") },
    { icon: "home", title: "An opossum in or under the house", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "opossums-in-attic", label: "Opossums in the attic" },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Pinellas County opossum job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Do opossums in Pinellas County carry rabies?",
      "It's rare. Florida's county tables show no confirmed rabid opossums in Pinellas from 2022 through 2025. Still, any wild mammal can bite, so keep children and pets away and report any bite to DOH-Pinellas at 727-824-6932.",
    ),
    faq(
      "How do I keep opossums out of my Pinellas trash?",
      "FWC suggests securing garbage cans with rubber straps and bringing pet food in at night. DOH-Pinellas gives the same advice about open cans and outdoor pet food.",
    ),
    faq(
      "Can I trap an opossum and release it somewhere else in Pinellas?",
      "Not in a county park, where releasing animals is banned. Florida's trapping rules are also changing:",
      TRAP_RULES_2026,
    ),
    faq(
      "There's a baby opossum alone in my yard. What should I do?",
      "Leave it where it is unless it's clearly hurt, and call a rehabilitator from the county's list for advice. Young opossums often ride on their mother's back and can fall off as she travels.",
    ),
    faq(
      "How soon can you get to an opossum in Pinellas County?",
      "Same-day opossum appointments are often available in Pinellas County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for an opossum call in Pinellas County]",
    ),
  ],
  ctaHeading: "Opossum at your Pinellas home?",
  ctaText: "For an opossum anywhere in Pinellas, call (727) 594-7705.",
  seo: {
    title: "Opossum Removal in Pinellas County | Pro Wildlife Removal",
    description:
      "Opossum removal in Pinellas County, FL: opossums out of attics, crawl spaces and sheds, young checked, entry blocked, and rabies records. (727) 594-7705.",
  },
  sources: [
    { title: "Pinellas County: Safety tips before, during and after a flood (snakes, raccoons, possums may move into an evacuated home)", url: FLOOD },
    { title: "DOH-Pinellas: Rabies safety, April 10, 2026 (don't feed wild animals, including with outdoor pet food or open garbage cans; report bites to 727-824-6932)", url: RABIES },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 (Pinellas: none)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2022.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2023 (Pinellas: 1 bat)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2023.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (Pinellas: 1 bat)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Pinellas: 1 raccoon)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
    { title: "Pinellas County: Injured or orphaned wildlife (Tampa Bay Wildlife Rehabilitation (727) 725-1691 and Sanctuary at Solid Rock (727) 656-2920, small mammals; leave wildlife in place if unsure it is orphaned)", url: INJURED },
    { title: "Pinellas County: Park rules, Code Ch. 90 (no release or transplant of any animals)", url: "https://pinellas.gov/park-rules/" },
    { title: "SeeClickFix #22386793, Tarpon Lake Blvd, July 2026 (dead possum; Pinellas County Animal Services assigned the issue to Pinellas County Public Works; service request created)", url: SCF },
    { title: "Pinellas County Public Works: Report / request / contact us ((727) 464-8900)", url: "https://pinellas.gov/report-request-contact-us/" },
    { title: "FWC: Opossum profile (Florida's only marsupial; common in urban areas; attracted to garbage and pet food; secure garbage cans with rubber straps, take pet food in at night; young ride on the mother's back)", url: FWC },
    TRAP_RULES_SOURCE,
  ],
  clientQuestions: ["Typical response time for an opossum call in Pinellas County?", "A real Google review from a Pinellas County opossum job (TTR-723), and real Pinellas opossum job photos."],
});
