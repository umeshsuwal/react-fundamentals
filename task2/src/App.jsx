import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import HooksPage from './pages/HooksPage';
import FormPage from './pages/FormPage';

const linkStyle = ({ isActive }) => ({
  marginRight: '1rem',
  fontWeight: isActive ? 'bold' : 'normal',
});

function App() {
  return (
    <div>
      <h1>React Fundamentals - Task 2</h1>
      <nav>
        <NavLink to="/hooks" style={linkStyle}>
          Custom Hook
        </NavLink>
        <NavLink to="/form" style={linkStyle}>
          Controlled Form
        </NavLink>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Navigate to="/hooks" replace />} />
        <Route path="/hooks" element={<HooksPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;