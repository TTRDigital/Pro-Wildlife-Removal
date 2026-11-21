"use client";

import dynamic from "next/dynamic";

/*
 * Below-the-fold client components, each in its own chunk instead of the first-load bundle (TTR-2516).
 * They still render on the server (ssr stays on), so the HTML and the look are exactly the same; only their
 * JavaScript loads and hydrates after the page's main scripts. Server components import them from here:
 * next/dynamic only splits the code when it is called in a client module like this one.
 */
export const AreaMap = dynamic(() => import("@/components/ui/AreaMap").then((m) => m.AreaMap));
export const CityMarquee = dynamic(() => import("@/components/ui/CityMarquee").then((m) => m.CityMarquee));
export const ScrollChecklist = dynamic(() => import("@/components/ui/ScrollChecklist").then((m) => m.ScrollChecklist));
export const StepRail = dynamic(() => import("@/components/ui/StepRail").then((m) => m.StepRail));
export const SoundButton = dynamic(() => import("@/components/ui/SoundButton").then((m) => m.SoundButton));
export const BackToTop = dynamic(() => import("@/components/layout/BackToTop").then((m) => m.BackToTop));
