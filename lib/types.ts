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

/** Which design a page uses: the 2019 site ("classic"), the 2025 template ("refresh") or the bat-removal design ("new"). */
export type Design = "classic" | "refresh" | "new";

export type BgKey = "navy" | "blue" | "beige" | "white" | "light" | "ice" | "dark";
export type ColorKey = "beige" | "blue" | "black" | "white" | "charcoal" | "navy" | "grey" | "slate" | "ink" | "red" | "orange";

/** Look of a section on the old designs, taken from the live page: background, photo, colours. */
export type SectionStyle = {
  bg?: BgKey;
  image?: Img;
  /** 0-1 darkening over the background photo */
  overlay?: number;
  heading?: ColorKey;
  text?: ColorKey;
  link?: ColorKey;
  divider?: ColorKey;
  /** border colour of framed photos */
  frame?: ColorKey;
  align?: "left" | "center";
  /** split sections: heading in its own row above the photo and text (otherwise in the text column) */
  headingAbove?: boolean;
};

export type Hero = {
  eyebrow?: string;
  heading: string;
  /** Words of the heading shown in blue. */
  highlight?: string;
  text?: Rich;
  image?: Img;
  badges?: string[];
  ctas?: Cta[];
  /** words cycling under the heading (classic home page) */
  rotator?: string[];
  /** fixed word after the cycling words ("Removal") */
  rotatorSuffix?: string;
  style?: SectionStyle;
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
  style?: SectionStyle;
  tone?: Tone;
  eyebrow?: string;
  heading?: string;
  highlight?: string;
  intro?: Rich;
  ctas?: Cta[];
};

export type TrustBarSection = { _type: "trustBar"; _key: string; style?: SectionStyle; items: { icon?: IconName; label: string; text?: string }[] };
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
/** match: show reviews that mention this word first (e.g. "bat"), then the latest. */
export type ReviewsSection = SectionBase & { _type: "reviewsSection"; match?: string };
export type AreasSection = SectionBase & {
  _type: "areasSection";
  groups: { title?: string; href?: string; items: { label: string; href?: string }[] }[];
  note?: string;
};
export type CtaSection = { _type: "ctaSection"; _key: string; style?: SectionStyle; ctas?: Cta[]; eyebrow?: string; heading?: string; highlight?: string; text?: Rich; image?: Img; area?: string };
export type ContactSection = SectionBase & { _type: "contactSection" };
/** The 40 to 60 word answer under the hero that AI search quotes: the question as heading, the answer, up to four short facts. */
export type AnswerSection = SectionBase & { _type: "answerSection"; text: Rich; points?: string[] };
export type ServicesSection = SectionBase & { _type: "servicesSection"; group?: "removal" | "attic" | "control" | "tampa" | "all" };
export type LocationsSection = SectionBase & { _type: "locationsSection" };
/** match: only posts whose title or slug mention this word (e.g. "bat"), falling back to the latest. */
export type PostsSection = SectionBase & { _type: "postsSection"; limit?: number; match?: string };

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
  | AnswerSection
  | ServicesSection
  | LocationsSection
  | PostsSection;

/** A source a page's facts come from (FWC, CDC, UF/IFAS, Florida statutes). Kept with the page for fact checks; not shown unless a template chooses to. */
export type Source = { title: string; url: string };

export type PageContent = {
  design?: Design;
  hero: Hero;
  sections: Section[];
  seo: Seo;
  /** Where the page's facts about animals, health, law and safety come from. Not rendered. */
  sources?: Source[];
  /** Questions only the client can answer; the matching text on the page is a [PLACEHOLDER: ask the client: ...]. Not rendered. */
  clientQuestions?: string[];
};

/** "attic": the "[animal] in the attic" pages, listed apart from the animal removal grid. */
export type ServiceGroup = "removal" | "attic" | "control" | "tampa";

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
  /** Questions shown under the post as the FAQ block (with FAQPage structured data). */
  faq?: Faq[];
  seo: Seo;
  /** Fact sources and open client questions, as on PageContent. Not rendered. */
  sources?: Source[];
  clientQuestions?: string[];
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
