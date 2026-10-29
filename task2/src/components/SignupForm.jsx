import { useState } from 'react';

const initialValues = { name: '', email: '', age: '' };

function validate(values) {
  const errors = {};

  const name = values.name.trim();
  if (!name) errors.name = 'Name is required';
  else if (name.length < 2) errors.name = 'Name must be at least 2 characters';

  if (!values.email) errors.email = 'Email is required';
  else if (!values.email.includes('@')) errors.email = 'Email must contain @';
  else if (!/^\S+@\S+\.\S+$/.test(values.email))
    errors.email = 'Enter a valid email like name@example.com';

  if (values.age === '') errors.age = 'Age is required';
  else if (!Number.isInteger(Number(values.age)) || Number(values.age) <= 0)
    errors.age = 'Age must be a positive whole number';
  else if (Number(values.age) > 120) errors.age = 'Age must be 120 or less';

  return errors;
}

function SignupForm() {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(null);

  const errors = validate(values);

  console.log('SignupForm rendered', values);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setSuccess(null);
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    if (Object.keys(errors).length === 0) {
      setSuccess(`Signed up: ${values.name.trim()} (${values.email})`);
      setValues(initialValues);
      setTouched({});
      setSubmitted(false);
    }
  }

  function fieldError(field) {
    return (touched[field] || submitted) && errors[field];
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {fieldError('name') && (
          <p role="alert" style={{ color: 'red' }}>
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {fieldError('email') && (
          <p role="alert" style={{ color: 'red' }}>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <br />
        <input
          id="age"
          name="age"
          inputMode="numeric"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {fieldError('age') && (
          <p role="alert" style={{ color: 'red' }}>
            {errors.age}
          </p>
        )}
      </div>

      <button type="submit">Sign up</button>

      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
}

export default SignupForm;