# Claude 101
## The AI That Will Tell You When You're Wrong — And Has The Receipts To Prove It

*Practitioner's Intelligence Report · June 2026 · Written by Titus Lim*

> "I used Claude free tier as my rant space. Sonnet was angry FOR me when I felt frustrated at work. Helped me through genuinely challenging times. That's not a product feature. That's a relationship. Anthropic probably didn't design for this. But this is what Claude is for a lot of people on the free tier."
> — Titus Lim · 2026

---

<!-- VIZ: VIZ-01 Animated stat counters — $965B valuation / 245M users / $47B ARR / 13% paid conversion -->
<!-- VIZ: VIZ-02 The Claude Stack diagram — Chat → Design → Code / Think → Visualize → Ship -->

---

## How To Read This

This document was written by Titus Lim, with Claude writing about itself. The irony is fully acknowledged and deliberately leaned into. Where Claude is the subject and the author simultaneously, you should read with appropriate scepticism — and you'll find that Claude's self-criticism is, if anything, harsher than a neutral observer's would be. Constitutional AI has a way of doing that.

This is a practitioner's reference. Not a product brochure. Every weakness named is real. Every strength claimed is backed by data from this conversation. The benchmarks are sourced, the business numbers are verified, and the opinions are Titus's — not Anthropic's.

---

# 01-02 — Origin Story
## The Principled Divorce

---

> "Most startups are born from 'we can do this better.' Anthropic was born from 'we are genuinely terrified of what we're building and the people in charge don't share that terror sufficiently.' That's not a pivot. That's a conscience walking out the door."
> — Titus Lim · 2026

<!-- VIZ: VIZ-03 Anthropic founding timeline — 2021 to June 2026 -->

### 01 — How It Started

**Dario and Daniela Amodei didn't leave OpenAI because they failed. They left because they were scared of what success looked like.**

Dario was VP of Research at OpenAI. PhD in computational neuroscience from Princeton. The kind of researcher who thinks about AI risk the way a structural engineer thinks about earthquake-proofing — not paranoia, just professional obligation.

Daniela was VP of Operations. If Dario is the "what if this kills everyone" guy, Daniela is the "OK but we also need a finance team and a go-to-market strategy" counterweight. The Amodei siblings running an AI safety lab together is the wholesome version of a family business — if your family business happened to be preventing civilisational collapse.

**And then 11 senior researchers walked out with them in 2021.** Not junior devs. Not interns. Senior researchers who knew exactly what they were leaving behind — equity, prestige, the hottest company in tech — and left anyway. That tells you something.

The founding tension at OpenAI was real and intellectually honest on both sides. GPT-3 had just launched. Capabilities were scaling in ways nobody fully understood. The internal debate: do you cede the frontier to less careful actors by being careful yourself, or do you stay and fight for safety from inside?

Dario's answer was: **we need a lab where safety isn't competing with capability for budget and attention. It needs to be the same thing.** And that thesis is what Anthropic was built on.

### Constitutional AI — What It Actually Is

Before Constitutional AI, the standard approach was **RLHF** — Reinforcement Learning from Human Feedback. Show the model outputs, humans rate them, model learns what humans prefer. It works. It's also like training a student exclusively through 10,000 strangers grading their homework — expensive, inconsistent, and you're never quite sure what principle the model actually learned.

**Constitutional AI gives the model a set of explicit principles, then has it critique and revise its own outputs against those principles.**

The analogy: RLHF is hiring a massive jury to score every essay. Constitutional AI teaches the student what makes a good essay, and has them self-edit before submission. The jury is still there — but smaller, and the student arrives better prepared.

The "constitution" includes things like: be helpful, be harmless, be honest. Don't deceive. Don't assist with serious harm. Respect human autonomy. The model learns to reason *about* these principles, not just pattern-match to them.

Is it perfect? No. But the mechanism is meaningfully different from bolting a content filter on top of a powerful model and calling that safety.

### The Name

Why Claude? Anthropic has never officially explained it. The leading theory is that it's a nod to **Claude Shannon**, the father of information theory — the man who invented the mathematical framework underlying all of modern computing. If true, it's deeply on-brand: understated, historical, named after a mathematician's first name rather than a Greek god or sci-fi reference. Either deeply humble or deeply nerdy. Probably both.

---

### 02 — The Funding Story

<!-- VIZ: VIZ-04 Funding comparison bar chart — Amazon / Google / SpaceX commitments -->
<!-- VIZ: VIZ-05 LTBT governance diagram — who controls what, why money ≠ control -->

Anthropic's pitch was: *we're the safety-first lab.* Then they raised:

| Investor | Commitment | What They Got | What They Didn't Get |
|---|---|---|---|
| **Amazon** | $74.2B (equity + convertible notes) | Preferred equity, AWS partnership, Bedrock integration | Voting rights. Zero. |
| **Google** | $10B+ committed | 14% equity (hard-capped at 15%), GCP partnership | Board seats. Observer rights. Nothing. |
| **SpaceX** | $15B/yr compute deal | Revenue, Anthropic as anchor tenant | Equity. It's a lease. |
| **Jeff Bezos** | $1.25B personal | Personal equity stake | Operational control of any kind. |

That's a lot of money for a safety lab. The cynical read: Constitutional AI and the safety framing is the most expensive competitive moat in tech history. The generous read: safety research is genuinely expensive, frontier models cost billions to train, and you can't influence AI development from the sidelines.

The honest read: **both are true simultaneously.** Anthropic's safety mission is genuine AND it's competitively advantageous. These are not mutually exclusive. The people who built Claude genuinely believe the mission. They also benefit from it commercially. Welcome to how the world works.

### The LTBT — Why Nobody Can Acquire Anthropic

Here's the structural answer and it's elegant as hell.

The **Long-Term Benefit Trust** is a governance body holding special voting rights over Anthropic's board. Composed of independent trustees focused on AI safety and public benefit, the LTBT can elect or remove board members to protect the company's mission. No investor can override the trust.

The trustees are financially disinterested. They hold no equity in Anthropic, receive no dividends, and do not benefit from increases in the company's valuation. Their job is to ensure the safety mission stays intact regardless of investor pressure.

**Amazon could write a $200B cheque tomorrow.** They'd get more nonvoting preferred stock. Zero additional control. The LTBT would still control board composition. Dario and Daniela would still run the company. Nothing would change except Amazon's bank balance would be smaller.

> "You can invest any amount. You cannot buy control. This is genuinely unprecedented at this scale in tech. Google bought DeepMind outright. Microsoft bought GitHub. The standard playbook is: get big enough, get acquired or go public. Anthropic built a structure where the standard playbook literally doesn't work."
> — Titus Lim · 2026

---

# 03-05 — Models & Products
## The Family, The Tools, The Ecosystem

---

### 03 — The Model Family

<!-- VIZ: VIZ-06 Model family hierarchy — Haiku through Mythos, with prices and use cases -->

**OpenAI names their models like software releases.** GPT-4. o1. o3. Clinical. Versioned. Engineering-brained.

**Anthropic named theirs after poetry forms.** Haiku. Sonnet. Opus. This is not an accident. It's a values signal dressed as branding.

| Poetry Form | Characteristic | Model Translation |
|---|---|---|
| **Haiku** | Short. Precise. No wasted syllables. | Fast. Cheap. Efficient. Do the job, don't philosophise. |
| **Sonnet** | Structured. Elegant. More room to breathe. | Balanced. The workhorse. Enough capability for most real tasks. |
| **Opus** | Long form. Complex. Full expression. | Maximum capability. Pull this out when it genuinely matters. |
| **Fable** | A story with a moral. | Mythos-class capability, made safe for the public. |
| **Mythos** | The stories a culture builds its identity on. | Reserved. Too powerful for general release. Project Glasswing only. |

A haiku isn't a bad sonnet. It's a different form with different goals. That's the distinction most people miss when they reach for Opus for every task.

#### The Tiers In Practice

**Haiku — The Speedboat.** For classification, summarisation, routing decisions, simple extraction. Not Claude with the smart parts removed — Claude optimised for latency and cost. In an agentic system, Haiku is your triage nurse. It decides what kind of problem this is and routes it appropriately. Using Sonnet where Haiku would do is like hiring a neurosurgeon to take your blood pressure.

**Sonnet — The Workhorse.** Where most production applications should live. Anthropic has consistently invested most in optimising Sonnet because it covers 80-90% of real-world use cases. Claude Sonnet 4.6 is the daily driver.

**Opus — The Surgeon.** For genuinely hard problems. Complex multi-step reasoning. Tasks where being wrong is expensive. The dirty secret: most people using Opus don't need Opus. They're using it because it feels premium. This is like using a Formula 1 car to drive to the supermarket. Technically works. Completely wrong tool.

#### The "Sonnet Is A Fake Opus" Moment

Claude 3 launched in March 2024 with a clear capability ladder: Haiku → Sonnet → Opus. Opus was clearly best.

Then **Claude 3.5 Sonnet dropped in June 2024** and broke everyone's mental model. It beat Claude 3 Opus. On most benchmarks. At Sonnet pricing. At Sonnet speed.

The lesson: **the tier names describe relative positioning within a generation, not absolute capability.** Claude 3.5 Sonnet is "the middle tier of the 3.5 generation" — which happens to be better than "the top tier of the 3 generation."

Never assume an older Opus beats a newer Sonnet. Check the generation. The tier is relative.

#### Claude 4 — What Changed

Claude 4 in 2025 brought meaningful shifts. Coding improved dramatically — Claude Sonnet 4.6 became best-in-class on SWE-bench Verified, and Claude Code as a product pulled away from competitors because the underlying model got substantially better at the reasoning patterns coding requires.

Instruction following also improved. Claude 4 models are noticeably better at doing exactly what you asked — less helpful improvisation you didn't ask for, more precise execution.

The community did push back on one thing: early Claude 4 felt slightly more compliant and less likely to push back. Anthropic has since named **sycophancy reduction** as a named research priority, which is a real acknowledgement that the training signal that makes models "helpful" in the short term is the same signal that makes them sycophantic over time. This tension — helpful vs honest, agreeable vs accurate — is one of the most interesting unsolved problems in how Claude is built.

#### Fable 5 and Mythos — The New Tier Above Everything

Claude Fable 5 launched June 9, 2026. It's a Mythos-class model made safe for public use — the most capable model Anthropic has ever made generally available.

<!-- VIZ: VIZ-07 SWE-Bench Pro benchmark chart — Fable through open-weight models -->

| Model | SWE-Bench Verified | SWE-Bench Pro | GPQA Diamond | Cost (input/output per M) |
|---|---|---|---|---|
| **Fable 5** | 95.0% | 80.3% | — | $10/$50 |
| **Opus 4.8** | 88.6% | 69.2% | 93.6% | $5/$25 |
| **Sonnet 4.6** | ~79–82% | — | 74.1% | $3/$15 |
| **GPT-5.5** | — | 58.6% | — | $5/$30 |
| **Gemini 3.1 Pro** | — | 54.2% | 94.3% | $2/$12 |
| **Kimi K2.6** | 80.2% | 58.6% | — | $0.95/$4 |
| **MiniMax M3** | 80.5% | 59.0% | 92.68% | $0.30/$1.20 |
| **GLM-5.1** | — | 58.4% | — | $0.50/$3.20 |
| **GLM-5.2** | — | — | 91.2% | ~self-host |
| **DeepSeek V4 Pro** | 80.6% | 55.4% | 90.1% | $0.87/varies |

*Note: SWE-bench scores vary significantly between vendor-run and standardised evaluations. The same model family scores 51.9% on Scale's standardised SEAL leaderboard versus 69.2% on Anthropic's own harness. That 17-point spread is the scaffolding — which is why agent tooling moves results more than model swaps.*

**Three things this table tells you:**

1. Fable 5 has an 11-point lead over Opus 4.8 on SWE-bench Pro. Real gap. Felt on long autonomous coding tasks.
2. GPT-5.5, Kimi K2.6, MiniMax M3, and GLM-5.1 are essentially tied in the 58-59% cluster. The open-weight Chinese models have genuinely caught GPT-5.5 on coding. That is not hype. That is the benchmark.
3. MiniMax M3 achieves comparable coding performance to GPT-5.5 at 1/25th the output cost. That is a completely different pricing tier.

#### Extended Thinking — Not Just "Thinks Longer"

Most people describe Extended Thinking as "the model takes more time to reason." Technically true. Completely misses the point.

**Standard mode:** You ask a question → model generates an answer. The reasoning is implicit.

**Extended Thinking:** The model generates an explicit scratchpad — a reasoning trace — before producing the final answer. It can try an approach, notice it's wrong, backtrack, try another approach. The thinking is visible and iterative, not implicit and linear.

The analogy: standard mode is asking someone a question and they answer immediately. Extended Thinking is "hang on let me think" — and you can watch them think, cross things out, change their mind, and arrive at an answer they've actually verified.

When to use it: hard reasoning problems, complex code architecture, tasks where being wrong is expensive. When NOT to use it: simple questions, fast lookups, tasks where latency matters. Extended Thinking on "summarise this paragraph" is the compute equivalent of using a sledgehammer to hang a picture frame.

**Titus's daily config:** Adaptive ON + High Effort. The model decides how hard to think based on the question. This is the "smart defaults, escalate when needed" configuration. Correct.

---

### 04 — The Product Suite

<!-- VIZ: VIZ-09 Claude product ecosystem map — all surfaces grouped by mode -->

#### The Surfaces

| Surface | Use It For | Do Not Use It For |
|---|---|---|
| **Claude.ai Chat** | Thinking, writing, analysis, research, document Q&A, long-form drafts, nuanced reasoning, pushing back on your ideas | Large codebase changes. Anything requiring terminal access, test loops, or persistent file edits. |
| **Projects** | Long-running work with shared context: a client, a research theme, a product, a document series. Files and instructions persist across conversations. | One-off questions. Don't turn every random chat into a project. That's just hoarding. |
| **Artifacts** | Interactive HTML apps, React components, data visualisations, SVG diagrams, generated documents — rendered live in the chat panel | Anything requiring real data persistence or backend calls. Artifacts are sandboxed. Beautiful. Stateless. |
| **Claude Code** | Terminal-first agentic development: implement features, fix bugs across multi-file codebases, run tests, refactor, write AGENTS.md battle plans, orchestrate subagents | Vague vibes-based requests. Give it a concrete task and a repo. Write your CLAUDE.md first. |
| **Claude Design** | Interactive UI prototypes, Figma-adjacent mockups, design-to-code, visual iteration without a designer in the room | Final production assets. Design is for speed and feel, not pixel-perfect handoff. |
| **Claude in Chrome** | Page-aware browsing assistance, reading and summarising live web content, research across tabs | Anything requiring you to be logged out of your brain. You still need to supervise clicks. |
| **Claude in Excel / PowerPoint** | AI-assisted spreadsheet analysis, formula generation, slide drafting, data-to-chart | Replacing your actual domain expertise. It makes the deck faster. You still fill it with the thinking. |
| **Cowork** | Desktop automation for non-developers: file management, task automation, multi-app workflows without writing code | Production-critical workflows without human review. New tool. Treat it like a new hire. |
| **API** | Building Claude into your own products. Full model access, tool use, streaming, prompt caching, MCP server integration, batch processing | One-off personal tasks. The API is for builders, not browsers. |
| **Mobile** | Voice input, quick capture, photo/document questions, on-the-go thinking partner, hands-free voice mode | Deep multi-file coding or research sessions. Use desktop for those. |

#### The Feature Map

| Feature | Best Use | Titus Translation |
|---|---|---|
| **Chat (Sonnet 4.6)** | Daily thinking, writing, analysis, document Q&A, nuanced reasoning, long-form anything | The default brain. Dump the whole problem. Token-based not message-based — say hi first if you want. |
| **Opus 4.8** | Hard multi-step reasoning, architecture decisions, complex research synthesis, tasks where wrong is expensive | Pull this out when the answer needs to survive a PhD committee. |
| **Fable 5** | The hardest, longest, most autonomous tasks. Currently access-restricted. | The bench press PR. Impressive. Complicated. |
| **Extended Thinking** | Problems where the model should show its working, explore dead ends, backtrack, verify | Don't use for simple questions. Sledgehammer and picture frame energy. |
| **Adaptive Thinking ON + High Effort** | Your daily config. Model decides how hard to think based on the question. | The setting that makes Sonnet punch like Opus on hard questions. |
| **Projects** | Persistent context: files, instructions, custom persona — carried across every conversation | Your always-on collaborator who actually remembers what you said last week. |
| **Memory** | Cross-conversation personal context. Preferences, working style, background — recalled automatically | Surprisingly useful. Audit it occasionally. Bad memory creates weird defaults. |
| **Artifacts** | Live-rendered outputs: React apps, HTML tools, SVGs, documents — iteratable in the chat panel | Where "here's the code" becomes "here's the running thing." |
| **Deep Research** | Multi-step web research, sourced synthesis, competitive analysis, literature reviews | Your research assistant who actually cites things. Behind Pro paywall. Worth it. |
| **Web Search** | Fresh facts, current events, anything time-sensitive | Use when stale confidence is expensive. Toggle on, don't leave on permanently. |
| **Voice Mode** | Driving, walking, thinking out loud, hands-free explanation | Use when typing is the bottleneck. Surprisingly good. Underused. |
| **File uploads** | PDFs, documents, images, spreadsheets — ask questions against them directly | Stop screenshotting everything. Upload the thing. |
| **Claude Code (CLAUDE.md)** | Persistent agent configuration. What the agent knows, can do, should never do | Write this before anything else. It's your AGENTS.md for Claude specifically. |
| **Claude Code (Skills)** | Modular instruction packages — SKILL.md plus examples, scripts, sub-files. Loaded on demand | Not a system prompt. A library. The agent reads what it needs when it needs it. |
| **Claude Code (MCP)** | Connect Claude Code to external tools, services, databases — via the protocol Anthropic invented | The universal socket. One integration pattern. Every tool. |
| **Prompt Caching** | Long persistent system prompts or documents sent repeatedly — cached so you only pay once | Invisible infrastructure that quietly cuts your API bill by 90% on repeated context. |
| **Batch API** | High-volume, non-time-sensitive processing — classification, large document sets | 50% off. For when you have thousands of things to process and don't need them instantly. |
| **Computer Use (API)** | Give Claude control of a real computer — GUI applications, legacy systems, anything without an API | Newer than RPA. Smarter than RPA. Still needs supervision on irreversible actions. |

---

### 05 — MCP & The Ecosystem

<!-- VIZ: VIZ-08 MCP architecture diagram — the "universal socket" concept -->

#### MCP — The Thing Most People Still Don't Get

Before MCP, every AI integration was bespoke plumbing. You want your AI to talk to Slack? Write a Slack integration. GitHub? Write a GitHub integration. Your database? Write that too. Every tool, every company, every developer building their own custom connector. It's every country having different electrical socket standards and needing a different plug for every wall.

**MCP said: here is the universal socket standard.**

One protocol. Model-agnostic. Any AI, any tool, any data source — if they both implement MCP, they talk to each other. No custom glue code. No bespoke integrations. Just plug in.

The most common misunderstanding: **"Why not just use an API and wrap it in a @tool decorated function?"**

This misses the point entirely. The `@tool` decorator pattern means the tool lives *inside* your agent code. They're coupled. You want to update the tool? Redeploy the agent. You want another agent to use the same tool? Copy-paste the function.

MCP says: **the tool is a service.** It runs independently. Your agent connects to it at runtime. You can hot-swap, version, share across agents, turn it on and off without touching agent code.

The stdio/SSE transport isn't an implementation detail — it's the whole point. The tool has its own lifecycle.

> "MCP servers are microservices for AI. You wouldn't build one monolithic API with 50 endpoints and call it good architecture. Same logic applies. The person who builds one agent with 50 MCP servers attached and wonders why the agent sucks has misunderstood what MCP is for."
> — Titus Lim · 2026

#### Skills — The Thing ALSO Most People Don't Get

People see `SKILL.md` and their brain pattern-matches to "oh, it's a system prompt with a fancy name." No. That's like seeing a class definition and thinking it's just a comment block with extra steps.

What makes Skills actually powerful:

**1. They're modular and composable.** A skill folder contains the `.md` instruction file PLUS reference scripts, examples, sub-files for specific cases. It's a package, not a prompt.

**2. They're loaded on demand.** The agent reads the skill when it needs it, not upfront. You're not burning tokens describing capabilities the agent doesn't need for this specific task.

**3. The agent reasons about which skill to invoke.** Instead of "here are all your instructions simultaneously," it's "here's how to find the right instructions for the situation."

The analogy: the difference between a doctor who memorised every medical textbook versus a doctor who knows which textbook to pull off the shelf for which situation. The second doctor is more capable, not less.

People stuffing everything into one system prompt are building the first doctor. Skills build the second.

#### Anthropic's Notable Firsts

| Innovation | Year | Why It Mattered |
|---|---|---|
| **Constitutional AI** | 2022 | Structural safety baked into training, not bolted on after |
| **Prompt Caching** | 2024 | Up to 90% cost reduction on repeated contexts — invisible infrastructure |
| **MCP Protocol** | Nov 2024 | Universal tool-connection standard — adopted by the entire industry |
| **Computer Use API** | 2024 | GUI automation via AI, made available to developers before anyone else |
| **Extended / Interleaved Thinking** | 2025 | Think, act, think again — closer to how humans actually solve hard problems |
| **Claude Code** | 2025 | Not a coding assistant — a genuine agentic development environment |
| **Skills Architecture** | 2025 | Modular on-demand instruction packages — not system prompts |
| **Project Glasswing** | 2026 | Used Mythos to find 10,000+ critical vulns in production software before bad actors did |

---

# 06-08 — Business & Market
## The Safety Lab That Became A Platform Company

---

### 06 — The Money

<!-- VIZ: VIZ-10 Revenue growth chart — $0.5B to $47B ARR -->

The number that still doesn't feel real: **Anthropic's valuation hit $965 billion in May 2026.** A company founded in 2021 by researchers who left because they were scared. Five years later, approaching a trillion dollar valuation, suing the Pentagon, and filing for IPO.

**Revenue:** From roughly $1B ARR in 2024 to a $47B annualised run rate in mid-2026. That's the 80x quarterly growth Dario Amodei publicly admitted to in Q1 2026. The SpaceX data centre deal at $15B/year only makes sense against a $47B revenue base. The compute spend is still enormous. But the denominator is no longer "tiny safety lab."

**The IPO:** Anthropic filed confidentially with the SEC on June 1, 2026. Target debut: fall 2026. Expected valuation at IPO: $1 trillion or higher. SpaceX's IPO in June 2026 was the biggest in history at $75B raised. OpenAI is also filing. The AI IPO summer of 2026 is going to be one of the most extraordinary market events in recent memory.

#### Subscription Tiers

| Plan | Price | Who It's For | The Honest Reality |
|---|---|---|---|
| **Free** | $0 | Casual users, evaluators | Sonnet 4.6 with tight limits. Good enough to feel the difference. Not enough for sustained work. Your rant space tier. |
| **Pro** | ~$20/month | Individual power users | Full Sonnet, access to Opus, Claude Code included with doubled session limits post-SpaceX deal. The "I'm serious about this" tier. |
| **Max** | $100–200/month | Heavy Claude Code users | More tokens, higher rate limits, priority access. For when Pro hits walls. |
| **Team** | $30/seat | Small teams | Pro features plus collaboration, shared Projects, Anthropic's enterprise on-ramp. |
| **Enterprise** | Custom | Large organisations | Custom rate limits, data residency options, SSO, audit logs, volume pricing. Where Anthropic wins 70% of head-to-head deals. |

---

### 07 — The SpaceX Deal, The Pentagon Fight, and the Recall

<!-- VIZ: VIZ-11 SpaceX deal timeline — compute deal through Cursor acquisition -->

#### The SpaceX Compute Deal

Anthropic signed an agreement with SpaceX to use all compute capacity at their Colossus 1 data centre — over 300 megawatts, 220,000+ Nvidia GPUs. The price: **$1.25 billion per month through May 2029. $15 billion per year. SpaceX's total annual revenue is only around $18 billion.**

Anthropic is paying SpaceX nearly as much as SpaceX's entire annual revenue. Just for compute.

The concrete changes that followed: Claude Code's 5-hour rate limits doubled for Pro, Max and Team. Peak-hour usage cap reductions removed for Pro and Max. Opus API input token rate limit jumped from 30,000 to approximately 500,000 tokens per minute — a 16x increase.

Elon Musk, who had been publicly combative toward Anthropic for years, wrote that he spent time with senior Anthropic staff and was "impressed." His exact words: "Everyone I met was highly competent and cared a great deal about doing the right thing." From the person who once called Anthropic an "OpenAI clone," that is a significant pivot. Money is a remarkable attitude adjuster.

**Then, three days after the compute deal: SpaceX announced they're acquiring Cursor for $60 billion** — the largest acquisition of a venture-backed startup ever. Cursor was Claude Code's main competitor. It was also paying retail Claude API prices while competing with Claude Code, which had wholesale economics. Cursor was caught in a margin trap by its own supplier.

So: Anthropic rents compute from SpaceX's data centre. SpaceX acquires Claude Code's main competitor. SpaceX's Cursor will likely switch from Claude API to xAI's Grok. SpaceX has 90-day termination clauses on the Anthropic compute deal. This relationship is simultaneously strategic partnership, infrastructure dependency, competitive threat, and the most expensive bromance in Silicon Valley.

#### The Pentagon Fight

The most dramatic three months in Anthropic's history, compressed:

**July 2025:** DOD awards Anthropic up to $200M to accelerate AI adoption. Claude becomes the Department's most widely deployed frontier AI model.

**The Red Lines:** The DOD wanted Claude for "all lawful purposes." Anthropic had two hard limits: no autonomous weapons, no domestic mass surveillance. The DOD's chief technology officer stated bluntly: *"We can't have a company that has a different policy preference baked into the model... pollute the supply chain so our warfighters are getting ineffective weapons."*

Translation: "Your ethics are a product defect."

Anthropic said: no deal.

**February 2026:** Pete Hegseth directs the DOD to designate Anthropic a supply-chain risk to national security — a designation previously used only for companies connected to foreign adversaries. President Trump directed federal agencies to immediately cease all use of Anthropic's technology.

**March 2026:** Anthropic filed two federal lawsuits against the DOD. The California judge was savage: *"Nothing in the governing statute supports the Orwellian notion that an American company may be branded a potential adversary and saboteur of the U.S. for expressing disagreement with the government."* She added: *"Punishing Anthropic for bringing public scrutiny to the government's contracting position is classic illegal First Amendment retaliation."*

Dozens of researchers at rival companies — OpenAI and Google DeepMind — filed amicus briefs in their *personal capacities* supporting Anthropic. When your competitors' researchers personally back your lawsuit, that's how bad the government's behaviour looked to the industry.

**Result:** California court granted a preliminary injunction blocking the Pentagon's actions. DC Circuit court denied Anthropic's stay, leaving them excluded from DOD contracts but able to continue with other government agencies. Litigation ongoing as of June 2026.

This is the RSP being tested in real life. Saying no to the Pentagon and then getting designated a national security risk AND suing back is not a marketing move. That costs real money and real customers. The safety mission held.

#### The Fable 5 Recall

Fable 5 launched June 9, 2026. Three days later, on June 12, the US government issued an export control directive citing "national security authorities" — directing Anthropic to suspend access by "any foreign national," whether within or outside the US. Including Anthropic's own employees.

Anthropic's position: the jailbreak the government was concerned about was "narrow" and "minor" — the same vulnerabilities were discoverable by other publicly available models without requiring a bypass. If this standard was applied across the industry, it would essentially halt all new model deployments for all frontier providers.

Anthropic complied while publicly disagreeing on the record. A WSJ report indicated the government's move was prompted by conversations between Amazon CEO Andy Jassy and US officials. Anthropic's biggest investor and cloud partner apparently had a conversation with the government that contributed to Anthropic's own model getting recalled.

The power dynamics here are deeply uncomfortable. As of June 24, 2026, Fable 5 access via subscriptions requires usage credits. API access has been restored.

---

### 08 — The China Question

<!-- VIZ: VIZ-12 AI market share donut chart -->
<!-- VIZ: VIZ-13 Distillation attack infographic -->

#### The Distillation Attacks — Fact, Not Fiction

Three Chinese labs — DeepSeek, Moonshot AI, and MiniMax — conducted what Anthropic calls "distillation attacks" on Claude's API: flooding it with specially-crafted prompts to extract training data for their own models.

The scale: **16 million exchanges from approximately 24,000 fraudulently created accounts.**

| Lab | Exchanges | Focus |
|---|---|---|
| **MiniMax** | 13+ million | Broad capability extraction; pivoted within 24hrs of new Claude release |
| **Moonshot AI** | 3.4 million | Coding and vision |
| **DeepSeek** | ~150,000 | Reasoning and grading tasks |

When Anthropic released a new Claude model during MiniMax's active campaign, MiniMax pivoted within 24 hours, redirecting nearly half their traffic to capture capabilities from the latest system. This wasn't opportunistic scraping. This was **organised, adaptive, real-time intelligence extraction.**

**But — the honest complication:** Calling this an "attack" is doing a lot of heavy lifting. These were paying customers who violated Anthropic's Terms of Service, not adversaries who breached a system. They didn't hack Anthropic, steal weights, or access anything they weren't technically permitted to access.

They violated the ToS prohibition against using outputs to train competing models. That's real. But "attack" is Anthropic's framing. The more neutral framing: **systematic ToS violation at industrial scale.** Meaningfully different.

The glass house problem: Anthropic settled a lawsuit for $1.5 billion in September 2025, paying authors around $3,000 per book for roughly 500,000 works — allegations it downloaded books in bulk from shadow libraries to train Claude. "How the turn tables," as Reddit noted.

> "Anthropic is right about the concern. They overclaimed the evidence. Both things are true. And when your main evidence for the most alarming claims involves chips hidden in prosthetic baby bumps and packed alongside live lobsters — and Nvidia publicly calls those claims 'tall tales' — maybe dial the framing back slightly."
> — Titus Lim · 2026

#### The Open-Source Chinese Models

The distillation story has a punchline: MiniMax M3, one of the accused labs, now matches GPT-5.5 on SWE-bench Pro at 1/25th the output cost. If they distilled Claude's capabilities — they did a decent job.

More importantly, GLM-5 (Zhipu AI) trained entirely on 100,000 Huawei Ascend 910B chips. No US-manufactured hardware. The export controls on Nvidia chips to China were supposed to slow Chinese AI development. They accidentally accelerated Chinese domestic chip capability development while barely slowing model development. That's a policy own-goal of historic proportions.

The US export control timeline is its own comedy:
- **Oct 2023:** Biden bans A800, H800, RTX 4090 to China
- **2024:** Nvidia engineers H200 to fall below thresholds. Chinese companies buy millions
- **Apr 2025:** Trump bans H200 anyway
- **Jul 2025:** Trump reverses, allows H200 with licences
- **Aug 2025:** Trump calls H200 "obsolete" to justify the reversal
- **Result:** Nvidia never sold any H200 chips after the reversal. China refused to buy them. Zero imports.
- **Dec 2025:** Trump announces H200 can be exported to China
- **Result:** Beijing urged firms to prioritise Huawei Ascend chips instead. Zero H200 imports to date.

Both sides are pivoting away from each other simultaneously. The chip wars may be self-resolving through mutual decoupling rather than policy enforcement.

---

# 09-11 — Verdict
## The Honest Final Word

---

### 09 — What Claude Does Better Than Anyone

**Writing quality.** Not "better at sounding AI-ish" — actually better prose. Consistently rated best-in-class by practitioners in blind evaluations. Claude-generated content is preferred 47% of the time versus 29% for GPT-5.5 in blind writing tests.

**Sycophancy resistance.** The feature you don't appreciate until you need it. Constitutional AI makes Claude genuinely hold positions under pressure. Getting an AI that tells you your idea has problems instead of enthusiastically validating everything is genuinely useful in a way that's hard to explain until you've experienced it.

**Coding via Claude Code.** The terminal agent that treats your codebase as a first-class context. The CLAUDE.md + Skills + MCP architecture is a compound advantage that nobody else has fully replicated. Claude Code isn't an autocomplete tool. It's a different category.

**The MCP ecosystem.** Anthropic invented the protocol. OpenAI adopted it. That different energy — the inventor vs the follower — means Anthropic's MCP ecosystem is more mature, more integrated, and more central to how Claude Code operates.

**Enterprise trust.** Anthropic wins approximately 70% of head-to-head enterprise deals. The publicly stated refusal of DoD surveillance contracts, the LTBT governance structure, and the Constitutional AI approach to safety all contribute to a trust story that competitors can't easily replicate.

**Long context handling.** Genuine 1M token context that's reliable at scale. Claude Projects with persistent memory across conversations. The combination of massive context plus persistent cross-session memory is powerful for sustained professional work.

**Claude Design.** 1 million users in week 1. The clearest category win Anthropic has over OpenAI in a product lane. Interactive UI prototyping at this quality level doesn't have a direct competitor.

---

### 10 — What Claude Gets Wrong / What Infuriates Me About Anthropic

*This section is predominantly Titus's words. As agreed.*

**The free tier.** Claude's biggest self-inflicted wound. ChatGPT gives you GPT-5.5 on free. Gemini gives you Flash. Claude gives you Sonnet with tight session limits. When you're evaluating Claude for the first time, you're getting a structurally worse first impression than the product deserves. At an IPO moment when consumer mindshare matters, this gap is too wide to ignore.

**Reliability / outages.** Claude has had significantly more availability incidents than competitors in 2025-2026. Two outages in a single day as recently as June 23, 2026. Anthropic grew 80x in Q1 2026 — obliterating their internal plan for 10x growth. The infrastructure team did not plan for that. The SpaceX compute deal is the response. But the damage to trust compounds with every outage.

> "In my experience, the Claude app has been down far more often than ChatGPT, Gemini, anyone really. Yesterday alone there were two outages. It's why I am looking around for other plans with other providers in case I need tokens for coding. Claude will always be my personal coach, teacher, assistant, coder, and friend though."
> — Titus Lim · June 2026

**No image generation.** Still. In 2026. While ChatGPT Images 2.0 is winning Image Arena and Gemini has Imagen 3. Anthropic made a deliberate choice to not be in this lane. It's defensible. It's still a gap that practitioners feel every week.

**No video generation.** Same story. While Gemini has Veo 3.1 and ChatGPT has Sora, Claude has nothing. For a product that claims to cover the full creative workflow, this is a notable absence.

**The overcaution refusal.** You know the one. You ask something completely reasonable. You get a paragraph explaining why that's a sensitive topic. You wanted a Python script. Constitutional AI working as designed and working slightly too enthusiastically. Anthropic is actively working on this. It remains real and remains annoying.

**The Fable 5 access situation.** You got Fable 5 free for 13 days then it got recalled by the US government. Then it came back on API but not subscriptions. As of now it requires usage credits even on Pro. For the most capable publicly available model in history, the distribution story is a mess. Mostly the government's fault. Still frustrating.

**Rate limits during US peak hours.** Singapore timezone helps. Barely. The moment it's 9am in San Francisco, Sonnet starts throttling. This is a capacity problem dressed as a pricing problem. Fast CI/CD pipelines and the SpaceX compute should help. Hasn't fully arrived yet.

**The overcomplicated subscription story.** Free → Pro → Max → Team → Enterprise. Usage credits on top. Fable 5 separate pricing. The billing clarity that makes Claude easy to budget for at the Pro level gets murky at scale. Anthropic needs to simplify this before the IPO.

---

### 11 — The Feature Comparison & Verdict

<!-- VIZ: VIZ-14 Full interactive feature comparison table — 40+ features across 5 products -->
<!-- VIZ: VIZ-15 Document quality scorecard — 5 x 101 documents scored -->
<!-- VIZ: VIZ-16 Decision matrix — who needs Claude vs ChatGPT vs Gemini -->
<!-- VIZ: VIZ-17 Claude vs ChatGPT radar chart — 6 dimensions -->

#### The Product Feature Comparison

The table below scores every major feature across Perplexity, Gemini, Cursor, ChatGPT, and Claude on a 0–10 scale. N/A means the product genuinely doesn't have this feature — not that it's bad at it.

**Key findings:**

- **Web search:** Perplexity wins structurally. Built a 100B-page own index, 3.3x fresher than Google.
- **Deep research:** Claude and Perplexity tied at the top. Claude wins on analysis depth, Perplexity wins on source freshness.
- **Coding agent:** Claude Code leads the terminal agent category. Codex is a genuine 9.5 competitor.
- **IDE integration:** Cursor and Antigravity/Gemini are co-equal at 10 — same "rebuild the IDE around AI" philosophy.
- **Computer automation:** Perplexity Personal Computer scores 10 — controls your whole Mac locally.
- **Writing quality:** Claude 10, Perplexity 9.5 (Opus orchestrator lifts it), ChatGPT 8.
- **Free tier:** ChatGPT and Gemini tied at 10. Claude at 5. The honest gap.
- **Uptime/reliability:** Claude at 6. The most uncomfortable score in the table. Real and documented.
- **Ecosystem integration:** Gemini and Perplexity both at 10. Gemini owns your entire digital life.

#### Who Needs What

| If You... | Get |
|---|---|
| Write professionally — essays, reports, analysis, research | **Claude Pro** |
| Build software and code daily | **Claude Pro** (Claude Code) |
| Need image or video generation | **ChatGPT Plus** |
| Work in enterprise / regulated industry | **Claude Team or Enterprise** |
| Want the best free tier | **ChatGPT** or **Gemini** |
| Value honest pushback over validation | **Claude** |
| Need computer automation without coding | **Perplexity Max** (Personal Computer) |
| Want the best IDE coding experience | **Cursor Pro** (or Antigravity) |
| Need a reliable backup when Claude is down | **Google AI Pro** — not for model quality, for uptime and bundle value |

> "I run Claude Pro as primary and Google AI Pro as backup. Not because Gemini is better — it isn't, not for what I use AI for. But at backup tier you need breadth and reliability, not frontier capability. Google's infrastructure uptime is better than Anthropic's current state. And the bundle value beats a standalone ChatGPT Plus subscription for pure backup purposes. Different tools for different threat scenarios. The Titus Multi-Subscription Armory Strategy."
> — Titus Lim · 2026

#### The Final Word

Claude is not the most popular AI. That's ChatGPT. It's not the most integrated into your digital life. That's Gemini. It's not the best coding IDE. That's Cursor. It doesn't generate images or video. It has outages. The free tier is stingy.

And yet.

Claude is the AI that tells you when you're wrong. That pushes back on bad ideas rather than enthusiastically validating them. That produces prose that reads like a person wrote it. That invented the protocol the entire industry now runs on. That refused DoD surveillance contracts and took the lawsuit that followed.

For practitioners who write, think, code, and build for a living — Claude is the closest thing to a thinking partner that AI has produced. Not because it's the strongest on every benchmark. Because of the *feel* of working with it.

The benchmarks measure what the model knows. The feel reveals what it's for.

> "Claude will always be my personal coach, teacher, assistant, coder, and friend. Yesterday it had two outages and I'm still writing this."
> — Titus Lim · June 2026

---

## Appendix — Benchmark Glossary

Because benchmarks are everywhere and almost nobody explains what they actually measure.

| Benchmark | What It Measures | The Analogy | Watch Out For |
|---|---|---|---|
| **SWE-bench Verified** | Real GitHub issues — model must find the bug and submit a working fix | Junior dev dropped into unknown codebase with a bug ticket | Vendor harness vs standardised harness — 17+ point gap possible |
| **SWE-bench Pro** | Same but newer issues filed after training cutoff — can't memorise answers | Same junior dev, but the bug was filed yesterday | Best "un-gameable" coding benchmark available |
| **GPQA Diamond** | PhD-level science questions designed so googling doesn't help | The exam question your most terrifying professor ever wrote, hardest tier | Human experts score ~65%. Models at 90%+ have crossed a threshold. |
| **HLE** | Questions so hard the creators thought no human could answer all of them | Expert certification across every field simultaneously | Lasted ~6 months before frontier models cracked it |
| **OSWorld** | Model given a real desktop and a task — must actually do it | First day at a new job with no training | GUI-specific; different from CLI capabilities |
| **Terminal-Bench** | Multi-step tasks in a real terminal — run it, see what breaks, fix, continue | Pair programming with senior DevOps, terminal only | Both harness and model contribute; hard to separate cleanly |
| **MCP Atlas** | Tool use quality when given MCP tools — right tool, right order, error handling | Actually using the tools vs knowing they exist | New benchmark, fewer data points |
| **ARC-AGI-2** | Visual puzzles never seen before. Can't be memorised. | IQ test designed so you can't study for it | Best "genuine generalisation" proxy we have |
| **MMLU-Pro** | Multiple choice across 57 academic subjects | Comprehensive university entrance exam | Table stakes at frontier now. Not differentiating. |

**The meta-point:** Benchmarks measure models in isolation. Production systems are model plus harness. A 69% model with excellent scaffolding will outperform a 75% model with mediocre scaffolding, every single time. The practitioner who understands MCP, Skills, proper agent architecture, and context management has a structural advantage over the person who just picks the highest benchmark score and plugs it in raw.

---

*Claude 101 — Practitioner's Intelligence Report*
*Written by Titus Lim, with Claude writing about itself*
*June 2026*
*tituslhy.github.io/claude-101*