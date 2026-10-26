import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* HELD (Ben, Oct 26): fewer than 6 distinct local rat, bat, squirrel or raccoon facts; not registered in locations.ts.

 * Town 'n' Country city page (new, Owen, Oct 26). Unincorporated Hillsborough County.
 * Local facts: Census 2020 (TIGERweb), county park, preserve and trail pages, DBPR
 * emergency closure records 2022 to 2025 (our count; addresses placed in the Town 'n'
 * Country Census place with the Census geocoder; businesses not named), and a FOX 13
 * bear report (news). Upper Tampa Bay Conservation Park is nearby, not inside the CDP.
 */
const TIGER = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2020/MapServer/28";
const HCFL = "https://hcfl.gov/locations/";

export const townNCountry = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-town-n-country-fl",
  name: "Town 'n' Country",
  county: "Hillsborough",
  order: 51,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN TOWN 'N' COUNTRY",
  summary: "Wildlife removal in Town 'n' Country, FL: raccoons, rats, squirrels, bats, opossums and more, from Channel A to the upper bay.",
  heroText: "Neighborhoods, canals and preserve land between the airport and upper Old Tampa Bay, in unincorporated Hillsborough. Call (727) 594-7705.",
  answerHeading: "Who removes wildlife in Town 'n' Country, FL?",
  answer:
    "Town 'n' Country is unincorporated Hillsborough County, so county Animal Control covers stray pets, bites, and neglect and cruelty cases there. For wildlife in your home, the City of Tampa's listing for that county service says to use private removal services. Pro Wildlife Removal handles raccoons, rats, squirrels and bats here. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "85,951 residents, 2020 Census", "Trail along Channel A"],
  townsHeading: "Town 'n' Country and nearby",
  townsIntro: "Town 'n' Country had 85,951 residents at the 2020 Census, on about 22 square miles of land.",
  towns: [
    {
      title: "Northwest Hillsborough",
      href: "/service-areas/hillsborough-county/",
      items: [
        { label: "Westchase" },
        { label: "Citrus Park" },
        { label: "Carrollwood" },
        { label: "Oldsmar (Pinellas)" },
        { label: "Tampa", href: "/service-areas/hillsborough-county/tampa/" },
      ],
    },
  ],
  localHeading: "Wildlife in Town 'n' Country",
  localIntro: "Town 'n' Country mixes dense neighborhoods with wet woods, a canal-side trail and the upper bay just to the west. One fact below is a news report, labeled as news.",
  local: [
    { icon: "leaf", title: "Town N' Country Nature Preserve", text: p("The county's preserve north of Alonso High School holds pine flatwoods, freshwater marshes and hardwood swamps, and the county warns that many trails stand in water during the rainy season.") },
    { icon: "map-pin", title: "Upper Tampa Bay Trail", text: p("The trail starts at a trailhead off Memorial Highway and Montague Street and runs along the west shore of Channel A, past Waters Avenue and Linebaugh Avenue, before heading north.") },
    { icon: "home", title: "Town 'N Country Park", text: p("The county's Town 'N Country Park covers 25.74 acres with no staff on site, with courts, a softball field and a playground.") },
    { icon: "search", title: "Rodent closures, 2022 to 2025", text: p("Florida DBPR's emergency closure records list seven closures of Town 'n' Country food businesses for conditions naming rodents from 2022 through 2025, three of them on West Hillsborough Avenue. That is our count, matching listed addresses to the Census place.") },
    { icon: "drop", title: "Upper Tampa Bay Conservation Park, next door", text: p("Nearby, the county's 596-acre peninsula park, founded in 1982, protects mangroves, salt marshes and pine flatwoods. The county lists bobcats, otters, gopher tortoises, dolphins and manatees among its wildlife.") },
  ],
  contactsHeading: "Hillsborough and FWC contacts for Town 'n' Country",
  contactsIntro: "Unincorporated Town 'n' Country uses Hillsborough County's numbers, listed here from each agency's own page.",
  contacts: [
    { icon: "users", title: "Pets, strays and bites", text: p("Hillsborough County Animal Control, (813) 744-5660, which covers unincorporated areas like Town 'n' Country.") },
    { icon: "phone", title: "Animal bites: DOH-Hillsborough", text: p("Call DOH-Hillsborough at 813-307-8059 to report a bite or scratch.") },
    { icon: "map-pin", title: "Bears: FWC", text: p("Bear sightings and conflicts go to FWC's Southwest Region office in Lakeland, 863-648-3200.") },
  ],
  servicesIntro: "From Channel A to the airport, Town 'n' Country homes get every service listed here. Pick an animal to read more.",
  servicesHeading: "Animals we remove in Town 'n' Country",
  reviewsIntro: "[PLACEHOLDER: reviews from Town 'n' Country customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Will Hillsborough County remove a raccoon from my Town 'n' Country attic?",
      "No. The county's Animal Control handles stray pets, bites, and neglect and cruelty cases. Wildlife in a home is a job for a private company. See [raccoons in the attic](/services/raccoons-in-attic/).",
    ),
    faq(
      "Are there rodent problems in Town 'n' Country?",
      "State inspection records show some. By our count, Florida DBPR closed seven Town 'n' Country food businesses for conditions naming rodents from 2022 through 2025.",
    ),
    faq(
      "Do you work near Channel A and the upper bay?",
      "Yes. We cover all of Town 'n' Country, including homes along Channel A and the Upper Tampa Bay Trail.",
    ),
    faq(
      "Could someone see my Town 'n' Country house today?",
      "Same-day appointments are often available in Town 'n' Country. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Wildlife problem in Town 'n' Country?",
  ctaText: "Anywhere in Town 'n' Country, call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal Town 'n' Country, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Town 'n' Country, FL: raccoons, rats, squirrels and bats out of homes near Channel A, Memorial Highway and the upper bay. Call today.",
  },
  sources: [
    { title: "U.S. Census Bureau TIGERweb, 2020 Census, Census Designated Places (Town 'n' Country CDP: 85,951 residents; land about 57.6 million square meters, about 22 square miles)", url: TIGER },
    { title: "Hillsborough County: Town N' Country Nature Preserve (north of Alonso High School; pine flatwoods, freshwater marshes, hardwood swamps; standing water in the rainy season)", url: `${HCFL}town-n-country-nature-preserve` },
    { title: "Hillsborough County: Upper Tampa Bay Trail (west shore of Channel A from a trailhead off Memorial Highway/Montague Street, past Waters Avenue and Linebaugh)", url: `${HCFL}upper-tampa-bay-trail` },
    { title: "Hillsborough County: Town 'N Country Park (non-staffed; 25.74 acres; courts, softball field, playground)", url: `${HCFL}town-n-country-park` },
    { title: "Florida DBPR, Division of Hotels and Restaurants: emergency closure records 2022 to 2025 (our count: 7 closures with conditions naming rodents at addresses we placed in Town 'n' Country CDP with the Census geocoder; 3 on W Hillsborough Ave; listed city 'Tampa')", url: "https://www2.myfloridalicense.com/hotels-restaurants/reports-statistics/reports-statistics-archive/" },
    { title: "U.S. Census Bureau Geocoder (used to place DBPR addresses in Census places)", url: "https://geocoding.geo.census.gov/geocoder/" },
    { title: "News, FOX 13 video, May 27, 2024: Black bear on the move in Hillsborough County (spotted in Town 'n' Country, then Carrollwood, according to FWC)", url: "https://www.fox13news.com/video/1462125" },
    { title: "Hillsborough County: Upper Tampa Bay Conservation Park (founded 1982; 596 acres; mangroves, salt marshes, pine flatwoods; bobcats, gopher tortoises, otters, dolphins, manatees)", url: `${HCFL}upper-tampa-bay-park` },
    { title: "Hillsborough County: Animal Control ((813) 744-5660; serves Hillsborough County including the cities of Tampa, Temple Terrace and Plant City)", url: `${HCFL}animal-control` },
    { title: "City of Tampa: Animal services, Hillsborough County (listed services: stray pets, bites, neglect and cruelty cases; for wildlife on private property, use private removal services)", url: "https://www.tampa.gov/service/animal-services-hillsborough-county" },
    { title: "DOH-Hillsborough: Report an animal bite (813-307-8059)", url: "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/report-an-animal-bite/" },
    { title: "FWC: Regional offices (Southwest Region, Lakeland, 863-648-3200)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Real job photos and Google reviews from Town 'n' Country customers."],
});
