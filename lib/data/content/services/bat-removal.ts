import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, ul } from "../pt.ts";
import { countyGroups } from "../areas.ts";

/*
 * Bat removal. Target searches: "bat removal Tampa", "bats in attic".
 * Replaces today's three bat pages (bat-removal, bat-control, bat-removal-tampa);
 * Wade decides which URLs redirect here.
 */

const CALL = { label: "Call (727) 594-7705", href: "tel:+17275947705" };

export const batRemoval: Service = {
  slug: "bat-removal",
  title: "Bat Removal",
  group: "removal",
  animal: "bat",
  order: 1,
  summary: "Legal bat exclusion with one-way doors, entry points sealed and guano cleaned up, outside Florida's maternity season.",
  cardImage: images.batRemoval2,
  design: "new",
  hero: {
    eyebrow: "BAT REMOVAL AND EXCLUSION",
    heading: "Bat Removal in Central Florida",
    highlight: "Bat Removal",
    text: p("Bats in the attic, soffit or tile roof, moved out the legal way: one-way doors, then every gap sealed and the guano cleaned up."),
    image: images.batRemoval2,
    badges: ["Exclusion, never poison", "Guano cleanup"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "How do you get bats out of a house in Florida?",
      text: p(
        "In Florida, bats are removed by exclusion: one-way devices on the exits let the bats fly out at night and stop them coming back, then the openings are sealed. It's legal from August 15 to April 15. Killing, trapping or poisoning bats is illegal. Call (727) 594-7705 for an inspection.",
      ),
      points: ["Exclusion only", "Aug 15 to April 15", "No poison or trapping", "Gaps sealed after"],
    },
    {
      _type: "cardsSection",
      _key: "signs",
      eyebrow: "Signs",
      heading: "Signs you have bats",
      intro: p("A colony can live in a roof for months before anyone notices. These are the clues, roughly in the order people spot them. More on [bats in the attic](/services/bats-in-attic/)."),
      variant: "icon",
      columns: 3,
      cards: [
        {
          icon: "sunset",
          title: "Bats leaving at dusk",
          text: p("Stand outside at sunset and watch the roofline. Bats dropping out of the same gap in a soffit, gable vent or roof tile, one after another, is the clearest sign of a roost."),
        },
        {
          icon: "droppings",
          title: "Droppings below a gap",
          text: p("Bat droppings, called guano, are black and dry. They pile up under the roost and below the openings bats use: on a lanai floor, a windowsill, a pool cage frame or the attic insulation."),
        },
        {
          icon: "drop",
          title: "Dark smudges at the opening",
          text: p("Bats use the same crack night after night, and the oils and dirt from their fur leave a light brown stain around it."),
        },
        {
          icon: "sound",
          title: "Rustling at dusk and dawn",
          text: p("Bats leave the roost around dusk and come back around dawn. That's when you're likely to hear light scratching or chirping in a wall or ceiling."),
        },
        {
          icon: "odor",
          title: "A strong smell",
          text: p("An established roost builds up droppings and urine, and the smell can reach the rooms below. FWC calls it a quality-of-life problem rather than a health hazard, but it doesn't go away until the guano does."),
        },
        {
          icon: "critter",
          title: "A bat inside the house",
          text: p("One bat in a bedroom may have come in through an open door. Two or more, or one that keeps coming back, points to a roost in the walls or attic."),
        },
      ],
    },
    {
      _type: "splitSection",
      _key: "risks",
      tone: "tint",
      eyebrow: "Why it matters",
      heading: "Bats are useful outdoors. Inside your walls, they're a problem.",
      body: rich(
        p(
          "Florida has 13 resident bat species, and all of them eat night-flying insects. The state protects them for good reason. The trouble starts when a colony moves into a building. Here is what the health agencies actually say, without the scare talk.",
        ),
        ul(
          "**Rabies.** Florida's Department of Health names raccoons and bats as the main wildlife sources of rabies in the state. Not all bats carry rabies, but the CDC warns that bat bites can be so small you may not know you were bitten.",
          "**Histoplasmosis.** This lung infection comes from a fungus that grows in soil mixed with bird and bat droppings, and people catch it by breathing in the spores. FWC notes that no case from bat guano in a building has been reported in Florida, and the CDC still recommends a respirator in a confined space with guano.",
          "**The house itself.** Bats don't chew or tear up a building the way rats and raccoons do. The damage is the guano piling up on the insulation, the stains and the smell.",
        ),
        p(
          "If you wake up with a bat in the room, or find one near a child or a pet, don't let it go. The CDC says to call your county health department or animal control first so the bat can be tested.",
        ),
      ),
      imageSide: "right",
    },
    {
      _type: "cardsSection",
      _key: "process",
      eyebrow: "How we remove bats",
      heading: "Bat removal is bat exclusion",
      intro: p("Bats can't be trapped and carried off like a raccoon. The colony has to leave on its own and find the door locked behind it. Here is how that works on your house."),
      variant: "numbered",
      columns: 4,
      cards: [
        {
          number: "1",
          title: "Find every opening",
          text: p(
            "We inspect the whole outside of the building, not just the gap you saw bats use: the roofline, soffits, vents, flashing and tile. Bats only need a small gap. Miss one, and the colony just moves to it.",
          ),
        },
        {
          number: "2",
          title: "Check the calendar",
          text: p(
            "If it's between April 16 and August 14, the pups may not be able to fly yet. We don't exclude in that window. We document the roost, close the openings bats aren't using, and book the exclusion for August 15 or after.",
          ),
        },
        {
          number: "3",
          title: "Install one-way doors",
          text: p(
            "Tubes or netting go on the active exits. Bats leave at dusk to feed and can't get back in. FWC requires the devices to stay up at least four nights, with overnight lows forecast at 50°F or warmer, so the bats are active and actually leave.",
          ),
        },
        {
          number: "4",
          title: "Seal and clean",
          text: p(
            "When no bats are left, the devices come down and the openings are sealed for good. Then the guano and soiled insulation come out and the attic is sanitized.",
          ),
        },
      ],
    },
    {
      _type: "proseSection",
      _key: "rules",
      tone: "tint",
      eyebrow: "Florida law",
      heading: "Florida's bat rules, in plain words",
      body: rich(
        ul(
          "**Bats can't be killed.** It's illegal under Florida Administrative Code rule 68A-4.001.",
          "**No poison, no pesticides, no fumigants.** Rule 68A-9.010 bans pesticides and poisons used to harm, kill or drive off bats, and FWC says fumigants are illegal on bats too.",
          "**No trapping or relocating.** FWC says capturing and moving bats is illegal and doesn't work anyway.",
          "**No exclusion in maternity season without a permit.** April 16 to August 14 is when most Florida bats give birth and raise their young. April 15 is the last legal day without a permit, and exclusion opens again on August 15.",
          "**Exclusion has to be done right.** Devices on the key exits, left up at least four nights, with overnight lows forecast at 50°F or above.",
          "**Don't seal bats in.** A bat that can't get out dies inside the wall or attic, and then you have a smell and a second problem.",
        ),
        p(
          "Read FWC's own page on [bats in buildings](https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/), or our [homeowner's guide to Florida bat laws](/blog/florida-bat-laws-homeowner-guide/) and [bat maternity season guide](/blog/bat-maternity-season-guide/).",
        ),
      ),
    },
    {
      _type: "splitSection",
      _key: "sealing",
      eyebrow: "Sealing and cleanup",
      heading: "After the bats are out",
      body: p(
        "Getting the colony out is half the job. The other half is making sure it can't come back and that the attic is safe to be in. How much cleanup you need depends on how long the bats lived there: a few weeks leaves a little guano on top of the insulation, years can mean replacing it.",
      ),
      checklist: [
        "Every opening bats used, and the gaps next to them, sealed with materials that hold up to Florida weather",
        "Barrel tile, ridge vents and soffit returns closed where bats can slip under",
        "Guano and soiled insulation removed by technicians in respirators",
        "The area sanitized and deodorized",
        "Insulation replaced where it had to come out",
        "[PLACEHOLDER: ask the client: is there a warranty on bat exclusion work, and how long?]",
      ],
      image: images.batRemoval2,
      imageSide: "left",
    },
    {
      _type: "cardsSection",
      _key: "cost",
      tone: "tint",
      eyebrow: "Cost",
      heading: "What bat removal costs depends on",
      intro: p(
        "Every roof is different, so we price bat jobs after the inspection, before any work starts. These are the things that move the price. For more, see [attic wildlife cleanup costs in Florida](/blog/attic-wildlife-cleanup-cost-in-florida-prices-tips/).",
      ),
      variant: "plain",
      columns: 2,
      cards: [
        { title: "How many exits the bats use", text: p("Each active exit needs a one-way device, and each other gap needs sealing.") },
        { title: "How high and how hard to reach", text: p("A single-story ranch is quicker than a two-story house with a steep tile roof.") },
        { title: "How long the colony has been there", text: p("A new roost leaves little behind. An old one can mean a full insulation replacement.") },
        { title: "Repairs", text: p("Rotted fascia, broken soffit panels or cracked tile have to be fixed before they can be sealed.") },
      ],
      outro: p("We inspect for bats free of charge and quote the exclusion before any work begins.", "[PLACEHOLDER: ask the client: can the site show a price range for bat exclusion?]"),
    },
    {
      _type: "areasSection",
      _key: "areas",
      eyebrow: "Areas served",
      heading: "Bat removal across Central Florida",
      intro: p("We exclude bats from homes, condos and businesses in all 8 counties, all on one number: (727) 594-7705."),
      groups: countyGroups,
    },
    {
      _type: "reviewsSection",
      _key: "reviews",
      match: "bat",
      eyebrow: "Reviews",
      heading: "What customers say",
    },
    {
      _type: "faqSection",
      _key: "faq",
      eyebrow: "FAQ",
      heading: "Bat removal questions",
      items: [
        faq(
          "Is it legal to remove bats from my house in Florida?",
          "Yes, by exclusion, outside maternity season. From August 15 to April 15, one-way devices can be used to let bats leave and keep them out. Killing, trapping, relocating or poisoning bats is illegal at any time of year.",
        ),
        faq(
          "When is bat maternity season in Florida?",
          "April 16 through August 14. That's when most Florida bats give birth and raise pups that can't fly yet. Excluding the adults then would leave the pups to die inside, so exclusion isn't allowed in that window without an FWC permit.",
        ),
        faq(
          "I have bats in June. What can I do?",
          "Call for an inspection anyway. We can confirm it's bats, find all the openings, seal the ones the bats aren't using and put you first in line for August 15. Keep doors to the attic closed and don't try to block the bats' exit yourself.",
        ),
        faq(
          "Can I just seal the hole the bats use?",
          "Not while bats are inside. FWC warns that bats that don't get out before their exit is sealed die inside the building. Sealing comes after the one-way doors have done their job.",
        ),
        faq(
          "How long does bat exclusion take?",
          "The one-way devices stay up for at least four nights with lows of 50°F or warmer, as FWC requires, and often longer until no bats are left. Then the openings are sealed and cleanup can start.",
          "[PLACEHOLDER: ask the client: how long a typical bat job takes from first visit to final sealing]",
        ),
        faq(
          "What kind of bats live in Central Florida homes?",
          "FWC describes the Brazilian free-tailed bat as a bat commonly found in Florida buildings. Evening bats tuck into tight spots too, even the folds of a closed patio umbrella.",
        ),
        faq(
          "There's one bat in my living room. Do I have a colony?",
          "Not necessarily. A single bat can fly in through an open door, and FWC allows one bat in the living space to be removed at any time of year: close it into one room and open a window so it can leave. But if anyone may have touched it, or someone woke up with it in the room, the CDC says to call your county health department before letting it go, so it can be tested. If bats keep showing up, or you see them leave the roof at dusk, there's a roost.",
        ),
        faq(
          "Will a bat house get them out of my attic?",
          "No. FWC says a bat house isn't a substitute for exclusion. But it can help: put one up before the exclusion starts, close to the roost and in the bats' flight path, on a pole or a building rather than a tree, so the colony has somewhere else to go.",
        ),
      ],
    },
    {
      _type: "postsSection",
      _key: "related",
      eyebrow: "Read more",
      heading: "Bat guides",
      limit: 3,
      match: "bat",
    },
    {
      _type: "ctaSection",
      _key: "cta",
      heading: "Seeing bats leave your roof at dusk?",
      highlight: "at dusk?",
      text: p("Call (727) 594-7705. We'll inspect, tell you what the law allows this month and plan the exclusion."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Bat Removal in Central Florida | Pro Wildlife Removal",
    description:
      "Bats in the attic? Legal bat exclusion with one-way doors, sealing and guano cleanup across Central Florida, outside maternity season. (727) 594-7705.",
  },
  sources: [
    { title: "FWC news release, April 6, 2026: bat maternity season April 16 to Aug. 14; April 15 last day without a permit; exclusion legal Aug. 15 to April 15; four nights; 50°F", url: "https://myfwc.com/news/all-news/bat-maternity-0426/" },
    { title: "FWC: Bats in buildings (no poison, relocation illegal and ineffective, sealed-in bats die, no Florida histoplasmosis cases from guano in a building, CDC respirator advice)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/" },
    { title: "FWC and UF/IFAS brochure: A guide to living with bats (13 resident species eat night-flying insects; bats don't physically damage structures but cause stains and odors; light brown stains of oils and dirt; guano black and dry under the roost; one bat in the living space can be removed any time)", url: "https://myfwc.com/media/nu2fvsvj/livingwithbats.pdf" },
    { title: "FWC: Bats (illegal to kill, 68A-4.001; 68A-9.010 bans pesticides and poisons; Brazilian free-tailed bat common in buildings; evening bats in patio umbrellas; bat houses not a substitute for exclusion)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/" },
    { title: "CDC: Bats and rabies (bites can be tiny; don't release the bat until you talk with public health)", url: "https://www.cdc.gov/rabies/exposure/animals/bats.html" },
    { title: "CDC: About histoplasmosis (spores from soil mixed with bird and bat droppings)", url: "https://www.cdc.gov/histoplasmosis/about/index.html" },
    { title: "Florida Department of Health: Rabies (raccoons and bats are the main wildlife sources)", url: "https://www.floridahealth.gov/diseases-and-conditions/rabies/index.html" },
  ],
  clientQuestions: [
    "Is there a warranty on bat exclusion work, and for how long? (Today's bat-control page promises a written guarantee and free follow-up inspections: confirm or drop.)",
    "Can the site show a price range for bat exclusion? (Today's page says flat-rate pricing covering inspection, exclusion, cleanup, repairs and follow-up: confirm or drop.)",
    "How long does a typical bat job take from first visit to final sealing?",
    "Real photos: one-way devices installed on a client roof, a sealed tile roof, guano cleanup.",
  ],
};
