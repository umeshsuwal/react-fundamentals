import useTheme from '../context/useTheme';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} aria-pressed={theme === 'dark'}>
      Dark mode
    </button>
  );
}

export default ThemeToggle;