export default function HighlightBox({ title, children }) {
  return (
    <div style={{ background: 'var(--surface)', borderRadius: 4, padding: '22px 24px', margin: '0 0 30px', display: 'flex', gap: 16 }}>
      <span style={{ flex: 'none', width: 18, height: 18, background: '#D85A30', borderRadius: 4, marginTop: 3 }} />
      <div>
        <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 7 }}>{title}</div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--muted)' }}>{children}</div>
      </div>
    </div>
  );
}
