import { TextInput, Select, Checkbox } from '../components';
import DocBlock from './DocBlock';

const countries = [
  { value: '', label: 'Choose a country' },
  { value: 'np', label: 'Nepal' },
  { value: 'in', label: 'India' },
  { value: 'us', label: 'United States' },
];

function FormFieldsDocs() {
  return (
    <div>
      <h2>Form Fields</h2>
      <p className="page-intro">
        Every field has a visible label. Errors are linked with
        aria-describedby and the field is marked aria-invalid.
      </p>

      <DocBlock
        title="Text Input"
        description="Use for short free-form text such as a name or email."
      >
        <TextInput label="Name" placeholder="Jane Doe" />
        <TextInput
          label="Email (error)"
          defaultValue="not-an-email"
          error="Email must contain @"
        />
        <TextInput label="Disabled" defaultValue="Cannot edit" disabled />
      </DocBlock>

      <DocBlock
        title="Select"
        description="Use to pick one option from a known list. It is a native select, so keyboard support is built in."
      >
        <Select label="Country" options={countries} />
        <Select
          label="Country (error)"
          options={countries}
          error="Please choose a country"
        />
        <Select label="Disabled" options={countries} disabled />
      </DocBlock>

      <DocBlock
        title="Checkbox"
        description="Use for an independent yes/no choice. Space toggles it, and clicking the label does too."
      >
        <Checkbox label="Accept terms" />
        <Checkbox label="Subscribe" defaultChecked />
        <Checkbox label="Disabled option" disabled />
      </DocBlock>
    </div>
  );
}

export default FormFieldsDocs;