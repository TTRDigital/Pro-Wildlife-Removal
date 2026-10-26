import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Squirrel removal in Pasco County (TTR-738, Nia). Every card is one true fact
 * about squirrels in Pasco: county, state forest and FWC area pages
 * on where they live here, and FWC's gray and fox squirrel profiles.
 */
const WSF = "https://www.fdacs.gov/Forest-Wildfire/Our-Forests/State-Forests/Withlacoochee-State-Forest";
const KEYVISTA = "https://www.pascocountyfl.gov/business_detail_T22_R71.php";
const UHWMA = "https://myfwc.com/recreation/cooperative/upper-hillsborough/";
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
  heroText: "Running and gnawing in the attic during the day? That's usually a gray squirrel. We find the hole, get the squirrels out and close the roofline behind them. Call (727) 594-7705.",
  answerHeading: "Who removes squirrels from attics in Pasco County?",
  answer:
    "A private wildlife company. In Pasco County the squirrel in your attic is usually an eastern gray squirrel, which FWC says will sometimes nest in attics when it can get in. Pro Wildlife Removal finds the entry, gets the squirrels and any young out, and seals the roofline where they got in. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Gray squirrels sometimes nest in attics", "Fox squirrels: hands off"],
  localHeading: "Pasco's gray and fox squirrels, and the rules",
  localIntro: "Pasco has both of Florida's tree squirrels, the common gray and the much rarer fox squirrel. Here is where they live and what the rules say.",
  local: [
    { icon: "leaf", title: "Both kinds in the state forest", text: p("The Withlacoochee State Forest reaches into Pasco, along with Citrus, Hernando, Lake and Sumter counties. Florida's forest service lists fox squirrels and gray squirrels among the wildlife visitors may see there.") },
    { icon: "map-pin", title: "Squirrels at Key Vista", text: p("Pasco County describes Key Vista Nature Park in Holiday, 101 acres on Baillies Bluff Road, as a place where you can hear wildlife moving at your feet, and names squirrels among the animals there.") },
    { icon: "home", title: "Gray squirrels by Zephyrhills", text: p("FWC's Upper Hillsborough Wildlife Management Area, more than 5,000 acres in Pasco and Polk just east of Zephyrhills on County Road 54, lists gray squirrels among the wildlife that make their home there. Its uplands are slash and longleaf pine flatwoods.") },
    { icon: "critter", title: "Attics and two litters", text: p("FWC says gray squirrels will sometimes nest in attics or other structures when they can get in, can breed up to twice a year and have one to four young. So a squirrel in a Pasco attic may well be a mother with a nest.") },
    { icon: "search", title: "What the forest's fox squirrels need", text: p("The fox squirrels of Pasco's state forest land are picky about habitat. FWC says southern fox squirrels live in open, fire-maintained longleaf pine, turkey oak, sandhill and flatwoods, eat mostly longleaf pine seeds and turkey oak acorns, and build most nests from Spanish moss and pine needles.") },
    { icon: "wrench", title: "Rarer, and protected", text: p("FWC says fox squirrels are much less numerous than gray squirrels, are protected from hunting statewide and spend more time on the ground. A big, black-faced squirrel in a Pasco yard is one to leave alone.") },
  ],
  attic: { slug: "squirrels-in-attic", label: "Squirrels in the attic" },
  extraLink: { label: "Florida trapping rules", href: "/blog/florida-wildlife-trapping-rules/", text: "What changes for homeowners and trappers when FWC's new rules start on December 31, 2026." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Pasco County squirrel job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "What kind of squirrel is in my Pasco attic?",
      "Usually an eastern gray squirrel. FWC describes it as grayish-brown with a paler belly, 17 to 20 inches long, active by day and sometimes nesting in attics. Fox squirrels are bigger, with black faces and white noses and ears.",
    ),
    faq(
      "Are fox squirrels protected in Pasco County?",
      "FWC says fox squirrels are protected from hunting throughout Florida. The southern fox squirrel, once called Sherman's fox squirrel, came off the state's species of special concern list in 2018, but it remains on FWC's Imperiled Species Management Plan.",
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
      "When could someone come for squirrels in a Pasco County attic?",
      "Same-day appointments for squirrels are often available in Pasco County. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Squirrels in your Pasco County attic?",
  ctaText: "Squirrels in a Pasco roof, Zephyrhills to the coast? Call (727) 594-7705.",
  seo: {
    title: "Squirrel Removal in Pasco County, FL | Pro Wildlife Removal",
    description:
      "Squirrel removal in Pasco County, FL: gray squirrels out of attics, babies checked first, rooflines sealed, and where Pasco's rare fox squirrels live.",
  },
  sources: [
    { title: "FDACS Florida Forest Service: Withlacoochee State Forest (counties: Citrus, Hernando, Lake, Pasco, Sumter; fox squirrel and gray squirrel among wildlife seen)", url: WSF },
    { title: "Pasco County: Key Vista Nature Park (2700 Baillies Bluff Road, Holiday; 101 acres; birds, squirrels, peacocks and snakes)", url: KEYVISTA },
    { title: "FWC: Upper Hillsborough Wildlife Management Area (more than 5,000 acres in Polk and Pasco; just east of Zephyrhills on County Road 54; gray squirrels among resident wildlife; slash and longleaf pine flatwoods)", url: UHWMA },
    { title: "FWC: Eastern gray squirrel profile (17 to 20 inches; woodland and urban areas near oaks and hickories; active by day; breeds up to twice a year; nests in attics when accessible; litters of one to four)", url: GRAY },
    { title: "FWC: Fox squirrel profile (protected from hunting throughout the state; black faces, white noses and ears; much less numerous than gray squirrels; more time on the ground)", url: FOX },
    { title: "FWC: Southern fox squirrel profile (previously Sherman's fox squirrel; removed as a Species of Special Concern in 2018; remains part of FWC's Imperiled Species Management Plan; open, fire-maintained longleaf pine, turkey oak, sandhills and flatwoods; diet mostly longleaf pine seeds and turkey oak acorns; most nests of Spanish moss, pine needles, twigs and leaves)", url: SOUTHERN },
    { title: "FWC: FAQs, nuisance wildlife (release on the same property or 40+ contiguous acres in the same county with written permission)", url: "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/" },
    { title: "FWC: Trapping rules (new rules effective Dec. 31, 2026)", url: "https://myfwc.com/wildlifehabitats/wildlife/trapping-rules/" },
  ],
  clientQuestions: ["A real Google review from a Pasco County squirrel job (TTR-723), and real Pasco squirrel job photos."],
});
