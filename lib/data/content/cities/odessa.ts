import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Odessa page, rewritten in place at its existing URL (Ben, Oct 26). Checkable local facts only. */
const CENSUS = "https://www2.census.gov/programs-surveys/decennial/2020/data/01-Redistricting_File--PL_94-171/Florida/fl2020.pl.zip";

export const odessa = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-odessa-fl",
  name: "Odessa",
  county: "Pasco",
  order: 19,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN ODESSA",
  summary: "Wildlife removal in Odessa, FL: raccoons, rats, squirrels, snakes, opossums, armadillos, bats and more, where Pasco meets Hillsborough and Pinellas.",
  heroText: "Lakes and large lots where Pasco, Hillsborough and Pinellas meet. Call (727) 594-7705.",
  answerHeading: "Who handles wildlife in Odessa, FL?",
  answer:
    "Odessa isn't a city, so public services come from the county. Pasco's Animal Services handles pets and strays, and some Odessa addresses fall in Hillsborough instead. For raccoons, rats, squirrels or snakes in your home, call a private company. Pro Wildlife Removal works across Odessa. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Pasco, near two county lines", "Lakes and large lots"],
  townsHeading: "Odessa and nearby",
  townsIntro: "The Odessa census area, about 8,100 people in 2020, lies entirely in Pasco County. Some homes with an Odessa mailing address are across the line in Hillsborough.",
  towns: [
    {
      title: "Around Odessa",
      href: "/service-areas/pasco-county/",
      items: [
        { label: "Trinity", href: "/service-areas/pasco-county/trinity/" },
        { label: "Land O' Lakes", href: "/service-areas/pasco-county/land-o-lakes/" },
        { label: "Keystone (Hillsborough)" },
        { label: "Lutz (Hillsborough)" },
        { label: "Tampa", href: "/service-areas/hillsborough-county/tampa/" },
      ],
    },
  ],
  localHeading: "Lakes, preserves and three counties",
  localIntro: "Odessa sits at a corner of the map. Your neighbor's animal services might be a different county from yours, and the preserves nearby are managed by three agencies.",
  local: [
    { icon: "map-pin", title: "Check which county you're in", text: p("The Census places the Odessa CDP entirely in Pasco, but the Odessa mailing area spills into Hillsborough. If your property tax bill says Hillsborough, call Hillsborough County Animal Control at (813) 744-5660 instead.") },
    { icon: "leaf", title: "Brooker Creek Preserve", text: p("Just west, Pinellas County's Brooker Creek Preserve covers about 8,700 acres in the county's northeast corner. FWC's Great Florida Birding Trail lists bald eagles, sandhill cranes, swallow-tailed kites and wood storks there.") },
    { icon: "drop", title: "Lake country", text: p("The water district has proposed minimum lake levels around here, including for Lake Calm, just over the line in Hillsborough. Lakefront yards bring more snakes, and FWC is the agency for alligators.") },
    { icon: "critter", title: "Big lots, more visitors", text: p("Barns, sheds, feed rooms and woodpiles give rats, raccoons and opossums plenty of places to settle. Store feed in sealed bins and keep woodpiles off the ground.") },
  ],
  rats: {
    heading: "Rodent closures on the Hillsborough side",
    intro: "Odessa straddles two counties, and its state restaurant closure records for rodents all come from one side of the line.",
    cards: [
      { icon: "building", title: "Three closures, 2019 to 2025", text: p("By our count of Florida DBPR's emergency closure reports, all 3 rodent closures of food businesses with Odessa addresses from 2019 through 2025 were at businesses on the Hillsborough County side, none on the Pasco side.") },
      { icon: "search", title: "Twice in one year", text: p("One of those businesses was closed for rodent activity in March 2022 and again in November 2022. These are restaurant records, not reports from homes.") },
    ],
  },
  contactsHeading: "Odessa contacts on both sides of the county line",
  contactsIntro: "Who to call for what in Odessa, depending on which side of the county line you live.",
  contacts: [
    { icon: "users", title: "Pasco side: Animal Services", text: p("813-929-1212, Pasco County Animal Services, for pets and strays in the Pasco part of Odessa.") },
    { icon: "home", title: "Hillsborough side: Animal Control", text: p("(813) 744-5660 for Hillsborough County addresses. Report bites to DOH-Hillsborough at 813-307-8059.") },
    { icon: "phone", title: "Pasco bites: DOH-Pasco", text: p("For a bite or scratch on the Pasco side, DOH-Pasco's line is 352-521-1450, option 4.") },
  ],
  servicesIntro: "We handle every animal below in Odessa, on both sides of the county line.",
  servicesHeading: "Animals we remove in Odessa",
  reviewsIntro: "[PLACEHOLDER: reviews from Odessa customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Is Odessa, FL in Pasco or Hillsborough County?",
      "Both, depending on the address. The Census Odessa area is entirely in Pasco, but some Odessa mailing addresses are in Hillsborough. County services, including animal services, follow the county your property is in.",
    ),
    faq(
      "Can you get rats out of a barn or shed in Odessa?",
      "Yes. Outbuildings need the same approach as a house: find the gaps, close them, and trap the rats inside. See [rat removal](/services/rat-removal/).",
    ),
    faq(
      "How quickly do you reach Odessa, on either side of the county line?",
      "Same-day appointments are often available in Odessa. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Wildlife problem in Odessa?",
  ctaText: "Odessa homeowners can call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Odessa, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Odessa, FL: raccoons, rats, squirrels, snakes and opossums on both sides of the Pasco and Hillsborough line. Call us at (727) 594-7705.",
  },
  sources: [
    { title: "Florida DBPR, Division of Hotels and Restaurants: Emergency closures by calendar year, 2019-2025 (Business City Odessa, conditions naming rodents: 3 closures, all Hillsborough-licensed, placed in the Keystone CDP with the Census Geocoder; one business closed March and November 2022; tally by our research helper, Oct 26, 2026)", url: "https://www2.myfloridalicense.com/hotels-restaurants/reports-statistics/reports-statistics-archive/" },
    { title: "U.S. Census Bureau: 2020 redistricting file (Odessa CDP, 8,080, entirely in Pasco County)", url: CENSUS },
    { title: "U.S. Census Bureau: TIGER/Line 2020 places, Florida (Odessa CDP borders Keystone CDP and Cheval CDP, Hillsborough)", url: "https://www2.census.gov/geo/tiger/TIGER2020/PLACE/tl_2020_12_place.zip" },
    { title: "Pinellas County: Brooker Creek Preserve (about 8,700 acres; northeastern corner of Pinellas)", url: "https://pinellas.gov/parks/brooker-creek-preserve/" },
    { title: "FWC Great Florida Birding Trail: Brooker Creek Preserve (bald eagle, sandhill crane, swallow-tailed kite, wood stork)", url: "https://floridabirdingtrail.com/site/brooker-creek-preserve/" },
    { title: "SWFWMD: Workshop on minimum and guidance levels for Lake Calm in Hillsborough County (held in Odessa)", url: "https://www.swfwmd.state.fl.us/about/newsroom/news/district-hold-workshop-minimum-and-guidance-levels-lake-calm-hillsborough" },
    { title: "Pasco County: Animal Services (813-929-1212)", url: "https://www.pascocountyfl.gov/services/animal_services/index.php" },
    { title: "Hillsborough County: Animal Control ((813) 744-5660)", url: "https://hcfl.gov/locations/animal-control" },
    { title: "DOH-Hillsborough: Report an animal bite (813-307-8059)", url: "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/report-an-animal-bite/" },
    { title: "DOH-Pasco: Rabies advisory, July 30, 2026 (352-521-1450, option 4)", url: "https://pasco.floridahealth.gov/2026/07/30/doh-pasco-issues-rabies-advisory/" },
    { title: "FWC: Nuisance Alligator Program (866-FWC-GATOR)", url: "https://myfwc.com/wildlifehabitats/wildlife/alligator/snap/" },
  ],
  clientQuestions: ["Odessa reviews (from TTR-723) and real Odessa job photos."],
});
