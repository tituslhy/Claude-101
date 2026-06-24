import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';
import { revenueGrowth } from '../data/content';

const lastPoint = revenueGrowth[revenueGrowth.length - 1];

export default function Viz10_RevenueGrowth() {
  return (
    <div style={{ background: 'var(--surface)', borderRadius: 4, padding: '20px 24px 12px' }}>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={revenueGrowth} margin={{ top: 28, right: 50, left: 8, bottom: 4 }}>
          <defs>
            <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D85A30" stopOpacity={0.28} />
              <stop offset="100%" stopColor="#D85A30" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="period"
            tick={{ fill: 'var(--muted)', fontSize: 12, fontFamily: 'Inter' }}
            axisLine={{ stroke: 'var(--line)' }}
            tickLine={false}
          />
          <YAxis hide domain={[0, 55]} />
          <Tooltip
            formatter={(value) => [`$${value}B`, 'ARR']}
            contentStyle={{ background: 'var(--cell)', border: '1px solid var(--line)', borderRadius: 4, fontSize: 12 }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#D85A30"
            strokeWidth={2.5}
            fill="url(#revenueFill)"
          />
          <ReferenceDot
            x={lastPoint.period}
            y={lastPoint.value}
            r={5}
            fill="#D85A30"
            stroke="var(--surface)"
            strokeWidth={2}
            label={{ value: '$47B run rate', position: 'top', fill: 'var(--ink)', fontSize: 12, fontFamily: "'JetBrains Mono', monospace" }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div style={{ fontSize: 12, color: 'var(--faint)', textAlign: 'center', marginTop: 4 }}>
        From $0.5B to $47B annualised run rate in roughly three years.
      </div>
    </div>
  );
}
