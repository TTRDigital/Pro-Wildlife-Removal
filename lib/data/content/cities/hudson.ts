import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Hudson page, rewritten in place at its existing URL (Ben, Oct 26). Checkable local facts only. */
const WEEKI_PLAN = "https://www.swfwmd.state.fl.us/sites/default/files/medias/documents/weekiwachee_preserve_management_plan_update_draft.pdf";

export const hudson = countyPage({
  kind: "city",
  path: "about-us/service-area/hudson-wildlife-removal",
  name: "Hudson",
  county: "Pasco",
  order: 14,
  phone: { label: "Call 727-594-7722", href: "tel:+17275947722" },
  eyebrow: "WILDLIFE REMOVAL IN HUDSON",
  summary: "Wildlife removal in Hudson, FL: raccoons, opossums, armadillos, squirrels, rats, snakes, bats and more, on the Pasco line.",
  heroText: "A Gulf coast community at the southern tip of the Weekiwachee Preserve, where Pasco meets Hernando. Call the Pasco line any hour.",
  answerHeading: "Who handles wildlife problems in Hudson?",
  answer:
    "Hudson is unincorporated Pasco County, and county Animal Services focuses on pets and strays. Raccoons, opossums, rats or snakes in or under your home are a job for a private company, and bears are FWC's. Pro Wildlife Removal works across Hudson. Call 727-594-7722, 24/7.",
  points: ["Pasco line 727-594-7722", "Unincorporated Pasco", "Bears: call FWC", "Open 24/7"],
  townsHeading: "Hudson and nearby",
  townsIntro: "Hudson is a coastal community of about 12,900 people, as of the 2020 Census, at the north end of Pasco's Gulf coast.",
  towns: [
    {
      title: "North Pasco coast",
      href: "/about-us/service-area/wildlife-removal-in-pasco-county-fl/",
      items: [
        { label: "Aripeka" },
        { label: "Bayonet Point" },
        { label: "Port Richey" },
        { label: "New Port Richey", href: "/about-us/service-area/wildlife-removal-new-port-richey/" },
        { label: "Spring Hill (Hernando)", href: "/about-us/service-area/wildlife-removal-spring-hill-fl/" },
      ],
    },
  ],
  localHeading: "On the edge of the preserve",
  localIntro: "The Weekiwachee Preserve runs up the coast from Hudson into Hernando County. The water district's management plan names Hudson among the communities next to it.",
  local: [
    { icon: "map-pin", title: "The preserve's southern line", text: p("The district's draft plan lists Old Dixie Highway and the town of Hudson as the preserve's southern boundary. Coastal neighborhoods sit right against protected land.") },
    { icon: "leaf", title: "Aripeka Sandhills", text: p("The 209-acre Aripeka Sandhills tract, on Aripeka Road with a Hudson address, protects hardwood swamp and pine sandhill. It's open for hiking, birding and fishing, and hunting isn't allowed.") },
    { icon: "search", title: "Bear country starts here", text: p("The plan places the Chassahowitzka black bear subpopulation on land west of US 19, from the Aripeka Sandhills tract north to the Withlacoochee State Forest's Homosassa Tract. The plan describes the bears on the preserve as a small number.") },
    { icon: "critter", title: "Locked lids matter", text: p("The district flags human-bear conflict where the preserve meets homes. Secured garbage and pet food also take away what draws raccoons and opossums to a yard.") },
  ],
  contactsIntro: "Who to call for what in Hudson, from the county's and agencies' own pages.",
  contacts: [
    { icon: "users", title: "Pasco County Animal Services", text: p("813-929-1212. Its after-hours standby, (727) 847-8102, option 7, covers emergencies like seriously injured strays or a loose animal that has bitten a person.") },
    { icon: "phone", title: "Animal bites: DOH-Pasco", text: p("352-521-1450, option 4. DOH-Pasco asks anyone bitten or scratched by a wild or domestic animal to get medical care and report it.") },
    { icon: "map-pin", title: "Bears and alligators: FWC", text: p("FWC's Southwest Region office handles bear calls for Pasco: 863-648-3200. Nuisance alligator hotline: 866-FWC-GATOR.") },
  ],
  servicesIntro: "Every service we offer is available in Hudson. Tap an animal to see how we deal with it.",
  servicesHeading: "Animals we remove in Hudson",
  reviewsIntro: "[PLACEHOLDER: reviews from Hudson customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Are there bears in Hudson, FL?",
      "They can be. The water district says the Chassahowitzka bear subpopulation's range reaches south to the Aripeka Sandhills tract, which has a Hudson address. Report bear conflicts to FWC's Southwest Region, 863-648-3200. We don't handle bears.",
    ),
    faq(
      "Who removes a raccoon or opossum from under my Hudson home?",
      "A private wildlife company. Pasco County Animal Services focuses on pets and strays. See [opossum removal](/services/opossum-removal/) and [raccoon removal](/services/raccoon-removal/).",
    ),
    faq(
      "Can I hunt or trap in Aripeka Sandhills?",
      "No hunting is allowed on the Aripeka Sandhills tract, per the district's plan. Its trails are for hiking only.",
    ),
    faq(
      "How soon can you get to Hudson?",
      "We answer the Pasco line 24/7.",
      "[PLACEHOLDER: ask the client: typical response time in Hudson]",
    ),
  ],
  ctaHeading: "Wildlife problem in Hudson?",
  ctaText: "Call the Pasco line at 727-594-7722, any time of day.",
  seo: {
    title: "Wildlife Removal in Hudson, FL | Call 727-594-7722 | Pro Wildlife Removal",
    description:
      "Wildlife removal in Hudson, FL: raccoons, opossums, armadillos, squirrels, rats and snakes, next to the Weekiwachee Preserve. Who to call for what. Call 24/7: 727-594-7722.",
  },
  sources: [
    { title: "U.S. Census Bureau: 2020 redistricting file (Hudson CDP, Pasco County, 12,944)", url: "https://www2.census.gov/programs-surveys/decennial/2020/data/01-Redistricting_File--PL_94-171/Florida/fl2020.pl.zip" },
    { title: "SWFWMD: Weekiwachee Preserve management plan update, draft (southern boundary Old Dixie Highway and the town of Hudson; Hudson among adjacent communities; small number of black bears; Chassahowitzka subpopulation from the Aripeka Sandhills tract to the Homosassa Tract; human-bear conflict in the urban interface; no hunting and hiking-only trails in Aripeka Sandhills)", url: WEEKI_PLAN },
    { title: "SWFWMD: Weekiwachee Preserve and Aripeka Sandhills Preserve (Aripeka Sandhills 209 acres; 18000 Aripeka Road, Hudson; hardwood swamps and pine sandhills)", url: "https://www.swfwmd.state.fl.us/recreation/weekiwachee-preserve-aripeka-sandhills-preserve" },
    { title: "Pasco County: Animal Services (813-929-1212; after hours (727) 847-8102 option 7, qualifying emergencies)", url: "https://www.pascocountyfl.gov/services/animal_services/index.php" },
    { title: "DOH-Pasco: Rabies advisory, July 30, 2026 (352-521-1450, option 4)", url: "https://pasco.floridahealth.gov/2026/07/30/doh-pasco-issues-rabies-advisory/" },
    { title: "FWC: Regional offices (Southwest 863-648-3200) and Nuisance Alligator Program", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Typical response time in Hudson?", "Hudson reviews (from TTR-723) and real Hudson job photos."],
});
