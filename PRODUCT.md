# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: Next.js 16 (App Router) + TypeScript + Tailwind CSS 4, exported as a static site (`output: 'export'`) so it publishes straight from Git with GitHub Pages. Chosen because it is the same stack the owner sells (React/Next.js), so the site itself is a work sample. The owner asked to keep development simple.

## Users

- **Recruiters and hiring managers** screening candidates for full stack roles, in Colombia (remote or on-site) and in international remote companies. They arrive from a CV link, LinkedIn or GitHub and decide in under a minute whether to keep reading.
- **Technical interviewers** who open projects and repos to check depth.
- **Companies and business owners** who may hire him under a services contract (prestación de servicios). Confirmed by the owner on 2026-11-11: the site must work for both employment and contract work.

## Product Purpose

Personal portfolio of Mateo Hernández, full stack developer from Cali, Colombia. It must present who he is as a developer, the real systems he has built, how he works, and let a recruiter download an ATS-friendly CV or contact him. Success: a recruiter understands his level and stack fast and contacts him or advances him in a process.

## Positioning

A developer who starts from the business problem: he sits with clients, gathers requirements, models the data and rules, and ships complete products (POS, inventory, CRM, multi-site restaurant systems) end to end. Works with AI coding agents (Claude Code) through phased roadmaps, specs, business rules and acceptance criteria — this is a complement to the full stack profile, not the headline.

## Operating Context

- Read on desktop by recruiters and on phones from LinkedIn/WhatsApp links.
- Bilingual: Spanish by default plus an English version through a simple language switch. His English is A2 and actively improving; the site must state this honestly and never imply fluency.
- Published from Git (GitHub Pages). No backend, no forms that need a server.

## Capabilities and Constraints

- Sections: introduction, how he works, featured projects (case studies), experience, stack, CV download (ES/EN PDF), contact.
- Contact shown publicly: email (mateohernandez10012003@gmail.com), phone (+57 321 527 2808), GitHub (github.com/MateoHdz), LinkedIn (linkedin.com/in/mateo-hernandez-209384280).
- Quantum Infinity work may be named with its products, but no code, internal screenshots or client data.
- Softgic work for Claro (mini programs, sales app) is employer code: describe it, never link or show code.
- Job title: "Desarrollador Full Stack" / "Full Stack Developer" (matches the official role; scope goes in the copy). Avoid "Ingeniero": he is a SENA technologist and the title is regulated in Colombia.
- Confirmed: SENA 2021 – 2023; Quantum Infinity since 07/2026; Claro and Cinemark may be named for the Softgic work.

## Brand Commitments

- Owner brief of 2026-11-11, which supersedes the earlier light, minimal look: keep the dark colors (charcoal ground, lime accent), make the design bold and top-tier, and keep the copy factual, concise and credible. No filler or naive lines (he named "empresas reales" as an example of what to avoid).
- Still standing from 2026-11-05: few but well-crafted animations, and nothing that frames him only as a "POS developer": the site must show the full breadth of his work.

- Personal name brand: Mateo Hernández / MateoHdz. TeoNova is his separate software brand (assets in `../_recursos/teonova-marca/`); the portfolio is about him, not TeoNova.
- Voice: direct, concrete, Colombian Spanish; plain words over buzzwords.

## Evidence on Hand

- CV content: `C:\Users\USUARIO\Desktop\Datos personales\Mateo_Hernandez_ Hoja de vida.pdf` (Jun 2026, missing Quantum Infinity).
- Public repos: TeoNova-Vet (NestJS/React/MySQL POS for Mr. Max Vet), atlas-spaces (Express/MongoDB/React, 47 tests), Turnia (product design + legal research).
- Private: DaySecurity CRM, fidelizacion-qr roadmap, generador-predios (Python), Quantum Infinity repos, Softgic repos (git stats: Cinemark mini program 37 commits Aug 2025–Jan 2026; Templo de la Moda 13 commits; App de Ventas 13 commits, Next.js 16).
- Quantum Infinity: on 2026-11-12 the owner asked to stop publishing the company's private data (customer count, locations) and vanity figures (commits, endpoints, document counts). The site and CV show outcomes instead, verified that day in the repos and docs: checkout from 1,390 to about 700 ms (BUG-R21, recipes loaded level by level); the point of sale had no automated tests (ANALISIS_PLANTA §2.7) and now has more than 1,700, all in files he added; 1,703 records migrated from the client's previous system in about 21 minutes; the Controller's four phases built on 2026-10-28/29, one approved mockup per phase; the sales demo built 2026-11-03 to 11-05; the menu, Focus and OMS turned from a copy per client into one multi-tenant codebase. Client names and the source system's name are not published.
- Portraits supplied by the owner on 2026-11-11: a real photo and an illustrated avatar, both with transparent background (`src/assets/mateo-foto.webp`, `src/assets/mateo-avatar.webp`).
- No testimonials, no metrics of business impact, no client logos. Do not fabricate any of these.

## Product Principles

1. Truth over polish: every claim maps to a real repo, job or document.
2. Recruiter-first: level, stack and contact are reachable in the first screen.
3. The work leads: projects are explained as problems solved, not as tech lists.
4. Simple to maintain: content lives in one data file per language; publishing is a git push.

## Accessibility & Inclusion

WCAG AA contrast, full keyboard navigation, respects `prefers-reduced-motion`, readable on small phones.
