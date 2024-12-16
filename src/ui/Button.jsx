function Button({
  children,
  variation = "primary",
  type = "button",
  additionalStyles = "",
  onClick = null,
}) {
  const primaryStyles =
    "py-2 bg-primary text-white hover:bg-mediumGreen hover:shadow-md";
  const smallStyles =
    "ml-auto text-xs bg-primary px-3 py-0.5 text-white hover:bg-mediumGreen";
  const secondaryStyles = "border border-darkGreen hover:shadow-md";
  const redStyles = "text-red border border-red hover:shadow-md";

  return (
    <button
      type={type}
      className={`${additionalStyles} ${variation === "primary" && primaryStyles} ${variation === "small" && smallStyles} ${variation === "secondary" && secondaryStyles} flex items-center justify-center rounded font-semibold transition-all duration-300 ${variation === "red" && redStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
