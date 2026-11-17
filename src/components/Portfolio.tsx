import { ArrowDown, ArrowUp, ArrowUpRight, Download, Mail, MessageCircle } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { CV_EN, CV_ES, EMAIL, GITHUB, LINKEDIN, REVISION, TIMELINE, WHATSAPP, type PlanNode, type Site } from "@/content/site";
import { SITE_URL } from "@/metadata";
import { FlowArrow, StepArrow } from "./Arrows";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { CopyEmail } from "./CopyEmail";
import { Header } from "./Header";
import { Portrait } from "./Portrait";
import { ProjectRow } from "./ProjectRow";

const ZONES_X = ["A", "B", "C", "D", "E", "F", "G", "H"];
const ZONES_Y = ["1", "2", "3", "4"];

// Posición de un mes sobre la línea de tiempo, como fracción de 0 a 1.
const monthIndex = (ym: string) => {
  const [year, month] = ym.split("-").map(Number);
  return year * 12 + month - 1;
};
const axisStart = monthIndex(TIMELINE.start);
const axisSpan = monthIndex(TIMELINE.end) + 1 - axisStart;
const startOf = (ym: string) => (monthIndex(ym) - axisStart) / axisSpan;
const endOf = (ym: string) => (monthIndex(ym) + 1 - axisStart) / axisSpan;

// El correo solo puede partirse antes de la arroba.
function breakEmail(value: string) {
  const at = value.indexOf("@");
  return (
    <>
      {value.slice(0, at)}
      <wbr />
      {value.slice(at)}
    </>
  );
}

function SectionHead({ id, title, measure }: { id: string; title: string; measure?: string }) {
  return (
    <div className="sec-head">
      <h2 id={`${id}-titulo`} className="sec-title">
        {title}
      </h2>
      <span className="dim" aria-hidden="true" />
      {measure && <p className="label dim-note">{measure}</p>}
    </div>
  );
}

function Section({ id, title, measure, children }: { id: string; title: string; measure?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="band">
      <div className="shell">
        <SectionHead id={id} title={title} measure={measure} />
        {children}
      </div>
    </section>
  );
}

export function Portfolio({ s }: { s: Site }) {
  const { hero, work, process, experience, stack, contact } = s;
  const fl = work.flagship;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: s.name,
    jobTitle: hero.block[0].value,
    url: SITE_URL,
    email: EMAIL,
    address: { "@type": "PostalAddress", addressLocality: "Cali", addressCountry: "CO" },
    sameAs: [GITHUB, LINKEDIN],
  };

  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-pen focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-pen-ink"
      >
        {s.ui.skip}
      </a>

      <Header s={s} />

      <main id="top">
        <section className="hero shell" aria-labelledby="inicio-titulo">
          <div className="sheet">
            <div className="frame" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>

            <div className="sheet-main">
              <div className="zones-x" aria-hidden="true">
                {ZONES_X.map((z) => (
                  <span key={z}>{z}</span>
                ))}
              </div>
              <div className="zones-y" aria-hidden="true">
                {ZONES_Y.map((z) => (
                  <span key={z}>{z}</span>
                ))}
              </div>

              <div className="hero-id">
                <h1 id="inicio-titulo" className="hero-title">
                  <span className="row">
                    <span>{s.firstName}</span>
                  </span>{" "}
                  <span className="row">
                    <span>{s.lastName}</span>
                  </span>
                </h1>
                <p className="hero-lead">
                  <strong>{hero.leadStrong}</strong> {hero.lead}
                </p>
                <div className="hero-actions">
                  <a href="#proyectos" className="btn btn-pen">
                    {hero.work} <ArrowDown className="nudge-down" aria-hidden="true" />
                  </a>
                  <a href={hero.cvHref} target="_blank" rel="noreferrer" className="btn btn-line">
                    {hero.cv} <Download className="nudge-down" aria-hidden="true" />
                  </a>
                </div>
                <ul className="hero-links label">
                  <li>
                    <a href={GITHUB} target="_blank" rel="noreferrer">
                      <GithubIcon /> GitHub
                    </a>
                  </li>
                  <li>
                    <a href={LINKEDIN} target="_blank" rel="noreferrer">
                      <LinkedinIcon /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href={WHATSAPP} target="_blank" rel="noreferrer">
                      <MessageCircle aria-hidden="true" /> WhatsApp
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${EMAIL}`}>
                      <Mail aria-hidden="true" /> {hero.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="hero-view">
                <Portrait labels={{ alt: hero.portraitAlt, group: hero.viewLabel, photo: hero.viewPhoto, avatar: hero.viewAvatar }} />
              </div>
            </div>

            <aside className="sheet-side">
              <div className="notes">
                <h2 className="label">{hero.notesTitle}</h2>
                <ol>
                  {hero.notes.map((note, i) => (
                    <li key={note.text}>
                      <span className="n" aria-hidden="true">
                        {i + 1}
                      </span>
                      <a href={note.href}>
                        {note.text}
                        <small>
                          {note.source}
                          {/* Espacio duro: la flecha nunca queda sola en una línea. */}
                          {" "}
                          <ArrowDown aria-hidden="true" />
                        </small>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              <dl className="tb" aria-label={hero.blockTitle}>
                {hero.block.map((row) => (
                  <div key={row.label}>
                    <dt className="label">{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
                <div className="tb-rev">
                  <dt className="label">{hero.revision.label}</dt>
                  <dd>{hero.revision.value}</dd>
                </div>
                <div>
                  <dt className="label">{hero.cvLabel}</dt>
                  <dd>
                    <a href={CV_ES} target="_blank" rel="noreferrer" className="cv-link">
                      ES <Download aria-hidden="true" />
                    </a>
                    <a href={CV_EN} target="_blank" rel="noreferrer" className="cv-link">
                      EN <Download aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <Section id="proyectos" title={work.title} measure={work.measure}>
          <article id="proyecto-quantum" className="flagship" aria-labelledby="principal-titulo">
            <div className="fl-top">
              <div>
                <h3 id="principal-titulo" className="fl-title">
                  {fl.title}
                </h3>
                <p className="fl-meta label">
                  <span>{fl.client}</span>
                  <span className="is-pen">{fl.role}</span>
                </p>
              </div>
              <p className="fl-summary">{fl.summary}</p>
            </div>

            <div className="fl-grid">
              <div className="plan">
                <p className="label plan-label">{fl.flowLabel}</p>
                <div className="flow">
                  {fl.flow.map((node, i) => (
                    <FlowNode key={node.name} node={node} arrow={i > 0} />
                  ))}
                </div>
                <div className="contract">
                  <p>{fl.contract}</p>
                </div>

                <p className="label plan-label">{fl.platformLabel}</p>
                <div className="platform">
                  {fl.platform.map((node) => (
                    <PlanBlock key={node.name} node={node} />
                  ))}
                </div>

                <div className="plan-legend">
                  <ul className="tags" aria-label={fl.stackLabel}>
                    {fl.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <p>{fl.source}</p>
                </div>
              </div>

              <div className="figs">
                <span className="label">{fl.figuresLabel}</span>
                {fl.figures.map((fig) => (
                  <div key={fig.value} className="fig">
                    <p className="fig-value">{fig.value}</p>
                    <p className="fig-label">
                      <span className="fig-long">{fig.label}</span>
                      {fig.short && <span className="fig-short">{fig.short}</span>}
                    </p>
                    {fig.scale && (
                      <div className="scale" role="img" aria-label={fig.scale.caption} style={{ "--ratio": fig.scale.ratio } as CSSProperties}>
                        <i />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </article>

          <div className="reg">
            {work.groups.map((group) => (
              <section key={group.title} className="reg-group">
                <div className="reg-group-head">
                  <h3>{group.title}</h3>
                  <span className="label">
                    {group.projects.length} {work.countLabel}
                  </span>
                </div>
                {group.projects.map((p) => (
                  <ProjectRow key={p.id} p={p} labels={work.labels} ui={s.ui} />
                ))}
              </section>
            ))}
          </div>
        </Section>

        <Section id="proceso" title={process.title} measure={process.measure}>
          <ol className="steps">
            {process.steps.map((step, i) => (
              <li key={step.title} className="step">
                <span className="step-n" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <div className="step-proof">
                  <p className="label">{process.proofLabel}</p>
                  <p>{step.proof}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="aside-note">
            <h3 className="label">{process.noteLabel}</h3>
            <p>{process.note}</p>
          </div>
        </Section>

        <Section id="experiencia" title={experience.title} measure={experience.measure}>
          <div className="gantt">
            <div className="gantt-axis" aria-hidden="true">
              <div className="axis-years">
                {TIMELINE.years.map((year) => (
                  <span key={year}>{year}</span>
                ))}
              </div>
            </div>
            <ol>
              {experience.jobs.map((job) => (
                <li key={job.start} className="job">
                  <p className="job-dates">{job.dates}</p>
                  <div>
                    <h3>{job.role}</h3>
                    <p className="job-co">
                      {job.company} <span>· {job.place}</span>
                    </p>
                    <p className="job-line">{job.line}</p>
                  </div>
                  <div
                    className="job-bar"
                    aria-hidden="true"
                    style={{ "--s": startOf(job.start), "--e": endOf(job.end || REVISION) } as CSSProperties}
                  >
                    <i className={job.end ? undefined : "is-now"} />
                  </div>
                </li>
              ))}
              <li className="job job-edu">
                <p className="job-dates">{experience.education.dates}</p>
                <div>
                  <h3>{experience.education.degree}</h3>
                  <p className="job-co">{experience.education.school}</p>
                </div>
                <p className="label">{experience.education.label}</p>
              </li>
            </ol>
          </div>
        </Section>

        <Section id="stack" title={stack.title}>
          <dl className="stack-table">
            {stack.groups.map((g) => (
              <div key={g.group} className={g.lead ? "is-lead" : undefined}>
                <dt className="label">{g.group}</dt>
                <dd>
                  {g.lead && <p className="stack-lead">{g.lead}</p>}
                  {g.layout === "steps" ? (
                    <ol className="chain stack-chain">
                      {g.items.map((item, i) => (
                        <li key={item}>
                          {i > 0 && <StepArrow />}
                          <span>
                            <b className="n">{i + 1}</b>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <ul className={g.layout === "tasks" ? "stack-tasks" : undefined}>
                      {g.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {g.notes?.map((note) => (
                    <p key={note.label} className="stack-note">
                      <span className="label">{note.label}</span>
                      {note.text}
                    </p>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <section id="contacto" aria-labelledby="contacto-titulo" className="close">
          <div className="shell">
            <div className="close-sheet">
              <div className="close-main">
                <div>
                  <h2 id="contacto-titulo" className="close-title">
                    {contact.title}
                  </h2>
                  <p className="close-text">{contact.text}</p>
                </div>
                <div className="close-actions">
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-ink">
                    {contact.whatsapp} <ArrowUpRight className="nudge-out" aria-hidden="true" />
                  </a>
                  <CopyEmail email={EMAIL} label={s.ui.copyEmail} copied={s.ui.copied} />
                </div>
              </div>
              <div className="close-list">
                <ul>
                  {contact.items.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} {...(item.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noreferrer" })}>
                        <span className="k">{item.label}</span>
                        <span className="v">{item.href.startsWith("mailto:") ? breakEmail(item.value) : item.value}</span>
                        {item.href.endsWith(".pdf") ? <Download aria-hidden="true" /> : <ArrowUpRight aria-hidden="true" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <footer className="close-foot">
              <span>{s.footer}</span>
              <a href="#top">
                {s.ui.backToTop} <ArrowUp aria-hidden="true" />
              </a>
            </footer>
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
    </>
  );
}

function PlanBlock({ node }: { node: PlanNode }) {
  return (
    <div className="node">
      <h4>{node.name}</h4>
      <p>{node.text}</p>
      {node.dim && <p className="node-dim">{node.dim}</p>}
    </div>
  );
}

function FlowNode({ node, arrow }: { node: PlanNode; arrow: boolean }) {
  return (
    <>
      {arrow && (
        <div className="arrow">
          <FlowArrow />
        </div>
      )}
      <PlanBlock node={node} />
    </>
  );
}
