# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos

```bash
npm install
npm run dev       # servidor de desarrollo Vite (alias: npm start)
npm run build     # build de producción → ./build
npm run preview   # sirve el build ya generado
```

No hay linter, formateador ni tests configurados; si se añaden tests hay que instalar y configurar un runner (Vitest) desde cero.

Las dependencias están en cero vulnerabilidades (`npm audit`). El árbol se mantiene deliberadamente mínimo: se eliminaron `@testing-library/*`, `web-vitals` y `react-router-dom` por no usarse. Antes de añadir una dependencia, verifica que realmente se importe.

## Arquitectura

Portafolio personal de Cristian Capa: SPA de React 18 + Vite + Tailwind, **una sola página** con secciones ancladas.

- `src/index.jsx` es el entry point declarado en `index.html` (`<script type="module" src="/src/index.jsx">`). Monta con `createRoot` (React 18) e inicializa AOS globalmente aquí, antes del render.
- `src/App.jsx` solo renderiza `Dashboard`. **No hay router**: se eliminó `react-router-dom` porque la app es una sola pantalla, así que cualquier path sirve la misma landing. Si algún día hacen falta rutas reales, `react-router-dom@7` ya es compatible con la versión de React actual.
- `src/pages/Dashboard.jsx` compone en orden las secciones de la landing: `Inicio` → `Proyectos` → `Historia` → `Certificaciones` → `Contacto`. Cada "page" es en realidad una sección con un `id` usado como ancla, no una ruta.

### Navegación por anclas

`src/components/Navbar.jsx` mantiene el array `ids = ["inicio", "proyectos", "sobremi", "contacto"]`, que debe coincidir con los `id` reales de las secciones (ojo: la sección `Historia` usa `id="sobremi"`, y `Contacto` es un `<footer id="contacto">`). El resaltado activo usa `IntersectionObserver` con `rootMargin: "-45% 0px -50% 0px"`. `Certificaciones` tiene `id="certificaciones"` pero no aparece en la navbar.

Al añadir/renombrar una sección hay que actualizar: el `id` de la sección, el array `ids`, la clave `nav.<id>` en ambos JSON de i18n y, si cambia el alto de la navbar (72px), el `scroll-padding-top` de `src/index.css`.

### i18n (ES/EN)

`src/i18n.js` configura i18next con detección **solo por localStorage** (clave `lang`) y `fallbackLng: "en"` — sin preferencia guardada, la primera visita se muestra en inglés. Un listener de `languageChanged` sincroniza `<html lang>`.

Todo texto visible vive en `src/messages/es.json` y `src/messages/en.json`, con la misma estructura de claves en ambos; **cualquier clave nueva debe añadirse a los dos archivos**. Los párrafos con énfasis usan `<Trans>` con componentes inline (p. ej. `components={{ hl: <span className="text-content" /> }}` en `Inicio.jsx`), así que el JSON contiene etiquetas `<hl>…</hl>`.

Patrón recurrente en las secciones: los datos estructurales (arrays de proyectos, skills, enlaces, iconos de `react-icons`) se declaran como constantes al inicio del archivo `.jsx` con una `key`, y los textos se resuelven con `t(\`projects.${key}.title\`)`. Añadir un proyecto = añadir entrada al array *y* su bloque de claves en ambos JSON.

### Estilos

Tailwind con tema oscuro definido en `tailwind.config.js`. Usar siempre los tokens semánticos en vez de colores literales: `bg`, `surface`, `surface-2`, `line`, `content`, `muted`, `accent` / `accent-soft` (dorado `#e0b341`), y `max-w-content` (1100px). Tres familias tipográficas: `font-display` (Space Grotesk, títulos), `font-sans` (Inter, cuerpo), `font-mono` (JetBrains Mono, labels/numeración de secciones). Las fuentes se cargan desde Google Fonts en `index.html`, no vía npm.

`src/index.css` aporta las clases utilitarias propias `hero-glow` y `grid-bg`, el scrollbar personalizado y un bloque `prefers-reduced-motion`.

Animaciones de entrada con AOS: atributos `data-aos="fade-up"` y `data-aos-delay` en el markup (config global `duration: 600, once: true` en `index.jsx`). Ojo al inspeccionar o automatizar la página: todo `[data-aos]` arranca en `opacity: 0` y solo se revela cuando AOS añade `.aos-animate` al recibir un **evento de scroll real**; un `window.scrollTo()` programático no lo dispara y da la falsa impresión de que el contenido no renderiza.

### Assets

Imágenes de proyectos en `src/images/` importadas como módulos (las procesa Vite y quedan con hash). Archivos servidos tal cual — `CV_Cristian_Capa.pdf`, favicons, `manifest.json`, `robots.txt` — van en `public/` y se referencian con ruta absoluta (`/CV_Cristian_Capa.pdf`).

`build/` es la salida de `vite build` (configurada en `vite.config.mjs`, no el `dist/` por defecto) y está ignorada por git.
