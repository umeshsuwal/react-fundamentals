import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import ButtonDocs from './pages/ButtonDocs';
import ModalDocs from './pages/ModalDocs';
import FormFieldsDocs from './pages/FormFieldsDocs';

function App() {
  return (
    <>
      <header className="topbar">
        <h1 className="brand">Component Library</h1>

        <nav className="nav" aria-label="Main">
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
          <Route path="/" element={<Navigate to="/button" replace />} />
          <Route path="/button" element={<ButtonDocs />} />
          <Route path="/modal" element={<ModalDocs />} />
          <Route path="/form-fields" element={<FormFieldsDocs />} />
        </Routes>
      </main>
    </>
  );
}

export default App;