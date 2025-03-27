function InputCheckbox({
  id,
  label,
  disabled = false,
  checked = null,
  size,
  labelSize = "sm",
  register,
  validationRules = {},
  onChange,
}) {
  return (
    <div className={`flex gap-2 text-${labelSize}`}>
      <input
        type="checkbox"
        name={id}
        id={id}
        style={{
          width: size ? size : "1.25rem",
          height: size ? size : "1.25rem",
        }}
        className="custom-checkbox"
        disabled={disabled}
        checked={checked}
        onChange={() => onChange?.()}
        {...(register && register(id, validationRules))}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
}

export default InputCheckbox;
