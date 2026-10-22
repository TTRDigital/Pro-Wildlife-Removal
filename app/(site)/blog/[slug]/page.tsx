import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { getPost, getPosts, getServices, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";
import { formatDate } from "@/lib/text";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RichText } from "@/components/ui/RichText";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { PostCard } from "@/components/sections/PostsSection";
import { Sections } from "@/components/sections/Sections";

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPost(slug);
  if (!post) return {};
  return pageMetadata(post.seo, `/blog/${slug}/`, post.image, "article");
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const [post, posts, settings, services] = await Promise.all([getPost(slug), getPosts(), getSiteSettings(), getServices()]);
  if (!post) notFound();
  const path = `/blog/${slug}/`;
  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);
  const removal = services.filter((s) => s.group === "removal");
  return (
    <>
      <JsonLd data={articleSchema(post, path)} />
      <section className="bg-tint pt-12 pb-10 md:pt-16">
        <div className="wrap max-w-[1000px]">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog/" }, { label: post.title, href: path }]} />
          {post.date ? (
            <p className="eyebrow mb-3">
              {formatDate(post.date)}
              {post.author ? ` · ${post.author}` : ""}
            </p>
          ) : null}
          <h1 className="text-h1 font-bold">{post.title}</h1>
        </div>
      </section>
      <section className="bg-white pb-16 md:pb-24">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="min-w-0">
            {post.image ? (
              <div className="relative -mt-2 mb-10 overflow-hidden rounded-[var(--radius-card)] lg:mt-10" style={{ aspectRatio: post.image.width && post.image.height ? `${post.image.width} / ${post.image.height}` : "16 / 9" }}>
                <Photo image={post.image} priority sizes="(min-width: 1024px) 820px, 100vw" />
              </div>
            ) : (
              <div className="h-10" />
            )}
            <RichText value={post.body} className="[&_h2]:text-navy" />
          </article>
          <aside className="lg:pt-10">
            <div className="grid gap-6 lg:sticky lg:top-28">
              <div className="on-navy rounded-[var(--radius-card)] bg-navy p-7 text-on-navy">
                <h2 className="font-display text-xl font-bold text-white">Need help with wildlife?</h2>
                <p className="mt-2 text-[0.95rem]">{settings.serviceAreaText}</p>
                <a href={settings.phoneHref} data-track="click_to_call" className="mt-5 flex items-center gap-2.5 font-display text-2xl font-bold text-white">
                  <Phone className="h-6 w-6 text-blue" strokeWidth={2} aria-hidden="true" />
                  {settings.phone}
                </a>
                <Button href={settings.headerCta.href} className="mt-5 w-full">
                  {settings.headerCta.label}
                </Button>
              </div>
              <nav aria-label="Services" className="card p-7">
                <h2 className="mb-3 font-display text-lg font-semibold text-navy">Our services</h2>
                <ul className="grid gap-1.5 text-[0.95rem]">
                  {removal.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}/`} className="hover:text-blue-deep hover:underline">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </section>
      {related.length ? (
        <section className="section bg-tint">
          <div className="wrap">
            <h2 className="mb-10 text-center text-h2 font-bold">More From Our Blog</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <PostCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <Sections sections={[]} reviews={false} />
    </>
  );
}
