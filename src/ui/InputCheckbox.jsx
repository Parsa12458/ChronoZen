function InputCheckbox({
  id,
  label,
  disabled = false,
  defaultChecked = false,
}) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        name={id}
        id={id}
        className="custom-checkbox"
        disabled={disabled}
        defaultChecked={defaultChecked}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
}

export default InputCheckbox;
