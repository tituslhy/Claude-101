import { foundingTimeline } from '../data/content';

export default function Viz03_FoundingTimeline() {
  return (
    <div style={{ background: 'var(--surface)', borderRadius: 4, height: 220, padding: '28px 24px 18px' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 2, background: 'var(--line)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%', position: 'relative' }}>
          {foundingTimeline.map((ev, i) => {
            const above = i % 2 === 0;
            return (
              <div key={ev.year} style={{ position: 'relative', flex: 1, display: 'flex', justifyContent: 'center' }}>
                {above && (
                  <div style={{ position: 'absolute', bottom: 'calc(50% + 14px)', width: 130, textAlign: 'center' }}>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#D85A30', letterSpacing: '0.04em' }}>{ev.year}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink)', fontWeight: 500, marginTop: 4 }}>{ev.label}</div>
                  </div>
                )}
                <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: 9, height: 9, borderRadius: '50%', background: '#D85A30' }} />
                {!above && (
                  <div style={{ position: 'absolute', top: 'calc(50% + 14px)', width: 130, textAlign: 'center' }}>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#D85A30', letterSpacing: '0.04em' }}>{ev.year}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink)', fontWeight: 500, marginTop: 4 }}>{ev.label}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
