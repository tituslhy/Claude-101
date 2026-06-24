import { useNavigate } from 'react-router-dom';

export default function FooterNav({ prevTo, prevLabel, nextTo, nextLabel }) {
  const navigate = useNavigate();
  return (
    <div style={{ borderTop: '1px solid var(--line)', padding: '24px 0 90px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {prevTo ? (
        <div onClick={() => navigate(prevTo)} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#D85A30', cursor: 'pointer' }}>
          ← {prevLabel}
        </div>
      ) : <span />}
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: 'var(--faint)' }}>TITUS LIM · 2026</div>
      {nextTo ? (
        <div onClick={() => navigate(nextTo)} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#D85A30', cursor: 'pointer' }}>
          {nextLabel} →
        </div>
      ) : <span />}
    </div>
  );
}
