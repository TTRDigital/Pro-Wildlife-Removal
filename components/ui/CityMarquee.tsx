"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

type Item = { label: string; href?: string };

const pill =
  "inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line bg-white px-4 font-display text-[0.9375rem] font-semibold whitespace-nowrap text-navy shadow-[0_6px_16px_-12px_rgb(14_42_71/0.5)] transition-colors";

function Pill({ it, copy }: { it: Item; copy: boolean }) {
  const inner = (
    <>
      <span className="pin-ico text-blue" aria-hidden="true" />
      {it.label}
    </>
  );
  return it.href ? (
    <a
      href={it.href}
      tabIndex={copy ? -1 : undefined}
      className={`${pill} hover:border-blue/40 hover:bg-tint hover:text-blue-deep`}
    >
      {inner}
    </a>
  ) : (
    <span className={pill}>{inner}</span>
  );
}

/**
 * The places a page covers as rows of pills drifting right to left (they pause under the
 * pointer or keyboard focus). The first copy of each row is in the page's HTML as real links,
 * so search engines and screen readers get every place; the second copy that makes the loop
 * seamless is added in the browser, hidden from screen readers and the tab order. For people
 * who ask for less motion the rows stand still and wrap (see .marquee in globals.css).
 */
export function CityMarquee({ rows }: { rows: Item[][] }) {
  // false in the server HTML and during hydration, true once running in the browser
  const ready = useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
  return (
    <div className="marquee -mx-4 mb-10 grid gap-3 overflow-hidden py-2 sm:-mx-6 md:mb-14">
      {rows.map((row, ri) => (
        <ul
          key={ri}
          className="marquee-row"
          style={{
            ["--marquee-time" as string]: `${row.length * (ri ? 4.2 : 3.4)}s`,
          }}
        >
          <li className="marquee-track">
            <ul className="contents">
              {row.map((it) => (
                <li key={it.label}>
                  <Pill it={it} copy={false} />
                </li>
              ))}
            </ul>
          </li>
          {ready ? (
            <li className="marquee-track" aria-hidden="true">
              {row.map((it) => (
                <Pill key={it.label} it={it} copy />
              ))}
            </li>
          ) : null}
        </ul>
      ))}
    </div>
  );
}
