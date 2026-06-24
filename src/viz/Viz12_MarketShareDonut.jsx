import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { marketShare } from '../data/content';

const GREY_SHADES = ['var(--grey-chart)', 'var(--line2)', 'var(--lineStrong)'];

function resolveFill(entry, i) {
  if (entry.color === '#D85A30') return '#D85A30';
  return GREY_SHADES[i % GREY_SHADES.length];
}

export default function Viz12_MarketShareDonut() {
  return (
    <div style={{ background: 'var(--surface)', borderRadius: 4, padding: '20px 24px 16px', maxWidth: 340, margin: '0 auto' }}>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={marketShare}
            dataKey="value"
            nameKey="name"
            innerRadius={62}
            outerRadius={92}
            paddingAngle={2}
            startAngle={90}
            endAngle={-270}
          >
            {marketShare.map((entry, i) => (
              <Cell
                key={entry.name}
                fill={resolveFill(entry, i)}
                stroke="var(--surface)"
                strokeWidth={entry.color === '#D85A30' ? 3 : 2}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`${value}%`]}
            contentStyle={{ background: 'var(--cell)', border: '1px solid var(--line)', borderRadius: 4, fontSize: 12 }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 18px', marginTop: 8 }}>
        {marketShare.map((entry, i) => (
          <div key={entry.name} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{
              width: 9, height: 9, borderRadius: '50%',
              background: resolveFill(entry, i), flex: 'none',
            }} />
            <span style={{ fontSize: 12, color: 'var(--ink)', fontWeight: entry.color === '#D85A30' ? 600 : 400 }}>
              {entry.name}
            </span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: 'var(--faint)' }}>
              {entry.value}%
            </span>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 11, color: 'var(--faint)', textAlign: 'center', marginTop: 10 }}>
        Source: web AI assistant market share estimates, mid-2026.
      </div>
    </div>
  );
}
