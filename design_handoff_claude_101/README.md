# Handoff: Claude 101 — Practitioner's Intelligence Dossier

## ⚠️ Read this first — two documents, read BOTH

You are building the final **Claude 101** web app. There are **three source documents** and you must read **all three** before writing any code:

1. **The design reference** — `Claude 101.dc.html` in this folder. This defines the *look, layout, type system, color system, components, dark mode, and the exact placement/sizing of every data-visualization zone*. It is the visual source of truth.
2. **The Claude 101 report (Markdown)** — `claude_101_content.md`. This is the *content source of truth*: the full narrative, every chapter, every statistic, every table, and the data behind every chart.
3. **The Claude visualization specifications (Markdown)** — `claude_101_viz_spec.md`. This defines the *specifications of every visualization that is to appear in the web application*. All the visualizations specified here must appear in the final application.

**The design shows the skeleton and the styling; the markdown report carries the full body of content.** Your job is to merge them: build out *all eleven chapters* across the five sections using the report's content, styled exactly per the design reference, and **build the real data visualizations** that the design currently shows as labelled placeholders.

Do not ship only what's visible in the HTML — the HTML demonstrates the **Start** page and **one fully-built content page (Origin Story, 01–02)** as the pattern. Every other section (`03–05 Models & Products`, `06–08 Business & Market`, `09–11 Verdict`) must be built out to the same standard using the report.

---

## Overview

Claude 101 is a premium, light-mode-first (with a warm dark mode) **practitioner's intelligence report** about Anthropic — an editorial "dossier" covering the company's origin, models & products, business & market, and a final verdict. It is a reference document, not a marketing page: dense, well-organised, FT-not-Bloomberg in register. Structurally it mirrors `https://tituslhy.github.io/chatgpt-101/` (same 5-tab nav, same chapter/section pattern) but is a deliberately distinct, sharper design.

## About the Design Files

The files in this bundle are a **design reference created in HTML** — a streaming prototype showing the intended look and behavior. It is **not production code to copy verbatim**. `Claude 101.dc.html` is authored as a "Design Component" and relies on `support.js` (a bespoke runtime) plus React/Babel loaded at runtime; **do not** carry that runtime into production.

Your task is to **recreate this design in a real codebase**. If the user already has an app/framework, use its established patterns (React/Next, Vue, Svelte, etc.). If there is no codebase yet, choose the most appropriate modern stack — a recommended default is **React + Vite + plain CSS (or CSS Modules) + a real charting library** (e.g. Recharts, Chart.js, or D3 for the bespoke diagrams). Open `Claude 101.dc.html` in a browser to see it run while you work.

## Fidelity

**High-fidelity.** Colors, typography, spacing, dark-mode tokens, and component anatomy are final — reproduce them pixel-faithfully. The one deliberately *un*built part is the data-viz: those are intentional, realistically-sized **placeholder zones** that you must replace with real, interactive charts/diagrams (full inventory below).

---

## Information Architecture

Top sticky nav, full width. Left: "Claude 101" wordmark (serif "Claude" + italic coral "101"). Right: five section tabs + a "Components" reference link + a light/dark theme toggle pill.

The five tabs (route targets):
1. `00 Start` — the landing/overview page (built in the reference)
2. `01–02 Origin` — Origin Story (built in full in the reference, use as the template)
3. `03–05 Models` — Models & Products (build from report)
4. `06–08 Market` — Business & Market (build from report)
5. `09–11 Verdict` — The Verdict (build from report)

Plus a **Components** page: a reference sheet showing all 8 reusable components (already built in the reference — keep it or drop it from the production app at the user's discretion; it's primarily a spec for you).

- Active tab: coral text `#D85A30` + 2px coral underline. Inactive: muted `--faint`, transparent underline.
- The reference uses in-app state to switch "pages"; in production these should be **real routes** (`/`, `/origin`, `/models`, `/market`, `/verdict`).

---

## Design Tokens

Two themes driven by CSS custom properties on `:root` / `:root[data-theme="dark"]`. The coral accent is constant across both themes.

### Constant
- **Coral (primary accent)**: `#D85A30` — active nav, key numbers, quote borders, section/figure labels, chapter numbers, the small square accent. Use it sparingly; it earns its appearances.

### Light theme (default — "home" / cream)
| Token | Value | Role |
|---|---|---|
| `--bg` | `#FBFAF7` | page background (warm white) |
| `--cell` | `#FBFAF7` | stat-grid cells / verdict ground |
| `--surface` | `#F4F1EA` | cards, highlight box, table header, viz ground |
| `--ink` | `#14130F` | primary text |
| `--ink2` | `#3a3935` | verdict body text |
| `--muted` | `#5F5E5A` | secondary text |
| `--faint` | `#888780` | labels / captions |
| `--fill` | `#FAECE7` | analogy box, "winner"/highlighted table cells |
| `--fillInk` | `#712B13` | text on `--fill` |
| `--fillLabel` | `#993C1D` | tiny-caps labels (mono) |
| `--ghost` | `#F1ECE3` | oversized ghost numerals behind headers |
| `--dashed` | `#D3C8BC` | dashed border on viz placeholders |
| `--line` | `rgba(0,0,0,0.12)` | hairline borders |
| `--line2` | `rgba(0,0,0,0.08)` | inner table row borders |
| `--lineStrong` | `rgba(0,0,0,0.15)` | verdict-box border |
| `--navbg` | `rgba(251,250,247,0.82)` | nav background (blurred) |

### Dark theme ("away" — warm espresso, NOT pitch black)
| Token | Value |
|---|---|
| `--bg` | `#191512` |
| `--cell` | `#221C17` |
| `--surface` | `#241E18` |
| `--ink` | `#F3ECE2` |
| `--ink2` | `#D9D1C6` |
| `--muted` | `#A89F93` |
| `--faint` | `#8C8377` |
| `--fill` | `rgba(216,90,48,0.16)` |
| `--fillInk` | `#F1C4AE` |
| `--fillLabel` | `#E2966E` |
| `--ghost` | `#241D17` |
| `--dashed` | `#4B4138` |
| `--line` | `rgba(255,255,255,0.14)` |
| `--line2` | `rgba(255,255,255,0.08)` |
| `--lineStrong` | `rgba(255,255,255,0.22)` |
| `--navbg` | `rgba(25,21,18,0.82)` |

Theme is toggled by setting `data-theme="dark"` / `"light"` on the document element. Default is light. Charts/diagrams you build must also read these tokens so they re-theme cleanly.

### Typography
Three families (Google Fonts):
- **Instrument Serif** (display) — headlines, chapter numbers, stat numbers, pull-quotes, analogy body. Weight 400; roman + italic. Italic + coral is the signature accent treatment.
- **Inter** (body) — weights 400 / 500 / 600. Paragraphs, descriptions, table cells.
- **JetBrains Mono** (labels) — uppercase, letter-spaced. Metadata, figure captions, tiny-caps tags, nav tabs, footer credit. This mono is what gives the "engineer's field manual" register.

Display headlines use a **horizontal stretch**: `display:inline-block; transform:scaleX(1.16); transform-origin:left;` (applied via a `.stretch` class). Reproduce this — it's what makes the big serif read wide and confident rather than narrow. Apply to: the hero H1, every page H2, the contents chapter titles, and the large opening quote.

Type scale (key sizes):
- Hero H1: `clamp(72px, 12vw, 150px)`, line-height 0.92, letter-spacing -0.02em
- Page H2: `clamp(48px, 7vw, 86px)` (80px max on the Components page), line-height ~0.98
- Section-header subtitle: 17px Inter, line-height 1.6, `--muted`
- Body paragraph: 17px Inter, line-height 1.75
- Stat / counter numbers: `clamp(40px, 5vw, 62px)` (hero counters) / 42px (in-content stat grid) Instrument Serif
- Pull-quote: 27px Instrument Serif italic; opening hero quote `clamp(24px, 3.2vw, 38px)`
- Analogy body: 21px Instrument Serif
- Mono labels / figure captions: 11–12px, letter-spacing 0.10–0.14em, uppercase
- Chapter number (contents): 34px; section-divider number: 30px

---

## Components (the 8 reusable blocks)

All are demonstrated on the **Components** reference page and used in context on **Origin Story**. Reproduce each exactly; they recur on every content page.

1. **Analogy box** — `--fill` background, radius 4px, no border. Mono tiny-caps tag "◆ Analogy" in `--fillLabel`; body in **Instrument Serif 21px** in `--fillInk`.
2. **Stat grid (3–4 cards)** — a grid with 1px gaps over a `--line` background to create hairline dividers; cells `--cell`. Large Instrument Serif coral value; mono uppercase label in `--faint` below. Radius 4px, clipped.
3. **Highlight / insight box** — `--surface` background, radius 4px. Leading 18×18px coral square (radius 4px). Title 600 weight `--ink` (often prefixed 💡); body 13–14px `--muted`.
4. **Titus pull-quote** — left border only, 2–3px coral, no fill. Body **Instrument Serif italic** (22–27px) in `--ink`; attribution "— TITUS LIM · 2026" in mono, `--fillLabel`, 12px.
5. **Data table** — outer 1px `--line` border, radius 4px, clipped. Header row `--surface`, mono uppercase 11px. Body rows 14px Inter, 1px `--line2` top borders, last row none. Cell padding ~12–13px×16px. "Winner"/highlight cells use `--fill` ground + `--fillInk` text.
6. **Verdict / call-out box** — 1px `--lineStrong` border, radius 4px, `--bg` ground. Mono tiny-caps coral tag (e.g. "💡 The honest take"); body 16px `--ink2`.
7. **Section divider** — large Instrument Serif coral number + serif title, baseline-aligned, with a hairline bottom border. Generous top margin.
8. **Visualization placeholder zone** — `--surface` ground, `1.5px dashed --dashed` border, radius 4px. Mono uppercase label `[ VIZ · … ]` in `--fillLabel` + a one-line description in `--faint`. **These are the slots you replace with real charts.**

Other signature elements to reproduce:
- **Reading-progress spine** — a fixed 3px coral bar at the very top tracking scroll position.
- **Fact ticker** — an infinite horizontal marquee of stats below the hero (mono, `--muted`), duplicated for seamless loop.
- **Animated count-up** — the four hero stats ($965B, 245M, $47B, 13%) count up from 0 on load with an ease-out cubic over ~1.4s.
- **Oversized ghost numerals** — `--ghost`-colored chapter numbers (e.g. `01`) absolutely positioned behind each content-page header.
- **Drop cap** — the Origin Story lead paragraph opens with a large coral Instrument Serif initial.
- **Contents index** — the Start page lists the four parts as large magazine-style index rows (not boxed cards) with a hover coral-fill sweep and a sliding arrow.

---

## Visualization inventory — BUILD ALL OF THESE

The design ships each of these as a sized, labelled placeholder. Replace every one with a real, theme-aware, ideally interactive visualization. Pull the underlying numbers from the **Claude 101 markdown report**. Sizes below are the placeholder heights to match.

### Start (00)
- **Animated stat counters** — full width, ~80px. Already implemented as count-ups in the reference; keep/port. $965B valuation · 245M monthly users · $47B revenue run rate · 13% paid conversion.
- **The Claude Stack diagram** — full width, ~200px. 3-step horizontal flow: Claude Chat → Claude Design → Claude Code, sub-labels Think / Visualize / Ship, coral arrows.

### Origin Story (01–02)
- **Anthropic founding timeline** — full width, ~180px. Horizontal timeline 2021 → 2023 Claude 1 → 2024 Claude 3 → 2025 Claude 4 → 2026 Mythos/Fable; coral dots + labels.
- **Funding comparison bar chart** — full width, ~220px. Horizontal bars: Amazon $4B+ cash, Google $10B+ cash, SpaceX $15B/yr compute. Coral bars.
- **LTBT governance diagram** — full width, ~200px. Founders (control) ↔ LTBT Board (veto) / Amazon (non-voting) / Google (non-voting, capped 15%). Point: money ≠ control.

### Models & Products (03–05)
- **Model family hierarchy** — full width, ~240px. Tiers Haiku → Sonnet → Opus → Fable → Mythos, each with price/icon/use-case; coral accent on the Claude Code link.
- **SWE-bench Pro benchmark chart** — full width, ~260px. Horizontal bars: Fable 5 80.3%, Opus 4.8 69.2%, GPT-5.5 58.6%, MiniMax M3 59%, Kimi K2.6 58.6%, GLM-5.1 58.4%. Coral for Claude, grey for competitors.
- **MCP architecture diagram** — full width, ~200px. Agent → MCP layer (highlighted) → tool icons; bidirectional arrows; "universal socket" concept.
- **Claude product ecosystem map** — full width, ~200px. All surfaces (Claude.ai, Code, Design, Chrome, Cowork, API, Projects, MCP) grouped by mode: Think / Build / Design / Automate / Integrate.

### Business & Market (06–08)
- **Revenue growth chart** — full width, ~240px. Line: ~$1B (2023) → ~$10B (2025) → $47B annualised (2026).
- **SpaceX deal timeline** — full width, ~160px. May 6 compute deal (220K GPUs) → May 7 token limits doubled → Jun 9 Fable 5 launch → Jun 12 Fable recalled → Jun 16 SpaceX acquires Cursor.
- **AI market-share donut** — ~300×260px. ChatGPT 46.4% · Gemini 27.7% · Claude 10.3% · Others ~15.6%. Coral = Claude.
- **Distillation attack infographic** — full width, ~180px. 3 labs → 24,000 fake accounts → 16M exchanges (MiniMax ~13M) targeting tool-use/coding/reasoning.
- **Compute infrastructure map** — full width, ~200px. AWS Trainium + Google TPUs + SpaceX Colossus (220K GPUs) + Azure + Fluidstack → Anthropic.

### Verdict (09–11)
- **Feature comparison table (interactive)** — full width, ~600px. Perplexity vs Gemini vs Cursor vs ChatGPT vs Claude; colour-coded score circles, category filter tabs, total row. Most complex viz.
- **Head-to-head scorecard (interactive)** — full width, ~400px. Each "101" doc scored on Content / Structure / Voice / Technical / Honesty / Completeness; category filter, score circles, totals.
- **Decision matrix** — full width, ~260px. 3 columns (Get Claude Pro / Get ChatGPT Plus / Get Both) × user-archetype rows; coral checkmarks.
- **Claude vs ChatGPT radar** — ~340×300px. 6 axes: Writing Quality, Coding, Voice Mode, Image Generation, MCP Ecosystem, Free Tier. Coral polygon = Claude, grey = ChatGPT.

> All numbers above are mirrored in the markdown report — treat the report as authoritative if anything differs.

---

## Interactions & Behavior
- **Nav**: clicking a tab routes to that section and scrolls to top; active state per tokens above. Wordmark → Start.
- **Theme toggle**: flips `data-theme`; persist the choice (localStorage) in production. Body background transitions ~0.3s.
- **Count-ups**: run on load and whenever the Start route mounts; ease-out cubic, ~1.4s; show final value if JS unavailable.
- **Reading-progress spine**: width = scrollY / scrollable height.
- **Fact ticker**: CSS marquee, ~38s linear infinite, content duplicated for a seamless loop.
- **Contents index rows / cards**: hover → `--fill` background sweep + arrow translateX.
- **Page footer nav** (content pages): "← Previous" / "Next →" links in mono coral.

## State / Routing
- Real routes per section (`/`, `/origin`, `/models`, `/market`, `/verdict`, optional `/components`).
- Theme state (light/dark), persisted.
- Per-viz interactive state (filter tabs, hovered segments) lives with each chart component.

## Out of scope (per the original brief)
- No mobile breakpoints required (desktop-first; you may add responsive behavior using the codebase's conventions).
- No login/auth/account flows.
- No photographic imagery; no hand-drawn decorative SVG beyond simple shapes.

## Assets
- Fonts: Instrument Serif, Inter, JetBrains Mono (Google Fonts).
- No image assets. Coral square / dots / arrows are simple CSS shapes.

## Files in this bundle
- `Claude 101.dc.html` — the design reference (open in a browser to view; contains all components, both themes, and every viz placeholder in context).
- `claude_101_content.md` - the exact content to be rendered in the web application
- `claude_101_viz_spec.md` - the visualization specifications for the web application
- `support.js` — runtime required only to *view* the reference locally. **Do not** port to production.
- `README.md` — this document.

**Plus (provided separately by the user): the Claude 101 report in Markdown — the full content source. Read it alongside this design before building.**
