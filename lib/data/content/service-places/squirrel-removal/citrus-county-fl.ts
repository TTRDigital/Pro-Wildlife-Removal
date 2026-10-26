import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Squirrel removal in Citrus County (TTR-738, Nia). Every card is one true fact
 * about squirrels in Citrus: FWC's Citrus WMA page, the Fort Cooper State Park
 * unit management plan (DEP, 2015), the Withlacoochee State Forest page and FWC
 * squirrel profiles.
 */
const CWMA = "https://myfwc.com/recreation/cooperative/citrus/";
const FCSP = "https://floridadep.gov/sites/default/files/FCSP_ApprovedPlan_2015.pdf";
const WSF = "https://www.fdacs.gov/Forest-Wildfire/Our-Forests/State-Forests/Withlacoochee-State-Forest";
const GRAY = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/squirrels/";
const SOUTHERN = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/southern-fox-squirrel/";

export const squirrelRemovalCitrusCounty = servicePlacePage({
  service: "squirrel-removal",
  animal: "Squirrel",
  animals: "Squirrels",
  place: "citrus-county-fl",
  placeName: "Citrus County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-in-citrus-county-fl",
  order: 60,
  heroText: "Chewing in the eaves or something running across the ceiling of a Citrus County home? We find where squirrels got in, get them and any young out and repair the opening. Call (727) 594-7705.",
  answerHeading: "Who removes squirrels from homes in Citrus County?",
  answer:
    "A private wildlife company. Citrus County Animal Control handles domestic animals and livestock, not squirrels in an attic. Pro Wildlife Removal finds how squirrels are getting into Citrus homes, from Inverness to Crystal River, removes them and any nest of young, and repairs the opening. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Three kinds of squirrel at Fort Cooper", "Fox squirrels on the WMA"],
  localHeading: "What to know about squirrels in Citrus County",
  localIntro: "Citrus has gray, fox and flying squirrels on its public lands. Here is where state pages and plans say they live, and how that touches a homeowner.",
  local: [
    { icon: "leaf", title: "Fox squirrels west of Inverness", text: p("FWC's Citrus Wildlife Management Area covers nearly 50,000 acres in Citrus and Hernando, just west of Inverness, and FWC lists fox squirrels among its wildlife.") },
    { icon: "map-pin", title: "Three kinds at Fort Cooper", text: p("The state's 2015 management plan for Fort Cooper State Park, southeast of Inverness, lists the eastern gray squirrel, the Sherman's fox squirrel and the southern flying squirrel among the park's mammals.") },
    { icon: "search", title: "Fox squirrels in decline there", text: p("The same plan says Sherman's fox squirrels have declined within Fort Cooper, perhaps because its sandhills are cut off from other natural areas, and that residential development limits wildlife moving in.") },
    { icon: "home", title: "Both kinds in the state forest", text: p("Citrus is one of five counties the Withlacoochee State Forest takes in, and the forest service lists fox squirrels and gray squirrels among the wildlife seen there.") },
    { icon: "critter", title: "The attic squirrel", text: p("FWC says eastern gray squirrels live in towns as well as woods, are active by day and will sometimes nest in attics when they can get in. They can breed twice a year, with one to four young.") },
    { icon: "wrench", title: "A protected neighbor", text: p("Fox squirrels may not be hunted anywhere in Florida, FWC says. The southern fox squirrel, the newer name for the Sherman's fox squirrel in the Fort Cooper plan, remains on FWC's Imperiled Species Management Plan.") },
  ],
  attic: { slug: "squirrels-in-attic", label: "Squirrels in the attic" },
  extraLink: { label: "Florida trapping rules", href: "/blog/florida-wildlife-trapping-rules/", text: "What FWC lets a homeowner do with a trap, and what changes on December 31, 2026." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Citrus County squirrel job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Does Citrus County Animal Control remove squirrels?",
      "No. The Sheriff's Office says its Animal Control handles domestic animals and livestock only, and refers nuisance wildlife to a nuisance trapper. A squirrel in your attic is a private company's job.",
    ),
    faq(
      "What kinds of squirrels live in Citrus County?",
      "Fort Cooper State Park's plan lists three: the eastern gray squirrel, the Sherman's fox squirrel and the southern flying squirrel. FWC also lists fox squirrels on the Citrus WMA.",
    ),
    faq(
      "Is it a gray squirrel or a fox squirrel in my yard?",
      "Gray squirrels are 17 to 20 inches long and grayish-brown, FWC says. Fox squirrels are bigger, up to about 27 inches, and often have a black head with white ears and nose. Fox squirrels are protected from hunting.",
    ),
    faq(
      "Will there be babies in the attic?",
      "There might be. FWC says gray squirrels can breed twice a year, so we look for a nest before closing an opening and remove any young with the adults.",
    ),
    faq(
      "How soon can you come out for squirrels in Citrus County?",
      "Same-day appointments for squirrels are often available in Citrus County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a squirrel call in Citrus County]",
    ),
  ],
  ctaHeading: "Squirrels in your Citrus County attic?",
  ctaText: "For squirrels anywhere in Citrus, call (727) 594-7705.",
  seo: {
    title: "Squirrel Removal in Citrus County, FL | Pro Wildlife Removal",
    description:
      "Squirrel removal in Citrus County, FL: gray squirrels out of attics, nests checked for first, openings repaired, plus where Citrus fox squirrels live.",
  },
  sources: [
    { title: "FWC: Citrus WMA (nearly 50,000 acres in Citrus and Hernando, just west of Inverness; fox squirrels)", url: CWMA },
    { title: "Florida DEP: Fort Cooper State Park Unit Management Plan, Dec. 23, 2015 (southeast of Inverness; species list: eastern gray squirrel, Sherman's fox squirrel, southern flying squirrel; Sherman's fox squirrels have declined within the park, perhaps due to isolation of its sandhills; residential development limits wildlife immigration)", url: FCSP },
    { title: "FDACS Florida Forest Service: Withlacoochee State Forest (counties: Citrus, Hernando, Lake, Pasco, Sumter; fox squirrel and gray squirrel among wildlife seen)", url: WSF },
    { title: "FWC: Eastern gray squirrel profile (17 to 20 inches; grayish-brown; woodland and urban areas; active by day; breeds up to twice a year; litters of one to four; nests in attics when accessible)", url: GRAY },
    { title: "FWC: Southern fox squirrel profile (previously Sherman's fox squirrel; up to 27.6 inches; black head, white ears and snout; remains on the Imperiled Species Management Plan)", url: SOUTHERN },
    { title: "FWC: Fox squirrel profile (protected from hunting throughout the state)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/fox-squirrel/" },
    { title: "Citrus County Sheriff's Office: Animal Control (domestic animals and livestock only; nuisance wildlife referred to a nuisance trapper)", url: "https://www.sheriffcitrus.org/programs___services/animal_control.php" },
  ],
  clientQuestions: ["Typical response time for a squirrel call in Citrus County?", "A real Google review from a Citrus County squirrel job (TTR-723), and real Citrus squirrel job photos."],
});
