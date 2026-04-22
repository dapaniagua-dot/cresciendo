# Cresciendo — Centro Interdisciplinario de Salud

Sitio web de Cresciendo (landing page estática en React + Vite).

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí http://localhost:5173 en el navegador.

## Build de producción

```bash
npm run build
```

Los archivos estáticos quedan en `dist/`.

## Deploy en Cloudflare Pages

### Opción A — Con Git (recomendada)

1. Subí este repo a GitHub/GitLab.
2. En el dashboard de Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**.
3. Configuración de build:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Cada `git push` dispara un deploy automático.

### Opción B — Desde la terminal con Wrangler

```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist --project-name=cresciendo
```

## Estructura

- `src/pages/Home.jsx` — página principal que monta todas las secciones
- `src/components/` — secciones de la landing (Hero, Historia, Especialidades, Talleres, Sumate, Ubicacion, Footer, Navbar)
- `src/components/ui/` — componentes shadcn/ui
- `public/logo.png` — logo del sitio
- `public/_redirects` — fallback SPA para Cloudflare Pages
