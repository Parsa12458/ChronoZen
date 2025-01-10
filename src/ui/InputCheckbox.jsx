function InputCheckbox({
  id,
  label,
  disabled = false,
  defaultChecked = false,
  size,
  labelSize = "sm",
}) {
  return (
    <div className={`flex gap-2 text-${labelSize}`}>
      <input
        type="checkbox"
        name={id}
        id={id}
        className={`custom-checkbox ${size ? `!h-${size} !w-${size}` : "h-5 w-5"}`}
        disabled={disabled}
        defaultChecked={defaultChecked}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
}

export default InputCheckbox;
