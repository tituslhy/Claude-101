export default function FullBleed({ maxWidth = 920, children }) {
  return (
    <div style={{ position: 'relative', zIndex: 1, maxWidth, margin: '0 auto', padding: '0 var(--gutter) 38px' }}>
      {children}
    </div>
  );
}
