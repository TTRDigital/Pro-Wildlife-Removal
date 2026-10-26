import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Squirrel removal in Brooksville (TTR-738, Nia). Every card is one true fact
 * about squirrels around Brooksville: FWC and Birding Trail pages for Chinsegut,
 * Croom and Chassahowitzka, the Withlacoochee State Forest, and FWC profiles.
 */
const CHIN = "https://myfwc.com/recreation/lead/chinsegut/";
const CHIN_BT = "https://floridabirdingtrail.com/site/chinsegut-wildlife-and-environmental-area/";
const CROOM = "https://myfwc.com/recreation/cooperative/croom/";
const CHASS = "https://floridabirdingtrail.com/site/chassahowitzka-wildlife-management-area/";
const WSF = "https://www.fdacs.gov/Forest-Wildfire/Our-Forests/State-Forests/Withlacoochee-State-Forest";
const GRAY = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/squirrels/";
const FOX = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/fox-squirrel/";

export const squirrelRemovalBrooksville = servicePlacePage({
  service: "squirrel-removal",
  animal: "Squirrel",
  animals: "Squirrels",
  place: "brooksville-fl",
  placeName: "Brooksville",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-service-in-brooksville-fl",
  county: "Hernando",
  order: 41,
  heroText: "Squirrels chewing into a Brooksville roofline or racing across the attic every morning? We find the hole, get them and any young out, and repair the entry. Call (727) 594-7705.",
  answerHeading: "Who gets squirrels out of Brooksville attics?",
  answer:
    "A private wildlife company. Brooksville sits among state forest and wildlife areas where FWC lists squirrels, and FWC says the gray squirrel will sometimes nest in an attic when it finds a way in. Pro Wildlife Removal looks for that way in, removes the squirrels and any nest, and repairs the opening. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Fox squirrel country", "Gray squirrels sometimes nest in attics"],
  localHeading: "What to know about squirrels in Brooksville",
  localIntro: "State forest and wildlife areas surround Brooksville. Here is where FWC and the forest service say its squirrels live.",
  local: [
    { icon: "leaf", title: "Fox squirrels at Chinsegut", text: p("FWC names fox squirrels among the wildlife at Chinsegut Wildlife and Environmental Area, six miles north of Brooksville, and the Birding Trail lists southern fox squirrels there by name.") },
    { icon: "drop", title: "Chinsegut's old longleaf", text: p("Chinsegut preserves one of Florida's few remaining stands of intact old-growth longleaf pine, FWC says, and the habitat supports rare and imperiled species including the Sherman's fox squirrel.") },
    { icon: "map-pin", title: "Croom, northeast of town", text: p("FWC's Croom Wildlife Management Area covers more than 20,000 acres of longleaf pine and cypress northeast of Brooksville, along 13 miles of the Withlacoochee River, and lists fox squirrels among the wildlife you may see.") },
    { icon: "search", title: "Up an oak at Chassahowitzka", text: p("The Birding Trail page for the 27,946-acre Chassahowitzka Wildlife Management Area, on U.S. 19 with a Brooksville address, tells visitors to watch for southern fox squirrels scurrying up an oak tree.") },
    { icon: "home", title: "Both kinds in the state forest", text: p("Hernando is one of five counties the Withlacoochee State Forest spans, and Florida's forest service lists both fox squirrels and gray squirrels among the wildlife seen there.") },
    { icon: "critter", title: "Gray squirrels and attics", text: p("FWC says gray squirrels live near oaks and hickories in woods and towns alike, are active by day and will sometimes nest in attics when they can get in. They can breed up to twice a year, with litters averaging one to four.") },
    { icon: "phone", title: "Rabies risk from squirrels", text: p("Squirrels, like rats and other rodents, are rarely found infected with rabies and have not been known to cause human rabies in Florida, according to DOH-Hernando.") },
    { icon: "wrench", title: "Leave the fox squirrels be", text: p("FWC says fox squirrels are protected from hunting statewide, are far less common than gray squirrels and spend more time on the ground. A big Brooksville squirrel with a black face and white nose fits FWC's fox squirrel description.") },
  ],
  attic: { slug: "squirrels-in-attic", label: "Squirrels in the attic" },
  extraLink: { label: "Florida trapping rules", href: "/blog/florida-wildlife-trapping-rules/", text: "FWC's trapping rules for homeowners, including the changes that start December 31, 2026." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Brooksville squirrel job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Is the big black squirrel in my Brooksville yard a problem?",
      "Probably not. A large squirrel with a black face and white nose and ears is likely a fox squirrel, which FWC says is protected from hunting and spends more time on the ground. The squirrel FWC describes nesting in attics is the gray squirrel.",
    ),
    faq(
      "Where do squirrels near Brooksville come from?",
      "All around. FWC and the Birding Trail list squirrels at Chinsegut, Croom and Chassahowitzka, and the forest service lists both kinds in the Withlacoochee State Forest, all close to town.",
    ),
    faq(
      "Can I trap and release a squirrel at Croom or Chinsegut?",
      "Not without the land manager's written permission. FWC doesn't allow public land as a release site otherwise, and a trapped animal can only go back on your own property or on 40-plus acres in Hernando with the owner's written OK.",
    ),
    faq(
      "Will squirrels have babies in my attic?",
      "They can. FWC says gray squirrels breed up to twice a year, so we check for a nest before closing any hole, and the young come out with the mother.",
    ),
    faq(
      "How soon can you come out for squirrels in Brooksville?",
      "Same-day appointments for squirrels are often available in Brooksville. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a squirrel call in Brooksville]",
    ),
  ],
  ctaHeading: "Squirrels in your Brooksville attic?",
  ctaText: "Brooksville squirrel calls go to (727) 594-7705.",
  seo: {
    title: "Squirrel Removal in Brooksville, FL | Pro Wildlife Removal",
    description:
      "Squirrel removal in Brooksville, FL: gray squirrels out of attics, nests checked first, entry holes repaired, plus the fox squirrel areas all around town.",
  },
  sources: [
    { title: "FWC: Chinsegut Wildlife and Environmental Area (fox squirrels among the wildlife; Hernando County, six miles north of Brooksville)", url: CHIN },
    { title: "FWC Great Florida Birding Trail: Chinsegut WEA (southern fox squirrels recorded)", url: CHIN_BT },
    { title: "FWC: Chinsegut WEA habitat (one of the few remaining stands of intact old-growth longleaf pine in Florida; supports rare and imperiled species including Sherman's fox squirrel)", url: "https://myfwc.com/recreation/lead/chinsegut/habitat/" },
    { title: "DOH-Hernando: Rabies surveillance (squirrels, rats and other rodents rarely found to be infected; not known to cause human rabies in Florida)", url: "https://hernando.floridahealth.gov/programs-and-services/environmental-public-health/rabies-surveillance/" },
    { title: "FWC: Croom WMA (Hernando and Sumter, northeast of Brooksville; more than 20,000 acres; 13 miles of the Withlacoochee River; cypress and longleaf pine; fox squirrels)", url: CROOM },
    { title: "FWC Great Florida Birding Trail: Chassahowitzka WMA (27,946 acres; US 19, Brooksville 34614; southern fox squirrels scurrying up an oak tree)", url: CHASS },
    { title: "FDACS Florida Forest Service: Withlacoochee State Forest (counties: Citrus, Hernando, Lake, Pasco, Sumter; fox squirrel and gray squirrel among wildlife seen)", url: WSF },
    { title: "FWC: Eastern gray squirrel profile (woodland and urban areas near oaks and hickories; active by day; breeds up to twice a year; nests in attics when accessible; litters of one to four)", url: GRAY },
    { title: "FWC: Fox squirrel profile (protected from hunting throughout the state; black faces, white noses and ears; much less numerous than gray squirrels; more time on the ground)", url: FOX },
    { title: "FWC: Relocating nuisance wildlife (own property or 40+ contiguous acres in the county with written permission; public parks need the land manager's written permission)", url: "https://myfwc.com/conservation/you-conserve/wildlife/relocate/" },
  ],
  clientQuestions: ["Typical response time for a squirrel call in Brooksville?", "A real Google review from a Brooksville squirrel job (TTR-723), and real Brooksville squirrel job photos."],
});
