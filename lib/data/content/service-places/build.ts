import { images } from "../../images.ts";
import type { Card, Faq, Img, ServicePlace, Source } from "../../../types";
import { p } from "../pt.ts";

/*
 * Animal x place pages (TTR-738): /services/<service>/<place>/, e.g.
 * /services/raccoon-removal/tampa-fl/. Only the layout is shared; every file
 * writes its own words, and every local card states one true fact about this
 * animal in this place, with its source in `sources`. Wade's route adds the
 * breadcrumb, JSON-LD, canonical and sitemap entry, so leave those out.
 *
 * Section order: answer, local facts (6 or more), who to call (optional),
 * related pages, reviews, FAQ (4 to 6), call band.
 */

const PHONE = { label: "Call (727) 594-7705", href: "tel:+17275947705" };

export type ServicePlaceInput = {
  /** The animal page's slug, e.g. "raccoon-removal". */
  service: string;
  /** "Raccoon": used in headings and link text. */
  animal: string;
  /** Plural for headings, e.g. "Raccoons". */
  animals: string;
  /** URL segment, e.g. "tampa-fl" or "polk-county-fl". */
  place: string;
  /** "Tampa", "Polk County". */
  placeName: string;
  placeKind: "city" | "county";
  /** Path of the matching city or county page, without slashes. */
  location: string;
  /** For cities, the county name without "County", e.g. "Hillsborough". */
  county?: string;
  order?: number;
  /** Hero H1; defaults to "[Animal] Removal in [Place], FL". */
  heading?: string;
  /** Real job photo only; defaults to the truck photo the county pages use. */
  image?: Img;
  heroText: string;
  answerHeading: string;
  /** 40 to 60 words, answers the search, ends with the number. */
  answer: string;
  /** Up to three short facts; no hours, prices or guarantees. */
  points: string[];
  localHeading: string;
  localIntro: string;
  /** Six or more cards, each one sourced fact about this animal in this place. */
  local: Card[];
  contactsIntro?: string;
  contacts?: Card[];
  /** Slug of the matching attic page, e.g. "raccoons-in-attic", if there is one. */
  attic?: { slug: string; label: string };
  /** One extra related link, e.g. a guide. */
  extraLink?: { label: string; href: string; text: string };
  reviewsIntro: string;
  faqs: Faq[];
  ctaHeading: string;
  ctaText: string;
  seo: { title: string; description: string };
  sources: Source[];
  clientQuestions: string[];
};

export function servicePlacePage(c: ServicePlaceInput): ServicePlace {
  const place = `${c.placeName}, FL`;
  const related: Card[] = [
    { icon: "critter", title: `${c.animal} removal`, text: p(`How we handle ${c.animals.toLowerCase()} anywhere we work, and Florida's rules for them.`), href: `/services/${c.service}/` },
    ...(c.attic ? [{ icon: "home" as const, title: c.attic.label, text: p(`Signs, damage and cleanup when they get into the attic.`), href: `/services/${c.attic.slug}/` }] : []),
    { icon: "map-pin", title: `Wildlife removal in ${c.placeName}`, text: p(`Every animal we handle in ${c.placeName}, and who to call for what.`), href: `/${c.location}/` },
    ...(c.extraLink ? [{ icon: "search" as const, title: c.extraLink.label, text: p(c.extraLink.text), href: c.extraLink.href }] : []),
  ];
  return {
    service: c.service,
    place: c.place,
    placeName: c.placeName,
    placeKind: c.placeKind,
    location: c.location,
    ...(c.county ? { county: c.county } : {}),
    ...(c.order !== undefined ? { order: c.order } : {}),
    design: "new",
    hero: {
      eyebrow: `${c.animal.toUpperCase()} REMOVAL IN ${c.placeName.toUpperCase()}`,
      heading: c.heading ?? `${c.animal} Removal in ${place}`,
      highlight: `${c.animal} Removal`,
      text: p(c.heroText),
      image: c.image ?? images.certifiedWildlifeRemovalExpertsInTampaFl,
      ctas: [PHONE],
    },
    sections: [
      { _type: "answerSection", _key: "answer", heading: c.answerHeading, text: p(c.answer), points: c.points },
      { _type: "cardsSection", _key: "local", tone: "tint", eyebrow: `${c.animals} in ${c.placeName}`, heading: c.localHeading, intro: p(c.localIntro), variant: "icon", columns: 3, cards: c.local },
      ...(c.contacts?.length
        ? [{ _type: "cardsSection" as const, _key: "contacts", eyebrow: "Who to call", heading: `Who to call about ${c.animals.toLowerCase()} in ${c.placeName}`, intro: p(c.contactsIntro ?? ""), variant: "plain" as const, columns: 3, cards: c.contacts }]
        : []),
      { _type: "cardsSection", _key: "related", eyebrow: "Related", heading: `More on ${c.animals.toLowerCase()} and ${c.placeName}`, variant: "plain", columns: related.length > 3 ? 4 : 3, cards: related },
      { _type: "reviewsSection", _key: "reviews", eyebrow: "Reviews", heading: "What customers say", intro: p(c.reviewsIntro), match: c.animal.toLowerCase() },
      { _type: "faqSection", _key: "faq", tone: "tint", eyebrow: "FAQ", heading: `${c.animal} questions in ${c.placeName}`, items: c.faqs },
      { _type: "ctaSection", _key: "cta", heading: c.ctaHeading, text: p(c.ctaText), ctas: [PHONE] },
    ],
    seo: c.seo,
    sources: c.sources,
    clientQuestions: c.clientQuestions,
  };
}
