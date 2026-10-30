import { useState } from 'react';
import Button from '../components/Button/Button';

function ButtonPage() {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <h2>Button</h2>
      <Button onClick={() => setClicks((prev) => prev + 1)}>Primary</Button>{' '}
      <Button variant="secondary" onClick={() => setClicks((prev) => prev + 1)}>
        Secondary
      </Button>{' '}
      <Button disabled onClick={() => setClicks((prev) => prev + 1)}>
        Disabled
      </Button>
      <p>Clicks: {clicks}</p>
    </div>
  );
}

export default ButtonPage;