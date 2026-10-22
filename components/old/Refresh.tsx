import Link from "next/link";
import type { ReactNode } from "react";
import { Phone, Plus, Sparkle } from "lucide-react";
import type {
  AreasSection,
  BgKey,
  CardsSection,
  ContactSection,
  Cta,
  CtaSection,
  FaqSection,
  Hero,
  ProseSection,
  ReviewsSection,
  Section,
  SectionStyle,
  Service,
  ServicesSection,
  SiteSettings,
  SplitSection,
  Testimonial,
} from "@/lib/types";
import { RichText } from "@/components/ui/RichText";
import { Photo } from "@/components/ui/Photo";
import { JsonLd } from "@/components/ui/JsonLd";
import { Stars } from "@/components/ui/Stars";
import { richText } from "@/lib/text";
import { locationGroups } from "@/components/sections/LocationsSection";
import { refreshVars, sectionIds } from "./theme";
import type { ClassicData } from "./Classic";

/*
 * The 2025 template used by the "-control" service pages, the services and
 * service-area hubs and a few rat-removal pages: photo header with a pill
 * phone button, Cal Sans headings, light-blue chips and boxes, rounded
 * photos and cards.
 */

function Band({ id, style, bg, children, className = "" }: { id?: string; style?: SectionStyle; bg: BgKey; children: ReactNode; className?: string }) {
  const dark = bg === "navy" || bg === "dark" || bg === "blue";
  return (
    <section id={id} className={`r-sec ${className}`} style={refreshVars(style, bg)} data-dark={dark ? "" : undefined}>
      <div className="r-wrap">{children}</div>
    </section>
  );
}

function Chip({ text, dark }: { text?: string; dark?: boolean }) {
  if (!text) return null;
  return (
    <p className={`r-chip ${dark ? "r-chip-dark" : ""}`}>
      <Sparkle className="h-3.5 w-3.5 fill-current" strokeWidth={0} aria-hidden="true" />
      {text}
    </p>
  );
}

function Head({ s, center = true, dark }: { s: { eyebrow?: string; heading?: string; intro?: SplitSection["intro"] }; center?: boolean; dark?: boolean }) {
  if (!s.eyebrow && !s.heading && !s.intro?.length) return null;
  return (
    <div className={`mb-10 ${center ? "mx-auto max-w-[1100px] text-center" : ""}`}>
      <Chip text={s.eyebrow} dark={dark} />
      {s.heading ? <h2 className={`r-h2 ${s.eyebrow ? "mt-4" : ""}`}>{s.heading}</h2> : null}
      {s.intro?.length ? <RichText value={s.intro} base="r-rich" className={`mt-4 ${center ? "mx-auto max-w-[980px] [&_ol]:text-left [&_ul]:text-left" : ""}`} /> : null}
    </div>
  );
}

function PillButton({ cta, className = "" }: { cta: Cta; className?: string }) {
  const tel = cta.href.startsWith("tel:");
  const inner = (
    <>
      {tel ? <Phone className="h-[18px] w-[18px] fill-current" strokeWidth={0} aria-hidden="true" /> : null}
      {cta.label}
    </>
  );
  if (tel || /^https?:/.test(cta.href))
    return (
      <a href={cta.href} className={`r-pill ${className}`} data-track={tel ? "click_to_call" : undefined} {...(cta.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
        {inner}
      </a>
    );
  return (
    <Link href={cta.href} className={`r-pill ${className}`}>
      {inner}
    </Link>
  );
}

/** Phone pill under a text block (the line before it, e.g. "Call For Your Free Estimate", is part of the text). */
function CallRow({ ctas, center }: { ctas?: Cta[]; center?: boolean }) {
  if (!ctas?.length) return null;
  return (
    <div className={`mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 ${center ? "justify-center" : ""}`}>
      {ctas.map((c, i) => (
        <PillButton key={c.href + i} cta={c} />
      ))}
    </div>
  );
}

/* ---------- hero ---------- */

export function RefreshHero({ hero, settings }: { hero: Hero; settings: SiteSettings }) {
  const st = hero.style ?? {};
  const image = st.image ?? hero.image;
  const tel = hero.ctas?.find((c) => c.href.startsWith("tel:")) ?? { label: settings.phone, href: settings.phoneHref };
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#1d2a36] py-24 text-center md:py-32">
      {image ? <Photo image={{ ...image, alt: "" }} priority sizes="100vw" className="-z-20" /> : null}
      <div className="absolute inset-0 -z-10 bg-black" style={{ opacity: st.overlay ?? 0.5 }} aria-hidden="true" />
      <div className="r-wrap">
        <Chip text={hero.eyebrow} dark />
        <h1 className={`r-h1 mx-auto max-w-[1000px] text-white ${hero.eyebrow ? "mt-6" : ""}`}>{hero.heading}</h1>
        {hero.badges?.length ? (
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {hero.badges.map((b) => (
              <li key={b} className="r-chip r-chip-dark">
                {b}
              </li>
            ))}
          </ul>
        ) : null}
        {hero.text?.length ? <RichText value={hero.text} base="r-rich" className="mx-auto mt-6 max-w-[800px] text-lg font-semibold text-white [--t:#fff] [&_a]:!text-[#8fd0ff]" /> : null}
        <div className="mt-8">
          <PillButton cta={tel} />
        </div>
      </div>
    </section>
  );
}

/* ---------- sections ---------- */

function Split({ s, id, bg }: { s: SplitSection; id: string; bg: BgKey }) {
  const boxed = bg === "ice";
  return (
    <Band id={id} style={{ ...s.style, bg: boxed ? "white" : s.style?.bg }} bg={boxed ? "white" : bg}>
      <div className={`grid items-center gap-10 lg:gap-14 ${s.image ? "lg:grid-cols-2" : ""}`}>
        <div className={`min-w-0 ${boxed ? "rounded-[20px] bg-[#f3faff] p-6 md:p-10" : ""} ${s.imageSide === "left" ? "lg:order-2" : ""}`}>
          <Chip text={s.eyebrow} />
          {s.heading ? <h2 className={`r-h2 ${s.eyebrow ? "mt-4" : ""} mb-5`}>{s.heading}</h2> : null}
          {s.intro?.length ? <RichText value={s.intro} base="r-rich" className="mb-4" /> : null}
          <RichText value={s.body} base="r-rich" />
          {s.checklist?.length ? (
            <ul className="r-rich mt-4">
              {s.checklist.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          ) : null}
          <CallRow ctas={s.ctas} />
        </div>
        {s.image ? (
          <div
            className={`relative overflow-hidden rounded-[20px] ${s.imageSide === "left" ? "lg:order-1" : ""}`}
            style={{ aspectRatio: s.image.width && s.image.height ? `${s.image.width} / ${s.image.height}` : "4 / 3" }}
          >
            <Photo image={s.image} sizes="(min-width: 1024px) 640px, 100vw" />
          </div>
        ) : null}
      </div>
    </Band>
  );
}

function Prose({ s, id, bg }: { s: ProseSection; id: string; bg: BgKey }) {
  const dark = bg === "navy" || bg === "dark";
  const center = s.style?.align === "center" || s.align === "center" || dark;
  const boxed = bg === "ice";
  const inner = (
    <>
      <Head s={s} dark={dark} center={center} />
      <RichText value={s.body} base="r-rich" className={`${center ? "mx-auto max-w-[1000px] text-center [&_ol]:text-left [&_ul]:text-left" : ""} -mt-4`} />
      <CallRow ctas={s.ctas} center={center} />
    </>
  );
  return (
    <Band id={id} style={{ ...s.style, bg: boxed ? "white" : s.style?.bg }} bg={boxed ? "white" : bg}>
      {boxed ? <div className="rounded-[20px] bg-[#f3faff] p-6 md:p-12">{inner}</div> : inner}
    </Band>
  );
}

function Cards({ s, id, bg }: { s: CardsSection; id: string; bg: BgKey }) {
  const cols = s.columns ?? 3;
  const grid = cols >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : cols === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2";
  const center = s.style?.align === "center" || !!s.eyebrow;
  const title = (c: CardsSection["cards"][number], cls: string) => (
    <h3 className={cls}>
      {c.href ? (
        <Link href={c.href} className="after:absolute after:inset-0 hover:underline">
          {c.title}
        </Link>
      ) : (
        c.title
      )}
    </h3>
  );

  let body: ReactNode;
  if (s.variant === "photo") {
    body = (
      <div className={`grid gap-5 ${cols >= 3 ? "grid-cols-2 lg:grid-cols-4" : grid}`}>
        {s.cards.map((c, i) => (
          <article key={c.title + i} className="r-card relative flex min-w-0 flex-col p-3 md:p-4">
            {c.image ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-[12px]">
                <Photo image={c.image} sizes="(min-width: 1024px) 300px, 50vw" />
              </div>
            ) : null}
            {title(c, "r-h3 mt-4 !text-lg")}
            <RichText value={c.text} base="r-rich" className="mt-2 text-sm" />
          </article>
        ))}
      </div>
    );
  } else if (s.variant === "numbered") {
    body = (
      <ol className={`grid gap-6 ${grid}`}>
        {s.cards.map((c, i) => (
          <li key={c.title + i} className="r-card relative min-w-0 p-6 pt-8">
            <span className="absolute -top-4 right-6 flex h-12 min-w-12 items-center justify-center rounded-[10px] bg-[#519dce] px-2 font-cal-sans text-2xl text-white" aria-hidden="true">
              {c.number ?? String(i + 1).padStart(2, "0")}
            </span>
            {title(c, "r-h3 pr-14")}
            <RichText value={c.text} base="r-rich" className="mt-3 text-[0.9375rem]" />
          </li>
        ))}
      </ol>
    );
  } else {
    // Plain cards: light-blue boxes (with a dot when they link to a page).
    const list = (
      <div className={`grid gap-5 ${s.image ? "" : grid}`}>
        {s.cards.map((c, i) => (
          <article key={c.title + i} className="relative min-w-0 rounded-[20px] bg-ice/70 p-6">
            {title(
              c,
              `font-rt text-xl leading-snug text-[#222] ${c.href ? "flex items-center gap-2.5 before:h-3 before:w-3 before:flex-none before:rounded-full before:border-[3px] before:border-[#519dce] before:content-['']" : ""}`,
            )}
            <RichText value={c.text} base="r-rich" className="mt-2 text-[0.9375rem]" />
          </article>
        ))}
      </div>
    );
    body = s.image ? (
      <div className="grid items-start gap-8 lg:grid-cols-2">
        {list}
        <div className="relative overflow-hidden rounded-[20px] lg:sticky lg:top-40" style={{ aspectRatio: s.image.width && s.image.height ? `${s.image.width} / ${s.image.height}` : "4 / 3" }}>
          <Photo image={s.image} sizes="(min-width: 1024px) 640px, 100vw" />
        </div>
      </div>
    ) : (
      list
    );
  }

  return (
    <Band id={id} style={s.style} bg={bg}>
      <Head s={s} center={center} dark={bg === "navy" || bg === "dark"} />
      {body}
      {s.outro?.length ? <RichText value={s.outro} base="r-rich" className="mx-auto mt-8 max-w-[900px] text-center" /> : null}
      <CallRow ctas={s.ctas} center />
    </Band>
  );
}

function Faq({ s, id, bg }: { s: FaqSection; id: string; bg: BgKey }) {
  if (!s.items?.length) return null;
  return (
    <Band id={id} style={s.style} bg={bg}>
      <Head s={{ ...s, eyebrow: s.eyebrow ?? "FAQs" }} />
      <div className="r-card mx-auto max-w-[1000px] px-6 py-4 md:px-12 md:py-8">
        {s.items.map((f, i) => (
          <details key={f.question + i} open={i === 0} className="group border-b border-[#eef1f4] last:border-b-0">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-4 [&::-webkit-details-marker]:hidden">
              <h3 className="font-rt text-lg leading-snug text-[#111]">{f.question}</h3>
              <Plus className="h-5 w-5 flex-none text-[#111] transition-transform group-open:rotate-45" strokeWidth={2.5} aria-hidden="true" />
            </summary>
            <RichText value={f.answer} base="r-rich" className="pb-5 text-[0.9375rem]" />
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: s.items.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: richText(f.answer) } })),
        }}
      />
    </Band>
  );
}

/** Reviews not used by the bat-removal design (first 3) or the old tabs (next 9) come first here. White band with a light-blue box. */
function Reviews({ s, id, testimonials, settings }: { s: ReviewsSection; id: string; testimonials: Testimonial[]; settings: SiteSettings }) {
  const items = [...testimonials.slice(12), ...testimonials.slice(0, 12)].filter((t) => t.source === "Google" || !t.source).slice(0, 8);
  if (!items.length) return null;
  return (
    <Band id={id} style={{ ...s.style, bg: "white" }} bg="white">
      <Head s={s} />
      <div className="rounded-[20px] bg-ice p-4 md:p-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-[14px] bg-white px-6 py-5">
          {settings.googleRating ? (
            <div className="flex flex-wrap items-center gap-x-2 font-dms text-[#222]">
              <span className="font-bold">Google Rating</span> <span className="text-xl font-bold">{settings.googleRating}</span>{" "}
              <Stars rating={Number(settings.googleRating)}  />{" "}
              {settings.reviewCount ? <span className="text-sm text-[#666]">{settings.reviewCount} reviews</span> : null}
            </div>
          ) : null}
          {settings.reviewsUrl ? <PillButton cta={{ label: "Write a Review", href: settings.reviewsUrl }} className="!min-h-10 !py-2 !text-[0.9375rem]" /> : null}
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t) => (
            <li key={t.name} className="rounded-[10px] bg-white p-5">
              <p className="font-dms font-bold text-[#222]">{t.name}</p>
              <Stars rating={t.rating} className="mt-1" />
              <blockquote className="mt-3 font-dms text-sm leading-relaxed text-[#444]">{t.quote}</blockquote>
            </li>
          ))}
        </ul>
      </div>
    </Band>
  );
}

function CtaBox({ s, id, settings }: { s: CtaSection; id: string; settings: SiteSettings }) {
  const tel = s.ctas?.find((c) => c.href.startsWith("tel:")) ?? { label: settings.phone, href: settings.phoneHref };
  return (
    <Band id={id} style={{ bg: "white" }} bg="white">
      <div className="rounded-[30px] bg-ice p-3 md:p-4">
        <div className="rounded-[24px] bg-white px-6 py-12 text-center md:px-16 md:py-14">
          {s.heading ? <h2 className="r-h2">{s.heading}</h2> : null}
          <RichText value={s.text} base="r-rich" className="mx-auto mt-4 max-w-[900px]" />
          <div className="mt-8">
            <PillButton cta={tel} />
          </div>
        </div>
      </div>
    </Band>
  );
}

function Contact({ s, id, settings }: { s: ContactSection; id: string; settings: SiteSettings }) {
  const a = settings.address;
  return (
    <Band id={id} style={{ ...s.style, bg: "white" }} bg="white">
      <div className="grid items-start gap-8 rounded-[20px] bg-[#f3faff] p-6 md:p-10 lg:grid-cols-2">
        <div className="min-w-0">
          <h2 className="r-h2 !text-[clamp(1.5rem,1.2rem+0.8vw,2rem)]">{s.heading && s.heading !== settings.name ? s.heading : "Contact Us"}</h2>
          <address className="r-rich mt-4 not-italic">
            {settings.name}
            <br />
            {a.street}, {a.city}, {a.region} {a.postalCode}
            <br />
            <a href={settings.phoneHref} data-track="click_to_call">
              {settings.phone}
            </a>
            {" · "}
            <a href={`mailto:${settings.email}`} className="break-all">
              {settings.email}
            </a>
          </address>
          <h3 className="r-h2 mt-8 !text-[clamp(1.375rem,1.1rem+0.6vw,1.75rem)]">Office Hours</h3>
          <dl className="r-rich mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
            {settings.hours.map((h) => (
              <div key={h.label} className="contents">
                <dt className="font-semibold">{h.label}:</dt>
                <dd>{h.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <PillButton cta={{ label: settings.phone, href: settings.phoneHref }} />
          </div>
        </div>
        {s.map && settings.mapEmbedUrl ? (
          <div className="relative h-[320px] overflow-hidden rounded-[16px] lg:h-full lg:min-h-[380px]">
            <iframe title={`Map of ${settings.name}`} src={settings.mapEmbedUrl} className="absolute inset-0 h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        ) : null}
      </div>
    </Band>
  );
}

function Areas({ s, id, bg }: { s: Pick<AreasSection, "eyebrow" | "heading" | "intro" | "groups" | "note" | "style">; id: string; bg: BgKey }) {
  return (
    <Band id={id} style={s.style} bg={bg}>
      <Head s={s} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {s.groups.map((g, gi) => (
          <div key={(g.title ?? "") + gi} className="min-w-0 rounded-[16px] bg-ice/80 p-6">
            {g.title ? (
              <h3 className="font-nu text-lg font-bold text-[#222]">
                {g.href ? (
                  <Link href={g.href} className="hover:underline">
                    {g.title}
                  </Link>
                ) : (
                  g.title
                )}
              </h3>
            ) : null}
            <ul className="mt-2 grid gap-1 font-nu text-[0.975rem] text-[#333]">
              {g.items.map((it) => (
                <li key={it.label} className="flex items-center gap-2.5 before:h-3 before:w-3 before:flex-none before:rounded-full before:border-[3px] before:border-[#519dce] before:content-['']">
                  {it.href ? (
                    <Link href={it.href} className="underline-offset-2 hover:underline">
                      {it.label}
                    </Link>
                  ) : (
                    it.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {s.note ? <p className="mx-auto mt-10 max-w-[900px] text-center">{s.note}</p> : null}
    </Band>
  );
}

function ServicesGrid({ s, id, bg, services }: { s: ServicesSection; id: string; bg: BgKey; services: Service[] }) {
  const list = services.filter((x) => (s.group && s.group !== "all" ? x.group === s.group : x.group === "removal"));
  return (
    <Band id={id} style={s.style} bg={bg}>
      <Head s={s} />
      <ul className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {list.map((x) => {
          const img = x.cardImage ?? x.hero.image ?? x.hero.style?.image;
          return (
            <li key={x.slug} className="r-card relative p-3 md:p-4">
              {img ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-[12px]">
                  <Photo image={{ ...img, alt: img.alt || x.title }} sizes="(min-width: 1024px) 300px, 50vw" />
                </div>
              ) : null}
              <h3 className="r-h3 mt-4 !text-lg">
                <Link href={`/services/${x.slug}/`} className="after:absolute after:inset-0 hover:underline">
                  {x.title}
                </Link>
              </h3>
              {x.summary ? <p className="mt-1 text-sm text-[#5d6578]">{x.summary}</p> : null}
            </li>
          );
        })}
      </ul>
    </Band>
  );
}

export function RefreshSections({ sections, data }: { sections: Section[]; data: ClassicData }) {
  const ids = sectionIds(sections, ["top", "main"]);
  return (
    <>
      {sections.map((s, i) => {
        const bg: BgKey = s.style?.bg ?? "white";
        const p = { id: ids[i], bg };
        switch (s._type) {
          case "splitSection":
            return <Split key={s._key} s={s} {...p} />;
          case "proseSection":
            return <Prose key={s._key} s={s} {...p} />;
          case "cardsSection":
            return s.cards?.length ? <Cards key={s._key} s={s} {...p} /> : null;
          case "faqSection":
            return <Faq key={s._key} s={s} {...p} />;
          case "reviewsSection":
            return <Reviews key={s._key} s={s} id={p.id} testimonials={data.testimonials} settings={data.settings} />;
          case "ctaSection":
            return <CtaBox key={s._key} s={s} id={p.id} settings={data.settings} />;
          case "contactSection":
            return <Contact key={s._key} s={s} id={p.id} settings={data.settings} />;
          case "areasSection":
            return s.groups?.length ? <Areas key={s._key} s={s} {...p} /> : null;
          case "locationsSection":
            return <Areas key={s._key} s={{ ...s, groups: locationGroups(data.locations) }} {...p} />;
          case "servicesSection":
            return <ServicesGrid key={s._key} s={s} {...p} services={data.services} />;
          default:
            return null;
        }
      })}
    </>
  );
}
