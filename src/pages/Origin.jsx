import { AnalogyBox, StatGrid, HighlightBox, PullQuote, DataTable, VerdictBox, SectionDivider, FigureLabel, ChapterHeader, FooterNav, FullBleed } from '../components';
import Viz03_FoundingTimeline from '../viz/Viz03_FoundingTimeline';
import Viz04_FundingComparison from '../viz/Viz04_FundingComparison';
import Viz05_LTBTGovernance from '../viz/Viz05_LTBTGovernance';
import { foundingStats, backers, quotes } from '../data/content';

const backerColumns = [
  { key: 'name', label: 'Backer', width: '1.3fr' },
  { key: 'commit', label: 'Commitment' },
  { key: 'rights', label: 'Control rights', width: '1.3fr' },
];

export default function Origin() {
  return (
    <main style={{ position: 'relative' }}>
      <ChapterHeader
        ghost="01"
        tag="01–02 · Chapter One"
        title="Origin"
        italicWord="Story"
        subtitle="How a safety-first breakaway from OpenAI became a $965B company — and why control, not cash, is the thing to watch."
      />

      <article style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto', padding: 'var(--pad-44) var(--gutter) 0' }}>
        <SectionDivider number="01" title="The Breakaway" marginTop="0" />

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          <span style={{ float: 'left', fontFamily: "'Instrument Serif',serif", fontSize: 'var(--dropcap)', lineHeight: 0.72, color: '#D85A30', padding: '6px 14px 0 0' }}>I</span>
          n 2021, a group of senior OpenAI researchers — led by siblings Dario and Daniela Amodei — left to found Anthropic. The disagreement wasn't technical. It was about <span style={{ fontWeight: 500 }}>how seriously to take the risk</span> of the thing they were building.
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          Dario was VP of Research at OpenAI, with a PhD in computational neuroscience from Princeton — the kind of researcher who thinks about AI risk the way a structural engineer thinks about earthquake-proofing. Daniela was VP of Operations, the counterweight who also needed a finance team and a go-to-market strategy. And then 11 senior researchers walked out with them. Not junior devs, not interns — senior researchers who knew exactly what they were leaving behind.
        </p>

        <AnalogyBox>
          Think of Anthropic as the engineers who quit the car company because management wanted to ship before the brakes were tested. They didn't hate cars. They wanted to build the brakes first — then discovered the brakes were a product people would pay for.
        </AnalogyBox>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 30px' }}>
          The bet looked quixotic in 2021. By 2026 it looks like the most disciplined capital story in the industry. Here is the shape of it.
        </p>

        <StatGrid stats={foundingStats} columns={3} />
      </article>

      <FullBleed>
        <FigureLabel>Figure 1.1 — Founding timeline</FigureLabel>
        <Viz03_FoundingTimeline />
      </FullBleed>

      <article style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto', padding: '0 var(--gutter) 0' }}>
        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          Before Constitutional AI, the standard approach was RLHF — Reinforcement Learning from Human Feedback. Show the model outputs, humans rate them, the model learns what humans prefer. It works. It's also like training a student exclusively through 10,000 strangers grading their homework. <span style={{ fontWeight: 500 }}>Constitutional AI gives the model a set of explicit principles, then has it critique and revise its own outputs against those principles</span> — be helpful, be harmless, be honest, don't deceive, don't assist with serious harm, respect human autonomy.
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 30px' }}>
          Why <em>Claude</em>? Anthropic has never officially explained it. The leading theory: a nod to Claude Shannon, the father of information theory. Either deeply humble or deeply nerdy. Probably both.
        </p>

        <SectionDivider number="02" title="Whose Money, Whose Control" />

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 26px' }}>
          Anthropic took enormous sums from Amazon and Google. The structure was engineered so that <span style={{ fontWeight: 500 }}>capital bought equity, not steering</span>. The board, not the cheque-writers, holds the wheel.
        </p>

        <HighlightBox title="💡 Money flowed in. Control did not flow out.">
          Amazon and Google both hold non-voting equity; Google's stake is contractually capped at 15%. The Long-Term Benefit Trust keeps veto power over the board — the safety mission is structurally protected from its own investors.
        </HighlightBox>

        <DataTable columns={backerColumns} rows={backers} />

        <div style={{ margin: '0 0 16px' }}>
          <FigureLabel>Figure 1.2 — Funding comparison</FigureLabel>
          <Viz04_FundingComparison />
        </div>

        <PullQuote attribution={quotes.origin2.attribution}>{quotes.origin2.text}</PullQuote>

        <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 22px' }}>
          The Long-Term Benefit Trust is a governance body holding special voting rights over Anthropic's board, composed of financially disinterested trustees focused on AI safety and public benefit. No investor can override it. Amazon could write a $200B cheque tomorrow — they'd get more non-voting preferred stock and zero additional control.
        </p>

        <div style={{ margin: '0 0 36px' }}>
          <FigureLabel>Figure 1.3 — LTBT governance</FigureLabel>
          <Viz05_LTBTGovernance />
        </div>

        <PullQuote attribution={quotes.ltbt.attribution}>{quotes.ltbt.text}</PullQuote>

        <VerdictBox>
          Anthropic's governance is its real moat. Competitors can buy compute and hire researchers, but a structural commitment to keep safety above shareholders is hard to copy without meaning it. Whether it survives contact with a $965B valuation is the open question of the next two years.
        </VerdictBox>

        <FooterNav prevTo="/" prevLabel="Start" nextTo="/models" nextLabel="Models & Products" />
      </article>
    </main>
  );
}
