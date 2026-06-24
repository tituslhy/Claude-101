import { HighlightBox, PullQuote, DataTable, VerdictBox, SectionDivider, FigureLabel, ChapterHeader, FooterNav, FullBleed } from '../components';
import Viz14_FeatureComparisonTable from '../viz/Viz14_FeatureComparisonTable';
import Viz16_DecisionMatrix from '../viz/Viz16_DecisionMatrix';
import Viz17_ClaudeVsChatGPTRadar from '../viz/Viz17_ClaudeVsChatGPTRadar';
import { claudeStrengths, claudeWeaknesses, whoNeedsWhat, benchmarkGlossary, quotes } from '../data/content';

export default function Verdict() {
  return (
    <main style={{ position: 'relative' }}>
      <ChapterHeader
        ghost="09"
        tag="09–11 · Chapter Four"
        title="The"
        italicWord="Verdict"
        subtitle="Full feature comparison, head-to-head scorecards, the decision matrix, and the Claude-vs-ChatGPT radar."
      />

      <article style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto', padding: 'var(--pad-44) var(--gutter) 0' }}>
        <SectionDivider number="09" title="What Claude Does Better Than Anyone" marginTop="0" />

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          <span style={{ float: 'left', fontFamily: "'Instrument Serif',serif", fontSize: 'var(--dropcap)', lineHeight: 0.72, color: '#D85A30', padding: '6px 14px 0 0' }}>A</span>
          fter everything — the benchmarks, the outages, the subscription tiers — there is a shorter list that actually matters: the things Claude does that nothing else quite does. Not marginally better. Structurally different.
        </p>

        {claudeStrengths.map((s, i) => (
          <HighlightBox key={i} title={s.title}>{s.detail}</HighlightBox>
        ))}

        <SectionDivider number="10" title="What Claude Gets Wrong" />

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 26px', fontStyle: 'italic', color: 'var(--muted)' }}>
          A note before this section: the strengths above are largely consensus across reviewers and benchmarks. What follows is predominantly Titus's own opinion, formed from daily use — not a neutral industry scorecard.
        </p>

        {claudeWeaknesses.map((w, i) => (
          <HighlightBox key={i} title={w.title}>{w.detail}</HighlightBox>
        ))}

        <PullQuote attribution={quotes.outages.attribution}>{quotes.outages.text}</PullQuote>

        <SectionDivider number="11" title="The Feature Comparison & Verdict" />

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          Forty-three features, seven categories, five products, scored from lived use rather than marketing copy. N/A means the product genuinely doesn't compete in that lane — not that it scored zero. Filter by category to see where each product actually wins.
        </p>
      </article>

      <FullBleed maxWidth={1100}>
        <FigureLabel>Figure 11.1 — Feature comparison: Perplexity, Gemini, Cursor, ChatGPT, Claude</FigureLabel>
        <Viz14_FeatureComparisonTable />
      </FullBleed>

      <article style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto', padding: '0 var(--gutter) 0' }}>
        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '30px 0 30px' }}>
          None of that is a clean sweep for anyone. Claude leads on writing, reasoning, sycophancy resistance, MCP, and enterprise trust — and trails badly on free tier, media generation, and uptime. It's a map of trade-offs. Which is exactly why the decision depends on who's asking.
        </p>

        <DataTable columns={whoNeedsWhat.columns} rows={whoNeedsWhat.rows} />

        <div style={{ margin: '0 0 16px' }}>
          <FigureLabel>Figure 11.2 — Decision matrix</FigureLabel>
          <Viz16_DecisionMatrix />
        </div>

        <PullQuote attribution={quotes.armory.attribution}>{quotes.armory.text}</PullQuote>

        <div style={{ margin: '0 0 16px' }}>
          <FigureLabel>Figure 11.3 — Claude vs ChatGPT</FigureLabel>
          <Viz17_ClaudeVsChatGPTRadar />
        </div>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '30px 0 22px' }}>
          <span style={{ fontWeight: 500 }}>The Final Word.</span> Claude isn't the most popular AI — that's ChatGPT. It isn't the most integrated into daily software — that's Gemini. It isn't the best coding IDE — that's Cursor. It doesn't generate images or video. It has outages, sometimes two in a single day. Its free tier is stingy compared to the alternatives.
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 30px' }}>
          And yet. It's the AI that tells you when you're wrong. It pushes back rather than validating whatever you typed. It writes like a person, not a committee. It invented the protocol — MCP — that the rest of the industry now runs on. And when asked to build surveillance tooling for the Department of Defense, it said no.
        </p>

        <VerdictBox>
          For practitioners who write, think, code, and build for a living — Claude is the closest thing to a thinking partner that AI has produced. Not because it's the strongest on every benchmark. Because of the feel of working with it. The benchmarks measure what the model knows. The feel reveals what it's for.
        </VerdictBox>

        <PullQuote attribution={quotes.final.attribution}>{quotes.final.text}</PullQuote>

        <SectionDivider number="—" title="Appendix — Benchmark Glossary" />

        <p style={{ fontSize: 15, lineHeight: 1.7, margin: '0 0 22px', color: 'var(--muted)' }}>
          Every benchmark cited across this dossier, with what it actually measures and where it can mislead.
        </p>

        <DataTable columns={benchmarkGlossary.columns} rows={benchmarkGlossary.rows} />

        <FooterNav prevTo="/market" prevLabel="Business & Market" />
      </article>
    </main>
  );
}
