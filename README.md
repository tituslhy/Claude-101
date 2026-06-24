# Claude 101

Welcome to **Claude 101**, the unofficial intelligence dossier for anyone who wants to understand Anthropic without feeling buried in analyst slides.

This repository is a storytelling dashboard built with **React**, **Vite**, and **Recharts**, designed to turn Anthropic’s history, product strategy, market position, and competitive verdict into a visual narrative.

## Why this exists

Because if AI is going to change the world, we should at least have a readable map of who is building what. Claude 101 is equal parts research briefing and design showcase — a polished, interactive guide to Anthropic’s model family, governance, funding, and where it sits in the AI market.

## What you get

- A multi-page React app with sections for **Origin**, **Models**, **Market**, **Components**, and **Verdict**
- Data-driven illustrations and charts that explain the story without requiring MBA-level decoding
- Design assets and source content in `design_handoff_claude_101/`
- A lightweight Vite setup for fast local development

## Features

- **React + Vite**: fast build, modern developer experience
- **Recharts-based visuals**: clean charts that look good and tell a story
- **SPA routing**: browser-friendly navigation across sections
- **Design system-ready**: ready for handoff from visual concept to code

## Installation

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal.

## Build

```bash
npm run build
npm run preview
```

## Deployment

This app is set up for deployment on **Vercel**. The `vercel.json` file configures SPA routing so every route like `/origin`, `/models`, `/market`, `/verdict`, and `/components` resolves to `index.html` and is handled by `react-router-dom`.

## File structure highlights

- `src/` — app source code
- `src/pages/` — page-level views
- `src/viz/` — data visualization components
- `src/components/` — reusable UI pieces
- `design_handoff_claude_101/` — design deliverables and reference content

## Note to curious humans

If you want to understand how Anthropic’s product story is designed, this repo is a nice blend of research, visual storytelling, and front-end craftsmanship. It’s not just a demo — it’s a mini dossier with personality.
