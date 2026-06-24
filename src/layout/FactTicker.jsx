const TICKER_LINE = '245M MONTHLY USERS  ·  $47B RUN RATE  ·  SWE-BENCH PRO 80.3%  ·  MCP — THE UNIVERSAL SOCKET  ·  220K SPACEX GPUS  ·  LTBT HOLDS THE VETO  ·  GOOGLE CAPPED AT 15%  ·  16M DISTILLATION EXCHANGES  ·  ';

export default function FactTicker() {
  return (
    <div style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', overflow: 'hidden', padding: '13px 0', margin: '28px 0 0', background: 'var(--cell)' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'ticker 38s linear infinite', fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: 'var(--muted)', whiteSpace: 'nowrap' }}>
        <span>{TICKER_LINE}</span>
        <span aria-hidden="true">{TICKER_LINE}</span>
      </div>
    </div>
  );
}
