import { useMemo, useState } from 'react';
import { products, featureRows, categories, NA } from '../data/featureComparison';
import { useIsMobile } from '../hooks/useIsMobile';

const SCORE_BANDS = [
  { min: 10, bg: '#C0DD97', fg: '#27500A' },
  { min: 9.5, bg: '#D5E8B4', fg: '#1D6B0F' },
  { min: 9, bg: '#D5E8B4', fg: '#3B6D11' },
  { min: 8.5, bg: '#C8EEDF', fg: '#0A5E48' },
  { min: 8, bg: '#E1F5EE', fg: '#0F6E56' },
  { min: 7, bg: '#E6F1FB', fg: '#185FA5' },
  { min: 6.5, bg: '#E8E7FE', fg: '#4A41C0' },
  { min: 6, bg: '#EEEDFE', fg: '#534AB7' },
  { min: 5, bg: '#FAEEDA', fg: '#854F0B' },
  { min: 4, bg: '#FAF0DC', fg: '#BA7517' },
  { min: 0, bg: '#FCEBEB', fg: '#A32D2D' },
];

function scoreStyle(s) {
  if (s === NA) return { background: 'var(--surface)', color: 'var(--faint)', border: '1px solid var(--line2)' };
  const band = SCORE_BANDS.find((b) => s >= b.min);
  return { background: band.bg, color: band.fg };
}

function fmt(s) {
  if (s === NA) return '—';
  return Number.isInteger(s) ? String(s) : s.toFixed(1);
}

function Pip({ s }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 30, height: 30, borderRadius: '50%', fontSize: 11, fontWeight: 500,
      fontFamily: "'JetBrains Mono',monospace", ...scoreStyle(s),
    }}>
      {fmt(s)}
    </span>
  );
}

export default function Viz14_FeatureComparisonTable() {
  const isMobile = useIsMobile(640);
  const [active, setActive] = useState('all');

  const rows = useMemo(
    () => (active === 'all' ? featureRows : featureRows.filter((r) => r.cat === active)),
    [active]
  );

  const { totals, counts, avgs } = useMemo(() => {
    const totals = [0, 0, 0, 0, 0];
    const counts = [0, 0, 0, 0, 0];
    rows.forEach((r) => {
      r.sc.forEach((s, i) => {
        if (s !== NA) { totals[i] += s; counts[i]++; }
      });
    });
    const avgs = totals.map((t, i) => (counts[i] ? Math.round((t / counts[i]) * 10) / 10 : 0));
    return { totals: totals.map((t) => Math.round(t * 10) / 10), counts, avgs };
  }, [rows]);

  const maxTotal = Math.max(...totals);
  const maxAvg = Math.max(...avgs);

  let lastCat = null;

  const chipBase = {
    fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.04em', textTransform: 'uppercase',
    padding: '6px 13px', borderRadius: 999, cursor: 'pointer', border: '1px solid var(--line)', color: 'var(--faint)',
    background: 'transparent',
  };
  const chipActive = { ...chipBase, border: '1px solid #D85A30', color: '#D85A30', background: 'var(--fill)' };

  return (
    <div>
      <div style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--muted)', background: 'var(--surface)', borderRadius: 4, padding: '12px 16px', marginBottom: 16 }}>
        Scores incorporate Titus's corrections from lived experience. N/A = product genuinely doesn't have this feature (not scored as 0). Half-point scores shown where warranted.
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
        <button style={active === 'all' ? chipActive : chipBase} onClick={() => setActive('all')}>All features</button>
        {categories.map((c) => (
          <button key={c} style={active === c ? chipActive : chipBase} onClick={() => setActive(c)}>{c}</button>
        ))}
      </div>

      {isMobile ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {rows.map((r, i) => {
            const showCat = r.cat !== lastCat;
            lastCat = r.cat;
            return (
              <div key={i}>
                {showCat && (
                  <div style={{
                    fontSize: 10, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase',
                    color: 'var(--faint)', padding: '10px 2px 6px',
                  }}>{r.cat}</div>
                )}
                <div style={{ border: '1px solid var(--line)', borderRadius: 4, padding: '12px 14px' }}>
                  <div style={{ fontWeight: 500, color: 'var(--ink)' }}>{r.feat}</div>
                  <div style={{ fontSize: 11, color: 'var(--faint)', marginTop: 2 }}>{r.sub}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, margin: '10px 0' }}>
                    {products.map((p, pi) => (
                      <div key={p} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                        <span style={{
                          fontSize: 9.5, fontFamily: "'JetBrains Mono',monospace", textTransform: 'uppercase',
                          color: p === 'Claude' ? '#D85A30' : 'var(--muted)',
                        }}>{p}</span>
                        <Pip s={r.sc[pi]} />
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: 11.5, lineHeight: 1.5, color: 'var(--muted)' }}>{r.cm}</div>
                </div>
              </div>
            );
          })}

          <div style={{ border: '1px solid var(--lineStrong)', borderRadius: 4, padding: '12px 14px' }}>
            <div style={{ fontWeight: 500 }}>
              Total score
              <small style={{ display: 'block', fontSize: 10, color: 'var(--faint)', fontWeight: 400, marginTop: 2 }}>Sum of all rated features</small>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, margin: '10px 0' }}>
              {totals.map((t, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <span style={{ fontSize: 9.5, fontFamily: "'JetBrains Mono',monospace", textTransform: 'uppercase', color: 'var(--muted)' }}>{products[i]}</span>
                  <span style={{
                    fontFamily: "'Instrument Serif',serif", fontSize: 18,
                    ...(t === maxTotal ? { background: 'var(--fill)', color: 'var(--fillInk)' } : { color: 'var(--ink)' }),
                    borderRadius: 6, padding: '2px 10px', display: 'inline-block',
                  }}>{t}</span>
                  <span style={{ fontSize: 10, color: 'var(--faint)', fontFamily: "'JetBrains Mono',monospace" }}>{counts[i]} features</span>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11, color: 'var(--faint)' }}>
              N/A features excluded from total — a product that does fewer things well shouldn't be penalised for choosing its lane.
            </div>
          </div>

          <div style={{ border: '1px solid var(--line)', borderRadius: 4, padding: '12px 14px' }}>
            <div style={{ fontWeight: 500 }}>
              Quality average
              <small style={{ display: 'block', fontSize: 10, color: 'var(--faint)', fontWeight: 400, marginTop: 2 }}>Score ÷ features rated</small>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, margin: '10px 0' }}>
              {avgs.map((a, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <span style={{ fontSize: 9.5, fontFamily: "'JetBrains Mono',monospace", textTransform: 'uppercase', color: 'var(--muted)' }}>{products[i]}</span>
                  <span style={{
                    fontFamily: "'Instrument Serif',serif", fontSize: 18,
                    ...(a === maxAvg && a > 0 ? { background: 'var(--fill)', color: 'var(--fillInk)' } : { color: 'var(--ink)' }),
                    borderRadius: 6, padding: '2px 10px', display: 'inline-block',
                  }}>{a.toFixed(1)}</span>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11, color: 'var(--faint)' }}>
              How good each product is at what it actually does. Cursor scores high here — it does fewer things but executes with surgical precision.
            </div>
          </div>
        </div>
      ) : (
      <div style={{ overflowX: 'auto', border: '1px solid var(--line)', borderRadius: 4 }}>
        <table style={{ width: '100%', minWidth: 980, borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', width: 170, padding: '11px 12px', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, textTransform: 'uppercase', color: 'var(--muted)', background: 'var(--surface)', borderBottom: '1px solid var(--line)' }}>Feature</th>
              {products.map((p) => (
                <th key={p} style={{
                  textAlign: 'center', padding: '11px 8px', whiteSpace: 'nowrap',
                  fontFamily: "'JetBrains Mono',monospace", fontSize: 11, textTransform: 'uppercase',
                  color: p === 'Claude' ? '#D85A30' : 'var(--muted)', background: 'var(--surface)', borderBottom: '1px solid var(--line)',
                }}>{p}</th>
              ))}
              <th style={{ textAlign: 'left', minWidth: 230, padding: '11px 12px', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, textTransform: 'uppercase', color: 'var(--muted)', background: 'var(--surface)', borderBottom: '1px solid var(--line)' }}>Honest verdict</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => {
              const showCat = r.cat !== lastCat;
              lastCat = r.cat;
              return (
                <FragmentRow key={i} r={r} showCat={showCat} />
              );
            })}

            <tr>
              <td style={{ padding: '13px 12px', borderTop: '1px solid var(--lineStrong)', fontWeight: 500 }}>
                Total score
                <small style={{ display: 'block', fontSize: 10, color: 'var(--faint)', fontWeight: 400, marginTop: 2 }}>Sum of all rated features</small>
              </td>
              {totals.map((t, i) => (
                <td key={i} style={{ padding: '13px 8px', borderTop: '1px solid var(--lineStrong)', textAlign: 'center' }}>
                  <span style={{
                    fontFamily: "'Instrument Serif',serif", fontSize: 18,
                    ...(t === maxTotal ? { background: 'var(--fill)', color: 'var(--fillInk)' } : { color: 'var(--ink)' }),
                    borderRadius: 6, padding: '2px 10px', display: 'inline-block',
                  }}>
                    {t}
                  </span>
                  <br />
                  <span style={{ fontSize: 10, color: 'var(--faint)', fontFamily: "'JetBrains Mono',monospace" }}>{counts[i]} features</span>
                </td>
              ))}
              <td style={{ padding: '13px 12px', borderTop: '1px solid var(--lineStrong)', fontSize: 11, color: 'var(--faint)' }}>
                N/A features excluded from total — a product that does fewer things well shouldn't be penalised for choosing its lane.
              </td>
            </tr>
            <tr>
              <td style={{ padding: '13px 12px', fontWeight: 500 }}>
                Quality average
                <small style={{ display: 'block', fontSize: 10, color: 'var(--faint)', fontWeight: 400, marginTop: 2 }}>Score ÷ features rated</small>
              </td>
              {avgs.map((a, i) => (
                <td key={i} style={{ padding: '13px 8px', textAlign: 'center' }}>
                  <span style={{
                    fontFamily: "'Instrument Serif',serif", fontSize: 18,
                    ...(a === maxAvg && a > 0 ? { background: 'var(--fill)', color: 'var(--fillInk)' } : { color: 'var(--ink)' }),
                    borderRadius: 6, padding: '2px 10px', display: 'inline-block',
                  }}>
                    {a.toFixed(1)}
                  </span>
                </td>
              ))}
              <td style={{ padding: '13px 12px', fontSize: 11, color: 'var(--faint)' }}>
                How good each product is at what it actually does. Cursor scores high here — it does fewer things but executes with surgical precision.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      )}

      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--line2)' }}>
        {[
          ['#C0DD97', '10 Best in class'],
          ['#D5E8B4', '9–9.5 Exceptional'],
          ['#E1F5EE', '7–8.5 Strong'],
          ['#EEEDFE', '6–6.5 Good'],
          ['#FAEEDA', '4–5 Average'],
          ['#FCEBEB', '1–3 Weak'],
        ].map(([color, label]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--muted)' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: color, display: 'inline-block' }} />
            {label}
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--muted)' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--surface)', border: '1px solid var(--line2)', display: 'inline-block' }} />
          N/A
        </div>
      </div>
    </div>
  );
}

function FragmentRow({ r, showCat }) {
  return (
    <>
      {showCat && (
        <tr>
          <td colSpan={1 + products.length + 1} style={{
            background: 'var(--surface)', fontSize: 10, fontWeight: 500, letterSpacing: '0.06em',
            textTransform: 'uppercase', color: 'var(--faint)', padding: '6px 12px',
          }}>
            {r.cat}
          </td>
        </tr>
      )}
      <tr>
        <td style={{ padding: '8px 12px', borderBottom: '1px solid var(--line2)', fontWeight: 500, color: 'var(--ink)', verticalAlign: 'top' }}>
          {r.feat}
          <small style={{ display: 'block', fontSize: 10, color: 'var(--faint)', fontWeight: 400, marginTop: 2 }}>{r.sub}</small>
        </td>
        {r.sc.map((s, i) => (
          <td key={i} style={{ padding: '8px 8px', borderBottom: '1px solid var(--line2)', textAlign: 'center', verticalAlign: 'top' }}>
            <Pip s={s} />
          </td>
        ))}
        <td style={{ padding: '8px 12px', borderBottom: '1px solid var(--line2)', fontSize: 11.5, lineHeight: 1.5, color: 'var(--muted)', verticalAlign: 'top' }}>
          {r.cm}
        </td>
      </tr>
    </>
  );
}
