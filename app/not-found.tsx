import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { classicVars } from "@/components/old/theme";
import "./globals.css";

/** 404 in the old theme: beige band, uppercase heading, divider bar. */
export default function NotFound() {
  return (
    <SiteShell>
      <section className="o-sec" style={classicVars({ bg: "beige", heading: "navy", text: "grey", divider: "blue" })}>
        <div className="o-wrap max-w-[860px]">
          <p className="font-old text-lg font-semibold uppercase">Error 404</p>
          <h1 className="o-h1 mt-2">This page has gone back into the wild</h1>
          <span className="o-bar" aria-hidden="true" />
          <div className="o-rich">
            <p>The page you are looking for has moved or does not exist.</p>
            <p>
              Go back to the <Link href="/">home page</Link>, see <Link href="/services/">our services</Link> or the <Link href="/sitemap/">sitemap</Link>.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
