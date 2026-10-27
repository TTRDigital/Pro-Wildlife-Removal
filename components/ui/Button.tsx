import Link from "next/link";
import type { ReactNode } from "react";
import { Phone } from "lucide-react";

type Variant = "primary" | "outline" | "light" | "outline-light";

/* Primary is the orange call button (every main action is a phone call); the others are quiet secondary links. */
const styles: Record<Variant, string> = {
  primary: "border-cta bg-cta text-white shadow-[0_10px_24px_-10px_rgb(180_90_0/0.7)] hover:border-cta-hover hover:bg-cta-hover",
  outline: "border-navy/20 bg-white text-navy hover:border-navy hover:bg-navy hover:text-white",
  light: "border-white bg-white text-navy hover:border-tint hover:bg-tint",
  "outline-light": "border-white/40 bg-transparent text-white hover:border-white hover:bg-white hover:text-navy",
};

export function Button({ href, children, variant = "primary", className = "", track }: { href: string; children: ReactNode; variant?: Variant; className?: string; track?: string }) {
  const tel = href.startsWith("tel:");
  const cls = `inline-flex min-h-[3.25rem] items-center justify-center gap-2.5 rounded-xl border-2 px-7 py-3.5 text-center font-display text-[1.0625rem] font-bold leading-tight no-underline transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.98] ${styles[variant]} ${tel && variant === "primary" ? "call-pulse" : ""} ${className}`;
  if (/^(https?:|tel:|mailto:)/.test(href)) {
    const external = href.startsWith("http");
    return (
      <a href={href} className={cls} data-track={track ?? (tel ? "click_to_call" : undefined)} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
        {tel ? <Phone className="h-5 w-5 flex-none" strokeWidth={2.25} aria-hidden="true" /> : null}
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} data-track={track}>
      {children}
    </Link>
  );
}
