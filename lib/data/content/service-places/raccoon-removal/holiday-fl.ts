import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Raccoon removal in Holiday (TTR-738, Nia). Every card is one true fact about
 * raccoons in Holiday or west Pasco: DOH-Pasco's 2016 Holiday Lakes Estates
 * alert, the 2018 run of sick raccoons in west Pasco (Patch, named as news),
 * Pasco's rabies record, its trash rules and FWC's release rule.
 */
const ALERT2016 = "https://newsroomarchive.floridahealth.gov/pasco/2016/04/rabies-alert.html";
const PATCH = "https://patch.com/florida/landolakes/pasco-animal-control-seeing-increase-sick-injured-raccoons";
const RABIES = "https://www.pascocountyfl.gov/services/animal_services/programs/rabies_awareness.php";
const TRASH = "https://www.pascocountyfl.gov/services/utilities/garbage_and_recycling/index.php";
const RELOCATE = "https://myfwc.com/conservation/you-conserve/wildlife/relocate/";

export const raccoonRemovalHoliday = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "holiday-fl",
  placeName: "Holiday",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-holiday-fl",
  county: "Pasco",
  order: 27,
  heroText: "A raccoon under a Holiday mobile home, in the attic or working the trash cans every night? We get it out, look for kits first and repair the opening. Call (727) 594-7705.",
  answerHeading: "Who deals with a raccoon at a Holiday home?",
  answer:
    "A private wildlife company. Holiday is unincorporated Pasco County, and the county's animal services focus on pets and strays, not raccoons living in homes. Pro Wildlife Removal gets raccoons out of Holiday attics, crawl spaces and sheds, checks for kits and repairs the way in. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Holiday rabies alert, 2016", "Sick raccoons in 2018"],
  localHeading: "What to know about raccoons in Holiday",
  localIntro: "Holiday has had a rabid raccoon of its own and a winter of sick raccoons across west Pasco. These are the local records and rules.",
  local: [
    { icon: "critter", title: "Holiday Lakes Estates, 2016", text: p("In April 2016, DOH-Pasco issued a 60-day rabies alert for the Holiday Lakes Estates area after a person was exposed to a raccoon that tested positive for rabies.") },
    { icon: "map-pin", title: "Where the alert reached", text: p("That alert stretched from the Gulf east to Alternate US 19, and from Anclote Boulevard and County Line Road north to Gulf Trace Boulevard.") },
    { icon: "search", title: "A winter of sick raccoons", text: p("In January 2018, Patch reported that Pasco animal control had seen a big rise in sick or injured raccoons since November, with six reports in one day from populated areas on the west side of the county.") },
    { icon: "phone", title: "Rabies or distemper", text: p("A DOH-Pasco spokeswoman said then that raccoons can carry and pass on both rabies and distemper, and urged pet owners to keep both vaccines current. A wobbly raccoon in a Holiday yard isn't one to approach.") },
    { icon: "drop", title: "Pasco's rabies record", text: p("Raccoons made up 17 of the 24 rabid animals Pasco County recorded from 2013 to 2023, according to the county's rabies awareness page.") },
    { icon: "home", title: "Your hauler, twice a week", text: p("Holiday homes are in unincorporated Pasco, where the county doesn't pick up trash. Residents sign up with a private hauler, and curbside garbage goes twice a week.") },
    { icon: "leaf", title: "Not to the parks", text: p("FWC says county and state parks can't be used to release trapped wildlife without the land manager's written permission. That rules out Holiday's Anclote River Park or Key Vista Nature Park as drop-off spots.") },
  ],
  contactsIntro: "Who handles what when a raccoon is the problem in Holiday, from the county's and agencies' own pages.",
  contacts: [
    { icon: "phone", title: "Bitten or scratched", text: p("Wash the wound, get medical care and report it to DOH-Pasco: 352-521-1450, option 4.") },
    { icon: "users", title: "Sick raccoon in the street", text: p("Pasco County Animal Services, 813-929-1212.") },
    { icon: "home", title: "A raccoon in your home", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "Trap check times, release rules and the 2026 changes, before you set a trap yourself." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Holiday raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Has there been rabies in Holiday raccoons?",
      "Yes. A raccoon in the Holiday Lakes Estates area tested positive in 2016 after a person was exposed, and DOH-Pasco put the area under a 60-day alert. Never touch or corner a raccoon.",
    ),
    faq(
      "The raccoon in my yard looks sick. Who do I call?",
      "Pasco County Animal Services at 813-929-1212. In the 2018 run of sick raccoons in west Pasco, DOH-Pasco said they can carry rabies or distemper, so keep kids and pets away from it.",
    ),
    faq(
      "Can I release a trapped raccoon at Anclote River Park?",
      "Not without written permission from the land manager, per FWC. Otherwise a trapped raccoon can go back only on your own land, or on 40-plus acres in Pasco with the owner's written permission.",
    ),
    faq(
      "Who picks up trash in Holiday?",
      "A private hauler you sign up with. Pasco County doesn't collect trash in unincorporated areas like Holiday; curbside garbage runs twice a week and recycling once.",
    ),
    faq(
      "How soon can you come out for a raccoon in Holiday?",
      "Same-day appointments for raccoons are often available in Holiday. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a raccoon call in Holiday]",
    ),
  ],
  ctaHeading: "Raccoon in your Holiday home?",
  ctaText: "Holiday raccoon calls go to (727) 594-7705.",
  seo: {
    title: "Raccoon Removal in Holiday, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in Holiday, FL: raccoons out of attics, crawl spaces and sheds, kits checked first, entry repaired, plus Holiday rabies history and rules.",
  },
  sources: [
    { title: "DOH-Pasco: Rabies alert, April 7, 2016 (one person exposed to a rabid raccoon; Holiday Lakes Estate area; 60 days; Gulf of Mexico, Anclote Boulevard/County Line Road, Alternate US 19, Gulf Trace Boulevard)", url: ALERT2016 },
    { title: "Patch, Jan. 25, 2018: Pasco animal control seeing increase in sick, injured raccoons (significant increase since November; six reports from populated areas on the west side of Pasco; DOH-Pasco: raccoons can carry and transmit rabies and distemper; keep pets' vaccines current)", url: PATCH },
    { title: "Pasco County: Rabies awareness (24 positive animals 2013-2023: 17 raccoons, 6 cats, 1 bat)", url: RABIES },
    { title: "U.S. Census Bureau: TIGER/Line 2020 places, Florida (Holiday CDP, an unincorporated census place in Pasco)", url: "https://www2.census.gov/geo/tiger/TIGER2020/PLACE/tl_2020_12_place.zip" },
    { title: "Pasco County: Garbage and recycling (county does not pick up trash; sign up with a hauler; curbside twice a week, recycling once)", url: TRASH },
    { title: "FWC: Relocating nuisance wildlife (own property or 40+ contiguous acres in the county with written permission; county and state parks need the land manager's written permission)", url: RELOCATE },
    { title: "Pasco County: Anclote River Park (Holiday)", url: "https://www.pascocountyfl.gov/_T22_R51.php" },
    { title: "Pasco County: Key Vista Nature Park (Holiday)", url: "https://www.pascocountyfl.gov/business_detail_T22_R71.php" },
    { title: "Pasco County: Animal Services (813-929-1212)", url: "https://www.pascocountyfl.gov/services/animal_services/index.php" },
    { title: "DOH-Pasco: Rabies advisory, July 30, 2026 (newest Pasco notice; report bites and scratches, 352-521-1450, option 4)", url: "https://pasco.floridahealth.gov/2026/07/30/doh-pasco-issues-rabies-advisory/" },
  ],
  clientQuestions: ["Typical response time for a raccoon call in Holiday?", "A real Google review from a Holiday raccoon job (TTR-723), and real Holiday raccoon job photos."],
});
