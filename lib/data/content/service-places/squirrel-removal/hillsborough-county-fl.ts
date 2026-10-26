import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";
import { TRAP_RULES_SOURCE } from "../../notes.ts";

/* HELD (Ben, Oct 26): fewer than 6 local-problem facts under the local-problem rule; not registered in service-places.ts.

 * Squirrel removal in Hillsborough County (TTR-738, Owen). County-wide and non-Tampa
 * facts that name squirrels: state park plans (Hillsborough River, Alafia River,
 * Little Manatee River), a county nature preserve page, the 2010 Alafia River Corridor
 * plan and FWC's fox squirrel status review. Sourced below.
 */
const HCFL = "https://hcfl.gov/";
const DEP = "https://floridadep.gov/sites/default/files/";
const RISK = "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/animal-risk-assessment/";

export const squirrelRemovalHillsboroughCounty = servicePlacePage({
  service: "squirrel-removal",
  animal: "Squirrel",
  animals: "Squirrels",
  place: "hillsborough-county-fl",
  placeName: "Hillsborough County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-hillsborough-county",
  heroText: "Squirrels chewing into a soffit or running in the attic in Brandon, Lithia, Riverview or anywhere else in Hillsborough County? We find the hole, get them out and seal it. Call (727) 594-7705.",
  answerHeading: "Who removes squirrels from an attic in Hillsborough County?",
  answer:
    "A private wildlife company. The City of Tampa's listing for Hillsborough County Animal Services says wildlife on private property calls for private removal services. In Hillsborough, gray squirrels show up on state park lists from Thonotosassa to Lithia. Pro Wildlife Removal finds where a squirrel gets in, removes it and seals the opening. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Gray and fox squirrels on county lands", "2004 park plan: gray squirrel a problem species"],
  localHeading: "What to know about squirrels in Hillsborough County",
  localIntro: "These facts about squirrels in Hillsborough come from state park plans, the county's nature preserve pages and FWC.",
  local: [
    { icon: "critter", title: "A park problem species", text: p("Hillsborough River State Park's 2004 plan limits its problem species to the American alligator, the raccoon and the gray squirrel. It says feeding has made raccoons and gray squirrels bold and unafraid of visitors, with \"numerous squirrel bites suffered by visitors from hand feeding.\"") },
    { icon: "leaf", title: "Three squirrels on one list", text: p("The park's 2020 plan lists three squirrel species among its rodents: the southern flying squirrel, the gray squirrel and Sherman's fox squirrel.") },
    { icon: "map-pin", title: "Alafia River State Park, Lithia", text: p("Alafia River State Park's plan lists both the gray squirrel, found across many types of communities there, and Sherman's fox squirrel.") },
    { icon: "drop", title: "Lower Green Swamp Nature Preserve", text: p("The county's page for Lower Green Swamp Nature Preserve says its wetlands and pine flatwoods provide homes for southern fox squirrels, along with deer, wood storks and barred owls.") },
    { icon: "map-pin", title: "Alafia River Corridor", text: p("The 2010 management plan for the Alafia River Corridor Nature Preserve says the site has good potential for fox squirrel habitat and that individuals have been observed.") },
    { icon: "search", title: "Fewer at Little Manatee River", text: p("Little Manatee River State Park's 2016 plan says park staff reported fox squirrel sightings had decreased dramatically, and they worry the species is now missing from the park.") },
    { icon: "users", title: "Range reaches Hillsborough", text: p("FWC's 2017 status review notes that older studies drew the Sherman's fox squirrel's range at least as far south as Highlands and Hillsborough counties.") },
  ],
  contactsIntro: "Who handles what when squirrels are the problem in Hillsborough, from the county's and DOH-Hillsborough's own pages.",
  contacts: [
    { icon: "phone", title: "Bitten by a squirrel", text: p("Report the bite to DOH-Hillsborough, 813-307-8059.") },
    { icon: "users", title: "County Animal Control", text: p("(813) 744-5660. It covers all of Hillsborough, Tampa, Temple Terrace and Plant City among them, and the City of Tampa's page on its services sends wildlife on private property to private removal services.") },
    { icon: "home", title: "Squirrels in the attic", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "squirrels-in-attic", label: "Squirrels in the attic" },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Hillsborough County squirrel job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Will Hillsborough County Animal Control take a squirrel out of my attic?",
      "County Animal Control lists stray pets, bites, and neglect and cruelty cases as its services. For a squirrel on private property, the City of Tampa's listing for the county service says to hire a private removal service.",
    ),
    faq(
      "Are fox squirrels in Hillsborough protected?",
      "FWC removed the southern fox squirrel, once called Sherman's fox squirrel, from its Species of Special Concern list in 2018, but says conservation measures under rule 68A-29.002 still apply to it.",
    ),
    faq(
      "Can I trap a squirrel myself in Hillsborough County?",
      "FWC lets property owners take most nuisance wildlife from private property without its approval. A trapped gray squirrel may be released only on site, or on 40 or more contiguous acres in Hillsborough with the owner's written permission. New FWC trapping rules start Dec 31, 2026.",
    ),
    faq(
      "Do squirrels in Hillsborough County carry rabies?",
      "DOH-Hillsborough's animal risk page counts wild rodents as low-risk animals for rabies. Report any bite to DOH-Hillsborough anyway.",
    ),
    faq(
      "How soon can you come out for squirrels in Hillsborough County?",
      "Same-day appointments for squirrels are often available in Hillsborough County. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Squirrels in your Hillsborough County attic?",
  ctaText: "Squirrels anywhere in Hillsborough County? Call (727) 594-7705.",
  seo: {
    title: "Squirrel Removal Hillsborough County | Pro Wildlife Removal",
    description:
      "Squirrel removal in Hillsborough County, FL: squirrels out of attics and soffits in Brandon, Lithia, Riverview and Plant City, with the way in sealed.",
  },
  sources: [
    { title: "Florida DEP: Hillsborough River State Park unit management plan, 2004 (problem species limited to the American alligator, raccoon and gray squirrel; feeding made them bold; numerous squirrel bites from hand feeding)", url: `${DEP}2004%20Hillsborough%20River%20State%20Park.pdf` },
    { title: "Florida DEP: Hillsborough River State Park unit management plan, approved June 12, 2020 (rodents: southern flying squirrel, gray squirrel, Sherman's fox squirrel)", url: `${DEP}HRSP_06.12.2020%20Approved%20UMP_JA.pdf` },
    { title: "Florida DEP: Alafia River State Park plan addenda (gray squirrel, many types of communities; Sherman's fox squirrel)", url: `${DEP}ARSP_Addenda%201-12.pdf` },
    { title: "Florida DEP: Little Manatee River State Park approved plan, Dec 16, 2016 (fox squirrel observations decreased dramatically; staff worry it is now missing from the park)", url: `${DEP}20161223_Little%20Manatee%20River%20SP_AP.pdf` },
    { title: "Hillsborough County: Lower Green Swamp Nature Preserve (wetlands and pine flatwoods; southern fox squirrels)", url: `${HCFL}locations/lower-green-swamp-nature-preserve` },
    { title: "Alafia River Corridor Nature Preserve management plan, 2010 (good potential for fox squirrel habitat; individuals observed)", url: "https://www.swfwmd.state.fl.us/sites/default/files/medias/documents/AlafiaRiverCorridorNaturePreserve.pdf" },
    { title: "FWC: Sherman's fox squirrel biological status review, Dec 2017 (range at least to Highlands and Hillsborough counties)", url: "https://archive.myfwc.com/archive/Wildlife/Listing/Listing%20Documents/shermansfoxsquirrelbsr_draftfinal_dec2017.pdf" },
    { title: "FWC: Southern fox squirrel profile (removed as a Species of Special Concern in 2018; previously Sherman's fox squirrel; conservation measures under 68A-29.002)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/southern-fox-squirrel/" },
    { title: "City of Tampa: Animal services, Hillsborough County (listed services: stray pets, bites, neglect and cruelty cases; for wildlife on private property, use private removal services)", url: "https://www.tampa.gov/service/animal-services-hillsborough-county" },
    { title: "Hillsborough County: Animal Control ((813) 744-5660; serves Hillsborough County including the cities of Tampa, Temple Terrace and Plant City)", url: `${HCFL}locations/animal-control` },
    { title: "DOH-Hillsborough: Animal risk assessment (low-risk animals include wild rodents)", url: RISK },
    { title: "DOH-Hillsborough: Report an animal bite (813-307-8059)", url: "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/report-an-animal-bite/" },
    { title: "FWC: FAQs, nuisance wildlife (no FWC authorization needed to take most nuisance wildlife from private property; release on site or 40+ contiguous acres in the same county with written permission)", url: "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/" },
    TRAP_RULES_SOURCE,
  ],
  clientQuestions: ["A real Google review from a Hillsborough County squirrel job (TTR-723), and real Hillsborough squirrel job photos."],
});
