# Portafolio · Mateo Hernández

Sitio personal de Mateo Hernández, desarrollador full stack en Cali, Colombia. En español (`/`) y en inglés (`/en/`).

## Stack

Next.js 16 (App Router, exportación estática) · React 19 · TypeScript · Tailwind CSS 4 · lucide-react.

## Contenido

Todo el texto vive en dos lugares:

- `content/cv/es.json` y `content/cv/en.json`: hoja de vida (experiencia, habilidades, educación, idiomas). El sitio toma de aquí la experiencia y el stack.
- `src/content/site.ts`: textos del sitio y el detalle de cada proyecto.

## Comandos

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # sitio estático en out/
npm run cv      # regenera la hoja de vida en PDF y DOCX (ES/EN) en public/cv/
```

`npm run cv` usa Chrome o Edge instalado para imprimir el PDF (variable `CHROME_PATH` si está en otra ruta). La hoja de vida es de una sola columna, sin tablas ni imágenes, para que la lean bien los filtros ATS.

## Publicación

Cada `push` a `main` compila el sitio y lo publica en GitHub Pages con `.github/workflows/deploy.yml`.
