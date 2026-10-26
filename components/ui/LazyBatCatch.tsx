"use client";

import dynamic from "next/dynamic";

/** The home bat-catch scene, loaded in the browser only: it shows nothing until the visitor scrolls, so its code stays out of the first load (TTR-846). */
export const LazyBatCatch = dynamic(() => import("./BatCatch").then((m) => m.BatCatch), { ssr: false });

/** The inner pages' animal-catch scene, loaded the same way (browser only, after the first load). */
export const LazyAnimalCatch = dynamic(() => import("./AnimalCatch").then((m) => m.AnimalCatch), { ssr: false });
