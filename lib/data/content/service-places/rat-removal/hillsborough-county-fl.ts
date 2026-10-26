import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Rat removal in Hillsborough County (TTR-738, Owen). County-wide and non-Tampa
 * facts that name rats or rodents: a UF rat lungworm survey, a USF thesis, the
 * Hillsborough River State Park plan, and county renter, trash, sewer, working cat
 * and DOH-Hillsborough pages. Sourced below.
 */
const HCFL = "https://hcfl.gov/";
const RISK = "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/animal-risk-assessment/";
const LUNGWORM = "https://pmc.ncbi.nlm.nih.gov/articles/PMC5436845/";
const PARK_PLAN = "https://floridadep.gov/sites/default/files/HRSP_06.12.2020%20Approved%20UMP_JA.pdf";

export const ratRemovalHillsboroughCounty = servicePlacePage({
  service: "rat-removal",
  animal: "Rat",
  animals: "Rats",
  place: "hillsborough-county-fl",
  placeName: "Hillsborough County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-hillsborough-county",
  heroText: "Rats in the attic, walls or garage in Brandon, Riverview, Plant City or elsewhere in Hillsborough County? We find how they get in, close those gaps, trap the rats inside and clean up. Call (727) 594-7705.",
  answerHeading: "Who handles rats in a Hillsborough County home?",
  answer:
    "Rats inside a Hillsborough County home are a job for a private company, and in a rental, the county's renter guide lists exterminating rodents among the landlord's duties. Pro Wildlife Removal finds the gaps rats use, seals them, traps the rats still inside and cleans up what they leave. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Rentals: rodents are the landlord's job", "Rat lungworm found in county rats"],
  localHeading: "Rat research and rules in Hillsborough County",
  localIntro: "These facts about rats and rodents in Hillsborough come from UF and USF research, a state park plan, county departments and DOH-Hillsborough.",
  local: [
    { icon: "search", title: "Rat lungworm in county rats", text: p("A survey published in PLoS ONE in 2017 found the rat lungworm parasite in black rats from three of six Florida counties studied, Hillsborough among them. Of 87 black rats collected in Hillsborough in 2013 to 2015, 30 tested positive.") },
    { icon: "users", title: "USF looked too", text: p("A 2018 USF thesis tested snails from Hillsborough County for rat lungworm; none of its samples tested positive.") },
    { icon: "leaf", title: "Non-native rats at the state park", text: p("The 2020 plan for Hillsborough River State Park lists the Norway rat and the black rat among the park's rodents, both marked as non-native species.") },
    { icon: "home", title: "Rentals: the landlord's list", text: p("Hillsborough County's renter and landlord guide includes \"Exterminate insects and rodents\" in its list of landlord rights and responsibilities.") },
    { icon: "map-pin", title: "Vermin in business dumpsters", text: p("For commercial trash service, county Code Enforcement may follow up on Solid Waste site visits that find persistent nuisance conditions in collection containers, vermin and pests included.") },
    { icon: "drop", title: "Broken sewers let rodents in", text: p("County Water Resources says its sewer smoke testing won't smoke rodents out, but it can help find broken building sewers where rodents could get in.") },
    { icon: "critter", title: "Working cats", text: p("The county's Working Cats Program places shelter cats at barns, warehouses, sheds and similar sites with the adoption fee waived, billing them as free rodent control.") },
    { icon: "phone", title: "Low rabies risk", text: p("DOH-Hillsborough's animal risk page puts wild rodents and pet rats in its low-risk group for rabies, apart from high-risk animals such as raccoons and bats.") },
  ],
  contactsHeading: "Hillsborough contacts for rental rats, rat bites and home rats",
  contactsIntro: "Hillsborough renters, people bitten by a rat and homeowners each have a different first call, per the county's and DOH-Hillsborough's own pages.",
  contacts: [
    { icon: "home", title: "Rats in a rental", text: p("Start with your landlord. The county's renter guide lists exterminating rodents as a landlord responsibility.") },
    { icon: "phone", title: "Bitten by a rat", text: p("Report any animal bite to DOH-Hillsborough at 813-307-8059.") },
    { icon: "users", title: "Rats in your own home", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "rats-in-attic", label: "Rats in the attic" },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Hillsborough County rat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Does a Hillsborough County landlord have to deal with rats in my rental?",
      "Hillsborough County's renter and landlord guide lists exterminating insects and rodents among the landlord's responsibilities.",
    ),
    faq(
      "Can rats get into a Hillsborough home through the sewer line?",
      "County Water Resources says its sewer smoke testing can help find broken building sewers where rodents could enter.",
    ),
    faq(
      "Do rats in Hillsborough County carry rabies?",
      "DOH-Hillsborough lists wild rodents and pet rats as low-risk animals for rabies. Any bite should still be reported to DOH-Hillsborough at 813-307-8059.",
    ),
    faq(
      "Can I adopt a barn cat for rats in Hillsborough County?",
      "Yes. The county's Working Cats Program places shelter cats at barns, farms, warehouses and similar spots with the adoption fee waived.",
    ),
    faq(
      "How fast can you check a Hillsborough County home for rats?",
      "Same-day appointments for rats are often available in Hillsborough County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a rat call in Hillsborough County]",
    ),
  ],
  ctaHeading: "Rats in your Hillsborough County home?",
  ctaText: "Rats in the attic or walls of a Hillsborough home? Call (727) 594-7705.",
  seo: {
    title: "Rat Removal in Hillsborough County | Pro Wildlife Removal",
    description:
      "Rat removal in Hillsborough County, FL: entry gaps sealed, rats trapped and cleaned up in Brandon, Riverview and Plant City homes. Call (727) 594-7705 now.",
  },
  sources: [
    { title: "Stockdale Walden et al., PLoS ONE, May 18, 2017: Geographic distribution of Angiostrongylus cantonensis in wild rats (Rattus rattus) and terrestrial snails in Florida (rats collected 2013 to 2015; 171 black rats necropsied; positives in 3 of 6 counties, including Hillsborough; Hillsborough 87 examined, 30 positive)", url: LUNGWORM },
    { title: "USF Digital Commons: 2018 thesis on rat lungworm surveillance in Hillsborough County (snails tested; no samples positive)", url: "https://digitalcommons.usf.edu/etd/7216" },
    { title: "Florida DEP: Hillsborough River State Park unit management plan, approved June 12, 2020 (rodents include Norway rat and black rat, marked non-native)", url: PARK_PLAN },
    { title: "Hillsborough County: Renters and landlords rights and responsibilities (landlord: exterminate insects and rodents)", url: `${HCFL}residents/property-owners-and-renters/renters-and-landlords/renters-and-landlords-rights-and-responsibilities` },
    { title: "Hillsborough County: Commercial trash service (Code Enforcement may follow up on persistent nuisance conditions in collection containers, such as vermin/pests)", url: `${HCFL}businesses/small-business-support/commercial-property-owner/commercial-trash-service` },
    { title: "Hillsborough County Water Resources: Smoke testing (helps detect broken building sewers where rodents could enter)", url: `${HCFL}residents/property-owners-and-renters/water-and-sewer/smoke-testing` },
    { title: "Hillsborough County: Working Cats Program (barns, warehouses, sheds; adoption fee waived; free rodent control)", url: `${HCFL}residents/animals-and-pets/adopt-a-dog-or-cat/working-cats-program` },
    { title: "DOH-Hillsborough: Animal risk assessment (low-risk animals include wild rodents and pet rats)", url: RISK },
    { title: "DOH-Hillsborough: Report an animal bite (813-307-8059)", url: "https://hillsborough.floridahealth.gov/programs-and-services/environmental-public-health/animal-bites-and-scratches/report-an-animal-bite/" },
  ],
  clientQuestions: ["Typical response time for a rat call in Hillsborough County?", "A real Google review from a Hillsborough County rat job (TTR-723), and real Hillsborough rat job photos."],
});
