function Button({
  children,
  variation = "primary",
  type = "button",
  additionalStyles = "",
  onClick = null,
  isLoading = false,
}) {
  const primaryStyles =
    "py-2 bg-primary text-white hover:bg-mediumGreen hover:shadow-md disabled:bg-primary disabled:shadow-none";
  const smallStyles =
    "ml-auto text-xs bg-primary px-3 py-0.5 text-white hover:bg-mediumGreen disabled:bg-primary";
  const secondaryStyles =
    "border border-darkGreen hover:shadow-md disabled:shadow-none";
  const redStyles =
    "text-red border border-red hover:shadow-md disabled:shadow-md";

  return (
    <button
      type={type}
      className={`${additionalStyles} ${variation === "primary" && primaryStyles} ${variation === "small" && smallStyles} ${variation === "secondary" && secondaryStyles} flex items-center justify-center rounded font-semibold transition-all duration-300 ${variation === "red" && redStyles} disabled:cursor-not-allowed disabled:opacity-80`}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading && (
        <div
          className={`loading loading-spinner mr-2 ${variation === "small" ? "w-3" : "loading-xs"}`}
        ></div>
      )}
      {children}
    </button>
  );
}

export default Button;
