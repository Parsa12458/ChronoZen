function Button({
  children,
  variation = "primary",
  type = "button",
  additionalStyles = "",
}) {
  const primaryStyles = "py-2 bg-primary text-white hover:bg-mediumGreen";

  return (
    <button
      type={type}
      className={`${additionalStyles} ${variation === "primary" && primaryStyles} flex items-center justify-center rounded font-semibold transition-all duration-300`}
    >
      {children}
    </button>
  );
}

export default Button;
