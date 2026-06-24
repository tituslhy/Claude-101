export default function VizPlaceholder({ label, description, height = 200 }) {
  return (
    <div style={{ background: 'var(--surface)', border: '1.5px dashed var(--dashed)', borderRadius: 4, height, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: 'var(--fillLabel)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          [ VIZ · {label} ]
        </div>
        <div style={{ fontSize: 13, color: 'var(--faint)', marginTop: 6 }}>{description}</div>
      </div>
    </div>
  );
}
