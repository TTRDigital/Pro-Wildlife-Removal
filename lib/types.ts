import type { PortableTextBlock } from "@portabletext/react";
import type { IconName } from "./icons";

/* Shared content types. The built-in data in lib/data and Sanity results both map to these. */

export type Img = { src: string; alt: string; width?: number; height?: number };
export type Cta = { label: string; href: string; style?: "primary" | "outline" };
export type Seo = { title: string; description: string; image?: Img; noIndex?: boolean };

/** Portable Text: paragraphs, h3/h4, lists, links, images and tables. */
export type RichImage = { _type: "altImage"; _key?: string; image: Img; caption?: string };
export type RichTable = { _type: "table"; _key?: string; hasHeader?: boolean; rows: { _type?: "row"; _key?: string; cells: string[] }[] };
export type Rich = (PortableTextBlock | RichImage | RichTable)[];

export type Tone = "white" | "tint";

export type Hero = {
  eyebrow?: string;
  heading: string;
  /** Words of the heading shown in blue. */
  highlight?: string;
  text?: Rich;
  image?: Img;
  badges?: string[];
  ctas?: Cta[];
};

export type Card = {
  icon?: IconName;
  number?: string;
  title: string;
  subtitle?: string;
  text?: Rich;
  image?: Img;
  href?: string;
  accent?: "blue" | "navy";
};

export type Faq = { question: string; answer: Rich };

type SectionBase = {
  _key: string;
  tone?: Tone;
  eyebrow?: string;
  heading?: string;
  highlight?: string;
  intro?: Rich;
  ctas?: Cta[];
};

export type TrustBarSection = { _type: "trustBar"; _key: string; items: { icon?: IconName; label: string; text?: string }[] };
export type SplitSection = SectionBase & { _type: "splitSection"; body?: Rich; checklist?: string[]; image?: Img; imageSide?: "left" | "right" };
export type CardsSection = SectionBase & {
  _type: "cardsSection";
  variant?: "icon" | "numbered" | "accent" | "plain" | "photo";
  columns?: number;
  cards: Card[];
  image?: Img;
  outro?: Rich;
};
export type ProseSection = SectionBase & { _type: "proseSection"; body?: Rich; align?: "left" | "center" };
export type FaqSection = SectionBase & { _type: "faqSection"; items: Faq[] };
export type ReviewsSection = SectionBase & { _type: "reviewsSection" };
export type AreasSection = SectionBase & {
  _type: "areasSection";
  groups: { title?: string; href?: string; items: { label: string; href?: string }[] }[];
  note?: string;
};
export type CtaSection = { _type: "ctaSection"; _key: string; heading?: string; highlight?: string; text?: Rich; image?: Img; area?: string; showForm?: boolean };
export type ContactSection = SectionBase & { _type: "contactSection"; map?: boolean; form?: boolean };
export type ServicesSection = SectionBase & { _type: "servicesSection"; group?: "removal" | "control" | "tampa" | "all" };
export type LocationsSection = SectionBase & { _type: "locationsSection" };
export type PostsSection = SectionBase & { _type: "postsSection"; limit?: number };

export type Section =
  | TrustBarSection
  | SplitSection
  | CardsSection
  | ProseSection
  | FaqSection
  | ReviewsSection
  | AreasSection
  | CtaSection
  | ContactSection
  | ServicesSection
  | LocationsSection
  | PostsSection;

export type PageContent = { hero: Hero; sections: Section[]; seo: Seo };

export type ServiceGroup = "removal" | "control" | "tampa";

export type Service = PageContent & {
  slug: string;
  title: string;
  group: ServiceGroup;
  animal: string;
  order: number;
  summary?: string;
  cardImage?: Img;
};

export type Location = PageContent & {
  /** Path without slashes, e.g. "about-us/service-area/wildlife-removal-clearwater-fl" or "rat-removal-trinity". */
  path: string;
  name: string;
  kind: "region" | "county" | "city" | "rat";
  county?: string;
  order: number;
  summary?: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
  modified?: string;
  author?: string;
  image?: Img;
  body: Rich;
  seo: Seo;
};

export type Testimonial = { name: string; quote: string; rating: number; source?: string; date?: string };

export type Hours = { label: string; value: string };
export type CountyLine = { county: string; phone: string; href?: string };

export type SiteSettings = {
  name: string;
  phone: string;
  phoneHref: string;
  tollFree?: string;
  email: string;
  address: { street: string; city: string; region: string; postalCode: string };
  hours: Hours[];
  announcement: string;
  serviceAreaText: string;
  license?: string;
  googleRating?: string;
  reviewCount?: string;
  reviewsUrl?: string;
  mapEmbedUrl?: string;
  social: { network: string; href: string }[];
  countyLines: CountyLine[];
  headerCta: Cta;
  defaultCta: { heading: string; highlight?: string; text: string };
  logo?: Img;
};
