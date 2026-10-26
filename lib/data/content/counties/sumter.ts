import { countyPage, S } from "./build.ts";
import { faq, p } from "../pt.ts";

export const sumter = countyPage({
  path: "about-us/service-area/wildlife-removal-sumter-county-fl",
  name: "Sumter County",
  county: "Sumter",
  order: 7,
  phone: { label: "Call 863-431-9244", href: "tel:+18634319244" },
  summary: "Wildlife removal in Sumter County: The Villages, Wildwood, Bushnell, Webster and the farm country around them.",
  heroText: "Home to a large part of The Villages and a lot of open country around it. Call the Sumter line, 863-431-9244.",
  answerHeading: "Who handles wildlife removal in Sumter County and The Villages?",
  answer:
    "Pro Wildlife Removal removes bats, rats, raccoons, squirrels, snakes, opossums, armadillos, bees and dead animals across Sumter County, including The Villages, Wildwood, Bushnell and Webster. We inspect, remove the animal the way Florida law allows, seal the entry and clean up. Call 863-431-9244.",
  points: ["Sumter line 863-431-9244", "The Villages and Wildwood", "89% rural land"],
  townsHeading: "Sumter towns we cover",
  townsIntro: "Bushnell is the county seat and Wildwood the largest city. The Census places The Villages in Sumter and Marion counties.",
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
    { icon: "home", title: "The Villages", text: p("The Census places The Villages in both Sumter and Marion counties. With so much open land around it, wildlife is never far from the newest streets.") },
    { icon: "leaf", title: "Green Swamp and Richloam", text: p("FWC's Green Swamp area spans over 50,000 acres across Lake, Polk and Sumter, and lists armadillos, wild hogs and alligators. The Richloam tract, over 58,000 acres, lists gray squirrels and gopher tortoises.") },
    { icon: "critter", title: "Rabid cats on record", text: p("The Department of Health has issued Sumter rabies alerts after rabid cats near Webster (June 2026) and Sumterville (June 2024). Feeding outdoor cats also feeds raccoons.") },
    { icon: "search", title: "Ocala bear range", text: p("FWC places Sumter in its Central bear area, around the Ocala population. Secure trash and pet food, and contact FWC about bears.") },
    { icon: "leaf", title: "Half Moon WMA", text: p("FWC's Half Moon WMA sits east of Inverness in Sumter County, where wading birds gather along marsh and pond edges and Florida scrub-jays can be seen.") },
  ],
  contactsIntro: "Sumter's own website is clear about who does what. These numbers come from the county's and the agencies' pages.",
  contacts: [
    { icon: "users", title: "Sumter County Animal Services", text: p("352-689-4400: option 3 for animal control complaints, option 9 after hours. The county says Animal Services generally deals only with domestic animals.") },
    { icon: "phone", title: "Animal bites: DOH-Sumter", text: p("352-569-3102, the number DOH-Sumter gave for reporting bites in its June 2026 rabies alert.") },
    { icon: "map-pin", title: "Bears and alligators: FWC", text: p("Sumter is in FWC's Northeast Region: 352-732-1225 in Ocala. Nuisance alligators: 866-FWC-GATOR.") },
  ],
  servicesIntro: "All nine services are available in Sumter County and The Villages. Each card opens the full page for that animal.",
  faqs: [
    faq(
      "Do you serve The Villages?",
      "Yes. The Villages sits largely in Sumter County, and we cover it along with Wildwood, Bushnell and the rest of the county. The Villages also has [its own page](/about-us/service-area/wildlife-removal-the-villages/).",
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
    faq(
      "Will Sumter County Animal Services remove wildlife?",
      "Generally not. The county says Animal Services deals only with domestic animals, gives residents referrals to private trappers for nuisance wildlife, and lists raccoons, opossums, foxes, coyotes, skunks and snakes as examples.",
    ),
    faq(
      "Which FWC office covers Sumter County?",
      "FWC's Northeast Region office in Ocala, 352-732-1225, which the county also lists for nuisance wildlife questions.",
    ),
  ],
  ctaHeading: "Wildlife problem in Sumter County?",
  ctaText: "Anywhere in Sumter County, call 863-431-9244.",
  seo: {
    title: "Wildlife Removal in Sumter County, FL & The Villages | Pro Wildlife Removal",
    description:
      "Wildlife removal in Sumter County and The Villages: Wildwood, Bushnell, Webster and more. Raccoons, armadillos, snakes, bats and rats. Call 863-431-9244.",
  },
  sources: [
    S.censusPop,
    S.censusUR,
    S.edr,
    S.edrUninc,
    S.seats,
    { title: "U.S. Census Bureau: 2020 place codes (The Villages CDP in Marion and Sumter counties)", url: "https://www2.census.gov/geo/docs/reference/codes2020/place/st12_fl_place2020.txt" },
    { title: "Florida DOH: Sumter alert, June 26, 2026 (rabid cat, Webster area)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/06/rabies-alert-sumter-county-6-26-2026.pdf" },
    { title: "Florida DOH: Sumter alert, June 19, 2024 (rabid cat, Sumterville area)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/alert-sumter-6-19-2024.pdf" },
    { title: "FWC: Green Swamp WMA (over 50,000 acres in Lake, Polk, Sumter; armadillos, wild hogs, deer, alligators)", url: "https://myfwc.com/recreation/cooperative/green-swamp/" },
    { title: "FWC: Richloam WMA (over 58,000 acres; wild hogs, gopher tortoises, gray squirrels)", url: "https://myfwc.com/recreation/cooperative/richloam/" },
    { title: "FWC: Central bear management unit", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/bmu/central/" },
    { title: "FWC: Living with Armadillos", url: "https://myfwc.com/media/2hshpfdc/living-with-armadillos.pdf" },
    { title: "Sumter County: Animal Services contact (352-689-4400, option 3; option 9 after hours)", url: "https://www.sumtercountyfl.gov/1183/Contact-UsHours" },
    { title: "Sumter County: Nuisance wildlife (Animal Services deals only with domestic animals; FWC Ocala 352-732-1225; referrals to private trappers)", url: "https://www.sumtercountyfl.gov/1180/Nuisance-Wildlife" },
    { title: "DOH-Sumter: Rabies alert, June 26, 2026 (report bites at 352-569-3102)", url: "https://sumter.floridahealth.gov/2026/06/26/doh-sumter-issues-rabies-alert-2/" },
    { title: "FWC: Half Moon WMA (Sumter County; wading birds; Florida scrub-jays)", url: "https://myfwc.com/recreation/lead/half-moon/" },
    { title: "FWC: Regional offices (counties per region; Southwest 863-648-3200; North Central 386-758-0525; Northeast 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
    { title: "FWC: Living with bears (report human-bear conflicts to your nearest regional office)", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/living/" },
    { title: "FWC: Statewide Nuisance Alligator Program (866-FWC-GATOR; 4 feet or longer and a threat)", url: "https://myfwc.com/wildlifehabitats/wildlife/alligator/snap/" },
  ],
  clientQuestions: ["Typical response time in Sumter County and The Villages?", "Real job photos and reviews from Sumter and Villages customers."],
});
