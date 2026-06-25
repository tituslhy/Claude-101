import { modelTiers } from '../data/content';
import { useIsMobile } from '../hooks/useIsMobile';

const TONE_OPACITY = {
  locked: 0.12,
  strong: 1,
  medium: 0.78,
  light: 0.55,
  lightest: 0.32,
};

const TONE_WIDTH = {
  locked: '60%',
  strong: '100%',
  medium: '88%',
  light: '76%',
  lightest: '64%',
};

export default function Viz06_ModelFamilyHierarchy() {
  const isMobile = useIsMobile(640);

  return (
    <div style={{ background: 'var(--surface)', borderRadius: 4, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 8, minHeight: 240 }}>
      {modelTiers.map((tier) => {
        const locked = tier.tone === 'locked';
        return (
          <div key={tier.name} style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'stretch' : 'center', gap: isMobile ? 6 : 14 }}>
            <div
              style={{
                width: isMobile ? '100%' : TONE_WIDTH[tier.tone],
                background: locked ? 'var(--line)' : '#D85A30',
                opacity: locked ? 1 : TONE_OPACITY[tier.tone],
                borderRadius: 4,
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 12,
                border: tier.star ? '1.5px solid #D85A30' : 'none',
                boxSizing: 'border-box',
                minHeight: 50,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, minWidth: 0 }}>
                {locked && <span style={{ fontSize: 13, color: 'var(--faint)' }}>🔒</span>}
                {tier.star && <span style={{ fontSize: 13 }}>★</span>}
                <span style={{
                  fontFamily: "'Instrument Serif',serif", fontSize: 19,
                  color: locked ? 'var(--muted)' : '#fff',
                  whiteSpace: 'nowrap',
                }}>
                  {tier.name}
                </span>
                <span style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5,
                  color: locked ? 'var(--faint)' : 'rgba(255,255,255,0.85)',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {tier.sub}
                </span>
              </div>
              <span style={{
                fontFamily: "'JetBrains Mono',monospace", fontSize: 11, flex: 'none',
                color: locked ? 'var(--faint)' : 'rgba(255,255,255,0.9)',
              }}>
                {tier.price}
              </span>
            </div>
            <span style={{
              fontFamily: "'Inter',-apple-system,system-ui,sans-serif", fontSize: 12.5,
              color: 'var(--muted)', flex: '1 1 auto', minWidth: 0,
            }}>
              {tier.use}
            </span>
          </div>
        );
      })}
    </div>
  );
}
