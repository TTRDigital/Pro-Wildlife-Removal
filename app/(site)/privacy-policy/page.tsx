import type { Metadata } from "next";
import { getPage, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageView } from "@/components/sections/PageView";

const PATH = "/privacy-policy/";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata((await getPage("privacy")).seo, PATH);
}

export default async function Page() {
  const [page, settings] = await Promise.all([getPage("privacy"), getSiteSettings()]);
  return <PageView page={page} settings={settings} path={PATH} crumbs={[{ label: "Privacy Policy", href: PATH }]} />;
}
