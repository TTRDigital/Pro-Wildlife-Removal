import { NotFoundContent } from "@/components/sections/NotFoundContent";

/**
 * notFound() inside the site (e.g. an unknown blog post). Renders inside app/(site)/layout.tsx, which already
 * has the header and footer, so the pages' RSC payload no longer carries extra copies of them (TTR-2516).
 */
export default function NotFound() {
  return <NotFoundContent />;
}
