import { countyPage, S } from "./build.ts";
import { faq, p } from "../pt.ts";

export const sumter = countyPage({
  path: "about-us/service-area/wildlife-removal-sumter-county-fl",
  name: "Sumter County",
  county: "Sumter",
  order: 7,
  phone: { label: "Call 863-431-9244", href: "tel:+18634319244" },
  summary: "Wildlife removal in Sumter County: The Villages, Wildwood, Bushnell, Webster and the farm country around them.",
  heroText: "Home to most of The Villages and a lot of open country around it. Call the Sumter line, day or night.",
  answerHeading: "Who handles wildlife removal in Sumter County and The Villages?",
  answer:
    "Pro Wildlife Removal removes bats, rats, raccoons, squirrels, snakes, opossums, armadillos, bees and dead animals across Sumter County, including The Villages, Wildwood, Bushnell and Webster. We inspect, remove the animal the way Florida law allows, seal the entry and clean up. Call 863-431-9244, 24/7.",
  points: ["Sumter line 863-431-9244", "The Villages and Wildwood", "89% rural land", "Open 24/7"],
  townsHeading: "Sumter towns we cover",
  townsIntro: "Bushnell is the county seat and Wildwood the largest city. Most of The Villages lies in Sumter County.",
  towns: [
    {
      title: "Sumter County",
      href: "/about-us/service-area/wildlife-removal-sumter-county-fl/",
      items: [
        { label: "The Villages", href: "/about-us/service-area/wildlife-removal-the-villages/" },
        { label: "Wildwood" },
        { label: "Bushnell" },
        { label: "Webster" },
        { label: "Sumterville" },
        { label: "Lake Panasoffkee" },
      ],
    },
  ],
  localHeading: "What drives wildlife calls in Sumter",
  localIntro: "Sumter grew from about 130,000 people in 2020 to an estimated 158,000 in 2025, yet the 2020 Census still counted 89% of its land as rural. Growth is pushing new homes into old pasture and woods.",
  local: [
    { icon: "home", title: "The Villages", text: p("In the 2020 Census, 88% of The Villages' residents lived in the Sumter County part. With so much open land around it, wildlife is never far from the newest streets.") },
    { icon: "leaf", title: "Green Swamp and Richloam", text: p("FWC's Green Swamp area spans over 50,000 acres across Lake, Polk and Sumter, and lists armadillos, wild hogs and alligators. The Richloam tract, over 58,000 acres, lists gray squirrels and gopher tortoises.") },
    { icon: "critter", title: "Rabid cats on record", text: p("The Department of Health has issued Sumter rabies alerts after rabid cats near Webster (June 2026) and Sumterville (June 2024). Feeding outdoor cats also feeds raccoons.") },
    { icon: "search", title: "Ocala bear range", text: p("FWC places Sumter in its Central bear area, around the Ocala population. Secure trash and pet food, and contact FWC about bears.") },
  ],
  servicesIntro: "All nine services are available in Sumter County and The Villages. Each card opens the full page for that animal.",
  faqs: [
    faq(
      "Do you serve The Villages?",
      "Yes. Most of The Villages is in Sumter County, and we cover it along with Wildwood, Bushnell and the rest of the county. The Villages also has [its own page](/about-us/service-area/wildlife-removal-the-villages/).",
    ),
    faq(
      "What's the phone number for Sumter County?",
      "Call the Sumter line, 863-431-9244, or the main line, (727) 594-7705. Both are answered 24/7.",
      "[PLACEHOLDER: ask the client: typical response time in Sumter County and The Villages]",
    ),
    faq(
      "Has rabies been found in Sumter County?",
      "Yes, in cats. The Department of Health issued rabies alerts after a rabid cat near Webster in June 2026 and one near Sumterville in June 2024. Report bites, and keep pets vaccinated.",
    ),
    faq(
      "There's an armadillo digging up my yard in The Villages. What can I do?",
      "Water less and in the morning, pick up fallen fruit, and call us to trap it at the burrow. Florida's rules on where a trapped armadillo can go are on our [armadillo removal](/services/armadillo-removal/) page.",
    ),
  ],
  ctaHeading: "Wildlife problem in Sumter County?",
  ctaText: "Call the Sumter line, 863-431-9244, any hour.",
  seo: {
    title: "Wildlife Removal in Sumter County, FL & The Villages | Pro Wildlife Removal",
    description:
      "Wildlife removal in Sumter County and The Villages: Wildwood, Bushnell, Webster and more. Raccoons, armadillos, snakes, bats and rats. Call 24/7: 863-431-9244.",
  },
  sources: [
    S.censusPop,
    S.censusUR,
    S.edr,
    S.edrUninc,
    S.seats,
    { title: "U.S. Census Bureau: 2020 place codes (The Villages CDP in Marion and Sumter) and 2020 redistricting file (88% of The Villages CDP residents in Sumter)", url: "https://www2.census.gov/geo/docs/reference/codes2020/place/st12_fl_place2020.txt" },
    { title: "Florida DOH: Sumter alert, June 26, 2026 (rabid cat, Webster area)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/06/rabies-alert-sumter-county-6-26-2026.pdf" },
    { title: "Florida DOH: Sumter alert, June 19, 2024 (rabid cat, Sumterville area)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/alert-sumter-6-19-2024.pdf" },
    { title: "FWC: Green Swamp WMA (over 50,000 acres in Lake, Polk, Sumter; armadillos, wild hogs, deer, alligators)", url: "https://myfwc.com/recreation/cooperative/green-swamp/" },
    { title: "FWC: Richloam WMA (over 58,000 acres; wild hogs, gopher tortoises, gray squirrels)", url: "https://myfwc.com/recreation/cooperative/richloam/" },
    { title: "FWC: Central bear management unit", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/bmu/central/" },
    { title: "FWC: Living with Armadillos", url: "https://myfwc.com/media/2hshpfdc/living-with-armadillos.pdf" },
  ],
  clientQuestions: ["Typical response time in Sumter County and The Villages?", "Real job photos and reviews from Sumter and Villages customers."],
});
