import { countyPage, S } from "./build.ts";
import { faq, p } from "../pt.ts";

/* New page (Ben, Oct 25): main number until the client gives a Manatee line; towns listed as facts, not service history. */
export const manatee = countyPage({
  path: "about-us/service-area/wildlife-removal-manatee-county-fl",
  name: "Manatee County",
  county: "Manatee",
  order: 9,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  summary: "Wildlife removal in Manatee County: bats, rats, raccoons, squirrels, snakes and more, from the Bradenton area to the county's rural east.",
  heroText: "Barrier-island beaches on the west, Bradenton and Palmetto in the middle, ranch land and preserves to the east. Call us any time, day or night.",
  answerHeading: "Who handles wildlife removal in Manatee County?",
  answer:
    "Pro Wildlife Removal removes bats, rats, raccoons, squirrels, snakes, opossums, armadillos, bees and dead animals in Manatee County. We inspect, remove the animal the way Florida law allows, seal the entry points and clean up. Call (727) 594-7705, 24 hours a day.",
  points: ["Call (727) 594-7705", "Open 24/7", "Bradenton is the county seat", "Entry points sealed"],
  townsHeading: "Manatee County towns",
  townsIntro: "Bradenton is the county seat and largest city. About 83% of residents live outside city limits.",
  townsNote: "[PLACEHOLDER: ask the client: which Manatee towns you serve, and a Manatee phone number if there is one]",
  towns: [
    {
      title: "Manatee County",
      items: [{ label: "Bradenton" }, { label: "Palmetto" }, { label: "Holmes Beach" }, { label: "Anna Maria" }, { label: "Bradenton Beach" }],
    },
  ],
  localHeading: "Wildlife in Manatee County",
  localIntro: "Manatee grew from about 400,000 people in 2020 to an estimated 468,000 in 2025. The 2020 Census counted 95% of residents as urban, but 76% of the land is still rural.",
  local: [
    { icon: "home", title: "Trash and rodents", text: p("UF/IFAS Extension in Manatee points out that trash gives rodents food, water and shelter, and notes the county provides large lidded carts to keep wildlife and pests out. Lids closed, rats go elsewhere.") },
    { icon: "leaf", title: "Big preserves to the east", text: p("Duette Preserve, at over 21,000 acres, is the largest preserve in Manatee County. Homes on the growing east side sit closer to wild land.") },
    { icon: "critter", title: "Rabies: rare here lately", text: p("The Department of Health's last Manatee rabies alert was in May 2023, after a rabid cat in the Palm View area of Palmetto, and it counted no rabid animals in Manatee in 2024 or 2025. Rare doesn't mean never: don't handle wildlife.") },
    { icon: "search", title: "South Central bear area", text: p("FWC places Manatee in its South Central bear area. Bears are FWC's department: lock up the trash and give them a call.") },
  ],
  servicesIntro: "Choose the animal to read the signs, Florida's rules for it and how we handle it.",
  faqs: [
    faq(
      "What number do I call in Manatee County?",
      "Call the main line, (727) 594-7705. Calls are taken day and night, every day of the year.",
      "[PLACEHOLDER: ask the client: typical response time in Manatee County]",
    ),
    faq(
      "How do I keep rats out of the trash in Manatee County?",
      "Keep the lid on. UF/IFAS Extension in Manatee notes trash gives rodents food, water and shelter, and the county's large lidded carts help keep them out. If rats are already in the attic, see [rats in the attic](/services/rats-in-attic/).",
    ),
    faq(
      "Is rabies a concern in Manatee County?",
      "Recent cases have been rare. The last Manatee rabies alert on the state's list was in May 2023, after a rabid cat in Palmetto, and none were counted in 2024 or 2025. Report any wildlife bite to the health department.",
    ),
  ],
  ctaHeading: "Wildlife problem in Manatee County?",
  ctaText: "Call (727) 594-7705, day or night.",
  seo: {
    title: "Wildlife Removal in Manatee County, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Manatee County, FL: bats, rats, raccoons, squirrels, snakes, opossums and more. Humane removal, sealing and cleanup. Call 24/7: (727) 594-7705.",
  },
  sources: [
    S.censusPop,
    S.censusUR,
    S.edr,
    S.edrUninc,
    S.seats,
    { title: "Florida DOH: Manatee alert, May 18, 2023 (rabid cat, Palm View area of Palmetto)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/alert-manatee-5-18-2023.pdf" },
    S.doh2024,
    S.doh2025,
    { title: "UF/IFAS Extension Manatee: Talking trash, rodent prevention, May 29, 2026 (trash supplies rodents food, water, shelter; Manatee provides large lidded carts)", url: "https://blogs.ifas.ufl.edu/manateeco/2026/05/29/talking-trash-rodent-prevention/" },
    { title: "Manatee County: Preserves (Duette Preserve, over 21,000 acres, largest in the county)", url: "https://mymanatee.org/departments/natural_resources/preserves" },
    { title: "FWC: South Central bear management unit", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/bmu/south-central/" },
  ],
  clientQuestions: [
    "Which Manatee County towns do you serve, and is there a Manatee phone number?",
    "Typical response time in Manatee County?",
    "Real job photos and reviews from Manatee customers.",
  ],
});
