function Button({
  children,
  variation = "primary",
  type = "button",
  additionalStyles = "",
}) {
  const primaryStyles = "py-2 bg-primary text-white hover:bg-mediumGreen";
  const smallStyles =
    "ml-auto text-xs bg-primary px-3 py-0.5 text-white hover:bg-mediumGreen";

  return (
    <button
      type={type}
      className={`${additionalStyles} ${variation === "primary" && primaryStyles} ${variation === "small" && smallStyles} flex items-center justify-center rounded font-semibold transition-all duration-300`}
    >
      {children}
    </button>
  );
}

export default Button;
