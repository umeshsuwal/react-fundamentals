function Button({
  variant = 'primary',
  disabled = false,
  type = 'button',
  children,
  ...props
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;