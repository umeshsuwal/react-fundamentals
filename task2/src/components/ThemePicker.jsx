import useLocalStorage from '../hooks/useLocalStorage';

function ThemePicker() {
  const [theme, setTheme] = useLocalStorage('task2-theme', 'light');

  const isDark = theme === 'dark';

  return (
    <div
      style={{
        padding: '1rem',
        background: isDark ? '#222' : '#f5f5f5',
        color: isDark ? '#fff' : '#000',
      }}
    >
      <h2>Component B: Theme</h2>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(isDark ? 'light' : 'dark')}>
        Switch to {isDark ? 'light' : 'dark'}
      </button>
    </div>
  );
}

export default ThemePicker;