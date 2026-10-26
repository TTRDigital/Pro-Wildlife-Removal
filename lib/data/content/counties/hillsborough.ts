import { countyPage, S } from "./build.ts";
import { faq, p } from "../pt.ts";

export const hillsborough = countyPage({
  path: "about-us/service-area/wildlife-removal-hillsborough-county",
  name: "Hillsborough County",
  county: "Hillsborough",
  order: 4,
  phone: { label: "Call 727-594-7705", href: "tel:+17275947705" },
  summary: "Wildlife removal across Hillsborough County: Tampa, Brandon, Riverview, Plant City, Temple Terrace and the communities between.",
  heroText: "Tampa and its suburbs on one side, farms and preserve land on the other. Half the county's land is still rural, and the wildlife moves between the two.",
  answerHeading: "Who removes wildlife in Hillsborough County?",
  answer:
    "Pro Wildlife Removal handles bats, rats, raccoons, squirrels, snakes, opossums, armadillos, bees and dead animals throughout Hillsborough County, from Tampa and Temple Terrace to Brandon, Riverview and Plant City. We find the entry, remove the animal the way Florida law allows, seal it and clean up. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Tampa to Plant City", "Most rabid bats in our area, 2025"],
  townsHeading: "Hillsborough towns we cover",
  townsIntro: "Tampa is the county seat and largest city. About 69% of county residents live outside city limits, in places like Brandon and Riverview.",
  towns: [
    {
      title: "Tampa and north",
      items: [
        { label: "Tampa", href: "/about-us/service-area/tampa/wildlife-removal-service-in-tampa-fl/" },
        { label: "Temple Terrace" },
        { label: "Lutz" },
        { label: "Odessa", href: "/about-us/service-area/wildlife-removal-odessa-fl/" },
        { label: "Town 'N' Country" },
      ],
    },
    {
      title: "East and south",
      items: [{ label: "Brandon" }, { label: "Riverview" }, { label: "Valrico" }, { label: "Plant City" }, { label: "Apollo Beach" }],
    },
  ],
  localHeading: "What drives wildlife calls in Hillsborough",
  localIntro: "The 2020 Census counted 96% of Hillsborough residents as urban, yet about half of the county's 1,022 square miles of land is rural. That edge between city and country is where most conflicts start.",
  local: [
    { icon: "critter", title: "Bats with rabies", text: p("Florida's Department of Health counted four rabid bats in Hillsborough in 2025, the most of any county in our service area. A bat in the house is never something to pick up.") },
    { icon: "leaf", title: "Protected land all around", text: p("The county has bought more than 63,400 acres of sensitive wildlife habitat and corridors through its ELAPP land program. Homes along those corridors live right next to raccoons, opossums and snakes.") },
    { icon: "building", title: "Stray cats and rabies", text: p("DOH-Hillsborough issued rabies alerts for rabid stray or unvaccinated cats in Town 'N' Country (April 2025) and Gibsonton (September 2026). Feeding strays outdoors also feeds raccoons.") },
    { icon: "home", title: "Older Tampa homes", text: p("Older roofs, soffits and gable vents wear out, and every gap is an invitation to roof rats, squirrels and bats.") },
    { icon: "map-pin", title: "River wilderness", text: p("The water district's Lower Hillsborough Wilderness Preserve lets you paddle the Hillsborough River among wading birds, turtles and alligators, with over 60 miles of forest trails.") },
  ],
  contactsIntro: "Here's who to call for the problems we don't handle in Hillsborough, with each number from the agency's own site.",
  contacts: [
    { icon: "users", title: "Hillsborough County Animal Control", text: p("(813) 744-5660. Part of Code Enforcement: sick or injured stray pets, animal bite investigations, dangerous dogs and neglect, including in Tampa, Temple Terrace and Plant City.") },
    { icon: "phone", title: "Animal bites: DOH-Hillsborough", text: p("813-307-8059, Environmental Public Health, to report an animal bite.") },
    { icon: "map-pin", title: "Bears and alligators: FWC", text: p("FWC's Southwest Region office, 863-648-3200, takes bear conflicts. Alligators go to 866-FWC-GATOR.") },
  ],
  servicesIntro: "Every service is available across Hillsborough. Choose the animal to read about the signs and how we handle it.",
  faqs: [
    faq(
      "What number do I call in Hillsborough County?",
      "Call (727) 594-7705. Same-day appointments are often available in Hillsborough County.",
      "[PLACEHOLDER: ask the client: typical response time in Hillsborough County]",
    ),
    faq(
      "Has rabies been found in Hillsborough County recently?",
      "Yes. The Department of Health counted four rabid bats, a cat and a raccoon in Hillsborough in 2025, and DOH-Hillsborough issued a rabies alert in September 2026 after a rabid cat in Gibsonton. Keep pets vaccinated and report any bite.",
    ),
    faq(
      "Do you handle bats in Tampa?",
      "Yes, by legal exclusion from August 15 to April 15. During bat maternity season, April 16 to August 14, exclusion isn't allowed without an FWC permit. See [bats in the attic](/services/bats-in-attic/).",
    ),
    faq(
      "Do you cover Brandon and Riverview?",
      "Yes, and the rest of the county. See the towns listed above, or call and ask about your address.",
    ),
    faq(
      "Who handles a stray or injured pet in Hillsborough?",
      "Hillsborough County Animal Control, (813) 744-5660. It transports sick or injured stray pets and investigates animal bites. Wild animals in your attic, walls or yard are a job for a wildlife company.",
    ),
    faq(
      "Is there a number for nuisance alligators in Hillsborough?",
      "Yes: FWC's statewide hotline, 866-FWC-GATOR (866-392-4286). An alligator 4 feet or longer that threatens people, pets or property generally qualifies.",
    ),
  ],
  ctaHeading: "Wildlife problem in Hillsborough?",
  ctaText: "Anywhere in Hillsborough, call (727) 594-7705.",
  seo: {
    title: "Hillsborough County Wildlife Removal | Pro Wildlife Removal",
    description:
      "Wildlife removal across Hillsborough County: Tampa, Brandon, Riverview, Plant City and Temple Terrace. Bats, rats, raccoons and snakes: (727) 594-7705.",
  },
  sources: [
    S.censusPop,
    S.censusUR,
    { title: "U.S. Census Bureau: 2020 Gazetteer, Florida counties (land area)", url: "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2020_Gazetteer/2020_gaz_counties_12.txt" },
    S.edr,
    S.edrUninc,
    S.seats,
    S.doh2024,
    S.doh2025,
    { title: "DOH-Hillsborough: Rabies alert, Sept 14, 2026 (rabid cat, Gibsonton)", url: "https://hillsborough.floridahealth.gov/2026/09/14/doh-hillsborough-issues-rabies-alert-2/" },
    { title: "Florida DOH: Hillsborough rabies alert, April 14, 2025 (rabid stray cat, Town 'N' Country)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/alert-hillsborough-dade-4-14-2025.pdf" },
    { title: "Hillsborough County: ELAPP (more than 63,400 acres of environmentally sensitive wildlife habitat and corridors)", url: "https://hcfl.gov/residents/parks-and-leisure/conservation-lands/elapp" },
    S.bats,
    { title: "Hillsborough County: Animal Control ((813) 744-5660; stray pets, bites, dangerous dogs)", url: "https://hcfl.gov/locations/animal-control" },
    { title: "DOH-Hillsborough: Report an animal bite (813-307-8059)", url: "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/report-an-animal-bite/" },
    { title: "SWFWMD: Lower Hillsborough Wilderness Preserve (wading birds, turtles, alligators; over 60 miles of trails)", url: "https://www.swfwmd.state.fl.us/recreation/lower-hillsborough-wilderness-preserve" },
    { title: "FWC: Regional offices (counties per region; Southwest 863-648-3200; North Central 386-758-0525; Northeast 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
    { title: "FWC: Living with bears (report human-bear conflicts to your nearest regional office)", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/living/" },
    { title: "FWC: Statewide Nuisance Alligator Program (866-FWC-GATOR; 4 feet or longer and a threat)", url: "https://myfwc.com/wildlifehabitats/wildlife/alligator/snap/" },
  ],
  clientQuestions: ["Typical response time in Hillsborough County?", "Real job photos and reviews from Hillsborough customers."],
});
