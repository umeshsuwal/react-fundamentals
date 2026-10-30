import { useState } from 'react';
import { Button } from '../components';
import DocBlock from './DocBlock';

function ButtonDocs() {
  const [clicks, setClicks] = useState(0);
  const addClick = () => setClicks((prev) => prev + 1);

  return (
    <div>
      <h2>Button</h2>
      <p className="page-intro">
        A real &lt;button&gt;, so it works with Tab, Enter and Space with no
        extra code. Full width on small screens, natural width on larger ones.
      </p>

      <DocBlock
        title="Primary"
        description="Use for the main action on a screen, such as Save or Submit."
      >
        <Button onClick={addClick}>Save</Button>
      </DocBlock>

      <DocBlock
        title="Secondary"
        description="Use for less important or alternative actions, usually next to a primary button."
      >
        <Button variant="secondary" onClick={addClick}>
          Cancel
        </Button>
      </DocBlock>

      <DocBlock
        title="Disabled"
        description="Use when an action is not available. It uses the native disabled attribute, so Tab skips it and clicks do nothing."
      >
        <Button disabled onClick={addClick}>
          Disabled primary
        </Button>
        <Button variant="secondary" disabled onClick={addClick}>
          Disabled secondary
        </Button>
      </DocBlock>

      <p>
        Total clicks: <strong>{clicks}</strong> (disabled buttons never add to
        it)
      </p>
    </div>
  );
}

export default ButtonDocs;