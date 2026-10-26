import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Squirrel removal in Pasco County (TTR-738, Nia). Every card is one true fact
 * about squirrels in Pasco: county, state forest, water district and DEP pages
 * on where they live here, and FWC's gray and fox squirrel profiles.
 */
const WSF = "https://www.fdacs.gov/Forest-Wildfire/Our-Forests/State-Forests/Withlacoochee-State-Forest";
const KEYVISTA = "https://www.pascocountyfl.gov/business_detail_T22_R71.php";
const CONNER = "https://www.swfwmd.state.fl.us/recreation/conner-preserve";
const DEP = "https://floridadep.gov/rcp/coastal-access-guide/content/pasco-county";
const GRAY = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/squirrels/";
const FOX = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/fox-squirrel/";
const SOUTHERN = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/southern-fox-squirrel/";

export const squirrelRemovalPascoCounty = servicePlacePage({
  service: "squirrel-removal",
  animal: "Squirrel",
  animals: "Squirrels",
  place: "pasco-county-fl",
  placeName: "Pasco County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-in-pasco-county-fl",
  order: 23,
  heroText: "Running and gnawing in the attic just after sunrise? That's usually a gray squirrel. We find the hole, get the squirrels out and close the roofline behind them. Call (727) 594-7705.",
  answerHeading: "Who removes squirrels from attics in Pasco County?",
  answer:
    "A private wildlife company. In Pasco County the squirrel in your attic is almost always an eastern gray squirrel, the kind that nests in buildings when it can. Pro Wildlife Removal finds the entry, gets the squirrels and any young out, and repairs the roofline to keep them out. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Gray squirrels nest in attics", "Fox squirrels: hands off"],
  localHeading: "What to know about squirrels in Pasco County",
  localIntro: "Pasco has both of Florida's tree squirrels, the common gray and the much rarer fox squirrel. Here is where they live and what the rules say.",
  local: [
    { icon: "leaf", title: "Both kinds in the state forest", text: p("The Withlacoochee State Forest reaches into Pasco, along with Citrus, Hernando, Lake and Sumter counties. Florida's forest service lists fox squirrels and gray squirrels among the wildlife visitors may see there.") },
    { icon: "map-pin", title: "Squirrels at Key Vista", text: p("Pasco County describes Key Vista Nature Park in Holiday, 101 acres on Baillies Bluff Road, as a place where you can hear wildlife moving at your feet, and names squirrels among the animals there.") },
    { icon: "home", title: "Oaks bring gray squirrels", text: p("FWC says gray squirrels live near oaks and hickories in woods and towns. DEP notes oak hammocks at Werner-Boyce Salt Springs State Park on the Pasco coast, the kind of woods gray squirrels favor.") },
    { icon: "critter", title: "Attics and two litters", text: p("FWC says gray squirrels will nest in attics or other structures when they can get in, can breed up to twice a year and have one to four young. So a squirrel in a Pasco attic may well be a mother with a nest.") },
    { icon: "search", title: "Fox squirrel country", text: p("FWC says southern fox squirrels live in open, fire-maintained longleaf pine, turkey oak, sandhill and flatwoods. The water district's Conner Preserve in Land O' Lakes has steep sandhill ridges and pine flatwoods.") },
    { icon: "wrench", title: "Rarer, and protected", text: p("FWC says fox squirrels are much less numerous than gray squirrels, are protected from hunting statewide and spend more time on the ground. A big, black-faced squirrel in a Pasco yard is one to leave alone.") },
  ],
  attic: { slug: "squirrels-in-attic", label: "Squirrels in the attic" },
  extraLink: { label: "Florida trapping rules", href: "/blog/florida-wildlife-trapping-rules/", text: "What changes for homeowners and trappers when FWC's new rules start on December 31, 2026." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Pasco County squirrel job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "What kind of squirrel is in my Pasco attic?",
      "Almost always an eastern gray squirrel. FWC describes it as grayish-brown with a paler belly, 17 to 20 inches long, active by day and willing to nest in attics. Fox squirrels are bigger, with black faces and white noses and ears.",
    ),
    faq(
      "Are fox squirrels protected in Pasco County?",
      "FWC says fox squirrels are protected from hunting throughout Florida. The southern fox squirrel, once called Sherman's fox squirrel, came off the state's species of special concern list in 2018, but it's still a rare animal to leave be.",
    ),
    faq(
      "When do squirrels have babies in Pasco?",
      "Gray squirrels can breed twice a year, per FWC, so a nest of young can turn up more than once a year. We check for a nest before any hole is closed, so babies aren't sealed in.",
    ),
    faq(
      "Can I trap a squirrel myself in Pasco?",
      "A homeowner can trap a nuisance squirrel on their own land, but FWC's new trapping rules take effect December 31, 2026, and any release must follow FWC's on-site or 40-acre rule. Our trapping rules guide explains both.",
    ),
    faq(
      "How soon can you come out for squirrels in Pasco County?",
      "Same-day squirrel inspections are often available in Pasco County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a squirrel call in Pasco County]",
    ),
  ],
  ctaHeading: "Squirrels in your Pasco County attic?",
  ctaText: "For squirrels anywhere in Pasco, call (727) 594-7705.",
  seo: {
    title: "Squirrel Removal in Pasco County, FL | Pro Wildlife Removal",
    description:
      "Squirrel removal in Pasco County, FL: gray squirrels out of attics, babies checked first, rooflines repaired, and where Pasco's rare fox squirrels live.",
  },
  sources: [
    { title: "FDACS Florida Forest Service: Withlacoochee State Forest (counties: Citrus, Hernando, Lake, Pasco, Sumter; fox squirrel and gray squirrel among wildlife seen)", url: WSF },
    { title: "Pasco County: Key Vista Nature Park (2700 Baillies Bluff Road, Holiday; 101 acres; birds, squirrels, peacocks and snakes)", url: KEYVISTA },
    { title: "Florida DEP: Coastal access guide, Pasco County (Werner-Boyce Salt Springs State Park: 3,999 acres, pine flatwoods and oak hammocks)", url: DEP },
    { title: "FWC: Eastern gray squirrel profile (17 to 20 inches; woodland and urban areas near oaks and hickories; active by day; breeds up to twice a year; nests in attics when accessible; litters of one to four)", url: GRAY },
    { title: "SWFWMD: Conner Preserve (3,486 acres, Land O' Lakes; steep sandhill ridges, marshes, cypress sloughs, pine flatwoods)", url: CONNER },
    { title: "FWC: Fox squirrel profile (protected from hunting throughout the state; black faces, white noses and ears; much less numerous than gray squirrels; more time on the ground)", url: FOX },
    { title: "FWC: Southern fox squirrel profile (previously Sherman's fox squirrel; removed as a Species of Special Concern in 2018; open, fire-maintained longleaf pine, turkey oak, sandhills and flatwoods)", url: SOUTHERN },
    { title: "FWC: FAQs, nuisance wildlife (release on the same property or 40+ contiguous acres in the same county with written permission)", url: "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/" },
    { title: "FWC: Trapping rules (new rules effective Dec. 31, 2026)", url: "https://myfwc.com/wildlifehabitats/wildlife/trapping-rules/" },
  ],
  clientQuestions: ["Typical response time for a squirrel call in Pasco County?", "A real Google review from a Pasco County squirrel job (TTR-723), and real Pasco squirrel job photos."],
});
