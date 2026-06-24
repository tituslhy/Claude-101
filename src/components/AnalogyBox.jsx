export default function AnalogyBox({ children, tag = '◆ Analogy' }) {
  return (
    <div style={{ background: 'var(--fill)', borderRadius: 4, padding: '24px 26px', margin: '6px 0 28px' }}>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fillLabel)', marginBottom: 12 }}>
        {tag}
      </div>
      <p style={{ fontFamily: "'Instrument Serif',serif", fontSize: 21, lineHeight: 1.45, color: 'var(--fillInk)', margin: 0 }}>
        {children}
      </p>
    </div>
  );
}
