import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Raccoon removal in Safety Harbor (TTR-738, Nia, for Rhea's Pinellas set).
 * HELD by Ben (Oct 26): under 6 raccoon facts, so it stays out of service-places.ts.
 * Cards: a 1993 Safety Harbor raccoon case (St. Petersburg Times, named as news)
 * and the DOH-Pinellas 2025 table and surveillance report.
 */
const TIMES = "https://www.tampabay.com/archive/1993/11/18/safety-harbor-man-admits-he-killed-raccoon/";
const SANITATION = "https://www.cityofsafetyharbor.com/108/Sanitation-Division";
const PHILIPPE = "https://pinellas.gov/parks/philippe-park/";
const PARKRULES = "https://pinellas.gov/park-rules/";
const DOH2025 = "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf";
const SAFETY = "https://pinellas.floridahealth.gov/2026/04/10/rabies-safety/";
const EPI = "https://pinellas.floridahealth.gov/wp-content/uploads/sites/54/2026/01/epi-watch-september-2025.pdf";

export const raccoonRemovalSafetyHarbor = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "safety-harbor-fl",
  placeName: "Safety Harbor",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-safety-harbor",
  county: "Pinellas",
  order: 80,
  heroText: "A raccoon in a Safety Harbor attic, under the porch or into the garbage barrel every night? We get it out, look for young first and seal the opening it used. Call (844) 264-6254.",
  answerHeading: "Who removes raccoons from Safety Harbor homes?",
  answer:
    "A private wildlife company. The City of Safety Harbor handles dead animals on its rights-of-way, not live raccoons in homes. Pro Wildlife Removal takes raccoons out of Safety Harbor attics, crawl spaces and sheds, checks for young first and then seals the way in. Call (844) 264-6254.",
  points: ["Call (844) 264-6254", "Barrel lids must close", "No releases in county parks"],
  localHeading: "What to know about raccoons in Safety Harbor",
  localIntro: "Safety Harbor has a raccoon story that ended up in court, and rules from the city and county that bear on raccoons. Here are the local facts.",
  local: [
    { icon: "critter", title: "A neighborhood's raccoon, 1993", text: p("In 1993, the St. Petersburg Times (now the Tampa Bay Times) reported on Rocky, a raccoon that neighbors on Fifth Avenue N in Safety Harbor had named and fed for about two years after it wandered in from the wild.") },
    { icon: "home", title: "Into the garbage", text: p("Rocky got into somebody's garbage during a party, the Times reported, and a neighbor said he was tired of picking up garbage every day. He also told the judge raccoons were everywhere in his neighborhood.") },
    { icon: "search", title: "An animal cruelty case", text: p("The neighbor who beat Rocky to death pleaded guilty to animal cruelty in November 1993, the Times reported, and was sentenced to a year of house arrest, a year of probation and a fine of 200 dollars.") },
    { icon: "map-pin", title: "Pinellas's one rabid raccoon", text: p("The state's 2025 table listed one rabid raccoon for Pinellas County, and no other rabid animals. DOH-Pinellas's September 2025 surveillance report counted one animal rabies case for the year through August.") },
  ],
  contactsIntro: "Who handles what when a raccoon is the problem in Safety Harbor, from the city's, county's and DOH's own pages.",
  contacts: [
    { icon: "home", title: "Dead animal on a city street", text: p("Safety Harbor Public Works, 727-724-1550.") },
    { icon: "users", title: "Stray animals", text: p("Pinellas County Animal Services, 727-582-2600.") },
    { icon: "phone", title: "A raccoon in your home", text: p("A private wildlife company. Call us at (844) 264-6254.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "What Florida allows if you trap a raccoon yourself, and where it can legally go." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Safety Harbor raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Does the City of Safety Harbor remove raccoons?",
      "Not live ones in homes. The city's FAQ lists Public Works, 727-724-1550, for dead animals on city rights-of-way. For a raccoon in your attic or under your house, call a private wildlife company.",
    ),
    faq(
      "Is it OK to feed the raccoons in my Safety Harbor neighborhood?",
      "No. DOH-Pinellas asks residents not to feed wild animals, and in a 1993 Safety Harbor case, a raccoon that neighbors had named and fed got into garbage during a party and was beaten to death by a neighbor.",
    ),
    faq(
      "Can I release a trapped raccoon at Philippe Park?",
      "No. Pinellas County park rules bar releasing or transplanting any animals in county parks. FWC allows a release only on your own land, or on 40-plus acres in Pinellas with the owner's written permission.",
    ),
    faq(
      "Have raccoons in Pinellas had rabies recently?",
      "One did. The state's 2025 table listed one rabid raccoon for Pinellas County, its only rabid animal that year. Keep pets vaccinated and don't handle raccoons.",
    ),
    faq(
      "How soon can you come out for a raccoon in Safety Harbor?",
      "Same-day appointments for raccoons are often available in Safety Harbor. Call (844) 264-6254.",
    ),
  ],
  ctaHeading: "Raccoon in your Safety Harbor home?",
  ctaText: "Safety Harbor raccoon calls go to (844) 264-6254.",
  seo: {
    title: "Raccoon Removal in Safety Harbor, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in Safety Harbor, FL: raccoons out of attics, crawl spaces and sheds, young checked first, entry sealed, plus city and county rules.",
  },
  sources: [
    { title: "St. Petersburg Times, Nov. 18, 1993 (Tampa Bay Times archive): Safety Harbor man admits he killed raccoon (Rocky; Fifth Avenue N neighborhood; neighbors named and fed it for two years; got into somebody's garbage; 'tired of picking up garbage every day'; raccoons everywhere in his neighborhood; guilty plea to animal cruelty; year of house arrest, year of probation, $200 fine)", url: TIMES },
    { title: "City of Safety Harbor: Sanitation Division (once a week; 90-gallon barrel; lid must close; 727-724-1550)", url: SANITATION },
    { title: "City of Safety Harbor: FAQ (dead animals on city rights-of-way: Public Works, 724-1550)", url: "https://www.cityofsafetyharbor.com/Faq.aspx?QID=84" },
    { title: "Pinellas County: Philippe Park (92 acres; Safety Harbor)", url: PHILIPPE },
    { title: "Pinellas County: Park rules, Code Ch. 90 (no feeding, disturbing or removing wildlife; no release or transplant of any animals)", url: PARKRULES },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Pinellas: 1 raccoon, total 1)", url: DOH2025 },
    { title: "DOH-Pinellas: Epi Watch, September 2025 (animal rabies, year to date through Aug. 31, 2025: 1)", url: EPI },
    { title: "DOH-Pinellas: Rabies safety, April 10, 2026 (do not handle or feed wild animals or attract them with outdoor pet food or open garbage cans; prevent wildlife, including bats, from entering living quarters; Animal Services 727-582-2600)", url: SAFETY },
    { title: "FWC: Relocating nuisance wildlife (own property or 40+ contiguous acres in the county with written permission)", url: "https://myfwc.com/conservation/you-conserve/wildlife/relocate/" },
  ],
  clientQuestions: ["A real Google review from a Safety Harbor raccoon job (TTR-723), and real Safety Harbor raccoon job photos."],
});
