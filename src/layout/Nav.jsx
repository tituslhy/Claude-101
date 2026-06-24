import { NavLink, useNavigate } from 'react-router-dom';

const TABS = [
  { to: '/', label: '00 Start', end: true },
  { to: '/origin', label: '01–02 Origin' },
  { to: '/models', label: '03–05 Models' },
  { to: '/market', label: '06–08 Market' },
  { to: '/verdict', label: '09–11 Verdict' },
];

const tabBase = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  fontFamily: "'JetBrains Mono',monospace",
  fontSize: 11,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'color .15s',
  borderBottom: '2px solid transparent',
  color: 'var(--faint)',
};

const tabActive = {
  ...tabBase,
  color: '#D85A30',
  borderBottom: '2px solid #D85A30',
};

export default function Nav({ theme, toggleTheme }) {
  const navigate = useNavigate();

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 36px', height: 62,
      background: 'var(--navbg)', backdropFilter: 'saturate(180%) blur(14px)',
      borderBottom: '1px solid var(--line)',
    }}>
      <div onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'baseline', gap: 10, cursor: 'pointer' }}>
        <span style={{ fontFamily: "'Instrument Serif',serif", fontSize: 24, lineHeight: 1 }}>Claude</span>
        <span style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: 24, lineHeight: 1, color: '#D85A30' }}>101</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 26, height: '100%' }}>
        {TABS.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            style={({ isActive }) => (isActive ? tabActive : tabBase)}
          >
            {tab.label}
          </NavLink>
        ))}
        <NavLink to="/components" style={({ isActive }) => (isActive ? tabActive : tabBase)}>
          Components
        </NavLink>
        <div
          onClick={toggleTheme}
          title="Toggle theme"
          style={{
            fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.04em',
            textTransform: 'uppercase', cursor: 'pointer', color: 'var(--faint)',
            border: '1px solid var(--line)', borderRadius: 999, padding: '6px 13px',
            transition: 'color .15s, border-color .15s',
          }}
        >
          {theme === 'light' ? '☾ Dark' : '☀ Light'}
        </div>
      </div>
    </nav>
  );
}
