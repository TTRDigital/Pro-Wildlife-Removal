import "../globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { Preconnect } from "@/components/layout/Preconnect";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SiteShell>
      <Preconnect />
      {children}
    </SiteShell>
  );
}
