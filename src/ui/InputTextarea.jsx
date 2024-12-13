function InputTextarea({ label, placeholder, id }) {
  return (
    <div className="flex flex-col text-left">
      <label htmlFor={id} className="mb-0.5 text-xs font-semibold">
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        className="h-[34px] rounded border border-mediumGreen bg-transparent px-3 py-1.5 text-sm font-medium placeholder:text-mediumGreen/60 autofill:bg-white focus:outline-0"
      />
    </div>
  );
}

export default InputTextarea;
