import { images } from "../images.ts";
import type { PageContent } from "../../types";
import { faq, p } from "./pt.ts";
import { countyGroups } from "./areas.ts";
import { TRAP_RULES_2026, TRAP_RULES_SOURCE } from "./notes.ts";

/*
 * Home page. Target search: "wildlife removal Central Florida".
 * Blueprint: hero, short answer, animals, how a job works, service area,
 * why Pro Wildlife, reviews, Florida seasons, FAQ, call band.
 * Facts about animals and law come from the sources at the bottom.
 * Facts about the company are [PLACEHOLDER: ask the client: ...] until confirmed.
 */

const CALL = { label: "Call (727) 594-7705", href: "tel:+17275947705" };

export const home: PageContent = {
  design: "new",
  hero: {
    eyebrow: "WILDLIFE REMOVAL ACROSS CENTRAL FLORIDA",
    heading: "Wildlife Removal in Central Florida",
    highlight: "Wildlife Removal",
    text: p(
      "Humane removal of the animals in your attic, walls, roof or yard, then we seal the way they got in and clean up what they left behind.",
    ),
    image: images.certifiedWildlifeRemovalExpertsInTampaFl,
    badges: ["8 counties", "Removal, sealing and cleanup"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "Who we are and how it works",
      text: p(
        "Pro Wildlife Removal removes bats, rats, raccoons, squirrels, snakes, opossums, armadillos, bees and dead animals from homes and businesses in eight counties across Central Florida. We inspect, remove the animals the way Florida law allows, seal the entry points and clean up. Call (727) 594-7705.",
      ),
      points: ["8 counties", "Humane, legal methods", "Entry points sealed"],
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
      heading: "Trapping, Exclusion and Removal",
      intro: p("After the initial inspection, our Pro Wildlife specialist will identify which animals are creating the problem and implement a solution tailored to your specific animal issue."),
      variant: "numbered",
      columns: 3,
      cards: [
        {
          number: "1",
          title: "Trapping and Removal",
          text: p(
            "The trapping and removal process begins with setting up specialized traps to securely capture the animals without causing harm. Once the animals are safely contained, they are promptly removed from the property, ensuring the area is free from wildlife intrusions.",
          ),
        },
        {
          number: "2",
          title: "Exclusion",
          text: p(
            "Part of removing an animal from inside or under a structure like a home or an office is to make sure there are no available openings for the animals to come and go freely. Closing these entry points is a key step in making sure that once your animal is out, another one does not move in.",
          ),
        },
        {
          number: "3",
          title: "Clean-Up Services",
          text: p(
            "There is often damage and contamination left behind once an animal inhabits a crawlspace or attic. We offer a full range of clean-up services for virtually every animal mess. From antimicrobial treatments and ozone treatments to vacuum services and interior sanitizing, our team of experts has the cleaning solution for you.",
          ),
        },
      ],
    },
    {
      _type: "areasSection",
      _key: "areas",
      eyebrow: "Service area",
      heading: "Wildlife removal in 8 Florida counties",
      intro: p("One number covers all eight counties: (727) 594-7705."),
      groups: countyGroups,
      display: "map",
    },
    {
      _type: "splitSection",
      _key: "why",
      tone: "tint",
      eyebrow: "Why Pro Wildlife",
      heading: "What you can count on",
      body: p(
        "Wildlife work in Florida comes with rules: when bats can be excluded, how often traps must be checked, where a trapped animal may be released. We follow them on every job, and we explain them to you, so you know why a job is done the way it is.",
        "Josh Holmberg started Pro Wildlife Removal in 2016. He's a sixth-generation Floridian who grew up hiking and catching animals from Clearwater to Cedar Key, and he has worked in wildlife removal for 15 years, including several years with a national wildlife company. He opened his own company to do humane removal with better customer service.",
      ),
      checklist: [
        "A free inspection, and the price for your home before any work starts",
        "Wildlife removal only, for all kinds of animals, with no general pest control",
        "Humane methods that follow Florida Fish and Wildlife Conservation Commission rules",
        "Entry points sealed and the mess cleaned up, not just the animal taken away",
        "Founded in 2016 by Josh Holmberg, with 15 years in wildlife removal",
        "Rated 4.7 from 273 Google reviews",
      ],
      image: images.prowildlifeRemovalAgentHoldingAnIguanaa,
      imageSide: "right",
    },
    {
      _type: "reviewsSection",
      _key: "reviews",
      eyebrow: "Reviews",
      heading: "What Central Florida homeowners say",
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
            "Roof rats are climbers that live high in trees and in the upper levels of homes. Florida DOH says a roof rat can have up to 8 litters a year, so they can turn up in any month. Branches touching the roof are their bridge in, so keep limbs trimmed back. See [signs of rats in the attic](/blog/rats-in-attic-signs/).",
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
          "How much does wildlife removal cost in Central Florida?",
          "It depends on the animal, how many there are, how many entry points need sealing and how much cleanup the attic needs. A single raccoon caught in a yard is a different job from a bat colony in a tile roof. We give you the price for your home after the inspection, before any work starts.",
          "The inspection is free.",
        ),
        faq(
          "How fast can you come out?",
          "Same-day appointments are often available. For an animal loose inside the living space, a snake in the house or bees near people, tell us when you call so we can treat it as urgent.",
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
          "Another company already tried. Why are the animals still getting in?",
          "Usually because an opening was missed. UF/IFAS says rodent-proofing only works if every possible entry is blocked, and that rats probe new repairs in the first couple of weeks. Trapping without sealing just makes room for the next animal. We start with the whole roofline and attic, not just the hole you found.",
          "Before you hire anyone, ask what the quote covers: every opening on the house, or only the one in use today.",
        ),
        faq(
          "Do you clean up the attic afterwards?",
          "Yes. We remove droppings, nesting material and soiled insulation and sanitize the area. Sweeping or vacuuming droppings can put germs in the air, so this is work for protective gear and a respirator, not a broom.",
        ),
        faq(
          "Which areas do you serve?",
          "Central Florida: Pinellas, Pasco, Hillsborough, Hernando, Citrus, Sumter, Polk and Marion counties. That includes Tampa, St. Petersburg, Clearwater, Lakeland, Brooksville, Spring Hill, New Port Richey, The Villages and Ocala.",
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
      text: p("Call (727) 594-7705, one number for all 8 counties."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Wildlife Removal in Central Florida | Pro Wildlife Removal",
    description:
      "Bat, rat, raccoon, squirrel, snake and opossum removal across 8 Central Florida counties, with sealing and cleanup. A free inspection: (727) 594-7705.",
  },
  sources: [
    { title: "FWC news release: Bat maternity season begins April 16 (April 2026)", url: "https://myfwc.com/news/all-news/bat-maternity-0426/" },
    { title: "FWC: Bats in buildings (exclusion rules, no poison, no relocation)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/" },
    { title: "FWC: FAQs, nuisance wildlife (24-hour trap checks, release on same property or 40+ contiguous acres in the same county with written permission, native species only)", url: "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/" },
    { title: "UF/IFAS EDIS WEC-34 (UW033): Northern Raccoon (births in Florida generally March and April; dens in attics and crawl spaces)", url: "https://ask.ifas.ufl.edu/publication/UW033" },
    { title: "UF/IFAS Extension Sarasota County: What to do about rodents (roof rats live in trees and upper levels of homes; trim limbs; repair storm damage promptly)", url: "https://blogs.ifas.ufl.edu/sarasotaco/2026/08/12/wondering-about-wildlife-rodents/" },
    { title: "Josh Holmberg, owner: biography supplied for the author page (Oct 16, 2026): founded 2016, 15 years in wildlife removal, several years with a national wildlife company, sixth-generation Floridian", url: "https://prowildliferemoval.net/" },
    { title: "Florida DOH Gadsden: Rodent control (roof rats can have up to 8 litters a year)", url: "https://gadsden.floridahealth.gov/programs-and-services/environmental-health/rodent-control/" },
    { title: "UF/IFAS Extension Santa Rosa: Controlling rats and mice around the farm (rodent-proofing must block all possible entry points)", url: "https://blogs.ifas.ufl.edu/santarosaco/2016/01/29/controlling-rats-and-mice-around-the-farm/" },
    { title: "UF/IFAS EDIS ENY-224: Rat and Mouse Control (2013, archived; rats test repairs in the first 2 weeks)", url: "https://journals.flvc.org/edis/article/view/136514" },
    { title: "Florida Department of Health: Rabies (raccoons and bats are the main wildlife sources)", url: "https://www.floridahealth.gov/diseases-and-conditions/rabies/index.html" },
    TRAP_RULES_SOURCE,
  ],
  clientQuestions: [
    "How many jobs has the company done, or which rating and review count should the site show (the live site says 4.7 from 273 Google reviews)?",
    "Can the site show price ranges? The live site says prices are one-time fees regardless of trips or animals removed: is that still true?",
    "Typical response time for emergencies and for regular inspections?",
    "Which cities in Polk get the most calls, so the area list shows the right towns? Do you serve Manatee or Osceola County? Those pages are held until you confirm.",
    "A real truck or crew photo for the hero.",
    "Is there a written warranty on sealing work? Until there is, the site won't say anything like \"sealed for good\" or promise animals won't return.",
    "The site still has pages for Orlando, Sarasota, The Villages, Lady Lake, Lecanto, Pine Ridge, Winter Haven, Central Florida, and rat removal in The Villages and Winter Haven. Which of these do you still serve?",
  ],
};
