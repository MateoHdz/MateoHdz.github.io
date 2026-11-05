"use client";

import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import type { Site, WorkItem } from "@/content/site";

// Índice de todo el trabajo: cada fila se abre en su lugar con el detalle.
export function WorkIndex({ items, labels }: { items: WorkItem[]; labels: Site["labels"] }) {
  const [open, setOpen] = useState<Set<string>>(() => new Set());

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <ul className="border-b border-line">
      {items.map((item) => (
        <Row key={item.id} item={item} labels={labels} isOpen={open.has(item.id)} onToggle={() => toggle(item.id)} />
      ))}
    </ul>
  );
}

function Row({
  item,
  labels,
  isOpen,
  onToggle,
}: {
  item: WorkItem;
  labels: Site["labels"];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `trabajo-${item.id}`;
  const buttonId = `${panelId}-boton`;

  return (
    <li className="row border-t border-line" data-open={isOpen}>
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={`group -mx-4 grid w-[calc(100%+2rem)] cursor-pointer grid-cols-[1fr_auto] gap-x-5 rounded-xl px-4 py-5 text-left transition-colors duration-200 ${isOpen ? "" : "hover:bg-hover"}`}
        >
          <span className="block min-w-0">
            <span className="flex items-baseline justify-between gap-4">
              <span className="text-[1.0625rem] font-semibold tracking-[-0.01em]">{item.title}</span>
              <span className="shrink-0 text-sm text-muted tabular-nums">{item.period}</span>
            </span>
            <span className="mt-1 block text-sm text-muted [text-wrap:pretty]">
              {item.org} · {item.domain}
            </span>
            <span className="mt-2 block max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink/80 [text-wrap:pretty]">{item.summary}</span>
          </span>
          <span className="mt-0.5 flex size-6 items-center justify-center rounded-full text-muted transition-colors group-hover:text-ink">
            <Plus className="row-icon size-4" strokeWidth={1.75} aria-hidden="true" />
            <span className="sr-only">{isOpen ? labels.close : labels.open}</span>
          </span>
        </button>
      </h3>

      <div id={panelId} role="region" aria-labelledby={buttonId} className="row-panel" inert={!isOpen}>
        <div>
          <div className="row-content max-w-[62ch] space-y-5 pb-7 pt-1 text-[0.9375rem] leading-relaxed">
            <div style={{ "--i": 0 } as React.CSSProperties}>
              <p className="text-sm font-medium text-muted">{labels.context}</p>
              <p className="mt-1.5">{item.context}</p>
            </div>
            <div style={{ "--i": 1 } as React.CSSProperties}>
              <p className="text-sm font-medium text-muted">{labels.did}</p>
              <ul className="mt-2 space-y-2">
                {item.did.map((line) => (
                  <li key={line} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-muted">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ "--i": 2 } as React.CSSProperties}>
              <p className="text-sm font-medium text-muted">{labels.stack}</p>
              <p className="mt-1.5">{item.stack.join(" · ")}</p>
            </div>
            {(item.link || item.status) && (
              <div style={{ "--i": 3 } as React.CSSProperties} className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-1 font-medium text-accent underline decoration-accent/40 hover:decoration-accent"
                  >
                    {item.link.label}
                    <ArrowUpRight
                      className="size-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                )}
                {item.status && <span className="text-muted">{item.status}</span>}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
