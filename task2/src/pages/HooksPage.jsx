import NameNote from '../components/NameNote';
import ThemePicker from '../components/ThemePicker';

function HooksPage() {
  return (
    <div>
      <h1>Custom Hook: useLocalStorage</h1>
      <NameNote />
      <hr />
      <ThemePicker />
    </div>
  );
}

export default HooksPage;