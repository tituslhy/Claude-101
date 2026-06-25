import { useNavigate } from 'react-router-dom';
import FactTicker from '../layout/FactTicker';
import { FigureLabel } from '../components';
import Viz01_StatCounters from '../viz/Viz01_StatCounters';
import Viz02_ClaudeStack from '../viz/Viz02_ClaudeStack';
import { chapters, quotes } from '../data/content';

export default function Start() {
  const navigate = useNavigate();

  return (
    <main>
      {/* HERO */}
      <section style={{ position: 'relative', maxWidth: 1080, margin: '0 auto', padding: 'var(--pad-84) var(--gutter) 36px' }}>
        <div className="rise" style={{
          fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'var(--fillLabel)', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 34,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#D85A30', display: 'inline-block' }} />
          Intelligence Dossier · N°01 · June 2026 · Independent &amp; unaffiliated
        </div>
        <h1 className="stretch" style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontSize: 'clamp(72px,12vw,150px)', lineHeight: 0.92, letterSpacing: '-0.02em', margin: 0 }}>
          Claude <span style={{ fontStyle: 'italic', color: '#D85A30' }}>101</span>
        </h1>
        <p className="stretch" style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: 'clamp(20px,2.6vw,30px)', lineHeight: 1.3, color: 'var(--muted)', margin: '22px 0 0', maxWidth: 660 }}>
          The thinking person's field guide to Anthropic — the models, the money, the market, and the verdict nobody else will write down.
        </p>
      </section>

      <FactTicker />

      {/* COUNTERS */}
      <section style={{ maxWidth: 1080, margin: '0 auto', padding: 'var(--pad-64) var(--gutter) 8px' }}>
        <Viz01_StatCounters />
      </section>

      {/* OPENING QUOTE */}
      <section style={{ maxWidth: 1080, margin: '0 auto', padding: 'var(--pad-64) var(--gutter)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 28, alignItems: 'start' }}>
          <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 'var(--quote-mark)', lineHeight: 0.7, color: '#D85A30' }}>&ldquo;</div>
          <div>
            <p className="stretch" style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: 'clamp(24px,3.2vw,38px)', lineHeight: 1.28, color: 'var(--ink)', margin: '8px 0 18px', maxWidth: 760 }}>
              {quotes.hero.text}
            </p>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.08em', color: 'var(--fillLabel)' }}>
              — {quotes.hero.attribution}
            </div>
          </div>
        </div>
      </section>

      {/* VIZ: Claude Stack */}
      <section style={{ maxWidth: 1080, margin: '0 auto', padding: '0 var(--gutter) var(--pad-64)' }}>
        <FigureLabel>Figure 0.1 — The Claude Stack</FigureLabel>
        <Viz02_ClaudeStack />
      </section>

      {/* CONTENTS INDEX */}
      <section style={{ maxWidth: 1080, margin: '0 auto', padding: '24px var(--gutter) var(--gutter)' }}>
        <div style={{
          fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--faint)', marginBottom: 8, borderBottom: '1px solid var(--line)', paddingBottom: 16,
        }}>
          Contents — Four Parts, Eleven Chapters
        </div>
        {chapters.map((ch) => (
          <div
            key={ch.num}
            onClick={() => navigate(ch.to)}
            className="lift"
            style={{
              display: 'grid', gridTemplateColumns: 'var(--chnum-col) 1fr auto', alignItems: 'center', gap: 28,
              padding: '30px 20px', cursor: 'pointer', borderBottom: '1px solid var(--line)', background: 'transparent',
            }}
          >
            <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 'var(--chnum-font)', color: '#D85A30', lineHeight: 1 }}>{ch.num}</div>
            <div>
              <div className="stretch" style={{ fontFamily: "'Instrument Serif',serif", fontSize: 30, lineHeight: 1.1, letterSpacing: '-0.01em' }}>
                {ch.title}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--muted)', marginTop: 8, maxWidth: 560 }}>
                {ch.desc}
              </div>
            </div>
            <div className="arw" style={{ fontSize: 26, color: 'var(--faint)' }}>→</div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer style={{ maxWidth: 1080, margin: '0 auto', padding: 'var(--gutter) var(--gutter) 90px' }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.06em', color: 'var(--faint)' }}>
          CLAUDE 101 · AN INDEPENDENT INTELLIGENCE DOSSIER BY TITUS LIM · 2026 · NOT AFFILIATED WITH ANTHROPIC
        </div>
      </footer>
    </main>
  );
}
