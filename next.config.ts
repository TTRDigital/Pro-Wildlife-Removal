import type { NextConfig } from "next";

/*
 * Hosted on Vercel. Every page is prerendered at build time
 * (generateStaticParams); the only server code is the draft preview at
 * app/api/preview. There are no forms: the client takes requests by phone.
 *
 * - images: WebP copies made before the build by scripts/optimize-images.mjs,
 *   picked by lib/image-loader.ts (no Vercel image optimization needed)
 * - CMS updates: Sanity webhook -> Vercel deploy hook -> rebuild
 * - www -> prowildliferemoval.net: Vercel > Project > Settings > Domains
 */

/** Old URLs, all checked against the live WordPress site. Every page in the old sitemaps keeps its exact URL. */
const oldUrls: [string, string][] = [
  ["/about-us/service-area/tampa", "/about-us/service-area/tampa/wildlife-removal-service-in-tampa-fl/"],
  ["/services/armadillo-removal", "/services/armadillo-removal-2/"],
  ["/wildlife-removal-services", "/services/"],
  ["/wildlife-removal-services/bat-removal-tampa", "/services/bat-removal/"],
  ["/wildlife-removal-services/rat-removal-tampa", "/services/rat-removal/"],
  ["/wildlife-removal-services/raccoon-removal-tampa", "/services/raccoon-removal/"],
  ["/wildlife-removal-services/armadillo-removal-tampa", "/services/armadillo-removal-2/"],
  ["/wildlife-removal-services/raccoon-control", "/services/raccoon-removal/"],
  ["/wildlife-removal-services/rat-control", "/services/rat-removal/"],
  ["/wildlife-removal-services/snake-removal-tampa", "/services/snake-removal-tampa/"],
  ["/wildlife-removal-services/bee-removal-tampa", "/services/bee-removal-tampa/"],
  ["/wildlife-removal-services/opossum-removal-tampa", "/services/opossum-removal-tampa/"],
  ["/wildlife-removal-services/dead-animal-tampla-fl", "/services/dead-animal-tampla-fl/"],
  ["/what-keeps-rats-away", "/blog/what-keeps-rats-away/"],
  ["/effective-rat-control-tips", "/blog/effective-rat-control-tips/"],
  // WordPress leftovers
  ["/wp-admin/:path*", "/"],
  ["/wp-login.php", "/"],
  ["/feed", "/blog/"],
  ["/blog/feed", "/blog/"],
  ["/blog/page/:n", "/blog/"],
  ["/page-sitemap.xml", "/sitemap.xml"],
  ["/post-sitemap.xml", "/sitemap.xml"],
  ["/sitemap_index.xml", "/sitemap.xml"],
  ["/index.php", "/"],
  ["/category/:path*", "/blog/"],
  ["/tag/:path*", "/blog/"],
  ["/author/:path*", "/blog/"],
  // The client does not do mole removal (Oct 25, 2026): the page is gone.
  ["/services/mole-control", "/services/"],
];

// Third parties: Google Tag Manager / Analytics / Ads, Microsoft Clarity, Sanity images,
// Google Maps, the GoHighLevel (LeadConnector) chat widget, the TTR OS tracker and review bar (ttr-portal.vercel.app). Add domains here for new GTM tags.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google.com https://www.gstatic.com https://googleads.g.doubleclick.net https://*.clarity.ms https://*.leadconnectorhq.com https://*.msgsndr.com https://challenges.cloudflare.com https://va.vercel-scripts.com https://ttr-portal.vercel.app",
  "style-src 'self' 'unsafe-inline' https://*.leadconnectorhq.com https://*.msgsndr.com https://fonts.googleapis.com https://fonts.bunny.net",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://*.leadconnectorhq.com https://*.msgsndr.com https://fonts.gstatic.com https://fonts.bunny.net",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.google.com https://*.doubleclick.net https://*.clarity.ms https://*.leadconnectorhq.com https://*.msgsndr.com wss://*.leadconnectorhq.com https://*.googleapis.com https://challenges.cloudflare.com https://ttr-portal.vercel.app",
  "frame-src 'self' https://www.googletagmanager.com https://www.google.com https://maps.google.com https://td.doubleclick.net https://*.leadconnectorhq.com https://*.msgsndr.com https://challenges.cloudflare.com",
  "media-src 'self' blob: https:",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const security = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), geolocation=(), browsing-topics=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  // /about-us/ with the slash, like the old WordPress URLs.
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    // Keep in sync with WIDTHS in scripts/optimize-images.mjs.
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [96, 256, 384],
  },
  async redirects() {
    return [
      ...oldUrls.map(([source, destination]) => ({ source, destination, statusCode: 301 as const })),
    ];
  },
  async headers() {
    return [
      { source: "/:path*", headers: security },
      // The studio at /cms talks to many Sanity hosts and is protected by Sanity login instead.
      { source: "/((?!cms).*)", headers: [{ key: "Content-Security-Policy", value: csp }] },
      { source: "/_img/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }] },
      { source: "/images/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }] },
      { source: "/api/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex" }] },
    ];
  },
};

export default nextConfig;
