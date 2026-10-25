import { countyPage, S } from "./build.ts";
import { faq, p } from "../pt.ts";

export const polk = countyPage({
  path: "about-us/service-area/wildlife-removal-polk-county",
  name: "Polk County",
  county: "Polk",
  order: 8,
  phone: { label: "Call 863-208-5050", href: "tel:+18632085050" },
  summary: "Wildlife removal in Polk County: Lakeland, Winter Haven, Haines City, Bartow and the lake towns between them.",
  heroText: "The biggest county we serve, with over 500 named lakes and fast-growing cities in between. Call the Polk line, any hour.",
  answerHeading: "Who removes wildlife in Polk County?",
  answer:
    "Pro Wildlife Removal handles bats, rats, raccoons, squirrels, snakes, opossums, armadillos, bees and dead animals across Polk County, including Lakeland, Winter Haven, Haines City and Bartow. We find how the animal gets in, remove it the way Florida law allows, seal the gap and clean up. Call 863-208-5050, 24/7.",
  points: ["Polk line 863-208-5050", "Lakeland to Haines City", "Over 500 named lakes", "Open 24/7"],
  townsHeading: "Polk towns we cover",
  townsIntro: "Bartow is the county seat and Lakeland the largest city. Polk has more land than any other county we serve: about 1,800 square miles.",
  towns: [
    {
      title: "North and west Polk",
      items: [{ label: "Lakeland" }, { label: "Auburndale" }, { label: "Mulberry" }, { label: "Polk City" }],
    },
    {
      title: "East and south Polk",
      items: [
        { label: "Winter Haven", href: "/about-us/service-area/rat-removal-services-winter-haven-fl/" },
        { label: "Haines City" },
        { label: "Bartow" },
        { label: "Lake Wales" },
        { label: "Davenport" },
      ],
    },
  ],
  localHeading: "What drives wildlife calls in Polk",
  localIntro: "Polk grew from about 725,000 people in 2020 to an estimated 875,000 in 2025, while 79% of its land is still rural. New subdivisions are going up beside lakes, groves and wetlands.",
  local: [
    { icon: "map-pin", title: "Lakes everywhere", text: p("UF/IFAS Extension in Polk counts over 500 named lakes in the county. Lakefront living puts homes right beside the wildlife that uses the shore.") },
    { icon: "critter", title: "Bats and raccoons with rabies", text: p("In 2024, Florida's Department of Health counted three rabid bats, a raccoon and a cat in Polk. Rabid raccoons led to alerts near West Frostproof (2024) and north Lakeland (2023).") },
    { icon: "leaf", title: "Green Swamp and the Kissimmee lakes", text: p("Part of the 560,000-acre Green Swamp is in Polk, and FWC's Kissimmee Chain of Lakes area spans 21,000 acres in Polk and Osceola. Big wild areas mean wildlife is never far from town.") },
    { icon: "search", title: "Bears, occasionally", text: p("FWC places Polk in its South Central bear area. Bears are FWC's responsibility: secure the trash and contact FWC if one visits.") },
  ],
  servicesIntro: "Every service is available across Polk. Open any card for the signs, the rules and our process.",
  faqs: [
    faq(
      "What's the phone number for Polk County?",
      "Call the Polk line, 863-208-5050, or the main line, (727) 594-7705. Both are answered 24/7.",
      "[PLACEHOLDER: ask the client: typical response time in Polk County]",
    ),
    faq(
      "Do you cover Lakeland and Winter Haven?",
      "Yes, along with Haines City, Bartow, Auburndale, Lake Wales and the rest of the county.",
    ),
    faq(
      "Has rabies been found in Polk County?",
      "Yes. The Department of Health counted three rabid bats, a raccoon and a cat in Polk in 2024, and issued an alert in June 2026 after a rabid feral cat in north Lakeland. Never handle bats or raccoons, and report any bite.",
    ),
    faq(
      "Do you remove armadillos in Polk?",
      "Yes. Armadillos are trapped at the burrow, and Florida's rules decide where they can go. See [armadillo removal](/services/armadillo-removal/).",
    ),
    faq(
      "Can I release a trapped raccoon at a lake park?",
      "No. A trapped nuisance animal may only be released on the property where it was caught, or on 40 or more contiguous acres in the same county with the landowner's written permission.",
    ),
  ],
  ctaHeading: "Wildlife problem in Polk County?",
  ctaText: "Call the Polk line, 863-208-5050, day or night.",
  seo: {
    title: "Wildlife Removal in Polk County, FL | Lakeland & Winter Haven | Pro Wildlife Removal",
    description:
      "Wildlife removal in Polk County: Lakeland, Winter Haven, Haines City, Bartow and Lake Wales. Bats, rats, raccoons, armadillos, snakes and more. Call 24/7: 863-208-5050.",
  },
  sources: [
    S.censusPop,
    S.censusUR,
    { title: "U.S. Census Bureau: 2020 Gazetteer, Florida counties (Polk land area about 1,798 sq mi)", url: "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2020_Gazetteer/2020_gaz_counties_12.txt" },
    S.edr,
    S.edrUninc,
    S.seats,
    { title: "UF/IFAS Extension Polk: Lakes Appreciation Day Camp, June 9, 2022 (over 500 named lakes)", url: "https://blogs.ifas.ufl.edu/polkco/2022/06/09/lakes-appreciation-day-camp-2022/" },
    S.doh2024,
    { title: "Florida DOH: Polk alert, June 15, 2026 (rabid feral cat, north Lakeland; PDF heading misprints the year)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/06/rabies-alert-polk-county-6-15-26.pdf" },
    { title: "Florida DOH: Polk alert, April 5, 2024 (rabid raccoon, West Frostproof)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/alert-polk-4-5-2024.pdf" },
    { title: "Florida DOH: Polk alert, Aug 4, 2023 (rabid raccoon, north Lakeland)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/alert-polk-8-4-2023.pdf" },
    { title: "SWFWMD: Green Swamp", url: "https://www.swfwmd.state.fl.us/watersheds/green-swamp" },
    { title: "FWC: Kissimmee Chain of Lakes Area (21,000 acres in Polk and Osceola)", url: "https://myfwc.com/recreation/cooperative/kcol/" },
    { title: "FWC: South Central bear management unit", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/bmu/south-central/" },
    S.trapping,
  ],
  clientQuestions: ["Typical response time in Polk County?", "Real job photos and reviews from Polk customers.", "Lakeland and Winter Haven city pages are planned: any jobs or reviews from there?"],
});
