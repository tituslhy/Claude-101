import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { radarData } from '../data/content';

export default function Viz17_ClaudeVsChatGPTRadar() {
  return (
    <div style={{ background: 'var(--surface)', borderRadius: 4, padding: '20px 24px 8px', maxWidth: 480, margin: '0 auto' }}>
      <ResponsiveContainer width="100%" height={340}>
        <RadarChart data={radarData} margin={{ top: 16, right: 36, bottom: 16, left: 36 }}>
          <PolarGrid stroke="var(--line)" />
          <PolarAngleAxis dataKey="axis" tick={{ fill: 'var(--muted)', fontSize: 11, fontFamily: 'Inter' }} />
          <PolarRadiusAxis angle={90} domain={[0, 10]} tick={false} axisLine={false} />
          <Radar name="Claude" dataKey="Claude" stroke="#D85A30" fill="#D85A30" fillOpacity={0.15} strokeWidth={2} />
          <Radar name="ChatGPT" dataKey="ChatGPT" stroke="var(--grey-chart)" fill="var(--grey-chart)" fillOpacity={0.15} strokeWidth={2} />
        </RadarChart>
      </ResponsiveContainer>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 22, marginTop: 4, marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <span style={{ width: 11, height: 11, borderRadius: 3, background: '#D85A30', flex: 'none' }} />
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: 'var(--ink)', fontWeight: 600 }}>Claude</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <span style={{ width: 11, height: 11, borderRadius: 3, background: 'var(--grey-chart)', flex: 'none' }} />
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: 'var(--muted)' }}>ChatGPT</span>
        </div>
      </div>
    </div>
  );
}
