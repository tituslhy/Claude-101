import { decisionMatrix } from '../data/content';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Viz16_DecisionMatrix() {
  const isMobile = useIsMobile(560);
  const gridTemplate = `1.6fr ${decisionMatrix.columns.map(() => '1fr').join(' ')}`;
  const minWidth = Math.max(440, (decisionMatrix.columns.length + 1) * 110);

  if (isMobile) {
    return (
      <div style={{ margin: '0 0 14px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {decisionMatrix.rows.map((row, ri) => (
            <div key={ri} style={{ border: '1px solid var(--line)', borderRadius: 4, padding: '12px 14px' }}>
              <div style={{ fontWeight: 500, color: 'var(--ink)', marginBottom: 8 }}>{row.archetype}</div>
              {decisionMatrix.columns.map((col, ci) => (
                <div key={ci} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
                  padding: '7px 0', borderTop: '1px solid var(--line2)', fontSize: 13,
                }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, letterSpacing: '0.05em',
                    textTransform: 'uppercase', color: 'var(--muted)',
                  }}>{col}</span>
                  {row.marks[ci] ? (
                    <span style={{ color: '#D85A30', fontWeight: 600, fontSize: 16 }}>✓</span>
                  ) : (
                    <span style={{ color: 'var(--faint)', fontSize: 16 }}>—</span>
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

  return (
    <div style={{ margin: '0 0 14px' }}>
      <div style={{ border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <div style={{ minWidth }}>
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
        </div>
      </div>
      <div style={{ fontSize: 12, color: 'var(--faint)', textAlign: 'center', marginTop: 12 }}>
        Titus runs: Claude Pro + Google AI Pro. The Multi-Subscription Armory Strategy.
      </div>
    </div>
  );
}
