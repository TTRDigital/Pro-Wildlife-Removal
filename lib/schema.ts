import type { Location, Post, Service, ServicePlace, SiteSettings, Testimonial } from "@/lib/types";
import { absoluteUrl, siteUrl } from "@/lib/site";
import { images } from "@/lib/data/images";
import { real } from "@/lib/placeholders";

/** PestControl (a LocalBusiness) for the whole site. */
/** Counties are administrative areas, cities are cities, and regions like "Central Florida" are plain places. */
const areaType = (l: Location) => (l.kind === "county" ? "AdministrativeArea" : l.kind === "region" ? "Place" : "City");

/**
 * The rating and the reviews a page actually shows, attached to the business by its @id. Output by the
 * reviews section only, so a page without visible reviews carries no review markup (Ben, Oct 26).
 */
export function reviewsSchema(s: SiteSettings, shown: Testimonial[]) {
  return {
    "@context": "https://schema.org",
    "@type": "PestControl",
    "@id": `${siteUrl}/#business`,
    name: s.name,
    ...(s.googleRating && s.reviewCount ? { aggregateRating: { "@type": "AggregateRating", ratingValue: s.googleRating, reviewCount: s.reviewCount, bestRating: "5" } } : {}),
    review: shown.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      ...(t.date ? { datePublished: t.date } : {}),
      reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
      reviewBody: t.quote,
      ...(t.source ? { publisher: { "@type": "Organization", name: t.source } } : {}),
    })),
  };
}

/** The business itself, on every page. Its rating and reviews come from reviewsSchema, only where they are shown. */
export function businessSchema(s: SiteSettings, locations: Location[] = []) {
  // No openingHoursSpecification: the client's records disagree on the hours (Ben, Oct 26, 2026), and no hours is safer than wrong hours.
  const license = real(s.license);
  return {
    "@context": "https://schema.org",
    "@type": "PestControl",
    "@id": `${siteUrl}/#business`,
    name: s.name,
    url: `${siteUrl}/`,
    telephone: s.phone,
    email: s.email,
    logo: absoluteUrl(images.logo.src),
    image: absoluteUrl(images.prowildlifeRemovalAgentHoldingAnIguanaa.src),
    priceRange: "$$",
    areaServed: locations.filter((l) => l.kind !== "rat").map((l) => ({ "@type": areaType(l), name: `${l.name}, FL` })),
    sameAs: s.social.map((x) => x.href),
    ...(license ? { hasCredential: license } : {}),
  };
}

export function serviceSchema(service: Service, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.seo.description,
    url: absoluteUrl(path),
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: { "@type": "State", name: "Florida" },
  };
}

export function locationSchema(location: Location, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: location.hero.heading,
    serviceType: "Wildlife removal",
    description: location.seo.description,
    url: absoluteUrl(path),
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: { "@type": areaType(location), name: `${location.name}, FL` },
  };
}

/** One animal in one place: the Service, served in that city or county. */
export function servicePlaceSchema(page: ServicePlace, service: Service, path: string) {
  const area =
    page.placeKind === "county"
      ? { "@type": "AdministrativeArea", name: `${page.placeName}, FL` }
      : { "@type": "City", name: `${page.placeName}, FL`, ...(page.county ? { containedInPlace: { "@type": "AdministrativeArea", name: `${page.county} County, FL` } } : {}) };
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.hero.heading,
    serviceType: service.title,
    description: page.seo.description,
    url: absoluteUrl(path),
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: area,
  };
}

export function articleSchema(post: Post, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seo.description || post.excerpt,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    ...(post.date ? { datePublished: post.date } : {}),
    ...(post.modified ? { dateModified: post.modified } : {}),
    ...(post.image ? { image: absoluteUrl(post.image.src) } : {}),
    author: post.author ? { "@type": "Person", name: post.author } : { "@type": "Organization", name: "Pro Wildlife Removal" },
    publisher: { "@id": `${siteUrl}/#business` },
  };
}

/** WebPage with its sections as parts (name + #anchor), so each section of a page is indexed on its own. */
export function webPageSchema(path: string, name: string, description: string | undefined, sections: { name: string; id: string }[]) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    ...(description ? { description } : {}),
    isPartOf: { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: `${siteUrl}/`, name: "Pro Wildlife Removal" },
    about: { "@id": `${siteUrl}/#business` },
    inLanguage: "en-US",
    ...(sections.length ? { hasPart: sections.map((s) => ({ "@type": "WebPageElement", name: s.name, url: `${url}#${s.id}` })) } : {}),
  };
}
