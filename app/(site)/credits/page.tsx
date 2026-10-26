import type { Metadata } from "next";
import { getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaSection } from "@/components/sections/CtaSection";
import { clipCredits } from "@/lib/data/credits";

const PATH = "/credits/";
const TITLE = "Photo and Video Credits | Pro Wildlife Removal";
const DESCRIPTION = "Who took the photos and short animal clips on this site, and the license each one is shared under.";

export async function generateMetadata(): Promise<Metadata> {
  // A housekeeping page: kept out of search results, links still followed.
  return pageMetadata({ title: TITLE, description: DESCRIPTION, noIndex: true }, PATH);
}

/** Credits for the photos and the animal clips (Ben: CC BY clips are credited here, linked from the footer). */
export default async function Credits() {
  const settings = await getSiteSettings();
  return (
    <>
      <section className="bg-tint pt-6 pb-10 md:pb-12">
        <div className="wrap">
          <Breadcrumbs items={[{ label: "Photo and Video Credits", href: PATH }]} />
          <h1 className="text-h1 font-extrabold tracking-[-0.03em]">Photo and Video Credits</h1>
          <p className="mt-4 max-w-[680px] text-lg leading-relaxed">
            The job photos on this site are {settings.name}&rsquo;s own. The short animal clips are real camera footage shared by the people and agencies below.
          </p>
        </div>
      </section>
      <section className="section bg-white">
        <div className="wrap">
          <h2 className="text-h2 font-extrabold tracking-[-0.02em]">Animal clips</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {clipCredits.map((c) => (
              <li key={c.clip} className="card rounded-[20px] p-6">
                <h3 className="font-display text-h3 font-bold text-navy">{c.clip}</h3>
                <p className="mt-1">{c.shows}</p>
                <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[0.9375rem]">
                  <dt className="font-semibold text-navy">By</dt>
                  <dd>{c.author}</dd>
                  <dt className="font-semibold text-navy">Date</dt>
                  <dd>{c.date}</dd>
                  <dt className="font-semibold text-navy">License</dt>
                  <dd>
                    {c.licenseUrl ? (
                      <a href={c.licenseUrl} target="_blank" rel="noopener license" className="text-blue-deep underline underline-offset-2">
                        {c.license}
                      </a>
                    ) : (
                      c.license
                    )}
                  </dd>
                  <dt className="font-semibold text-navy">Source</dt>
                  <dd>
                    <a href={c.source} target="_blank" rel="noopener" className="break-all text-blue-deep underline underline-offset-2">
                      Wikimedia Commons
                    </a>
                  </dd>
                </dl>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.9375rem]">Each clip was trimmed to a few seconds, cropped and saved without sound.</p>
        </div>
      </section>
      <CtaSection settings={settings} />
    </>
  );
}
