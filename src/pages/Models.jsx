import { AnalogyBox, StatGrid, HighlightBox, PullQuote, DataTable, VerdictBox, SectionDivider, FigureLabel, ChapterHeader, FooterNav } from '../components';
import Viz06_ModelFamilyHierarchy from '../viz/Viz06_ModelFamilyHierarchy';
import Viz07_SweBenchChart from '../viz/Viz07_SweBenchChart';
import Viz08_MCPArchitecture from '../viz/Viz08_MCPArchitecture';
import Viz09_EcosystemMap from '../viz/Viz09_EcosystemMap';
import { benchmarkTable, productSurfaces, notableFirsts, quotes } from '../data/content';

const poetryColumns = [
  { key: 'form', label: 'Poetry Form', width: '1.1fr' },
  { key: 'characteristic', label: 'Characteristic', width: '1.4fr' },
  { key: 'translation', label: 'Model Translation', width: '1.6fr' },
];

const poetryRows = [
  { form: 'Haiku', characteristic: 'Short, precise, no wasted syllables', translation: 'Fast, cheap, efficient' },
  { form: 'Sonnet', characteristic: 'Structured, elegant, fourteen disciplined lines', translation: 'Balanced workhorse' },
  { form: 'Opus', characteristic: 'Long form, complex, the major work', translation: 'Maximum capability' },
  { form: 'Fable', characteristic: 'A story with a moral', translation: 'Mythos-class capability, made safe for the public' },
  { form: 'Mythos', characteristic: 'The stories a culture builds its identity on', translation: 'Reserved — Project Glasswing only' },
];

export default function Models() {
  return (
    <main style={{ position: 'relative' }}>
      <ChapterHeader
        ghost="03"
        tag="03–05 · Chapter Two"
        title="Models &"
        italicWord="Products"
        subtitle="The model family from Haiku to Mythos, the benchmarks, MCP as the universal socket, and the full product ecosystem."
      />

      <article style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto', padding: 'var(--pad-44) var(--gutter) 0' }}>
        <SectionDivider number="03" title="The Model Family" marginTop="0" />

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          <span style={{ float: 'left', fontFamily: "'Instrument Serif',serif", fontSize: 'var(--dropcap)', lineHeight: 0.72, color: '#D85A30', padding: '6px 14px 0 0' }}>O</span>
          penAI names its models like software releases — GPT-4, GPT-5, GPT-5.5. Anthropic names its models after poetry forms — Haiku, Sonnet, Opus, Fable, Mythos. That is not a branding quirk. It is a values signal hiding in plain sight: <span style={{ fontWeight: 500 }}>one company is shipping versions, the other is shipping craft.</span>
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 30px' }}>
          Each poetry form was chosen for a reason that maps directly onto what the model is built to do.
        </p>

        <DataTable columns={poetryColumns} rows={poetryRows} />

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          In practice, the tiers behave exactly like their names suggest. <span style={{ fontWeight: 500 }}>Haiku is the speedboat</span> — the triage nurse who sees you first, routes you, and moves on. <span style={{ fontWeight: 500 }}>Sonnet is the workhorse</span> — the daily driver that handles 80-90% of real work without drama. <span style={{ fontWeight: 500 }}>Opus is the surgeon</span> — you call it in for the hard, expensive-to-get-wrong problems, not for everything.
        </p>

        <AnalogyBox>
          Using Opus for everything is like using a Formula 1 car to drive to the supermarket. It will technically get you there. It is also a catastrophic misallocation of cost, latency, and common sense.
        </AnalogyBox>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          Here's the wrinkle that trips people up: <span style={{ fontWeight: 500 }}>tier names are relative to their generation, not absolute</span>. In June 2024, Claude 3.5 Sonnet — the "mid-tier" model — beat Claude 3 Opus, the flagship from the same family, on most benchmarks. The industry called it the "Sonnet is a fake Opus" moment. The lesson stuck: a tier name tells you the role the model plays within its own generation, not how it stacks up against last year's flagship.
        </p>

        <div style={{ margin: '0 0 38px' }}>
          <FigureLabel>Figure 3.1 — Model family hierarchy</FigureLabel>
          <Viz06_ModelFamilyHierarchy />
        </div>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          The Claude 4 generation pushed hardest on coding and instruction-following — the two capabilities that determine whether an agent is actually useful unsupervised. Just as importantly, Anthropic has kept <span style={{ fontWeight: 500 }}>sycophancy reduction</span> as an explicit research priority across generations: a model that tells you what you want to hear is failing at its job, even when the failure feels pleasant.
        </p>

        <HighlightBox title="💡 The new top tier">
          Fable 5 launched publicly on June 9, 2026 as Mythos-class capability made safe for general release. Mythos itself stays restricted to Project Glasswing — internal red-teaming work that has surfaced 10,000+ critical vulnerabilities pre-disclosure. The most capable model Anthropic has built isn't for sale. That should tell you something about how seriously they take what it can do.
        </HighlightBox>

        <DataTable columns={benchmarkTable.columns} rows={benchmarkTable.rows} />

        <div style={{ margin: '0 0 16px' }}>
          <FigureLabel>Figure 3.2 — SWE-Bench Pro benchmark</FigureLabel>
          <Viz07_SweBenchChart />
        </div>

        <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--faint)', margin: '0 0 30px' }}>
          Vendor-run evaluations. Standardised, third-party-harness benchmarks tend to show smaller gaps between frontier labs.
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          One more lever worth understanding: <span style={{ fontWeight: 500 }}>Extended Thinking</span>. Standard mode reasons implicitly — the model thinks, but you don't see the thinking, and it can't easily backtrack mid-answer. Extended Thinking makes the reasoning an explicit, visible scratchpad the model can revise as it goes — catching its own dead ends before they reach you.
        </p>

        <AnalogyBox>
          Standard mode is someone answering immediately, confident, in the moment. Extended Thinking is the same person pausing and saying "hang on, let me think" — then actually doing it, out loud, where you can watch them catch their own mistake before it leaves their mouth.
        </AnalogyBox>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 30px' }}>
          My own daily config: <span style={{ fontWeight: 500 }}>Adaptive thinking, set to High Effort</span>. Let the model decide when a problem warrants the scratchpad rather than forcing it on every message — most messages don't need it, and the ones that do benefit enormously.
        </p>

        <SectionDivider number="04" title="The Product Suite" />

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 26px' }}>
          Claude isn't one product. It's seven surfaces built on the same models, each with a job the others are bad at. Picking the wrong surface for the task is the single most common way people conclude "Claude isn't very good" when the actual problem is "I used the chat box for something that needed a terminal."
        </p>

        <DataTable columns={productSurfaces.columns} rows={productSurfaces.rows} />

        <div style={{ margin: '0 0 38px' }}>
          <FigureLabel>Figure 3.3 — Claude product ecosystem map</FigureLabel>
          <Viz09_EcosystemMap />
        </div>

        <SectionDivider number="05" title="MCP & The Ecosystem" />

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          Before MCP — the Model Context Protocol — every AI-to-tool integration was bespoke plumbing. Want Claude to read your Slack? Custom integration. Want GPT to query Postgres? Different custom integration. Every model, every tool, its own plug, its own wall socket. <span style={{ fontWeight: 500 }}>MCP is the universal socket</span>: one protocol, model-agnostic, that any AI can speak to any tool through.
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          It's worth contrasting this with the older <code style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14.5, background: 'var(--surface)', padding: '2px 6px', borderRadius: 3 }}>@tool</code> decorator pattern, where the tool's code lives inside the agent's own codebase — tightly coupled, redeployed every time either side changes. An MCP server is an independent service. It runs on its own, gets called over the protocol, and can be swapped, upgraded, or pointed at by a completely different agent without anyone touching the agent's code.
        </p>

        <div style={{ margin: '0 0 16px' }}>
          <FigureLabel>Figure 3.4 — MCP architecture</FigureLabel>
          <Viz08_MCPArchitecture />
        </div>

        <PullQuote attribution={quotes.mcp.attribution}>{quotes.mcp.text}</PullQuote>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          <span style={{ fontWeight: 500 }}>Skills</span> are the other half of the modularity story. Where MCP connects an agent to tools, Skills package up modular, composable instructions that get loaded on demand — the agent reasons about which one is relevant to the task in front of it, rather than every instruction sitting permanently in context.
        </p>

        <AnalogyBox>
          A Skill-equipped agent is a doctor who knows exactly which textbook to pull off the shelf for the patient in front of them. An agent without Skills is a doctor who tried to memorise every textbook at once — slower, fuzzier, and worse at all of them simultaneously.
        </AnalogyBox>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 30px' }}>
          MCP and Skills together are why the ecosystem compounds rather than just accumulates: tools and instructions both stay swappable, both get pulled in only when relevant, and neither bloats the core agent.
        </p>

        <DataTable columns={notableFirsts.columns} rows={notableFirsts.rows} />

        <VerdictBox>
          The model family is a lesson in restraint — the most capable thing they've built (Mythos) isn't the thing they sell. The product suite is a lesson in fit — seven surfaces, each useless for the other six's job. And MCP is the actual structural bet: Anthropic open-sourced the protocol that lets every model and every tool talk to each other, knowing competitors would adopt it too. They did. That's the kind of move you only make when you're confident the ecosystem effect outweighs the head start you gave away.
        </VerdictBox>

        <FooterNav prevTo="/origin" prevLabel="Origin Story" nextTo="/market" nextLabel="Business & Market" />
      </article>
    </main>
  );
}
