import { useId } from 'react';

function Checkbox({ label, id, ...props }) {
  const autoId = useId();
  const checkboxId = id ?? autoId;

  return (
    <div className="checkbox">
      <input type="checkbox" id={checkboxId} {...props} />
      <label htmlFor={checkboxId}>{label}</label>
    </div>
  );
}

export default Checkbox;