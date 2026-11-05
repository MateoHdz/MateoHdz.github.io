import { ArrowDownToLine, ArrowUpRight, Languages, Mail, MessageCircle } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import type { Site } from "@/content/site";
import { GithubMark } from "./BrandIcons";
import { SectionNav } from "./SectionNav";
import { WorkIndex } from "./WorkIndex";

const delay = (i: number) => ({ "--i": i }) as CSSProperties;

// En pantallas angostas el correo se parte antes de la arroba, nunca dentro del dominio.
function breakBeforeAt(value: string) {
  const at = value.indexOf("@");
  if (at < 1) return value;
  return (
    <>
      {value.slice(0, at)}
      <wbr />
      {value.slice(at)}
    </>
  );
}

function Section({ id, title, children, wide = false }: { id: string; title: string; children: ReactNode; wide?: boolean }) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="scroll-mt-16 pt-24 first:pt-0">
      <h2 id={`${id}-titulo`} className="mb-6 text-2xl font-semibold tracking-[-0.02em]">
        {title}
      </h2>
      <div className={wide ? "" : "max-w-[64ch]"}>{children}</div>
    </section>
  );
}

export function Portfolio({ s }: { s: Site }) {
  const navItems = [
    { id: "trabajo", label: s.nav.work },
    { id: "como-trabajo", label: s.nav.process },
    { id: "experiencia", label: s.nav.experience },
    { id: "stack", label: s.nav.stack },
    { id: "contacto", label: s.nav.contact },
  ];
  const otherLang = s.lang === "es" ? "en" : "es";

  return (
    <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20 lg:px-16">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-10 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        {s.lang === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>

      <header className="pt-16 sm:pt-20 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:justify-between lg:py-20">
        <div>
          <h1 className="rise text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-5xl" style={delay(0)}>
            {s.name}
          </h1>
          <p className="rise mt-3 text-lg font-medium tracking-[-0.01em]" style={delay(1)}>
            {s.role}
          </p>
          <p className="rise mt-4 max-w-[37ch] leading-relaxed text-muted" style={delay(2)}>
            {s.intro}
          </p>

          <div className="rise mt-14 hidden lg:block" style={delay(3)}>
            <SectionNav items={navItems} label={s.lang === "es" ? "Secciones" : "Sections"} />
          </div>
        </div>

        <div className="rise mt-8 lg:mt-0" style={delay(4)}>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={s.actions.cvHref}
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-paper no-underline transition-[background-color,transform] duration-200 hover:bg-ink/85 active:scale-[0.97]"
            >
              <ArrowDownToLine className="size-4" aria-hidden="true" />
              {s.actions.cv}
            </a>
            <a
              href={`mailto:${s.contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold no-underline ring-1 ring-line transition-[background-color,transform] duration-200 ring-inset hover:bg-hover active:scale-[0.97]"
            >
              <Mail className="size-4" aria-hidden="true" />
              {s.actions.email}
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
            <li>
              <a href={s.contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted no-underline transition-colors hover:text-ink">
                <GithubMark className="size-4" />
                GitHub
              </a>
            </li>
            <li>
              <a href={s.contact.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted no-underline transition-colors hover:text-ink">
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={s.actions.otherLangHref}
                hrefLang={otherLang}
                lang={otherLang}
                aria-label={s.actions.otherLangLabel}
                className="inline-flex items-center gap-1.5 text-muted no-underline transition-colors hover:text-ink"
              >
                <Languages className="size-4" aria-hidden="true" />
                {s.actions.otherLang}
              </a>
            </li>
          </ul>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <span className="inline-flex size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {s.availability}
          </p>
        </div>
      </header>

      <main id="contenido" className="pb-24 pt-20 lg:py-20">
        <section aria-label={s.lang === "es" ? "Sobre mí" : "About me"} className="max-w-[64ch] space-y-4 text-[1.0625rem] leading-relaxed">
          {s.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>

        <Section id="trabajo" title={s.workTitle} wide>
          <p className="-mt-3 mb-5 text-sm text-muted">{s.workHint}</p>
          <WorkIndex items={s.work} labels={s.labels} />
        </Section>

        <Section id="como-trabajo" title={s.processTitle}>
          <ol className="divide-y divide-line border-y border-line">
            {s.process.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[1.75rem_1fr] gap-x-3 py-5">
                <span className="text-sm text-muted tabular-nums">{i + 1}.</span>
                <div>
                  <h3 className="font-semibold tracking-[-0.01em]">{step.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 leading-relaxed">{s.ai}</p>
        </Section>

        <Section id="experiencia" title={s.experienceTitle}>
          <ol className="space-y-6">
            {s.experience.map((job) => (
              <li key={`${job.company}-${job.dates}`} className="grid gap-x-6 gap-y-1 sm:grid-cols-[10rem_1fr]">
                <span className="pt-0.5 text-sm text-muted tabular-nums">{job.dates}</span>
                <div>
                  <h3 className="font-semibold tracking-[-0.01em]">
                    {job.role}
                    <span className="block font-normal text-muted">{job.company}</span>
                  </h3>
                  <p className="mt-1 leading-relaxed text-muted">{job.line}</p>
                </div>
              </li>
            ))}
          </ol>
          <a
            href={s.actions.cvHref}
            download
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline decoration-accent/40 hover:decoration-accent"
          >
            {s.fullCv}
            <ArrowDownToLine className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </Section>

        <Section id="stack" title={s.stackTitle}>
          <dl className="divide-y divide-line border-y border-line">
            {s.stack.map((g) => (
              <div key={g.group} className="grid gap-x-6 gap-y-1 py-3.5 sm:grid-cols-[10rem_1fr]">
                <dt className="text-sm text-muted">{g.group}</dt>
                <dd className="leading-relaxed">{g.items}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-sm text-muted">{s.languagesLine}</p>
        </Section>

        <Section id="contacto" title={s.contactTitle}>
          <p className="leading-relaxed text-muted">{s.contactText}</p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            <ContactRow href={`mailto:${s.contact.email}`} icon={<Mail className="size-4" aria-hidden="true" />} label={s.contactLabels.email} value={s.contact.email} />
            <ContactRow href={s.contact.whatsapp} external icon={<MessageCircle className="size-4" aria-hidden="true" />} label={s.contactLabels.whatsapp} value={s.contact.phone} />
            <ContactRow href={s.contact.github} external icon={<GithubMark className="size-4" />} label={s.contactLabels.github} value="github.com/MateoHdz" />
            <ContactRow href={s.contact.cvEs} download icon={<ArrowDownToLine className="size-4" aria-hidden="true" />} label="Español" value={s.contactLabels.cvEs} />
            <ContactRow href={s.contact.cvEn} download icon={<ArrowDownToLine className="size-4" aria-hidden="true" />} label="English" value={s.contactLabels.cvEn} />
          </ul>
        </Section>

        <footer className="mt-24 text-sm text-muted">
          <p>
            {s.footer}{" "}
            <a href="https://github.com/MateoHdz" target="_blank" rel="noreferrer" className="underline decoration-line hover:text-ink hover:decoration-ink">
              GitHub
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}

function ContactRow({
  href,
  icon,
  label,
  value,
  external = false,
  download = false,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  external?: boolean;
  download?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        {...(download ? { download: true } : {})}
        className="group -mx-4 flex items-center gap-4 rounded-xl px-4 py-4 no-underline transition-colors duration-200 hover:bg-hover"
      >
        <span className="text-muted transition-colors group-hover:text-accent">{icon}</span>
        <span className="hidden w-20 shrink-0 text-sm text-muted sm:block">{label}</span>
        <span className="min-w-0 flex-1 font-medium [overflow-wrap:break-word]">{breakBeforeAt(value)}</span>
        <ArrowUpRight className="size-4 shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden="true" />
      </a>
    </li>
  );
}
