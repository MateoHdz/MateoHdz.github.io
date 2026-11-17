"use client";

import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Site } from "@/content/site";

export function Header({ s }: { s: Site }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const other = s.ui.otherLang;

  // Marca en el menú la sección que cruza el centro de la pantalla.
  useEffect(() => {
    const sections = s.nav.map((n) => document.getElementById(n.id)).filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) setActive(id);
          else setActive((current) => (current === id ? "" : current));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [s.nav]);

  // El menú móvil se cierra con Escape o al pasar a pantalla ancha.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const wide = window.matchMedia("(min-width: 64rem)");
    const onWide = () => wide.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      window.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell">
        <a href="#top" aria-label={s.ui.home} className="mark">
          <span className="mark-box" aria-hidden="true">
            MH
          </span>
          <span className="max-sm:hidden">{s.name}</span>
        </a>

        <nav aria-label={s.ui.mainNav} className="hidden items-center gap-8 lg:flex">
          {s.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link" aria-current={active === item.id ? "true" : undefined}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={other.href}
            hrefLang={other.short.toLowerCase()}
            lang={other.short.toLowerCase()}
            aria-label={other.label}
            title={other.label}
            className="lang"
          >
            {other.short}
          </a>
          <a href="#contacto" className="btn btn-line btn-sm">
            {s.ui.contact} <ArrowUpRight className="nudge-out" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="icon-btn lg:hidden"
            aria-label={open ? s.ui.closeMenu : s.ui.openMenu}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav id="menu-movil" aria-label={s.ui.mobileNav} hidden={!open} className="mobile-nav lg:hidden">
        {s.nav.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
            {item.label}
            <ArrowRight className="size-4 text-ink-3" aria-hidden="true" />
          </a>
        ))}
      </nav>
    </header>
  );
}
