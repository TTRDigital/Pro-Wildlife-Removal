import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, Tag, UserRound } from "lucide-react";
import { getPost, getPosts, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { articleSchema, webPageSchema } from "@/lib/schema";
import { formatDate, slugify } from "@/lib/text";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RichText } from "@/components/ui/RichText";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/sections/CtaSection";

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
 * article in a readable column with a sticky call card beside it on
 * desktop, and the navy closing band.
 */
export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const [post, settings] = await Promise.all([getPost(slug), getSiteSettings()]);
  if (!post) notFound();
  const path = `/blog/${slug}/`;
  const parts = headings(post).map((name) => ({ name, id: slugify(name) }));
  return (
    <>
      <JsonLd data={articleSchema(post, path)} />
      <JsonLd data={webPageSchema(path, post.seo.title, post.seo.description, parts)} />
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
        <div className="wrap grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14">
          <RichText value={post.body} article className="min-w-0 max-w-[760px] text-[1.0625rem] leading-[1.8] md:text-lg [&_h2]:scroll-mt-28" />
          <aside className="hidden lg:block">
            <div className="sticky top-32 rounded-[22px] border border-line bg-white p-6 text-center shadow-[0_20px_50px_-30px_rgb(14_42_71/0.4)]">
              <p className="inline-flex items-center gap-2 font-display text-h3 font-bold text-navy">
                <span className="live-dot" aria-hidden="true" />
                Call us, open 24/7
              </p>
              <p className="mt-2 text-[0.95rem]">{settings.serviceAreaText}</p>
              <Button href={settings.phoneHref} className="mt-5 w-full">
                Call {settings.phone}
              </Button>
            </div>
          </aside>
        </div>
      </article>
      <CtaSection settings={settings} />
    </>
  );
}
