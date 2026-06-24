function Node({ label, sub, x, y, w = 160, coral }) {
  return (
    <g>
      <rect x={x - w / 2} y={y - 28} width={w} height={56} rx={6}
        fill="var(--cell)" stroke={coral ? '#D85A30' : 'var(--line)'} strokeWidth={coral ? 1.5 : 1} />
      <text x={x} y={y - 4} textAnchor="middle" fontSize="13" fontFamily="Inter" fontWeight={500} fill="var(--ink)">{label}</text>
      <text x={x} y={y + 14} textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="var(--faint)">{sub}</text>
    </g>
  );
}

function Edge({ x1, y1, x2, y2, label, dash, labelX, labelY }) {
  const lx = labelX ?? (x1 + x2) / 2;
  const ly = labelY ?? (y1 + y2) / 2;
  const w = label.length * 5.4 + 12;
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--faint)" strokeWidth={1.4} strokeDasharray={dash} />
      <rect x={lx - w / 2} y={ly - 11} width={w} height={16} fill="var(--surface)" />
      <text x={lx} y={ly} textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="var(--fillLabel)">{label}</text>
    </g>
  );
}

export default function Viz05_LTBTGovernance() {
  const cx = 260;
  const ltbtY = 50, anthropicY = 185, rowY = 305, spaceX_Y = 415;

  return (
    <div style={{ background: 'var(--surface)', borderRadius: 4, padding: '16px 0 8px' }}>
      <svg viewBox="0 0 520 460" width="100%" height={380}>
        <Edge x1={cx} y1={ltbtY + 28} x2={cx} y2={anthropicY - 28} label="Controls board composition" />
        <Edge x1={cx - 50} y1={anthropicY + 26} x2={110} y2={rowY - 28} label="Zero votes" dash="4 4" labelX={170} labelY={245} />
        <Edge x1={cx + 50} y1={anthropicY + 26} x2={410} y2={rowY - 28} label="Zero votes, capped 15%" dash="4 4" labelX={350} labelY={245} />
        <Edge x1={cx} y1={anthropicY + 28} x2={cx} y2={spaceX_Y - 28} label="Tenant only" dash="2 4" labelY={300} />

        <Node label="Long-Term Benefit Trust" sub="VETO POWER" x={cx} y={ltbtY} w={230} coral />
        <Node label="Anthropic" sub="FOUNDERS RUN IT" x={cx} y={anthropicY} coral />
        <Node label="Amazon ($74.2B)" sub="NON-VOTING" x={110} y={rowY} w={170} />
        <Node label="Google (14%)" sub="CAP 15% · NON-VOTING" x={410} y={rowY} w={170} />
        <Node label="SpaceX ($15B/yr)" sub="COMPUTE LEASE" x={cx} y={spaceX_Y} w={170} />
      </svg>
      <div style={{ fontSize: 12, color: 'var(--fillLabel)', textAlign: 'center', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.02em', marginTop: -4 }}>
        You can invest any amount. You cannot buy control.
      </div>
    </div>
  );
}
