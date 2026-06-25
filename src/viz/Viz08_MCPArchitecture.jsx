import { useIsMobile } from '../hooks/useIsMobile';

const TOOLS = ['GitHub', 'Slack', 'Postgres', 'Web Search', 'Google Drive', 'Custom Tool'];

function Box({ x, y, w, h, label, sub, coral, big }) {
  return (
    <g>
      <rect
        x={x} y={y} width={w} height={h} rx={6}
        fill={coral ? 'var(--fill)' : 'var(--cell)'}
        stroke={coral ? '#D85A30' : 'var(--line)'}
        strokeWidth={coral ? 1.6 : 1}
      />
      <text
        x={x + w / 2} y={y + h / 2 + (sub ? -3 : 4)}
        textAnchor="middle"
        fontSize={big ? 14 : 12}
        fontFamily="Inter"
        fontWeight={coral ? 600 : 500}
        fill={coral ? 'var(--fillInk)' : 'var(--ink)'}
      >
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 14} textAnchor="middle" fontSize="9.5" fontFamily="JetBrains Mono" fill="var(--fillLabel)">
          {sub}
        </text>
      )}
    </g>
  );
}

function DoubleArrow({ x1, y1, x2, y2 }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--faint)" strokeWidth={1.4} markerStart="url(#arrowStart)" markerEnd="url(#arrowEnd)" />;
}

function MobileLayout() {
  return (
    <div style={{ background: 'var(--surface)', borderRadius: 4, padding: '20px 18px' }}>
      <div style={{
        background: 'var(--cell)', border: '1px solid var(--line)', borderRadius: 6,
        padding: '12px 16px', textAlign: 'center', fontWeight: 500, fontSize: 13, color: 'var(--ink)',
      }}>
        Your Agent
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0' }}>
        <svg width="20" height="28" viewBox="0 0 20 28">
          <line x1="10" y1="2" x2="10" y2="20" stroke="var(--faint)" strokeWidth={1.4} />
          <path d="M4 14 L10 22 L16 14" fill="none" stroke="var(--faint)" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div style={{
        background: 'var(--fill)', border: '1.6px solid #D85A30', borderRadius: 6,
        padding: '12px 16px', textAlign: 'center',
      }}>
        <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--fillInk)' }}>MCP Protocol</div>
        <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono',monospace", color: 'var(--fillLabel)', marginTop: 2 }}>ANY MODEL · ANY TOOL</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0' }}>
        <svg width="20" height="28" viewBox="0 0 20 28">
          <line x1="10" y1="2" x2="10" y2="20" stroke="var(--faint)" strokeWidth={1.4} />
          <path d="M4 14 L10 22 L16 14" fill="none" stroke="var(--faint)" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {TOOLS.map((tool) => (
          <div key={tool} style={{
            background: 'var(--cell)', border: '1px solid var(--line)', borderRadius: 6,
            padding: '10px 8px', textAlign: 'center', fontSize: 12, fontWeight: 500, color: 'var(--ink)',
          }}>
            {tool}
          </div>
        ))}
      </div>
      <div style={{ fontSize: 12, color: 'var(--fillLabel)', textAlign: 'center', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.02em', marginTop: 14 }}>
        One protocol. Any model. Any tool.
      </div>
    </div>
  );
}

export default function Viz08_MCPArchitecture() {
  const isMobile = useIsMobile(640);

  if (isMobile) return <MobileLayout />;

  const toolCount = TOOLS.length;
  const svgH = 40 + toolCount * 44;
  const agentX = 20, agentW = 110, agentY = svgH / 2 - 26, agentH = 52;
  const mcpX = 175, mcpW = 150, mcpY = svgH / 2 - 36, mcpH = 72;
  const toolX = 375, toolW = 130;
  const toolStartY = (svgH - (toolCount * 44 - 12)) / 2;

  return (
    <div style={{ background: 'var(--surface)', borderRadius: 4, padding: '20px 24px' }}>
      <svg viewBox={`0 0 540 ${svgH}`} width="100%" height={Math.max(220, svgH)}>
        <defs>
          <marker id="arrowEnd" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--faint)" />
          </marker>
          <marker id="arrowStart" markerWidth="8" markerHeight="8" refX="0" refY="3" orient="auto">
            <path d="M6,0 L0,3 L6,6 Z" fill="var(--faint)" />
          </marker>
        </defs>

        <DoubleArrow x1={agentX + agentW + 4} y1={agentY + agentH / 2} x2={mcpX - 4} y2={mcpY + mcpH / 2} />

        {TOOLS.map((_, i) => {
          const ty = toolStartY + i * 44;
          return (
            <DoubleArrow
              key={i}
              x1={mcpX + mcpW + 4}
              y1={mcpY + mcpH / 2}
              x2={toolX - 4}
              y2={ty + 16}
            />
          );
        })}

        <Box x={agentX} y={agentY} w={agentW} h={agentH} label="Your Agent" />
        <Box x={mcpX} y={mcpY} w={mcpW} h={mcpH} label="MCP Protocol" sub="ANY MODEL · ANY TOOL" coral big />

        {TOOLS.map((tool, i) => {
          const ty = toolStartY + i * 44;
          return <Box key={tool} x={toolX} y={ty} w={toolW} h={32} label={tool} />;
        })}
      </svg>
      <div style={{ fontSize: 12, color: 'var(--fillLabel)', textAlign: 'center', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.02em', marginTop: -4 }}>
        One protocol. Any model. Any tool.
      </div>
    </div>
  );
}
