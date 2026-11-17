"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyEmail({ email, label, copied }: { email: string; label: string; copied: string }) {
  const [done, setDone] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setDone(true);
      window.setTimeout(() => setDone(false), 2400);
    } catch {
      // Sin permiso para el portapapeles: se abre el correo directamente.
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button type="button" className="btn btn-ink-line" onClick={copy}>
      {done ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      <span aria-live="polite">{done ? copied : label}</span>
    </button>
  );
}
