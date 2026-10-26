import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/*
 * Carrollwood city page (new, Owen, Oct 26). Unincorporated Hillsborough County.
 * Local facts: Census 2020 (TIGERweb), the county's Carrollwood Village Park and
 * Matt Jetton pages, the Water Atlas Lake Carroll page, and news reports of local
 * wildlife cases (labeled as news). No Tampa-only or county-wide repeats.
 */
const TIGER = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2020/MapServer/28";
const PATCH = "https://patch.com/florida/";

export const carrollwood = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-carrollwood-fl",
  name: "Carrollwood",
  county: "Hillsborough",
  order: 50,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN CARROLLWOOD",
  summary: "Wildlife removal in Carrollwood, FL: raccoons, rats, squirrels, bats, opossums and more, around Lake Carroll and Carrollwood Village.",
  heroText: "Lakeside neighborhoods built around spring-fed Lake Carroll, in unincorporated northwest Hillsborough. Call (727) 594-7705.",
  answerHeading: "Who removes wildlife in Carrollwood, FL?",
  answer:
    "Carrollwood is unincorporated Hillsborough County. County Animal Control handles stray pets, bites, and neglect and cruelty cases, and the City of Tampa's listing for that service sends wildlife on private property to private removal services. Pro Wildlife Removal handles raccoons, rats, squirrels and bats across Carrollwood. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Lake Carroll: 210 acres", "Rabid bat case in 2020"],
  townsHeading: "Carrollwood and nearby",
  townsIntro: "The Carrollwood Census place had 34,352 residents at the 2020 Census, and neighboring Northdale had 23,033.",
  towns: [
    {
      title: "Northwest Hillsborough",
      href: "/about-us/service-area/wildlife-removal-hillsborough-county/",
      items: [
        { label: "Carrollwood Village" },
        { label: "Greater Northdale" },
        { label: "Lake Magdalene" },
        { label: "Citrus Park" },
        { label: "Town 'n' Country" },
        { label: "Lutz" },
      ],
    },
  ],
  localHeading: "Wildlife around Lake Carroll",
  localIntro: "Carrollwood grew up around a lake and still has water and green space between its streets. Four of the facts below come from news reports, labeled as news.",
  local: [
    { icon: "drop", title: "Lake Carroll", text: p("The Hillsborough County Water Atlas lists Lake Carroll at 210 acres, a private lake in the Sweetwater Creek watershed, with water samples going back to 1970.") },
    { icon: "home", title: "Built beside the lake", text: p("The county's history page says Matt Jetton founded Carrollwood in 1959 beside spring-fed Lake Carroll, and that original Carrollwood's 925 homes sit on curving streets that follow the shore.") },
    { icon: "leaf", title: "A park on an old plant site", text: p("Carrollwood Village Park was built on the former Dale Mabry Wastewater Treatment Plant site. The county says it draws more than 1 million visitors a year to its trails, dog parks and picnic shelters.") },
    { icon: "critter", title: "Rabid bat, 2020 (news)", text: p("Patch printed DOH-Hillsborough's July 2020 release: a woman walking at night in Carrollwood picked up a bat from the sidewalk and was bitten. The bat had rabies, the county's second case that year.") },
    { icon: "search", title: "Rabid raccoon near Tannery Avenue, 2018 (news)", text: p("In March 2018, Patch reported a raccoon near the Tannery Avenue area that fought a dog and tested positive for rabies. The 60-day alert reached from County Line Road south to Kennedy Boulevard.") },
    { icon: "map-pin", title: "Cat alert, 2017 (news)", text: p("In June 2017, a domestic cat tested positive and DOH-Hillsborough centered a rabies alert on Pinnacle Heights Circle, bounded by Ehrlich Road, Casey Road, Highway 587 and Farmington Boulevard.") },
    { icon: "users", title: "Bears pass through (news)", text: p("FOX 13 reported a black bear seen five times in five days in the Carrollwood area in May 2023, last at a lake in the Turner Trace townhomes. In May 2024 it reported, citing FWC, a bear that moved from Town 'n' Country into Carrollwood.") },
  ],
  contactsIntro: "Who handles what in Carrollwood, from each agency's own page.",
  contacts: [
    { icon: "users", title: "Pets, strays and bites", text: p("Hillsborough County Animal Control, (813) 744-5660, serving the whole county.") },
    { icon: "phone", title: "Animal bites: DOH-Hillsborough", text: p("Report a bite or scratch to DOH-Hillsborough at 813-307-8059.") },
    { icon: "map-pin", title: "Bears: FWC", text: p("FWC's Southwest Region office in Lakeland, 863-648-3200, takes bear conflict reports for Hillsborough.") },
  ],
  servicesIntro: "Every service we offer is available in Carrollwood. Choose an animal to learn more.",
  servicesHeading: "Animals we remove in Carrollwood",
  reviewsIntro: "[PLACEHOLDER: reviews from Carrollwood customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Does Hillsborough County remove raccoons from Carrollwood homes?",
      "No. County Animal Control's listed services are stray pets, bites, and neglect and cruelty cases. For a raccoon in the attic, call a wildlife company. See [raccoons in the attic](/services/raccoons-in-attic/).",
    ),
    faq(
      "Have rabid animals been found in Carrollwood?",
      "Yes, in news reports of DOH-Hillsborough cases: a rabid bat that bit a woman in July 2020, a rabid raccoon near Tannery Avenue in March 2018, and a rabid domestic cat in June 2017.",
    ),
    faq(
      "What should I do if I find a bat on the ground in Carrollwood?",
      "Leave it alone. In 2020 a Carrollwood woman who picked one up was bitten, and the bat had rabies. If someone touches a bat, call DOH-Hillsborough at 813-307-8059.",
    ),
    faq(
      "Who do I call about a bear in Carrollwood?",
      "FWC handles bears. Call its Southwest Region office at 863-648-3200, and bring in garbage and pet food. We don't handle bears.",
    ),
    faq(
      "How soon can you come out in Carrollwood?",
      "Same-day appointments are often available in Carrollwood. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time in Carrollwood]",
    ),
  ],
  ctaHeading: "Wildlife problem in Carrollwood?",
  ctaText: "Anywhere in Carrollwood or Carrollwood Village, call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Carrollwood, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Carrollwood, FL: raccoons, rats, squirrels and bats out of homes near Lake Carroll and Carrollwood Village. Call (727) 594-7705 today.",
  },
  sources: [
    { title: "U.S. Census Bureau TIGERweb, 2020 Census, Census Designated Places (Carrollwood CDP: 34,352 residents; Northdale CDP: 23,033)", url: TIGER },
    { title: "Hillsborough County Water Atlas (USF and Hillsborough County): Lake Carroll (210 acres; private lake; Sweetwater Creek watershed; earliest sample 11/04/1970)", url: "https://hillsborough.wateratlas.usf.edu/waterbodies/lakes/5187/" },
    { title: "Hillsborough County: Faces behind the places, Matt Jetton (founded Carrollwood in 1959 beside spring-fed Lake Carroll; 925 homes on curving streets following the lake)", url: "https://hcfl.gov/about-hillsborough/history/faces-behind-the-places/faces-behind-the-places-matt-jetton" },
    { title: "Hillsborough County: Carrollwood Village Park (former Dale Mabry Wastewater Treatment Plant; 1 million+ visitors annually; walking trails, large and small dog park, picnic shelters)", url: "https://hcfl.gov/locations/carrollwood-village-park" },
    { title: "News, Patch, July 30, 2020: Bat with rabies bites Carrollwood resident (DOH-Hillsborough release of July 29, 2020; picked up a bat on the sidewalk; second confirmed case of 2020 in Hillsborough)", url: `${PATCH}westchase/bat-rabies-bites-carrollwood-resident` },
    { title: "News, Patch, March 15, 2018: Raccoon found near Carrollwood tests positive for rabies (Tannery Avenue area; fought a dog March 9; 60-day alert, County Line Road, Veterans Expressway, I-75, Kennedy Boulevard)", url: `${PATCH}carrollwood/raccoon-found-near-carrollwood-tests-positive-rabies` },
    { title: "News, Patch, June 6, 2017: 2nd rabies alert issued in Hillsborough County (domestic cat; centered at Pinnacle Heights Circle; Ehrlich Road, Casey Road and South Village Drive, Highway 587, Farmington Boulevard and Canopy Creek Drive)", url: `${PATCH}carrollwood/2nd-rabies-alert-issued-hillsborough-county` },
    { title: "News, FOX 13, May 17, 2023: Black bear spotted in Carrollwood for 5th time in five days (Turner Trace townhome complex off Turner Road)", url: "https://www.fox13news.com/news/black-bear-spotted-in-carrollwood-for-the-fifth-time-in-five-days" },
    { title: "News, FOX 13 video, May 27, 2024: Black bear on the move in Hillsborough County (from Town 'n' Country to Carrollwood, according to FWC)", url: "https://www.fox13news.com/video/1462125" },
    { title: "Hillsborough County: Animal Control ((813) 744-5660; serves Hillsborough County including the cities of Tampa, Temple Terrace and Plant City)", url: "https://hcfl.gov/locations/animal-control" },
    { title: "City of Tampa: Animal services, Hillsborough County (listed services: stray pets, bites, neglect and cruelty cases; for wildlife on private property, use private removal services)", url: "https://www.tampa.gov/service/animal-services-hillsborough-county" },
    { title: "DOH-Hillsborough: Report an animal bite (813-307-8059)", url: "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/report-an-animal-bite/" },
    { title: "FWC: Regional offices (Southwest Region, Lakeland, 863-648-3200)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
    { title: "FWC: Living with bears (report human-bear conflicts to your nearest regional office)", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/living/" },
  ],
  clientQuestions: ["Typical response time in Carrollwood?", "Real job photos and Google reviews from Carrollwood customers."],
});
