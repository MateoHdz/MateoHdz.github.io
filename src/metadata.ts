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
      description: s.meta.ogDescription,
      locale: s.lang === "es" ? "es_CO" : "en_US",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: s.meta.title }],
    },
    twitter: { card: "summary_large_image", title: s.meta.title, description: s.meta.ogDescription, images: ["/og.jpg"] },
  };
}

export const viewport: Viewport = {
  themeColor: "#090a09",
  colorScheme: "dark",
};
