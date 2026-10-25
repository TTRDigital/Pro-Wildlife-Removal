import { countyPage, S } from "./build.ts";
import { faq, p } from "../pt.ts";

export const hernando = countyPage({
  path: "about-us/service-area/wildlife-removal-in-hernando-county-fl",
  name: "Hernando County",
  county: "Hernando",
  order: 3,
  phone: { label: "Call 352-612-3336", href: "tel:+13526123336" },
  summary: "Wildlife removal in Hernando County: Spring Hill, Brooksville, Weeki Wachee and the rural areas around them.",
  heroText: "Springs, forest and long rural roads, with most people living in Spring Hill and the neighborhoods around it. Call the Hernando line any time.",
  answerHeading: "Who removes wildlife in Hernando County?",
  answer:
    "Pro Wildlife Removal handles raccoons, rats, bats, squirrels, snakes, opossums, armadillos, bees and dead animals in Hernando County, from Spring Hill and Weeki Wachee to Brooksville and the rural east. We find how the animal gets in, remove it legally, seal the gap and clean up. Call 352-612-3336, 24/7.",
  points: ["Hernando line 352-612-3336", "Spring Hill to Brooksville", "Raccoon rabies on record", "Open 24/7"],
  townsHeading: "Hernando towns we cover",
  townsIntro: "Brooksville is the county seat and the only city. About 95% of Hernando residents live outside city limits, mostly in and around Spring Hill.",
  towns: [
    {
      title: "Hernando County",
      href: "/about-us/service-area/wildlife-removal-in-hernando-county-fl/",
      items: [
        { label: "Spring Hill", href: "/about-us/service-area/wildlife-removal-spring-hill-fl/" },
        { label: "Brooksville", href: "/about-us/service-area/wildlife-removal-service-in-brooksville-fl/" },
        { label: "Weeki Wachee" },
        { label: "Hernando Beach" },
        { label: "Ridge Manor" },
      ],
    },
  ],
  localHeading: "What's behind wildlife calls in Hernando",
  localIntro: "The 2020 Census counted almost 79% of Hernando's land as rural. Homes sit close to the Withlacoochee State Forest, the Chassahowitzka area and the springs coast.",
  local: [
    { icon: "critter", title: "Rabid raccoons", text: p("In 2025, Florida's Department of Health counted two rabid raccoons in Hernando, one off Ted Road near Brooksville and one near Spring Lake Highway. In June 2026, a rabid cat in Spring Hill had been attacked by a raccoon.") },
    { icon: "leaf", title: "Forest at the back fence", text: p("FWC's Croom tract of the Withlacoochee State Forest covers more than 20,000 acres in Hernando and Sumter, along 13 miles of the Withlacoochee River, with deer, turkeys, fox squirrels and alligators.") },
    { icon: "map-pin", title: "The springs coast", text: p("Weeki Wachee and Chassahowitzka are among the region's first-magnitude springs. Homes near the springs and rivers live close to a lot of wildlife.") },
    { icon: "search", title: "A small bear population", text: p("FWC says a remnant group of about 30 black bears lives in and around the Chassahowitzka Wildlife Management Area. Bears are FWC's job, not ours: give them space and contact FWC.") },
  ],
  servicesIntro: "Every service is available in Hernando. Choose the animal to see how we handle it.",
  faqs: [
    faq(
      "What's the Hernando County phone number?",
      "Call 352-612-3336, or the main line, (727) 594-7705. Both are answered 24/7.",
      "[PLACEHOLDER: ask the client: typical response time in Hernando County]",
    ),
    faq(
      "Has rabies been found in Hernando County?",
      "Yes. The Department of Health issued an advisory and an alert in June 2025 after two rabid raccoons, and an alert in June 2026 after a rabid cat in Spring Hill that a raccoon had attacked. Keep pets vaccinated and never handle a raccoon.",
    ),
    faq(
      "Are there bears in Hernando County?",
      "A few. FWC estimates a remnant group of about 30 bears in and around the Chassahowitzka Wildlife Management Area. Bears aren't something we remove; contact FWC.",
    ),
    faq(
      "Do you remove raccoons from attics in Spring Hill?",
      "Yes. In spring, we check for kits first. See [raccoons in the attic](/services/raccoons-in-attic/) for what to expect.",
    ),
  ],
  ctaHeading: "Wildlife problem in Hernando?",
  ctaText: "Call the Hernando line, 352-612-3336, day or night.",
  seo: {
    title: "Wildlife Removal in Hernando County, FL | Call 352-612-3336 | Pro Wildlife Removal",
    description:
      "Wildlife removal in Hernando County: Spring Hill, Brooksville, Weeki Wachee and Hernando Beach. Raccoons, rats, bats, squirrels, snakes and more. Call 24/7: 352-612-3336.",
  },
  sources: [
    S.censusPop,
    S.censusUR,
    S.edr,
    S.edrUninc,
    S.seats,
    S.doh2025,
    { title: "Florida DOH: Hernando advisory, June 2, 2025 (rabid raccoon, Brooksville area off Ted Road)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/advisory-hernando-6-2-2025.pdf" },
    { title: "Florida DOH: Hernando alert, June 9, 2025 (rabid raccoon, Spring Lake Hwy/Neff Lake area)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/alert-hernando-6-9-2025.pdf" },
    { title: "Florida DOH: Hernando alert, June 12, 2026 (rabid cat attacked by a raccoon, Spring Hill)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/06/rabies-alert-hernando-county-6-12-26.pdf" },
    { title: "FWC: Big Bend bear management unit (remnant group of about 30 bears around Chassahowitzka WMA)", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/bmu/big-bend/" },
    { title: "FWC: Croom WMA (more than 20,000 acres in Hernando and Sumter; 13 miles of the Withlacoochee River; deer, turkeys, fox squirrels, alligators)", url: "https://myfwc.com/recreation/cooperative/croom/" },
    { title: "SWFWMD: Springs Coast watershed (Weeki Wachee and Chassahowitzka first-magnitude springs)", url: "https://www.swfwmd.state.fl.us/watersheds/springscoast/springs-coast-watershed-overview" },
  ],
  clientQuestions: ["Typical response time in Hernando County?", "Real job photos and reviews from Hernando customers."],
});
