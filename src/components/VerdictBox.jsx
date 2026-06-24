export default function VerdictBox({ tag = '💡 The honest take', children }) {
  return (
    <div style={{ border: '1px solid var(--lineStrong)', borderRadius: 4, padding: '26px 28px', margin: '0 0 56px', background: 'var(--cell)' }}>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D85A30', marginBottom: 12 }}>
        {tag}
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink2)', margin: 0 }}>{children}</p>
    </div>
  );
}
