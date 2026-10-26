import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Holiday page, rewritten in place at its existing URL (Ben, Oct 26). Checkable local facts only. */
const CENSUS = "https://www2.census.gov/programs-surveys/decennial/2020/data/01-Redistricting_File--PL_94-171/Florida/fl2020.pl.zip";

export const holiday = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-holiday-fl",
  name: "Holiday",
  county: "Pasco",
  order: 13,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN HOLIDAY",
  summary: "Wildlife removal in Holiday, FL: raccoons, rats, squirrels, opossums, snakes, armadillos, bats and more, on the Pasco coast.",
  heroText: "Pasco's southern Gulf coast, on the Anclote River across from Tarpon Springs. Call (727) 594-7705.",
  answerHeading: "Who removes wildlife in Holiday, FL?",
  answer:
    "Holiday is unincorporated Pasco County, so county services apply. Pasco County Animal Services handles pets and strays, not animals living in your home. For raccoons, rats, squirrels or opossums, call a private company. Pro Wildlife Removal works across Holiday. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Unincorporated Pasco", "On the Anclote River"],
  townsHeading: "Holiday and nearby",
  townsIntro: "Holiday had about 24,900 residents at the 2020 Census. It borders Tarpon Springs to the south.",
  towns: [
    {
      title: "Southwest Pasco coast",
      href: "/service-areas/pasco-county/",
      items: [
        { label: "New Port Richey", href: "/service-areas/pasco-county/new-port-richey/" },
        { label: "Trinity", href: "/service-areas/pasco-county/trinity/" },
        { label: "Elfers" },
        { label: "Key Vista" },
        { label: "Tarpon Springs (Pinellas)" },
      ],
    },
  ],
  localHeading: "Life on the Anclote",
  localIntro: "Holiday's coast runs along the Gulf and the mouth of the Anclote River. Two county parks there show what lives along the water.",
  local: [
    { icon: "map-pin", title: "Anclote River Park", text: p("Pasco County's waterfront park on Baillies Bluff Road. FWC's Great Florida Birding Trail lists egrets, wood storks, pelicans, ospreys and bald eagles, plus sea turtles and dolphins passing by.") },
    { icon: "leaf", title: "Key Vista Nature Park", text: p("Just up Baillies Bluff Road, the Birding Trail lists Key Vista at 96 acres, with brown pelicans, ospreys, bald eagles, great horned owls and black skimmers.") },
    { icon: "critter", title: "Coastal yards", text: p("Seawalls, docks and boathouses give raccoons and rats cover close to the water. A raccoon raiding a boat or a cooler is often the same one that ends up in the attic.") },
    { icon: "search", title: "Rabies in Pasco", text: p("Pasco County Animal Services counted 17 rabid raccoons between 2013 and 2023, more than any other animal in the county. Never hand-feed raccoons.") },
  ],
  rats: {
    heading: "Rodent closures along US 19",
    intro: "Holiday's rat record comes from state restaurant inspections, not home reports. Here's what the closure files show.",
    cards: [
      { icon: "building", title: "Four closures, 2022 to 2025", text: p("By our count of Florida DBPR's emergency closure reports, state inspectors shut food businesses with Holiday addresses 4 times for rodent activity from 2022 through 2025, at 3 businesses: three times on US 19 and once on Alternate 19.") },
      { icon: "search", title: "Repeat closures on US 19", text: p("One US 19 restaurant was closed for rodents in May 2023 and again in June 2024, and another in November 2020 and August 2021. From 2019 through 2025 the files list 8 Holiday rodent closures, 5 of them on US 19.") },
    ],
    link: { label: "rat removal across Pasco County", href: "/services/rat-removal/pasco-county-fl/" },
  },
  contactsHeading: "Pasco and FWC contacts for Holiday residents",
  contactsIntro: "As unincorporated Pasco, Holiday uses county and state numbers, listed here from each agency's own page.",
  contacts: [
    { icon: "users", title: "Pets and strays", text: p("Pasco County Animal Services, 813-929-1212. Emergencies from 5 pm to 8 am: (727) 847-8102, option 7.") },
    { icon: "phone", title: "Bites: DOH-Pasco", text: p("Report an animal bite in Holiday to the health department in Pasco at 352-521-1450, option 4.") },
    { icon: "map-pin", title: "Injured sea life: FWC", text: p("FWC Wildlife Alert, 888-404-3922, for injured or dead sea turtles, dolphins and manatees. Nuisance alligators: 866-FWC-GATOR.") },
  ],
  servicesIntro: "Along the Anclote River and across Holiday, we remove every animal below. Pick one to learn more.",
  servicesHeading: "Animals we remove in Holiday",
  reviewsIntro: "[PLACEHOLDER: reviews from Holiday customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Does Pasco County remove raccoons from homes in Holiday?",
      "No. Pasco County Animal Services covers pets and strays. A raccoon in the attic or under the house is a job for a wildlife company. See [raccoons in the attic](/services/raccoons-in-attic/).",
    ),
    faq(
      "Who do I call about an injured sea turtle or dolphin near Holiday?",
      "FWC's Wildlife Alert hotline, 888-404-3922. We don't handle marine animals.",
    ),
    faq(
      "Is Holiday part of Tarpon Springs?",
      "No. Holiday is unincorporated Pasco County. Tarpon Springs, its neighbor to the south, is a city in Pinellas County with its own services.",
    ),
    faq(
      "How quickly can you reach Holiday?",
      "Same-day appointments are often available in Holiday. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Wildlife problem in Holiday?",
  ctaText: "Holiday homeowners can call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Holiday, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Holiday, FL: raccoons, rats, squirrels, opossums and snakes on the Anclote River, and who to call for what in Holiday. (727) 594-7705.",
  },
  sources: [
    { title: "Florida DBPR, Division of Hotels and Restaurants: Emergency closures by calendar year, 2019-2025 (Business City Holiday, conditions naming rodents: 8 closures 2019-2025, 5 on US 19; 4 in 2022-2025 at 3 businesses, 3 on US 19 and 1 on Alt 19; tally by our research helper, Oct 26, 2026)", url: "https://www2.myfloridalicense.com/hotels-restaurants/reports-statistics/reports-statistics-archive/" },
    { title: "U.S. Census Bureau: 2020 redistricting file (Holiday CDP, 24,939)", url: CENSUS },
    { title: "U.S. Census Bureau: TIGER/Line 2020 places, Florida (Holiday CDP borders Tarpon Springs, Elfers, Key Vista, Beacon Square, East Lake)", url: "https://www2.census.gov/geo/tiger/TIGER2020/PLACE/tl_2020_12_place.zip" },
    { title: "Pasco County: Anclote River Park (1119 Baillies Bluff Road, Holiday)", url: "https://www.pascocountyfl.gov/_T22_R51.php" },
    { title: "FWC Great Florida Birding Trail: Anclote River Park (egrets, wood storks, pelicans, ospreys, bald eagles; sea turtles and dolphins)", url: "https://floridabirdingtrail.com/site/anclote-river-park/" },
    { title: "FWC Great Florida Birding Trail: Key Vista Nature Park (96 acres; 2700 Baillies Bluff Rd; brown pelican, osprey, bald eagle, great horned owl, black skimmer)", url: "https://floridabirdingtrail.com/site/key-vista-nature-park/" },
    { title: "Pasco County: Rabies awareness (24 positive animals 2013-2023: 17 raccoons, 6 cats, 1 bat)", url: "https://www.pascocountyfl.gov/services/animal_services/programs/rabies_awareness.php" },
    { title: "Pasco County: Animal Services (813-929-1212; after hours (727) 847-8102 option 7, 5 pm to 8 am)", url: "https://www.pascocountyfl.gov/services/animal_services/index.php" },
    { title: "DOH-Pasco: Rabies advisory, July 30, 2026 (352-521-1450, option 4)", url: "https://pasco.floridahealth.gov/2026/07/30/doh-pasco-issues-rabies-advisory/" },
    { title: "FWC: Regional offices (Wildlife Alert 888-404-3922) and Nuisance Alligator Program", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Holiday reviews (from TTR-723) and real Holiday job photos."],
});
