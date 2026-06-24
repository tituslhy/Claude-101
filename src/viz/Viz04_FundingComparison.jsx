import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { fundingComparison } from '../data/content';

export default function Viz04_FundingComparison() {
  return (
    <div style={{ background: 'var(--surface)', borderRadius: 4, padding: '20px 24px 12px' }}>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={fundingComparison} layout="vertical" margin={{ top: 4, right: 60, left: 8, bottom: 4 }}>
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" width={90} tick={{ fill: 'var(--muted)', fontSize: 13, fontFamily: 'Inter' }} axisLine={false} tickLine={false} />
          <Tooltip
            formatter={(value, _name, item) => [item.payload.note, item.payload.label]}
            contentStyle={{ background: 'var(--cell)', border: '1px solid var(--line)', borderRadius: 4, fontSize: 12 }}
          />
          <Bar dataKey="value" radius={[0, 3, 3, 0]} barSize={20}>
            {fundingComparison.map((d, i) => (
              <Cell key={i} fill={d.kind === 'compute' ? 'var(--grey-chart)' : '#D85A30'} />
            ))}
            <LabelList dataKey="label" position="right" style={{ fill: 'var(--ink)', fontSize: 12, fontFamily: "'JetBrains Mono', monospace" }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div style={{ fontSize: 12, color: 'var(--faint)', textAlign: 'center', marginTop: 4 }}>
        Amazon and Google hold zero voting rights despite total commitments.
      </div>
    </div>
  );
}
