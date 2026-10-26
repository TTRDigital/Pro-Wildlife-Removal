import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";
import { TRAP_RULES_SOURCE } from "../../notes.ts";

/*
 * Raccoon removal in Palm Harbor (TTR-738, Owen). Palm Harbor facts: the county's
 * Lake Tarpon West Management Area page and two Tampa Bay 28 news reports (labeled as
 * news). Pinellas facts: the DOH 2025 table, county code Sec. 14-30 and the county's
 * campground rules.
 */
const TB28 = "https://www.tampabay28.com/news/region-north-pinellas/";

export const raccoonRemovalPalmHarbor = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "palm-harbor-fl",
  placeName: "Palm Harbor",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-palm-harbor",
  county: "Pinellas",
  heroText: "A raccoon in a Palm Harbor attic, lanai or garage? We get it out the way Florida allows, look for young before anything is sealed and repair the spot it used. Call (727) 594-7705.",
  answerHeading: "Who gets a raccoon out of a home in Palm Harbor?",
  answer:
    "A private wildlife company. In Palm Harbor, the county lists raccoons among the wildlife at its Lake Tarpon West Management Area, and a 2018 news report told of one that got onto a lanai through a torn screen. Pro Wildlife Removal removes raccoons from attics, lanais and garages, checks for young and repairs the way in. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "County land by Lake Tarpon lists raccoons", "Pinellas code: don't feed them"],
  localHeading: "What to know about raccoons in Palm Harbor",
  localIntro: "Two of the Palm Harbor facts below are from local news reports, labeled as news. The rest come from Pinellas County and the state health department.",
  local: [
    { icon: "leaf", title: "Lake Tarpon West", text: p("Pinellas County says its Lake Tarpon West Management Area, in the Palm Harbor area just west of Lake Tarpon, supports native wildlife including raccoons, river otters, alligators, frogs and snakes.") },
    { icon: "map-pin", title: "Distemper at John Chesnut Sr. Park (news)", text: p("In March 2017, Tampa Bay 28 reported that a raccoon at John Chesnut Sr. Park in Palm Harbor tested positive for canine distemper virus. The county's release said there was no reported exposure to visiting dogs.") },
    { icon: "home", title: "Through a torn screen (news)", text: p("In September 2018, Tampa Bay 28 reported a raccoon that got onto a Palm Harbor lanai through a tear in the screen, ran through the house and ended up on top of a vanity. Deputies shooed it out a bedroom window.") },
    { icon: "search", title: "Pinellas rabies, 2025", text: p("Pinellas County's row in the state's 2025 rabies table listed one rabid animal for the year, and it was a raccoon.") },
    { icon: "users", title: "Feeding is a nuisance", text: p("Pinellas County code Sec. 14-30 lists placing or offering food or garbage in a way that attracts raccoons, cats, dogs, coyotes or other wildlife, and so creates a public nuisance.") },
    { icon: "drop", title: "Park rules name raccoons", text: p("Pinellas County's campground rules at Fort De Soto list feeding wildlife, including birds, squirrels and raccoons, as a prohibited action.") },
  ],
  contactsIntro: "Who handles what when a raccoon is the problem in Palm Harbor, from the county's and DOH-Pinellas's own pages.",
  contacts: [
    { icon: "phone", title: "Bitten or scratched", text: p("Get medical care and report it to DOH-Pinellas at 727-824-6932.") },
    { icon: "users", title: "A neighbor feeding raccoons", text: p("Pinellas County Animal Services enforces Sec. 14-30, the county's public nuisance rule on food and garbage.") },
    { icon: "home", title: "A raccoon in the house", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "Florida's trap check and release rules for a Palm Harbor homeowner who wants to try it first." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Palm Harbor raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Is it illegal to feed raccoons in Palm Harbor?",
      "Pinellas County code Sec. 14-30 calls it a public nuisance to put out food or garbage in a way that attracts raccoons. Florida rule 68A-4.001(3) also bans feeding raccoons in a way that is likely to create a public nuisance.",
    ),
    faq(
      "Could a raccoon get into my Palm Harbor lanai?",
      "Yes. In a 2018 Tampa Bay 28 report, a raccoon got onto a Palm Harbor lanai through a tear in the screen and ran through the house. Keep screens repaired.",
    ),
    faq(
      "Do raccoons in Pinellas County carry rabies?",
      "Some can. The state's 2025 table listed one rabid raccoon in Pinellas, the county's only rabid animal that year. Never handle a raccoon, and report any bite to DOH-Pinellas at 727-824-6932.",
    ),
    faq(
      "Where can a raccoon trapped in Palm Harbor be released?",
      "On the property where it was caught, or on 40 or more contiguous acres in Pinellas County with the landowner's written permission. From Dec 31, 2026, FWC's updated trapping rules apply in Palm Harbor too.",
    ),
    faq(
      "How soon can you come out for a raccoon in Palm Harbor?",
      "Same-day appointments for raccoons are often available in Palm Harbor. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a raccoon call in Palm Harbor]",
    ),
  ],
  ctaHeading: "Raccoon in your Palm Harbor home?",
  ctaText: "Raccoon trouble anywhere in Palm Harbor? Call (727) 594-7705.",
  seo: {
    title: "Raccoon Removal in Palm Harbor, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in Palm Harbor, FL: raccoons out of attics, lanais and garages near Lake Tarpon and US 19, young checked first. Call (727) 594-7705 today.",
  },
  sources: [
    { title: "Pinellas County: Lake Tarpon West Management Area (in the Palm Harbor area of unincorporated Pinellas County just west of Lake Tarpon; supports raccoon, river otter, alligators, frogs, snakes)", url: "https://pinellas.gov/lake-tarpon-west-management-area/" },
    { title: "News, Tampa Bay 28, March 15, 2017: Dog owners on alert after raccoon with deadly virus found at popular Pinellas park (raccoon at John Chesnut Sr. Park in Palm Harbor positive for canine distemper; county release: no reported exposure to visiting dogs)", url: `${TB28}dog-owners-on-alert-after-raccoon-with-deadly-virus-found-at-popular-pinellas-park` },
    { title: "News, Tampa Bay 28, Sept 19, 2018: Big raccoon finds its way onto Palm Harbor woman's vanity (in through a tear in the lanai screen; deputies shooed it out a bedroom window)", url: `${TB28}palm-harbor/big-raccoon-finds-it-s-way-onto-palm-harbor-woman-s-vanity` },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Pinellas row: 1 raccoon; total 1)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
    { title: "Pinellas County: Animal Services enforcement (Sec. 14-30, public nuisance animals: food or garbage that attracts cats, dogs, raccoons, coyotes or other wildlife)", url: "https://pinellas.gov/animal-services-enforcement/" },
    { title: "Pinellas County: Camping information (no feeding wildlife, including birds, squirrels and raccoons)", url: "https://pinellas.gov/camping-information/" },
    { title: "DOH-Pinellas: Rabies safety, April 10, 2026 (report bites or scratches to 727-824-6932)", url: "https://pinellas.floridahealth.gov/2026/04/10/rabies-safety/" },
    { title: "Florida Administrative Code 68A-4.001(3) (food or garbage that attracts coyotes, foxes or raccoons and is likely to create a public nuisance is prohibited)", url: "https://www.law.cornell.edu/regulations/florida/Fla-Admin-Code-Ann-R-68A-4-001" },
    { title: "FWC: FAQs, nuisance wildlife (release on site or 40+ contiguous acres in the same county with written permission)", url: "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/" },
    TRAP_RULES_SOURCE,
  ],
  clientQuestions: ["Typical response time for a raccoon call in Palm Harbor?", "A real Google review from a Palm Harbor raccoon job (TTR-723), and real Palm Harbor raccoon job photos."],
});
