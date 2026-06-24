const STEPS = [
  { name: 'Claude Chat', sub: 'Think' },
  { name: 'Claude Design', sub: 'Visualize' },
  { name: 'Claude Code', sub: 'Ship' },
];

function Arrow() {
  return (
    <svg width="56" height="24" viewBox="0 0 56 24" style={{ flex: 'none' }}>
      <line x1="2" y1="12" x2="48" y2="12" stroke="#D85A30" strokeWidth="2" />
      <path d="M40 4 L50 12 L40 20" fill="none" stroke="#D85A30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Viz02_ClaudeStack() {
  return (
    <div style={{ background: 'var(--surface)', borderRadius: 4, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 32px', gap: 8 }}>
      {STEPS.map((s, i) => (
        <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            background: 'var(--cell)', border: '1px solid var(--line)', borderRadius: 8,
            padding: '22px 28px', textAlign: 'center', minWidth: 160,
          }}>
            <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 24, color: 'var(--ink)' }}>{s.name}</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D85A30', marginTop: 8 }}>
              {s.sub}
            </div>
          </div>
          {i < STEPS.length - 1 && <Arrow />}
        </div>
      ))}
    </div>
  );
}
