import type { Location, PageContent, Section, Source } from "../../types";
import { faq, p } from "./pt.ts";

/*
 * Additions to migrated pages (Ben's audit, Oct 26): FAQ blocks and in-text links.
 * Company facts come only from the site and the client; wildlife facts are sourced.
 */
type Extra = { sections: Section[]; sources?: Source[]; seoTitle?: string; seoDescription?: string };

const FWC_BATS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";
const FWC_TRAP = "https://myfwc.com/news/all-news/wildlife-trapping-0226/";
const CDC_CLEANUP = "https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html";

export const pageExtras: Record<string, Extra> = {
  about: {
    seoDescription:
      "Pro Wildlife Removal handles bats, rats, raccoons, squirrels and other wildlife in homes across eight Central Florida counties. Call us: (727) 594-7705.",
    sections: [
      {
        _type: "proseSection",
        _key: "who",
        eyebrow: "Who we are",
        heading: "Wildlife removal for Central Florida homes",
        body: p(
          "Pro Wildlife Removal takes animals out of homes and businesses and closes the openings they used. The work covers [bats](/services/bat-removal/), [rats](/services/rat-removal/), [raccoons](/services/raccoon-removal/), [squirrels](/services/squirrel-removal/), snakes, opossums, armadillos, bees and dead animal removal.",
          "We serve eight counties: Pasco, Pinellas, Hillsborough, Hernando, Citrus, Sumter, Polk and Marion. The [service area](/about-us/service-area/) page lists the towns, [how we work](/how-we-work/) walks through trapping, exclusion and clean-up, and the [blog](/blog/) answers common questions about Florida wildlife.",
        ),
      },
      {
        _type: "faqSection",
        _key: "faq",
        eyebrow: "FAQ",
        heading: "Questions about Pro Wildlife Removal",
        items: [
          faq(
            "Which counties does Pro Wildlife Removal serve?",
            "Pasco, Pinellas, Hillsborough, Hernando, Citrus, Sumter, Polk and Marion. See the [service area](/about-us/service-area/) for towns in each county.",
          ),
          faq(
            "What animals do you remove?",
            "Bats, rats, raccoons, squirrels, snakes, opossums, armadillos and bees, plus dead animal removal and attic clean-up. Each one has its own page under [services](/services/).",
          ),
          faq(
            "How do I set up an inspection?",
            "Call (727) 594-7705 or send a message through the [contact page](/contact-us/). Same-day appointments are often available.",
          ),
        ],
      },
    ],
  },
  howWeWork: {
    seoDescription:
      "How Pro Wildlife Removal handles a job: inspection, trapping and removal, exclusion of entry points, and clean-up. Call (727) 594-7705 to talk it through.",
    sections: [
      {
        _type: "faqSection",
        _key: "faq",
        eyebrow: "FAQ",
        heading: "Questions about how a job works",
        items: [
          faq(
            "What happens first?",
            "An inspection. The specialist works out which animals are causing the problem and plans the job around them. Call (727) 594-7705 or use the [contact page](/contact-us/) to book one.",
          ),
          faq(
            "How are the animals taken out?",
            `With traps set to hold the animal without hurting it, then removal from the property. Florida's trapping rules apply: FWC now requires trappers to register each year, and nuisance animals moved off site must be released or put down within 12 hours of the trap check ([FWC](${FWC_TRAP})). Bats are never trapped; see [bat removal](/services/bat-removal/).`,
          ),
          faq(
            "Why is exclusion part of every job?",
            "Taking one animal out doesn't help if the opening is still there for the next one. Closing the entry points is the step that keeps the house from being reused. Pages like [rats in the attic](/services/rats-in-attic/) and [squirrels in the attic](/services/squirrels-in-attic/) show where animals usually get in.",
          ),
          faq(
            "Can bats be removed at any time of year?",
            `No. FWC says exclusion is illegal during bat maternity season, April 16 to August 14, so bat work is planned for the rest of the year ([FWC](${FWC_BATS})).`,
          ),
          faq(
            "Do you clean up after the animals are gone?",
            `Yes: droppings, nesting and soiled insulation, with antimicrobial and ozone treatments where needed. The CDC warns against sweeping or vacuuming rodent droppings ([CDC](${CDC_CLEANUP})). See our guide to [cleaning up rat droppings](/blog/how-to-clean-up-rat-droppings-florida-attic/).`,
          ),
        ],
      },
    ],
    sources: [
      { title: "FWC: Wildlife trapping changes, Feb 2026 (annual registration and training; release or euthanize nuisance wildlife moved off site within 12 hours of the trap check)", url: FWC_TRAP },
      { title: "FWC: Bats in buildings (exclusion illegal during maternity season, April 16 to August 14)", url: FWC_BATS },
      { title: "CDC: How to clean up after rodents (do not sweep or vacuum droppings)", url: CDC_CLEANUP },
    ],
  },
  contact: {
    sections: [
      {
        _type: "faqSection",
        _key: "faq",
        eyebrow: "FAQ",
        heading: "Before you call",
        items: [
          faq(
            "How soon can someone come out?",
            "Same-day appointments are often available across our [service area](/about-us/service-area/). Pro Wildlife Removal takes calls 24 hours a day at (727) 594-7705.",
          ),
          faq(
            "What should I tell you when I call?",
            "What you've heard or seen, where in the house, and when it's loudest. Noises at dusk point to different animals than scratching in the morning; our guide to [what animal is in your attic](/blog/what-animal-is-in-my-attic/) explains why, and the [blog](/blog/) covers other common signs.",
          ),
          faq(
            "Do you handle stray dogs and cats?",
            "No. Strays, pet bites and pet welfare go to your county's animal services. We handle wildlife: see [our services](/services/).",
          ),
          faq(
            "Can I send a message instead of calling?",
            "Yes. Use the form on this page and include your town and what you've noticed. For how a visit goes, see [how we work](/how-we-work/).",
          ),
        ],
      },
    ],
  },
};

export const locationExtras: Record<string, Extra> = {
};

const add = (sections: Section[], extra: Section[]) => {
  const i = sections.findIndex((s) => s._type === "ctaSection");
  return i < 0 ? [...sections, ...extra] : [...sections.slice(0, i), ...extra, ...sections.slice(i)];
};

export function withPageExtras<T extends PageContent>(key: string, page: T): T {
  const x = pageExtras[key];
  if (!x) return page;
  return {
    ...page,
    sections: add(page.sections, x.sections),
    sources: [...(page.sources ?? []), ...(x.sources ?? [])],
    seo: x.seoDescription ? { ...page.seo, description: x.seoDescription } : page.seo,
  };
}

export function withLocationExtras(loc: Location): Location {
  const x = locationExtras[loc.path];
  if (!x) return loc;
  return {
    ...loc,
    sections: add(loc.sections, x.sections),
    sources: [...(loc.sources ?? []), ...(x.sources ?? [])],
    seo: { ...loc.seo, ...(x.seoTitle ? { title: x.seoTitle } : {}), ...(x.seoDescription ? { description: x.seoDescription } : {}) },
  };
}
