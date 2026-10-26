import { countyPage, S } from "./build.ts";
import { faq, p } from "../pt.ts";

export const citrus = countyPage({
  path: "about-us/service-area/wildlife-removal-in-citrus-county-fl",
  name: "Citrus County",
  county: "Citrus",
  order: 2,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  summary: "Wildlife removal in Citrus County: Inverness, Crystal River, Homosassa, Lecanto, Floral City and Pine Ridge.",
  heroText: "Springs, sandhills and state forest, with the lowest share of urban residents of the counties we serve. Call (727) 594-7705.",
  answerHeading: "Who handles wildlife removal in Citrus County?",
  answer:
    "Pro Wildlife Removal removes raccoons, rats, bats, squirrels, snakes, opossums, armadillos, bees and dead animals across Citrus County, from Crystal River and Homosassa to Inverness, Lecanto and Floral City. We find the way in, remove the animal legally and seal the opening. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Crystal River to Inverness", "Lowest urban share we serve"],
  townsHeading: "Citrus towns we cover",
  townsIntro: "Inverness is the county seat. Crystal River is the only other city, and about 93% of residents live outside city limits.",
  towns: [
    {
      title: "Citrus County",
      href: "/service-areas/citrus-county/",
      items: [
        { label: "Inverness" },
        { label: "Crystal River" },
        { label: "Homosassa" },
        { label: "Lecanto", href: "/service-areas/citrus-county/lecanto/" },
        { label: "Pine Ridge", href: "/service-areas/citrus-county/pine-ridge/" },
        { label: "Floral City" },
        { label: "Beverly Hills" },
      ],
    },
  ],
  localHeading: "Living with wildlife in Citrus County",
  localIntro: "The 2020 Census counted 75% of Citrus residents as urban, the lowest share of any county we serve, and about three-quarters of the land as rural. Homes here sit closer to wild land than almost anywhere else in our area.",
  local: [
    { icon: "leaf", title: "Sandhills and state forest", text: p("FWC's Citrus tract of the Withlacoochee State Forest covers nearly 50,000 acres west of Inverness, with high-quality sandhills, fox squirrels, gopher tortoises, indigo snakes and deer.") },
    { icon: "map-pin", title: "Springs and rivers", text: p("Crystal River, Kings Bay and Homosassa are first-magnitude springs, and several serve as warm-water refuges for manatees in winter. Waterfront homes share the shoreline with plenty of wildlife.") },
    { icon: "critter", title: "Rabid stray cats", text: p("Citrus rabies alerts have mostly involved cats: a stray kitten in Floral City in July 2026 and a cat in Inverness in June 2025. The Department of Health also counted a rabid bat in the county in 2024.") },
    { icon: "leaf", title: "Scrub-jays at Potts Preserve", text: p("The water district's Potts Preserve in northeastern Citrus has wetlands that play a role in both the Tsala Apopka Chain of Lakes and the Withlacoochee River systems, and holds a small population of threatened Florida scrub-jays.") },
  ],
  contactsHeading: "Citrus numbers: CCSO, DOH-Citrus and FWC",
  contactsIntro: "In Citrus, animal control is the Sheriff's Office and the shelter is the county. Here's who handles what, from their own pages.",
  contacts: [
    { icon: "users", title: "CCSO Animal Control", text: p("352-249-2790 (Sheriff's dispatch) for bites, strays and other domestic animal calls. Its page says nuisance wildlife must be referred to a nuisance trapper.") },
    { icon: "phone", title: "Animal bites: DOH-Citrus", text: p("352-527-0068, the number DOH-Citrus gives for reporting bites in its rabies alerts.") },
    { icon: "map-pin", title: "Bears and other state matters: FWC", text: p("Citrus is in FWC's North Central Region: 386-758-0525 in Lake City for bears. Alligators: 866-FWC-GATOR.") },
  ],
  servicesIntro: "Every service is available in Citrus County. Choose the animal to see the signs and how we handle it.",
  faqs: [
    faq(
      "What's the Citrus County phone number?",
      "Call (727) 594-7705. Same-day appointments are often available in Citrus County.",
    ),
    faq(
      "Why does Citrus County see so much wildlife around homes?",
      "Because so much of it is still wild. About three-quarters of the county's land is rural, with state forest, sandhills and springs close to neighborhoods.",
    ),
    faq(
      "I found an indigo snake. What do I do?",
      "Leave it alone. FWC lists indigo snakes in the Citrus tract of the Withlacoochee State Forest, and the eastern indigo snake is a federally threatened species. It's non-venomous and shows no aggression. See [snake removal](/services/snake-removal/).",
    ),
    faq(
      "Has rabies been found in Citrus County?",
      "Yes, mostly in cats. The Department of Health issued alerts after a rabid stray kitten in Floral City (July 2026) and a rabid cat in Inverness (June 2025), and counted a rabid bat in 2024. Report bites and keep pets vaccinated.",
    ),
    faq(
      "Will Citrus County Animal Control remove a raccoon or opossum?",
      "No. The Sheriff's Office says its officers don't respond to wildlife calls unless the animal is sick or injured and no FWC-approved rescue group can respond, and that nuisance wildlife must be referred to a nuisance trapper.",
    ),
    faq(
      "Which FWC office covers Citrus County?",
      "The North Central Region office in Lake City, 386-758-0525. Nuisance alligators go to the statewide hotline, 866-FWC-GATOR.",
    ),
  ],
  ctaHeading: "Wildlife problem in Citrus County?",
  ctaText: "Anywhere in Citrus County, call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Citrus County, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Citrus County: Inverness, Crystal River, Homosassa, Lecanto and Floral City. Raccoons, snakes, bats, rats and more: (727) 594-7705.",
  },
  sources: [
    S.censusPop,
    S.censusUR,
    S.edr,
    S.edrUninc,
    S.seats,
    S.doh2024,
    { title: "Florida DOH: Citrus alert, July 23, 2026 (rabid stray kitten, Floral City)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/07/rabies-alert-citrus-county-7-23-2026.pdf" },
    { title: "Florida DOH: Citrus alert, June 25, 2025 (rabid cat, Inverness)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/alert-citrus-6-25-2025.pdf" },
    { title: "FWC: Citrus WMA (nearly 50,000 acres west of Inverness; Withlacoochee State Forest; sandhills, fox squirrels, gopher tortoises, indigo snakes, deer)", url: "https://myfwc.com/recreation/cooperative/citrus/" },
    { title: "SWFWMD: Springs Coast overview and Learn about west-central Florida's springs (Crystal River/Kings Bay and Homosassa; warm-water refuges for manatees)", url: "https://www.swfwmd.state.fl.us/projects/springs/learn-about-west-central-floridas-springs" },
    { title: "FWC: Big Bend bear management unit", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/bmu/big-bend/" },
    { title: "FWC: Eastern indigo snake (non-venomous, no aggression; federally threatened)", url: "https://myfwc.com/wildlifehabitats/profiles/reptiles/snakes/eastern-indigo-snake/" },
    { title: "Citrus County Sheriff's Office: Animal Control (352-249-2790; domestic animals and livestock only; nuisance wildlife referred to a nuisance trapper)", url: "https://www.sheriffcitrus.org/programs___services/animal_control.php" },
    { title: "Citrus County: Animal Services shelter ((352) 746-8400)", url: "https://www.citrusbocc.com/departments/community_services/animal_services/" },
    { title: "DOH-Citrus (352-527-0068 for reporting; same number in the July 2026 rabies alert)", url: "https://citrus.floridahealth.gov/" },
    { title: "SWFWMD: Potts Preserve (Tsala Apopka and Withlacoochee systems; threatened Florida scrub-jays)", url: "https://www.swfwmd.state.fl.us/recreation/potts-preserve" },
    { title: "FWC: Regional offices (counties per region; Southwest 863-648-3200; North Central 386-758-0525; Northeast 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
    { title: "FWC: Living with bears (report human-bear conflicts to your nearest regional office)", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/living/" },
    { title: "FWC: Statewide Nuisance Alligator Program (866-FWC-GATOR; 4 feet or longer and a threat)", url: "https://myfwc.com/wildlifehabitats/wildlife/alligator/snap/" },
  ],
  clientQuestions: ["Real job photos and reviews from Citrus customers."],
});
