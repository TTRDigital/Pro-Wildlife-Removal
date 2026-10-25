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
    image: images.post1776985611145,
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
      image: images.post1776985611145,
      imageSide: "right",
    },
    {
      _type: "splitSection",
      _key: "cleanup",
      tone: "tint",
      eyebrow: "Attic cleanup",
      heading: "Cleaning an attic after bats",
      body: p(
        "Once the colony is out and the gaps are sealed, the attic can be cleaned. How much work that is depends on how long the bats were there. A roost that has been used for years can mean replacing the insulation under it.",
      ),
      checklist: [
        "Work done in respirators and protective suits",
        "Guano and soiled insulation bagged and removed",
        "Attic surfaces cleaned and deodorized",
        "New insulation where the old had to go",
        "[PLACEHOLDER: ask the client: how you handle guano cleanup and insulation replacement, and whether it's quoted separately]",
      ],
      image: images.post1776985611145,
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
      "Bats in the attic? How to confirm a colony, Florida's exclusion dates (Aug 15 to April 15), why you never seal bats in, and attic guano cleanup in Tampa Bay. Call 24/7: (727) 594-7705.",
  },
  sources: [
    { title: "FWC news release, April 6, 2026 (maternity season April 16 to Aug 14; exclusion Aug 15 to April 15; permits during the season; four nights; 50°F)", url: RELEASE },
    { title: "FWC and UF/IFAS: A guide to living with bats (13 resident species; night-flying insects; bats roost in buildings that mimic habitat, often after disturbance; no physical damage, stains and odors; light brown stains; black, dry guano; look at dawn or dusk; one bat in the living space can be removed any time)", url: BROCHURE },
    { title: "FWC: Bats in buildings (sealed-in bats die; smells not a health hazard; no Florida histoplasmosis cases from guano in buildings; CDC respirator advice)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/" },
    { title: "FWC: Bats (illegal to kill; no poison; Brazilian free-tailed bat common in buildings)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/" },
    { title: "CDC: About histoplasmosis (spores from soil mixed with bird or bat droppings)", url: "https://www.cdc.gov/histoplasmosis/about/index.html" },
    { title: "CDC: Bats and rabies (not all bats carry rabies; bites can be tiny)", url: "https://www.cdc.gov/rabies/exposure/animals/bats.html" },
  ],
  clientQuestions: [
    "How do you handle guano cleanup and insulation replacement, and is it quoted separately?",
    "Real photos: a dusk emergence from a client roof, guano on attic insulation, a cleaned attic.",
  ],
};
