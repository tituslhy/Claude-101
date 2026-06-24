import { decisionMatrix } from '../data/content';

export default function Viz16_DecisionMatrix() {
  const gridTemplate = `2fr ${decisionMatrix.columns.map(() => '1fr').join(' ')}`;

  return (
    <div style={{ margin: '0 0 14px' }}>
      <div style={{ border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: gridTemplate, background: 'var(--surface)',
          fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.05em',
          textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <div style={{ padding: '12px 16px' }}>If you...</div>
          {decisionMatrix.columns.map((col, i) => (
            <div key={i} style={{ padding: '12px 16px', textAlign: 'center' }}>{col}</div>
          ))}
        </div>
        {decisionMatrix.rows.map((row, ri) => (
          <div key={ri} style={{ display: 'grid', gridTemplateColumns: gridTemplate, fontSize: 14, borderTop: '1px solid var(--line2)' }}>
            <div style={{ padding: '13px 16px', fontWeight: 500, color: 'var(--ink)' }}>{row.archetype}</div>
            {row.marks.map((mark, ci) => (
              <div key={ci} style={{ padding: '13px 16px', textAlign: 'center', fontSize: 16 }}>
                {mark ? (
                  <span style={{ color: '#D85A30', fontWeight: 600 }}>✓</span>
                ) : (
                  <span style={{ color: 'var(--faint)' }}>—</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ fontSize: 12, color: 'var(--faint)', textAlign: 'center', marginTop: 12 }}>
        Titus runs: Claude Pro + Google AI Pro. The Multi-Subscription Armory Strategy.
      </div>
    </div>
  );
}
