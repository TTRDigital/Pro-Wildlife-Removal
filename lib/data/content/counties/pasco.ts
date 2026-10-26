import { countyPage, S } from "./build.ts";
import { faq, p } from "../pt.ts";

export const pasco = countyPage({
  path: "about-us/service-area/wildlife-removal-in-pasco-county-fl",
  name: "Pasco County",
  county: "Pasco",
  order: 5,
  phone: { label: "Call 727-594-7722", href: "tel:+17275947722" },
  summary: "Wildlife removal in Pasco County, from New Port Richey and Trinity to Wesley Chapel, Zephyrhills and Dade City.",
  heroText: "One of the fastest-growing counties in the state, where new neighborhoods meet the Green Swamp and Starkey Preserve. Call the Pasco line, 727-594-7722.",
  answerHeading: "Who handles wildlife problems in Pasco County?",
  answer:
    "Pro Wildlife Removal removes bats, rats, raccoons, squirrels, snakes, opossums, armadillos, bees and dead animals across Pasco County, from New Port Richey and Holiday on the coast to Wesley Chapel, Zephyrhills and Dade City inland. We find the way in, remove the animal legally, seal it and clean up. Call 727-594-7722.",
  points: ["Pasco line 727-594-7722", "Coast to Dade City", "Raccoon rabies alerts in 2026"],
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
    { icon: "leaf", title: "Wood stork colonies", text: p("FWC's Little Gator Creek Wildlife and Environmental Area protects wood stork and wading bird colonies on about 566 acres in Pasco, and opens to visitors only from September through January.") },
  ],
  contactsIntro: "Some calls belong to a public agency instead of us. Here's who handles what in Pasco, from each agency's own page.",
  contacts: [
    { icon: "users", title: "Pasco County Animal Services", text: p("813-929-1212. After-hours emergencies (5 pm to 8 am): (727) 847-8102, option 7, for loose biting animals and badly injured stray pets.") },
    { icon: "phone", title: "Animal bites: DOH-Pasco", text: p("352-521-1450, option 4, to report a bite or scratch, as DOH-Pasco asked in its July 2026 rabies advisory.") },
    { icon: "map-pin", title: "Bears and alligators: FWC", text: p("For a bear problem, FWC's Southwest Region in Lakeland: 863-648-3200. For a nuisance alligator, the statewide hotline: 866-392-4286 (866-FWC-GATOR).") },
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
    faq(
      "Does Pasco Animal Services handle wildlife?",
      "Its emergency service covers domestic stray animals, such as loose dogs that have bitten someone or badly injured strays. For animals living in or under your home, call a wildlife removal company.",
    ),
    faq(
      "Who do I call about an alligator in Pasco?",
      "FWC's Nuisance Alligator Hotline: 866-FWC-GATOR. Generally an alligator counts as a nuisance at 4 feet or longer when it threatens people, pets or property.",
    ),
  ],
  ctaHeading: "Wildlife problem in Pasco?",
  ctaText: "Anywhere in Pasco, call 727-594-7722.",
  seo: {
    title: "Wildlife Removal in Pasco County, FL | Call 727-594-7722 | Pro Wildlife Removal",
    description:
      "Wildlife removal in Pasco County: New Port Richey, Trinity, Land O' Lakes, Wesley Chapel, Zephyrhills and Dade City. Raccoons, rats, bats, snakes and more. Call 727-594-7722.",
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
    { title: "Pasco County: Animal Services (813-929-1212; after hours (727) 847-8102 option 7; emergency care for domestic strays)", url: "https://www.pascocountyfl.gov/services/animal_services/index.php" },
    { title: "FWC: Little Gator Creek WEA (about 566 acres; wood stork colonies; open Sept 1 to Jan 31)", url: "https://myfwc.com/news/all-news/gator-creek/" },
    { title: "FWC: Regional offices (counties per region; Southwest 863-648-3200; North Central 386-758-0525; Northeast 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
    { title: "FWC: Living with bears (report human-bear conflicts to your nearest regional office)", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/living/" },
    { title: "FWC: Statewide Nuisance Alligator Program (866-FWC-GATOR; 4 feet or longer and a threat)", url: "https://myfwc.com/wildlifehabitats/wildlife/alligator/snap/" },
  ],
  clientQuestions: ["Typical response time in Pasco County?", "Real job photos and reviews from Pasco customers."],
});
