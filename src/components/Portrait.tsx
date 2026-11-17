"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import avatar from "@/assets/mateo-avatar.webp";
import photo from "@/assets/mateo-foto.webp";

type Labels = { alt: string; group: string; photo: string; avatar: string };

/** Tecnologías que giran en el halo: solo las del stack. Decorativas; el stack completo está en su sección. */
const HALO = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "NestJS", "Firebase", "MySQL"];

/** Ángulos de los paneles que forman la banda del halo (cara exterior e interior). */
const PANELS = Array.from({ length: 30 }, (_, i) => i * 12);

/**
 * Halo en 3D sobre la cabeza. Se dibuja dos veces con el mismo giro: la mitad de atrás va detrás
 * del retrato (el pelo la tapa) y la mitad de adelante va encima.
 *
 * DESACTIVADO (2026-11-16): el dueño quiere guardarlo para más adelante. Para activarlo, quitar
 * el comentario de las dos líneas `<Halo side=... />` en `Portrait`. Los estilos siguen en
 * globals.css (bloque "Halo"). Se exporta solo para que no cuente como código sin usar.
 */
export function Halo({ side }: { side: "back" | "front" }) {
  return (
    <div className={`halo is-${side}`} aria-hidden="true">
      <div className="halo-ring">
        <i className="halo-edge" />
        <i className="halo-edge is-low" />
        {PANELS.map((a) => (
          <i key={`out-${a}`} className="halo-panel" style={{ "--a": `${a}deg` } as CSSProperties} />
        ))}
        {PANELS.map((a) => (
          <i key={`in-${a}`} className="halo-panel is-inner" style={{ "--a": `${a}deg` } as CSSProperties} />
        ))}
        {HALO.map((tech, i) => (
          <b key={tech} className="halo-word" style={{ "--a": `${(360 / HALO.length) * i}deg` } as CSSProperties}>
            {tech}
          </b>
        ))}
      </div>
    </div>
  );
}

/**
 * Retrato del inicio. La foto real es la vista por defecto; el selector cambia al retrato
 * ilustrado con una apertura circular que nace en la cara (funciona con ratón, teclado y en táctil).
 */
export function Portrait({ labels }: { labels: Labels }) {
  const [mode, setMode] = useState<"photo" | "avatar">("photo");

  return (
    <>
      <div className="view-frame" aria-hidden="true" />
      <div className="portrait" data-mode={mode}>
        {/* Halo desactivado: ver la nota sobre `Halo`. */}
        {/* <Halo side="back" /> */}
        <Image src={photo} alt={labels.alt} className="portrait-photo" loading="eager" fetchPriority="high" draggable={false} />
        <Image src={avatar} alt="" aria-hidden="true" className="portrait-alt" loading="eager" draggable={false} />
        {/* <Halo side="front" /> */}
      </div>
      <div className="view-toggle" role="group" aria-label={labels.group}>
        <button type="button" aria-pressed={mode === "photo"} onClick={() => setMode("photo")}>
          {labels.photo}
        </button>
        <button type="button" aria-pressed={mode === "avatar"} onClick={() => setMode("avatar")}>
          {labels.avatar}
        </button>
      </div>
    </>
  );
}
