import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * HELD (Ben, Oct 26, 2026: 5 distinct facts; unregistered).
 * Squirrel removal in Silver Springs (TTR-738, Nia). Every card is one true fact
 * about squirrels in Silver Springs or Marion: the 2014 and 2010 park management
 * plans (one PDF), the Rainbow Springs Aquatic Preserve plan and FWC's fox
 * squirrel rules and status.
 */
const SSSP = "https://floridadep.gov/sites/default/files/SilverSprings_2014_ApprovedPlan%26Amendment.pdf";
const RSAP = "https://floridadep.gov/sites/default/files/Rainbow-Springs-AP-Management-Plan.pdf";
const NONGAME = "https://myfwc.com/hunting/regulations/nongame/";
const SFS = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/southern-fox-squirrel/";

export const squirrelRemovalSilverSprings = servicePlacePage({
  service: "squirrel-removal",
  animal: "Squirrel",
  animals: "Squirrels",
  place: "silver-springs-fl",
  placeName: "Silver Springs",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-silver-springs-fl",
  county: "Marion",
  order: 97,
  heroText: "Squirrels running in a Silver Springs attic, chewing the fascia or nesting in the soffit? We get them out, check for young and seal the way in. Call (727) 594-7705.",
  answerHeading: "Who gets squirrels out of a Silver Springs attic?",
  answer:
    "A private wildlife company. In Silver Springs, a gray squirrel nesting in an attic or soffit is the homeowner's to have removed. Pro Wildlife Removal gets the squirrels out, checks for young before closing anything and seals the openings they used. Fox squirrels are a different case: FWC says they may not be taken. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Three squirrels in the park", "Fox squirrels protected"],
  localHeading: "What to know about squirrels in Silver Springs",
  localIntro: "Silver Springs State Park's plans keep a close eye on its squirrels, from nuisance gray squirrels to Sherman's fox squirrels. Here is what they say.",
  local: [
    { icon: "critter", title: "Gray squirrels as a nuisance", text: p("The 2010 management plan for Silver River State Park, now Silver Springs State Park, lists gray squirrels with raccoons among the native animals from which nuisance cases may arise.") },
    { icon: "search", title: "Three kinds on the 2014 list", text: p("The 2014 plan's mammal list for Silver Springs State Park includes three squirrels: the gray squirrel, the fox squirrel and the southern flying squirrel.") },
    { icon: "leaf", title: "Fox squirrels in the sandhill", text: p("Sherman's fox squirrel lives in the park's sandhill, the 2014 plan says, and very likely forages on or lives on the former attraction property too.") },
    { icon: "home", title: "Seen often, but not many", text: p("The 2010 plan found Sherman's fox squirrels in the park's pastures as well as its sandhill, observed often, though the park does not support a large population.") },
    { icon: "map-pin", title: "One of seven species to monitor", text: p("The 2010 plan set out monitoring protocols for seven imperiled animals in the park, Sherman's fox squirrel among them, alongside the Florida black bear and gopher tortoise.") },
    { icon: "drop", title: "On the Rainbow River too", text: p("Across the county, the 2016 Rainbow Springs Aquatic Preserve plan documents gray squirrels and Sherman's fox squirrels along the Rainbow River in southwest Marion.") },
    { icon: "wrench", title: "Still on FWC's plan", text: p("FWC now calls Sherman's fox squirrel the southern fox squirrel. It came off the Species of Special Concern list in 2018, but remains part of FWC's Imperiled Species Management Plan.") },
  ],
  contactsIntro: "Who handles what when squirrels are the problem in Silver Springs.",
  contacts: [
    { icon: "map-pin", title: "Fox squirrel questions", text: p("FWC's Northeast Region office in Ocala, 352-732-1225.") },
    { icon: "users", title: "Squirrels in your attic", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "squirrels-in-attic", label: "Squirrels in the attic" },
  extraLink: { label: "Squirrel poop vs rat poop", href: "/blog/squirrel-poop-vs-rat-poop-how-to-spot-the-difference/", text: "How to tell which animal left droppings on the insulation." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Silver Springs squirrel job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Can I trap a fox squirrel in my Silver Springs yard?",
      "No. FWC's nongame rules say fox squirrels may not be taken or pursued. If one is getting into your house, call FWC's Northeast Region office at 352-732-1225 first.",
    ),
    faq(
      "Which squirrels live around Silver Springs?",
      "Gray, fox and southern flying squirrels are all on the state park's 2014 mammal list. The plans place its fox squirrels in sandhill and pasture.",
    ),
    faq(
      "Are fox squirrels common around Silver Springs?",
      "They're seen often in the state park, its 2010 plan says, but the park doesn't support a large population.",
    ),
    faq(
      "Why does the park monitor fox squirrels?",
      "The 2010 plan lists Sherman's fox squirrel among seven imperiled animal species the park set out to monitor. FWC still keeps it on its Imperiled Species Management Plan.",
    ),
    faq(
      "How soon can you come out for squirrels in Silver Springs?",
      "Same-day appointments for squirrels are often available in Silver Springs. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a squirrel call in Silver Springs]",
    ),
  ],
  ctaHeading: "Squirrels in your Silver Springs attic?",
  ctaText: "Silver Springs squirrel calls go to (727) 594-7705.",
  seo: {
    title: "Squirrel Removal Silver Springs, FL | Pro Wildlife Removal",
    description:
      "Squirrel removal in Silver Springs, FL: squirrels out of attics and soffits, young checked first, openings sealed, plus the park's fox squirrel records.",
  },
  sources: [
    { title: "Florida DEP: Silver Springs State Park Unit Management Plan Amendment, Dec. 17, 2014, bundled with the 2010 Silver River State Park Unit Management Plan (2014: Sherman's fox squirrel inhabits the sandhill, highly likely forages and/or inhabits the attraction property; mammal list: gray squirrel, fox squirrel, southern flying squirrel. 2010: nuisance cases may arise from raccoons and gray squirrels; Sherman's fox squirrels in pasture and sandhill, observed often, not a large population; monitoring protocols for 7 imperiled animal species including Sherman's fox squirrel)", url: SSSP },
    { title: "Florida DEP: Rainbow Springs Aquatic Preserve Management Plan, June 2016 (southwest Marion County; documented species include grey squirrel and Sherman's fox squirrel)", url: RSAP },
    { title: "FWC: Southern fox squirrel profile (previously Sherman's fox squirrel; removed as a Species of Special Concern in 2018; remains on the Imperiled Species Management Plan)", url: SFS },
    { title: "FWC: Nongame wildlife regulations (fox squirrels may not be taken or pursued)", url: NONGAME },
    { title: "FWC: Regional offices (Northeast Region includes Marion; Ocala office 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Typical response time for a squirrel call in Silver Springs?", "A real Google review from a Silver Springs squirrel job (TTR-723), and real Silver Springs squirrel job photos."],
});
