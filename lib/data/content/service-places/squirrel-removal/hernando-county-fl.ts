import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Squirrel removal in Hernando County (TTR-738, Nia). Every card is one true
 * fact about squirrels in Hernando: FWC, Birding Trail and forest service pages
 * that name squirrels on Hernando land, and FWC's gray and fox squirrel profiles.
 */
const CHIN = "https://myfwc.com/recreation/lead/chinsegut/";
const CHIN_HAB = "https://myfwc.com/recreation/lead/chinsegut/habitat/";
const CROOM = "https://myfwc.com/recreation/cooperative/croom/";
const CHASS = "https://floridabirdingtrail.com/site/chassahowitzka-wildlife-management-area/";
const WSF = "https://www.fdacs.gov/Forest-Wildfire/Our-Forests/State-Forests/Withlacoochee-State-Forest";
const GRAY = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/squirrels/";
const SOUTHERN = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/southern-fox-squirrel/";

export const squirrelRemovalHernandoCounty = servicePlacePage({
  service: "squirrel-removal",
  animal: "Squirrel",
  animals: "Squirrels",
  place: "hernando-county-fl",
  placeName: "Hernando County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-in-hernando-county-fl",
  order: 53,
  heroText: "Squirrels in the soffit, chewed fascia or scurrying overhead during the day? We find where they got into your Hernando home, get them and any young out and repair the opening. Call (727) 594-7705.",
  answerHeading: "Who removes squirrels from Hernando County homes?",
  answer:
    "A private wildlife company. The squirrel in a Hernando attic is usually an eastern gray squirrel, which FWC says will sometimes nest in attics when it can get in. Pro Wildlife Removal finds the entry, removes the squirrels and any nest of young, and repairs the opening it used. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Fox squirrels on three FWC areas", "Litters up to twice a year"],
  localHeading: "What to know about squirrels in Hernando County",
  localIntro: "Hernando's state lands are home to both gray and fox squirrels. Here is where official pages say they live, and what that means for a homeowner.",
  local: [
    { icon: "leaf", title: "Sandhill at Chinsegut", text: p("FWC lists fox squirrels among the wildlife at Chinsegut Wildlife and Environmental Area in Hernando, whose main habitats are upland pine forest, sandhill, mesic hammock and basin marsh.") },
    { icon: "map-pin", title: "Croom's longleaf pine", text: p("Croom Wildlife Management Area spans more than 20,000 acres of Hernando and Sumter, where FWC says cypress and big stands of longleaf pine dominate and fox squirrels are among the wildlife visitors see.") },
    { icon: "search", title: "Chassahowitzka's oaks", text: p("On the coast, the Birding Trail page for Chassahowitzka Wildlife Management Area suggests looking for southern fox squirrels scurrying up an oak tree, near gopher tortoises at their burrows.") },
    { icon: "home", title: "Gray squirrels in the forest", text: p("Florida's forest service lists gray squirrels as well as fox squirrels in the Withlacoochee State Forest, which takes in parts of Hernando, Citrus, Lake, Pasco and Sumter counties.") },
    { icon: "critter", title: "Diet of pine seeds and acorns", text: p("FWC says southern fox squirrels eat mostly longleaf pine seeds and turkey oak acorns, the trees of the sandhills found on Hernando's state lands, and breed in two seasons, October to February and April to August.") },
    { icon: "wrench", title: "Gray squirrels and attics", text: p("FWC says eastern gray squirrels are active by day, breed up to twice a year with one to four young, and will sometimes nest in attics or other structures when they can get in.") },
  ],
  attic: { slug: "squirrels-in-attic", label: "Squirrels in the attic" },
  extraLink: { label: "Florida trapping rules", href: "/blog/florida-wildlife-trapping-rules/", text: "FWC's rules for homeowners trapping a nuisance animal, and the changes starting December 31, 2026." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Hernando County squirrel job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Is a fox squirrel in my Hernando yard protected?",
      "FWC says fox squirrels are protected from hunting statewide. The southern fox squirrel, once called Sherman's fox squirrel, left the species of special concern list in 2018 but remains on FWC's Imperiled Species Management Plan.",
    ),
    faq(
      "How can I tell a gray squirrel from a fox squirrel?",
      "Size and face. FWC describes the gray squirrel as 17 to 20 inches with grayish-brown fur and a paler belly. Fox squirrels are larger, up to about 27 inches, often with a black head, white ears and a white nose.",
    ),
    faq(
      "When are baby squirrels most likely in my attic?",
      "Gray squirrels can breed up to twice a year, FWC says, so young can show up more than once a year. We look for a nest before closing anything so no babies get sealed in.",
    ),
    faq(
      "Can I release a trapped squirrel on state land in Hernando?",
      "Only with the land manager's written permission, FWC says. Otherwise a release has to be on your own property, or on 40 or more contiguous acres in Hernando with the owner's written permission.",
    ),
    faq(
      "How soon can you come out for squirrels in Hernando County?",
      "Same-day appointments for squirrels are often available in Hernando County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a squirrel call in Hernando County]",
    ),
  ],
  ctaHeading: "Squirrels in your Hernando County attic?",
  ctaText: "For squirrels anywhere in Hernando, call (727) 594-7705.",
  seo: {
    title: "Squirrel Removal Hernando County, FL | Pro Wildlife Removal",
    description:
      "Squirrel removal in Hernando County, FL: gray squirrels out of attics, young checked for first, openings repaired, and where Hernando's fox squirrels live.",
  },
  sources: [
    { title: "FWC: Chinsegut Wildlife and Environmental Area (fox squirrels among the wildlife; Hernando County)", url: CHIN },
    { title: "FWC: Chinsegut WEA habitat (upland pine forest, sandhill, mesic hammock and basin marsh)", url: CHIN_HAB },
    { title: "FWC: Croom WMA (Hernando and Sumter; more than 20,000 acres; cypress and large expanses of longleaf pine; fox squirrels)", url: CROOM },
    { title: "FWC Great Florida Birding Trail: Chassahowitzka WMA (southern fox squirrels scurrying up an oak tree; gopher tortoises)", url: CHASS },
    { title: "FDACS Florida Forest Service: Withlacoochee State Forest (counties: Citrus, Hernando, Lake, Pasco, Sumter; fox squirrel and gray squirrel among wildlife seen)", url: WSF },
    { title: "FWC: Southern fox squirrel profile (up to 27.6 inches; black head, white ears and snout; diet mostly longleaf pine seeds and turkey oak acorns; breeding October to February and April to August; removed as a Species of Special Concern in 2018; remains on the Imperiled Species Management Plan)", url: SOUTHERN },
    { title: "FWC: Eastern gray squirrel profile (17 to 20 inches; grayish-brown, paler underside; active by day; breeds up to twice a year; litters of one to four; nests in attics when accessible)", url: GRAY },
    { title: "FWC: Fox squirrel profile (protected from hunting throughout the state)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/fox-squirrel/" },
    { title: "FWC: Relocating nuisance wildlife (own property or 40+ contiguous acres in the county with written permission; public land needs the land manager's written permission)", url: "https://myfwc.com/conservation/you-conserve/wildlife/relocate/" },
  ],
  clientQuestions: ["Typical response time for a squirrel call in Hernando County?", "A real Google review from a Hernando County squirrel job (TTR-723), and real Hernando squirrel job photos."],
});
