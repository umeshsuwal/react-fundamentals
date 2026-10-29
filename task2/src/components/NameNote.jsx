import useLocalStorage from '../hooks/useLocalStorage';

function NameNote() {
  const [name, setName] = useLocalStorage('task2-name', '');

  return (
    <div>
      <h2>Component A: Name</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />
      <p>{name ? `Hello, ${name}!` : 'No name saved yet'}</p>
    </div>
  );
}

export default NameNote;