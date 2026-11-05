---
version: 1
slug: "src-app-es-page-tsx"
primary_target: "src/app/(es)/page.tsx"
related_targets: ["src/app/(en)/en/page.tsx","src/app/page.tsx"]
---

# Portfolio home (/ and /en)

Mode: Experience (personal portfolio). Audience: recruiters and technical interviewers, Colombia and international remote. Job: understand in under a minute who Mateo is across ALL his work (SaaS for restaurants, Claro mini programs, public sector project for the Procuraduría, SME systems, own products, Python automation), then download the CV or contact him.

The owner rejected the POS-centric directions: the page must present the full breadth of his work, not one product. He pinned the aesthetic in his own words: "limpio, minimalista, no tan animado, pero con animaciones buenas". He took the category standard; it is executed at full craft.

## Direction contract

THESIS: A quiet, precise index of everything he has built, by domain, with the work itself one click deep. Refuses hero banners, card grids, metric tiles and POS-as-identity.

OWN-WORLD: Neutral off-white paper (#F7F7F4) and soft-black ink, one accent from the Valle del Cauca sugar-cane fields (deep cane green) used only for links, focus, the active nav line and the availability dot. One grotesk family in clear weight steps, tabular numerals for years and figures. Hairline rules, no shadows, no cards. Dark theme mirrors it.

STORY: The visitor reads name, role and a one-paragraph breadth statement, sees the work index immediately, opens any row to read problem, what he did, figures and stack, then downloads the CV (ES/EN) or writes to him.

FIRST VIEWPORT: Desktop: sticky left column (name at display size, role, two-line intro, section nav with growing active line, CV + email actions, socials, ES/EN switch, availability line); right column starts with the about paragraph and the first rows of the work index. Mobile: the same stack in one column, without the section nav (scroll-spy has no job without the sticky column); the CV and email actions go full width.

FORM: Category standard (two-column sticky identity + scrolling content), position: standing exit taken by the owner. seed:95e50dd37f0c4de6

SIGNATURE INTERACTION: Work rows expand in place (grid-rows 0fr→1fr, strong ease-out, interruptible), content fades in with a short stagger; the active section line grows in the nav; language switch crossfades with a view transition. Everything respects prefers-reduced-motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
