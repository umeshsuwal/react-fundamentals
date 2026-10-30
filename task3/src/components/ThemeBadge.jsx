import useTheme from '../context/useTheme';

function ThemeBadge() {
  const { theme } = useTheme();

  return <strong>{theme}</strong>;
}

export default ThemeBadge;