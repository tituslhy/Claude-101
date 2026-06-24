import { AnalogyBox, StatGrid, HighlightBox, PullQuote, DataTable, VerdictBox, SectionDivider, VizPlaceholder } from '../components';

const sampleStats = [
  { value: '80.3', label: 'SWE-bench' },
  { value: '5', label: 'Tiers' },
  { value: '10.3', label: 'Market %' },
];

const sampleColumns = [
  { key: 'model', label: 'Model', width: '1.5fr' },
  { key: 'swe', label: 'SWE-bench' },
  { key: 'tier', label: 'Tier' },
  { key: 'verdict', label: 'Verdict' },
];

const sampleRows = [
  { model: 'Fable 5', swe: '80.3%', tier: 'Public', verdict: 'Winner', highlight: 'verdict' },
  { model: 'Opus 4.8', swe: '69.2%', tier: 'Public', verdict: 'Strong' },
];

function Block({ n, title, children, span }) {
  return (
    <div style={{ gridColumn: span ? 'span 2' : undefined }}>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: 13 }}>
        {n} · {title}
      </div>
      {children}
    </div>
  );
}

export default function ComponentsPage() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: 'var(--pad-72) var(--gutter) 90px' }}>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fillLabel)', marginBottom: 22 }}>
        Reference · For Claude Code
      </div>
      <h2 className="stretch" style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontSize: 'clamp(48px,7vw,80px)', lineHeight: 0.98, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
        Component <span style={{ fontStyle: 'italic', color: '#D85A30' }}>Library</span>
      </h2>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--muted)', margin: '0 0 44px', maxWidth: 600 }}>
        Every reusable block, in one place.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '30px 34px' }}>
        <Block n="01" title="Analogy box">
          <AnalogyBox>Fill defines it — no border. Mono tag, serif body on a #FAECE7 ground.</AnalogyBox>
        </Block>

        <Block n="02" title="Stat grid">
          <StatGrid stats={sampleStats} columns={3} />
        </Block>

        <Block n="03" title="Highlight / insight">
          <HighlightBox title="💡 Key insight">Coral square accent, title in ink, body muted.</HighlightBox>
        </Block>

        <Block n="04" title="Titus pull-quote">
          <PullQuote>Border only, no fill. Oversized serif italic, mono attribution.</PullQuote>
        </Block>

        <Block n="05" title="Data table" span>
          <DataTable columns={sampleColumns} rows={sampleRows} />
        </Block>

        <Block n="06" title="Verdict / call-out">
          <VerdictBox>Thin border, paper ground, coral mono tag. Holds the big point.</VerdictBox>
        </Block>

        <Block n="07" title="Section divider">
          <SectionDivider number="02" title="Whose Money, Whose Control" marginTop="0" />
        </Block>

        <Block n="08" title="Visualization placeholder" span>
          <VizPlaceholder label="Type & description" description="Dashed #D3C8BC on #F4F1EA · Figure N.N caption · sized to its chart" height={120} />
        </Block>
      </div>
    </main>
  );
}
