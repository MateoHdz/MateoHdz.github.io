---
name: Mateo Hernández Portfolio
description: "A career drawn as one technical sheet: charcoal ground, DIN-lineage lettering in one superfamily, lime as the reviewer's pen."
colors:
  pen: "oklch(87% 0.19 136)"
  pen-hi: "oklch(92% 0.17 136)"
  pen-ink: "oklch(19% 0.045 136)"
  pen-ink-2: "oklch(34% 0.07 136)"
  sheet: "oklch(14.5% 0.003 150)"
  sheet-2: "oklch(17.6% 0.004 150)"
  line: "oklch(27% 0.006 150)"
  line-strong: "oklch(41% 0.008 150)"
  ink: "oklch(96% 0.004 140)"
  ink-2: "oklch(83% 0.006 145)"
  ink-3: "oklch(68% 0.008 150)"
  grid-minor: "oklch(100% 0 0 / 0.022)"
  grid-major: "oklch(100% 0 0 / 0.05)"
typography:
  display:
    fontFamily: "Sofia Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.1rem, 5.6vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Sofia Sans Condensed, Sofia Sans, ui-sans-serif, sans-serif"
    fontSize: "clamp(2.6rem, 5.4vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "0.005em"
  title-lg:
    fontFamily: "Sofia Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.3vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Sofia Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.01em"
  block-title:
    fontFamily: "Sofia Sans Condensed, Sofia Sans, ui-sans-serif, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.07em"
  figure:
    fontFamily: "Sofia Sans Condensed, Sofia Sans, ui-sans-serif, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.02em"
    fontFeature: '"lnum", "tnum"'
  body-lead:
    fontFamily: "Sofia Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.45vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Sofia Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: '"lnum", "tnum"'
  body-sm:
    fontFamily: "Sofia Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.45
  label-strong:
    fontFamily: "Sofia Sans Condensed, Sofia Sans, ui-sans-serif, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
  label:
    fontFamily: "Sofia Sans Condensed, Sofia Sans, ui-sans-serif, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.09em"
  data:
    fontFamily: "Sofia Sans Condensed, Sofia Sans, ui-sans-serif, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    letterSpacing: "0.05em"
    fontFeature: '"lnum", "tnum"'
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1rem, 3.6vw, 3.5rem)"
  shell-max: "82.5rem"
  header-h: "3.75rem"
  band: "clamp(4.5rem, 9vw, 8.5rem)"
  head-gap: "clamp(2.25rem, 4.6vw, 3.75rem)"
  module: "1.5rem"
  module-major: "6rem"
  label-col: "10rem"
  tick: "11px"
components:
  button-pen:
    backgroundColor: "{colors.pen}"
    textColor: "{colors.pen-ink}"
    typography: "{typography.label-strong}"
    rounded: "{rounded.none}"
    height: "3rem"
    padding: "0 1.375rem"
  button-pen-hover:
    backgroundColor: "{colors.pen-hi}"
  button-line:
    textColor: "{colors.ink}"
    typography: "{typography.label-strong}"
    rounded: "{rounded.none}"
    height: "3rem"
    padding: "0 1.375rem"
  button-line-hover:
    backgroundColor: "{colors.sheet-2}"
  button-sm:
    rounded: "{rounded.none}"
    height: "2.25rem"
    padding: "0 0.875rem"
  button-ink:
    backgroundColor: "{colors.pen-ink}"
    textColor: "{colors.pen}"
    typography: "{typography.label-strong}"
    rounded: "{rounded.none}"
    height: "3rem"
    padding: "0 1.375rem"
  button-ink-hover:
    backgroundColor: "{colors.pen-ink-2}"
    textColor: "{colors.pen-hi}"
  button-ink-line:
    textColor: "{colors.pen-ink}"
    typography: "{typography.label-strong}"
    rounded: "{rounded.none}"
    height: "3rem"
    padding: "0 1.375rem"
  button-ink-line-hover:
    backgroundColor: "{colors.pen-ink}"
    textColor: "{colors.pen}"
  icon-button:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "2.25rem"
  icon-button-hover:
    backgroundColor: "{colors.sheet-2}"
  site-header:
    backgroundColor: "{colors.sheet}"
    height: "{spacing.header-h}"
  nav-link:
    textColor: "{colors.ink-3}"
    typography: "{typography.label}"
    padding: "0.5rem 0"
  nav-link-active:
    textColor: "{colors.ink}"
  tag:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.none}"
    padding: "0.3rem 0.55rem"
  plan-block:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink-2}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "1rem 1.125rem 1.125rem"
  view-frame:
    backgroundColor: "{colors.sheet-2}"
    rounded: "{rounded.none}"
  register-row:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.none}"
  register-row-open:
    backgroundColor: "{colors.sheet-2}"
  register-toggle:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "2.25rem"
  register-toggle-open:
    textColor: "{colors.pen}"
  scale-bar:
    backgroundColor: "{colors.line-strong}"
    rounded: "{rounded.none}"
    height: "5px"
  scale-bar-measure:
    backgroundColor: "{colors.pen}"
  closing-sheet:
    backgroundColor: "{colors.pen}"
    textColor: "{colors.pen-ink}"
    rounded: "{rounded.none}"
---

# Design System: Mateo Hernández Portfolio

## Overview

**Creative North Star: "The Dimensioned Sheet"**

The site is one technical drawing sheet of a developer's career. A charcoal sheet carries a faint drafting grid, warm light-gray linework and lettering from the DIN lineage. Lime is the only color and it behaves like a reviewer's pen: it ticks the ends of dimension lines, writes the measured figures, underlines what is active and fills one block per view. A claim is set the way a drawing sets it, as a figure beside its basis, and the systems he built are drawn as plans with blocks, arrows and brackets.

The density is that of a drawing, not of a landing page. The opening view is a framed sheet with zone ticks, the name in caps, a real cut-out portrait standing in a drawn view frame, and a side rail with numbered notes and a title block (role, location, work mode, engagement, languages, revision, CV). Each section opens with a condensed title joined by a dimension line to its measure. The main project is a bordered sheet holding a plan and a rail of figures, the other projects are register rows that unfold in place, the process is a dimension chain, experience is a timeline drawn to scale and the stack is a ruled table. The page ends on the only inverted sheet: lime ground, dark ink.

Motion has one idea: lines are drawn and content stays put. On load the frame plots its four strokes, the name rises out of its line box and the portrait develops. On scroll each dimension line, bracket and to-scale bar draws from its origin as it enters the viewport, and a lime hairline under the sticky header grows with the page. A two-button toggle swaps the photo for the illustrated avatar with a circular reveal from the face. All CSS motion is removed under `prefers-reduced-motion: reduce`. The direction contract refused the split hero with an avatar, the project card grid and the row of metric tiles; the owner's brief fixed the dark charcoal ground and the lime accent.

**Key Characteristics:**
- One dark sheet (`color-scheme: dark`); there is no light theme.
- One accent, lime, used as a pen: ticks, measured figures, active and focus states, one filled block per view.
- One superfamily in two widths: Sofia Sans for the name, titles and sentences; Sofia Sans Condensed for section titles, labels, figures and controls. No monospace.
- Square corners everywhere; the portrait reveal is the only circle.
- 1px linework carries all structure: frame, title blocks, dimension lines, plan blocks. No shadows.
- Measurements are real: bars and the timeline are drawn to scale from the content data.
- Lines draw, content stays put, and all CSS motion is removed under reduced motion.

## Colors

A near-black charcoal with a trace of green, three grays of lettering, two weights of line and a single saturated lime.

### Primary
- **Pen Lime** (`pen`, oklch(87% 0.19 136)): the reviewer's pen. Ticks on dimension lines, the contract bracket, corner marks of the view frame, measured figures on plan blocks, note and step numerals, the active nav underline, the scroll-progress hairline, link underlines, the focus ring, the caret and text selection. As a fill: the one primary button, the measured span of a to-scale bar, the current job on the timeline and the whole closing sheet.
- **Pen Lime, Lit** (`pen-hi`): hover fill of the lime button, and the label of the ink button on hover.
- **Pen Ink** (`pen-ink`): the green-black that writes on lime. Label of the lime button; every text, rule and outline on the closing sheet; fill of its primary button; selected text.
- **Pen Ink, Lifted** (`pen-ink-2`): hover fill of the ink button, nothing else.

### Neutral
- **Charcoal Sheet** (`sheet`): the page, the header, the side rail and the fill of plan blocks.
- **Raised Sheet** (`sheet-2`): the single tonal step. Fill of the portrait's view frame, of a register row under the pointer or open, and of outlined controls on hover.
- **Hairline** (`line`): dividers inside tables and lists, the header's bottom rule, zone-tick rules, tag outlines, year rulings on the timeline.
- **Object Line** (`line-strong`): the sheet frame, sheet and block outlines, dimension lines, control outlines, group rules, the track of a to-scale bar.
- **Lettering White** (`ink`): the name, titles, table values, button labels.
- **Reading Gray** (`ink-2`): body copy.
- **Label Gray** (`ink-3`): labels, years and dates, zone ticks, sources, resting nav links, past jobs on the timeline, arrows inside drawings.
- **Drafting Grid** (`grid-minor`, `grid-major`): white at 2.2% and 5%, the 1px rulings of the grid paper.

Measured against Charcoal Sheet: Lettering White 17.6:1, Reading Gray 11.8:1, Label Gray 6.9:1 (6.6:1 on Raised Sheet), Pen Lime 14.2:1. Pen Ink on Pen Lime is 13.1:1. Object Line is 2.3:1 and Hairline 1.3:1.

### Named Rules
**The Reviewer's Pen Rule.** Lime marks what a reviewer would mark: the ticks that close a dimension line, a measured figure, the numeral of a note or step, the active nav item, the pressed toggle, focus, the underline of a link. It never colors a heading or running text, and it never outlines a container at rest.

**The One Lime Block Rule.** A view holds at most one lime-filled block: the primary action in the hero, then the closing sheet. Every other lime fill is a measurement or a mark: the measured span of a to-scale bar, the current job on the timeline, the 6px corner of the monogram, selected text.

**The Structure-Only Line Rule.** Object Line and Hairline sit at 2.3:1 and 1.3:1 on the sheet, so a line organizes but never carries meaning alone. Every outlined control also holds a text label or an icon at text contrast, and every bar has its figure written beside it.

## Typography

**Display Font:** Sofia Sans (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Sofia Sans (same family and fallback)
**Label/Mono Font:** Sofia Sans Condensed (with Sofia Sans, ui-sans-serif, sans-serif). There is no monospace.

**Character:** One DIN-descended superfamily, the lettering of engineering drawings, loaded as variable fonts through `next/font`. Width does the job a second typeface would do: normal width for what is read as language, condensed for what is read as lettering on the sheet.

### Hierarchy
- **Display** (800, clamp(3.1rem, 5.6vw, 5.25rem), 0.9, -0.02em, uppercase): the name, on two lines, clamp(2.6rem, 13.6vw, 4rem) below 48rem. The closing question uses the same voice at clamp(2.5rem, 5.6vw, 5.25rem) / 0.92, capped at 12ch.
- **Headline** (Condensed 700, clamp(2.6rem, 5.4vw, 4.5rem), 0.92, 0.005em, uppercase): section titles.
- **Title Large** (800, clamp(1.75rem, 3.3vw, 2.75rem), 1.02, -0.02em): the main project's title, sentence case.
- **Title** (700, 1.3125rem, 1.18, -0.01em): process step and job titles. Register titles flex at clamp(1.1875rem, 1.7vw, 1.4375rem).
- **Block Title** (Condensed 700, 1rem, 1.15, 0.07em, uppercase): names of plan blocks. Register group heads use it at 1.125rem / 0.08em.
- **Figure** (Condensed 700, 1.5rem, 1.1, 0.02em): measured figures in the figures rail, in Lettering White. A figure dimensioned on a plan block is 1rem in Pen Lime.
- **Body Lead** (400, clamp(1.125rem, 1.45vw, 1.3125rem), 1.45): the hero sentence, capped at 29rem, with its opening words at 700 in Lettering White. The main project summary and the closing text run at clamp(1.0625rem, 1.3vw, 1.1875rem) / 1.5.
- **Body** (400, 1.0625rem, 1.6; 1rem below 48rem): the default. Text inside rows and lists runs at 1rem / 1.5 to 1.55. Each block caps its own measure: 22rem for steps, 34rem for the project summary, 36rem for job lines, 44rem for the aside note.
- **Body Small** (400, 0.9375rem, 1.45): notes, plan block text, table values. Figure captions and the plan legend drop to 0.875rem.
- **Label Strong** (Condensed 700, 0.9375rem, 1, 0.08em, uppercase): buttons and the name beside the monogram; 0.8125rem in small buttons.
- **Label** (Condensed 600, 0.8125rem, 1.2, 0.09em, uppercase, Label Gray): table terms, captions over a plan, client lines, section measures. 0.75rem inside the title block and spec tables, 0.875rem for nav links.
- **Data** (Condensed 600, 0.9375rem, 0.05em, sentence case): years and date ranges. Tags and chain steps use it at 0.8125rem and 0.875rem.

### Named Rules
**The Width Is Hierarchy Rule.** Normal width is for language: the name, project and role titles, sentences. Condensed is for lettering: section titles, labels, figures, dates, controls. A new element picks its width by that test; a second family or a monospace is never the answer.

**The Lettering Caps Rule.** Uppercase belongs to the name, the closing question, section titles and condensed labels and controls, tracked 0.06em to 0.09em at label sizes. Project titles, figures, tags and sentences stay in sentence case.

**The Tabular Figures Rule.** `font-variant-numeric: lining-nums tabular-nums` is set once on the body, so every figure, year and date aligns in columns wherever it appears.

## Layout

Content sits in one shell, `min(82.5rem, 100% - 2 × gutter)`, with a fluid gutter of clamp(1rem, 3.6vw, 3.5rem). The header is sticky at 3.75rem. Sections are separated by space above the title only (clamp(4.5rem, 9vw, 8.5rem), nothing below and no rule between sections), and a title sits clamp(2.25rem, 4.6vw, 3.75rem) above its content. The drafting grid gives the base module: 1.5rem minor, 6rem major.

Wide screens read as a sheet with a rail. The hero is `minmax(0, 1fr)` plus a rail of clamp(19rem, 27vw, 23.5rem), sized to the first viewport under the header (min-height clamp(38rem, 100svh − header − 2.25rem, 51rem)); its main area splits 1.14fr / 1fr between identity and portrait. The main project repeats the pattern with a figures rail of clamp(18rem, 26vw, 22rem). Register rows use four columns (5.5rem year, title, summary, 2.25rem toggle). Experience uses a 10rem dates column, the role, and a timeline column divided into four years; the stack table reuses the 10rem column and the same gap. The closing sheet is a full-bleed lime band whose inner sheet splits 1.12fr / 1fr.

Responsive behavior, as built:
- **Below 72rem:** each rail folds under its main area (notes beside the title block; figures as value-and-caption rows), the process chain becomes two by two, the closing sheet stacks, and stack items are separated by commas instead of rules.
- **Below 64rem:** the text nav is replaced by a menu button.
- **Below 48rem:** one column and 1rem body. Hero order is name, sentence, actions, links, portrait, notes, title block. Zone ticks reduce to A–D across the top. Drawings turn vertical: plan arrows point down, the contract bracket and the platform bus move to the left edge, the process becomes a vertical chain with its ticks on the left, and each job's bar moves above its text.
- **Below 40rem:** the name beside the monogram is hidden.
- **Short desktops (height under 47.5rem at 72rem or wider):** the rail tightens and the revision row is hidden, so the title block stays in the first viewport.

### Named Rules
**The Inhabited Rail Rule.** The right-hand rail is where a drawing keeps its notes: numbered notes and the title block in the hero, measured figures beside the plan. A rail is never empty and never decorative, and below 72rem it folds under what it annotates.

**The One Grid Per Entry Rule.** A register row and its unfolded detail sit on the same four columns, and experience and stack share the 10rem label column, so the same field is found in the same place down the page.

**The Space Above Rule.** A section is announced by the space above its title, not by a rule or a tinted band. The only full-width change of ground is the closing sheet.

## Elevation & Depth

The system is flat and casts no shadows: there is no `box-shadow` or `drop-shadow` in the build. Depth comes from four things. Outlines: 1px Object Line around sheets, blocks and controls. One tonal step: Raised Sheet for the view frame and for a row under the pointer or open. Overlap: the cut-out portrait stands in front of its drawn frame and breaks out of its top edge, and the sticky header covers the page with a 1px rule. Inversion: the closing sheet. Blur appears once, 6px to 0 in the portrait's entrance, and never as glass.

### Named Rules
**The Flat Sheet Rule.** Nothing floats and nothing casts. A surface may step one tone under the pointer or while open; rank is shown by inversion to lime, once, at the end of the page.

## Shapes

Every corner is square (0px): buttons, blocks, sheets, tags, toggles, bars, the focus ring. The single circle is the portrait reveal, a transition over the picture and not a container.

Structure is 1px linework. A dimension line is a 1px Object Line closed at both ends by a 1px × 11px lime tick. A figure on a plan block hangs under a 1px line with a 9px tick. The view frame carries two 13px L-shaped lime marks above its top corners. The contract bracket is a 0.5rem-deep, three-sided lime outline spanning the blocks it binds. Bars are solid and thin: 5px for a to-scale bar, 7px for a job on the timeline. The focus ring is a 2px lime outline at 3px offset (Pen Ink on the closing sheet).

Icons are Lucide outlines (2px stroke, round caps) at about 1rem. They sit beside a text label, except in the two square toggles (menu, register row), which carry an accessible name instead. GitHub and LinkedIn are redrawn in the same stroke. Arrows that belong to a drawing are authored SVG in 1px square-capped linework: the shaft stretches with the gap and the head keeps its size.

The portrait is a true cut-out, with alpha from the asset, in a 4:5 box anchored to the bottom of its view.

### Named Rules
**The Line-and-Tick Rule.** One geometry draws everything: a 1px line closed by a 1px lime tick. Frame, dividers, dimension lines, active states and scroll progress are all that same line; nothing gets a thicker border to look important.

**The Grid Under Drawings Rule.** The drafting grid appears only under things that are drawings: the hero sheet (masked so it is strongest around the portrait), the portrait's view frame and the main project's plan. Tables, the register, the timeline and the closing sheet sit on plain sheet.

## Components

### Buttons
Lettered plates: square, flat, labeled in condensed caps.
- **Shape:** square (0px), 3rem tall, 1.375rem side padding, Label Strong, a 1rem icon after the label at 0.625rem. Small: 2.25rem tall, 0.875rem padding, 0.8125rem label.
- **Primary:** Pen Lime fill with a Pen Ink label. Used once, for the hero's main action.
- **Outlined:** 1px Object Line with a Lettering White label; on hover the outline turns Lettering White and the fill Raised Sheet. Used for the CV download and, small, for the header's contact link.
- **On the closing sheet:** an ink button (Pen Ink fill, Pen Lime label; hover Pen Ink, Lifted with a lit label) and an ink-outlined button (1px Pen Ink; hover inverts to Pen Ink fill and lime label). The copy-email button swaps its icon for a check and its label for a confirmation for 2.4s, announced politely.
- **Hover / Focus / Active:** colors change in 0.2s; the trailing icon nudges 3px down for downward actions or 2px up and right for outbound ones (0.35s, `cubic-bezier(0.16, 1, 0.3, 1)`); press is `scale(0.98)` in 0.15s; focus is the 2px lime outline.
- **Icon button and language switch:** a 2.25rem square with a 1rem icon and 1px Object Line (menu toggle, register toggle), and a 2.25rem-tall two-letter switch with a 1px Hairline.

### Tags and Chains
- **Tag:** 1px Hairline outline, Reading Gray, condensed 600 at 0.8125rem / 0.05em, 0.3rem × 0.55rem padding. Not interactive; it lists the materials of a drawing (the main project's stack).
- **Chain:** the steps of a flow inside a register row. 1px Object Line boxes on Charcoal Sheet with Lettering White condensed text at 0.875rem, joined by drawn arrows in Label Gray.

### Sheets and Containers
There are no cards. The containers are the sheet, the plan block and the table.
- **Corner Style:** square (0px).
- **Background:** Charcoal Sheet; Raised Sheet only for the view frame; Pen Lime for the closing sheet.
- **Shadow Strategy:** none, see Elevation & Depth.
- **Border:** 1px Object Line (1px Pen Ink on the closing sheet).
- **Internal Padding:** clamp(1.5rem, 3.4vw, 3rem) for a sheet; 1rem 1.125rem 1.125rem for a plan block.

### Navigation
A sticky header on Charcoal Sheet with a 1px Hairline below it; a lime hairline on that rule grows from the left with scroll progress. Left: a 2rem monogram box in 1px Object Line with a 6px lime square on its bottom-right corner, then the name in Label Strong. Center: links in condensed 600 at 0.875rem / 0.09em, Label Gray at rest; on hover and for the section in view they turn Lettering White and a 1px lime underline draws from the left in 0.4s. Right: the language switch and the small contact button. Below 64rem a menu button opens a panel under the header: full-width links at 1.125rem condensed caps separated by Hairlines, each with a right arrow. It closes on a link, on Escape or when the window widens. A skip link appears on keyboard focus as a lime plate with a Pen Ink label.

### Sheet Frame and Zone Ticks
The hero is drawn as a sheet: four 1px Object Line strokes that plot themselves clockwise on load (1.1s each, 0.12s apart, `scaleX`/`scaleY` from the previous corner), with zone references along the edge, A to H across a 1rem top band and 1 to 4 down the left, in condensed Label Gray at 0.6875rem and hidden from assistive technology.

### Title Block and Spec Tables
The cajetín. A definition list ruled with Hairlines under a 1px Object Line: a fixed label column (6.25rem in the title block, 4.75rem in a project's spec table, 10rem in the stack table), terms in Label at 0.75rem, values in Lettering White at 0.9375rem behind a vertical Hairline. CV links inside it are condensed 700 with a 1px lime underline and a download icon. In the stack table, items on one line are separated by short vertical rules. Its last two rows, development methodology and AI-assisted development, sit under an Object Line with more air: each leads with one sentence at hero-lead size in Lettering White, then the methodology shows its steps as a chain with lime numerals and the AI row shows its tasks as columns with lime ticks, and both close on short label-and-value notes (framework; tool and judgment).

### Section Head
A Headline title, a dimension line that takes the remaining width, and the section's measure in Label at the far end ("9 proyectos · 2023 – 2026"). The line draws from the left as the head enters the viewport. The Stack head is the one built without a measure; its line runs to the shell edge. Below 48rem the title takes the full row and the line and measure sit under it.

### Plan Diagram
The main project's systems drawn as a plan on minor grid paper. Blocks are 1px Object Line boxes on Charcoal Sheet with a Block Title and one sentence in Body Small. Blocks in a flow are joined by stretching arrows; a lime bracket under the row binds the blocks that share a contract and holds one centered sentence. Platform blocks hang from a horizontal bus by 1rem drops. A block may carry one dimensioned figure at its foot. A legend closes the plan: stack tags and one sentence, in Label Gray, naming where the figures come from.

### Figures Rail and To-Scale Bar
A ruled column beside the plan, one cell per figure: the value in Figure, one sentence of scope in Body Small at 0.875rem and, only when the value is a ratio of two real numbers, a 5px bar whose lime span is that ratio over an Object Line track (700 of 1,390 ms). The bar draws from the left on entry and carries its ratio as an accessible label.

### Project Register Row
The signature list. Each row shows year, title with the client line under it in Label, a one-sentence summary and a square toggle with a plus. The whole row is the hit area. Hovering or opening steps the row to Raised Sheet and turns the toggle's outline and icon lime; opening rotates the plus 45° (0.5s) and unfolds the detail in place (grid rows 0fr to 1fr, 0.55s, `cubic-bezier(0.16, 1, 0.3, 1)`; content fades in after 0.12s). The detail keeps the row's columns: context, an optional flow chain and the spec table (role, status when there is one, stack, code) under the title; what he did, as a list with 0.75rem lime dashes, under the summary. Private code keeps its field and says so with a lock icon. The detail is always in the HTML, and a row opens itself when the URL hash points at it.

### Dimension Chain
The process as one dimension line with a lime tick at the start of every step and at the end of the chain. Each step has a lime condensed numeral, a Title, a paragraph capped at 22rem and a proof cell: a hairline, the Label "En la práctica" and one sentence in Ink at 0.9375rem naming a verifiable case from his work. The four children sit on a shared subgrid so titles, paragraphs and proofs line up across columns. The line draws on entry. Two by two below 72rem; a vertical chain with ticks on the left below 48rem.

### To-Scale Timeline
Experience as rows of dates, role and a bar on a shared four-year axis. Each bar's start and length are computed from the job's months, 7px tall, at least 4px wide, Label Gray for past jobs and Pen Lime for the current one. Year rulings are Hairlines. The education row has no bar and labels itself in the timeline column.

### Portrait and View Toggle
A real portrait cut-out standing in a drawn view frame (Raised Sheet with major grid, 1px Object Line, lime corner marks) and breaking out of its top edge. Hovering the portrait does nothing: the owner removed the pointer lens on 2026-11-12. A two-button toggle under the portrait (condensed caps, the pressed option in Lettering White with a 1px lime underline) switches the whole portrait: a circle centered on the face grows until the illustrated avatar covers the picture in 0.9s and shrinks back in 0.6s. Mouse, touch and keyboard use the same toggle. On load the frame draws up from its base and the portrait develops (opacity, 1.5rem rise and 6px blur to none, 1.2s).

Assets and provenance:
- `src/assets/mateo-foto.webp` (1024 × 1280, transparent): owner-supplied portrait photograph, provided 2026-11-11, not generated; edges defringed and re-encoded to WebP. Provenance in `src/assets/mateo-foto.webp.json`.
- `src/assets/mateo-avatar.webp` (1024 × 1280, transparent): owner-supplied illustrated 3D avatar, made by the owner outside this project, provided 2026-11-11; same treatment. Provenance in `src/assets/mateo-avatar.webp.json`.

### Closing Sheet
The only inverted surface: a full-bleed Pen Lime band holding a sheet outlined in 1px Pen Ink. Left, the closing question in Display, a sentence at weight 500 and the two ink buttons. Right, a ruled list of contact rows (label in condensed caps, value at 600, an outbound or download icon); a row under the pointer inverts to Pen Ink with lime text and its icon nudges 3px up and right. Selection and focus invert with it. The footer line sits inside the band in condensed caps.

### Share Image
`public/og.jpg` (1200 × 630): rendered with headless Chrome from an HTML layout (name, role, one verified fact, site URL) over the owner-supplied portrait; no generated imagery. Its provenance is embedded in the JPEG comment segment.

## Do's and Don'ts

### Do:
- **Do** draw structure with 1px lines: `line` for dividers inside a table or list, `line-strong` for outlines, frames and dimension lines.
- **Do** close a dimension line with 1px × 11px lime ticks and end it on a real measure set in Label.
- **Do** keep lime for marks, measured figures, active and focus states, and one filled block per view.
- **Do** choose width by role: Sofia Sans for names, titles and sentences; Sofia Sans Condensed for section titles, labels, figures, dates and controls.
- **Do** write a figure with its basis: the value in Figure, one sentence of scope or source under it, and a to-scale bar only when the value is a ratio of two real numbers.
- **Do** keep every project on the register grid with the same spec fields; when code is private the field stays and says so with the lock icon.
- **Do** number only what is ordered: hero notes and process steps carry a lime condensed numeral, sections carry none.
- **Do** put a label beside or under what it names: the measure at the end of the dimension line, the client line under the project title.
- **Do** build new motion as a line growing from its origin (`scaleX` or `scaleY`, `cubic-bezier(0.16, 1, 0.3, 1)` on load, a scroll-linked `view()` timeline below the hero), and make sure the `prefers-reduced-motion: reduce` block stops it.
- **Do** use Lucide outline icons at about 1rem, with a text label beside them or an accessible name on a square toggle, and 1px square-capped SVG for arrows inside drawings.

### Don't:
- **Don't** round corners or cast shadows; the portrait reveal is the only circle and nothing floats.
- **Don't** put content on cards, lay projects out as a card grid or set figures as a row of metric tiles; projects are register rows and figures live in a ruled rail beside the plan they measure.
- **Don't** add a second accent, a gradient fill, gradient text or glass; the only gradients are the 1px grid rulings and the masks that fade them.
- **Don't** set headings or running text in lime, and don't fill a second block with lime in the same view.
- **Don't** bring in a second typeface or a monospace, and don't let a system face stand in for Sofia Sans in display sizes.
- **Don't** place a small label above a heading; the heading speaks first.
- **Don't** draw the drafting grid under tables, the register, the timeline or the closing sheet.
- **Don't** animate content on scroll; below the hero only lines, brackets and bars draw.
- **Don't** rely on a line alone to show a control or a state; Object Line is 2.3:1 on the sheet.
- **Don't** add a light theme; the sheet is dark only.
