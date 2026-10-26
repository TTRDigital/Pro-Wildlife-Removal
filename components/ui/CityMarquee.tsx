"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

type Item = { label: string; href?: string };

/**
 * The drifting rows of city pills above the county cards. Decorative (aria-hidden, out of the
 * tab order): every city is also a real link in the county cards below, so the rows and their
 * looping copies are built in the browser after load and stay out of the page's HTML. The space
 * is reserved up front so nothing shifts when they appear.
 */
export function CityMarquee({ rows }: { rows: Item[][] }) {
  // false in the server HTML and during hydration, true once running in the browser
  const ready = useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
  return (
    <div
      aria-hidden="true"
      className="marquee -mx-4 mb-10 grid min-h-[116px] gap-3 overflow-hidden py-2 sm:-mx-6 md:mb-14"
    >
      {ready
        ? rows.map((row, ri) => (
            <div
              key={ri}
              className="marquee-row"
              style={{
                ["--marquee-time" as string]: `${row.length * (ri ? 4.2 : 3.4)}s`,
              }}
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="marquee-track">
                  {row.map((it) => {
                    const cls =
                      "inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line bg-white px-4 font-display text-[0.9375rem] font-semibold whitespace-nowrap text-navy shadow-[0_6px_16px_-12px_rgb(14_42_71/0.5)] transition-colors";
                    const inner = (
                      <>
                        <span className="pin-ico text-blue" />
                        {it.label}
                      </>
                    );
                    return it.href ? (
                      <a
                        key={`${copy}-${it.label}`}
                        href={it.href}
                        tabIndex={-1}
                        className={`${cls} hover:border-blue/40 hover:bg-tint hover:text-blue-deep`}
                      >
                        {inner}
                      </a>
                    ) : (
                      <span key={`${copy}-${it.label}`} className={cls}>
                        {inner}
                      </span>
                    );
                  })}
                </div>
              ))}
            </div>
          ))
        : null}
    </div>
  );
}
