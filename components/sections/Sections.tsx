import { Fragment } from "react";
import type { Section } from "@/lib/types";
import { getLocations, getPosts, getServices, getSiteSettings, getTestimonials } from "@/lib/content";
import { TrustBar } from "./TrustBar";
import { SplitSection } from "./SplitSection";
import { CardsSection } from "./CardsSection";
import { ProseSection } from "./ProseSection";
import { FaqSection } from "./FaqSection";
import { ReviewsSection } from "./ReviewsSection";
import { AreasSection } from "./AreasSection";
import { CtaSection } from "./CtaSection";
import { ContactSection } from "./ContactSection";
import { ServicesSection } from "./ServicesSection";
import { LocationsSection } from "./LocationsSection";
import { PostsSection } from "./PostsSection";

/**
 * Renders a page's sections in order. Every page ends with the navy CTA
 * band: the page's own closing text when it has one, the site default
 * otherwise. Pages without reviews get the review cards before it.
 */
export async function Sections({ sections, ids, closing = true, reviews = true }: { sections: Section[]; ids?: string[]; closing?: boolean; reviews?: boolean }) {
  const [settings, testimonials, services, locations, posts] = await Promise.all([getSiteSettings(), getTestimonials(), getServices(), getLocations(), getPosts()]);
  const hasCta = sections.some((s) => s._type === "ctaSection");
  const hasReviews = sections.some((s) => s._type === "reviewsSection");
  const lastTone = [...sections].reverse().find((s) => "tone" in s && s.tone)?.["tone" as never] as string | undefined;

  return (
    <>
      {sections.map((s, i) => {
        const key = s._key ?? `s${i}`;
        const el = section(s, key);
        // Anchor for each section (#bat-removal-process), so it can be linked to and indexed.
        return el && ids?.[i] ? (
          <Fragment key={key}>
            <span id={ids[i]} className="block" aria-hidden="true" />
            {el}
          </Fragment>
        ) : (
          el
        );
      })}
      {reviews && !hasReviews && !hasCta ? (
        <ReviewsSection section={{ _type: "reviewsSection", _key: "reviews", tone: lastTone === "tint" ? "white" : "tint" }} testimonials={testimonials} settings={settings} />
      ) : null}
      {closing && !hasCta ? <CtaSection settings={settings} /> : null}
    </>
  );

  function section(s: Section, key: string) {
    switch (s._type) {
      case "trustBar":
        return <TrustBar key={key} section={s} />;
      case "splitSection":
        return <SplitSection key={key} section={s} />;
      case "cardsSection":
        return s.cards?.length ? <CardsSection key={key} section={s} /> : null;
      case "proseSection":
        return <ProseSection key={key} section={s} />;
      case "faqSection":
        return <FaqSection key={key} section={s} />;
      case "reviewsSection":
        return <ReviewsSection key={key} section={s} testimonials={testimonials} settings={settings} />;
      case "areasSection":
        return s.groups?.length ? <AreasSection key={key} section={s} /> : null;
      case "ctaSection":
        return <CtaSection key={key} section={s} settings={settings} />;
      case "contactSection":
        return <ContactSection key={key} section={s} settings={settings} />;
      case "servicesSection":
        return <ServicesSection key={key} section={s} services={services} />;
      case "locationsSection":
        return <LocationsSection key={key} section={s} locations={locations} />;
      case "postsSection":
        return <PostsSection key={key} section={s} posts={posts} />;
      default:
        return null;
    }
  }
}
