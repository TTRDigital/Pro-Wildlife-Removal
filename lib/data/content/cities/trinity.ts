import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Trinity page, rewritten in place at its existing URL (Ben, Oct 26). Checkable local facts only. */
const CENSUS = "https://www2.census.gov/programs-surveys/decennial/2020/data/01-Redistricting_File--PL_94-171/Florida/fl2020.pl.zip";

export const trinity = countyPage({
  kind: "city",
  path: "about-us/service-area/trinity-wildlife-removal",
  name: "Trinity",
  county: "Pasco",
  order: 30,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN TRINITY",
  summary: "Wildlife removal in Trinity, FL: raccoons, rats, squirrels, snakes, opossums, armadillos, bats and more, in southwest Pasco.",
  heroText: "Southwest Pasco neighborhoods on the doorstep of the Starkey wilderness, one of the largest undeveloped tracts in the county. Call (727) 594-7705.",
  answerHeading: "Who removes wildlife in Trinity, FL?",
  answer:
    "Trinity is unincorporated Pasco County, so there's no city animal control. County Animal Services handles pets and strays, and an animal living in your attic, walls or crawl space is a job for a private company. Pro Wildlife Removal works throughout Trinity. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Unincorporated Pasco", "Next to Starkey wilderness"],
  townsHeading: "Trinity and nearby",
  townsIntro: "Trinity had about 11,900 residents at the 2020 Census. It sits on Pasco's southern edge, bordering East Lake in Pinellas and Keystone in Hillsborough.",
  towns: [
    {
      title: "Southwest Pasco",
      href: "/service-areas/pasco-county/",
      items: [
        { label: "New Port Richey", href: "/service-areas/pasco-county/new-port-richey/" },
        { label: "Odessa", href: "/service-areas/pasco-county/odessa/" },
        { label: "Holiday", href: "/service-areas/pasco-county/holiday/" },
        { label: "Land O' Lakes", href: "/service-areas/pasco-county/land-o-lakes/" },
        { label: "East Lake (Pinellas)" },
      ],
    },
  ],
  localHeading: "Wild land next door",
  localIntro: "Much of the land north and east of Trinity is protected wilderness, owned by the water district and run partly as a county park.",
  local: [
    { icon: "leaf", title: "Starkey Wilderness Preserve", text: p("The water district calls its 18,000-acre Starkey preserve one of the largest undeveloped tracts in Pasco County. It lies in western Pasco, east of New Port Richey.") },
    { icon: "map-pin", title: "Jay B. Starkey Wilderness Park", text: p("Pasco County's park covers over 8,300 acres, and the county says 177 bird species have been seen on its birding trail. FWC's Great Florida Birding Trail lists swamps, marshes, scrub, sandhills, pine flatwoods and hammocks.") },
    { icon: "critter", title: "From the woods to the yard", text: p("Where neighborhoods meet that much habitat, raccoons, opossums, armadillos and snakes don't have far to travel. Gaps under decks, sheds and A/C pads are the usual way in.") },
    { icon: "search", title: "Rabies in Pasco", text: p("DOH-Pasco issued a rabies advisory on July 30, 2026, after two raccoons tested positive on the east side of the county. Rabies is in Pasco's wildlife, so keep pets vaccinated.") },
  ],
  contactsHeading: "Pasco shelter, DOH-Pasco and FWC for Trinity",
  contactsIntro: "Trinity's strays go to the Pasco shelter in Land O' Lakes. Here's who handles bites, gators and bears.",
  contacts: [
    { icon: "users", title: "Pasco County Animal Services", text: p("Call 813-929-1212 for pets and strays. The shelter is in Land O' Lakes.") },
    { icon: "phone", title: "Bites and scratches: DOH-Pasco", text: p("If a wild or stray animal bites or scratches someone in Trinity, get medical care, then report it to DOH-Pasco: 352-521-1450, option 4.") },
    { icon: "map-pin", title: "Alligators and bears: FWC", text: p("Nuisance alligator hotline, 866-FWC-GATOR. FWC's Southwest Region office takes bear calls: 863-648-3200.") },
  ],
  servicesIntro: "Every service below is available in Trinity, from rodent removal in the attic to a critter under the deck. Pick an animal to see how we handle it.",
  servicesHeading: "Animals we remove in Trinity",
  reviewsIntro: "[PLACEHOLDER: reviews from Trinity customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Is there animal control in Trinity, FL?",
      "Trinity isn't a city, so Pasco County Animal Services covers it (813-929-1212). The county's service is for pets and strays. Wildlife in your home needs a private wildlife company.",
    ),
    faq(
      "Why do raccoons and opossums keep showing up in Trinity yards?",
      "Trinity backs onto the Starkey wilderness, thousands of acres of swamp, scrub and pine. Unsecured trash, pet food and open crawl spaces give them a reason to stay. See [raccoon removal](/services/raccoon-removal/) and [opossum removal](/services/opossum-removal/).",
    ),
    faq(
      "Do you also handle rats in Trinity?",
      "Yes. Our [rat removal](/services/rat-removal/) page explains how we seal the way in and trap the rats inside.",
    ),
    faq(
      "Is a same-day visit possible in Trinity?",
      "Same-day appointments are often available in Trinity. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Wildlife problem in Trinity?",
  ctaText: "Trinity homeowners can call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Trinity, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Trinity, FL: raccoons, rats, squirrels, snakes, opossums and armadillos by the Starkey wilderness, and who to call. (727) 594-7705.",
  },
  sources: [
    { title: "U.S. Census Bureau: 2020 redistricting file (Trinity CDP, 11,924)", url: CENSUS },
    { title: "U.S. Census Bureau: TIGER/Line 2020 places, Florida (Trinity CDP borders East Lake CDP and Keystone CDP)", url: "https://www2.census.gov/geo/tiger/TIGER2020/PLACE/tl_2020_12_place.zip" },
    { title: "SWFWMD: Starkey Wilderness Preserve (18,000 acres; one of the largest undeveloped tracts in Pasco County; western Pasco, east of New Port Richey)", url: "https://www.swfwmd.state.fl.us/recreation/starkey-wilderness-preserve" },
    { title: "Pasco County: Jay B. Starkey Wilderness Park (over 8,300 acres; 177 bird species viewed)", url: "https://www.pascocountyfl.gov/_T22_R85.php" },
    { title: "FWC Great Florida Birding Trail: Jay B. Starkey Wilderness Park (habitats)", url: "https://floridabirdingtrail.com/site/jay-b-starkey-wilderness-park/" },
    { title: "DOH-Pasco: Rabies advisory, July 30, 2026 (two raccoons, east Pasco; bites 352-521-1450, option 4)", url: "https://pasco.floridahealth.gov/2026/07/30/doh-pasco-issues-rabies-advisory/" },
    { title: "Pasco County: Animal Services (813-929-1212; Land O' Lakes)", url: "https://www.pascocountyfl.gov/services/animal_services/index.php" },
    { title: "FWC: Regional offices (Southwest 863-648-3200) and Nuisance Alligator Program", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Trinity reviews (from TTR-723) and real Trinity job photos."],
});
