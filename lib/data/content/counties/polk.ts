import { countyPage, S } from "./build.ts";
import { faq, p } from "../pt.ts";

export const polk = countyPage({
  path: "about-us/service-area/wildlife-removal-polk-county",
  name: "Polk County",
  county: "Polk",
  order: 8,
  phone: { label: "Call 863-208-5050", href: "tel:+18632085050" },
  summary: "Wildlife removal in Polk County: Lakeland, Winter Haven, Haines City, Bartow and the lake towns between them.",
  heroText: "The largest county we serve by land area, with over 500 named lakes and fast-growing cities in between. Call the Polk line, any hour.",
  answerHeading: "Who removes wildlife in Polk County?",
  answer:
    "Pro Wildlife Removal handles bats, rats, raccoons, squirrels, snakes, opossums, armadillos, bees and dead animals across Polk County, including Lakeland, Winter Haven, Haines City and Bartow. We find how the animal gets in, remove it the way Florida law allows, seal the gap and clean up. Call 863-208-5050, 24/7.",
  points: ["Polk line 863-208-5050", "Lakeland to Haines City", "Over 500 named lakes", "Open 24/7"],
  townsHeading: "Polk towns we cover",
  townsIntro: "Bartow is the county seat and Lakeland the largest city. Polk is the largest county we serve by land area: about 1,800 square miles.",
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
    { icon: "map-pin", title: "Alligators at Circle B Bar", text: p("At the county's Circle B Bar Reserve on Lake Hancock, often called the headwaters of the Peace River, Polk County says alligators are close to a sure sighting.") },
  ],
  contactsIntro: "In Polk, Animal Control is part of the Sheriff's Office. Here's who handles what, from each agency's own page.",
  contacts: [
    { icon: "users", title: "PCSO Animal Control", text: p("(863) 577-1762, toll-free 1-888-275-8941. Bites, dangerous dogs, sick or injured dogs and cats, and bites by possible rabies carriers like raccoons and bats.") },
    { icon: "phone", title: "Animal bites: DOH-Polk", text: p("863-519-8300, the number the department's rabies prevention page gives for reports.") },
    { icon: "map-pin", title: "Bears and alligators: FWC", text: p("FWC's Southwest Region office is in Lakeland: 863-648-3200 for bears. Larger alligators: 866-FWC-GATOR.") },
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
    faq(
      "Will Polk County Animal Control remove nuisance wildlife?",
      "No. The Sheriff's Office FAQ says Animal Control responds to wildlife only when there's a bite or attack, and doesn't respond to nuisance wildlife calls or remove trapped nuisance wildlife.",
    ),
    faq(
      "What about an alligator in my Polk County lake or pool?",
      "The Sheriff's Office refers alligator calls to FWC's hotline, 1-866-392-4286 (866-FWC-GATOR).",
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
    { title: "Polk County Sheriff's Office: Animal Services ((863) 577-1762; 1-888-275-8941)", url: "https://www.polksheriff.org/animal-services" },
    { title: "Polk County Sheriff's Office: Animal Services FAQ (no nuisance wildlife calls; alligators to FWC)", url: "https://www.polksheriff.org/animal-services/frequently-asked-questions" },
    { title: "DOH-Polk: Rabies prevention program (863-519-8300)", url: "https://polk.floridahealth.gov/programs-and-services/environmental-public-health/rabies-prevention-program/" },
    { title: "Polk County: Circle B Bar Reserve (alligators in Lake Hancock)", url: "https://www.polkfl.gov/park/circle-b-bar-reserve/" },
    { title: "FWC: Regional offices (counties per region; Southwest 863-648-3200; North Central 386-758-0525; Northeast 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
    { title: "FWC: Living with bears (report human-bear conflicts to your nearest regional office)", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/living/" },
    { title: "FWC: Statewide Nuisance Alligator Program (866-FWC-GATOR; 4 feet or longer and a threat)", url: "https://myfwc.com/wildlifehabitats/wildlife/alligator/snap/" },
  ],
  clientQuestions: ["Typical response time in Polk County?", "Real job photos and reviews from Polk customers.", "Lakeland and Winter Haven city pages are planned: any jobs or reviews from there?"],
});
