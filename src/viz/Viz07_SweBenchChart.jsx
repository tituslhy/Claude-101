import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { sweBenchProChart } from '../data/content';

export default function Viz07_SweBenchChart() {
  return (
    <div style={{ background: 'var(--surface)', borderRadius: 4, padding: '20px 24px 12px' }}>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={sweBenchProChart} layout="vertical" margin={{ top: 4, right: 50, left: 8, bottom: 4 }}>
          <XAxis type="number" hide domain={[0, 90]} />
          <YAxis type="category" dataKey="name" width={100} tick={{ fill: 'var(--muted)', fontSize: 13, fontFamily: 'Inter' }} axisLine={false} tickLine={false} />
          <Tooltip
            formatter={(value) => [`${value}%`, 'SWE-Bench Pro']}
            contentStyle={{ background: 'var(--cell)', border: '1px solid var(--line)', borderRadius: 4, fontSize: 12 }}
          />
          <Bar dataKey="value" radius={[0, 3, 3, 0]} barSize={18}>
            {sweBenchProChart.map((d, i) => (
              <Cell key={i} fill={d.claude ? '#D85A30' : 'var(--grey-chart)'} />
            ))}
            <LabelList
              dataKey="value"
              position="right"
              formatter={(v) => `${v}%`}
              style={{ fill: 'var(--ink)', fontSize: 12, fontFamily: "'JetBrains Mono', monospace" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div style={{ fontSize: 12, color: 'var(--faint)', textAlign: 'center', marginTop: 4 }}>
        11-point gap between Fable 5 and Opus 4.8.
      </div>
    </div>
  );
}
