import { useState } from 'react';
import { Button, Modal, TextInput, Checkbox } from '../components';
import DocBlock from './DocBlock';

function ModalDocs() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  const emailError = email && !email.includes('@') ? 'Email must contain @' : '';

  return (
    <div>
      <h2>Modal</h2>
      <p className="page-intro">
        An accessible dialog. Focus moves in when it opens, Tab cycles only
        inside it, Escape closes it, and focus returns to the button that opened
        it.
      </p>

      <DocBlock
        title="Closed and open"
        description="Use for short tasks that need the user's full attention, such as confirmations or small forms. The modal below contains several focusable elements so you can test the focus trap."
      >
        <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      </DocBlock>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Subscribe to updates"
      >
        <p>Enter your email to get updates.</p>
        <TextInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />
        <Checkbox label="Send me a weekly summary" />
      </Modal>
    </div>
  );
}

export default ModalDocs;