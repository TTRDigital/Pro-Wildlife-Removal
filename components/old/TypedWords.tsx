"use client";

import { useEffect, useState } from "react";

/**
 * The home page's typed line ("Raccoon|Removal"): types each word, pauses,
 * deletes it and moves to the next, like the live site. The server renders
 * the first word, and the full list is in the HTML for screen readers and
 * search engines. Stays on the first word when reduced motion is preferred.
 */
export function TypedWords({ words, suffix }: { words: string[]; suffix?: string }) {
  const [text, setText] = useState(words[0] ?? "");

  useEffect(() => {
    if (words.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let word = 0;
    let len = words[0].length;
    let phase: "hold" | "delete" | "type" = "hold";
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      let delay = 90;
      if (phase === "hold") {
        phase = "delete";
        delay = 40;
      } else if (phase === "delete") {
        len--;
        delay = 40;
        if (len <= 0) {
          word = (word + 1) % words.length;
          phase = "type";
          delay = 300;
        }
      } else {
        len++;
        if (len >= words[word].length) {
          phase = "hold";
          delay = 1800;
        }
      }
      setText(words[word].slice(0, Math.max(0, len)));
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 1800);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <p className="font-sans text-[clamp(1.5rem,1.1rem+1.3vw,2.25rem)] font-light leading-tight text-white">
      <span className="sr-only">{`${words.join(", ")} ${suffix ?? ""}`.trim()}</span>
      <span aria-hidden="true">
        {text}
        <span className="mx-0.5 inline-block w-[2px] animate-pulse bg-white align-[-0.1em]" style={{ height: "1em" }} />
        {suffix}
      </span>
    </p>
  );
}
