/*
 * TTR OS (ttr-portal.vercel.app) connection. The site key is public: it ships in every page for the tracker.
 * NEXT_PUBLIC_TTR_SITE_KEY overrides it; "off" turns the tracker off.
 */
const key = process.env.NEXT_PUBLIC_TTR_SITE_KEY;
export const TTR_SITE_KEY = key === "off" ? "" : key || "FDnQlortKpNhGZT59_DS8g";
export const TTR_ORIGIN = "https://ttr-portal.vercel.app";
