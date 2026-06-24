import { ecosystemMap } from '../data/content';

export default function Viz09_EcosystemMap() {
  const groups = Object.entries(ecosystemMap);

  return (
    <div style={{
      background: 'var(--surface)', borderRadius: 4, padding: '24px',
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 20,
    }}>
      {groups.map(([name, items]) => (
        <div key={name}>
          <div style={{
            fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#D85A30', fontWeight: 600, marginBottom: 10,
          }}>
            {name}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {items.map((item) => (
              <div key={item} style={{
                background: 'var(--cell)', border: '1px solid var(--line)', borderRadius: 4,
                padding: '9px 12px', fontSize: 13, color: 'var(--ink)',
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
