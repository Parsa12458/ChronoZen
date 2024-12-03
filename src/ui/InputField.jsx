function InputField({ id, label, placeHolder, type = "text" }) {
  return (
    <div className="flex flex-col text-left">
      <label htmlFor={id} className="mb-0.5 text-xs font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeHolder}
        className="rounded border border-mediumGreen bg-lightGreen px-4 py-1.5 font-semibold placeholder:text-mediumGreen/60 autofill:bg-white focus:outline-0"
      />
    </div>
  );
}

export default InputField;
