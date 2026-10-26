import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* HELD (Ben, Oct 26): fewer than 6 distinct local rat, bat, squirrel or raccoon facts; not registered in locations.ts.

 * Carrollwood city page (new, Owen, Oct 26). Unincorporated Hillsborough County.
 * Cards count only rat, bat, squirrel and raccoon facts (plus Lake Carroll as setting):
 * news reports of DOH-Hillsborough cases (labeled as news) and DBPR closure records.
 * Census 2020 and the county's Matt Jetton page give the setting.
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
  points: ["Call (727) 594-7705", "Rabid bat case, 2020", "Rabid raccoon alert, 2018"],
  townsHeading: "Carrollwood and nearby",
  townsIntro: "The Carrollwood Census place had 34,352 residents at the 2020 Census, and neighboring Northdale had 23,033.",
  towns: [
    {
      title: "Northwest Hillsborough",
      href: "/service-areas/hillsborough-county/",
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
  localHeading: "Bats, raccoons and rodents in Carrollwood",
  localIntro: "Carrollwood was founded in 1959 beside spring-fed Lake Carroll, which the county's Water Atlas lists at 210 acres. Much of the local wildlife record comes from health department cases reported in the news, labeled as news.",
  local: [
    { icon: "critter", title: "Rabid bat, 2020 (news)", text: p("Patch printed DOH-Hillsborough's July 2020 release: a woman walking at night in Carrollwood picked up a bat from the sidewalk and was bitten. The bat had rabies, the county's second case that year.") },
    { icon: "home", title: "Bats indoors (news)", text: p("The same 2020 release said it was the time of year bats are more active, and that residents should call DOH if a bat is found inside their home.") },
    { icon: "search", title: "Rabid raccoon near Tannery Avenue, 2018 (news)", text: p("In March 2018, Patch reported a raccoon near the Tannery Avenue area that fought a dog on March 9 and tested positive for rabies. The dog killed the raccoon.") },
    { icon: "map-pin", title: "A 60-day raccoon alert (news)", text: p("That raccoon set off a 60-day rabies alert bounded by County Line Road to the north, the Veterans Expressway to the west, Interstate 75 to the east and Kennedy Boulevard to the south.") },
    { icon: "users", title: "Keep pets from raccoons and bats (news)", text: p("When a domestic cat tested positive near Pinnacle Heights Circle in June 2017, the health department's Carrollwood alert warned residents to keep themselves and their pets away from raccoons and bats in particular.") },
    { icon: "leaf", title: "Rodent closures", text: p("Florida DBPR's emergency closure records list two Carrollwood food businesses closed for conditions naming rodents, in July 2023 and August 2024. Both list their city as Tampa; we placed the addresses in Carrollwood with the Census geocoder.") },
  ],
  contactsHeading: "Hillsborough contacts for Carrollwood homes",
  contactsIntro: "Carrollwood is unincorporated, so county and state numbers apply. Here they are, from each agency's own page.",
  contacts: [
    { icon: "users", title: "Pets, strays and bites", text: p("Hillsborough County Animal Control, (813) 744-5660, serving the whole county.") },
    { icon: "phone", title: "Animal bites: DOH-Hillsborough", text: p("Report a bite or scratch to DOH-Hillsborough at 813-307-8059.") },
    { icon: "home", title: "A bat inside the house", text: p("Call DOH-Hillsborough, as its 2020 release advised, if a bat is found inside your home. Don't touch it.") },
  ],
  servicesIntro: "Around Lake Carroll and the rest of Carrollwood, each animal below is one we remove. Tap one for details.",
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
      "Is today too soon for a Carrollwood visit?",
      "Same-day appointments are often available in Carrollwood. Call (727) 594-7705.",
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
    { title: "News, Patch, July 30, 2020: Bat with rabies bites Carrollwood resident (DOH-Hillsborough release of July 29, 2020; picked up a bat on the sidewalk; second confirmed case of 2020 in Hillsborough; bats more active this time of year; call DOH if one is found inside the home)", url: `${PATCH}westchase/bat-rabies-bites-carrollwood-resident` },
    { title: "News, Patch, March 15, 2018: Raccoon found near Carrollwood tests positive for rabies (Tannery Avenue area; fought a dog March 9; killed by the dog; 60-day alert, County Line Road, Veterans Expressway, I-75, Kennedy Boulevard)", url: `${PATCH}carrollwood/raccoon-found-near-carrollwood-tests-positive-rabies` },
    { title: "News, Patch, June 6, 2017: 2nd rabies alert issued in Hillsborough County (domestic cat; keep people and pets away from raccoons, bats and others; centered at Pinnacle Heights Circle; Ehrlich Road, Casey Road and South Village Drive, Highway 587, Farmington Boulevard and Canopy Creek Drive)", url: `${PATCH}carrollwood/2nd-rabies-alert-issued-hillsborough-county` },
    { title: "Florida DBPR, Division of Hotels and Restaurants: emergency closure records 2023 and 2024 (14422 N Dale Mabry Hwy, July 12, 2023, Roach & rodent activity; 13903 Clubhouse Dr, Aug 1, 2024, Rodent, Roach & Fly activity; both placed in Carrollwood CDP with the Census geocoder)", url: "https://www2.myfloridalicense.com/hotels-restaurants/reports-statistics/reports-statistics-archive/" },
    { title: "Hillsborough County: Animal Control ((813) 744-5660; serves Hillsborough County including the cities of Tampa, Temple Terrace and Plant City)", url: "https://hcfl.gov/locations/animal-control" },
    { title: "City of Tampa: Animal services, Hillsborough County (listed services: stray pets, bites, neglect and cruelty cases; for wildlife on private property, use private removal services)", url: "https://www.tampa.gov/service/animal-services-hillsborough-county" },
    { title: "DOH-Hillsborough: Report an animal bite (813-307-8059)", url: "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/report-an-animal-bite/" },
  ],
  clientQuestions: ["Real job photos and Google reviews from Carrollwood customers."],
});
