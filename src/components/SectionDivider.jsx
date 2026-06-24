export default function SectionDivider({ number, title, marginTop = '44px' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, margin: `${marginTop} 0 26px`, paddingTop: 8 }}>
      <span style={{ fontFamily: "'Instrument Serif',serif", fontSize: 30, color: '#D85A30', lineHeight: 1 }}>{number}</span>
      <span style={{ fontFamily: "'Instrument Serif',serif", fontSize: 30, lineHeight: 1 }}>{title}</span>
    </div>
  );
}
