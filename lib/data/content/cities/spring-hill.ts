import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";
import { springHillRatsInput } from "./rats/spring-hill.ts";

/* Spring Hill page, rewritten in place at its existing URL (Ben, Oct 26). Checkable local facts only. */
const WEEKI_PLAN = "https://www.swfwmd.state.fl.us/sites/default/files/medias/documents/weekiwachee_preserve_management_plan_update_draft.pdf";

export const springHill = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-spring-hill-fl",
  name: "Spring Hill",
  county: "Hernando",
  order: 27,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN SPRING HILL",
  summary: "Wildlife removal in Spring Hill, FL: raccoons, rats, squirrels, bats, snakes, armadillos and more. Call (727) 594-7705.",
  heroText: "Hernando County's biggest community, with the Weekiwachee Preserve on its western edge. Call (727) 594-7705.",
  answerHeading: "Who handles wildlife removal in Spring Hill?",
  answer:
    "Spring Hill isn't a city, so public animal services come from the Hernando County Sheriff's Office, and wildlife in or under your home is a job for a private company. Pro Wildlife Removal handles raccoons, rats, squirrels, bats, snakes, opossums, armadillos and bees here. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Unincorporated community", "Next to Weekiwachee Preserve"],
  townsHeading: "Spring Hill and nearby",
  townsIntro: "With about 113,600 people at the 2020 Census, Spring Hill is an unincorporated community, larger than any city in Hernando County.",
  towns: [
    {
      title: "Hernando County",
      href: "/service-areas/hernando-county/",
      items: [
        { label: "Brooksville", href: "/service-areas/hernando-county/brooksville/" },
        { label: "Weeki Wachee" },
        { label: "Hernando Beach" },
        { label: "Aripeka" },
        { label: "Hudson (Pasco)", href: "/service-areas/pasco-county/hudson/" },
      ],
    },
  ],
  localHeading: "Living next to the preserve",
  localIntro: "Spring Hill's western neighborhoods sit right beside a large coastal preserve, so wildlife is close at hand.",
  local: [
    { icon: "leaf", title: "Weekiwachee Preserve next door", text: p("The water district's draft management plan for Weekiwachee Preserve notes that Spring Hill borders a large part of the preserve's eastern boundary.") },
    { icon: "critter", title: "Don't feed the raccoons", text: p("UF/IFAS Extension in Hernando reminds residents that intentionally feeding raccoons is illegal. Feeding draws them to the house. Separately, in June 2026 an unvaccinated Spring Hill cat that a raccoon had attacked tested positive for rabies.") },
    { icon: "home", title: "Twice-a-week garbage", text: p("Spring Hill's mandatory collection area gets garbage pickup twice a week, per Hernando County. Bins kept shut between pickups mean less for rats and raccoons to find.") },
  ],
  rats: { heading: springHillRatsInput.localHeading, intro: springHillRatsInput.localIntro, cards: [...springHillRatsInput.local, ...(springHillRatsInput.contacts ?? [])], link: { label: "rat removal across Hernando County", href: "/services/rat-removal/hernando-county-fl/" } },
  contactsHeading: "Hernando sheriff, DOH and FWC numbers for Spring Hill",
  contactsIntro: "Here's who handles what for Spring Hill residents, from each agency's own page.",
  contacts: [
    { icon: "users", title: "HCSO Animal Services", text: p("352-796-5062. The Hernando County Sheriff's Office runs Animal Services from Oliver Street in Brooksville.") },
    { icon: "phone", title: "Animal bites: DOH-Hernando", text: p("352-540-6812, the health department's Environmental Public Health line for bites and scratches.") },
    { icon: "map-pin", title: "Bears and other state matters: FWC", text: p("Bear sightings or conflicts: FWC Southwest Region, 863-648-3200. Nuisance alligators: 866-FWC-GATOR.") },
  ],
  servicesIntro: "Our wildlife removal experts offer wildlife control for every animal below across Spring Hill. Choose one to read more.",
  servicesHeading: "Animals we remove in Spring Hill",
  reviewsIntro: "[PLACEHOLDER: reviews from Spring Hill customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Does the county remove raccoons or opossums from Spring Hill homes?",
      "Public animal services for Spring Hill come from the Hernando County Sheriff's Office. For a raccoon in the attic or an opossum under the house, call a wildlife removal company rather than an exterminator: the animal is removed under FWC's rules and the way in is sealed. See [raccoons in the attic](/services/raccoons-in-attic/).",
    ),
    faq(
      "Can I leave food out for raccoons in Spring Hill?",
      "UF/IFAS Extension in Hernando says intentionally feeding raccoons is illegal, and Florida rule 68A-4.001 bans putting out food that attracts raccoons and creates a nuisance.",
    ),
    faq(
      "Is same-day service available in Spring Hill?",
      "Same-day appointments are often available in Spring Hill. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Wildlife problem in Spring Hill?",
  ctaText: "For Spring Hill, call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Spring Hill, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Spring Hill, FL: raccoons, rats, squirrels, bats and snakes next to the Weekiwachee Preserve, and who to call for what. (727) 594-7705.",
  },
  sources: [
    { title: "U.S. Census Bureau: 2020 redistricting file (Spring Hill CDP, Hernando County, 113,568)", url: "https://www2.census.gov/programs-surveys/decennial/2020/data/01-Redistricting_File--PL_94-171/Florida/fl2020.pl.zip" },
    { title: "SWFWMD: Weekiwachee Preserve management plan update, draft (Spring Hill borders a large part of the eastern boundary; small number of black bears; human-bear conflict potential; Chassahowitzka group about 30 bears)", url: WEEKI_PLAN },
    { title: "FWC: Big Bend bear management unit (about 30 bears around Chassahowitzka)", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/bmu/big-bend/" },
    { title: "UF/IFAS Extension Hernando: Northern raccoon profile (illegal to feed raccoons intentionally)", url: "https://blogs.ifas.ufl.edu/hernandoco/2022/12/21/wildlife-invasive-species-education-wise-species-profile-the-northern-raccoon/" },
    { title: "Florida DOH: Hernando alert, June 12, 2026 (rabid cat attacked by a raccoon, Spring Hill)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/06/rabies-alert-hernando-county-6-12-26.pdf" },
    { title: "Hernando County: Solid waste collection assessment (universal area of Spring Hill; twice-weekly garbage collection)", url: "https://www.hernandocounty.us/living-here/garbage-recycling/solid-waste-assessments/collection-assessment/" },
    { title: "Hernando County Sheriff's Office: Animal Services (352-796-5062)", url: "https://www.hernandosheriff.org/AnimalServices/" },
    { title: "DOH-Hernando: Rabies surveillance and July 1, 2026 alert (352-540-6812)", url: "https://hernando.floridahealth.gov/2026/07/01/doh-hernando-issues-rabies-alert-2/" },
    { title: "FWC: Regional offices and Nuisance Alligator Program", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
    { title: "FWC: Detriments to feeding wildlife (68A-4.001)", url: "https://myfwc.com/conservation/you-conserve/wildlife/feeding/" },
    ...springHillRatsInput.sources,
  ],
  clientQuestions: ["Spring Hill reviews (from TTR-723) and real Spring Hill job photos."],
});
