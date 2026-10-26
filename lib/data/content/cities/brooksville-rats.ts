import { countyPage, S } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Brooksville rat removal page, rewritten in place at its existing URL with its rat angle kept (Ben, Oct 26). Checkable local facts only. */
const ENY224 = "https://journals.flvc.org/edis/article/view/136514";
const GADSDEN = "https://gadsden.floridahealth.gov/programs-and-services/environmental-health/rodent-control/";
const SANTAROSA = "https://blogs.ifas.ufl.edu/santarosaco/2016/01/29/controlling-rats-and-mice-around-the-farm/";
const IN1397 = "https://ask.ifas.ufl.edu/publication/IN1397";
const IRDOH = "https://indianriver.floridahealth.gov/wp-content/uploads/sites/32/2025/05/Rodent_Control_Booklet.pdf";
const GOOD_NEIGHBOR = "https://www.cityofbrooksville.us/AgendaCenter/ViewFile/Agenda/_04252024-260";

export const brooksvilleRats = countyPage({
  kind: "rat",
  path: "about-us/service-area/expert-rat-removal-in-brooksville-fl",
  name: "Brooksville",
  county: "Hernando",
  order: 31,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "RAT REMOVAL IN BROOKSVILLE",
  heading: "Rat Removal in Brooksville, FL",
  highlight: "Rat Removal",
  summary: "Rat removal in Brooksville, FL: roof rats out of attics and walls, entry points sealed, and droppings cleaned up.",
  heroText: "Scratching overhead after dark in Brooksville? It's usually roof rats. We find where they get in, seal it, and trap the ones left inside. Call (727) 594-7705.",
  answerHeading: "Who gets rid of rats in Brooksville?",
  answer:
    "Rats inside a Brooksville home are a job for a private company. The sheriff's Animal Services page covers pets, not rodents. Pro Wildlife Removal seals the openings roof rats use, traps the rats still inside and cleans up after them. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Roof rats in attics", "Seal first, then trap"],
  townsHeading: "Brooksville and nearby",
  townsIntro: "Brooksville is the Hernando County seat, a city of about 10,100 people. We take rat calls across the county.",
  towns: [
    {
      title: "Hernando County",
      href: "/about-us/service-area/wildlife-removal-in-hernando-county-fl/",
      items: [
        { label: "Brooksville (all wildlife)", href: "/about-us/service-area/wildlife-removal-service-in-brooksville-fl/" },
        { label: "Spring Hill", href: "/about-us/service-area/wildlife-removal-spring-hill-fl/" },
        { label: "Weeki Wachee" },
        { label: "Ridge Manor" },
      ],
    },
  ],
  localHeading: "Rats in Brooksville homes",
  localIntro: "Florida's house rat problem is mostly the roof rat, an animal that lives up high. Here's what UF/IFAS and Florida DOH say about it, and what that means locally.",
  local: [
    { icon: "home", title: "They live up, not down", text: p("Florida DOH describes roof rats as good climbers that generally like high places, such as attics. Overhanging limbs, utility lines and pipes are their roads onto a Brooksville roof.") },
    { icon: "search", title: "A gap the width of a thumb", text: p("Per UF/IFAS, a rat can get through a crack about half an inch wide. Roof returns, gable vents and the gaps around A/C lines are where we look first.") },
    { icon: "critter", title: "Numbers climb fast", text: p("A roof rat can have up to eight litters a year of six to eight young, and those young become sexually active two to three months after birth, according to Florida DOH. A few rats in spring can be many by fall.") },
    { icon: "wrench", title: "A fire risk overhead", text: p("A Florida DOH guide warns that rats chewing through wire insulation can cause fires. If you find chewed cables in the attic, have an electrician look at them.") },
    { icon: "leaf", title: "Don't feed the wildlife", text: p("Brooksville's management plan for the Good Neighbor Trail says the city will prohibit feeding raccoons, squirrels and other wild animals there. Food left out at home draws rats the same way.") },
  ],
  contactsHeading: "Brooksville garbage, HCSO and FWC contacts",
  contactsIntro: "City garbage, the sheriff's Animal Services on Oliver Street and FWC each cover part of a Brooksville animal problem.",
  contacts: [
    { icon: "home", title: "Garbage in city limits", text: p("Hernando County notes that the City of Brooksville runs its own garbage collection. City residents can call (352) 540-3860 with questions. Tight lids and bins kept off the ground leave rats less to eat.") },
    { icon: "users", title: "HCSO Animal Services", text: p("352-796-5062, on Oliver Street in Brooksville. Since July 1, 2024, the sheriff's office also provides law enforcement inside the city. Its Animal Services pages cover pets.") },
    { icon: "map-pin", title: "Wildlife beyond rats: FWC", text: p("Chinsegut Wildlife and Environmental Area, six miles north of town, is managed by FWC. Nuisance alligators: 866-FWC-GATOR.") },
  ],
  servicesIntro: "Rats are the focus of this page, but we handle every animal below in Brooksville too.",
  servicesHeading: "Brooksville animal jobs besides rats",
  reviewsIntro: "[PLACEHOLDER: reviews from Brooksville rat removal customers, matched from the client's Google reviews (TTR-723)]",
  faqHeading: "Brooksville rat questions",
  faqs: [
    faq(
      "Will the city or the sheriff remove rats from my Brooksville home?",
      "Neither one lists rat removal. The sheriff's Animal Services pages cover pets, and the city's sanitation role is garbage collection. For rats in the attic or walls, call a pest or wildlife company. See [rats in the attic](/services/rats-in-attic/).",
    ),
    faq(
      "What kind of rats get into Brooksville attics?",
      "Usually roof rats. Florida DOH describes them as good climbers that like to be up high, which is why they turn up in attics and soffits rather than burrows in the yard.",
    ),
    faq(
      "Why do the rats come back after I trap a few?",
      "Because the openings are still there. UF/IFAS says rat-proofing has to block every way in, and that rats test new repairs in the first couple of weeks. Our [rat removal](/services/rat-removal/) page explains how we seal and then trap.",
    ),
    faq(
      "Can rat droppings make my family sick?",
      "They can. CDC says rodents spread disease through their droppings, urine, saliva and bites. Don't sweep or vacuum droppings. Follow CDC's cleanup steps or have the attic cleaned.",
    ),
    faq(
      "How quickly can you inspect a Brooksville attic for rats?",
      "Same-day rat inspections are often available in Brooksville. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time in Brooksville]",
    ),
  ],
  ctaHeading: "Rats in your Brooksville home?",
  ctaText: "One call to (727) 594-7705 starts with an inspection of the roof and attic. ",
  seo: {
    title: "Rat Removal in Brooksville, FL | Pro Wildlife Removal",
    description:
      "Rat removal in Brooksville, FL: roof rats out of attics and walls, entry points sealed, rats trapped and droppings cleaned up. Call us at (727) 594-7705.",
  },
  sources: [
    S.edr,
    S.seats,
    { title: "Florida DOH Gadsden: Rodent control (roof rats are good climbers, like high places such as attics and like to be up high; up to 8 litters a year of 6-8 young; sexually active 2-3 months after birth)", url: GADSDEN },
    { title: "UF/IFAS EDIS IN1397: Landscaping methods to prevent pests from entering your home (rats use limbs as a highway into the house)", url: IN1397 },
    { title: "UF/IFAS Extension Santa Rosa: Controlling rats and mice around the farm (holes as small as 1/2 inch for rats; climb pipes and wires; rodent-proofing must block all possible entry points)", url: SANTAROSA },
    { title: "Florida DOH Indian River: Rodent control booklet (rev. 2008; rodents can cause fires by chewing through the insulation on electrical wires)", url: IRDOH },
    { title: "UF/IFAS EDIS ENY-224: Rat and Mouse Control (2013, archived; rats test repairs in the first 2 weeks)", url: ENY224 },
    { title: "CDC: Controlling wild rodent infestations (diseases via droppings, urine, saliva, bites)", url: "https://www.cdc.gov/healthy-pets/rodent-control/index.html" },
    { title: "CDC: How to clean up after rodents (no sweeping or vacuuming)", url: "https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html" },
    { title: "City of Brooksville: Good Neighbor Trail management plan, in the April 2024 committee agenda packet (city will prohibit feeding raccoons, squirrels and other wild animals)", url: GOOD_NEIGHBOR },
    { title: "Hernando County: Residential collection (City of Brooksville provides its own collection service; city residents (352) 540-3860)", url: "https://www.hernandocounty.us/living-here/garbage-recycling/residential-collection/" },
    { title: "Hernando County Sheriff's Office: Animal Services (352-796-5062; Oliver Street, Brooksville; pet services; law enforcement in the City of Brooksville since July 1, 2024)", url: "https://www.hernandosheriff.org/AnimalServices/" },
    { title: "FWC: Chinsegut Wildlife and Environmental Area (six miles north of Brooksville)", url: "https://myfwc.com/recreation/lead/chinsegut/" },
    { title: "FWC: Nuisance Alligator Program", url: "https://myfwc.com/wildlifehabitats/wildlife/alligator/snap/" },
  ],
  clientQuestions: ["Typical response time in Brooksville?", "Brooksville rat job reviews (from TTR-723) and real rat job photos."],
});
