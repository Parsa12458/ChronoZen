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
        className={`custom-checkbox ${size ? `!h-${size} !w-${size}` : "h-5 w-5"}`}
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
