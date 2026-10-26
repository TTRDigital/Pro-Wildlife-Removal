import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";
import { TRAP_RULES_SOURCE } from "../../notes.ts";

/*
 * Squirrel removal in Polk County (TTR-738, Owen). Every card names squirrels at a
 * Polk place, from FWC, SWFWMD and Polk County park pages, plus DOH's rabies tables
 * for Polk. Sourced below.
 */
const DOH = "https://www.floridahealth.gov/wp-content/uploads/";
const TENOROC = "https://myfwc.com/media/19971/tenorocmanagementplan.pdf";
const FOX = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/southern-fox-squirrel/";

export const squirrelRemovalPolkCounty = servicePlacePage({
  service: "squirrel-removal",
  animal: "Squirrel",
  animals: "Squirrels",
  place: "polk-county-fl",
  placeName: "Polk County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-polk-county",
  heroText: "Running and chewing overhead in a Polk County attic? We find where the squirrels get in, get them out and repair the soffit, vent or roofline they used. Call (727) 594-7705.",
  answerHeading: "Who removes squirrels from an attic in Polk County?",
  answer:
    "A private wildlife company. Gray squirrels, which UF/IFAS calls one of the most common animals in Florida, are listed from Tenoroc near Lakeland to the Upper Hillsborough area. Pro Wildlife Removal finds the opening a squirrel uses, gets it out of the attic and repairs the damage. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Gray squirrels common near Lakeland", "Fox squirrels in Polk preserves"],
  localHeading: "What to know about squirrels in Polk County",
  localIntro: "Two kinds of squirrel turn up on Polk's public lands. These facts come from FWC, the water management district, Polk County's park pages and the state health department.",
  local: [
    { icon: "leaf", title: "Common at Tenoroc", text: p("FWC's management plan for the Tenoroc Public Use Area, two miles northeast of Lakeland, names the gray squirrel among its common wildlife species. The plan's mammal list includes Sherman's fox squirrel too.") },
    { icon: "map-pin", title: "Upper Hillsborough WMA", text: p("Gray squirrels are among the wildlife FWC lists at the Upper Hillsborough Wildlife Management Area, more than 5,000 acres along the Hillsborough River in Polk and Pasco counties.") },
    { icon: "drop", title: "Lake Marion Creek", text: p("Five miles east of Haines City, the Lake Marion Creek WMA is mostly hardwood swamp. FWC says it remains a good spot for squirrel hunting.") },
    { icon: "search", title: "Panther Point Trail", text: p("On the eight-mile Panther Point Trail along Lake Hancock's eastern shore, Polk County tells visitors to keep an eye out for Sherman's fox squirrels, along with foxes, bobcats and deer.") },
    { icon: "map-pin", title: "North Walk-in-Water Creek", text: p("At this 1,113-acre county site on Highway 60 near Lake Wales, the trail loops through an old oak hammock where Polk County says you might see a scrambling Sherman's fox squirrel.") },
    { icon: "leaf", title: "Colt Creek State Park", text: p("The water management district's Colt Creek page lists Sherman's fox squirrel among the animals in this 5,067-acre park of pine flatwoods and cypress domes, which has a Lakeland address.") },
    { icon: "users", title: "A rare squirrel, now delisted", text: p("Polk's Environmental Reserves page names the fox squirrel among rare species its land managers must consider. FWC removed it as a Species of Special Concern in 2018 and now calls it the southern fox squirrel.") },
    { icon: "critter", title: "Not in the rabies tables", text: p("Polk's rows in the state's rabid animal tables for 2022 through 2025 list bats, raccoons and cats, but no squirrels. The state's 20-year summary for 2003 to 2022 shows no rabid squirrels anywhere in Florida.") },
  ],
  attic: { slug: "squirrels-in-attic", label: "Squirrels in the attic" },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Polk County squirrel job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Is the big squirrel in my Polk County yard a fox squirrel?",
      "It may be. FWC says the southern fox squirrel, once called Sherman's fox squirrel, can reach 27.6 inches long and lives in open longleaf pine, turkey oak, sandhill and flatwoods. The state ranks it as rare.",
    ),
    faq(
      "Will Polk County Animal Control remove a squirrel from my attic?",
      "No. The Sheriff's Office FAQ says Animal Control doesn't respond to nuisance wildlife calls or remove trapped nuisance wildlife. Squirrels in the house are a job for a private company.",
    ),
    faq(
      "Can I trap a squirrel myself in Polk County?",
      "Florida lets property owners take most nuisance wildlife without FWC approval. A trapped squirrel must stay on your property or go to 40 or more contiguous acres in Polk with the owner's written permission. FWC's new trapping rules take effect Dec 31, 2026.",
    ),
    faq(
      "Do squirrels in Polk County carry rabies?",
      "The state's tables for Polk list no rabid squirrels from 2022 to 2025, and none statewide from 2003 to 2022. Any squirrel can still bite, so don't handle one.",
    ),
    faq(
      "How soon can you come out for squirrels in Polk County?",
      "Same-day appointments for squirrels are often available in Polk County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a squirrel call in Polk County]",
    ),
  ],
  ctaHeading: "Squirrels in your Polk County attic?",
  ctaText: "Squirrels anywhere in Polk County? Call (727) 594-7705.",
  seo: {
    title: "Squirrel Removal in Polk County, FL | Pro Wildlife Removal",
    description:
      "Squirrel removal in Polk County, FL: squirrels out of attics, soffits and walls in Lakeland, Winter Haven, Haines City and Lake Wales. Call (727) 594-7705.",
  },
  sources: [
    { title: "FWC: A management plan for Tenoroc Public Use Area 2018 to 2028, Polk County (two miles northeast of Lakeland; common wildlife include gray squirrel; mammal list includes Sherman's fox squirrel)", url: TENOROC },
    { title: "FWC: Upper Hillsborough Wildlife Management Area (more than 5,000 acres; Polk and Pasco counties; gray squirrels)", url: "https://myfwc.com/recreation/cooperative/upper-hillsborough/" },
    { title: "FWC: Lake Marion Creek Wildlife Management Area (five miles east of Haines City; mostly hardwood swamp; a good spot for squirrel hunting)", url: "https://myfwc.com/recreation/cooperative/lake-marion-creek/" },
    { title: "Polk County: Panther Point Trail (eastern shore of Lake Hancock; eight miles; Sherman's fox squirrels)", url: "https://www.polkfl.gov/park/panther-point-trail/" },
    { title: "Polk County: North Walk-in-Water Creek (1,113 acres; Hwy. 60, Lake Wales; old oak hammock; Sherman's fox squirrel)", url: "https://www.polkfl.gov/park/north-walk-in-water-creek/" },
    { title: "SWFWMD: Colt Creek State Park (5,067 acres; pine flatwoods, cypress domes; Sherman's fox squirrel; SR 471, Lakeland)", url: "https://www.swfwmd.state.fl.us/recreation/colt-creek-state-park" },
    { title: "Polk County Environmental Reserves: Conservation (fox squirrel among rare species managers must consider)", url: "https://www.polkfl.gov/things-to-do/parks-and-recreation/environmental-reserves/conservation/" },
    { title: "FWC: Southern fox squirrel profile (removed as a Species of Special Concern in 2018; previously classified as Sherman's fox squirrel; up to 27.6 inches; longleaf pine, turkey oak, sandhills, flatwoods; state rank S3, rare)", url: FOX },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2022 to 2025 (Polk rows: bats, raccoons, cats; no squirrels)", url: `${DOH}2025/09/rabies-cases-county-animal-2025.pdf` },
    { title: "Florida DOH: 20-year animal rabies summary, 2003 to 2022 (no rabid squirrels)", url: `${DOH}2025/07/rabies-fla-20yr-table.pdf` },
    { title: "Polk County Sheriff's Office: Animal Services FAQ (no nuisance wildlife calls or trapped nuisance wildlife)", url: "https://www.polksheriff.org/animal-services/frequently-asked-questions" },
    { title: "UF/IFAS Florida 4-H: Gray squirrel (one of the most common animals found in all of Florida)", url: "https://florida4h.ifas.ufl.edu/florida-4-h-forest-ecology/forest-ecology-contest/contest-stations/wildlife-on-the-forest-hike/mammals/gray-squirrel/" },
    { title: "FWC: FAQs, nuisance wildlife (no FWC authorization needed to take most nuisance wildlife from private property; release on site or 40+ contiguous acres in the same county with written permission)", url: "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/" },
    TRAP_RULES_SOURCE,
  ],
  clientQuestions: ["Typical response time for a squirrel call in Polk County?", "A real Google review from a Polk County squirrel job (TTR-723), and real Polk squirrel job photos."],
});
