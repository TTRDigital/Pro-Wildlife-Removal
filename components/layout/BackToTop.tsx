"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { chatWidgetId } from "@/lib/chat";

/** Grey square back-to-top button of the old site, shown after scrolling one screen. Sits left of the chat widget. */
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={`fixed right-4 bottom-20 z-40 flex h-11 w-11 items-center justify-center rounded-[2px] bg-[#555]/80 text-white transition-[opacity,transform,background-color] duration-300 hover:bg-old-navy md:bottom-5 ${chatWidgetId ? "md:right-24" : "md:right-5"} ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
    >
      <ChevronUp className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
    </button>
  );
}
