import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';

const linkStyle = ({ isActive }) => ({
  marginRight: '1rem',
  fontWeight: isActive ? 'bold' : 'normal',
});

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>React Fundamentals - Task 1</h1>

      <nav style={{ marginBottom: '1rem' }}>
        <NavLink to="/counter" style={linkStyle}>
          Counter
        </NavLink>
        <NavLink to="/posts" style={linkStyle}>
          Data Fetching
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/counter" replace />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/posts" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;