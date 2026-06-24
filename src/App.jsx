import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Nav from './layout/Nav';
import ProgressSpine from './layout/ProgressSpine';
import ScrollToTop from './layout/ScrollToTop';
import Start from './pages/Start';
import Origin from './pages/Origin';
import Models from './pages/Models';
import Market from './pages/Market';
import Verdict from './pages/Verdict';
import ComponentsPage from './pages/ComponentsPage';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }}>
        <ProgressSpine />
        <Nav theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/origin" element={<Origin />} />
          <Route path="/models" element={<Models />} />
          <Route path="/market" element={<Market />} />
          <Route path="/verdict" element={<Verdict />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
