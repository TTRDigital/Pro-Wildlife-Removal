import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, table, ul } from "../pt.ts";

/*
 * Bats in the attic. Target searches: "bats in attic", "bats in attic Tampa".
 * Links to the bat removal service page in the first 150 words and back.
 */

const CALL = { label: "Call (727) 594-7705", href: "tel:+17275947705" };
const BROCHURE = "https://myfwc.com/media/nu2fvsvj/livingwithbats.pdf";
const RELEASE = "https://myfwc.com/news/all-news/bat-maternity-0426/";

export const batsInAttic: Service = {
  slug: "bats-in-attic",
  title: "Bats in the Attic",
  group: "attic",
  animal: "bat",
  order: 22,
  summary: "Bats in the attic: how to confirm a colony, what you can legally do this month, and how the guano gets cleaned up.",
  cardImage: images.batRemoval2,
  design: "new",
  hero: {
    eyebrow: "BATS IN THE ATTIC",
    heading: "Bats in the Attic in Tampa Bay",
    highlight: "Bats in the Attic",
    text: p("A colony in the attic needs a plan that fits Florida's calendar. Here's how to confirm it's bats, what the law allows right now, and what cleanup involves."),
    badges: ["Dusk watch", "Legal dates", "Guano cleanup"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "What do I do about bats in my attic in Florida?",
      text: p(
        "Confirm it with a dusk watch, then plan an exclusion: one-way devices let the bats out and keep them out, and the gaps are sealed after. From April 16 to August 14 that waits, unless FWC issues a permit. Never seal bats in. Details on [bat removal](/services/bat-removal/), or call (727) 594-7705.",
      ),
      points: ["Watch at dusk", "Exclude Aug 15 to April 15", "Never seal them in", "Clean the guano after"],
    },
    {
      _type: "cardsSection",
      _key: "signs",
      eyebrow: "Confirm it",
      heading: "How to confirm bats in your attic",
      intro: p("You don't need to go up into a hot, guano-filled attic to know. Most of this you can do from the yard."),
      variant: "icon",
      columns: 3,
      cards: [
        { icon: "sunset", title: "Do a dusk watch", text: p("Sit outside with a view of the roofline from a little before sunset. FWC's brochure says to look for bats at dawn or dusk as they leave or return to the roost. Note every spot they come out of.") },
        { icon: "droppings", title: "Find the guano", text: p("Black, dry droppings under the roost and below the openings, on a windowsill, the lanai floor or the attic insulation.") },
        { icon: "drop", title: "Spot the stains", text: p("Light brown smudges of oil and dirt around the gaps bats squeeze through.") },
        { icon: "odor", title: "Notice the smell", text: p("A strong smell from a long-used roost. FWC calls it a quality-of-life problem rather than a health hazard.") },
      ],
    },
    {
      _type: "cardsSection",
      _key: "sounds",
      eyebrow: "Listen",
      heading: "What a bat colony sounds like",
      intro: p("Bats are quieter than rats or raccoons. The timing is what gives them away."),
      variant: "plain",
      columns: 2,
      cards: [
        { title: "Around sunset", text: p("Light scratching or chirping as the colony stirs, then the bats leave the roost one after another to feed.") },
        { title: "Before sunrise", text: p("The bats return to the roost around dawn, and you may hear them rustle as they settle.") },
        { title: "Through the night", text: p("Mostly quiet. Florida's bats are out hunting night-flying insects.") },
        { title: "In the day", text: p("Bats are roosting, so the attic is mostly quiet. Steady daytime noise is more likely [squirrels](/services/squirrels-in-attic/).") },
      ],
    },
    {
      _type: "proseSection",
      _key: "calendar",
      tone: "tint",
      eyebrow: "The calendar",
      heading: "What you can do, month by month",
      body: rich(
        p("Florida's rules for bats in buildings come down to the date. These are from FWC's April 2026 announcement."),
        table(
          ["When", "What's allowed", "What to do"],
          ["August 15 to April 15", "Exclusion with one-way devices", "Book the exclusion. Devices stay up at least four nights with lows forecast at 50°F or warmer."],
          ["April 16 to August 14", "No exclusion without an FWC permit (maternity season)", "Get the inspection done, close gaps the bats don't use, and book the first legal date."],
          ["Any time", "Removing one bat from the living space", "Close it into one room and open a window. If anyone may have touched it, call the county health department first."],
        ),
        p("Killing, poisoning, trapping or relocating bats isn't allowed at any time of year. More in our [bat maternity season guide](/blog/bat-maternity-season-guide/)."),
      ),
    },
    {
      _type: "splitSection",
      _key: "risks",
      eyebrow: "Why it matters",
      heading: "Why a bat colony shouldn't stay in the attic",
      body: rich(
        p("FWC's brochure is clear that bats roosting in buildings don't physically damage the structure. The problems are what they leave and who they might meet."),
        ul(
          "**Guano on the insulation.** It builds up under the roost for as long as the colony stays, and the attic insulation is where it lands.",
          "**Breathing the dust.** The CDC says histoplasmosis comes from breathing spores of a fungus that grows in soil mixed with bird or bat droppings, and recommends a respirator in a confined space with guano. FWC notes no Florida case has been traced to guano in a building.",
          "**A bat in the house.** A colony in the attic can mean the odd bat in a bedroom. Not all bats carry rabies, but the CDC says bat bites can be tiny, so any contact needs a call to the health department.",
        ),
      ),
      imageSide: "right",
    },
    {
      _type: "cardsSection",
      _key: "urgent",
      eyebrow: "When it can't wait",
      heading: "Call right away if",
      variant: "icon",
      columns: 3,
      cards: [
        { icon: "critter", title: "Someone woke up with a bat", text: p("Don't let it go. The CDC says to call animal control or the health department so the bat can be captured and tested, because bat bites can be too small to notice.") },
        { icon: "home", title: "Bats keep turning up indoors", text: p("One bat can wander in through a door. Repeated bats in the living space mean the roost has a way into the house.") },
        { icon: "search", title: "A bat on the floor or in daylight", text: p("Never pick one up bare-handed. FWC's brochure says rabies in bats is rare, but bites are avoided by not touching them.") },
      ],
    },
    {
      _type: "cardsSection",
      _key: "timeline",
      tone: "tint",
      eyebrow: "What it usually takes",
      heading: "From the first call to a clean attic",
      variant: "numbered",
      columns: 5,
      cards: [
        { number: "1", title: "Inspection", text: p("Any time of year: confirm the colony, find every opening and check the guano.") },
        { number: "2", title: "Wait, if needed", text: p("Between April 16 and August 14, the exclusion waits for August 15 unless FWC issues a permit.") },
        { number: "3", title: "One-way devices", text: p("Up on the active exits for at least four nights, with lows forecast at 50°F or warmer.") },
        { number: "4", title: "Seal", text: p("When no bats are left, the devices come down and the openings are sealed.") },
        { number: "5", title: "Clean", text: p("Guano and soiled insulation come out last.", "[PLACEHOLDER: ask the client: how long a typical bat job takes once the exclusion starts]") },
      ],
    },
    {
      _type: "splitSection",
      _key: "cleanup",
      tone: "tint",
      eyebrow: "Attic cleanup",
      heading: "Cleaning an attic after bats",
      body: p(
        "Cleanup comes after the colony is out and the gaps are sealed, never before, or the bats just move back in. How much work it is depends on how long they were there. FWC notes that guano in a dry, unused space can usually be left undisturbed, but most attics hold ductwork, wiring and stored things, and people go up there. In that case the guano comes out. The CDC recommends a respirator in a confined space with bat droppings, so this is work for protective gear, not a dust mask. Insulation under an old roost is usually soaked through and gets bagged and replaced.",
      ),
      checklist: [
        "Respirators, as the CDC recommends in a confined space with guano [PLACEHOLDER: ask the client: confirm your protective gear for guano cleanup]",
        "Guano and soiled insulation bagged and removed",
        "Attic surfaces cleaned and deodorized",
        "New insulation where the old had to go",
        "[PLACEHOLDER: ask the client: how you handle guano cleanup and insulation replacement, and whether it's quoted separately]",
      ],
      imageSide: "left",
    },
    {
      _type: "faqSection",
      _key: "faq",
      eyebrow: "FAQ",
      heading: "Bats in the attic: common questions",
      items: [
        faq(
          "Why did bats pick my attic?",
          "FWC says bats may roost in buildings that mimic their natural roosts, especially after their natural habitat is disturbed. A warm, dark attic with a small gap at the roofline fits the bill.",
        ),
        faq(
          "Can I seal the hole while the bats are out at night?",
          "No. Some bats stay in, and in maternity season the pups can't fly. FWC warns that bats that can't get out before the exit is sealed die inside the building.",
        ),
        faq(
          "Will the bats leave in winter?",
          "Plan the exclusion instead of waiting. Book it for the legal window, August 15 to April 15, and make sure overnight lows are forecast at 50°F or warmer so the bats are active and actually leave.",
        ),
        faq(
          "Can I get rabies from bats in my attic?",
          "Only through a bite or scratch, which is why bats shouldn't be handled. FWC's brochure calls rabies in bats rare. Florida's Department of Health still names bats as one of the state's two main wildlife sources of rabies, so any contact with a bat needs a call to your county health department.",
        ),
        faq(
          "Can bats get from the attic into my living space?",
          "Sometimes a single bat does. FWC notes that a maternity colony is usually not found in rooms where people live or work, because the mothers need a warm, undisturbed roost. Repeated bats indoors point to a gap between the attic and the house.",
        ),
        faq(
          "Do I need to replace the insulation?",
          "Usually only under the roost, where guano has built up. It depends on how long the bats were there.",
          "[PLACEHOLDER: ask the client: how you decide how much insulation to replace after bats]",
        ),
        faq(
          "Are bats in the attic a health risk?",
          "Mostly through guano dust and bat bites. Don't go into a guano-covered attic without a respirator, and don't handle bats with bare hands.",
        ),
        faq(
          "How many species of bats are in Florida?",
          "FWC's brochure counts 13 resident species, and all of them eat night-flying insects. The Brazilian free-tailed bat is one FWC calls common in Florida buildings.",
        ),
      ],
    },
    {
      _type: "reviewsSection",
      _key: "reviews",
      eyebrow: "Reviews",
      heading: "What customers say",
      match: "bat",
    },
    {
      _type: "postsSection",
      _key: "related",
      eyebrow: "Read more",
      heading: "More about bats in buildings",
      limit: 3,
      match: "bat",
    },
    {
      _type: "ctaSection",
      _key: "cta",
      heading: "Bats coming out of your roof?",
      highlight: "your roof?",
      text: p("Call (727) 594-7705. We'll confirm the colony and tell you what this month's rules allow."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Bats in the Attic in Tampa Bay: What to Do | Pro Wildlife Removal",
    description:
      "Bats in the attic? How to confirm a colony, Florida's exclusion dates (Aug 15 to April 15), why you never seal bats in, and attic guano cleanup in Tampa Bay. Call (727) 594-7705.",
  },
  sources: [
    { title: "FWC news release, April 6, 2026 (maternity season April 16 to Aug 14; exclusion Aug 15 to April 15; permits during the season; four nights; 50°F)", url: RELEASE },
    { title: "FWC and UF/IFAS: A guide to living with bats (13 resident species; night-flying insects; bats roost in buildings that mimic habitat, often after disturbance; no physical damage, stains and odors; light brown stains; black, dry guano; look at dawn or dusk; one bat in the living space can be removed any time)", url: BROCHURE },
    { title: "FWC: Bats in buildings (sealed-in bats die; smells not a health hazard; no Florida histoplasmosis cases from guano in buildings; CDC respirator advice)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/" },
    { title: "FWC: Bats (illegal to kill; no poison; Brazilian free-tailed bat common in buildings)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/" },
    { title: "CDC: About histoplasmosis (spores from soil mixed with bird or bat droppings)", url: "https://www.cdc.gov/histoplasmosis/about/index.html" },
    { title: "CDC: Bats and rabies (not all bats carry rabies; bites can be tiny)", url: "https://www.cdc.gov/rabies/exposure/animals/bats.html" },
    { title: "Florida Department of Health: Rabies (raccoons and bats are the main wildlife sources)", url: "https://www.floridahealth.gov/diseases-and-conditions/rabies/index.html" },
  ],
  clientQuestions: [
    "How long does a typical bat job take once the exclusion starts?",
    "How do you decide how much insulation to replace after bats?",
    "How do you handle guano cleanup and insulation replacement, and is it quoted separately?",
    "Real photos: a dusk emergence from a client roof, guano on attic insulation, a cleaned attic.",
  ],
};
