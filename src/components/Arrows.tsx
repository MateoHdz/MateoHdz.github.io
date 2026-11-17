const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "square",
  vectorEffect: "non-scaling-stroke",
} as const;

/** Flecha entre dos bloques del plano: la línea se estira, la punta conserva su tamaño. */
export function FlowArrow() {
  return (
    <svg aria-hidden="true" {...stroke}>
      <line x1="0" y1="50%" x2="100%" y2="50%" />
      <svg x="100%" y="50%" overflow="visible">
        <path d="M-6-4.5 0 0l-6 4.5" />
      </svg>
    </svg>
  );
}

/** Flecha corta entre los pasos de una cadena. */
export function StepArrow() {
  return (
    <svg viewBox="0 0 24 10" aria-hidden="true" {...stroke}>
      <path d="M4 5h15M15 1.5 19.5 5 15 8.5" />
    </svg>
  );
}
