import { images } from "../images.ts";
import type { PageContent } from "../../types";
import { faq, p } from "./pt.ts";
import { countyGroups } from "./areas.ts";
import { TRAP_RULES_2026, TRAP_RULES_SOURCE } from "./notes.ts";

/*
 * Home page. Target search: "wildlife removal Tampa Bay".
 * Blueprint: hero, short answer, animals, how a job works, service area,
 * why Pro Wildlife, reviews, Florida seasons, FAQ, call band.
 * Facts about animals and law come from the sources at the bottom.
 * Facts about the company are [PLACEHOLDER: ask the client: ...] until confirmed.
 */

const CALL = { label: "Call (727) 594-7705", href: "tel:+17275947705" };

export const home: PageContent = {
  design: "new",
  hero: {
    eyebrow: "OPEN 24/7 ACROSS TAMPA BAY",
    heading: "Wildlife Removal in Tampa Bay, 24/7",
    highlight: "Wildlife Removal",
    text: p(
      "Humane removal of the animals in your attic, walls, roof or yard, then we seal the way they got in and clean up what they left behind. Call any time, day or night.",
    ),
    image: images.certifiedWildlifeRemovalExpertsInTampaFl,
    badges: ["9 counties", "Removal, sealing and cleanup"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "Who we are and how it works",
      text: p(
        "Pro Wildlife Removal removes bats, rats, raccoons, squirrels, snakes, opossums, armadillos, bees and dead animals from homes and businesses in nine counties across Tampa Bay and central and west Florida. We inspect, remove the animals the way Florida law allows, seal the entry points and clean up. Call (727) 594-7705, 24/7.",
      ),
      points: ["9 counties", "Open 24/7", "Humane, legal methods", "Entry points sealed"],
    },
    {
      _type: "servicesSection",
      _key: "animals",
      eyebrow: "Animals we remove",
      heading: "Which animal is it?",
      intro: p("Pick the animal you think you have. Each page covers the signs, the Florida rules for that animal and how we get it out."),
      group: "removal",
    },
    {
      _type: "cardsSection",
      _key: "process",
      tone: "tint",
      eyebrow: "How a job works",
      heading: "Five steps, from the first call to the follow-up",
      variant: "numbered",
      columns: 5,
      cards: [
        {
          number: "1",
          title: "Inspect",
          text: p(
            "A technician walks the roofline, attic and outside of the house to find how the animal gets in, which animal it is and how many openings there are. You get a plan for your home before any work starts.",
          ),
        },
        {
          number: "2",
          title: "Remove",
          text: p(
            "The animals go out by the method that fits them and the law: one-way doors for bats, live traps checked at least every 24 hours, or removal by hand. Trapped wildlife is released only where Florida rules allow.",
          ),
        },
        {
          number: "3",
          title: "Seal",
          text: p(
            "Once the animals are out, the openings they used are closed with materials they can't chew through, and weak spots nearby are closed too, so the next animal doesn't find the same way in.",
          ),
        },
        {
          number: "4",
          title: "Clean",
          text: p(
            "Droppings, nesting and soiled insulation are removed and the area is sanitized. Where insulation has to go, we tell you what needs replacing before we do it.",
          ),
        },
        {
          number: "5",
          title: "Follow up",
          text: p("[PLACEHOLDER: ask the client: what the follow-up includes (a return visit, a check of the seals, any warranty on the sealing work) and for how long]"),
        },
      ],
    },
    {
      _type: "areasSection",
      _key: "areas",
      eyebrow: "Service area",
      heading: "Wildlife removal in 9 Florida counties",
      intro: p("Call the number for your county, or the main line at (727) 594-7705. [PLACEHOLDER: ask the client: are all county lines answered 24/7?]"),
      groups: countyGroups,
    },
    {
      _type: "splitSection",
      _key: "why",
      tone: "tint",
      eyebrow: "Why Pro Wildlife",
      heading: "What you can count on",
      body: p(
        "Wildlife work in Florida comes with rules: when bats can be excluded, how often traps must be checked, where a trapped animal may be released. We follow them on every job, and we explain them to you, so you know why a job is done the way it is.",
      ),
      checklist: [
        "Open 24 hours a day, 7 days a week",
        "[PLACEHOLDER: ask the client: confirm weekends and holidays]",
        "[PLACEHOLDER: ask the client: confirm wildlife removal is all you do (no general pest control)]",
        "Humane methods that follow Florida Fish and Wildlife Conservation Commission rules",
        "Entry points sealed and the mess cleaned up, not just the animal taken away",
        "[PLACEHOLDER: ask the client: years in business]",
        "[PLACEHOLDER: ask the client: number of jobs done, or the current Google rating and review count to show here]",
      ],
      image: images.prowildlifeRemovalAgentHoldingAnIguanaa,
      imageSide: "right",
    },
    {
      _type: "reviewsSection",
      _key: "reviews",
      eyebrow: "Reviews",
      heading: "What Tampa Bay homeowners say",
    },
    {
      _type: "cardsSection",
      _key: "seasons",
      eyebrow: "Florida seasons",
      heading: "What you hear, and when",
      intro: p("Florida wildlife keeps a calendar. Knowing it helps you act at the right time, and explains why some jobs have to wait."),
      variant: "plain",
      columns: 2,
      cards: [
        {
          title: "Bats: April 16 to August 14 is maternity season",
          text: p(
            "This is when most of Florida's bats give birth and raise their pups, and exclusion isn't allowed in that window without an FWC permit. April 15 is the last day to exclude bats without one, and exclusion can start again August 15. If you hear bats in summer, call anyway: we can inspect and plan the work for the first legal date. Read the [bat maternity season guide](/blog/bat-maternity-season-guide/).",
          ),
        },
        {
          title: "Raccoons: babies in March and April",
          text: p(
            "Most raccoons in Florida are born in March and April, and an attic is a warm, dry den. Thumping and chattering overhead in spring often means a mother with young. They need to be removed together, never sealed in. See [raccoon mating season in Florida](/blog/raccoon-mating-season-in-florida/).",
          ),
        },
        {
          title: "Roof rats: any month",
          text: p(
            "Roof rats are climbers that live high in trees and in the upper levels of homes. UF/IFAS says a roof rat can have up to 6 litters a year, so they can turn up in any month. Branches touching the roof are their bridge in, so keep limbs trimmed back. See [signs of rats in the attic](/blog/rats-in-attic-signs/).",
          ),
        },
        {
          title: "After a storm",
          text: p(
            "Storm damage to soffits, vents and roof edges leaves openings an animal can use. Get it repaired promptly, and look along the roofline for new gaps after a blow. See [common wildlife entry points](/blog/common-wildlife-entry-points/).",
          ),
        },
      ],
    },
    {
      _type: "faqSection",
      _key: "faq",
      tone: "tint",
      eyebrow: "FAQ",
      heading: "Wildlife removal questions we hear every day",
      items: [
        faq(
          "How much does wildlife removal cost in Tampa Bay?",
          "It depends on the animal, how many there are, how many entry points need sealing and how much cleanup the attic needs. A single raccoon caught in a yard is a different job from a bat colony in a tile roof. We give you the price for your home after the inspection, before any work starts.",
          "[PLACEHOLDER: ask the client: is the inspection free, and can the site show price ranges?]",
        ),
        faq(
          "How fast can you come out?",
          "We answer the phone 24 hours a day, 7 days a week. For an animal loose inside the living space, a snake in the house or bees near people, tell us when you call so we can treat it as urgent.",
          "[PLACEHOLDER: ask the client: typical response time for emergencies and for regular inspections]",
        ),
        faq(
          "Is your wildlife removal humane?",
          "Yes. We use one-way doors that let animals leave and not come back, live traps that are checked at least every 24 hours as Florida law requires, and removal by hand. Mothers and young are kept together. We never use poison on bats, which is illegal in Florida.",
        ),
        faq(
          "Can I trap and move the animal myself?",
          "Florida allows a property owner to trap many nuisance animals, but the rules are strict. Traps must be checked at least every 24 hours. A native animal can be released on the same property, or on land of at least 40 contiguous acres in the same county with the landowner's written permission. Non-native animals can't be released at all. Bats can't be trapped or relocated. Many people call us because of those rules.",
          TRAP_RULES_2026,
        ),
        faq(
          "Do you seal the entry points?",
          "Yes. Removing the animal without closing the hole just makes room for the next one. After the animals are out, we close the openings they used and the weak spots around them.",
        ),
        faq(
          "Do you clean up the attic afterwards?",
          "Yes. We remove droppings, nesting material and soiled insulation and sanitize the area. Sweeping or vacuuming droppings can put germs in the air, so this is work for protective gear and a respirator, not a broom.",
        ),
        faq(
          "Which areas do you serve?",
          "Tampa Bay and central and west Florida: Pinellas, Pasco, Hillsborough, Hernando, Citrus, Sumter, Polk, Manatee and Osceola counties. That includes Tampa, St. Petersburg, Clearwater, Lakeland, Brooksville, Spring Hill, New Port Richey and The Villages.",
        ),
        faq(
          "Do you remove snakes and bees too?",
          "Yes. Along with mammals like raccoons, rats and bats, we remove snakes from homes, garages and pool cages, and we handle bees that settle in walls, soffits and sheds.",
        ),
      ],
    },
    {
      _type: "ctaSection",
      _key: "cta",
      heading: "Hearing something in the attic right now?",
      highlight: "right now?",
      text: p("Call (727) 594-7705. We answer 24 hours a day, 7 days a week, in all 9 counties."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Wildlife Removal in Tampa Bay, Open 24/7 | Pro Wildlife Removal",
    description:
      "Bat, rat, raccoon, squirrel, snake and opossum removal in Tampa Bay and 9 central and west Florida counties. Humane removal, sealing and cleanup. Call 24/7: (727) 594-7705.",
  },
  sources: [
    { title: "FWC news release: Bat maternity season begins April 16 (April 2026)", url: "https://myfwc.com/news/all-news/bat-maternity-0426/" },
    { title: "FWC: Bats in buildings (exclusion rules, no poison, no relocation)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/" },
    { title: "FWC: FAQs, nuisance wildlife (24-hour trap checks, release on same property or 40+ contiguous acres in the same county with written permission, native species only)", url: "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/" },
    { title: "UF/IFAS EDIS WEC-34 (UW033): Northern Raccoon (births in Florida generally March and April; dens in attics and crawl spaces)", url: "https://ask.ifas.ufl.edu/publication/UW033" },
    { title: "UF/IFAS Extension Sarasota County: What to do about rodents (roof rats live in trees and upper levels of homes; trim limbs; repair storm damage promptly)", url: "https://blogs.ifas.ufl.edu/sarasotaco/2026/08/12/wondering-about-wildlife-rodents/" },
    { title: "UF/IFAS EDIS ENY-224: Rat and Mouse Control (roof rats: up to 6 litters a year)", url: "https://journals.flvc.org/edis/article/view/136514" },
    { title: "Florida Department of Health: Rabies (raccoons and bats are the main wildlife sources)", url: "https://www.floridahealth.gov/diseases-and-conditions/rabies/index.html" },
    TRAP_RULES_SOURCE,
  ],
  clientQuestions: [
    "What does the follow-up include (return visit, seal check, warranty on sealing) and for how long?",
    "How many years has Pro Wildlife Removal been in business?",
    "How many jobs has the company done, or which rating and review count should the site show (the live site says 4.7 from 273 Google reviews)?",
    "Is the inspection free? Can the site show price ranges? The live site says prices are one-time fees regardless of trips or animals removed: is that still true?",
    "Typical response time for emergencies and for regular inspections?",
    "Which cities in Polk, Manatee and Osceola get the most calls, so the area list shows the right towns? Manatee and Osceola: is there a county phone number?",
    "A real truck or crew photo for the hero.",
  ],
};
