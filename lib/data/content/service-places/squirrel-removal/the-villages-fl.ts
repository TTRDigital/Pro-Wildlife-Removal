import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * HELD (Ben, Oct 26, 2026: sighting photos only, mostly protected fox squirrels; unregistered).
 * Squirrel removal in The Villages (TTR-738, Nia). Every card is one dated
 * Villages-News report of squirrels in The Villages (2019-2026), plus FWC's fox
 * squirrel profile, status and nongame rule.
 */
const VN2019 = "https://www.villages-news.com/2019/04/12/sherman-fox-squirrel-spotted-in-the-villages/";
const VN2021 = "https://www.villages-news.com/2021/07/03/shermans-fox-squirrel-in-the-village-of-monarch-grove/";
const VN2023 = "https://www.villages-news.com/2023/01/31/fox-squirrel-on-hogeye-pathway-in-the-villages/";
const VN2025A = "https://www.villages-news.com/2025/05/08/rare-black-southern-fox-squirrel-in-the-village-of-summerhill/";
const VN2025B = "https://www.villages-news.com/2025/06/06/squirrel-scaling-utility-pole-in-the-villages/";
const VN2026 = "https://www.villages-news.com/2026/03/24/rare-black-shermans-fox-squirrel-spotted-in-the-villages/";
const FOX = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/fox-squirrel/";
const SFS = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/southern-fox-squirrel/";
const NONGAME = "https://myfwc.com/hunting/regulations/nongame/";

export const squirrelRemovalTheVillages = servicePlacePage({
  service: "squirrel-removal",
  animal: "Squirrel",
  animals: "Squirrels",
  place: "the-villages-fl",
  placeName: "The Villages",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-the-villages",
  county: "Sumter",
  order: 98,
  heroText: "Squirrels in a villa's attic, the lanai screen or the garage eaves in The Villages? We get them out, check for young before closing anything and seal the openings. Call (727) 594-7705.",
  answerHeading: "Who gets squirrels out of homes in The Villages?",
  answer:
    "A private wildlife company. Gray squirrels in a villa or home in The Villages are the owner's to have removed, but fox squirrels, which Villagers photograph often, may not be taken under FWC rules. Pro Wildlife Removal gets gray squirrels out, checks for young and seals the openings. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Fox squirrels may not be taken", "Black fox squirrels, 2025 and 2026"],
  localHeading: "What to know about squirrels in The Villages",
  localIntro: "Villagers keep sending Villages-News photos of the squirrels around them, many of them fox squirrels. Here is what those reports show, and what FWC says.",
  local: [
    { icon: "critter", title: "A Sherman's fox squirrel, 2019", text: p("In April 2019, Villages-News ran a reader's photo of a Sherman's fox squirrel spotted in The Villages and asked readers whether they had seen one in their backyard.") },
    { icon: "map-pin", title: "Monarch Grove, 2021", text: p("A Sherman's fox squirrel was photographed in the Village of Monarch Grove in July 2021, in a photo a reader shared with Villages-News.") },
    { icon: "leaf", title: "Hogeye Pathway, 2023", text: p("In January 2023, a reader's photo showed a fox squirrel at Hogeye Pathway in The Villages, Villages-News reported.") },
    { icon: "search", title: "A black one in Summerhill, 2025", text: p("A rare black southern fox squirrel turned up in the Village of Summerhill in May 2025, in a reader photo Villages-News published.") },
    { icon: "home", title: "Checking a woodpecker hole, 2025", text: p("In June 2025, a Villages-News reader photographed a squirrel climbing a wooden utility pole in The Villages to inspect a hole woodpeckers had chiseled. It was empty.") },
    { icon: "drop", title: "Another black fox squirrel, 2026", text: p("In March 2026, Villages-News ran a reader's photo of a black Sherman's fox squirrel foraging in The Villages, noting the species is usually gray and tan.") },
    { icon: "wrench", title: "Protected, and on FWC's plan", text: p("Under FWC's nongame rules, a fox squirrel may not be taken or pursued. The southern fox squirrel, formerly Sherman's, left the Species of Special Concern list in 2018 but stays on FWC's Imperiled Species Management Plan.") },
  ],
  contactsIntro: "Who handles what when squirrels are the problem in The Villages.",
  contacts: [
    { icon: "map-pin", title: "Fox squirrel questions", text: p("FWC's Northeast Region office in Ocala, 352-732-1225.") },
    { icon: "users", title: "Squirrels in your villa", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "squirrels-in-attic", label: "Squirrels in the attic" },
  extraLink: { label: "Squirrel poop vs rat poop", href: "/blog/squirrel-poop-vs-rat-poop-how-to-spot-the-difference/", text: "Droppings in the attic? How to tell a squirrel's from a rat's." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a squirrel job in The Villages, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "How do I tell a fox squirrel from a gray squirrel?",
      "Size and color. FWC says fox squirrels weigh one to three pounds and range from buff to gray, sometimes black, with white noses and ears and black faces. Villagers have photographed black ones in 2025 and 2026.",
    ),
    faq(
      "Can a fox squirrel be trapped out of my yard in The Villages?",
      "No. Fox squirrels can't be taken or pursued in Florida, by FWC rule. Call FWC's Northeast Region office at 352-732-1225 if one is causing a problem.",
    ),
    faq(
      "Will squirrels nest in holes on my property?",
      "They look for them. A Villages-News reader photographed a squirrel in 2025 climbing a utility pole to check whether a woodpecker hole was still claimed.",
    ),
    faq(
      "Where have fox squirrels turned up in The Villages?",
      "Villages-News readers have photographed them in the Village of Monarch Grove, the Village of Summerhill and along Hogeye Pathway, among other spots, from 2019 to 2026.",
    ),
    faq(
      "How soon can you come out for squirrels in The Villages?",
      "Same-day appointments for squirrels are often available in The Villages. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a squirrel call in The Villages]",
    ),
  ],
  ctaHeading: "Squirrels in your home in The Villages?",
  ctaText: "Villagers with squirrels can call (727) 594-7705.",
  seo: {
    title: "Squirrel Removal in The Villages, FL | Pro Wildlife Removal",
    description:
      "Squirrel removal in The Villages, FL: gray squirrels out of attics and eaves, young checked first, openings sealed, plus fox squirrel rules and sightings.",
  },
  sources: [
    { title: "Villages-News, April 12, 2019: Sherman fox squirrel spotted in The Villages (reader photo)", url: VN2019 },
    { title: "Villages-News, July 3, 2021: Sherman's fox squirrel in the Village of Monarch Grove (reader photo)", url: VN2021 },
    { title: "Villages-News, Jan. 31, 2023: Fox squirrel on Hogeye Pathway in The Villages (reader photo)", url: VN2023 },
    { title: "Villages-News, May 8, 2025: Rare black southern fox squirrel in the Village of Summerhill (reader photo)", url: VN2025A },
    { title: "Villages-News, June 6, 2025: Squirrel scaling utility pole in The Villages (hole chiseled by woodpeckers; empty)", url: VN2025B },
    { title: "Villages-News, March 24, 2026: Rare black Sherman's fox squirrel spotted in The Villages (usually gray and tan)", url: VN2026 },
    { title: "FWC: Fox squirrel profile (one to three pounds; buff to gray, in some instances black; white noses and ears, black faces and feet)", url: FOX },
    { title: "FWC: Southern fox squirrel profile (previously Sherman's fox squirrel; removed as a Species of Special Concern in 2018; remains on the Imperiled Species Management Plan)", url: SFS },
    { title: "FWC: Nongame wildlife regulations (fox squirrels may not be taken or pursued)", url: NONGAME },
    { title: "FWC: Regional offices (Northeast Region, Ocala, 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Typical response time for a squirrel call in The Villages?", "A real Google review from a squirrel job in The Villages (TTR-723), and real squirrel job photos there."],
});
