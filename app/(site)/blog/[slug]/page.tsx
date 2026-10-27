import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, Check, ChevronDown, Tag, UserRound } from "lucide-react";
import { getPost, getPosts, getServices, getSiteSettings } from "@/lib/content";
import { relatedLinks } from "@/lib/post-links";
import { pageMetadata } from "@/lib/seo";
import { articleSchema, webPageSchema } from "@/lib/schema";
import { formatDate, slugify } from "@/lib/text";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RichText } from "@/components/ui/RichText";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { AreasSection } from "@/components/sections/AreasSection";
import { RatingChip, perks } from "@/components/sections/PageHero";
import { ReadProgress } from "@/components/ui/ReadProgress";

// Posts not in the build (a new draft opened from a TTR OS preview link) render on request; unknown slugs still 404.
export const dynamicParams = true;

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPost(slug);
  if (!post) return {};
  return pageMetadata(post.seo, `/blog/${slug}/`, post.image, "article");
}

/** The post's h2 headings, for the page's section index. */
function headings(post: NonNullable<Awaited<ReturnType<typeof getPost>>>) {
  return post.body.flatMap((b) => {
    const block = b as { _type?: string; style?: string; children?: { text?: string }[] };
    if (block._type !== "block" || block.style !== "h2") return [];
    const name = (block.children ?? [])
      .map((c) => c.text ?? "")
      .join("")
      .trim();
    return name ? [name] : [];
  });
}

/**
 * Blog post or guide in the service-page family: tint header with the
 * title, author and date, the call button and a drifting photo; then the
 * article in a readable column with, on desktop, a sticky list of its
 * sections and a navy call card beside it (the list folds above the article
 * on phones), a reading progress bar, and the navy closing band.
 */
export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const [post, settings, posts, services] = await Promise.all([getPost(slug), getSiteSettings(), getPosts(), getServices()]);
  if (!post) notFound();
  const path = `/blog/${slug}/`;
  const parts = headings(post).map((name) => ({ name, id: slugify(name) }));
  return (
    <>
      <JsonLd data={articleSchema(post, path)} />
      <JsonLd data={webPageSchema(path, post.seo.title, post.seo.description, parts)} />
      <ReadProgress target="post-body" />
      <article>
        <header className="relative overflow-hidden bg-tint">
          <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgb(30_155_240/0.18),transparent)]" />
          <div className={`wrap relative grid items-center gap-9 pt-7 pb-12 md:pt-10 min-[900px]:gap-14 min-[900px]:pt-14 min-[900px]:pb-16 ${post.image ? "min-[900px]:grid-cols-[54fr_46fr]" : ""}`}>
            <div className="min-w-0">
              <Breadcrumbs
                items={[
                  { label: "Blog", href: "/blog/" },
                  { label: post.title, href: path },
                ]}
              />
              <h1 className="text-[clamp(2rem,1.3rem+2.2vw,3.125rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">{post.title}</h1>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-display text-[0.9375rem] font-medium text-meta">
                {post.author ? (
                  <li className="flex items-center gap-1.5">
                    <UserRound className="h-4 w-4 text-blue-deep" strokeWidth={2} aria-hidden="true" />
                    {post.author}
                  </li>
                ) : null}
                {post.date ? (
                  <li className="flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4 text-blue-deep" strokeWidth={2} aria-hidden="true" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </li>
                ) : null}
                <li className="flex items-center gap-1.5">
                  <Tag className="h-4 w-4 text-blue-deep" strokeWidth={2} aria-hidden="true" />
                  Blog
                </li>
              </ul>
              {/* Calls only (the client's choice): the number is one tap away at the top of every post. */}
              <div className="mt-7">
                <Button href={settings.phoneHref} className="w-full sm:w-auto">
                  Call {settings.phone}
                </Button>
              </div>
            </div>
            {post.image ? (
              <div className="photo-live relative aspect-[16/10] overflow-hidden rounded-[22px] shadow-[0_30px_60px_-30px_rgb(14_42_71/0.55)] ring-1 ring-navy/5">
                <Photo image={post.image} priority sizes="(min-width: 900px) 46vw, 100vw" />
              </div>
            ) : null}
          </div>
        </header>
        <div id="post-body" className="wrap grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
          <div className="min-w-0">
            {parts.length > 2 ? (
              // Phones: the section list folds away above the article.
              <details className="group mb-8 rounded-2xl border border-line bg-tint-2 lg:hidden">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-5 font-display font-bold text-navy">
                  In this guide
                  <ChevronDown className="h-5 w-5 transition-transform duration-200 group-open:rotate-180" strokeWidth={2.25} aria-hidden="true" />
                </summary>
                <ol className="grid gap-1 px-5 pb-4">
                  {parts.map((p) => (
                    <li key={p.id}>
                      <a href={`#${p.id}`} className="flex min-h-11 items-center text-[0.975rem] font-medium text-blue-deep hover:underline">
                        {p.name}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>
            ) : null}
            <RichText value={post.body} article className="max-w-[760px] text-[1.0625rem] leading-[1.8] md:text-lg [&_h2]:scroll-mt-36" />
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-36 grid gap-5">
              <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-navy via-navy-3 to-navy-2 p-6 text-center text-white shadow-[0_24px_50px_-28px_rgb(14_42_71/0.6)]">
                <span className="tag-nudge inline-flex rounded-md bg-cta px-2.5 py-1 font-display text-xs font-extrabold tracking-[1px] uppercase">Free Inspection</span>
                <a href={settings.phoneHref} data-track="click_to_call" className="mt-4 block font-display text-[1.75rem] leading-none font-extrabold whitespace-nowrap hover:text-blue-light">
                  {settings.phone}
                </a>
                <ul className="mt-4 grid justify-center gap-1.5">
                  {perks.map((p) => (
                    <li key={p} className="flex items-center gap-2 font-display text-[0.9375rem] font-semibold">
                      <Check className="h-4 w-4 text-blue-light" strokeWidth={3} aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Button href={settings.phoneHref} className="mt-5 w-full px-4 whitespace-nowrap">
                  Call Now
                </Button>
                <RatingChip settings={settings} light className="mt-4 justify-center" />
              </div>
              {parts.length > 2 ? (
                <nav aria-label="In this guide" className="max-h-[calc(100vh-34rem)] min-h-40 overflow-y-auto rounded-[22px] border border-line bg-tint-2 p-5">
                  <p className="mb-2 font-display text-xs font-bold tracking-[1.5px] text-blue-deep uppercase">In this guide</p>
                  <ol className="grid gap-0.5">
                    {parts.map((p) => (
                      <li key={p.id}>
                        <a href={`#${p.id}`} className="block rounded-lg px-2 py-1.5 text-[0.9375rem] leading-snug font-medium text-navy hover:bg-white hover:text-blue-deep">
                          {p.name}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              ) : null}
            </div>
          </aside>
        </div>
      </article>
      <AreasSection section={relatedLinks(post, posts, services)} />
      {post.faq?.length ? <FaqSection section={{ _type: "faqSection", _key: "faq", tone: "tint", heading: "Frequently Asked Questions", items: post.faq }} /> : null}
      <CtaSection settings={settings} />
    </>
  );
}
