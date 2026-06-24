export default function FigureLabel({ children }) {
  return (
    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: 14 }}>
      {children}
    </div>
  );
}
