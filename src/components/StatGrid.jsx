export default function StatGrid({ stats }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(min(150px, 100%), 1fr))`, gap: 1,
      background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 4,
      overflow: 'hidden', margin: '0 0 34px',
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{ background: 'var(--cell)', padding: '22px 20px' }}>
          <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 42, color: '#D85A30', lineHeight: 1 }}>{s.value}</div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--faint)', marginTop: 10 }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
