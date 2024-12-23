import { getContrastingTextColor } from "../utils/helper";

function Badge({
  children,
  variation = "solid",
  backgroundColor,
  borderColor,
  additionalStyles,
}) {
  return (
    <span
      className={`badge rounded text-xs font-semibold ${additionalStyles} ${variation === "solid" ? "border-0" : ""} ${variation === "outlined" ? "border-2" : ""}`}
      style={{
        backgroundColor: backgroundColor || "transparent",
        borderColor: borderColor || "transparent",
        color:
          variation === "solid"
            ? getContrastingTextColor(backgroundColor)
            : "#202721",
      }}
    >
      {children}
    </span>
  );
}

export default Badge;
