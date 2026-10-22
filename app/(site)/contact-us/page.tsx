import type { Metadata } from "next";
import { getPage, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageView } from "@/components/sections/PageView";

const PATH = "/contact-us/";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("contact");
  return pageMetadata(page.seo, PATH, page.hero.image);
}

export default async function Page() {
  const [page, settings] = await Promise.all([getPage("contact"), getSiteSettings()]);
  // The contact form is on the page already, so no closing band with a second form.
  return <PageView page={page} settings={settings} path={PATH} crumbs={[{ label: "Contact Us", href: PATH }]} closing={false} />;
}
