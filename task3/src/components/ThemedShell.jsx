import useTheme from '../context/useTheme';

function ThemedShell({ children }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      style={{
        padding: '1rem',
        background: isDark ? '#1f2937' : '#ffffff',
        color: isDark ? '#f9fafb' : '#111827',
        border: '1px solid #888',
      }}
    >
      {children}
    </div>
  );
}

export default ThemedShell;