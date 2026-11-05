import type { ReactNode } from "react";
import { schibsted } from "@/fonts";
import { buildMetadata, viewport as sharedViewport } from "@/metadata";
import { site } from "@/content/site";
import "../globals.css";

export const metadata = buildMetadata(site.es);
export const viewport = sharedViewport;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={schibsted.variable}>
      <body>{children}</body>
    </html>
  );
}
