import { countyPage, S } from "./build.ts";
import { faq, p } from "../pt.ts";

export const pasco = countyPage({
  path: "about-us/service-area/wildlife-removal-in-pasco-county-fl",
  name: "Pasco County",
  county: "Pasco",
  order: 5,
  phone: { label: "Call 727-594-7722", href: "tel:+17275947722" },
  summary: "Wildlife removal in Pasco County, from New Port Richey and Trinity to Wesley Chapel, Zephyrhills and Dade City.",
  heroText: "One of the fastest-growing counties in the state, where new neighborhoods meet the Green Swamp and Starkey Preserve. Call the Pasco line any hour.",
  answerHeading: "Who handles wildlife problems in Pasco County?",
  answer:
    "Pro Wildlife Removal removes bats, rats, raccoons, squirrels, snakes, opossums, armadillos, bees and dead animals across Pasco County, from New Port Richey and Holiday on the coast to Wesley Chapel, Zephyrhills and Dade City inland. We find the way in, remove the animal legally, seal it and clean up. Call 727-594-7722.",
  points: ["Pasco line 727-594-7722", "Coast to Dade City", "Open 24/7", "Raccoon rabies alerts in 2026"],
  townsHeading: "Pasco towns we cover",
  townsIntro: "Dade City is the county seat. Most Pasco residents live outside city limits, in communities like Trinity, Land O' Lakes and Wesley Chapel.",
  towns: [
    {
      title: "West Pasco",
      items: [
        { label: "New Port Richey", href: "/about-us/service-area/wildlife-removal-new-port-richey/" },
        { label: "Holiday", href: "/about-us/service-area/wildlife-removal-holiday-fl/" },
        { label: "Hudson", href: "/about-us/service-area/hudson-wildlife-removal/" },
        { label: "Trinity", href: "/about-us/service-area/trinity-wildlife-removal/" },
        { label: "Port Richey" },
      ],
    },
    {
      title: "Central and East Pasco",
      items: [
        { label: "Land O' Lakes", href: "/about-us/service-area/wildlife-removal-land-o-lakes/" },
        { label: "Wesley Chapel" },
        { label: "Zephyrhills" },
        { label: "Dade City", href: "/about-us/service-area/wildlife-removal-dade-city/" },
        { label: "San Antonio" },
      ],
    },
  ],
  localHeading: "What drives wildlife calls in Pasco",
  localIntro: "Pasco grew from about 562,000 people in 2020 to an estimated 674,500 in 2025, and the 2020 Census counted 60% of its land as rural. New homes keep going up next to woods, wetlands and preserves.",
  local: [
    { icon: "critter", title: "Raccoon rabies in 2026", text: p("DOH-Pasco issued a rabies alert in February 2026 after a rabid raccoon near Zephyrhills, then an advisory in July 2026 after two more rabid raccoons on the east side of the county. Keep pets vaccinated and don't feed raccoons.") },
    { icon: "leaf", title: "Preserves next door", text: p("Starkey Wilderness Preserve covers about 18,000 acres of pine flatwoods, cypress domes, marsh, sandhill and scrub east of New Port Richey. Homes along its edge share a fence line with a lot of wildlife.") },
    { icon: "map-pin", title: "The Green Swamp", text: p("Part of the 560,000-acre Green Swamp reaches into Pasco. Homes on the rural east side sit close to big stretches of woods and wetland, and the animals that live there.") },
    { icon: "home", title: "New neighborhoods", text: p("Fresh construction and cleared land move animals around. A new roofline with an unsealed gap is an easy first home for a squirrel or a rat.") },
  ],
  servicesIntro: "All nine services are available across Pasco, coast to country. Tap an animal for the details.",
  faqs: [
    faq(
      "What's the phone number for Pasco County?",
      "The Pasco line is 727-594-7722. You can also call the main line, (727) 594-7705. Both are answered 24/7.",
      "[PLACEHOLDER: ask the client: typical response time in Pasco County]",
    ),
    faq(
      "Is rabies a concern in Pasco County?",
      "There have been recent cases. DOH-Pasco issued a raccoon rabies alert near Zephyrhills in February 2026 and an advisory in July 2026 after two rabid raccoons on the east side of the county. Report any bite or scratch to the health department, and leave raccoons to professionals.",
    ),
    faq(
      "Are there bears in Pasco County?",
      "FWC includes Pasco in its Big Bend bear management area. Bears aren't something we remove. If you see one, give it space and contact FWC.",
    ),
    faq(
      "Can I release a trapped animal at Starkey Preserve?",
      "No. Florida only allows a trapped nuisance animal to be released on the property where it was caught, or on 40 or more contiguous acres in the same county with the landowner's written permission. Public land needs the land manager's written permission.",
    ),
  ],
  ctaHeading: "Wildlife problem in Pasco?",
  ctaText: "Call the Pasco line, 727-594-7722, day or night.",
  seo: {
    title: "Wildlife Removal in Pasco County, FL | Call 727-594-7722 | Pro Wildlife Removal",
    description:
      "Wildlife removal in Pasco County: New Port Richey, Trinity, Land O' Lakes, Wesley Chapel, Zephyrhills and Dade City. Raccoons, rats, bats, snakes and more. Call 24/7: 727-594-7722.",
  },
  sources: [
    S.censusPop,
    S.censusUR,
    S.edr,
    S.edrUninc,
    S.seats,
    { title: "Florida DOH: Pasco rabies alert, Feb 2026 (rabid raccoon, Zephyrhills area, Jan 30, 2026)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/02/alert-pascoe-02-05-26.pdf" },
    { title: "DOH-Pasco: Rabies advisory, July 30, 2026 (two rabid raccoons, east side of the county)", url: "https://pasco.floridahealth.gov/2026/07/30/doh-pasco-issues-rabies-advisory/" },
    { title: "FWC: Big Bend bear management unit (includes Pasco)", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/bmu/big-bend/" },
    { title: "SWFWMD: Green Swamp (about 560,000 acres; parts of Pasco, Polk, Lake, Sumter, Hernando)", url: "https://www.swfwmd.state.fl.us/watersheds/green-swamp" },
    { title: "SWFWMD: Starkey Wilderness Preserve (about 18,000 acres; habitats)", url: "https://www.swfwmd.state.fl.us/recreation/starkey-wilderness-preserve" },
    S.trapping,
  ],
  clientQuestions: ["Typical response time in Pasco County?", "Real job photos and reviews from Pasco customers."],
});
