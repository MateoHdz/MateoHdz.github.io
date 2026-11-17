import { Sofia_Sans, Sofia_Sans_Condensed } from "next/font/google";

// Una sola familia de linaje DIN (la rotulación de los planos técnicos); el ancho marca la jerarquía:
// normal para el nombre y el texto, condensada para títulos de sección, rótulos y cifras.
export const sofia = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia",
  display: "swap",
});

export const sofiaCondensed = Sofia_Sans_Condensed({
  subsets: ["latin"],
  variable: "--font-sofia-cond",
  display: "swap",
});

export const fontVariables = `${sofia.variable} ${sofiaCondensed.variable}`;
