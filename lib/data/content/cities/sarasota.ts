import { countyPage, S } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Sarasota page, rewritten in place at its existing URL (Ben, Oct 26). Keeps the words of its Search Console searches (wildlife control, raccoon removal, wildlife exclusion, local experts). Checkable local facts only; no residential street names. */
const ADVISORY_2026 = "https://www.floridahealth.gov/wp-content/uploads/2026/07/rabies-advisory-sarasota-county-7-22-2026.pdf";
const WGCU_2026 = "https://www.wgcu.org/health/2026-07-22/rabies-advisory-issued-in-sarasota-county-after-single-confirmed-case-in-a-raccoon";
const ADVISORY_2025 = "https://sarasota.floridahealth.gov/2025/01/30/doh-sarasota-issues-rabies-advisory/";
const SNL_RABIES = "https://sarasotanewsleader.com/rabies-identified-in-raccoon-killed-in-bee-ridge-road-area-county-health-department-reports/";
const IFAS_WHO = "https://sfyl.ifas.ufl.edu/media/sfylifasufledu/sarasota/documents/pdf/multi/nbp/2025_Multi_NBP_factsheetWildlifeWhoCall_FINAL_ADA.pdf";
const IFAS_HOLES = "https://sfyl.ifas.ufl.edu/media/sfylifasufledu/sarasota/documents/pdf/multi/nbp/2023_Multi_NBP_factsheetWildlifeYardHoles_FINAL_ADA.pdf";
const SHERIFF = "https://sarasotasheriff.org/programs_and_amp_services/animal_services/";
const RENTAL = "https://www.mysuncoast.com/2026/08/24/i-dont-want-move-sarasota-mother-says-rat-infestation-is-forcing-her-family-rental-home/";
const SNL_TRASH = "https://sarasotanewsleader.com/city-of-sarasota-residents-urged-to-follow-rules-for-solid-waste-collections/";
const CITY_SW = "https://www.sarasotafl.gov/Department-Pages/Public-Works/Solid-Waste";
const FWC_FEEDING = "https://myfwc.com/conservation/you-conserve/wildlife/feeding/";
const FWC_REGIONS = "https://myfwc.com/contact/fwc-staff/regional-offices/";

export const sarasota = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-sarasota-fl",
  name: "Sarasota",
  county: "Sarasota",
  order: 26,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN SARASOTA",
  summary: "Wildlife removal and wildlife control in Sarasota, FL: raccoons, rats, bats, squirrels, opossums, snakes and armadillos.",
  heroText: "Two rabid raccoons in 18 months and 22 rats trapped in one rental kitchen: Sarasota's wildlife problems are on the record. Call (727) 594-7705.",
  answerHeading: "Who handles wildlife control in Sarasota, FL?",
  answer:
    "For animals living in your home, a private company. The Sheriff's Animal Services responds to wildlife and pet incidents such as bites and injured animals. For raccoons, rats, bats or squirrels in a Sarasota attic, wall or garage, Pro Wildlife Removal finds the way in, removes them as Florida law allows and seals the entry points. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Rabid raccoons, 2025 and 2026", "City carts: lids closed"],
  townsHeading: "Sarasota and nearby",
  townsIntro: "Florida's EDR puts the City of Sarasota at 58,279 people in April 2025, in a county of 487,640. We take calls in the city and the unincorporated county around it.",
  towns: [
    {
      title: "Sarasota County",
      items: [{ label: "City of Sarasota" }, { label: "Bee Ridge" }, { label: "Nokomis" }],
    },
  ],
  localHeading: "Raccoons, rabies and yard holes in Sarasota",
  localIntro: "Health department advisories, UF/IFAS Extension fact sheets and state records put these animals on the record here.",
  local: [
    { icon: "critter", title: "Raccoons carry rabies here", text: p("UF/IFAS Extension in Sarasota County says raccoons are the primary carriers of rabies in the area. That's why a raccoon in the attic is a job for our local raccoon removal experts, not a broom.") },
    { icon: "search", title: "Bee Ridge, January 2025", text: p("DOH-Sarasota issued a rabies advisory on Jan. 30, 2025, after a raccoon killed in the Bee Ridge area five days earlier tested positive.") },
    { icon: "map-pin", title: "Near Proctor Road, July 2026", text: p("A second advisory followed in July 2026, after a raccoon killed near Proctor Road on July 21 tested positive, WGCU reported.") },
    { icon: "leaf", title: "Quiet years too", text: p("The state's 2024 table shows no confirmed animal rabies in Sarasota County that year. The Sarasota News Leader reported two rabid raccoons in the county in 2022 and a rabid bat in 2018.") },
    { icon: "home", title: "Whose hole is it?", text: p("The Extension's yard-holes sheet says armadillo burrows are round, 7 to 8 inches wide and close to structures or roots, while rodent holes are smooth, 2 to 3 inches wide, with worn runways. Gopher tortoises are threatened: leave 25 feet around a burrow alone.") },
  ],
  rats: {
    heading: "Rats in Sarasota",
    intro: "A 2026 rental case and the city's cart rules show where rats turn up here.",
    cards: [
      { icon: "home", title: "22 rats in a rental kitchen", text: p("WWSB reported in August 2026 that a Sarasota renter trapped 22 rats in her kitchen in about a week and a half and moved her family out while the problem was treated.") },
      { icon: "wrench", title: "Lids closed, out by 7 a.m.", text: p("City rules say city-issued carts must have their lids closed and go to the right of way by 7 a.m. on collection day. City Solid Waste: 941-263-6170.") },
    ],
    link: { label: "rat removal", href: "/services/rat-removal/" },
  },
  contactsHeading: "Sarasota Animal Services, DOH and wildlife contacts",
  contactsIntro: "Sarasota numbers for bites, injured animals and state wildlife matters, each from the agency's page.",
  contacts: [
    { icon: "users", title: "Sheriff's Animal Services", text: p("941-861-9501. Wildlife and domestic animal incidents, including bites, injured animals and nuisance complaints.") },
    { icon: "phone", title: "Rabies and bites: DOH-Sarasota", text: p("941-861-2873, the number in its 2025 and 2026 rabies advisories for bites and rabies questions.") },
    { icon: "leaf", title: "Injured wildlife", text: p("The Extension sends sick, injured or orphaned wildlife to the Wildlife Center of Southwest Florida: 941-484-9657.") },
    { icon: "map-pin", title: "State wildlife matters: FWC", text: p("FWC's Southwest Region office in Lakeland, 863-648-3200.") },
  ],
  servicesIntro: "Our wildlife removal services, wildlife exclusion services included, cover every animal below in Sarasota. Pick one for the signs and how the job works.",
  servicesHeading: "Wildlife removal services in Sarasota",
  reviewsIntro: "[PLACEHOLDER: reviews from Sarasota customers, matched from the client's Google reviews (TTR-723)]",
  faqHeading: "Sarasota wildlife questions",
  faqs: [
    faq(
      "Has rabies turned up in Sarasota County lately?",
      `Yes. DOH-Sarasota issued rabies advisories in January 2025 and July 2026, both after raccoons tested positive ([2025](${ADVISORY_2025}), [2026](${ADVISORY_2026})). Avoid physical contact with wild animals such as raccoons and bats.`,
    ),
    faq(
      "Can I feed the raccoons in my Sarasota yard?",
      `No. FWC rule 68A-4.001 bars placing food in a manner that attracts raccoons ([FWC](${FWC_FEEDING})). Fed raccoons lose their fear of people; see our guide to [what to do about raccoons](/blog/what-to-do-about-raccoons/).`,
    ),
    faq(
      "What do I do with an injured raccoon or bird?",
      `Don't keep it. UF/IFAS Extension in Sarasota County says holding sick or injured wildlife longer than it takes to get it to a licensed rehabilitator violates Florida law, and it points to the Wildlife Center of Southwest Florida, 941-484-9657 ([UF/IFAS](${IFAS_WHO})).`,
    ),
    faq(
      "Do I need an exterminator for rats in my Sarasota rental?",
      `Check your lease first: in the 2026 WWSB case, the property manager told the tenant the rats were her job ([WWSB](${RENTAL})). Either way, we're a wildlife removal company, not an exterminator: we find how the rats get in, trap them and seal those entry points, with no spraying.`,
    ),
    faq(
      "How fast can you reach a Sarasota home?",
      "Same-day appointments are often available in Sarasota. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Wildlife problem in Sarasota?",
  ctaText: "Our local wildlife removal experts take calls across Sarasota at (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Sarasota, FL | Pro Wildlife Removal",
    description:
      "Sarasota wildlife removal and wildlife control: raccoons, rats, bats and squirrels, plus the 2025 and 2026 rabies advisories and contacts. (727) 594-7705.",
  },
  sources: [
    { title: "DOH-Sarasota: Rabies advisory, Jan. 30, 2025 (raccoon killed Jan. 25, 2025, in the Bee Ridge area tested positive; bites 941-861-2873; Animal Services 941-861-9501)", url: ADVISORY_2025 },
    { title: "DOH-Sarasota: Rabies advisory, July 22, 2026 (rabid raccoon killed in Sarasota County on July 21, 2026; avoid contact with wild animals)", url: ADVISORY_2026 },
    { title: "WGCU, July 22, 2026: Rabies advisory issued in Sarasota County after single confirmed case in a raccoon (near Proctor Road)", url: WGCU_2026 },
    S.doh2024,
    { title: "Sarasota News Leader, Feb. 6, 2025: Rabies identified in raccoon killed in Bee Ridge Road area (two rabid raccoons in the county in 2022; a rabid bat in 2018)", url: SNL_RABIES },
    { title: "UF/IFAS Extension Sarasota County: Who to contact for wildlife concerns, 2025 (raccoons the primary rabies vectors in the area; Wildlife Center of Southwest Florida 941-484-9657; DOH-Sarasota; keeping injured wildlife beyond transport to a licensed rehabilitator violates Florida law)", url: IFAS_WHO },
    { title: "UF/IFAS Extension Sarasota County: Wildlife disturbances in your yard, 2023 (armadillo burrows round, 7-8 inches; rodent holes smooth, 2-3 inches; gopher tortoises threatened, 25 feet left undisturbed)", url: IFAS_HOLES },
    { title: "Sarasota County Sheriff's Office: Animal Services (wildlife and domestic animal incidents, including nuisance complaints, bites, injured animals; 941-861-9501)", url: SHERIFF },
    { title: "WWSB/ABC7, Aug. 24, 2026: Sarasota mother says rat infestation is forcing her family from rental home (22 rats trapped in the kitchen in about a week and a half; property manager said it was the tenant's job)", url: RENTAL },
    { title: "Sarasota News Leader, Feb. 27, 2025: City of Sarasota residents urged to follow rules for solid waste collections (out by 7 a.m.; city-issued cart lids closed)", url: SNL_TRASH },
    { title: "City of Sarasota: Solid Waste (941-263-6170)", url: CITY_SW },
    { title: "FWC: Feeding wildlife (68A-4.001 prohibits placing food in a manner that attracts raccoons)", url: FWC_FEEDING },
    { title: "FWC: Regional offices (Southwest Region, Lakeland, 863-648-3200, covers Sarasota County)", url: FWC_REGIONS },
    S.edr,
  ],
  clientQuestions: ["Reviews and real job photos from Sarasota customers."],
});
