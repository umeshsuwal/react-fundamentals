import { NavLink, Routes, Route } from 'react-router-dom';
import ButtonDocs from './pages/ButtonDocs';
import ModalDocs from './pages/ModalDocs';
import FormFieldsDocs from './pages/FormFieldsDocs';
import OverviewDocs from './pages/OverviewDocs';

function App() {
  return (
    <>
      <header className="topbar">
        <NavLink to="/" className="brand">
          <span>Component Library</span>
        </NavLink>

        <nav className="nav" aria-label="Component documentation">
          <NavLink to="/" end className="nav-link">
            Overview
          </NavLink>
          <NavLink to="/button" className="nav-link">
            Button
          </NavLink>
          <NavLink to="/modal" className="nav-link">
            Modal
          </NavLink>
          <NavLink to="/form-fields" className="nav-link">
            Form Fields
          </NavLink>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<OverviewDocs />} />
          <Route path="/button" element={<ButtonDocs />} />
          <Route path="/modal" element={<ModalDocs />} />
          <Route path="/form-fields" element={<FormFieldsDocs />} />
        </Routes>
      </main>
    </>
  );
}

export default App;