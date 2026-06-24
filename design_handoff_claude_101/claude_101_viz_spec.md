# Claude 101 — Visualization Build Spec for Claude Code

Build all visualizations below as individual self-contained components.
Stack: React + Chart.js + Recharts where appropriate.
Style: white background, coral accent (#D85A30), clean minimal axes, no gridline clutter.
Each component exported as default, dropped into the relevant page section.

---

## VIZ-01: Animated Stat Counters (Start page)
Type: CSS/JS animated counter
4 stats, count up on page load over 1.5s:
- $965B — "Valuation, May 2026"
- 245M — "Monthly active users"
- $47B — "Revenue run rate"
- 13% — "Paid conversion rate"
Layout: 4 cards in a row. Large coral number, small muted label below.

---

## VIZ-02: The Claude Stack Diagram (Start page)
Type: SVG or CSS diagram
3-step horizontal flow with arrows:
Step 1: "Claude Chat" → subtitle: "Think"
Step 2: "Claude Design" → subtitle: "Visualize"
Step 3: "Claude Code" → subtitle: "Ship"
Coral arrows between steps. Each step in a rounded card.

---

## VIZ-03: Anthropic Founding Timeline (Origin Story)
Type: Horizontal timeline, Chart.js or custom SVG
Events (left to right):
- 2021: "Anthropic founded. 11 researchers leave OpenAI. $124M seed."
- Mar 2023: "Claude 1 launches. Nobody notices."
- Mar 2024: "Claude 3 Opus. Industry notices."
- Jun 2024: "Claude 3.5 Sonnet. 'Sonnet is a fake Opus' moment."
- Nov 2024: "MCP published. Protocol-level innovation."
- 2025: "Claude 4 family. Claude Code launches."
- Apr 2026: "Mythos Preview. Project Glasswing. 10,000 vulns found."
- Jun 2026: "Fable 5 launches. Pentagon lawsuit. SpaceX deal. IPO filing."
Coral dots on a horizontal line. Labels above/below alternating.

---

## VIZ-04: Funding Comparison Bar Chart (Origin Story)
Type: Chart.js horizontal bar chart
Data:
- Amazon: $74.2B (equity + notes combined)
- Google: $10B+ committed
- SpaceX: $15B/yr (compute, not equity — label differently)
- Jeff Bezos: $1.25B personal
Coral bars for committed capital. Lighter coral or grey for SpaceX (it's a compute deal not equity).
Note below chart: "Amazon and Google hold zero voting rights despite total commitments."

---

## VIZ-05: LTBT Governance Diagram (Origin Story)
Type: Custom SVG diagram
Centre: "Anthropic" box (coral border)
Top: "Long-Term Benefit Trust" box connected with solid line — label "Controls board composition"
Left: "Amazon ($74.2B)" — connected with dashed line — label "Zero votes"
Right: "Google (14%)" — connected with dashed line — label "Zero votes, capped at 15%"
Bottom: "SpaceX ($15B/yr compute)" — connected with dotted line — label "Tenant only"
Key insight label below: "You can invest any amount. You cannot buy control."

---

## VIZ-06: Model Family Hierarchy (Models & Products)
Type: Custom stepped/tiered diagram
5 tiers top to bottom (widest = most powerful):
1. Mythos 5 (restricted — Project Glasswing only) — dark grey, locked icon
2. Fable 5 (Mythos-class, public) — coral, "Most capable public model"
3. Opus 4.8 — medium coral, "Maximum reasoning"
4. Sonnet 4.6 — lighter coral, "Production default" + star icon
5. Haiku 4.5 — lightest, "Speed & cost"
Each tier shows: name, price (input/output per M tokens), one-line use case.
Prices: Mythos N/A, Fable $10/$50, Opus $5/$25, Sonnet $3/$15, Haiku $1/$5

---

## VIZ-07: SWE-Bench Pro Benchmark Chart (Models & Products)
Type: Chart.js horizontal bar chart
Data (sorted highest to lowest):
- Fable 5: 80.3% — coral bar
- Opus 4.8: 69.2% — lighter coral bar
- MiniMax M3: 59.0% — grey bar
- Kimi K2.6: 58.6% — grey bar
- GPT-5.5: 58.6% — grey bar
- GLM-5.1: 58.4% — grey bar
- Sonnet 4.6: ~79-82% (SWE-Verified, different benchmark — note this separately or show both)
Annotation: "11-point gap between Fable 5 and Opus 4.8. 21-point gap between Fable and open-weight pack."
Note below: "Vendor-run evaluations. Standardised benchmarks show smaller gaps."

---

## VIZ-08: MCP Architecture Diagram (Models & Products)
Type: Custom SVG
Left column: "Your Agent" (one box)
Centre: "MCP Protocol" (highlighted coral border box, slightly larger)
Right column: 5-6 tool boxes stacked vertically — GitHub, Slack, Postgres, Web Search, Google Drive, Custom Tool
Arrows: bidirectional between Agent ↔ MCP, and MCP ↔ each Tool
Key label on MCP box: "One protocol. Any model. Any tool."
Contrast section below (optional): show the OLD way — Agent with 6 direct arrows to 6 tools. Messy vs clean.

---

## VIZ-09: Claude Product Ecosystem Map (Models & Products)
Type: Grouped card cluster or grid
5 groups with cards inside each:
THINK: Claude.ai Chat, Projects, Deep Research, Extended Thinking
BUILD: Claude Code, MCP, Skills, API
DESIGN: Claude Design, Artifacts
AUTOMATE: Cowork, Computer Use, Claude in Chrome
CONNECT: Claude in Excel, Claude in PowerPoint, Mobile App
Group headers in coral. Cards in light surface. Clean grid layout.

---

## VIZ-10: Revenue Growth Chart (Business & Market)
Type: Chart.js line chart
Data points:
- 2023: ~$0.5B ARR
- 2024: ~$1B ARR
- Early 2025: ~$5B ARR
- Late 2025: ~$10B ARR
- Q1 2026: "80x quarterly growth"
- Jun 2026: $47B annualised run rate
Coral line, coral fill under curve (subtle, low opacity). Y-axis in billions.
Annotation at end: "$47B run rate" with coral dot.

---

## VIZ-11: SpaceX Deal Timeline (Business & Market)
Type: Horizontal event timeline
Events:
- May 2026: "SpaceX compute deal signed. $15B/yr. 220,000 GPUs."
- May 2026 + 3 days: "Pro/Max session limits doubled. Peak-hour throttling removed."
- Jun 9, 2026: "Fable 5 launches publicly."
- Jun 10, 2026: "Dario publishes policy essay calling for AI regulation."
- Jun 12, 2026: "US government recalls Fable 5. Jailbreak concern."
- Jun 16, 2026: "SpaceX announces Cursor acquisition for $60B."
Coral dots. Labels above/below alternating. Irony of last item is intentional.

---

## VIZ-12: AI Market Share Donut Chart (Business & Market)
Type: Chart.js doughnut chart
Data:
- ChatGPT / OpenAI: 46.4% — medium grey
- Gemini / Google: 27.7% — light grey
- Claude / Anthropic: 10.3% — coral
- Others (Grok, Perplexity, etc.): 15.6% — lightest grey
Legend below with values. Coral segment slightly pulled out (offset) for emphasis.
Note: "Source: web AI assistant market share estimates, mid-2026"

---

## VIZ-13: Distillation Attack Infographic (Business & Market)
Type: Custom flow diagram
Flow left to right:
3 boxes (Chinese labs): "MiniMax" / "Moonshot AI" / "DeepSeek"
→ Arrow: "24,000 fake accounts"
→ Centre box: "Claude API" (coral border)
→ Arrow: "16 million exchanges"
→ Right box: "Training data extracted"
Below centre: "Targets: tool use, agentic coding, reasoning — Claude's differentiators"
MiniMax annotation: "13M of 16M exchanges. Pivoted within 24hrs of new Claude release."

---

## VIZ-14: Feature Comparison Table — Interactive (Verdict)
This is a complex interactive widget already built in Claude Chat.
Re-build from scratch with this data or extract from chat transcript.
Columns: Perplexity / Gemini / Cursor / ChatGPT / Claude
Rows: ~40 features across 7 categories
Scores: 0–10 with half points, N/A for not applicable
Features: filter tabs by category, colour-coded score circles, total score row, quality avg row, comments column
See full data in the Claude 101 chat conversation.

---

## VIZ-15: Document Quality Scorecard — Interactive (Verdict)
Second complex interactive widget already built in Claude Chat.
Columns: Perplexity 101 / Gemini 101 / Cursor 101 / ChatGPT 101 / Claude 101
Rows: 25 criteria across 6 categories
Filter by category, colour-coded score circles, total and average rows
See full data in the Claude 101 chat conversation.

---

## VIZ-16: Decision Matrix — Who Needs Claude (Verdict)
Type: Styled HTML table (not Chart.js)
3 columns: "Get Claude Pro" / "Get ChatGPT Plus" / "Get Both (The Armory)"
Rows (user archetypes):
- Writes professionally (essays, reports, analysis)
- Builds software / codes daily
- Needs image/video generation
- Works in enterprise / regulated industry
- Wants best free tier
- Values honest pushback over validation
- Uses AI for creative brainstorming
- Needs computer automation
- Wants the best coding agent
Coral checkmarks (✓) for matches. Muted (—) for doesn't apply.
Footer: "Titus runs: Claude Pro + Google AI Pro. The Multi-Subscription Armory Strategy."

---

## VIZ-17: Claude vs ChatGPT Radar Chart (Verdict)
Type: Chart.js radar chart
6 dimensions (axes):
- Writing Quality: Claude 9.5 / ChatGPT 8
- Coding (terminal agent): Claude 10 / ChatGPT 9.5
- Voice Mode: Claude 7 / ChatGPT 10
- Image Generation: Claude 0 / ChatGPT 10
- MCP Ecosystem: Claude 10 / ChatGPT 6
- Free Tier: Claude 5 / ChatGPT 10
Two overlapping polygons: coral (Claude) + grey (ChatGPT).
Legend below. No fill or very subtle fill (0.15 opacity).
Title: "Where each wins — and where the gaps are real"

---

## Build Instructions for Claude Code

1. Build each viz as a standalone React component file
2. Name files: `Viz01_StatCounters.jsx`, `Viz02_ClaudeStack.jsx`, etc.
3. All components: white background, no external padding (parent handles padding)
4. Coral accent: `#D85A30` throughout
5. Chart.js via: `import { Chart } from 'chart.js/auto'`
6. For VIZ-14 and VIZ-15 (complex interactive tables): rebuild from scratch using the data in the Claude 101 chat transcript — these are the most important visualizations
7. Export all components from a single `index.js` for easy import into the main site

Good luck. These are the organs. The design system from Claude Design is the skeleton. Wire them together and ship.