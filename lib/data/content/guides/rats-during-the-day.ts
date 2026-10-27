import type { Post } from "../../../types";
import { faq, h3, p, rich, ul } from "../pt.ts";

/* Guide (Ben's pick, Oct 26): do rats come out during the day? Common question; site query "do rats stay away from humans". */
const SANTAROSA = "https://blogs.ifas.ufl.edu/santarosaco/2016/01/29/controlling-rats-and-mice-around-the-farm/";
const DOH = "https://gadsden.floridahealth.gov/programs-and-services/environmental-health/rodent-control/";
const CDC = "https://www.cdc.gov/healthy-pets/rodent-control/index.html";

export const ratsDuringTheDay: Post = {
  slug: "do-rats-come-out-during-the-day",
  title: "Do Rats Come Out During the Day? What a Daytime Rat Means",
  excerpt:
    "Rats are mostly night animals, so seeing one in daylight tells you something. Here's what UF/IFAS and Florida DOH say a daytime rat can mean, and what to do next.",
  date: "2026-10-26T00:00:00+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Josh Holmberg",
  body: rich(
    p(
      "**The short answer:** sometimes, and it's worth noticing. Rats are mainly active at night, so UF/IFAS says rodents seen again and again in daylight are a sign of an established population. Florida DOH says Norway rats may come out by day when numbers are high, when they're disturbed, or when food is threatened. Call (844) 264-6254.",
    ),
    h3("When rats are normally active"),
    p(
      `Florida DOH says roof rats, the climbers that favor attics, are most active in the hour after sunset and the hour before dawn, and that Norway rats are mainly nocturnal and start moving about dusk ([Florida DOH](${DOH})). UF/IFAS Extension notes that because rats are busiest at night, droppings and urine stains are usually the first signs people find, not the rats themselves ([UF/IFAS](${SANTAROSA})).`,
    ),
    h3("Why you might see one by day"),
    ul(
      `**Crowding.** Florida DOH says some Norway rats come out in daylight when the population is high ([Florida DOH](${DOH})). UF/IFAS puts it plainly: rodents seen repeatedly during the day point to an established population.`,
      "**Disturbance.** DOH lists disturbance such as a change in the weather or construction nearby as another reason rats show up by day.",
      "**Food under threat.** DOH also names a threatened food source. That could be a cleaned-out shed, a new trash routine or a neighbor's cleanup.",
    ),
    h3("What to check next"),
    ul(
      `**Droppings,** especially fresh ones after you've cleaned. The CDC says droppings that show up again after cleaning mean rats are still active ([CDC](${CDC})).`,
      "**Gnaw marks and grease stains** along pipes, wires and the holes rats use, which Florida DOH lists among the signs of an infestation.",
      "**Noise at night** in the attic or walls, the hours rats are normally out.",
      "**Food sources:** pet food, bird seed, fallen fruit and garbage within reach.",
    ),
    p("Our guides to [signs your house has rats](/blog/signs-that-your-house-has-rats/), [rats in the attic](/blog/rats-in-attic-signs/) and [what animal is in your attic](/blog/what-animal-is-in-my-attic/) help confirm it."),
    h3("What to do about it"),
    p(
      `One daytime sighting doesn't prove an infestation, but repeated ones usually mean there are more rats than you're seeing. UF/IFAS Extension describes three steps: rodent-proofing that blocks all possible entry points, sanitation, then reducing the population with traps and baits ([UF/IFAS](${SANTAROSA})). Our guides on [how to catch a rat in the house](/blog/how-to-catch-a-rat-in-the-house-a-comprehensive-guide-for-florida-homeowners/) and [how fast rats reproduce](/blog/how-fast-do-rats-reproduce/) explain why waiting makes it harder. See [rat removal](/services/rat-removal/), or call (844) 264-6254.`,
    ),
  ),
  faq: [
    faq(
      "Is it bad if I see a rat during the day?",
      "It can be a warning sign. UF/IFAS Extension says rodents seen repeatedly during the day indicate an established population, because rats are mainly active at night.",
    ),
    faq(
      "Why would a rat come out in daylight?",
      "Florida DOH says Norway rats may be active by day when the population is high, when they're disturbed by things like weather changes or construction, or when their food source is threatened.",
    ),
    faq(
      "What time are roof rats most active?",
      "Florida DOH says roof rats are most active one hour after sunset and one hour before dawn.",
    ),
    faq(
      "Do rats stay away from people?",
      "They're mostly active when people are asleep, which is why droppings and gnaw marks are usually found before the rats. A rat seen often in daylight is a reason to look for an infestation.",
    ),
  ],
  seo: {
    title: "Do Rats Come Out During the Day? | Pro Wildlife Removal",
    description:
      "Do rats come out during the day? What UF/IFAS and Florida DOH say a daytime rat can mean, why rats show up in daylight, and what to check and do next.",
  },
  sources: [
    { title: "UF/IFAS Extension Santa Rosa: Controlling rats and mice around the farm (droppings or urine stains usually the first signs because rats are active at night; rodents seen repeatedly during the day indicate an established population; block all possible entry points)", url: SANTAROSA },
    { title: "Florida DOH Gadsden: Rodent control (roof rats most active one hour after sunset and one hour before dawn; Norway rats primarily nocturnal, active about dusk; some active by day when population is high, when disturbed, or when food is threatened; gnawing and grease stains)", url: DOH },
    { title: "CDC: Controlling wild rodent infestations (droppings present after cleaning indicate active rodent presence)", url: CDC },
  ],
  clientQuestions: [],
};
