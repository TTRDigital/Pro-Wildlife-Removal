"use client";

import { useEffect, useState } from "react";
import type { Img } from "@/lib/types";
import { Photo } from "./Photo";

/**
 * The hero photo as a slow slideshow: the photos cross-fade every few
 * seconds while drifting, with dots to pick one. It pauses while hovered or
 * focused, and stays on the first photo for people who ask for less motion.
 */
export function HeroSlides({ images, interval = 4500, sizes }: { images: Img[]; interval?: number; sizes: string }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  // The hidden slides' photos load once the page is idle (or a dot is picked), not before the first paint (TTR-846).
  const [rest, setRest] = useState(false);
  const n = images.length;

  useEffect(() => {
    if (n < 2) return;
    const go = () => setRest(true);
    const idle = () => (typeof window.requestIdleCallback === "function" ? window.requestIdleCallback(go, { timeout: 2000 }) : setTimeout(go, 200));
    if (document.readyState === "complete") idle();
    else window.addEventListener("load", idle, { once: true });
    return () => window.removeEventListener("load", idle);
  }, [n]);

  useEffect(() => {
    if (n < 2 || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setI((x) => (x + 1) % n), interval);
    return () => window.clearInterval(t);
  }, [n, paused, interval]);

  return (
    <div className="absolute inset-0" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      {images.map((img, k) => (
        <div key={img.src} aria-hidden={k !== i} className={`photo-live absolute inset-0 transition-opacity duration-1000 ease-in-out ${k === i ? "opacity-100" : "opacity-0"}`}>
          {k === 0 || rest ? <Photo image={img} priority={k === 0} sizes={sizes} /> : null}
        </div>
      ))}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
      {n > 1 ? (
        <div className="absolute right-0 bottom-1 left-0 flex justify-center">
          {images.map((img, k) => (
            <button key={img.src} type="button" onClick={() => {
                setRest(true);
                setI(k);
              }} aria-label={`Show photo ${k + 1} of ${n}`} aria-current={k === i} className="group flex h-11 w-11 items-center justify-center">
              <span className={`block h-2 rounded-full bg-white shadow transition-all duration-300 ${k === i ? "w-6 opacity-100" : "w-2 opacity-60 group-hover:opacity-90"}`} />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
