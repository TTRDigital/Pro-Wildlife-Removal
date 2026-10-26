import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Squirrel removal in Sumter County (TTR-738, Nia). Every card is one true fact
 * about squirrels in Sumter: FWC pages for Half Moon, Richloam and Croom WMAs,
 * the Withlacoochee State Forest page, the county's nuisance wildlife page and
 * FWC squirrel profiles.
 */
const HALFMOON = "https://myfwc.com/recreation/lead/half-moon/";
const RICHLOAM = "https://myfwc.com/recreation/cooperative/richloam/";
const CROOM = "https://myfwc.com/recreation/cooperative/croom/";
const WSF = "https://www.fdacs.gov/Forest-Wildfire/Our-Forests/State-Forests/Withlacoochee-State-Forest";
const NUISANCE = "https://www.sumtercountyfl.gov/1180/Nuisance-Wildlife";
const GRAY = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/squirrels/";

export const squirrelRemovalSumterCounty = servicePlacePage({
  service: "squirrel-removal",
  animal: "Squirrel",
  animals: "Squirrels",
  place: "sumter-county-fl",
  placeName: "Sumter County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-sumter-county-fl",
  order: 70,
  heroText: "Squirrels in the soffit or chewing the fascia of a Sumter County home? We find the way in, take out the squirrels and any young, and repair the spot they used. Call (727) 594-7705.",
  answerHeading: "Who removes squirrels from Sumter County homes?",
  answer:
    "A private wildlife company. Sumter County Animal Services says it generally deals only with domestic animals, and refers most nuisance wildlife calls to private trappers. Pro Wildlife Removal finds where squirrels get into Sumter homes, removes them and any nest of young, and repairs the opening. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Fox squirrels at Half Moon", "County refers wildlife out"],
  localHeading: "What to know about squirrels in Sumter County",
  localIntro: "Sumter's wildlife areas list both gray and fox squirrels. Here is where FWC and the forest service say they live, and who handles a squirrel in your house.",
  local: [
    { icon: "leaf", title: "Fox squirrels at Half Moon", text: p("FWC's Half Moon Wildlife Management Area, near State Road 44 and County Road 247 in Sumter, eight miles east of Inverness, lists Sherman's fox squirrels among the wildlife to look for.") },
    { icon: "map-pin", title: "Gray squirrels at Richloam", text: p("The Richloam tract of the Withlacoochee State Forest covers more than 58,000 acres in Hernando, Pasco, Sumter and Lake counties, and FWC lists gray squirrels among its wildlife.") },
    { icon: "search", title: "Fox squirrels at Croom", text: p("FWC's Croom Wildlife Management Area, in Hernando and Sumter along 13 miles of the Withlacoochee River, names fox squirrels among the wildlife visitors may see.") },
    { icon: "home", title: "The forest's two squirrels", text: p("Sumter is one of the five counties the Withlacoochee State Forest spans, and the forest service lists both fox squirrels and gray squirrels there.") },
    { icon: "users", title: "Not an Animal Services call", text: p("Sumter County's nuisance wildlife page says Animal Services generally deals only with domestic animals, and that residents reporting nuisance wildlife are usually referred to private trappers.") },
    { icon: "critter", title: "Gray squirrels and houses", text: p("FWC says the eastern gray squirrel lives near oaks and hickories in woods and towns, is active by day and will sometimes nest in attics when it can get in, with litters of one to four up to twice a year.") },
  ],
  contactsIntro: "Who handles what when squirrels are the problem in Sumter County, from the county's own page.",
  contacts: [
    { icon: "map-pin", title: "Wildlife questions", text: p("FWC's office in Ocala, 352-732-1225, which the county lists for nuisance wildlife.") },
    { icon: "phone", title: "Bitten or scratched", text: p("Report it right away to the Sumter County Health Department, 352-569-3131.") },
    { icon: "users", title: "Squirrels in your home", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "squirrels-in-attic", label: "Squirrels in the attic" },
  extraLink: { label: "Florida trapping rules", href: "/blog/florida-wildlife-trapping-rules/", text: "FWC's trap rules for homeowners and the new requirements starting December 31, 2026." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Sumter County squirrel job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Will Sumter County Animal Services take a squirrel out of my attic?",
      "Generally not. The county says Animal Services deals with domestic animals, and it refers most nuisance wildlife reports to private trappers. FWC's Ocala office, 352-732-1225, takes wildlife questions.",
    ),
    faq(
      "Are there fox squirrels in Sumter County?",
      "Yes. FWC lists Sherman's fox squirrels at Half Moon WMA and fox squirrels at Croom WMA. Fox squirrels are protected from hunting statewide, and the southern fox squirrel remains on FWC's Imperiled Species Management Plan.",
    ),
    faq(
      "Which squirrel gets into houses?",
      "Usually the eastern gray squirrel, which FWC says will sometimes nest in attics when it finds a way in. It's 17 to 20 inches long, grayish-brown and active during the day.",
    ),
    faq(
      "Can I let a trapped squirrel go at Half Moon or Richloam?",
      "Only with the land manager's written permission, per FWC. A release otherwise has to be on your own property, or on 40 or more contiguous acres in Sumter with the owner's written permission.",
    ),
    faq(
      "How soon can you come out for squirrels in Sumter County?",
      "Same-day appointments for squirrels are often available in Sumter County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a squirrel call in Sumter County]",
    ),
  ],
  ctaHeading: "Squirrels in your Sumter County attic?",
  ctaText: "For squirrels anywhere in Sumter, call (727) 594-7705.",
  seo: {
    title: "Squirrel Removal in Sumter County, FL | Pro Wildlife Removal",
    description:
      "Squirrel removal in Sumter County, FL: gray squirrels out of attics, young checked for first, openings repaired, plus where Sumter's fox squirrels live.",
  },
  sources: [
    { title: "FWC: Half Moon WMA (Sumter County; near SR 44 and CR 247, 8 miles east of Inverness; Sherman's fox squirrel among wildlife)", url: HALFMOON },
    { title: "FWC: Richloam WMA (more than 58,000 acres in Hernando, Pasco, Sumter and Lake; Withlacoochee State Forest tract; gray squirrel among wildlife)", url: RICHLOAM },
    { title: "FWC: Croom WMA (Hernando and Sumter; 13 miles of the Withlacoochee River; fox squirrels)", url: CROOM },
    { title: "FDACS Florida Forest Service: Withlacoochee State Forest (counties: Citrus, Hernando, Lake, Pasco, Sumter; fox squirrel and gray squirrel among wildlife seen)", url: WSF },
    { title: "Sumter County: Nuisance wildlife (Animal Services generally deals only with domestic animals; FWC Ocala 352-732-1225; referrals to private trappers; report bites to the Health Department, 352-569-3131)", url: NUISANCE },
    { title: "FWC: Eastern gray squirrel profile (17 to 20 inches; grayish-brown; near oaks and hickories; active by day; breeds up to twice a year; litters of one to four; nests in attics when accessible)", url: GRAY },
    { title: "FWC: Fox squirrel profile (protected from hunting throughout the state)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/fox-squirrel/" },
    { title: "FWC: Southern fox squirrel profile (previously Sherman's fox squirrel; remains on the Imperiled Species Management Plan)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/southern-fox-squirrel/" },
    { title: "FWC: Relocating nuisance wildlife (own property or 40+ contiguous acres in the county with written permission; public land needs the land manager's written permission)", url: "https://myfwc.com/conservation/you-conserve/wildlife/relocate/" },
  ],
  clientQuestions: ["Typical response time for a squirrel call in Sumter County?", "A real Google review from a Sumter County squirrel job (TTR-723), and real Sumter squirrel job photos."],
});
