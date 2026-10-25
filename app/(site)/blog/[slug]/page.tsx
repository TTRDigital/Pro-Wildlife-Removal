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

/** Blog post in the old theme: navy page, photo beside the title, orange headings. */
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
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog/" },
          { label: post.title, href: path },
        ]}
        visible={false}
      />
      <article className="bg-old-navy pb-16 text-[#ebe7e4] md:pb-24">
        <header className="o-wrap grid items-center gap-8 pt-12 pb-10 md:grid-cols-2 md:gap-12 md:pt-16">
          {post.image ? (
            <div className="relative aspect-[16/9] overflow-hidden rounded-[10px]">
              <Photo image={post.image} priority sizes="(min-width: 768px) 540px, 100vw" />
            </div>
          ) : null}
          <div>
            <h1 className="font-old text-[clamp(2rem,1.4rem+1.8vw,2.8125rem)] font-semibold leading-[1.1] text-white">{post.title}</h1>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-old text-base text-white">
              {post.author ? (
                <li className="flex items-center gap-1.5">
                  <UserRound className="h-4 w-4 text-old-blue" strokeWidth={2} aria-hidden="true" />
                  {post.author}
                </li>
              ) : null}
              {post.date ? (
                <li className="flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 text-old-blue" strokeWidth={2} aria-hidden="true" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </li>
              ) : null}
              <li className="flex items-center gap-1.5">
                <Tag className="h-4 w-4 text-old-blue" strokeWidth={2} aria-hidden="true" />
                Blog
              </li>
            </ul>
            {/* Calls only (the client's choice): the number is one tap away at the top of every post. */}
            <a href={settings.phoneHref} data-track="click_to_call" className="o-btn mt-7">
              Call {settings.phone}
            </a>
          </div>
        </header>
        <div className="o-wrap">
          <RichText value={post.body} base="o-rich" article className="o-post text-lg leading-[1.8]" />
        </div>
      </article>
    </>
  );
}
