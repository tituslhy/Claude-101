# Claude 101

An independent intelligence dossier on Anthropic — the models, the money, the market, and the verdict. Built with React, Vite, and Recharts from the design and content in `design_handoff_claude_101/`.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Deployed on Vercel. `vercel.json` configures the SPA rewrite so all routes (`/origin`, `/models`, `/market`, `/verdict`, `/components`) serve `index.html` and are handled by `react-router-dom`.
