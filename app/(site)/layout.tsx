import "../globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { LazyMouseCatch } from "@/components/ui/LazyBatCatch";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SiteShell>
      {children}
      <LazyMouseCatch />
    </SiteShell>
  );
}
