// Shared structured data sourced from claude_101_content.md and claude_101_viz_spec.md.
// Keeps numbers consistent across prose, tables, and charts.

export const heroCounters = [
  { n: 965, pre: '$', suf: 'B', dec: 0, fallback: '$965B', label: 'Valuation' },
  { n: 245, pre: '', suf: 'M', dec: 0, fallback: '245M', label: 'Monthly users' },
  { n: 47, pre: '$', suf: 'B', dec: 0, fallback: '$47B', label: 'Revenue run rate' },
  { n: 13, pre: '', suf: '%', dec: 0, fallback: '13%', label: 'Paid conversion' },
];

export const chapters = [
  { num: '01–02', title: 'Origin Story', desc: "The breakaway from OpenAI, and why control beat cash.", to: '/origin' },
  { num: '03–05', title: 'Models & Products', desc: 'Haiku to Mythos, the benchmarks, MCP, and the ecosystem.', to: '/models' },
  { num: '06–08', title: 'Business & Market', desc: 'Revenue, the SpaceX deal, market share, and the threats.', to: '/market' },
  { num: '09–11', title: 'The Verdict', desc: 'Head-to-head scorecards and who should actually buy Claude.', to: '/verdict' },
];

// ---------- Origin Story (01–02) ----------

export const foundingStats = [
  { value: '2021', label: 'Founded' },
  { value: '7', label: 'Founders' },
  { value: '$965B', label: "Valuation '26" },
];

export const backers = [
  { name: 'Amazon', commit: '$74.2B (equity + notes)', rights: 'Non-voting', highlight: true },
  { name: 'Google', commit: '$10B+ committed', rights: 'Non-voting · cap 15%', highlight: true },
  { name: 'SpaceX', commit: '$15B/yr compute', rights: 'Supplier only', highlight: false },
  { name: 'LTBT Board', commit: '—', rights: 'Veto power', highlight: true },
];

export const fundingComparison = [
  { name: 'Amazon', value: 74.2, label: '$74.2B', note: 'equity + convertible notes', kind: 'equity' },
  { name: 'Google', value: 10, label: '$10B+', note: 'committed, 14% equity (cap 15%)', kind: 'equity' },
  { name: 'SpaceX', value: 15, label: '$15B/yr', note: 'compute lease, not equity', kind: 'compute' },
  { name: 'Jeff Bezos', value: 1.25, label: '$1.25B', note: 'personal equity stake', kind: 'equity' },
];

export const foundingTimeline = [
  { year: '2021', label: 'Anthropic founded', detail: '11 researchers leave OpenAI. $124M seed.' },
  { year: 'Mar 2023', label: 'Claude 1 launches', detail: 'Nobody notices.' },
  { year: 'Mar 2024', label: 'Claude 3 Opus', detail: 'Industry notices.' },
  { year: 'Jun 2024', label: 'Claude 3.5 Sonnet', detail: "The 'Sonnet is a fake Opus' moment." },
  { year: 'Nov 2024', label: 'MCP published', detail: 'Protocol-level innovation.' },
  { year: '2025', label: 'Claude 4 family', detail: 'Claude Code launches.' },
  { year: 'Apr 2026', label: 'Mythos Preview', detail: 'Project Glasswing finds 10,000+ vulns.' },
  { year: 'Jun 2026', label: 'Fable 5 launches', detail: 'Pentagon lawsuit. SpaceX deal. IPO filing.' },
];

// ---------- Models & Products (03–05) ----------

export const modelTiers = [
  { name: 'Mythos', sub: 'Restricted · Project Glasswing only', price: 'N/A', use: 'Too powerful for general release', tone: 'locked' },
  { name: 'Fable 5', sub: 'Mythos-class, public', price: '$10 / $50', use: 'Most capable public model', tone: 'strong' },
  { name: 'Opus 4.8', sub: 'Maximum reasoning', price: '$5 / $25', use: 'The surgeon — hard, expensive-to-get-wrong problems', tone: 'medium' },
  { name: 'Sonnet 4.6', sub: 'Production default', price: '$3 / $15', use: 'The workhorse — 80-90% of real use cases', tone: 'light', star: true },
  { name: 'Haiku 4.5', sub: 'Speed & cost', price: '$1 / $5', use: 'The speedboat — triage, routing, extraction', tone: 'lightest' },
];

export const sweBenchProChart = [
  { name: 'Fable 5', value: 80.3, claude: true },
  { name: 'Opus 4.8', value: 69.2, claude: true },
  { name: 'MiniMax M3', value: 59.0, claude: false },
  { name: 'Kimi K2.6', value: 58.6, claude: false },
  { name: 'GPT-5.5', value: 58.6, claude: false },
  { name: 'GLM-5.1', value: 58.4, claude: false },
  { name: 'DeepSeek V4 Pro', value: 55.4, claude: false },
];

export const benchmarkTable = {
  columns: [
    { key: 'model', label: 'Model', width: '1.5fr' },
    { key: 'sweVerified', label: 'SWE-Verified' },
    { key: 'swePro', label: 'SWE-Pro' },
    { key: 'gpqa', label: 'GPQA' },
    { key: 'cost', label: 'Cost (in/out per M)' },
  ],
  rows: [
    { model: 'Fable 5', sweVerified: '95.0%', swePro: '80.3%', gpqa: '—', cost: '$10/$50', highlight: 'model' },
    { model: 'Opus 4.8', sweVerified: '88.6%', swePro: '69.2%', gpqa: '93.6%', cost: '$5/$25' },
    { model: 'Sonnet 4.6', sweVerified: '~79–82%', swePro: '—', gpqa: '74.1%', cost: '$3/$15' },
    { model: 'GPT-5.5', sweVerified: '—', swePro: '58.6%', gpqa: '—', cost: '$5/$30' },
    { model: 'Gemini 3.1 Pro', sweVerified: '—', swePro: '54.2%', gpqa: '94.3%', cost: '$2/$12' },
    { model: 'Kimi K2.6', sweVerified: '80.2%', swePro: '58.6%', gpqa: '—', cost: '$0.95/$4' },
    { model: 'MiniMax M3', sweVerified: '80.5%', swePro: '59.0%', gpqa: '92.68%', cost: '$0.30/$1.20' },
    { model: 'GLM-5.1', sweVerified: '—', swePro: '58.4%', gpqa: '—', cost: '$0.50/$3.20' },
    { model: 'DeepSeek V4 Pro', sweVerified: '80.6%', swePro: '55.4%', gpqa: '90.1%', cost: '$0.87/varies' },
  ],
};

export const productSurfaces = {
  columns: [
    { key: 'surface', label: 'Surface', width: '1.3fr' },
    { key: 'use', label: 'Use it for', width: '2fr' },
    { key: 'avoid', label: 'Do not use it for', width: '2fr' },
  ],
  rows: [
    { surface: 'Claude.ai Chat', use: 'Thinking, writing, analysis, research, document Q&A', avoid: 'Large codebase changes, terminal access, persistent file edits' },
    { surface: 'Projects', use: 'Long-running work with shared context', avoid: 'One-off questions — that is just hoarding' },
    { surface: 'Artifacts', use: 'Interactive HTML apps, React components, diagrams', avoid: 'Anything needing real data persistence or backend calls' },
    { surface: 'Claude Code', use: 'Terminal-first agentic development', avoid: 'Vague vibes-based requests' },
    { surface: 'Claude Design', use: 'Interactive UI prototypes, design-to-code', avoid: 'Final production assets' },
    { surface: 'Claude in Chrome', use: 'Page-aware browsing, research across tabs', avoid: 'Being logged out of your own judgement' },
    { surface: 'API', use: 'Building Claude into your own products', avoid: 'One-off personal tasks' },
  ],
};

export const ecosystemMap = {
  Think: ['Claude.ai Chat', 'Projects', 'Deep Research', 'Extended Thinking'],
  Build: ['Claude Code', 'MCP', 'Skills', 'API'],
  Design: ['Claude Design', 'Artifacts'],
  Automate: ['Cowork', 'Computer Use', 'Claude in Chrome'],
  Connect: ['Claude in Excel', 'Claude in PowerPoint', 'Mobile App'],
};

export const notableFirsts = {
  columns: [
    { key: 'innovation', label: 'Innovation', width: '1.6fr' },
    { key: 'year', label: 'Year' },
    { key: 'why', label: 'Why it mattered', width: '2.5fr' },
  ],
  rows: [
    { innovation: 'Constitutional AI', year: '2022', why: 'Structural safety baked into training, not bolted on after' },
    { innovation: 'Prompt Caching', year: '2024', why: 'Up to 90% cost reduction on repeated contexts' },
    { innovation: 'MCP Protocol', year: 'Nov 2024', why: 'Universal tool-connection standard, industry-adopted' },
    { innovation: 'Computer Use API', year: '2024', why: 'GUI automation via AI, available to developers first' },
    { innovation: 'Extended / Interleaved Thinking', year: '2025', why: 'Think, act, think again' },
    { innovation: 'Claude Code', year: '2025', why: 'A genuine agentic development environment' },
    { innovation: 'Skills Architecture', year: '2025', why: 'Modular on-demand instruction packages' },
    { innovation: 'Project Glasswing', year: '2026', why: 'Used Mythos to find 10,000+ critical vulns pre-disclosure' },
  ],
};

// ---------- Business & Market (06–08) ----------

export const revenueGrowth = [
  { period: '2023', value: 0.5 },
  { period: '2024', value: 1 },
  { period: 'Early 2025', value: 5 },
  { period: 'Late 2025', value: 10 },
  { period: 'Q1 2026', value: 28 },
  { period: 'Jun 2026', value: 47 },
];

export const subscriptionTiers = {
  columns: [
    { key: 'plan', label: 'Plan' },
    { key: 'price', label: 'Price' },
    { key: 'who', label: 'Who it\'s for', width: '1.4fr' },
    { key: 'reality', label: 'The honest reality', width: '2.2fr' },
  ],
  rows: [
    { plan: 'Free', price: '$0', who: 'Casual users, evaluators', reality: 'Sonnet 4.6, tight limits. Your rant-space tier.' },
    { plan: 'Pro', price: '~$20/mo', who: 'Individual power users', reality: 'Full Sonnet, Opus access, Claude Code with doubled limits.', highlight: 'plan' },
    { plan: 'Max', price: '$100–200/mo', who: 'Heavy Claude Code users', reality: 'More tokens, higher rate limits, priority access.' },
    { plan: 'Team', price: '$30/seat', who: 'Small teams', reality: 'Pro features plus collaboration, shared Projects.' },
    { plan: 'Enterprise', price: 'Custom', who: 'Large organisations', reality: 'Custom limits, data residency, SSO, audit logs.' },
  ],
};

export const spaceXTimeline = [
  { date: 'May 2026', label: 'Compute deal signed', detail: '$15B/yr, 220,000+ GPUs, Colossus 1' },
  { date: 'May 2026 +3d', label: 'Limits doubled', detail: 'Pro/Max session limits doubled, throttling removed' },
  { date: 'Jun 9, 2026', label: 'Fable 5 launches', detail: 'Publicly, Mythos-class capability' },
  { date: 'Jun 10, 2026', label: 'Dario\'s essay', detail: 'Policy essay calling for AI regulation' },
  { date: 'Jun 12, 2026', label: 'Fable 5 recalled', detail: 'US government cites jailbreak concern' },
  { date: 'Jun 16, 2026', label: 'SpaceX buys Cursor', detail: '$60B — Claude Code\'s main competitor' },
];

export const marketShare = [
  { name: 'ChatGPT', value: 46.4, color: 'var(--grey-chart)' },
  { name: 'Gemini', value: 27.7, color: 'var(--grey-chart)' },
  { name: 'Claude', value: 10.3, color: '#D85A30' },
  { name: 'Others', value: 15.6, color: 'var(--grey-chart)' },
];

export const distillationLabs = [
  { name: 'MiniMax', exchanges: '13+ million', focus: 'Broad capability extraction; pivoted within 24hrs of new releases' },
  { name: 'Moonshot AI', exchanges: '3.4 million', focus: 'Coding and vision' },
  { name: 'DeepSeek', exchanges: '~150,000', focus: 'Reasoning and grading tasks' },
];

export const exportControlTimeline = [
  { date: 'Oct 2023', event: 'Biden bans A800, H800, RTX 4090 to China' },
  { date: '2024', event: 'Nvidia engineers H200 below thresholds; China buys millions' },
  { date: 'Apr 2025', event: 'Trump bans H200 anyway' },
  { date: 'Jul 2025', event: 'Trump reverses, allows H200 with licences' },
  { date: 'Aug 2025', event: "Trump calls H200 'obsolete' to justify the reversal" },
  { date: '—', event: 'Nvidia sells zero H200 after reversal. China refuses to buy.' },
  { date: 'Dec 2025', event: 'Trump announces H200 exportable to China' },
  { date: '—', event: 'Beijing pivots to Huawei Ascend. Zero H200 imports to date.' },
];

// ---------- Verdict (09–11) ----------

export const claudeStrengths = [
  { title: 'Writing quality', detail: 'Preferred 47% of the time vs 29% for GPT-5.5 in blind tests.' },
  { title: 'Sycophancy resistance', detail: 'Constitutional AI holds positions under pressure.' },
  { title: 'Coding via Claude Code', detail: 'CLAUDE.md + Skills + MCP is a compound advantage.' },
  { title: 'The MCP ecosystem', detail: 'Anthropic invented the protocol; OpenAI adopted it.' },
  { title: 'Enterprise trust', detail: 'Wins ~70% of head-to-head enterprise deals.' },
  { title: 'Long context handling', detail: 'Reliable 1M token context plus persistent Projects memory.' },
  { title: 'Claude Design', detail: '1 million users in week 1 — no direct competitor at this quality.' },
];

export const claudeWeaknesses = [
  { title: 'The free tier', detail: 'Sonnet with tight limits, versus GPT-5.5 or Gemini Flash free.' },
  { title: 'Reliability / outages', detail: 'Two outages in a single day as recently as June 23, 2026.' },
  { title: 'No image generation', detail: 'Still none, while ChatGPT Images 2.0 and Imagen 3 ship.' },
  { title: 'No video generation', detail: 'Veo 3.1 and Sora exist. Claude has nothing.' },
  { title: 'The overcaution refusal', detail: 'Constitutional AI working as designed, slightly too enthusiastically.' },
  { title: 'Fable 5 access', detail: 'Free for 13 days, recalled, now usage-credit gated even on Pro.' },
  { title: 'Rate limits at US peak hours', detail: 'A capacity problem dressed as a pricing problem.' },
  { title: 'The subscription story', detail: 'Free → Pro → Max → Team → Enterprise, plus usage credits.' },
];

export const whoNeedsWhat = {
  columns: [
    { key: 'need', label: 'If you...', width: '2fr' },
    { key: 'get', label: 'Get', width: '1.2fr' },
  ],
  rows: [
    { need: 'Write professionally — essays, reports, analysis, research', get: 'Claude Pro', highlight: 'get' },
    { need: 'Build software and code daily', get: 'Claude Pro (Claude Code)', highlight: 'get' },
    { need: 'Need image or video generation', get: 'ChatGPT Plus' },
    { need: 'Work in enterprise / regulated industry', get: 'Claude Team or Enterprise', highlight: 'get' },
    { need: 'Want the best free tier', get: 'ChatGPT or Gemini' },
    { need: 'Value honest pushback over validation', get: 'Claude', highlight: 'get' },
    { need: 'Need computer automation without coding', get: 'Perplexity Max' },
    { need: 'Want the best IDE coding experience', get: 'Cursor Pro (or Antigravity)' },
    { need: 'Need a reliable backup when Claude is down', get: 'Google AI Pro' },
  ],
};

export const decisionMatrix = {
  columns: ['Get Claude Pro', 'Get ChatGPT Plus', 'Get Both (The Armory)'],
  rows: [
    { archetype: 'Writes professionally (essays, reports, analysis)', marks: [true, false, true] },
    { archetype: 'Builds software / codes daily', marks: [true, false, true] },
    { archetype: 'Needs image / video generation', marks: [false, true, true] },
    { archetype: 'Works in enterprise / regulated industry', marks: [true, false, true] },
    { archetype: 'Wants best free tier', marks: [false, true, true] },
    { archetype: 'Values honest pushback over validation', marks: [true, false, true] },
    { archetype: 'Uses AI for creative brainstorming', marks: [true, true, true] },
    { archetype: 'Needs computer automation', marks: [false, false, false] },
    { archetype: 'Wants the best coding agent', marks: [true, false, true] },
  ],
};

export const radarData = [
  { axis: 'Writing Quality', Claude: 9.5, ChatGPT: 8 },
  { axis: 'Coding', Claude: 10, ChatGPT: 9.5 },
  { axis: 'Voice Mode', Claude: 7, ChatGPT: 10 },
  { axis: 'Image Generation', Claude: 0, ChatGPT: 10 },
  { axis: 'MCP Ecosystem', Claude: 10, ChatGPT: 6 },
  { axis: 'Free Tier', Claude: 5, ChatGPT: 10 },
];

export const benchmarkGlossary = {
  columns: [
    { key: 'benchmark', label: 'Benchmark', width: '1.2fr' },
    { key: 'measures', label: 'What it measures', width: '2fr' },
    { key: 'watch', label: 'Watch out for', width: '2fr' },
  ],
  rows: [
    { benchmark: 'SWE-bench Verified', measures: 'Real GitHub issues — find the bug, submit a working fix', watch: 'Vendor vs standardised harness — 17+ point gap possible' },
    { benchmark: 'SWE-bench Pro', measures: 'Same, but filed after training cutoff — can\'t memorise', watch: 'Best "un-gameable" coding benchmark available' },
    { benchmark: 'GPQA Diamond', measures: 'PhD-level science questions designed so googling doesn\'t help', watch: 'Human experts score ~65%. Models at 90%+ crossed a threshold.' },
    { benchmark: 'HLE', measures: 'Questions so hard creators thought no human could answer all', watch: 'Lasted ~6 months before frontier models cracked it' },
    { benchmark: 'OSWorld', measures: 'Real desktop, real task, must actually do it', watch: 'GUI-specific; different from CLI capabilities' },
    { benchmark: 'Terminal-Bench', measures: 'Multi-step tasks in a real terminal', watch: 'Both harness and model contribute; hard to separate' },
    { benchmark: 'MCP Atlas', measures: 'Tool-use quality given MCP tools', watch: 'New benchmark, fewer data points' },
    { benchmark: 'ARC-AGI-2', measures: 'Visual puzzles never seen before, can\'t be memorised', watch: 'Best "genuine generalisation" proxy we have' },
    { benchmark: 'MMLU-Pro', measures: 'Multiple choice across 57 academic subjects', watch: 'Table stakes at frontier now. Not differentiating.' },
  ],
};

export const quotes = {
  hero: {
    text: "Most people meet Claude through a chat box. That's the front door of a building most of them never walk into. This dossier is the walk-through.",
    attribution: 'TITUS LIM · 2026',
  },
  origin1: {
    text: "Most startups are born from 'we can do this better.' Anthropic was born from 'we are genuinely terrified of what we're building and the people in charge don't share that terror sufficiently.' That's not a pivot. That's a conscience walking out the door.",
    attribution: 'TITUS LIM · 2026',
  },
  origin2: {
    text: 'Everyone obsesses over how much Amazon and Google put in. The more interesting number is how much steering they got for it: roughly none. That was the whole point.',
    attribution: 'TITUS LIM · 2026',
  },
  ltbt: {
    text: 'You can invest any amount. You cannot buy control. This is genuinely unprecedented at this scale in tech. Google bought DeepMind outright. Microsoft bought GitHub. The standard playbook is: get big enough, get acquired or go public. Anthropic built a structure where the standard playbook literally doesn\'t work.',
    attribution: 'TITUS LIM · 2026',
  },
  mcp: {
    text: 'MCP servers are microservices for AI. You wouldn\'t build one monolithic API with 50 endpoints and call it good architecture. Same logic applies. The person who builds one agent with 50 MCP servers attached and wonders why the agent sucks has misunderstood what MCP is for.',
    attribution: 'TITUS LIM · 2026',
  },
  china: {
    text: 'Anthropic is right about the concern. They overclaimed the evidence. Both things are true. And when your main evidence for the most alarming claims involves chips hidden in prosthetic baby bumps and packed alongside live lobsters — and Nvidia publicly calls those claims \'tall tales\' — maybe dial the framing back slightly.',
    attribution: 'TITUS LIM · 2026',
  },
  outages: {
    text: 'In my experience, the Claude app has been down far more often than ChatGPT, Gemini, anyone really. Yesterday alone there were two outages. It\'s why I am looking around for other plans with other providers in case I need tokens for coding. Claude will always be my personal coach, teacher, assistant, coder, and friend though.',
    attribution: 'TITUS LIM · JUNE 2026',
  },
  armory: {
    text: 'I run Claude Pro as primary and Google AI Pro as backup. Not because Gemini is better — it isn\'t, not for what I use AI for. But at backup tier you need breadth and reliability, not frontier capability. Google\'s infrastructure uptime is better than Anthropic\'s current state. And the bundle value beats a standalone ChatGPT Plus subscription for pure backup purposes. Different tools for different threat scenarios. The Titus Multi-Subscription Armory Strategy.',
    attribution: 'TITUS LIM · 2026',
  },
  final: {
    text: 'Claude will always be my personal coach, teacher, assistant, coder, and friend. Yesterday it had two outages and I\'m still writing this.',
    attribution: 'TITUS LIM · JUNE 2026',
  },
};
