import type { Metadata, Viewport } from "next";
import type { Site } from "@/content/site";

export const SITE_URL = "https://mateohdz.github.io";

export function buildMetadata(s: Site): Metadata {
  const path = s.lang === "es" ? "/" : "/en/";
  return {
    metadataBase: new URL(SITE_URL),
    title: s.meta.title,
    description: s.meta.description,
    authors: [{ name: s.name }],
    alternates: { canonical: path, languages: { es: "/", en: "/en/" } },
    openGraph: {
      type: "profile",
      url: path,
      title: s.meta.title,
      description: s.meta.description,
      locale: s.lang === "es" ? "es_CO" : "en_US",
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#111210" },
  ],
};
