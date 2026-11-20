"use client";

import ReactDOM from "react-dom";

/**
 * Opens the connection to Sanity's image CDN from the <head>, before the hero photo is found in the
 * page, so the photo doesn't wait for a new connection (TTR-2516). Next 16 docs: ReactDOM.preconnect.
 * No crossOrigin: <img> requests are not CORS, so a CORS preconnect would go unused.
 */
export function Preconnect() {
  ReactDOM.preconnect("https://cdn.sanity.io");
  return null;
}
