import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { getSiteSettings } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import "./globals.css";

/** 404 in the site's design: tint band, the heading, the same words as before and the call button. */
export default async function NotFound() {
  const settings = await getSiteSettings();
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-tint">
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgb(30_155_240/0.18),transparent)]" />
        <div className="wrap relative max-w-[860px] py-16 md:py-24">
          <p className="eyebrow mb-3">Error 404</p>
          <h1 className="text-h1 font-extrabold tracking-[-0.03em]">This page has gone back into the wild</h1>
          <div className="prose-pw mt-5 text-lead">
            <p>The page you are looking for has moved or does not exist.</p>
            <p>
              Go back to the <Link href="/">home page</Link>, see <Link href="/services/">our services</Link> or the <Link href="/sitemap/">sitemap</Link>.
            </p>
          </div>
          <div className="mt-8">
            <Button href={settings.phoneHref} className="w-full sm:w-auto">
              Call {settings.phone}
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
