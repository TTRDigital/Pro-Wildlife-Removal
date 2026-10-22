import type { Metadata } from "next";
import Link from "next/link";
import { getPage, getPosts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { webPageSchema } from "@/lib/schema";
import { formatDate } from "@/lib/text";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Photo } from "@/components/ui/Photo";

const PATH = "/blog/";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata((await getPage("blog")).seo, PATH);
}

/** Blog index as on the live site: grey page, white two-column post cards with "Read more", author and date. All posts on one page. */
export default async function BlogIndex() {
  const [page, posts] = await Promise.all([getPage("blog"), getPosts()]);
  return (
    <>
      <JsonLd data={webPageSchema(PATH, page.seo.title, page.seo.description, [])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: posts.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(`/blog/${p.slug}/`), name: p.title })),
        }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: PATH }]} visible={false} />
      <section className="bg-[#eee] py-14 md:py-20">
        <div className="o-wrap">
          <p className="text-center font-old text-[clamp(1.75rem,1.2rem+1.8vw,2.8rem)] font-semibold leading-[1.15] text-black">{page.seo.title}</p>
          <h1 className="mt-8 text-center font-old text-[clamp(2.25rem,1.6rem+2vw,3.75rem)] font-semibold leading-none text-[#929292]">{page.hero.heading}</h1>
          <ul className="mt-14 grid gap-8 md:grid-cols-2">
            {posts.map((p, i) => (
              <li key={p.slug} className="relative flex flex-col overflow-hidden rounded-[3px] bg-white shadow-[0_0_10px_rgb(0_0_0/0.15)]">
                {p.image ? (
                  <div className="relative aspect-[16/7] overflow-hidden">
                    <Photo image={p.image} sizes="(min-width: 768px) 545px, 100vw" priority={i < 2} />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col px-[30px] pt-7 pb-5">
                  <h2 className="font-old text-[1.3125rem] font-semibold leading-[1.4] text-black">
                    <Link href={`/blog/${p.slug}/`} className="hover:underline">
                      {p.title}
                    </Link>
                  </h2>
                  {p.excerpt ? <p className="mt-3 line-clamp-3 font-sans text-sm leading-[1.5] text-black">{p.excerpt}</p> : null}
                  <Link href={`/blog/${p.slug}/`} className="mt-5 font-old text-xs font-medium uppercase text-blog-orange hover:underline">
                    Read more<span className="sr-only">: {p.title}</span> »
                  </Link>
                </div>
                <p className="border-t border-[#eaeaea] px-[30px] py-4 font-sans text-xs text-[#767676]">{[p.author, p.date ? formatDate(p.date) : ""].filter(Boolean).join(" • ")}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
