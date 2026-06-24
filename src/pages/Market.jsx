import { AnalogyBox, StatGrid, HighlightBox, PullQuote, DataTable, VerdictBox, SectionDivider, FigureLabel, ChapterHeader, FooterNav, FullBleed } from '../components';
import Viz10_RevenueGrowth from '../viz/Viz10_RevenueGrowth';
import Viz11_SpaceXTimeline from '../viz/Viz11_SpaceXTimeline';
import Viz12_MarketShareDonut from '../viz/Viz12_MarketShareDonut';
import Viz13_DistillationFlow from '../viz/Viz13_DistillationFlow';
import { subscriptionTiers, distillationLabs, exportControlTimeline, quotes } from '../data/content';

const distillationColumns = [
  { key: 'name', label: 'Lab', width: '1fr' },
  { key: 'exchanges', label: 'Exchanges' },
  { key: 'focus', label: 'Focus', width: '2fr' },
];

export default function Market() {
  return (
    <main style={{ position: 'relative' }}>
      <ChapterHeader
        ghost="06"
        tag="06–08 · Chapter Three"
        title="Business &"
        italicWord="Market"
        subtitle="Revenue trajectory, the SpaceX compute deal, market share, the distillation attacks, and the infrastructure bet."
      />

      <article style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto', padding: '44px 40px 0' }}>
        <SectionDivider number="06" title="The Money" marginTop="0" />

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          <span style={{ float: 'left', fontFamily: "'Instrument Serif',serif", fontSize: 78, lineHeight: 0.72, color: '#D85A30', padding: '6px 14px 0 0' }}>$</span>
          965 billion valuation in May 2026, for a company founded in 2021 by researchers who left because they were scared. Five years later: approaching a trillion-dollar valuation, suing the Pentagon, and filing for an IPO.
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          <span style={{ fontWeight: 500 }}>Revenue</span> went from roughly $1B ARR in 2024 to a $47B annualised run rate in mid-2026. That's the 80x quarterly growth Dario Amodei publicly admitted to in Q1 2026. The SpaceX data centre deal at $15B/year only makes sense against a $47B revenue base — the compute spend is still enormous, but the denominator is no longer "tiny safety lab."
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 30px' }}>
          <span style={{ fontWeight: 500 }}>The IPO:</span> Anthropic filed confidentially with the SEC on June 1, 2026. Target debut: fall 2026. Expected valuation at IPO: $1 trillion or higher. SpaceX's June 2026 IPO was the biggest in history at $75B raised. OpenAI is also filing. The AI IPO summer of 2026 is shaping up to be one of the most extraordinary market events in recent memory.
        </p>

        <div style={{ margin: '0 0 38px' }}>
          <FigureLabel>Figure 6.1 — Revenue growth</FigureLabel>
          <Viz10_RevenueGrowth />
        </div>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          The subscription ladder is where that revenue actually gets collected, one human at a time:
        </p>

        <DataTable columns={subscriptionTiers.columns} rows={subscriptionTiers.rows} />

        <SectionDivider number="07" title="The SpaceX Deal, The Pentagon Fight, and the Recall" />

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          Anthropic signed an agreement with SpaceX for all compute capacity at their Colossus 1 data centre — over <span style={{ fontWeight: 500 }}>300 megawatts, 220,000+ Nvidia GPUs</span>. The price: $1.25 billion per month through May 2029. $15 billion per year. SpaceX's total annual revenue is only around $18 billion — Anthropic is paying SpaceX nearly its entire annual revenue, just for compute.
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          The concrete changes that followed: Claude Code's 5-hour rate limits doubled for Pro, Max and Team. Peak-hour usage cap reductions removed for Pro and Max. Opus API input token rate limit jumped from 30,000 to roughly 500,000 tokens per minute — a 16x increase.
        </p>

        <AnalogyBox>
          Elon Musk spent years calling Anthropic an "OpenAI clone." After the compute deal, he met the staff and came away "impressed" — "everyone I met was highly competent and cared a great deal about doing the right thing." Money is a remarkable attitude adjuster.
        </AnalogyBox>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 30px' }}>
          Then, three days after the compute deal, SpaceX announced it was acquiring Cursor for $60 billion — the largest acquisition of a venture-backed startup ever. Cursor was Claude Code's main competitor, and it was paying retail Claude API prices while competing against Claude Code, which ran on wholesale economics. Cursor had been caught in a margin trap set by its own supplier.
        </p>

      </article>

      <FullBleed>
        <FigureLabel>Figure 7.1 — SpaceX deal timeline</FigureLabel>
        <Viz11_SpaceXTimeline />
      </FullBleed>

      <article style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto', padding: '0 40px 0' }}>
        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '30px 0 30px' }}>
          Anthropic rents compute from SpaceX's data centre. SpaceX acquires Claude Code's main competitor. SpaceX's Cursor will likely switch from Claude API to xAI's Grok. SpaceX holds 90-day termination clauses on the compute deal. This relationship is simultaneously strategic partnership, infrastructure dependency, competitive threat, and the most expensive bromance in Silicon Valley.
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 18px', fontWeight: 500 }}>
          The Pentagon fight, compressed into the most dramatic three months in Anthropic's history:
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          July 2025: DOD awards Anthropic up to $200M; Claude becomes the Department's most widely deployed frontier AI model. But the DOD wanted Claude for "all lawful purposes," while Anthropic held two hard red lines — no autonomous weapons, no domestic mass surveillance. The DOD's chief technology officer put it bluntly: a company with "a different policy preference baked into the model" risks polluting "the supply chain so our warfighters are getting ineffective weapons." Translation: your ethics are a product defect. Anthropic said no.
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          February 2026: the DOD designates Anthropic a supply-chain risk to national security — a label previously reserved for companies tied to foreign adversaries. Trump directs federal agencies to immediately stop using Anthropic's technology. March 2026: Anthropic sues the DOD. The California judge calls the designation "Orwellian," ruling that punishing Anthropic for its public stance is "classic illegal First Amendment retaliation." Researchers at rival labs — OpenAI, Google DeepMind — file amicus briefs in their personal capacities backing Anthropic. Result: a California injunction granted, a DC Circuit stay denied, litigation ongoing.
        </p>

        <VerdictBox tag="💡 The honest take">
          This is the RSP being tested in real life. Saying no to the Pentagon and then getting designated a national security risk AND suing back is not a marketing move. That costs real money and real customers. The safety mission held.
        </VerdictBox>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 18px', fontWeight: 500 }}>
          The Fable 5 recall:
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          Fable 5 launched June 9, 2026. Three days later, on June 12, the US government issued an export control directive over a jailbreak concern Anthropic called "narrow" and "minor" — discoverable on other public models without any bypass needed. Anthropic complied while disagreeing on the record. A WSJ report indicated Amazon CEO Andy Jassy's conversations with US officials may have contributed to the recall — Anthropic's biggest investor and cloud partner apparently helped get its own model pulled. As of June 24, 2026, subscription access requires usage credits; API access has been restored.
        </p>

        <SectionDivider number="08" title="The China Question" />

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          Three Chinese labs — DeepSeek, Moonshot AI, and MiniMax — ran what Anthropic calls "distillation attacks" on Claude's API: flooding it with crafted prompts to extract training data for their own models. The scale: <span style={{ fontWeight: 500 }}>16 million exchanges from roughly 24,000 fraudulently created accounts</span>. MiniMax pivoted within 24 hours of new Claude releases, redirecting nearly half its traffic to capture the latest capabilities — organised, adaptive, real-time intelligence extraction, not opportunistic scraping.
        </p>

        <DataTable columns={distillationColumns} rows={distillationLabs} />
      </article>

      <FullBleed>
        <FigureLabel>Figure 8.1 — Distillation attack flow</FigureLabel>
        <Viz13_DistillationFlow />
      </FullBleed>

      <article style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto', padding: '0 40px 0' }}>
        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          The honest complication: these were paying customers violating Anthropic's Terms of Service, not hackers who breached a system. They didn't steal weights or access anything they weren't technically permitted to touch — they violated the ToS prohibition against using outputs to train competing models. That's real. But "attack" is Anthropic's framing. The more neutral version: <span style={{ fontWeight: 500 }}>systematic ToS violation at industrial scale</span>. Meaningfully different.
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 26px' }}>
          The glass house problem: Anthropic itself settled a $1.5 billion lawsuit in September 2025, paying authors around $3,000 per book for roughly 500,000 works — allegations it downloaded books in bulk from shadow libraries to train Claude. How the turn tables.
        </p>

        <PullQuote attribution={quotes.china.attribution}>{quotes.china.text}</PullQuote>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          The distillation story has a punchline: MiniMax M3, one of the accused labs, now matches GPT-5.5 on SWE-bench Pro at 1/25th the output cost — if they distilled Claude's capabilities, they did a decent job. More importantly, GLM-5 (Zhipu AI) trained entirely on 100,000 Huawei Ascend 910B chips, no US-manufactured hardware at all. Export controls on Nvidia chips to China were supposed to slow Chinese AI development. They accidentally accelerated Chinese domestic chip capability while barely slowing model development — a policy own-goal of historic proportions.
        </p>

        <div style={{ margin: '0 0 16px' }}>
          <FigureLabel>Figure 8.2 — AI assistant market share</FigureLabel>
          <Viz12_MarketShareDonut />
        </div>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '30px 0 18px', fontWeight: 500 }}>
          The US export control timeline is its own comedy:
        </p>

        <div style={{ border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden', margin: '0 0 30px' }}>
          {exportControlTimeline.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'grid', gridTemplateColumns: '140px 1fr', fontSize: 14,
                borderTop: i === 0 ? 'none' : '1px solid var(--line2)',
              }}
            >
              <div style={{
                padding: '12px 16px', fontFamily: "'JetBrains Mono',monospace", fontSize: 12,
                color: '#D85A30', fontWeight: 500,
              }}>
                {item.date}
              </div>
              <div style={{ padding: '12px 16px 12px 0', color: 'var(--muted)' }}>{item.event}</div>
            </div>
          ))}
        </div>

        <VerdictBox>
          Both sides are pivoting away from each other simultaneously. The chip wars may be self-resolving through mutual decoupling rather than policy enforcement.
        </VerdictBox>

        <FooterNav prevTo="/models" prevLabel="Models & Products" nextTo="/verdict" nextLabel="The Verdict" />
      </article>
    </main>
  );
}
