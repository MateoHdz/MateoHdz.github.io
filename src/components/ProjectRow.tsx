"use client";

import { ArrowUpRight, Lock, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import type { Project, Site } from "@/content/site";
import { StepArrow } from "./Arrows";

type Props = {
  p: Project;
  labels: Site["work"]["labels"];
  ui: Pick<Site["ui"], "showDetail" | "hideDetail">;
};

/** Fila del registro de proyectos. El detalle siempre está en el HTML; cerrado solo queda oculto. */
export function ProjectRow({ p, labels, ui }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = `detalle-${p.id}`;
  const rowId = `proyecto-${p.id}`;

  // Las notas del inicio enlazan a su proyecto: al llegar por ese enlace, la fila se abre.
  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === `#${rowId}`) setOpen(true);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [rowId]);

  return (
    <article id={rowId} className="reg-row" data-open={open}>
      <div className="reg-cols reg-head">
        <span className="reg-year">{p.year}</span>
        <div>
          <h4 className="reg-title">{p.title}</h4>
          <p className="label reg-client">{p.client}</p>
        </div>
        <p className="reg-sum">{p.summary}</p>
        <button
          type="button"
          className="reg-toggle"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? ui.hideDetail : ui.showDetail}: ${p.title}`}
          onClick={() => setOpen((v) => !v)}
        >
          <Plus aria-hidden="true" />
        </button>
      </div>

      <div className="reg-panel" id={panelId}>
        <div>
          <div className="reg-cols reg-detail">
            <span className="reg-spacer" aria-hidden="true" />
            <div>
              <h5 className="label">{labels.context}</h5>
              <p>{p.context}</p>

              {p.flow && (
                <>
                  <h5 className="label mt-6">{p.flow.label}</h5>
                  <ol className="chain">
                    {p.flow.steps.map((step, i) => (
                      <li key={step}>
                        {i > 0 && <StepArrow />}
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </>
              )}

              <dl className="spec">
                <div>
                  <dt className="label">{labels.role}</dt>
                  <dd>{p.role}</dd>
                </div>
                {p.status && (
                  <div>
                    <dt className="label">{labels.status}</dt>
                    <dd>{p.status}</dd>
                  </div>
                )}
                <div>
                  <dt className="label">{labels.stack}</dt>
                  <dd>{p.stack.join(" · ")}</dd>
                </div>
                <div>
                  <dt className="label">{labels.code}</dt>
                  <dd>
                    {p.code.kind === "public" ? (
                      <a href={p.code.href} target="_blank" rel="noreferrer" className="code-link">
                        {p.code.label}
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="code-private">
                        <Lock aria-hidden="true" />
                        {p.code.label}
                      </span>
                    )}
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h5 className="label">{labels.done}</h5>
              <ul className="done">
                {p.done.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <span className="reg-spacer" aria-hidden="true" />
          </div>
        </div>
      </div>
    </article>
  );
}
