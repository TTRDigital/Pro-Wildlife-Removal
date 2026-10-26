import { countyPage, S } from "./build.ts";
import { faq, p } from "../pt.ts";

export const pinellas = countyPage({
  path: "about-us/service-area/wildlife-removal-pinellas-county",
  name: "Pinellas County",
  county: "Pinellas",
  order: 6,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  summary: "Wildlife removal across Pinellas County, from St. Petersburg to Tarpon Springs: bats, rats, raccoons, squirrels, snakes and more.",
  heroText: "Florida's most densely populated county, with 588 miles of coastline and wildlife that has learned to live between the houses. Call (727) 594-7705.",
  answerHeading: "Who removes wildlife in Pinellas County?",
  answer:
    "Pro Wildlife Removal handles bats, roof rats, raccoons, squirrels, snakes, opossums, armadillos, bees and dead animals across Pinellas County, from St. Petersburg and Clearwater to Palm Harbor and Dunedin. Call (727) 594-7705. [PLACEHOLDER: ask the client: confirm every job includes inspection, sealing and cleanup]",
  points: ["Call (727) 594-7705", "St. Pete to Tarpon Springs", "Entry points sealed"],
  townsHeading: "Pinellas towns we cover",
  townsIntro: "Clearwater is the county seat and St. Petersburg the largest city. Tap a town for its own page where there is one.",
  towns: [
    {
      title: "Pinellas County",
      href: "/about-us/service-area/wildlife-removal-pinellas-county/",
      items: [
        { label: "St. Petersburg", href: "/about-us/service-area/wildlife-removal-services-saint-petersburg-fl/" },
        { label: "Clearwater", href: "/about-us/service-area/wildlife-removal-clearwater-fl/" },
        { label: "Largo" },
        { label: "Pinellas Park", href: "/about-us/service-area/wildlife-removal-pinellas-park/" },
        { label: "Dunedin", href: "/about-us/service-area/wildlife-removal-dunedin/" },
        { label: "Palm Harbor", href: "/about-us/service-area/wildlife-removal-palm-harbor/" },
        { label: "Safety Harbor", href: "/about-us/service-area/wildlife-removal-safety-harbor/" },
        { label: "Tarpon Springs" },
        { label: "Seminole" },
      ],
    },
  ],
  localHeading: "What's different about wildlife in Pinellas",
  localIntro: "Pinellas is almost entirely built up. The 2020 Census counted 99.8% of residents as urban, so the animals here live in attics, sheds and yards, close to people.",
  local: [
    { icon: "building", title: "Dense neighborhoods", text: p("The county packs about 3,425 people into each square mile, the most in Florida. With roofs side by side, rats, raccoons and squirrels have no shortage of attics to choose from.") },
    { icon: "map-pin", title: "A long, built-up coast", text: p("Pinellas has 588 miles of coastline, and USGS describes its northern barrier islands as protecting a highly populated shore. Waterfront living puts wildlife right at the back door.") },
    { icon: "critter", title: "Rabies cases on record", text: p("Florida's Department of Health counted a rabid bat in Pinellas in 2024 and a rabid raccoon in 2025. Never handle a bat or a raccoon that's acting oddly.") },
    { icon: "leaf", title: "Rat poison and owls", text: p("UF/IFAS Extension in Pinellas tied owl deaths at Philippe Park to rat poison. Sealing a house against rats protects the owls that hunt them too.") },
    { icon: "leaf", title: "Beach-nesting birds", text: p("In 2022, Pinellas County Parks and Audubon Florida posted a protected nesting area for black skimmers, a threatened species, at the north end of Sand Key Park. Predators there include crows, gulls and coyotes.") },
  ],
  contactsIntro: "Not every animal problem is ours. These are the public agencies Pinellas residents can call, with numbers from each agency's own page.",
  contacts: [
    { icon: "users", title: "Pinellas County Animal Services", text: p("(727) 582-2600, option 4. Stray pets, animals that threaten public safety, and pickup help for sick or injured wildlife.") },
    { icon: "phone", title: "Animal bites: DOH-Pinellas", text: p("727-824-6932. The health department works with Animal Services to evaluate animal bites and possible rabies exposures.") },
    { icon: "map-pin", title: "Bears and alligators: FWC", text: p("Bears: FWC's Southwest Region office in Lakeland, 863-648-3200. Alligators 4 feet or longer that threaten people, pets or property: 866-FWC-GATOR (866-392-4286).") },
  ],
  servicesIntro: "Every service we offer is available in Pinellas. Pick the animal for the signs, the Florida rules and how we handle it.",
  faqs: [
    faq(
      "What number do I call in Pinellas County?",
      "Call (727) 594-7705, the one number for all of Pinellas. Calls are answered 24/7.",
      "[PLACEHOLDER: ask the client: typical response time in Pinellas County]",
    ),
    faq(
      "Who do I call about a stray dog or cat, or an animal bite in Pinellas?",
      "Pinellas County Animal Services handles stray pets: 727-582-2600. Report an animal bite to the Florida Department of Health in Pinellas at 727-824-6932. For wild animals in or on your home, call us.",
    ),
    faq(
      "Has rabies been found in Pinellas County?",
      "Yes, occasionally. Florida's Department of Health counted one rabid bat in Pinellas in 2024 and one rabid raccoon in 2025. The local health department advises keeping wildlife, including bats, out of homes.",
    ),
    faq(
      "Should I use rat poison in Pinellas?",
      "Use it with care, if at all. UF/IFAS Extension in Pinellas linked owl deaths at Philippe Park to rat poison, and recommends sealing up entry points before using bait. Sealing is the first step of our [rat removal](/services/rat-removal/) process.",
    ),
    faq(
      "Do you remove bats in Pinellas County?",
      "Yes, by exclusion from August 15 to April 15. From April 16 to August 14, Florida's bat maternity season, exclusion isn't allowed without an FWC permit, but we can inspect and plan. See [bats in the attic](/services/bats-in-attic/).",
    ),
    faq(
      "Who picks up sick or injured wildlife in Pinellas?",
      "The county's injured-wildlife page lists Pinellas County Animal Services, (727) 582-2600 option 4, for pickup and transport help. For manatees, dolphins, sea turtles, panthers and black bears, it points to FWC's Wildlife Alert Hotline, 888-404-3922.",
    ),
    faq(
      "There's an alligator in my yard in Pinellas. Who do I call?",
      "FWC's Nuisance Alligator Hotline, 866-FWC-GATOR (866-392-4286). FWC generally treats an alligator as a nuisance if it's at least 4 feet long and threatens people, pets or property. Smaller ones in a pool or garage can be reported too.",
    ),
  ],
  ctaHeading: "Wildlife problem in Pinellas?",
  ctaText: "Anywhere in Pinellas, call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Pinellas County | Pro Wildlife Removal",
    description:
      "Bat, rat, raccoon, squirrel and snake removal in Pinellas County: St. Petersburg, Clearwater, Largo, Dunedin, Palm Harbor and more. Call (727) 594-7705.",
  },
  sources: [
    { title: "Pinellas County: About Pinellas, facts (280 square miles; 588 miles of coastline; 3,425 people per square mile; Clearwater is the county seat; St. Petersburg largest city)", url: "https://pinellas.gov/about-pinellas-facts/" },
    S.censusUR,
    S.censusPop,
    { title: "USGS: Aerial view of northern Pinellas County barrier islands (barriers protect a highly populated coastline)", url: "https://www.usgs.gov/media/images/aerial-view-northern-pinellas-county-barrier-islands" },
    S.doh2024,
    S.doh2025,
    { title: "Florida DOH-Pinellas: Rabies safety, April 10, 2026 (keep wildlife including bats out of homes; report bites 727-824-6932; Animal Services 727-582-2600)", url: "https://pinellas.floridahealth.gov/2026/04/10/rabies-safety/" },
    { title: "UF/IFAS Extension Pinellas: Management of rodents, July 25, 2022 (owl deaths at Philippe Park from rat poison; seal entry points before using bait)", url: "https://blogs.ifas.ufl.edu/pinellasco/2022/07/25/management-of-rodents/" },
    S.bats,
    { title: "Pinellas County: Animal Services contact (727-582-2600, option 4)", url: "https://pinellas.gov/services/animal-services-contact-us-form/" },
    { title: "Pinellas County: Injured or orphaned wildlife (Animal Services wildlife pickup; FWC hotline for manatees, sea turtles, bears)", url: "https://pinellas.gov/injured-or-orphaned-wildlife/" },
    { title: "DOH-Pinellas: Rabies information (report bites at 727-824-6932)", url: "https://pinellas.floridahealth.gov/programs-and-services/infectious-diseases/epidemiology/rabies-information/" },
    { title: "Pinellas County: Black skimmer nesting area at Sand Key Park (threatened; predators include crows, gulls, coyotes)", url: "https://pinellas.gov/news/pinellas-county-parks-prepares-black-skimmer-nesting-area-at-sand-key-park/" },
    { title: "FWC: Regional offices (counties per region; Southwest 863-648-3200; North Central 386-758-0525; Northeast 352-732-1225)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
    { title: "FWC: Living with bears (report human-bear conflicts to your nearest regional office)", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/living/" },
    { title: "FWC: Statewide Nuisance Alligator Program (866-FWC-GATOR; 4 feet or longer and a threat)", url: "https://myfwc.com/wildlifehabitats/wildlife/alligator/snap/" },
  ],
  clientQuestions: ["Typical response time in Pinellas County?", "Real job photos and reviews from Pinellas customers."],
});

