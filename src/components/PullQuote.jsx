export default function PullQuote({ children, attribution = 'TITUS LIM · 2026' }) {
  return (
    <blockquote style={{ borderLeft: '3px solid #D85A30', paddingLeft: 26, margin: '40px 0' }}>
      <p style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: 27, lineHeight: 1.35, color: 'var(--ink)', margin: '0 0 14px' }}>
        {children}
      </p>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.06em', color: 'var(--fillLabel)' }}>
        — {attribution}
      </div>
    </blockquote>
  );
}
