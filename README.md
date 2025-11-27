# Student Result App

This is a small React + Vite app to manage student results.

What's included

- Simple CRUD UI for students (list, add, edit, view details)
- A tiny JSON server script for local data `db.json`
- Production-ready build via Vite

Getting started (development)

1. Install dependencies

```cmd
npm install
```

2. Run the development server

```cmd
npm run dev
```

3. Run the JSON API server (separate terminal)

```cmd
npm run json
```

Production build

1. Build

```cmd
npm run build
```

2. Preview the production build locally

```cmd
npm run preview
```

Deployment notes

- This project uses Vite; you can deploy the `dist/` output to any static host (Netlify, Vercel, GitHub Pages, S3).
- If you want a Node server to serve the built files, use a simple static server (e.g. `serve` package) or an Express-based server.

Accessibility & production improvements

- Semantic markup and labels added for forms and tables.
- Meta tags updated in `index.html` for description and theme color.
- Added `.gitignore` and `preview` script for production preview.

If you'd like, I can create a Git commit and push these changes to your GitHub repo — tell me the repo clone URL and confirm push.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
