import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import type {
  AreasSection,
  BgKey,
  CardsSection,
  ContactSection,
  Cta,
  CtaSection,
  FaqSection,
  Hero,
  Img,
  Location,
  Post,
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
import { richText } from "@/lib/text";
import { real } from "@/lib/placeholders";
import { classicVars, sectionIds } from "./theme";
import { TypedWords } from "./TypedWords";
import { ReviewTabs } from "./ReviewTabs";
import { getSiteSettings } from "@/lib/content";
import { callCtas } from "@/lib/cta";

/*
 * The old theme (the 2019 Elementor site) that most pages use: full-width
 * colour bands (navy, blue, beige), uppercase Roboto headings with a thick
 * divider bar, photos in a 5px frame, the orange phone button, image boxes
 * with a 10px dark border and blue title-bar boxes. Colours per section come
 * from the live page (section.style).
 */

export type ClassicData = { settings: SiteSettings; testimonials: Testimonial[]; services: Service[]; locations: Location[]; posts: Post[] };

/* ---------- building blocks ---------- */

function Band({ id, style, bg, join, center, children, className = "" }: { id?: string; style?: SectionStyle; bg: BgKey; join?: boolean; center?: boolean; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`o-sec ${join ? "o-join" : ""} ${center ? "o-center" : ""} ${className}`} style={classicVars(style, bg)}>
      <div className="o-wrap">{children}</div>
    </section>
  );
}

/** Section heading with the divider bar under it. Sections without a heading only get the bar when the live page had one there. */
function Head({ heading, style, as: Tag = "h2" }: { heading?: string; style?: SectionStyle; as?: "h1" | "h2" }) {
  const bar = !!heading || !!style?.divider;
  if (!heading) return bar ? <span className="o-bar" aria-hidden="true" /> : null;
  return (
    <>
      <Tag className={Tag === "h1" ? "o-h1" : "o-h2"}>{heading}</Tag>
      {bar ? <span className="o-bar" aria-hidden="true" /> : null}
    </>
  );
}

/** The orange phone button (the live site's only button style). */
function PhoneButton({ cta, className = "" }: { cta: Cta; className?: string }) {
  const tel = cta.href.startsWith("tel:");
  if (tel || /^https?:/.test(cta.href))
    return (
      <a href={cta.href} className={`o-btn ${className}`} data-track={tel ? "click_to_call" : undefined}>
        {cta.label}
      </a>
    );
  return (
    <Link href={cta.href} className={`o-btn ${className}`}>
      {cta.label}
    </Link>
  );
}

async function Buttons({ ctas: given, center }: { ctas?: Cta[]; center?: boolean }) {
  const settings = await getSiteSettings();
  const ctas = callCtas(given, settings.phone, settings.phoneHref);
  if (!ctas.length) return null;
  return (
    <div className={`mt-8 flex flex-wrap gap-4 ${center ? "justify-center" : ""}`}>
      {ctas.map((c, i) => (
        <PhoneButton key={c.href + i} cta={c} />
      ))}
    </div>
  );
}

/** A photo at its natural size (never wider than its column) in the 5px frame. */
function Framed({ image, sizes = "(min-width: 768px) 540px, 100vw", priority, frame = true }: { image: Img; sizes?: string; priority?: boolean; frame?: boolean }) {
  const ratio = image.width && image.height ? `${image.width} / ${image.height}` : "4 / 3";
  return (
    <div className={`relative mx-auto w-full overflow-hidden ${frame ? "o-frame" : ""}`} style={{ maxWidth: image.width ? Math.min(image.width + 10, 560) : 560, aspectRatio: ratio }}>
      <Photo image={image} sizes={sizes} priority={priority} />
    </div>
  );
}

/* ---------- hero ---------- */

function phoneCta(hero: Hero, settings: SiteSettings): Cta {
  const tel = hero.ctas?.find((c) => c.href.startsWith("tel:"));
  return tel ?? hero.ctas?.[0] ?? { label: settings.phone, href: settings.phoneHref };
}

/** Header band: a full-width photo with the centred uppercase heading, or (pages without a photo) a beige band with the heading, button and divider. */
export function ClassicHero({ hero, settings }: { hero: Hero; settings: SiteSettings }) {
  const st = hero.style ?? {};
  const cta = phoneCta(hero, settings);
  if (st.image) {
    const overlay = st.overlay ?? (hero.rotator ? 0 : 0.45);
    return (
      <section id="top" className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-old-navy py-20 md:min-h-[600px] md:py-28">
        <Photo image={st.image} priority sizes="100vw" className="-z-20" />
        {overlay ? <div className="absolute inset-0 -z-10 bg-black" style={{ opacity: overlay }} aria-hidden="true" /> : null}
        <div className="o-wrap text-center">
          <h1 className="mx-auto max-w-[900px] font-old text-[clamp(2rem,1.1rem+3vw,3.4375rem)] font-extrabold uppercase leading-[1.1] text-white [text-shadow:0_2px_12px_rgb(0_0_0/0.35)]">
            {hero.heading}
          </h1>
          {hero.rotator?.length ? (
            <div className="mt-6 grid justify-items-center gap-2">
              <TypedWords words={hero.rotator} suffix={hero.rotatorSuffix} />
              <ChevronDown className="h-7 w-7 text-white" strokeWidth={2.5} aria-hidden="true" />
            </div>
          ) : null}
          <PhoneButton cta={cta} className="mt-7" />
          {hero.text?.length ? (
            <RichText value={hero.text} base="o-rich" className="mx-auto mt-7 max-w-[600px] text-left font-semibold italic [--l:#fff] [--t:#fff] [text-shadow:0_1px_6px_rgb(0_0_0/0.4)]" />
          ) : null}
        </div>
      </section>
    );
  }
  const bg = st.bg ?? "beige";
  return (
    <section id="top" className="o-sec !pb-0" style={classicVars(st, bg)}>
      <div className="o-wrap">
        <h1 className="o-h1">{hero.heading}</h1>
        {hero.ctas?.length ? <PhoneButton cta={cta} className="mt-6" /> : null}
        <span className="o-bar" aria-hidden="true" />
        {hero.text?.length || hero.image ? (
          <div className={`grid items-start gap-8 pb-4 ${hero.image ? "md:grid-cols-2 md:gap-10" : ""}`}>
            <RichText value={hero.text} base="o-rich" />
            {hero.image ? <Framed image={hero.image} priority /> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/* ---------- sections ---------- */

function Split({ s, id, bg, join }: { s: SplitSection; id: string; bg: BgKey; join: boolean }) {
  const above = s.style?.headingAbove || !s.body?.length;
  const center = s.style?.align === "center";
  const head = <Head heading={s.heading} style={s.style} />;
  return (
    <Band id={id} style={s.style} bg={bg} join={join} center={center && above}>
      {above ? head : null}
      <div className={`grid items-start gap-8 md:gap-10 ${s.image ? "md:grid-cols-2" : ""}`}>
        <div className={`min-w-0 ${s.imageSide === "left" ? "md:order-2" : ""} ${center && above ? "text-left" : ""}`}>
          {above ? null : head}
          {s.intro?.length ? <RichText value={s.intro} base="o-rich" className="mb-4" /> : null}
          <RichText value={s.body} base="o-rich" />
          {s.checklist?.length ? (
            <ul className="o-rich mt-4">
              {s.checklist.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          ) : null}
          <Buttons ctas={s.ctas} />
        </div>
        {s.image ? (
          <div className={s.imageSide === "left" ? "md:order-1" : ""}>
            <Framed image={s.image} />
          </div>
        ) : null}
      </div>
    </Band>
  );
}

function Prose({ s, id, bg, join }: { s: ProseSection; id: string; bg: BgKey; join: boolean }) {
  const center = s.style?.align === "center" || s.align === "center";
  return (
    <Band id={id} style={s.style} bg={bg} join={join} center={center}>
      <Head heading={s.heading} style={s.style} />
      <div className={center ? "mx-auto max-w-[780px] text-left" : ""}>
        {s.intro?.length ? <RichText value={s.intro} base="o-rich" className="mb-4" /> : null}
        <RichText value={s.body} base="o-rich" />
      </div>
      <Buttons ctas={s.ctas} center={center} />
    </Band>
  );
}

function Cards({ s, id, bg, join }: { s: CardsSection; id: string; bg: BgKey; join: boolean }) {
  const center = s.style?.align === "center";
  const cols = Math.min(s.columns ?? 3, 3);
  const grid = cols >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2";
  const dark = bg === "navy" || bg === "blue" || bg === "dark";
  const photo = s.variant === "photo" && s.cards.some((c) => c.image);
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
  if (photo && s.style?.frame) {
    // City pages: one white panel per service, photo and text alternating sides.
    body = (
      <div className="grid gap-10">
        {s.cards.map((c, i) => (
          <article key={c.title + i} className={`grid items-center gap-8 bg-white p-6 text-left md:p-10 ${c.image ? "md:grid-cols-2" : ""}`}>
            <div className={`min-w-0 ${i % 2 ? "md:order-2" : ""}`}>
              <h3 className="o-h2 mb-4 !text-[clamp(1.5rem,1.2rem+0.9vw,1.875rem)]">{c.title}</h3>
              <RichText value={c.text} base="o-rich" />
            </div>
            {c.image ? (
              <div className={i % 2 ? "md:order-1" : ""}>
                <Framed image={c.image} sizes="(min-width: 768px) 480px, 100vw" />
              </div>
            ) : null}
          </article>
        ))}
      </div>
    );
  } else if (photo && dark && bg === "blue") {
    // Home "Specialized services": photo, light title, text, no border.
    body = (
      <div className={`grid gap-x-8 gap-y-12 ${grid}`}>
        {s.cards.map((c, i) => (
          <article key={c.title + i} className="relative min-w-0">
            {c.image ? (
              <div className="relative aspect-[3/2] overflow-hidden">
                <Photo image={c.image} sizes="(min-width: 768px) 540px, 100vw" />
              </div>
            ) : null}
            {title(c, "o-h3 mt-4 mb-5 text-center !font-medium")}
            <RichText value={c.text} base="o-rich" className="px-2 text-base md:px-4" />
          </article>
        ))}
      </div>
    );
  } else if (photo && !dark) {
    // Home services: image boxes with the dark 10px border.
    body = (
      <div className={`grid gap-6 ${grid}`}>
        {s.cards.map((c, i) => (
          <article key={c.title + i} className="o-box relative min-w-0 self-start">
            {c.image ? (
              <div className="relative aspect-[4/3] overflow-hidden">
                <Photo image={c.image} sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw" />
              </div>
            ) : null}
            {title(c, "o-h3 mt-5 mb-4 px-2")}
            <RichText value={c.text} base="o-rich" className="pb-4 text-base [&_p]:leading-[1.8]" />
          </article>
        ))}
      </div>
    );
  } else if (photo || (!dark && s.variant !== "numbered")) {
    // Blue title-bar boxes (trapping / services on navy).
    body = (
      <div className={`grid gap-4 ${grid}`}>
        {s.cards.map((c, i) => (
          <article key={c.title + i} className="o-tbox relative flex min-w-0 flex-col text-left">
            {c.image ? (
              <div className="relative aspect-[4/3] overflow-hidden">
                <Photo image={c.image} sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw" />
              </div>
            ) : null}
            {title(c, `o-tbar px-3 py-1.5 ${c.image ? "text-[1.5rem]" : "text-lg uppercase"}`)}
            <RichText value={c.text} base="o-rich" className="flex-1 border-t-[3px] border-old-blue px-3 py-4 text-base" />
          </article>
        ))}
      </div>
    );
  } else if (s.variant === "numbered") {
    // Step-by-step processes: numbered circles, orange titles.
    body = (
      <ol className={`grid gap-10 ${grid}`}>
        {s.cards.map((c, i) => (
          <li key={c.title + i} className="relative min-w-0 text-center">
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-white bg-old-blue font-old text-2xl font-bold text-white" aria-hidden="true">
              {c.number ?? i + 1}
            </span>
            {title(c, "mb-3 font-sans text-xl font-semibold uppercase text-call")}
            <RichText value={c.text} base="o-rich" className="text-base" />
          </li>
        ))}
      </ol>
    );
  } else {
    // FAQ-style question and answer list on navy.
    body = (
      <div className="mx-auto grid max-w-[780px] gap-6 text-left">
        {s.cards.map((c, i) => (
          <div key={c.title + i} className="relative">
            {title(c, "mb-2 font-old text-lg font-bold text-[var(--h)]")}
            <RichText value={c.text} base="o-rich" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <Band id={id} style={s.style} bg={bg} join={join} center={center}>
      <Head heading={s.heading} style={s.style} />
      {s.intro?.length ? <RichText value={s.intro} base="o-rich" className={`mb-10 ${center ? "mx-auto max-w-[780px] text-left" : "max-w-[780px]"}`} /> : null}
      {body}
      {s.outro?.length ? <RichText value={s.outro} base="o-rich" className={`mt-10 ${center ? "mx-auto max-w-[780px] text-left" : ""}`} /> : null}
      <Buttons ctas={s.ctas} center={center} />
    </Band>
  );
}

function Faq({ s, id, bg, join }: { s: FaqSection; id: string; bg: BgKey; join: boolean }) {
  if (!s.items?.length) return null;
  const center = s.style?.align === "center";
  return (
    <Band id={id} style={s.style} bg={bg} join={join} center={center}>
      <Head heading={s.heading} style={s.style} />
      {s.intro?.length ? <RichText value={s.intro} base="o-rich" className="mx-auto mb-8 max-w-[780px] text-left" /> : null}
      <div className="mx-auto max-w-[780px] text-left">
        {s.items.map((f, i) => (
          <details key={f.question + i} className="group border-b border-current/25">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 px-3 py-3.5 [&::-webkit-details-marker]:hidden">
              <h3 className="font-old text-lg font-medium leading-snug text-[var(--h)]">{f.question}</h3>
              <ChevronDown className="h-5 w-5 flex-none text-[var(--h)] transition-transform group-open:rotate-180" strokeWidth={2.25} aria-hidden="true" />
            </summary>
            <RichText value={f.answer} base="o-rich" className="px-3 pb-5 text-base" />
          </details>
        ))}
      </div>
      <Buttons ctas={s.ctas} center={center} />
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

/** The first three reviews are the bat-removal design's featured ones; the old tabs show the next three per site. */
const FEATURED_REVIEWS = 3;

function Reviews({ s, id, bg, join, testimonials, settings }: { s: ReviewsSection; id: string; bg: BgKey; join: boolean; testimonials: Testimonial[]; settings: SiteSettings }) {
  const pool = testimonials.slice(FEATURED_REVIEWS);
  const sources = ["Google", "Yelp", "Facebook"].filter((src) => pool.some((t) => t.source === src));
  if (!sources.length) return null;
  return (
    <Band id={id} style={{ align: "center", ...s.style }} bg={bg} join={join} center>
      <Head heading={s.heading ?? "Customer Reviews"} style={s.style} />
      {s.intro?.length ? <RichText value={s.intro} base="o-rich" className="mx-auto mb-8 max-w-[780px]" /> : null}
      <div className="text-left">
        <ReviewTabs
          tabs={sources.map((src) => ({
            label: src,
            panel: (
              <ul className="grid gap-6">
                {pool
                  .filter((t) => t.source === src)
                  .slice(0, 3)
                  .map((t) => (
                    <li key={t.name}>
                      <p className="font-old text-xs font-bold uppercase tracking-wide text-black">{t.name}</p>
                      <p className="mt-1 font-old text-sm text-[#d00]" aria-label={`Rated ${t.rating} out of 5`}>
                        {t.rating.toFixed(1)} <span aria-hidden="true">{"★".repeat(Math.round(t.rating))}</span>
                      </p>
                      <blockquote className="mt-1 text-[0.95rem] leading-relaxed text-[#555]">{t.quote}</blockquote>
                    </li>
                  ))}
              </ul>
            ),
          }))}
        />
      </div>
      {settings.reviewsUrl ? (
        <p className="mt-6 text-base">
          <a href={settings.reviewsUrl} target="_blank" rel="noopener" className="underline underline-offset-4">
            Read all {settings.reviewCount ? `${settings.reviewCount} ` : ""}reviews on Google
          </a>
        </p>
      ) : null}
    </Band>
  );
}

function CtaBand({ s, id, bg, join, settings }: { s: CtaSection; id: string; bg: BgKey; join: boolean; settings: SiteSettings }) {
  const style: SectionStyle = { bg: "blue", heading: "beige", text: "beige", divider: "navy", link: "white", ...s.style };
  const tel = s.ctas?.find((c) => c.href.startsWith("tel:")) ?? { label: settings.phone.replace(/[()]/g, "").replace(" ", "-"), href: settings.phoneHref };
  return (
    <Band id={id} style={style} bg={bg} join={join}>
      <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10">
        <div className="min-w-0">
          <Head heading={s.heading} style={style} />
          <RichText value={s.text} base="o-rich" />
        </div>
        <div className="flex justify-center md:pt-2">
          <PhoneButton cta={tel} />
        </div>
      </div>
    </Band>
  );
}

/** Call-only contact block: the client takes requests by phone and has no public street address. No hours label (Kia, Oct 26, 2026). */
function Contact({ s, id, bg, join, settings }: { s: ContactSection; id: string; bg: BgKey; join: boolean; settings: SiteSettings }) {
  const license = real(settings.license);
  return (
    <Band id={id} style={s.style} bg={bg} join={join}>
      {s.heading ? <Head heading={s.heading} style={s.style} /> : null}
      <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr]">
        <div className="o-rich min-w-0">
          <h2 className="o-h3 !text-[var(--h)]">{settings.name}</h2>
          <p>
            <a href={settings.phoneHref} data-track="click_to_call" className="font-old text-2xl font-bold !text-[var(--h)] !no-underline">
              {settings.phone}
            </a>
            {settings.tollFree ? <span className="block text-base">{settings.tollFree}</span> : null}
          </p>
          <p>
            <a href={`mailto:${settings.email}`} className="break-all">
              {settings.email}
            </a>
          </p>
          {license ? <p className="text-base">{license}</p> : null}
          {settings.countyLines.length ? (
            <>
              <h3>Local lines by county</h3>
              <ul className="!list-none !pl-0 text-base sm:columns-2">
                {settings.countyLines.map((c) => (
                  <li key={c.county} className="break-inside-avoid">
                    {c.county}:{" "}
                    <a href={`tel:+1${c.phone.replace(/\D/g, "")}`} data-track="click_to_call">
                      {c.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
        <div className="order-first bg-white p-6 text-center text-body sm:p-8">
          <p className="font-old text-lg font-semibold uppercase text-old-navy">Call us</p>
          <PhoneButton cta={{ label: settings.phone.replace(/[()]/g, "").replace(" ", "-"), href: settings.phoneHref }} className="mt-5" />
          <p className="mt-5 text-[0.95rem]">{settings.serviceAreaText}</p>
        </div>
      </div>
    </Band>
  );
}

function ServicesGrid({ s, id, bg, join, services }: { s: ServicesSection; id: string; bg: BgKey; join: boolean; services: Service[] }) {
  const list = services.filter((x) => (s.group && s.group !== "all" ? x.group === s.group : x.group === "removal"));
  const style: SectionStyle = { bg: "beige", heading: "navy", text: "grey", divider: "blue", align: "center", ...s.style };
  return (
    <Band id={id} style={style} bg={bg} join={join} center>
      <Head heading={s.heading} style={style} />
      {s.intro?.length ? <RichText value={s.intro} base="o-rich" className="mx-auto mb-10 max-w-[780px] text-left" /> : null}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((x) => {
          const img = x.cardImage ?? x.hero.image ?? x.hero.style?.image;
          return (
            <li key={x.slug} className="o-box relative">
              {img ? (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Photo image={{ ...img, alt: img.alt || x.title }} sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw" />
                </div>
              ) : null}
              <h3 className="o-h3 px-2 py-5">
                <Link href={`/services/${x.slug}/`} className="after:absolute after:inset-0 hover:underline">
                  {x.title}
                </Link>
              </h3>
            </li>
          );
        })}
      </ul>
    </Band>
  );
}

function Areas({ s, id, bg, join }: { s: AreasSection; id: string; bg: BgKey; join: boolean }) {
  return (
    <Band id={id} style={s.style} bg={bg} join={join} center={s.style?.align === "center"}>
      <Head heading={s.heading} style={s.style} />
      {s.intro?.length ? <RichText value={s.intro} base="o-rich" className="mb-8" /> : null}
      <div className="grid gap-8 text-left sm:grid-cols-2 lg:grid-cols-3">
        {s.groups.map((g, gi) => (
          <div key={(g.title ?? "") + gi} className="o-rich">
            {g.title ? <h3>{g.href ? <Link href={g.href}>{g.title}</Link> : g.title}</h3> : null}
            <ul>
              {g.items.map((it) => (
                <li key={it.label}>{it.href ? <Link href={it.href}>{it.label}</Link> : it.label}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {s.note ? <p className="mt-8">{s.note}</p> : null}
    </Band>
  );
}

/** Background a section is drawn on (used to merge two touching bands of the same colour). */
function bgOf(s: Section): BgKey {
  if (s._type === "ctaSection") return s.style?.bg ?? "blue";
  return s.style?.bg ?? "beige";
}

/** Every section of an old-theme page, each with its own anchor id. */
export function ClassicSections({ sections, data, heroBg }: { sections: Section[]; data: ClassicData; heroBg?: BgKey }) {
  const ids = sectionIds(sections, ["top", "main"]);
  const bgs = sections.map(bgOf);
  return (
    <>
      {sections.map((s, i) => {
        const bg = bgs[i];
        // Two touching bands of the same colour read as one: no gap between them.
        const join = (i ? bgs[i - 1] : heroBg) === bg;
        const p = { id: ids[i], bg, join };
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
            return <Reviews key={s._key} s={s} {...p} testimonials={data.testimonials} settings={data.settings} />;
          case "ctaSection":
            return <CtaBand key={s._key} s={s} {...p} settings={data.settings} />;
          case "contactSection":
            return <Contact key={s._key} s={s} {...p} settings={data.settings} />;
          case "servicesSection":
            return <ServicesGrid key={s._key} s={s} {...p} services={data.services} />;
          case "areasSection":
            return s.groups?.length ? <Areas key={s._key} s={s} {...p} /> : null;
          default:
            return null;
        }
      })}
    </>
  );
}

export const classicHeroBg = (hero: Hero): BgKey | undefined => (hero.style?.image ? undefined : (hero.style?.bg ?? "beige"));
