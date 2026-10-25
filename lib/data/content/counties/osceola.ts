import { countyPage, S } from "./build.ts";
import { faq, p } from "../pt.ts";

/* New page (Ben, Oct 25): main number until the client gives an Osceola line; towns listed as facts, not service history. */
export const osceola = countyPage({
  path: "about-us/service-area/wildlife-removal-osceola-county-fl",
  name: "Osceola County",
  county: "Osceola",
  order: 10,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  summary: "Wildlife removal in Osceola County: bats, rats, raccoons, squirrels, snakes and more, around Kissimmee, St. Cloud and the lakes.",
  heroText: "The fastest-growing county we serve, where new neighborhoods ring Lake Tohopekaliga and the Kissimmee Prairie stretches south. Call us any hour.",
  answerHeading: "Who removes wildlife in Osceola County?",
  answer:
    "Pro Wildlife Removal handles bats, rats, raccoons, squirrels, snakes, opossums, armadillos, bees and dead animals in Osceola County. We track down the way in, take the animal out within Florida's rules, close the opening and clean up. Call (727) 594-7705, 24 hours a day, 7 days a week.",
  points: ["Call (727) 594-7705", "Open 24/7", "Kissimmee is the county seat", "Rabies alerts in 2026"],
  townsHeading: "Osceola County towns",
  townsIntro: "Kissimmee is the county seat, and St. Cloud is the only other city. About 67% of residents live outside city limits.",
  townsNote: "[PLACEHOLDER: ask the client: which Osceola towns you serve, and an Osceola phone number if there is one]",
  towns: [
    {
      title: "Osceola County",
      items: [{ label: "Kissimmee" }, { label: "St. Cloud" }, { label: "Celebration" }, { label: "Harmony" }],
    },
  ],
  localHeading: "Wildlife in Osceola County",
  localIntro: "Osceola grew from about 389,000 people in 2020 to an estimated 482,000 in 2025, about 24% in five years. Yet 88% of its 1,328 square miles of land is still rural.",
  local: [
    { icon: "critter", title: "Four rabies alerts since 2024", text: p("The Department of Health has issued Osceola rabies alerts for a rabid raccoon off South Orange Blossom Trail in Kissimmee (February 2026) and for rabid cats in Kissimmee, St. Cloud and Mill Creek Woods.") },
    { icon: "map-pin", title: "Big lakes", text: p("FWC describes Lake Tohopekaliga as an 18,810-acre lake southeast of Kissimmee, part of the Kissimmee Chain of Lakes. Lakefront homes live alongside a lot of wildlife.") },
    { icon: "leaf", title: "Prairie to the south", text: p("FWC's Three Lakes area covers more than 63,000 acres of southern Osceola, preserving part of the Kissimmee Prairie.") },
    { icon: "building", title: "Fast growth", text: p("New subdivisions keep going up on open land, and that moves animals around. A new roof with an unsealed gap is an open door.") },
  ],
  servicesIntro: "Choose the animal to read the signs, the Florida rules for it and how we handle it.",
  faqs: [
    faq(
      "What number do I call in Osceola County?",
      "Call the main line, (727) 594-7705. There's always someone on the phone, any day, any hour.",
      "[PLACEHOLDER: ask the client: typical response time in Osceola County]",
    ),
    faq(
      "Has rabies been found in Osceola County recently?",
      "Yes. The Department of Health issued an alert in February 2026 after a rabid raccoon in the Kissimmee area, and alerts for rabid cats in Kissimmee (May 2026), St. Cloud (January 2026) and Mill Creek Woods (July 2024). In 2024 it also counted two rabid bats in the county.",
    ),
    faq(
      "Are there bears in Osceola County?",
      "FWC places Osceola in its South Central bear area. (FWC's \"North (Osceola)\" bear group is named for the Osceola National Forest in north Florida, not this county.) Bears are FWC's responsibility.",
    ),
  ],
  ctaHeading: "Wildlife problem in Osceola County?",
  ctaText: "Call (727) 594-7705, any hour.",
  seo: {
    title: "Wildlife Removal in Osceola County, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Osceola County, FL: bats, rats, raccoons, squirrels, snakes, opossums and more. Humane removal, sealing and cleanup. Call 24/7: (727) 594-7705.",
  },
  sources: [
    S.censusPop,
    S.censusUR,
    { title: "U.S. Census Bureau: 2020 Gazetteer, Florida counties (Osceola land area about 1,328 sq mi)", url: "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2020_Gazetteer/2020_gaz_counties_12.txt" },
    S.edr,
    S.edrUninc,
    S.seats,
    S.doh2024,
    { title: "Florida DOH: Osceola alert, Feb 19, 2026 (rabid raccoon, Kissimmee area off South Orange Blossom Trail)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/02/alert-osceola-2-19-2026.pdf" },
    { title: "Florida DOH: Osceola alert, May 28, 2026 (rabid cat, Kissimmee)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/06/rabies-alert-osceola-county-5-28-26.pdf" },
    { title: "Florida DOH: Osceola alert, Jan 20, 2026 (rabid cat, St. Cloud)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/08/rabies-alert-osceola-county-1-20-26.pdf" },
    { title: "Florida DOH: Osceola alert, July 11, 2024 (rabid cat, Mill Creek Woods)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/alert-osceola-7-11-2024.pdf" },
    { title: "FWC: Lake Tohopekaliga (18,810 acres, southeast of Kissimmee)", url: "https://myfwc.com/fishing/freshwater/sites-forecasts/ne/lake-tohopekaliga/" },
    { title: "FWC: Three Lakes WMA (more than 63,000 acres of southern Osceola; Kissimmee Prairie)", url: "https://myfwc.com/recreation/lead/three-lakes/" },
    { title: "FWC: South Central and North bear management units", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/bmu/south-central/" },
  ],
  clientQuestions: [
    "Which Osceola County towns do you serve, and is there an Osceola phone number?",
    "Typical response time in Osceola County?",
    "Real job photos and reviews from Osceola customers.",
  ],
});
