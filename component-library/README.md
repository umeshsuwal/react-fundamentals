# Component Library

Accessible, responsive React components: **Button**, **Modal**, **TextInput**, **Select** and **Checkbox**.

## Run the demo

```bash
npm install
npm run dev
```

Use the nav links (Button, Modal, Form Fields) to see every component in each of its variants and states.

## Usage

```jsx
import { Button, Modal, TextInput, Select, Checkbox } from './components';
```

Extra props (`onClick`, `onChange`, `disabled`, `name`, ...) are passed to the underlying native element.

| Component | Key props | Notes |
|---|---|---|
| `Button` | `variant` (`primary` or `secondary`), `disabled`, `type` | Real `<button>`. `type` defaults to `button`. |
| `Modal` | `isOpen`, `onClose`, `title`, `children` | `role="dialog"`, `aria-modal`, titled by `title`. |
| `TextInput` | `label`, `error` | Label linked via `htmlFor`. `error` sets `aria-invalid` and `aria-describedby`. |
| `Select` | `label`, `options` (`{ value, label }[]`), `error` | Native `<select>`. Same error wiring as TextInput. |
| `Checkbox` | `label` | Native checkbox with an associated label. |

```jsx
<Button variant="secondary" onClick={cancel}>Cancel</Button>

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Subscribe">
  <TextInput label="Email" value={email} onChange={onChange} error={emailError} />
</Modal>
```

## Modal keyboard behavior

- **Open:** focus moves into the modal.
- **While open:** Tab and Shift+Tab cycle only inside it (focus trap).
- **Escape:** closes it.
- **Close:** focus returns to the element that opened it.

## Accessibility and responsiveness

- Native elements everywhere (`button`, `input`, `select`), so keyboard support is built in.
- Every field has a visible, associated label, and errors are announced.
- One visible focus ring on all focusable elements.
- Mobile-first: base styles are for narrow screens, with a `min-width: 600px` breakpoint for wider ones.