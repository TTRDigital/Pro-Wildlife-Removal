import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCustomPage, getCustomPages, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageView } from "@/components/sections/PageView";

/*
 * Plain pages made in the CMS (document type "page"), at one-segment addresses like /reviews/.
 * Only published pages exist: any other address is a 404 (dynamicParams off), so nothing else changes.
 * The site's own pages (about-us, services ...) are real routes and always win over this one.
 */
export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getCustomPages()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const page = await getCustomPage(slug);
  if (!page) return {};
  return pageMetadata(page.seo, `/${slug}/`, page.hero.image);
}

export default async function CustomPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const [page, settings] = await Promise.all([getCustomPage(slug), getSiteSettings()]);
  if (!page) notFound();
  const path = `/${slug}/`;
  return <PageView page={page} settings={settings} path={path} crumbs={[{ label: page.title, href: path }]} />;
}
