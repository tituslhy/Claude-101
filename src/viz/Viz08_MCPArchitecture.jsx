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

export default function Viz08_MCPArchitecture() {
  const isMobile = useIsMobile(640);
  const toolCount = TOOLS.length;
  const svgH = 40 + toolCount * 44;
  const agentX = 20, agentW = 110, agentY = svgH / 2 - 26, agentH = 52;
  const mcpX = 175, mcpW = 150, mcpY = svgH / 2 - 36, mcpH = 72;
  const toolX = 375, toolW = 130;
  const toolStartY = (svgH - (toolCount * 44 - 12)) / 2;

  return (
    <div style={{ background: 'var(--surface)', borderRadius: 4, padding: '20px 24px', overflowX: isMobile ? 'auto' : 'visible' }}>
      <svg viewBox={`0 0 540 ${svgH}`} width={isMobile ? 540 : '100%'} height={Math.max(220, svgH)} style={isMobile ? { display: 'block' } : undefined}>
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
