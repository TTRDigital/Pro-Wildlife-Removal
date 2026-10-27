import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, ul } from "../pt.ts";
import { countyGroups } from "../areas.ts";

/*
 * Rat removal. Target searches: "rat removal Tampa", "rats in attic".
 * Replaces today's three rat pages (rat-removal, rat-control, rat-removal-tampa);
 * Wade decides which URLs redirect here.
 */

const CALL = { label: "Call (844) 264-6254", href: "tel:+18442646254" };
const ENY224 = "https://journals.flvc.org/edis/article/view/136514";
const GADSDEN = "https://gadsden.floridahealth.gov/programs-and-services/environmental-health/rodent-control/";
const SANTAROSA = "https://blogs.ifas.ufl.edu/santarosaco/2016/01/29/controlling-rats-and-mice-around-the-farm/";
const IN1397 = "https://ask.ifas.ufl.edu/publication/IN1397";
const PINELLAS = "https://blogs.ifas.ufl.edu/pinellasco/2022/07/25/management-of-rodents/";
const IRDOH = "https://indianriver.floridahealth.gov/wp-content/uploads/sites/32/2025/05/Rodent_Control_Booklet.pdf";

export const ratRemoval: Service = {
  slug: "rat-removal",
  title: "Rat Removal",
  group: "removal",
  animal: "rat",
  order: 2,
  summary: "Roof rats out of the attic: every entry point sealed and the rats left inside trapped.",
  cardImage: images.ratRemoval2,
  design: "new",
  hero: {
    eyebrow: "RAT REMOVAL AND RODENT-PROOFING",
    heading: "Rat Removal in Central Florida",
    highlight: "Rat Removal",
    text: p("Scratching in the ceiling at night? We find how the rats get in, close every gap and trap the ones still inside."),
    image: images.ratRemoval2,
    badges: ["Entry points sealed", "Rats trapped inside"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "How do you get rid of rats in the attic in Florida?",
      text: p(
        "Seal every gap a rat can use, then trap the rats left inside. Traps alone don't work while the openings stay open, because new rats keep coming in. In Florida it's usually roof rats, which climb trees and wires to reach the roof. Call (844) 264-6254 for an inspection.",
      ),
      points: ["Usually roof rats", "Seal, then trap", "Half-inch gaps matter", "No poison first"],
    },
    {
      _type: "cardsSection",
      _key: "signs",
      eyebrow: "Signs",
      heading: "Signs you have rats",
      intro: p("Rats are active mostly at night, so many people never see one. They see what the rats leave behind. More on [rats in the attic](/services/rats-in-attic/)."),
      variant: "icon",
      columns: 3,
      cards: [
        {
          icon: "sound",
          title: "Noises at night",
          text: p("Scratching, gnawing and scurrying in the ceiling or walls after dark. Squeaking from one spot can mean a nest of young."),
        },
        {
          icon: "droppings",
          title: "Droppings",
          text: p("Roof rat droppings are up to half an inch long and pointed at the ends. Fresh ones are black and shiny. Old ones turn gray and crumble. Look in the attic, along walls and in the back of cabinets."),
        },
        {
          icon: "drop",
          title: "Greasy rub marks",
          text: p("Rats use the same paths again and again, and the oil in their fur leaves dark, greasy rub marks on walls, beams, pipes and wires and around the holes they use."),
        },
        {
          icon: "wrench",
          title: "Chewed wires and wood",
          text: p("Fresh gnawing on wood is light-colored with sharp, splintery edges. Check attic wiring, the edges of beams, soffit vents and A/C line covers."),
        },
        {
          icon: "leaf",
          title: "Half-eaten fruit",
          text: p("Florida DOH says roof rats are known for hollowing out citrus fruit in trees or on the ground. Gnawed oranges on the tree or under it mean rats nearby, often with a short trip to your roof."),
        },
        {
          icon: "search",
          title: "Burrows by the foundation",
          text: p("Norway rats dig. Florida DOH says they burrow under buildings and beneath concrete slabs. UF/IFAS describes burrow openings of about 3 inches, with fresh dirt scattered in front and worn runways leading in."),
        },
      ],
    },
    {
      _type: "splitSection",
      _key: "risks",
      tone: "tint",
      eyebrow: "Why it matters",
      heading: "Why rats in the attic can't wait",
      body: rich(
        p("A few rats become a lot of rats fast. Florida DOH says roof rats can have up to 8 litters a year, each with 6 to 8 young, and the young become sexually active 2 to 3 months after birth."),
        ul(
          "**Fire risk.** A rat's front teeth never stop growing, so it gnaws to keep them short. Florida DOH notes rats can cause fires by chewing through the insulation on electrical wires.",
          "**Disease.** The CDC says rodents spread disease through their droppings, urine, saliva and bites. Rat-bite fever spreads through bites, scratches, or contact with a rodent's saliva or urine, and it needs fast treatment.",
          "**Damage.** Gnawed rafters and wiring, nests in the insulation, and droppings and urine spread through it.",
        ),
      ),
      imageSide: "right",
    },
    {
      _type: "cardsSection",
      _key: "process",
      eyebrow: "How we remove rats",
      heading: "Seal first, then trap",
      intro: p("UF/IFAS says rodent-proofing must block all possible entry points to work. It lists sealing as the first step and trapping as the last. That's the order we follow."),
      variant: "numbered",
      columns: 4,
      cards: [
        {
          number: "1",
          title: "Inspect top to bottom",
          text: p(
            "A rat fits through a crack half an inch wide. We check the roofline, gable and soffit vents, roof returns, plumbing stacks, A/C line openings, garage door corners and where pipes enter the walls, and we look for the branches and wires the rats use to reach the roof.",
          ),
        },
        {
          number: "2",
          title: "Seal every entry",
          text: p(
            "Openings are closed with rodent-resistant materials: sheet metal, hardware cloth with quarter-inch mesh, mortar or concrete. Spray foam isn't on that list.",
          ),
        },
        {
          number: "3",
          title: "Trap the rats inside",
          text: p(
            "With the doors closed, the rats left in the attic are trapped where they travel. Traps are checked on a schedule until the activity stops.",
            "[PLACEHOLDER: ask the client: what traps you use and how often a technician comes back to check them]",
          ),
        },
        {
          number: "4",
          title: "Check the seals",
          text: p(
            "Rats test new seals in the first couple of weeks, so the work is checked and any break is fixed.",
          ),
        },
      ],
    },
    {
      _type: "proseSection",
      _key: "rules",
      tone: "tint",
      eyebrow: "Florida rules",
      heading: "What Florida's rules mean for rats",
      body: rich(
        ul(
          "**Rats can't be released.** Roof rats and Norway rats aren't native to Florida, and FWC says non-native wildlife may not be relocated or released. A rat caught alive can't be let go somewhere else.",
          "**Poison is a last resort.** UF/IFAS Extension says rodenticides should only be used in tamper-resistant bait stations, away from children and pets, and only EPA-registered products.",
          "**Skip the glue boards.** UF/IFAS calls glue traps inhumane, and the CDC says glue and live traps can scare rodents into urinating, which raises the risk of illness.",
        ),
        p(
          "That's why we lean on sealing rather than poison. More in [rat exclusion and preventing reinfestation](/blog/rat-exclusion-prevent-reinfestation-and-damage/).",
        ),
      ),
    },
    {
      _type: "splitSection",
      _key: "sealing",
      eyebrow: "After the rats",
      heading: "Rat droppings: what the CDC says",
      body: p(
        "Rat droppings and urine can carry germs, and sweeping or vacuuming them puts dust in the air. The CDC's advice is to wet droppings with a disinfectant or a bleach solution first, wait five minutes, then pick them up with paper towels. In an attic with years of droppings through the insulation, that is work for protective gear and respirators.",
      ),
      checklist: [
        "Droppings, nests and soiled insulation shown to you in the inspection",
        "Chewed wiring pointed out so an electrician can check it",
        "[PLACEHOLDER: ask the client: is there a warranty on rat exclusion work, and how long?]",
      ],
      imageSide: "left",
    },
    {
      _type: "cardsSection",
      _key: "cost",
      tone: "tint",
      eyebrow: "Cost",
      heading: "What rat removal costs depends on",
      intro: p(
        "We price rat jobs after the inspection, once we know how many openings there are and how hard they are to reach. See [what drives wildlife removal costs](/blog/how-much-does-wildlife-removal-cost/) for more.",
      ),
      variant: "plain",
      columns: 2,
      cards: [
        { title: "Number of entry points", text: p("A tile roof with many gaps takes more sealing than a shingle roof with one bad vent.") },
        { title: "Size of the house and roof", text: p("More roofline and more vents mean more to inspect and close.") },
        { title: "Trapping visits", text: p("How long it takes to clear the rats left inside after sealing.") },
        { title: "Attic condition", text: p("What the inspection finds in the insulation and wiring.") },
      ],
      outro: p("The rat inspection is free. We walk the roofline and attic, then give you the price before any work starts."),
    },
    {
      _type: "areasSection",
      _key: "areas",
      eyebrow: "Areas served",
      heading: "Rat removal in all 8 counties",
      intro: p("From coastal Pinellas to inland Polk, we rat-proof homes across central and west Florida on one number, (844) 264-6254."),
      groups: countyGroups,
    },
    {
      _type: "reviewsSection",
      _key: "reviews",
      match: "rat",
      eyebrow: "Reviews",
      heading: "From customers who had rats",
    },
    {
      _type: "faqSection",
      _key: "faq",
      eyebrow: "FAQ",
      heading: "Rat removal questions",
      items: [
        faq(
          "Looking for a rat exterminator near me?",
          "Pro Wildlife Removal is a rat removal company rather than an exterminator, and there's no spraying. We find the openings the rats use, trap the ones inside and seal those entry points, so the house is closed to the next ones. Call (844) 264-6254.",
        ),
        faq(
          "Are they roof rats or Norway rats?",
          "In an attic, almost always roof rats. Florida DOH describes roof rats as good climbers that nest in trees and plants but generally like high places such as attics, with a tail longer than the body. Norway rats burrow under buildings and beneath concrete slabs. UF/IFAS adds that Norway rats are heavier and found mainly along Florida's coasts and canals. Florida DOH says the two sometimes live together, though roof rats like to be up high. More in [Norway rat vs roof rat](/blog/norway-rat-vs-roof-rat-florida/).",
        ),
        faq(
          "How small a hole can a rat get through?",
          "UF/IFAS says a rat can squeeze through a crack half an inch wide, and a mouse through a quarter inch. Rats can also climb wires and pipes, and jump from a branch to a roof. See [how big of a hole does a rat need](/blog/how-big-of-a-hole-does-a-rat-need/).",
        ),
        faq(
          "Why do the rats keep coming back after I trap them?",
          "Because the way in is still open. Trapping removes the rats inside, and new ones find the same gaps. The openings have to be sealed with materials rats can't chew.",
        ),
        faq(
          "Should I put out poison?",
          "We don't recommend it as a first step. UF/IFAS Extension calls rodenticides a last resort, to be used only in tamper-resistant stations away from children and pets. Poison also does nothing about the holes.",
        ),
        faq(
          "I saw a rat during the day. Is that bad?",
          "Usually it means more rats than you think. Rats are most active at night, and UF/IFAS says rodents seen again and again by day point to an established population. Florida DOH says Norway rats come out in daylight when numbers are high, when they're disturbed, or when their food source is threatened. UF/IFAS has also linked daytime sightings to sick or poisoned rats.",
        ),
        faq(
          "How long does it take to get rid of rats?",
          "The sealing is usually done first, then the trapping runs until no more rats are caught and no new signs show up. UF/IFAS advises checking the seals often in the first two weeks, when rats look for weak spots.",
          "[PLACEHOLDER: ask the client: how long a typical rat job takes]",
        ),
        faq(
          "Is it safe to clean up rat droppings myself?",
          "For a few droppings, follow the CDC's steps: air the space out for 30 minutes, wear gloves, soak the droppings in disinfectant or 1 part bleach to 9 parts water, wait five minutes, then wipe them up with paper towels. Never sweep or vacuum them. For a whole attic, call us.",
        ),
        faq(
          "Can I catch the rat alive and let it go?",
          "No. Rats aren't native to Florida, and FWC doesn't allow non-native animals to be released. UF/IFAS Extension also advises against live-trapping and releasing rats.",
        ),
      ],
    },
    {
      _type: "postsSection",
      _key: "related",
      eyebrow: "Read more",
      heading: "Rat guides",
      limit: 3,
      match: "rat",
    },
    {
      _type: "ctaSection",
      _key: "cta",
      heading: "Rats in the attic tonight?",
      highlight: "tonight?",
      text: p("Call (844) 264-6254. We'll find how they're getting in and close it."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Rat Removal in Central Florida | Pro Wildlife Removal",
    description:
      "Roof rats in the attic or walls? We find and seal every entry point, then trap the rats left inside, in homes across Central Florida. Call (844) 264-6254.",
  },
  sources: [
    { title: "Florida DOH Gadsden: Rodent control (roof rats up to 8 litters a year of 6-8 young, sexually active 2-3 months after birth; good climbers, nest in trees but like high places such as attics; tail longer than body; sometimes live with Norway rats but stay up high; hollow out citrus fruit; Norway rats burrow under buildings and concrete slabs, out by day when numbers are high, when disturbed or when food is threatened; teeth kept short by gnawing; grease stains from fur on pipes, wires and around entrance holes)", url: GADSDEN },
    { title: "UF/IFAS Extension Santa Rosa: Controlling rats and mice around the farm (most active at night; rodents seen repeatedly by day mean an established population; holes as small as 1/2 inch for rats, 1/4 inch for mice; climb pipes, wires, vines and trees; rodent-proofing must block all possible entry points; seal with mortar, concrete, sheet metal or hardware cloth; rodent-proofing first, trapping last)", url: SANTAROSA },
    { title: "UF/IFAS EDIS IN1397: Landscaping methods to prevent pests from entering your home (rats use limbs as a highway into the house; roof rats jump three feet up and more than four feet across)", url: IN1397 },
    { title: "UF/IFAS Extension Pinellas: Management of rodents, July 25, 2022 (block entryways with rodent-resistant materials)", url: PINELLAS },
    { title: "Florida DOH Indian River: Rodent control booklet (rev. 2008; dark, greasy rub marks from fur oil on walls and wooden beams; fires from chewing the insulation on electrical wires)", url: IRDOH },
    { title: "UF/IFAS EDIS ENY-224: Rat and Mouse Control (2013, archived; roof rat droppings up to 1/2 inch and pointed; fresh vs old droppings and gnawing; Norway rat burrow openings about 3 inches with fresh dirt and runways; Norway rats heavier, most common along coasts and canals; check seals often in the first 2 weeks; sick or poisoned rats out by day)", url: ENY224 },
    { title: "UF/IFAS Extension Sarasota County: What to do about rodents (snap traps recommended; glue traps inhumane; rodenticides last resort in tamper-resistant stations; don't live-trap and release rats)", url: "https://blogs.ifas.ufl.edu/sarasotaco/2026/08/12/wondering-about-wildlife-rodents/" },
    { title: "FWC: FAQs, nuisance wildlife (non-native wildlife may not be released or relocated)", url: "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/" },
    { title: "CDC: Controlling wild rodent infestations (diseases via droppings, urine, saliva, bites)", url: "https://www.cdc.gov/healthy-pets/rodent-control/index.html" },
    { title: "CDC: How to trap up (glue and live traps can make rodents urinate)", url: "https://www.cdc.gov/healthy-pets/rodent-control/trap-up.html" },
    { title: "CDC: How to clean up after rodents (ventilate 30 min, gloves, bleach 1:9, 5 minutes, no sweeping or vacuuming)", url: "https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html" },
    { title: "CDC: About rat bite fever (spread by bites, scratches, saliva or urine; must be treated quickly)", url: "https://www.cdc.gov/rat-bite-fever/about/index.html" },
  ],
  clientQuestions: [
    "Which traps do you use for rats, and how often does a technician come back to check them?",
    "How long does a typical rat job take, from sealing to the last check?",
    "Is there a warranty on rat exclusion work, and for how long?",
    "Can the site show a price range for rat removal?",
    "Real photos: a sealed roof return or vent, rub marks or droppings in a client attic, attic cleanup.",
  ],
};
