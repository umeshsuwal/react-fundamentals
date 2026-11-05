import { useState } from 'react';
import { Button, Checkbox, Modal, Select, TextInput } from '../components';

const countries = [
  { value: '', label: 'Choose a country' },
  { value: 'np', label: 'Nepal' },
  { value: 'ca', label: 'Canada' },
  { value: 'us', label: 'United States' },
];

function OverviewDocs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overview">
      <section className="hero">
        <p className="section-kicker">React component library</p>
        <h2>Component Library</h2>
        <p>
          Reusable, accessible components with clear variants, states, and
          keyboard behavior.
        </p>
        <div className="hero-actions">
          <Button onClick={() => document.getElementById('showcase').scrollIntoView({ behavior: 'smooth' })}>
            View components
          </Button>
          <a className="text-link" href="/button">Start with Button <span aria-hidden="true">-&gt;</span></a>
        </div>
      </section>

      <section id="showcase" className="showcase" aria-labelledby="showcase-title">
        <div className="section-heading">
          <div>
            <h2 id="showcase-title">Component showcase</h2>
          </div>
        </div>

        <div className="showcase-grid">
          <article className="showcase-card showcase-card-wide">
            <div className="card-heading">
              <div><h3>Buttons</h3></div>
              <a href="/button" aria-label="View Button documentation">View docs -&gt;</a>
            </div>
            <p>Clear actions with purposeful hierarchy.</p>
            <div className="button-showcase">
              <Button>Primary action</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="danger">Delete</Button>
              <Button disabled>Disabled</Button>
            </div>
          </article>

          <article className="showcase-card">
            <div className="card-heading">
              <div><h3>Modal</h3></div>
              <a href="/modal" aria-label="View Modal documentation">Docs -&gt;</a>
            </div>
            <p>Focused moments without losing your place.</p>
            <div className="modal-preview">
              <span className="preview-icon" aria-hidden="true">+</span>
              <Button variant="outline" onClick={() => setIsOpen(true)}>Open modal</Button>
            </div>
          </article>

          <article className="showcase-card showcase-card-wide">
            <div className="card-heading">
              <div><h3>Form fields</h3></div>
              <a href="/form-fields" aria-label="View Form Fields documentation">View docs -&gt;</a>
            </div>
            <p>Friendly inputs with labels, validation, and helpful states.</p>
            <div className="form-showcase">
              <TextInput label="Email address" defaultValue="hello@example.com" />
              <Select label="Country" options={countries} defaultValue="ca" />
              <div className="checkbox-preview"><Checkbox label="I agree to the terms" defaultChecked /></div>
            </div>
          </article>
        </div>
      </section>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="A focused moment">
        <p>This dialog demonstrates focus management, keyboard trapping, and a clear way to close.</p>
      </Modal>
    </div>
  );
}

export default OverviewDocs;
