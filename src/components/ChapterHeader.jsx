export default function ChapterHeader({ ghost, tag, title, italicWord, subtitle }) {
  return (
    <section style={{ position: 'relative', maxWidth: 820, margin: '0 auto', padding: '72px 40px 0' }}>
      <div style={{
        position: 'absolute', top: 40, right: -10,
        fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(180px,28vw,360px)', lineHeight: 0.8,
        color: 'var(--ghost)', zIndex: 0, pointerEvents: 'none', userSelect: 'none',
      }}>
        {ghost}
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fillLabel)', marginBottom: 22 }}>
          {tag}
        </div>
        <h2 className="stretch" style={{ fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontSize: 'clamp(48px,7vw,86px)', lineHeight: 0.98, letterSpacing: '-0.02em', margin: '0 0 22px' }}>
          {title} {italicWord && <span style={{ fontStyle: 'italic', color: '#D85A30' }}>{italicWord}</span>}
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--muted)', margin: '0 0 12px', maxWidth: 600 }}>
          {subtitle}
        </p>
        <div style={{ height: 1, background: 'var(--line)', margin: '36px 0 0' }} />
      </div>
    </section>
  );
}
