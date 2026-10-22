"use client";

import { useEffect } from "react";
import { chatWidgetId } from "@/lib/chat";

/* On phones the chat button sits at the right end of the sticky call bar. */
const WIDGET_CSS = `
#lc_text-widget--btn{background:#1e9bf0!important;box-shadow:0 10px 28px -8px rgba(14,42,71,.55)!important}
@media (max-width: 767.98px){
  #lc_text-widget--btn{width:52px!important;height:52px!important;bottom:2px!important;right:10px!important}
}`;

/**
 * GoHighLevel (LeadConnector) website chat. Hidden until a widget ID is set
 * (lib/chat.ts). Loads after the first interaction or 4 seconds, so it
 * never slows the first paint.
 */
export function ChatWidget() {
  useEffect(() => {
    if (!chatWidgetId) return;
    let done = false;
    let poll = 0;

    const style = () => {
      const root = document.querySelector("chat-widget")?.shadowRoot;
      if (!root?.querySelector("#lc_text-widget--btn")) return false;
      if (!root.querySelector("style[data-pw]")) {
        const s = document.createElement("style");
        s.dataset.pw = "";
        s.textContent = WIDGET_CSS;
        root.appendChild(s);
      }
      return true;
    };

    const load = () => {
      if (done) return;
      done = true;
      const s = document.createElement("script");
      s.src = "https://widgets.leadconnectorhq.com/loader.js";
      s.async = true;
      s.dataset.resourcesUrl = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
      s.dataset.widgetId = chatWidgetId;
      document.body.appendChild(s);
      let tries = 0;
      poll = window.setInterval(() => {
        if (style() || ++tries > 60) window.clearInterval(poll);
      }, 500);
    };

    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));
    const t = window.setTimeout(load, 4000);
    return () => {
      window.clearTimeout(t);
      window.clearInterval(poll);
      events.forEach((e) => window.removeEventListener(e, load));
    };
  }, []);
  return null;
}
