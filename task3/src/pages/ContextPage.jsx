import ThemeProvider from '../context/ThemeProvider';
import ThemedShell from '../components/ThemedShell';
import Toolbar from '../components/Toolbar';
import Card from '../components/Card';

function ContextPage() {
  return (
    <div>
      <h2>Context</h2>
      <ThemeProvider>
        <ThemedShell>
          <Toolbar />
          <Card />
        </ThemedShell>
      </ThemeProvider>
    </div>
  );
}

export default ContextPage;