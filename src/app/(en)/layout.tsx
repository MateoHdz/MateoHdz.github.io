import type { ReactNode } from "react";
import { fontVariables } from "@/fonts";
import { buildMetadata, viewport as sharedViewport } from "@/metadata";
import { site } from "@/content/site";
import { Analytics } from "@/components/Analytics";
import "../globals.css";

export const metadata = buildMetadata(site.en);
export const viewport = sharedViewport;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
