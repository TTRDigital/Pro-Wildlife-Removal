import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "light" | "outline-light";

/* pw-btn: 8px radius, 16px/600 Inter, 16x32 padding, 2px border. */
const styles: Record<Variant, string> = {
  primary: "border-blue bg-blue text-white hover:border-blue-hover hover:bg-blue-hover",
  outline: "border-navy bg-transparent text-navy hover:bg-navy hover:text-white",
  light: "border-white bg-white text-navy hover:border-tint hover:bg-tint",
  "outline-light": "border-white/70 bg-transparent text-white hover:border-white hover:bg-white hover:text-navy",
};

export function Button({ href, children, variant = "primary", className = "", track }: { href: string; children: ReactNode; variant?: Variant; className?: string; track?: string }) {
  const cls = `inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border-2 px-8 py-4 text-center font-display text-base font-semibold leading-tight no-underline transition-colors duration-200 ${styles[variant]} ${className}`;
  if (/^(https?:|tel:|mailto:)/.test(href)) {
    const external = href.startsWith("http");
    return (
      <a href={href} className={cls} data-track={track ?? (href.startsWith("tel:") ? "click_to_call" : undefined)} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
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
