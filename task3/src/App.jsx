import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import ContextPage from './pages/ContextPage';
import ButtonPage from './pages/ButtonPage';

function App() {
  return (
    <>
      <header className="topbar">
        <h1 className="brand">React Fundamentals · Task 3</h1>

        <nav className="nav" aria-label="Main">
          <NavLink to="/context" className="nav-link">
            Context
          </NavLink>
          <NavLink to="/button" className="nav-link">
            Button
          </NavLink>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/context" replace />} />
          <Route path="/context" element={<ContextPage />} />
          <Route path="/button" element={<ButtonPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;