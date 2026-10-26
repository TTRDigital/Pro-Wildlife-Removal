import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/* Squirrel removal in Tampa (TTR-738). Every card is one sourced fact about squirrels, or the trees they live in, in Tampa or Hillsborough County. */
const CANOPY = "https://www.tampa.gov/city-planning/tree-canopy-analysis";
const UTC2021 = "https://www.tampa.gov/sites/default/files/document/2023/tampa-utc-2021-hires.pdf";
const IN1397 = "https://ask.ifas.ufl.edu/publication/IN1397";
const TREES = "https://www.tampa.gov/construction-services/tree-information";

export const squirrelRemovalTampa = servicePlacePage({
  service: "squirrel-removal",
  animal: "Squirrel",
  animals: "Squirrels",
  place: "tampa-fl",
  placeName: "Tampa",
  placeKind: "city",
  location: "about-us/service-area/tampa/wildlife-removal-service-in-tampa-fl",
  county: "Hillsborough",
  order: 4,
  heroText: "Squirrels chewing into a Tampa soffit or running across the attic in the morning? We check for babies, get them out the way Florida law allows and repair the chewed entry. Call (727) 594-7705.",
  answerHeading: "Who removes squirrels from attics in Tampa?",
  answer:
    "A private wildlife company. The City of Tampa sends wildlife on private property to private removal services. Pro Wildlife Removal finds where squirrels chewed in, checks for a nest of young, removes them the way Florida law allows and repairs the roofline. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "42% of Tampa's canopy is on homes", "Big trees need a pruning permit"],
  localHeading: "What to know about squirrels in Tampa",
  localIntro: "Squirrels follow the trees, and Tampa has millions of them, many right over the roofs.",
  local: [
    { icon: "leaf", title: "Ten million trees", text: p("The city counts 10,401,421 trees in Tampa's urban forest, from 114 tree and palm species, and says 86% are native.") },
    { icon: "home", title: "Canopy over the houses", text: p("The city's 2021 tree canopy analysis found 42% of Tampa's canopy on residential properties.") },
    { icon: "map-pin", title: "Limbs are the way in", text: p("UF/IFAS says squirrels and rats use limbs that touch or overhang a house as a highway inside.") },
    { icon: "wrench", title: "Check before you cut", text: p("Tampa protects oaks, pines and other trees over 5 inches across, and requires a permit before pruning a tree 24 inches or more in diameter. Ask before cutting big limbs back from the roof.") },
    { icon: "critter", title: "Gray squirrels in attics", text: p("FWC says gray squirrels are active during the day and sometimes nest in attics when they can get in.") },
    { icon: "search", title: "Fox squirrels in the preserves", text: p("In Hillsborough County east of Tampa, the county lists Sherman's fox squirrel as a resident of Alderman's Ford Nature Preserve, 985 acres near Plant City, and the Florida Birding Trail notes them at Balm-Boyette Scrub.") },
  ],
  contactsIntro: "Who to call about squirrels and trees in Tampa, from the city's own pages.",
  contacts: [
    { icon: "users", title: "Squirrels in the house", text: p("The city points private-property wildlife to private companies. Call us at (727) 594-7705.") },
    { icon: "leaf", title: "Tree permits", text: p("Tampa's Development & Growth Management Department issues tree permits. Unpermitted removal can be reported to Code Enforcement at (813) 274-5545.") },
  ],
  attic: { slug: "squirrels-in-attic", label: "Squirrels in the attic" },
  extraLink: { label: "Squirrel poop vs rat poop", href: "/blog/squirrel-poop-vs-rat-poop-how-to-spot-the-difference/", text: "Tell the two apart from what's left on the insulation." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Tampa squirrel job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Will the City of Tampa remove squirrels from my attic?",
      "No. The city's animal services page says wildlife on private property needs a private removal service.",
    ),
    faq(
      "Can I cut back the oak over my roof to keep squirrels off?",
      "Often, but check first. Tampa requires a permit before pruning a tree 24 inches or more in diameter, and protects oaks and other trees over 5 inches from damage without one.",
    ),
    faq(
      "Are fox squirrels the ones in my Tampa attic?",
      "Probably not. FWC notes gray squirrels sometimes nest in attics, and the county's preserve pages list Sherman's fox squirrels at Alderman's Ford and Balm-Boyette.",
      "[PLACEHOLDER: ask the client: have you ever removed a fox squirrel from a Tampa attic?]",
    ),
    faq(
      "How do squirrels get into Tampa roofs?",
      "UF/IFAS says squirrels use limbs that touch or overhang a roof to get in. With 42% of Tampa's canopy on residential properties, check the trees by your roofline.",
    ),
    faq(
      "How soon can you get to squirrels in Tampa?",
      "Same-day appointments for squirrel calls are often available in Tampa. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a squirrel call in Tampa]",
    ),
  ],
  ctaHeading: "Squirrels in your Tampa attic?",
  ctaText: "Tampa squirrel calls go to (727) 594-7705.",
  seo: {
    title: "Squirrel Removal in Tampa, FL | Pro Wildlife Removal",
    description:
      "Squirrel removal in Tampa, FL: squirrels out of attics and soffits, babies checked for, chewed entries repaired, and Tampa's tree rules. (727) 594-7705.",
  },
  sources: [
    { title: "City of Tampa: Tree canopy analysis (10,401,421 trees; 114 tree and palm species; 86% native)", url: CANOPY },
    { title: "City of Tampa: Tree Canopy and Urban Forest Analysis 2021, Feb 2023 (42% of citywide canopy acreage on residential properties)", url: UTC2021 },
    { title: "UF/IFAS EDIS IN1397: Landscaping methods to prevent pests from entering your home (rats and squirrels use limbs as a highway into the house; prune overhanging or touching limbs)", url: IN1397 },
    { title: "City of Tampa: Tree information (protected trees include oaks, pines, elms over 5 inches DBH; no damage without a permit; permit before pruning trees 24 inches or more DBH; Code Enforcement (813) 274-5545)", url: TREES },
    { title: "FWC: Squirrels (gray squirrels active during the day; sometimes nest in attics or other structures when accessible)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/squirrels/" },
    { title: "Hillsborough County: Alderman's Ford Nature Preserve (985 acres; Plant City; Sherman's fox squirrel among listed residents)", url: "https://hcfl.gov/locations/aldermans-ford-nature-preserve" },
    { title: "FWC Great Florida Birding Trail: Balm-Boyette Scrub Nature Preserve (gopher tortoises and Sherman's fox squirrels live on the property)", url: "https://floridabirdingtrail.com/trail/trail-sections/west-section/balm-boyette-scrub-nature-preserve/" },
    { title: "City of Tampa: Animal services, Hillsborough County (wildlife on private property: use private removal services)", url: "https://www.tampa.gov/service/animal-services-hillsborough-county" },
  ],
  clientQuestions: ["Typical response time for a squirrel call in Tampa?", "Have you ever removed a fox squirrel from a Tampa attic?", "A real Google review from a Tampa squirrel job (TTR-723), and real Tampa squirrel job photos."],
});
