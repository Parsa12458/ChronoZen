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
  labelClassName = "",
  isLoading = false,
  spinnerSize = "sm",
}) {
  return (
    <div className={`flex gap-2 text-${labelSize}`}>
      {!isLoading ? (
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
      ) : (
        <span
          className={`loading loading-spinner loading-${spinnerSize} bg-primary`}
        ></span>
      )}
      {label && (
        <label htmlFor={id} className={labelClassName ? labelClassName : ""}>
          {label}
        </label>
      )}
    </div>
  );
}

export default InputCheckbox;
