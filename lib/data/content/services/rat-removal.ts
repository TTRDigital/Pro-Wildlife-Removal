import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, ul } from "../pt.ts";
import { countyGroups } from "../areas.ts";

/*
 * Rat removal. Target searches: "rat removal Tampa", "rats in attic".
 * Replaces today's three rat pages (rat-removal, rat-control, rat-removal-tampa);
 * Wade decides which URLs redirect here.
 */

const CALL = { label: "Call (727) 594-7705", href: "tel:+17275947705" };
const ENY224 = "https://journals.flvc.org/edis/article/view/136514";

export const ratRemoval: Service = {
  slug: "rat-removal",
  title: "Rat Removal",
  group: "removal",
  animal: "rat",
  order: 2,
  summary: "Roof rats out of the attic: every entry point sealed, the rats left inside trapped, and the droppings cleaned up.",
  cardImage: images.ratRemoval2,
  design: "new",
  hero: {
    eyebrow: "RAT REMOVAL AND RODENT-PROOFING",
    heading: "Rat Removal in Tampa Bay",
    highlight: "Rat Removal",
    text: p("Scratching in the ceiling at night? We find how the rats get in, close every gap, trap the ones still inside and clean the attic."),
    image: images.ratRemoval2,
    badges: ["Entry points sealed", "Attic cleanup"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "How do you get rid of rats in the attic in Florida?",
      text: p(
        "Seal every gap a rat can use, then trap the rats left inside. Traps alone don't work while the openings stay open, because new rats keep coming in. In Florida it's usually roof rats, which climb trees and wires to reach the roof. Call (727) 594-7705 for an inspection.",
      ),
      points: ["Usually roof rats", "Seal, then trap", "Half-inch gaps matter", "No poison first"],
    },
    {
      _type: "cardsSection",
      _key: "signs",
      eyebrow: "Signs",
      heading: "Signs you have rats",
      intro: p("Rats are active mostly at night, so most people never see one. They see what the rats leave behind. More on [rats in the attic](/services/rats-in-attic/)."),
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
          text: p("Rats run the same paths every night, and their fur leaves dark, greasy smudges along walls, beams and the edges of the holes they use."),
        },
        {
          icon: "wrench",
          title: "Chewed wires and wood",
          text: p("Fresh gnawing on wood is light-colored with sharp, splintery edges. Check attic wiring, the edges of beams, soffit vents and A/C line covers."),
        },
        {
          icon: "leaf",
          title: "Half-eaten fruit",
          text: p("UF/IFAS notes roof rats live in citrus trees and gnaw the fruit. Gnawed oranges on the tree or under it mean rats nearby, often with a short trip to your roof."),
        },
        {
          icon: "search",
          title: "Burrows by the foundation",
          text: p("Norway rats dig. UF/IFAS describes burrows along walls and under slabs and rubbish, with about 3-inch openings, fresh dirt scattered in front and worn runways leading in."),
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
        p("A few rats become a lot of rats fast. UF/IFAS says a roof rat can have 6 to 8 young per litter and up to 6 litters a year, and the young can breed within 3 to 5 months."),
        ul(
          "**Fire risk.** Rats gnaw every day to keep their teeth short, and UF/IFAS notes they can start fires by chewing electrical wires.",
          "**Disease.** The CDC says rodents spread disease through their droppings, urine, saliva and bites. Rat-bite fever spreads through bites, scratches, or contact with a rodent's saliva or urine, and it needs fast treatment.",
          "**Damage.** Gnawed rafters and wiring, nests in the insulation, and droppings and urine spread through it.",
        ),
      ),
      image: images.post1776984146059,
      imageSide: "right",
    },
    {
      _type: "cardsSection",
      _key: "process",
      eyebrow: "How we remove rats",
      heading: "Seal first, then trap",
      intro: p("UF/IFAS says rodent-proofing has to block every possible entry point to work, and that the rats shut inside then have to be removed. That's the order we follow."),
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
          title: "Check the seals, then clean",
          text: p(
            "Rats test new seals in the first couple of weeks, so the work is checked and any break is fixed. Then droppings, nests and soiled insulation come out and the attic is sanitized.",
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
      eyebrow: "Cleanup",
      heading: "Cleaning up after rats",
      body: p(
        "Rat droppings and urine can carry germs, and sweeping or vacuuming them puts dust in the air. The CDC's advice is to wet droppings with a disinfectant or a bleach solution first, wait five minutes, then pick them up with paper towels. In an attic, with years of droppings through the insulation, that means protective gear, respirators and often new insulation.",
      ),
      checklist: [
        "Droppings, nests and soiled insulation removed",
        "Attic surfaces disinfected",
        "Insulation replaced where it was contaminated",
        "Chewed wiring pointed out so an electrician can check it",
        "[PLACEHOLDER: ask the client: is there a warranty on rat exclusion work, and how long?]",
      ],
      image: images.post1776984146059,
      imageSide: "left",
    },
    {
      _type: "cardsSection",
      _key: "cost",
      tone: "tint",
      eyebrow: "Cost",
      heading: "What rat removal costs depends on",
      intro: p(
        "We price rat jobs after the inspection, once we know how many openings there are and how much cleanup the attic needs. See [attic wildlife cleanup costs in Florida](/blog/attic-wildlife-cleanup-cost-in-florida-prices-tips/) for more.",
      ),
      variant: "plain",
      columns: 2,
      cards: [
        { title: "Number of entry points", text: p("A tile roof with many gaps takes more sealing than a shingle roof with one bad vent.") },
        { title: "Size of the house and roof", text: p("More roofline and more vents mean more to inspect and close.") },
        { title: "Trapping visits", text: p("How long it takes to clear the rats left inside after sealing.") },
        { title: "Attic cleanup", text: p("From a light cleanup to removing and replacing all the insulation.") },
      ],
      outro: p("[PLACEHOLDER: ask the client: is the inspection free, and can the site show a price range for rat removal?]"),
    },
    {
      _type: "areasSection",
      _key: "areas",
      eyebrow: "Areas served",
      heading: "Rat removal in all 9 counties",
      intro: p("From coastal Pinellas to inland Polk, we rat-proof homes across central and west Florida. Call your county's line."),
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
          "Are they roof rats or Norway rats?",
          "In an attic, almost always roof rats. UF/IFAS describes roof rats as climbers that nest off the ground, in attics, roof spaces and palm trees, with a tail longer than the head and body. Norway rats are heavier, burrow under slabs and rubbish, and are most common along Florida's coasts and canals. The two are seldom found in the same building. More in [Norway rat vs roof rat](/blog/norway-rat-vs-roof-rat-florida/).",
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
          "Usually it means more rats than you think. UF/IFAS says daytime sightings point to a large population, a food shortage, or sick or poisoned rats, since rats are mostly active at night.",
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
      text: p("Call (727) 594-7705, 24 hours a day. We'll find how they're getting in and close it."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Rat Removal in Tampa Bay | Rats in the Attic | Pro Wildlife Removal",
    description:
      "Roof rats in the attic? We seal every entry point, trap the rats inside and clean up droppings and insulation, in Tampa Bay and 9 Florida counties. Call 24/7: (727) 594-7705.",
  },
  sources: [
    { title: "UF/IFAS EDIS ENY-224: Rat and Mouse Control (roof vs Norway rats; 6-8 young, up to 6 litters; sexual maturity 3-5 months; droppings; rub marks; gnawing; half-inch cracks; rodent-resistant materials; seal all entries, then remove rats inside; inspect first 2 weeks; mostly active at night; daytime sightings; wires and fires)", url: ENY224 },
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
    "Is the inspection free? Can the site show a price range for rat removal?",
    "Real photos: a sealed roof return or vent, rub marks or droppings in a client attic, attic cleanup.",
  ],
};
