// Genera la hoja de vida en PDF y DOCX (español e inglés) a partir de content/cv/*.json.
// Formato pensado para ATS: una sola columna, sin tablas, sin imágenes, encabezados estándar
// y todo el texto como texto real (nada dentro de gráficos, encabezados o pies de página).
//
// Uso: npm run cv
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  AlignmentType,
  BorderStyle,
  Document,
  ExternalHyperlink,
  HeadingLevel,
  LevelFormat,
  Packer,
  Paragraph,
  TabStopType,
  TextRun,
} from "docx";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const outDir = join(root, "public", "cv");
const tmpDir = join(root, ".cv-tmp");
mkdirSync(outDir, { recursive: true });
mkdirSync(tmpDir, { recursive: true });

const FILES = {
  es: "Mateo_Hernandez_Hoja_de_Vida_Desarrollador_Full_Stack",
  en: "Mateo_Hernandez_Resume_Full_Stack_Developer",
};

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const dates = (job, cv) => `${job.start} – ${job.end || cv.labels.present}`;

function contactItems(cv) {
  const c = cv.contact;
  return [
    { text: c.location },
    { text: c.phone, href: `tel:${c.phone.replace(/[^+\d]/g, "")}` },
    { text: c.email, href: `mailto:${c.email}` },
    c.linkedin && { text: c.linkedin, href: `https://${c.linkedin}` },
    c.github && { text: c.github, href: `https://${c.github}` },
    c.portfolio && { text: c.portfolio, href: `https://${c.portfolio}` },
  ].filter(Boolean);
}

// ---------- PDF (HTML impreso con Chrome sin interfaz) ----------
function toHtml(cv) {
  const contact = contactItems(cv)
    .map((i) => (i.href ? `<a href="${esc(i.href)}">${esc(i.text)}</a>` : esc(i.text)))
    .join(" | ");
  const jobs = cv.experience
    .map(
      (j) => `
    <div class="job">
      <p class="row"><strong>${esc(j.role)}</strong><span>${esc(dates(j, cv))}</span></p>
      <p class="org">${esc(j.company)} | ${esc(j.location)}</p>
      ${j.summary ? `<p class="summary">${esc(j.summary)}</p>` : ""}
      <ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
    </div>`
    )
    .join("");
  const projects = cv.projects
    .map(
      (p) =>
        `<li><strong>${esc(p.name)}</strong>${p.link ? ` (<a href="https://${esc(p.link)}">${esc(p.link)}</a>)` : ""}: ${esc(p.description)}</li>`
    )
    .join("");
  const skills = cv.skills.map((s) => `<p class="skill"><strong>${esc(s.group)}:</strong> ${esc(s.items)}</p>`).join("");
  const edu = cv.education
    .map((e) => `<p class="row"><span><strong>${esc(e.degree)}</strong> | ${esc(e.school)}</span><span>${esc(e.dates)}</span></p>`)
    .join("");
  const langs = cv.languages.map((l) => `${esc(l.name)}: ${esc(l.level)}`).join(" | ");

  return `<!doctype html>
<html lang="${cv.lang}"><head><meta charset="utf-8">
<title>${esc(cv.name)} | ${esc(cv.title)}</title>
<meta name="author" content="${esc(cv.name)}">
<style>
  @page { size: Letter; margin: 13mm 16mm; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 10pt; line-height: 1.3; color: #111; }
  a { color: #111; text-decoration: none; }
  h1 { font-size: 20pt; margin: 0; letter-spacing: .2pt; }
  .title { font-size: 12pt; font-weight: bold; margin: 2pt 0 0; }
  .headline { margin: 1pt 0 4pt; color: #333; }
  .contact { margin: 0; }
  h2 { font-size: 11pt; text-transform: uppercase; letter-spacing: .6pt; margin: 11pt 0 5pt; padding-bottom: 2pt; border-bottom: 1px solid #111; break-after: avoid; }
  p { margin: 0; }
  .row { display: flex; justify-content: space-between; gap: 12pt; }
  .row span:last-child { white-space: nowrap; }
  .job { margin-bottom: 7pt; break-inside: avoid-page; }
  .org { font-style: italic; }
  .summary { margin-top: 2pt; color: #333; }
  ul { margin: 3pt 0 0; padding-left: 14pt; }
  li { margin-bottom: 1.5pt; }
  .skill { margin-bottom: 1.5pt; }
</style></head>
<body>
  <h1>${esc(cv.name)}</h1>
  <p class="title">${esc(cv.title)}</p>
  <p class="headline">${esc(cv.headline)}</p>
  <p class="contact">${contact}</p>

  <h2>${esc(cv.labels.profile)}</h2>
  <p>${esc(cv.profile)}</p>

  <h2>${esc(cv.labels.experience)}</h2>
  ${jobs}

  <h2>${esc(cv.labels.projects)}</h2>
  <ul>${projects}</ul>

  <h2>${esc(cv.labels.skills)}</h2>
  ${skills}

  <h2>${esc(cv.labels.education)}</h2>
  ${edu}

  <h2>${esc(cv.labels.languages)}</h2>
  <p>${langs}</p>
</body></html>`;
}

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  ].filter(Boolean);
  const found = candidates.find((p) => existsSync(p));
  if (!found) throw new Error("No encontré Chrome ni Edge. Define CHROME_PATH.");
  return found;
}

function printPdf(htmlPath, pdfPath) {
  execFileSync(findChrome(), [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--user-data-dir=${join(tmpDir, "chrome-profile")}`,
    `--print-to-pdf=${pdfPath}`,
    pathToFileURL(htmlPath).href,
  ], { stdio: "ignore" });
}

// ---------- DOCX ----------
const FONT = "Arial";
const run = (text, opts = {}) => new TextRun({ text, font: FONT, size: 20, ...opts });

function sectionHeading(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "111111", space: 1 } },
    children: [new TextRun({ text: text.toUpperCase(), font: FONT, size: 22, bold: true })],
  });
}

// Texto a la izquierda y fecha alineada a la derecha en la misma línea (tabulación, no tabla).
const RIGHT_TAB = [{ type: TabStopType.RIGHT, position: 10200 }];
function rowParagraph(leftRuns, right) {
  return new Paragraph({ tabStops: RIGHT_TAB, children: [...leftRuns, run(`\t${right}`)] });
}

const bullet = (text) => new Paragraph({ numbering: { reference: "vinetas", level: 0 }, spacing: { after: 30 }, children: [run(text)] });

function toDocx(cv) {
  const contactRuns = [];
  contactItems(cv).forEach((item, i) => {
    if (i) contactRuns.push(run(" | "));
    contactRuns.push(item.href ? new ExternalHyperlink({ link: item.href, children: [run(item.text)] }) : run(item.text));
  });

  const children = [
    new Paragraph({ children: [run(cv.name, { size: 40, bold: true })] }),
    new Paragraph({ children: [run(cv.title, { size: 24, bold: true })] }),
    new Paragraph({ children: [run(cv.headline, { color: "333333" })] }),
    new Paragraph({ children: contactRuns }),

    sectionHeading(cv.labels.profile),
    new Paragraph({ children: [run(cv.profile)] }),

    sectionHeading(cv.labels.experience),
  ];

  cv.experience.forEach((j, idx) => {
    children.push(
      new Paragraph({
        tabStops: RIGHT_TAB,
        spacing: { before: idx ? 140 : 0 },
        keepNext: true,
        children: [run(j.role, { bold: true }), run(`\t${dates(j, cv)}`)],
      }),
      new Paragraph({ keepNext: true, children: [run(`${j.company} | ${j.location}`, { italics: true })] })
    );
    if (j.summary) children.push(new Paragraph({ children: [run(j.summary, { color: "333333" })] }));
    j.bullets.forEach((b) => children.push(bullet(b)));
  });

  children.push(sectionHeading(cv.labels.projects));
  cv.projects.forEach((p) => {
    children.push(
      new Paragraph({
        numbering: { reference: "vinetas", level: 0 },
        spacing: { after: 30 },
        children: [run(p.name, { bold: true }), run(p.link ? ` (${p.link}): ` : ": "), run(p.description)],
      })
    );
  });

  children.push(sectionHeading(cv.labels.skills));
  cv.skills.forEach((s) => children.push(new Paragraph({ spacing: { after: 30 }, children: [run(`${s.group}: `, { bold: true }), run(s.items)] })));

  children.push(sectionHeading(cv.labels.education));
  cv.education.forEach((e) => children.push(rowParagraph([run(e.degree, { bold: true }), run(` | ${e.school}`)], e.dates)));

  children.push(sectionHeading(cv.labels.languages));
  children.push(new Paragraph({ children: [run(cv.languages.map((l) => `${l.name}: ${l.level}`).join(" | "))] }));

  return new Document({
    creator: cv.name,
    title: `${cv.name} | ${cv.title}`,
    styles: {
      default: { document: { run: { font: FONT, size: 20 }, paragraph: { spacing: { after: 20, line: 264 } } } },
      paragraphStyles: [
        {
          id: "Heading1",
          name: "Heading 1",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: { font: FONT, size: 22, bold: true, color: "111111" },
          paragraph: { spacing: { before: 220, after: 100 }, keepNext: true, outlineLevel: 0 },
        },
      ],
    },
    numbering: {
      config: [
        {
          reference: "vinetas",
          levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 300, hanging: 220 } } } }],
        },
      ],
    },
    sections: [
      {
        properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 850, bottom: 850, left: 960, right: 960 } } },
        children,
      },
    ],
  });
}

for (const lang of ["es", "en"]) {
  const cv = JSON.parse(readFileSync(join(root, "content", "cv", `${lang}.json`), "utf8"));
  const base = FILES[lang];
  const htmlPath = join(tmpDir, `${base}.html`);
  writeFileSync(htmlPath, toHtml(cv), "utf8");
  printPdf(htmlPath, join(outDir, `${base}.pdf`));
  writeFileSync(join(outDir, `${base}.docx`), await Packer.toBuffer(toDocx(cv)));
  console.log(`✓ ${lang}: public/cv/${base}.pdf y .docx`);
}

rmSync(join(tmpDir, "chrome-profile"), { recursive: true, force: true });
