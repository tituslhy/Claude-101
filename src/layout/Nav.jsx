import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';

const TABS = [
  { to: '/', label: '00 Start', end: true },
  { to: '/origin', label: '01–02 Origin' },
  { to: '/models', label: '03–05 Models' },
  { to: '/market', label: '06–08 Market' },
  { to: '/verdict', label: '09–11 Verdict' },
  { to: '/components', label: 'Components' },
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

const drawerTabBase = {
  display: 'block',
  fontFamily: "'JetBrains Mono',monospace",
  fontSize: 13,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  color: 'var(--ink2)',
  padding: '16px 4px',
  borderBottom: '1px solid var(--line2)',
};

const drawerTabActive = {
  ...drawerTabBase,
  color: '#D85A30',
};

function ThemeToggle({ theme, toggleTheme, style }) {
  return (
    <div
      onClick={toggleTheme}
      title="Toggle theme"
      style={{
        fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.04em',
        textTransform: 'uppercase', cursor: 'pointer', color: 'var(--faint)',
        border: '1px solid var(--line)', borderRadius: 999, padding: '6px 13px',
        transition: 'color .15s, border-color .15s', flex: 'none',
        ...style,
      }}
    >
      {theme === 'light' ? '☾ Dark' : '☀ Light'}
    </div>
  );
}

export default function Nav({ theme, toggleTheme }) {
  const navigate = useNavigate();
  const isMobile = useIsMobile(720);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 var(--gutter)', height: 62,
        background: 'var(--navbg)', backdropFilter: 'saturate(180%) blur(14px)',
        borderBottom: '1px solid var(--line)',
      }}>
        <div onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'baseline', gap: 10, cursor: 'pointer' }}>
          <span style={{ fontFamily: "'Instrument Serif',serif", fontSize: 24, lineHeight: 1 }}>Claude</span>
          <span style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: 24, lineHeight: 1, color: '#D85A30' }}>101</span>
        </div>

        {isMobile ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4,
                width: 34, height: 34, border: '1px solid var(--line)', borderRadius: 6,
                background: 'transparent', cursor: 'pointer', flex: 'none',
              }}
            >
              <span style={{ display: 'block', width: 16, height: 1.5, margin: '0 auto', background: 'var(--ink)' }} />
              <span style={{ display: 'block', width: 16, height: 1.5, margin: '0 auto', background: 'var(--ink)' }} />
            </button>
          </div>
        ) : (
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
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        )}
      </nav>

      {isMobile && open && (
        <>
          <div
            className="nav-overlay"
            onClick={() => setOpen(false)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 70 }}
          />
          <div
            className="nav-drawer"
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, width: '78%', maxWidth: 300,
              background: 'var(--bg)', zIndex: 80, borderLeft: '1px solid var(--line)',
              boxShadow: '-12px 0 28px rgba(0,0,0,0.18)', padding: '20px var(--gutter)',
              display: 'flex', flexDirection: 'column', overflowY: 'auto',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                style={{
                  width: 34, height: 34, border: '1px solid var(--line)', borderRadius: 6,
                  background: 'transparent', cursor: 'pointer', fontSize: 16, color: 'var(--ink)',
                }}
              >
                ×
              </button>
            </div>
            {TABS.map((tab) => (
              <NavLink
                key={tab.to}
                to={tab.to}
                end={tab.end}
                onClick={() => setOpen(false)}
                style={({ isActive }) => (isActive ? drawerTabActive : drawerTabBase)}
              >
                {tab.label}
              </NavLink>
            ))}
          </div>
        </>
      )}
    </>
  );
}
