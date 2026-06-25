import { useIsMobile } from '../hooks/useIsMobile';

export default function DataTable({ columns, rows, highlightColumn }) {
  const isMobile = useIsMobile(560);
  const gridTemplate = columns.map((c) => c.width || '1fr').join(' ');
  const minWidth = Math.max(420, columns.length * 140);

  if (isMobile) {
    const [titleCol, ...restCols] = columns;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '0 0 30px' }}>
        {rows.map((row, ri) => (
          <div key={ri} style={{ border: '1px solid var(--line)', borderRadius: 4, padding: '12px 14px' }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: restCols.length ? 8 : 0 }}>
              {row[titleCol.key]}
            </div>
            {restCols.map((c) => {
              const isHighlight = row.highlight === c.key || (highlightColumn && c.key === highlightColumn && row.highlightValue);
              return (
                <div key={c.key} style={{
                  padding: '7px 0', borderTop: '1px solid var(--line2)',
                  ...(isHighlight ? { background: 'var(--fill)', color: 'var(--fillInk)', margin: '0 -14px', padding: '7px 14px' } : {}),
                }}>
                  <div style={{
                    fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: '0.05em',
                    textTransform: 'uppercase', color: isHighlight ? 'var(--fillInk)' : 'var(--muted)',
                  }}>{c.label}</div>
                  <div style={{ fontSize: 13.5, marginTop: 2, color: isHighlight ? 'var(--fillInk)' : 'var(--muted)' }}>{row[c.key]}</div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden', margin: '0 0 30px' }}>
      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth }}>
          <div style={{
            display: 'grid', gridTemplateColumns: gridTemplate, background: 'var(--surface)',
            fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.05em',
            textTransform: 'uppercase', color: 'var(--muted)',
          }}>
            {columns.map((c, i) => (
              <div key={i} style={{ padding: '12px 16px' }}>{c.label}</div>
            ))}
          </div>
          {rows.map((row, ri) => (
            <div key={ri} style={{ display: 'grid', gridTemplateColumns: gridTemplate, fontSize: 14, borderTop: '1px solid var(--line2)' }}>
              {columns.map((c, ci) => {
                const isHighlight = row.highlight === c.key || (highlightColumn && c.key === highlightColumn && row.highlightValue);
                const cellStyle = {
                  padding: '13px 16px',
                  fontWeight: ci === 0 ? 500 : 400,
                  color: ci === 0 ? 'var(--ink)' : 'var(--muted)',
                  ...(isHighlight ? { background: 'var(--fill)', color: 'var(--fillInk)', fontWeight: 500 } : {}),
                };
                return <div key={c.key} style={cellStyle}>{row[c.key]}</div>;
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
