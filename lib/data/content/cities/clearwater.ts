import { countyPage, S } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Clearwater page, rewritten in place at its existing URL (Ben, Oct 26). Checkable local facts only. */
const ANIMAL_ISSUE = "https://www.myclearwater.com/Report-a-Problem/Report-an-Animal-Issue";

export const clearwater = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-clearwater-fl",
  name: "Clearwater",
  county: "Pinellas",
  order: 10,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN CLEARWATER",
  summary: "Wildlife removal in Clearwater, FL: rats, raccoons, bats, squirrels, snakes, opossums and more. Call (727) 594-7705.",
  heroText: "The Pinellas County seat, between the Gulf and Old Tampa Bay, with nature parks and wetlands inside city limits. Call (727) 594-7705.",
  answerHeading: "Who handles wildlife problems in Clearwater?",
  answer:
    "The City of Clearwater doesn't run animal control: Pinellas County handles strays and pets, and FWC handles alligators and wildlife emergencies. For an animal living in your attic, walls or yard, call a private company. Pro Wildlife Removal works across Clearwater. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "County handles pets", "FWC handles alligators"],
  townsHeading: "Clearwater and nearby",
  townsIntro: "Clearwater, home to about 118,300 people, is the Pinellas County seat. We cover the towns around it too.",
  towns: [
    {
      title: "North Pinellas",
      href: "/about-us/service-area/wildlife-removal-pinellas-county/",
      items: [
        { label: "Dunedin", href: "/about-us/service-area/wildlife-removal-dunedin/" },
        { label: "Safety Harbor", href: "/about-us/service-area/wildlife-removal-safety-harbor/" },
        { label: "Palm Harbor", href: "/about-us/service-area/wildlife-removal-palm-harbor/" },
        { label: "Largo" },
        { label: "Belleair" },
      ],
    },
  ],
  localHeading: "Wildlife in and around Clearwater",
  localIntro: "Clearwater is built up, but the city keeps preserves and restored wetlands, and its eastern half drains to Old Tampa Bay.",
  local: [
    { icon: "leaf", title: "Moccasin Lake Nature Park", text: p("The city describes Moccasin Lake as a 54-acre nature preserve, home to gopher tortoises, raccoons and many birds.") },
    { icon: "drop", title: "Kapok Park wetlands", text: p("At Kapok Park, 19.4 acres of restored wetlands filter water headed for Alligator Lake and Old Tampa Bay and give wildlife a home. The park's rules say plainly: do not feed wildlife.") },
    { icon: "map-pin", title: "The Alligator Creek watershed", text: p("Much of eastern Clearwater drains through Alligator Creek and Alligator Lake into Old Tampa Bay, a 5,546-acre watershed shared with Safety Harbor and unincorporated Pinellas.") },
    { icon: "critter", title: "A county feeding rule", text: p("Pinellas County code treats putting out food or garbage in a way that attracts raccoons, coyotes or other wildlife, and creates a nuisance, as a public nuisance.") },
  ],
  contactsIntro: "Who handles what in Clearwater, from the city's and agencies' own pages.",
  contacts: [
    { icon: "users", title: "Strays and pets: Pinellas County", text: p("Pinellas County Animal Services, (727) 582-2600, option 4. Clearwater's own page says the county handles dangerous pets, strays and cruelty.") },
    { icon: "home", title: "Dead animal on a city road", text: p("Clearwater Solid Waste Services removes dead animals from public roads, rights-of-way and medians inside city limits. On private property, it's the owner's job.") },
    { icon: "phone", title: "Animal bites: DOH-Pinellas", text: p("Report bites to the health department in Pinellas at 727-824-6932.") },
    { icon: "map-pin", title: "Alligators and wildlife emergencies: FWC", text: p("The city points to FWC for nuisance alligators and injured sea life. Gator hotline: 866-FWC-GATOR. Wildlife Alert (injured sea life and wildlife law violations): 888-404-3922.") },
  ],
  servicesIntro: "All nine services are available in Clearwater. Tap an animal for the details.",
  servicesHeading: "Animals we remove in Clearwater",
  reviewsIntro: "[PLACEHOLDER: reviews from Clearwater customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Does the City of Clearwater remove wildlife from homes?",
      "No. Clearwater's page on animal issues sends strays and pets to Pinellas County and wildlife emergencies to FWC. An animal living in your home is a job for a private wildlife company.",
    ),
    faq(
      "Who removes a dead animal from a Clearwater street?",
      "Clearwater Solid Waste Services handles dead animals on public roads, rights-of-way and medians in city limits. On your own property, see our [dead animal removal](/services/dead-animal-removal/) page.",
    ),
    faq(
      "Is it against the rules to feed raccoons in Clearwater?",
      "Pinellas County code calls feeding that attracts raccoons, coyotes or other wildlife and creates a nuisance a public nuisance, and Florida rule 68A-4.001 has a similar ban. City parks like Kapok Park post \"do not feed wildlife.\"",
    ),
    faq(
      "How soon can you come out in Clearwater?",
      "We answer (727) 594-7705 24/7.",
      "[PLACEHOLDER: ask the client: typical response time in Clearwater]",
    ),
  ],
  ctaHeading: "Wildlife problem in Clearwater?",
  ctaText: "Clearwater homeowners can reach us at (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Clearwater, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Clearwater, FL: rats, raccoons, bats, squirrels, snakes and opossums, who handles what in the city, and local rules. (727) 594-7705.",
  },
  sources: [
    S.edr,
    { title: "Pinellas County: About Pinellas (Clearwater is the county seat)", url: "https://pinellas.gov/about-pinellas-facts/" },
    { title: "City of Clearwater: Report an animal issue (county handles dangerous pets, strays, cruelty; FWC handles wildlife issues incl. nuisance alligators; city Solid Waste handles dead animals on public roads; private property is the owner's responsibility)", url: ANIMAL_ISSUE },
    { title: "City of Clearwater: Moccasin Lake Nature Park (54-acre preserve; gopher tortoises, raccoons, many birds)", url: "https://www.myclearwater.com/Neighborhood-Map-Locations/Parks-Trails-and-Recreation-Centers/Moccasin-Lake-Nature-Park" },
    { title: "City of Clearwater: Kapok Park (19.4 acres of wetlands; habitat; do not feed wildlife)", url: "https://www.myclearwater.com/Neighborhood-Map-Locations/Parks-Trails-and-Recreation-Centers/Kapok-Park" },
    { title: "City of Clearwater: Alligator Creek Watershed Management Plan (5,546 acres; eastern Clearwater to Old Tampa Bay; shared with Safety Harbor and unincorporated Pinellas)", url: "https://www.myclearwater.com/My-Government/0-City-Departments/Public-Works/Alligator-Creek-Watershed-Management-Plan" },
    { title: "Pinellas County: Animal Services enforcement (Sec. 14-30(4): food or garbage attracting raccoons, coyotes or wildlife as a public nuisance)", url: "https://pinellas.gov/animal-services-enforcement/" },
    { title: "Pinellas County: Animal Services contact ((727) 582-2600, option 4)", url: "https://pinellas.gov/services/animal-services-contact-us-form/" },
    { title: "DOH-Pinellas: Rabies information (727-824-6932)", url: "https://pinellas.floridahealth.gov/programs-and-services/infectious-diseases/epidemiology/rabies-information/" },
    { title: "FWC: Nuisance Alligator Program and Regional offices (Wildlife Alert 888-404-3922)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
    { title: "FWC: Detriments to feeding wildlife (68A-4.001)", url: "https://myfwc.com/conservation/you-conserve/wildlife/feeding/" },
  ],
  clientQuestions: ["Typical response time in Clearwater?", "Clearwater reviews (from TTR-723) and real Clearwater job photos."],
});
