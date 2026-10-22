import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import "./globals.css";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="section bg-tint">
        <div className="wrap max-w-[760px] text-center">
          <p className="eyebrow mb-3">Error 404</p>
          <h1 className="text-h1 font-bold">This page has gone back into the wild</h1>
          <p className="mt-5 text-lead">The page you are looking for has moved or does not exist.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/">Back to home</Button>
            <Button href="/services/" variant="outline">
              Our services
            </Button>
          </div>
          <p className="mt-8">
            Or see the <Link href="/sitemap/" className="font-semibold text-blue-deep underline">sitemap</Link>.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
