import { distillationLabs } from '../data/content';

function ArrowRight({ label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none', width: 120 }}>
      <svg width="100" height="20" viewBox="0 0 100 20" style={{ flex: 'none' }}>
        <line x1="2" y1="10" x2="86" y2="10" stroke="#D85A30" strokeWidth="2" />
        <path d="M78 3 L90 10 L78 17" fill="none" stroke="#D85A30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div style={{
        fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, letterSpacing: '0.03em',
        color: 'var(--faint)', textAlign: 'center', marginTop: 2, lineHeight: 1.3,
      }}>
        {label}
      </div>
    </div>
  );
}

function Box({ title, sub, coral, minWidth = 140 }) {
  return (
    <div style={{
      background: 'var(--cell)',
      border: coral ? '1.5px solid #D85A30' : '1px solid var(--line)',
      borderRadius: 8, padding: '16px 18px', textAlign: 'center', minWidth,
      flex: 'none',
    }}>
      <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 19, color: 'var(--ink)' }}>{title}</div>
      {sub && (
        <div style={{ fontSize: 11, color: 'var(--faint)', marginTop: 6, lineHeight: 1.4 }}>{sub}</div>
      )}
    </div>
  );
}

export default function Viz13_DistillationFlow() {
  return (
    <div style={{ background: 'var(--surface)', borderRadius: 4, padding: '28px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 'none' }}>
          {distillationLabs.map((lab) => (
            <Box key={lab.name} title={lab.name} minWidth={150} />
          ))}
        </div>

        <ArrowRight label="24,000 fake accounts" />

        <Box title="Claude API" coral minWidth={150} />

        <ArrowRight label="16 million exchanges" />

        <Box title="Training data extracted" minWidth={150} />
      </div>

      <div style={{
        textAlign: 'center', fontSize: 12, color: 'var(--muted)', marginTop: 20,
        maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.5,
      }}>
        Targets: tool use, agentic coding, reasoning — Claude's differentiators.
      </div>
    </div>
  );
}
