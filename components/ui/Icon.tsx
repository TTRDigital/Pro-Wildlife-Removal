import { BadgeCheck, Bug, Clock, Leaf, MapPin, Phone, Search, ShieldCheck, SprayCan, Star, Users, Wrench, type LucideIcon } from "lucide-react";
import type { IconName } from "@/lib/icons";

/* Line icons from the bat-removal page (24px grid, 2px stroke). */
const paths: Partial<Record<IconName, string>> = {
  balance: "M12 3v18M5 7h14M7 7l-3 7a3 3 0 006 0zM17 7l-3 7a3 3 0 006 0z",
  exclusion: "M20 12H8M12 6l-4 6 4 6M4 4v16",
  home: "M4 20h16M7 20V9l5-5 5 5v11M10 20v-5h4v5",
  building: "M3 21h18M5 21V7l7-4 7 4v14M9 11h2M13 11h2M9 15h2M13 15h2",
  sunset: "M17 18a5 5 0 00-10 0M12 3v3M4.2 10.2l2.1 2.1M19.8 10.2l-2.1 2.1M2 18h20",
  droppings: "M12 3v6M8 12h8M6 21h12a2 2 0 002-2v-1H4v1a2 2 0 002 2zM9 15h6",
  drop: "M12 3l5 7a5 5 0 11-10 0z",
  sound: "M11 5L6 9H3v6h3l5 4zM15 9a4 4 0 010 6M18 6a8 8 0 010 12",
  odor: "M5 17c2-2 2-4 0-6s-2-4 0-6M12 17c2-2 2-4 0-6s-2-4 0-6M19 17c2-2 2-4 0-6s-2-4 0-6",
  critter: "M12 7l3-3v4l4 1-3 5-4-2-4 2-3-5 4-1V4z",
};

const lucide: Partial<Record<IconName, LucideIcon>> = {
  "shield-check": ShieldCheck,
  search: Search,
  wrench: Wrench,
  spray: SprayCan,
  clock: Clock,
  phone: Phone,
  "map-pin": MapPin,
  star: Star,
  users: Users,
  "badge-check": BadgeCheck,
  bug: Bug,
  leaf: Leaf,
};

export function Icon({ name, className = "h-[22px] w-[22px]" }: { name?: IconName | string; className?: string }) {
  if (!name) return null;
  const d = paths[name as IconName];
  if (d) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={d} />
      </svg>
    );
  }
  const L = lucide[name as IconName];
  return L ? <L className={className} strokeWidth={2} aria-hidden="true" /> : null;
}
