import { countyPage, S } from "./build.ts";
import { faq, p } from "../pt.ts";

export const citrus = countyPage({
  path: "about-us/service-area/wildlife-removal-in-citrus-county-fl",
  name: "Citrus County",
  county: "Citrus",
  order: 2,
  phone: { label: "Call 352-618-2110", href: "tel:+13526182110" },
  summary: "Wildlife removal in Citrus County: Inverness, Crystal River, Homosassa, Lecanto, Floral City and Pine Ridge.",
  heroText: "Springs, sandhills and state forest, and the most rural county we serve. Call the Citrus line any time, day or night.",
  answerHeading: "Who handles wildlife removal in Citrus County?",
  answer:
    "Pro Wildlife Removal removes raccoons, rats, bats, squirrels, snakes, opossums, armadillos, bees and dead animals across Citrus County, from Crystal River and Homosassa to Inverness, Lecanto and Floral City. We find the way in, remove the animal legally, seal the opening and clean up. Call 352-618-2110, any hour.",
  points: ["Citrus line 352-618-2110", "Crystal River to Inverness", "Most rural county we serve", "Open 24/7"],
  townsHeading: "Citrus towns we cover",
  townsIntro: "Inverness is the county seat. Crystal River is the only other city, and about 93% of residents live outside city limits.",
  towns: [
    {
      title: "Citrus County",
      href: "/about-us/service-area/wildlife-removal-in-citrus-county-fl/",
      items: [
        { label: "Inverness" },
        { label: "Crystal River" },
        { label: "Homosassa" },
        { label: "Lecanto", href: "/about-us/service-area/wildlife-removal-in-lecanto-fl/" },
        { label: "Pine Ridge", href: "/about-us/service-area/wildlife-removal-pine-ridge-fl/" },
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
    { icon: "search", title: "Bear country, a little", text: p("Citrus is in FWC's Big Bend bear area, home to a remnant group near Chassahowitzka. If a bear visits, secure the trash and contact FWC.") },
  ],
  servicesIntro: "Every service is available in Citrus County. Choose the animal to see the signs and how we handle it.",
  faqs: [
    faq(
      "What's the Citrus County phone number?",
      "Call the Citrus line, 352-618-2110, or the main line, (727) 594-7705. Both are answered 24/7.",
      "[PLACEHOLDER: ask the client: typical response time in Citrus County]",
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
  ],
  ctaHeading: "Wildlife problem in Citrus County?",
  ctaText: "Call the Citrus line, 352-618-2110, any hour.",
  seo: {
    title: "Wildlife Removal in Citrus County, FL | Call 352-618-2110 | Pro Wildlife Removal",
    description:
      "Wildlife removal in Citrus County: Inverness, Crystal River, Homosassa, Lecanto, Floral City and Pine Ridge. Raccoons, snakes, bats, rats and more. Call 24/7: 352-618-2110.",
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
  ],
  clientQuestions: ["Typical response time in Citrus County?", "Real job photos and reviews from Citrus customers."],
});
