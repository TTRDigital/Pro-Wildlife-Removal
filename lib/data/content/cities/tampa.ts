import { countyPage, S } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Tampa city page, rewritten in place at its existing URL (Ben, Oct 26). Checkable local facts only. */
export const tampa = countyPage({
  kind: "city",
  path: "about-us/service-area/tampa/wildlife-removal-service-in-tampa-fl",
  name: "Tampa",
  county: "Hillsborough",
  order: 28,
  phone: { label: "Call (844) 264-6254", href: "tel:+18442646254" },
  eyebrow: "WILDLIFE REMOVAL IN TAMPA",
  summary: "Wildlife removal in Tampa: rats, bats, raccoons, squirrels, snakes, bees and more, from South Tampa to New Tampa.",
  heroText: "Tampa sits on the bay and the Hillsborough River, with mangroves and preserves inside city limits and wildlife in plenty of attics. Call (844) 264-6254.",
  answerHeading: "Who removes wildlife in Tampa?",
  answer:
    "In Tampa, wildlife on private property is a job for a private removal company: the city's own page says so. Pro Wildlife Removal handles rats, bats, raccoons, squirrels, snakes, opossums, armadillos, bees and dead animals across the city. Call (844) 264-6254.",
  points: ["Private property: call a company", "Hillsborough County", "Bees first found at Port of Tampa"],
  townsHeading: "Tampa and nearby",
  townsIntro: "Tampa is the Hillsborough County seat and, at about 412,700 people, its largest city. We also cover the communities around it.",
  towns: [
    {
      title: "Around Tampa",
      href: "/service-areas/hillsborough-county/",
      items: [
        { label: "Temple Terrace" },
        { label: "Town 'N' Country" },
        { label: "Lutz" },
        { label: "Odessa", href: "/service-areas/pasco-county/odessa/" },
        { label: "Brandon" },
        { label: "Riverview" },
      ],
    },
  ],
  localHeading: "Wildlife in a big city",
  localIntro: "Tampa is dense and built up, but it sits on the bay and the Hillsborough River, with preserves inside city limits. Wildlife uses both.",
  local: [
    { icon: "bug", title: "Where African bees arrived", text: p("UF/IFAS says African honey bees were first documented in Florida in 2001 near the Port of Tampa. Any bee colony in a Tampa wall or soffit should be treated with care. See [bee removal](/services/bee-removal/).") },
    { icon: "leaf", title: "McKay Bay Nature Park", text: p("The city's 38-acre preserve on McKay Bay has a boardwalk through the mangroves, and the city says many species of wading birds feed on its mudflats, especially in winter.") },
    { icon: "map-pin", title: "MacDill 48 Park", text: p("When Tampa opened its 48-acre MacDill 48 Park in November 2024, it named gopher tortoises, native fish and bald eagles among the wildlife living there.") },
    { icon: "sound", title: "Rabid bats nearby", text: p("Florida's Department of Health counted four rabid bats in Hillsborough County in 2025. A bat inside a Tampa home is never one to pick up bare-handed. See [bats in the attic](/services/bats-in-attic/).") },
  ],
  rats: { heading: "Rats in Tampa", intro: "Tampa's rat facts have a page of their own, so they aren't repeated here.", cards: [{ icon: "critter", title: "Rat removal in Tampa", text: p("Rat lungworm found in Tampa, the yearly S.W.E.E.P. pickup, and the city's trash and code rules."), href: "/services/rat-removal/tampa-fl/" }] },
  contactsHeading: "Tampa's public animal numbers",
  contactsIntro: "Tampa doesn't run its own animal control. These are the public numbers, from the city's and agencies' own pages.",
  contacts: [
    { icon: "users", title: "Hillsborough County Animal Control", text: p("(813) 744-5660. The county's Code Enforcement division handles animal enforcement across the county, including Tampa. For wildlife on private property, the city says to use private removal services.") },
    { icon: "home", title: "Dead animal on a city road", text: p("813-274-8811, Tampa Solid Waste, for small dead animals in city rights-of-way. The city can't collect carcasses from private property.") },
    { icon: "phone", title: "Animal bites: DOH-Hillsborough", text: p("813-307-8059, Environmental Public Health, to report a bite or scratch.") },
    { icon: "map-pin", title: "Bears and other state matters: FWC", text: p("Nuisance alligators: 866-FWC-GATOR (866-392-4286). Bear conflicts go to FWC's Southwest Region office in Lakeland, 863-648-3200.") },
  ],
  servicesIntro: "Our wildlife management services cover all of Tampa. Pick the animal for its signs, Florida's rules and our process.",
  servicesHeading: "Animals we remove in Tampa",
  reviewsIntro: "[PLACEHOLDER: reviews from Tampa customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Will the City of Tampa remove a raccoon or rats from my house?",
      "No. Tampa's page on animal services says animal enforcement falls to Hillsborough County's Animal Control, and that wildlife on private property needs a private removal service.",
    ),
    faq(
      "Who picks up a dead animal on a Tampa street?",
      "Tampa Solid Waste collects small dead animals from city rights-of-way: 813-274-8811. On your own property, it's up to you. Our [dead animal removal](/services/dead-animal-removal/) page covers that.",
    ),
    faq(
      "Can you remove bats from a Tampa home in summer?",
      "Not by exclusion, unless FWC issues a permit. Florida's bat maternity season runs April 16 to August 14, and exclusion is legal from August 15 to April 15. We can inspect and plan in the meantime.",
    ),
    faq(
      "How fast can you get to me in Tampa?",
      "Same-day appointments are often available in Tampa. Call (844) 264-6254.",
    ),
  ],
  ctaHeading: "Wildlife problem in Tampa?",
  ctaText: "Tampa calls go to (844) 264-6254.",
  seo: {
    title: "Wildlife Removal in Tampa, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Tampa, FL: roof rats, bats, raccoons, squirrels, snakes, bees and dead animals. Who to call in Tampa for what, and Florida's rules.",
  },
  sources: [
    S.edr,
    S.seats,
    { title: "City of Tampa: Animal services, Hillsborough County (county Code Enforcement handles animal enforcement including Tampa; wildlife on private property: use private removal services)", url: "https://www.tampa.gov/service/animal-services-hillsborough-county" },
    { title: "City of Tampa: Dead animal removal, city road (813-274-8811; city rights-of-way only; not private property)", url: "https://www.tampa.gov/service/dead-animal-removal-city-road" },
    { title: "City of Tampa: McKay Bay Nature Park (38-acre preserve; mangrove boardwalk; wading birds on the mudflats, especially in winter)", url: "https://www.tampa.gov/parks-and-recreation/programs/parks-and-facilities/greenways-and-trails/trail-maps/mckay-bay-nature-trail" },
    { title: "City of Tampa: MacDill 48 Park opens, Nov 2024 (48 acres; gopher tortoises, native fish, bald eagles)", url: "https://www.tampa.gov/news/2024-11/tampa-opens-newest-public-park-159436" },
    { title: "UF/IFAS EDIS ENY-170 (IN1205): African bees first documented in Florida in 2001 near the Port of Tampa", url: "https://ask.ifas.ufl.edu/publication/IN1205" },
    S.doh2025,
    { title: "Hillsborough County: Animal Control ((813) 744-5660)", url: "https://hcfl.gov/locations/animal-control" },
    { title: "DOH-Hillsborough: Report an animal bite (813-307-8059)", url: "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/report-an-animal-bite/" },
    { title: "FWC: Regional offices (Southwest 863-648-3200) and Nuisance Alligator Program (866-FWC-GATOR)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
    S.bats,
  ],
  clientQuestions: ["Tampa reviews (from TTR-723) and real Tampa job photos."],
});
