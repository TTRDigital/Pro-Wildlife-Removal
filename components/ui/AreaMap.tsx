"use client";

import Link from "next/link";
import { useState } from "react";
import type { AreasSection } from "@/lib/types";
import { floridaCounties, floridaMap } from "@/lib/data/floridaMap";

type Group = AreasSection["groups"][number];
const short = (title?: string) =>
  (title ?? "").replace(/\s+County$/i, "").trim();

/**
 * The service area as a map of Central Florida: the counties we serve glow blue (each links to
 * its county page) and light up one after another, the rest of Florida sits dark around them.
 * Beside it, the county names as buttons; pointing at one highlights it on the map, and the
 * other way round. Stacked on phones (map first). Still for people who ask for less motion.
 */
export function AreaMap({ groups }: { groups: Group[] }) {
  const [on, setOn] = useState<string | null>(null);
  const served = groups
    .filter((g) => g.title)
    .map((g) => ({ name: short(g.title), href: g.href, title: g.title! }));
  const order = new Map(served.map((g, i) => [g.name, i]));
  // Zoom to the served counties, with a margin of the neighbours around them.
  const xy = floridaCounties
    .filter((c) => order.has(c.name))
    .flatMap((c) => c.d.match(/-?[\d.]+/g)!.map(Number));
  const xs = xy.filter((_, i) => i % 2 === 0);
  const ys = xy.filter((_, i) => i % 2 === 1);
  const pad = 36;
  const box = xs.length
    ? [
        Math.min(...xs) - pad,
        Math.min(...ys) - pad,
        Math.max(...xs) - Math.min(...xs) + pad * 2,
        Math.max(...ys) - Math.min(...ys) + pad * 2,
      ]
    : [0, 0, floridaMap.w, floridaMap.h];

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[5fr_7fr] lg:gap-12">
      <ul className="order-2 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:order-1 lg:grid-cols-2">
        {served.map((g, i) => {
          const cls = `flex min-h-12 w-full items-center gap-2.5 rounded-2xl border px-3.5 py-2 font-display text-[0.9375rem] font-bold transition-[background-color,border-color,color,transform] duration-200 ${on === g.name ? "-translate-y-0.5 border-cta bg-cta text-white" : "border-line bg-white text-navy hover:border-blue/40"}`;
          const inner = (
            <>
              <span
                className={`flex h-7 w-7 flex-none items-center justify-center rounded-lg text-xs ${on === g.name ? "bg-white/20 text-white" : "bg-tint text-blue-deep"}`}
              >
                {i + 1}
              </span>
              {g.name}
            </>
          );
          const hover = {
            onMouseEnter: () => setOn(g.name),
            onMouseLeave: () => setOn(null),
            onFocus: () => setOn(g.name),
            onBlur: () => setOn(null),
          };
          return (
            <li key={g.name}>
              {g.href ? (
                <Link
                  href={g.href}
                  aria-label={g.title}
                  className={cls}
                  {...hover}
                >
                  {inner}
                </Link>
              ) : (
                <span className={cls} {...hover}>
                  {inner}
                </span>
              )}
            </li>
          );
        })}
      </ul>

      <div
        className="relative order-1 overflow-hidden rounded-[28px] bg-gradient-to-br from-navy via-navy-3 to-navy-2 p-3 shadow-[0_40px_80px_-40px_rgb(14_42_71/0.6)] sm:p-5 lg:order-2"
        data-reveal
      >
        <span
          aria-hidden="true"
          className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue/25 blur-3xl"
        />
        <svg
          viewBox={box.map((n) => n.toFixed(1)).join(" ")}
          className="relative mx-auto block h-auto max-h-[620px] w-full"
          role="img"
          aria-label={`Map of Central Florida showing the counties we serve: ${served.map((g) => g.name).join(", ")}`}
        >
          {floridaCounties.map((c) => {
            if (order.has(c.name)) return null;
            return (
              <path
                key={c.name}
                d={c.d}
                className="fill-white/[0.07] stroke-white/15"
                strokeWidth={1}
              />
            );
          })}
          {floridaCounties.map((c) => {
            const i = order.get(c.name);
            if (i === undefined) return null;
            const g = served[i];
            const shape = (
              <path
                d={c.d}
                strokeWidth={2}
                className={`map-county transition-[fill] duration-200 ${on === c.name ? "fill-cta stroke-white" : "fill-blue/80 stroke-white/70"}`}
                onMouseEnter={() => setOn(c.name)}
                onMouseLeave={() => setOn(null)}
              />
            );
            return g.href ? (
              <a key={c.name} href={g.href} aria-label={g.title} tabIndex={-1}>
                {shape}
              </a>
            ) : (
              <g key={c.name}>{shape}</g>
            );
          })}
          {floridaCounties.map((c) => {
            const i = order.get(c.name);
            if (i === undefined) return null;
            return (
              <g
                key={c.name}
                className="pointer-events-none"
                aria-hidden="true"
              >
                <path
                  d={c.d}
                  className="map-glow fill-blue-light"
                  style={{ animationDelay: `${i * 0.6}s` }}
                />
                <circle
                  cx={c.x}
                  cy={c.y - 16}
                  r={5}
                  className="map-ping fill-white"
                  style={{ animationDelay: `${i * 0.6}s` }}
                />
                <circle cx={c.x} cy={c.y - 16} r={4} className="fill-white" />
                <text
                  x={c.x}
                  y={c.y + 6}
                  textAnchor="middle"
                  className="fill-white font-display text-[15px] font-bold [paint-order:stroke] [stroke:rgb(14_42_71/0.55)] [stroke-width:3px]"
                >
                  {c.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
