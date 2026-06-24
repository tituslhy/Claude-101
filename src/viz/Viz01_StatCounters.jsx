import { useEffect, useRef } from 'react';
import { heroCounters } from '../data/content';

function Counter({ c }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const target = c.n;
    const dur = 1400;
    const start = performance.now();
    let frame;
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = target * eased;
      el.textContent = c.pre + (c.dec ? v.toFixed(c.dec) : Math.round(v).toLocaleString()) + c.suf;
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [c]);

  return (
    <div style={{ borderLeft: '2px solid #D85A30', padding: '4px 0 4px 18px' }}>
      <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(40px,5vw,62px)', lineHeight: 1, letterSpacing: '-0.01em' }}>
        <span ref={ref}>{c.fallback}</span>
      </div>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--faint)', marginTop: 12 }}>
        {c.label}
      </div>
    </div>
  );
}

export default function Viz01_StatCounters() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px 0' }}>
      {heroCounters.map((c) => <Counter key={c.label} c={c} />)}
    </div>
  );
}
