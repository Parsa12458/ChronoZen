function WideLabel({ children, id = "" }) {
  // Parent must be relative
  return (
    <label
      htmlFor={id}
      className="absolute bottom-10 text-xs font-normal uppercase tracking-wider"
    >
      {children}
    </label>
  );
}

export default WideLabel;
