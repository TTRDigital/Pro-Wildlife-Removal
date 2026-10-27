/* NOT LIVE: held out of locations.ts until the client confirms this county (Ben, Oct 26). Kept for later. */
import { countyPage, S } from "./build.ts";
import { faq, p } from "../pt.ts";

/* New page (Ben, Oct 25): one number site-wide (Kia, Oct 26); towns listed as facts, not service history. */
export const manatee = countyPage({
  path: "about-us/service-area/wildlife-removal-manatee-county-fl",
  name: "Manatee County",
  county: "Manatee",
  order: 9,
  phone: { label: "Call (844) 264-6254", href: "tel:+18442646254" },
  summary: "Wildlife removal in Manatee County: bats, rats, raccoons, squirrels, snakes and more, from the Bradenton area to the county's rural east.",
  heroText: "Barrier-island beaches on the west, Bradenton and Palmetto in the middle, ranch land and preserves to the east. Call (844) 264-6254.",
  answerHeading: "Who handles wildlife removal in Manatee County?",
  answer:
    "Pro Wildlife Removal removes bats, rats, raccoons, squirrels, snakes, opossums, armadillos, bees and dead animals in Manatee County. We inspect the house, remove the animal the way Florida law allows and seal the entry points it used. Call (844) 264-6254.",
  points: ["Call (844) 264-6254", "Bradenton is the county seat", "Entry points sealed"],
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
  ],
  contactsHeading: "Manatee County numbers for animal problems",
  contactsIntro: "These are Manatee County's public numbers for animal problems, taken from the county's and agencies' own pages.",
  contacts: [
    { icon: "users", title: "Manatee County Animal Services", text: p("941-742-5933: option 1 to report cruelty, abuse or neglect, option 2 for lost and found pets.") },
    { icon: "phone", title: "Animal bites: DOH-Manatee", text: p("941-748-0747, option 4, to report an animal bite.") },
    { icon: "map-pin", title: "Bears and other state matters: FWC", text: p("Manatee is in FWC's Southwest Region: 863-648-3200. For alligators, call 866-FWC-GATOR (866-392-4286).") },
  ],
  servicesIntro: "Choose the animal to read the signs, Florida's rules for it and how we handle it.",
  faqs: [
    faq(
      "Which number reaches you from Manatee County?",
      "Call (844) 264-6254. Same-day appointments are often available in Manatee County.",
    ),
    faq(
      "How do I keep rats out of the trash in Manatee County?",
      "Keep the lid on. UF/IFAS Extension in Manatee notes trash gives rodents food, water and shelter, and the county's large lidded carts help keep them out. If rats are already in the attic, see [rats in the attic](/services/rats-in-attic/).",
    ),
    faq(
      "Is rabies a concern in Manatee County?",
      "Recent cases have been rare. The last Manatee rabies alert on the state's list was in May 2023, after a rabid cat in Palmetto, and none were counted in 2024 or 2025. Report any wildlife bite to the health department.",
    ),
    faq(
      "Who helps injured wildlife in Manatee County?",
      "The county's animal contacts page lists Wildlife Rescue at 941-778-6324 and FWC's Wildlife Alert Hotline at 1-888-404-3922. Sick or stranded marine mammals and sea turtles go to Mote Marine Laboratory, 888-345-2335.",
    ),
    faq(
      "Which office takes animal bite reports in Manatee?",
      "The Florida Department of Health in Manatee County: 941-748-0747, option 4.",
    ),
  ],
  ctaHeading: "Wildlife problem in Manatee County?",
  ctaText: "Manatee County homeowners can call (844) 264-6254.",
  seo: {
    title: "Wildlife Removal in Manatee County | Pro Wildlife Removal",
    description:
      "Wildlife removal in Manatee County, from Bradenton to the islands: bats, rats, raccoons, snakes and more, and who to call for bites. Call (844) 264-6254.",
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
    { title: "Manatee County: Important animal contacts (Animal Services 941-742-5933; Wildlife Rescue 941-778-6324; FWC 1-888-404-3922)", url: "https://www.mymanatee.org/services-and-amenities/service-listing/service-details/find-important-animal-contacts" },
    { title: "DOH-Manatee: Animal bites and scratches (941-748-0747, option 4)", url: "https://manatee.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/" },
    { title: "Manatee County: Stranding investigation program (Mote Marine Laboratory, 24-hour response, 888-345-2335)", url: "https://www.mymanatee.org/services-and-amenities/service-listing/service-details/stranding-investigation-program" },
    { title: "FWC: Regional offices (counties per region; Southwest 863-648-3200; North Central 386-758-0525; Northeast 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
    { title: "FWC: Living with bears (report human-bear conflicts to your nearest regional office)", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/living/" },
    { title: "FWC: Statewide Nuisance Alligator Program (866-FWC-GATOR; 4 feet or longer and a threat)", url: "https://myfwc.com/wildlifehabitats/wildlife/alligator/snap/" },
  ],
  clientQuestions: [
    "Which Manatee County towns do you serve, and is there a Manatee phone number?",
    "Real job photos and reviews from Manatee customers.",
  ],
});
