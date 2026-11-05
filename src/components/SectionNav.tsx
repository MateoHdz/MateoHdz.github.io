"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

// Menú lateral: la línea de la sección visible crece y se oscurece.
export function SectionNav({ items, label }: { items: Item[]; label: string }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={label}>
      <ul className="space-y-1">
        {items.map((item) => {
          const isActive = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center gap-4 py-2 text-sm font-medium no-underline"
              >
                <span
                  aria-hidden="true"
                  className={`nav-line h-px ${
                    isActive ? "w-16 bg-accent" : "w-8 bg-muted/50 group-hover:w-12 group-hover:bg-ink"
                  }`}
                />
                <span className={isActive ? "text-ink" : "text-muted transition-colors group-hover:text-ink"}>
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
