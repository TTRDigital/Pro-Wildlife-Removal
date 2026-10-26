import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Squirrel removal in Pinellas County (TTR-738, Rhea). County-wide squirrel facts:
 * fox squirrels at Fred Howard Park and their state protection, county park
 * feeding and release rules, oak shade, and the county's orphaned-wildlife advice.
 */
const FRED = "https://pinellas.gov/parks/fred-howard-park/";
const FOX = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/fox-squirrel/";
const GRAY = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/squirrels/";
const INJURED = "https://pinellas.gov/injured-or-orphaned-wildlife/";

export const squirrelRemovalPinellasCounty = servicePlacePage({
  service: "squirrel-removal",
  animal: "Squirrel",
  animals: "Squirrels",
  place: "pinellas-county-fl",
  placeName: "Pinellas County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-pinellas-county",
  order: 10,
  heading: "Squirrel Removal in Pinellas County, FL",
  heroText: "Scurrying in the attic at sunrise, or a chewed hole at the roofline of your Pinellas home? We find where squirrels get in, get them out and close it up. Call (727) 594-7705.",
  answerHeading: "Who removes squirrels from attics in Pinellas County?",
  answer:
    "A private wildlife company. Pinellas County's wildlife help is for animals that are sick, injured or orphaned, not healthy squirrels in a roof. Pro Wildlife Removal gets gray squirrels out of Pinellas attics, checks for nests of young and seals the openings they chewed or found. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Fox squirrels: no hunting", "No releases in county parks"],
  localHeading: "Squirrels in Pinellas County",
  localIntro: "Two kinds of tree squirrel live in Pinellas, and only one of them is the usual attic pest. Here's what the county and the state say.",
  local: [
    { icon: "leaf", title: "Fox squirrels at Fred Howard", text: p("Pinellas County lists fox squirrels, along with eagles and gopher tortoises, among the wildlife at 155-acre Fred Howard Park in Tarpon Springs.") },
    { icon: "shield-check", title: "Fox squirrels are protected", text: p("FWC says fox squirrels are protected from hunting throughout Florida, and two of the state's four subspecies are listed species. Know which squirrel you have before a trap goes out.") },
    { icon: "home", title: "Gray squirrels and attics", text: p("FWC notes that eastern gray squirrels, the common backyard squirrel, can breed twice a year and will sometimes nest in attics when they can get in.") },
    { icon: "map-pin", title: "Squirrels in the city core", text: p("Even the small Ed Taylor Passive Preserve between Pinellas Park's City Hall and England Brothers Park is a place, the city says, to catch a glimpse of squirrels.") },
    { icon: "balance", title: "Don't feed them in parks", text: p("Pinellas County park rules prohibit feeding wildlife, and the county's campground rules call out squirrels by name.") },
    { icon: "wrench", title: "No dropping off trapped squirrels", text: p("County park rules also ban releasing or transplanting any animal on park land, so a squirrel caught at home can't be let go at the nearest county park.") },
    { icon: "critter", title: "Baby squirrel on the ground?", text: p("Pinellas County advises leaving young wildlife in place and calling for guidance if you aren't sure it's orphaned. Its rehabilitator list includes groups that take small mammals.") },
  ],
  contactsIntro: "Who to call about a squirrel in Pinellas County, from the county's injured and orphaned wildlife page.",
  contacts: [
    { icon: "users", title: "Injured or orphaned squirrel", text: p("Tampa Bay Wildlife Rehabilitation, (727) 725-1691, accepts small and large mammals, per the county's list.") },
    { icon: "phone", title: "Pickup help for a sick animal", text: p("Pinellas County Animal Services can help move a sick or hurt squirrel: (727) 582-2600, option 4.") },
    { icon: "home", title: "Squirrels in your attic", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "squirrels-in-attic", label: "Squirrels in the attic" },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Pinellas County squirrel job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Is that a gray squirrel or a fox squirrel?",
      "Fox squirrels are bigger, weighing one to three pounds, and FWC says typical ones have a black face with a white nose and ears. Gray squirrels are smaller and grayish-brown. Fox squirrels are protected from hunting in Florida, so tell us if you think you have one.",
    ),
    faq(
      "Can I trap a squirrel and release it in a Pinellas County park?",
      "No. The county's park rules ban releasing any animal on park land. Removing the squirrel and sealing the hole it used is what keeps the attic clear. See [squirrels in the attic](/services/squirrels-in-attic/).",
    ),
    faq(
      "I found a baby squirrel in my Pinellas yard. What should I do?",
      "If you can't tell whether it's orphaned, leave it where it is and call for guidance, as the county advises. Tampa Bay Wildlife Rehabilitation, (727) 725-1691, is on the county's list for small mammals.",
    ),
    faq(
      "Will Pinellas County remove squirrels from my roof?",
      "No. The county's help covers sick, injured or orphaned wildlife. A healthy squirrel living in a house is a job for a private company.",
    ),
    faq(
      "How soon can you get to a squirrel problem in Pinellas County?",
      "Same-day squirrel inspections are often available in Pinellas County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a squirrel call in Pinellas County]",
    ),
  ],
  ctaHeading: "Squirrels in your Pinellas attic?",
  ctaText: "For squirrels anywhere in Pinellas County, call (727) 594-7705.",
  seo: {
    title: "Squirrel Removal in Pinellas County | Pro Wildlife Removal",
    description:
      "Squirrel removal in Pinellas County, FL: gray squirrels out of attics, nests checked, holes sealed, and what to know about fox squirrels. (727) 594-7705.",
  },
  sources: [
    { title: "Pinellas County: Fred Howard Park (155 acres, Tarpon Springs; eagles, gopher tortoises and fox squirrels)", url: FRED },
    { title: "FWC: Fox squirrel profile (one to three pounds; white noses and ears with black faces; protected from hunting throughout the state; two of four Florida subspecies listed)", url: FOX },
    { title: "FWC: Eastern gray squirrel profile (woodland and urban areas near oaks; breeding up to twice a year; will sometimes nest in attics; litters one to four)", url: GRAY },
    { title: "City of Pinellas Park: Ed Taylor Passive Preserve (between City Hall and England Brothers Park; squirrels, birds and other small wildlife)", url: "https://www.pinellaspark.gov/Facilities/Facility/Details/Ed-Taylor-Nature-Park-35" },
    { title: "Pinellas County: Park rules, Code Ch. 90 (no feeding, disturbing or removing wildlife; no release or transplant of any animals)", url: "https://pinellas.gov/park-rules/" },
    { title: "Pinellas County: Camping information (prohibited: feeding wildlife, including birds, squirrels and raccoons)", url: "https://pinellas.gov/camping-information/" },
    { title: "Pinellas County: Injured or orphaned wildlife (leave wildlife in place if unsure it is orphaned; Tampa Bay Wildlife Rehabilitation (727) 725-1691, small and large mammals; Animal Services (727) 582-2600 option 4)", url: INJURED },
  ],
  clientQuestions: ["Typical response time for a squirrel call in Pinellas County?", "A real Google review from a Pinellas County squirrel job (TTR-723), and real Pinellas squirrel job photos."],
});
