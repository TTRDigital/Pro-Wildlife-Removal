import type { Metadata } from "next";
import { getPage, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageView } from "@/components/sections/PageView";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("home");
  return pageMetadata(page.seo, "/", page.hero.image);
}

export default async function HomePage() {
  const [page, settings] = await Promise.all([getPage("home"), getSiteSettings()]);
  // BreadcrumbList data only (just "Home"), like every other page has (TTR-846).
  return (
    <>
      <Breadcrumbs items={[]} visible={false} />
      <PageView page={page} settings={settings} path="/" />
    </>
  );
}
