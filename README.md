# Portafolio · Mateo Hernández

Sitio personal de Mateo Hernández, desarrollador full stack en Cali, Colombia. En español (`/`) y en inglés (`/en/`).

## Stack

Next.js 16 (App Router, exportación estática) · React 19 · TypeScript · Tailwind CSS 4 · lucide-react.

## Contenido

Todo el texto vive en dos lugares:

- `content/cv/es.json` y `content/cv/en.json`: hoja de vida (experiencia, habilidades, educación, idiomas) que usa `npm run cv`.
- `src/content/site.ts`: todos los textos del sitio en ES y EN, incluidos proyectos, experiencia y stack (versiones cortas de la hoja de vida). Si cambias la hoja de vida, revisa también este archivo.

En `site.ts` también están `REVISION` (mes de la última actualización: cierra la barra del empleo actual y aparece en el cajetín) y `TIMELINE` (años de la línea de tiempo). Al empezar un año nuevo o cambiar de empleo hay que actualizar ambos.

El diseño está descrito en `DESIGN.md`; los colores y medidas viven en `src/app/globals.css`.

## Imágenes

- `src/assets/mateo-foto.webp` y `src/assets/mateo-avatar.webp`: retrato real y versión ilustrada, con fondo transparente y el mismo encuadre (1024×1280). Si se cambia uno, el otro debe conservar el encuadre para que el cambio de vista del inicio coincida.
- `public/og.jpg`: imagen que aparece al compartir el enlace (1200×630).

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
