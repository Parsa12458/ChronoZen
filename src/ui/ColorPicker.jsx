import { useState } from "react";
import { hsvaToHex, getContrastingColor } from "@uiw/color-convert";
import Swatch from "@uiw/react-color-swatch";

function Point({ color, checked }) {
  if (!checked) return null;
  return (
    <div
      style={{
        height: 5,
        width: 5,
        borderRadius: "50%",
        backgroundColor: getContrastingColor(color),
      }}
    />
  );
}

function ColorPicker() {
  const [hex, setHex] = useState("#fff");
  return (
    <Swatch
      colors={[
        "#FF6F61",
        "#FFB347",
        "#FDD835",
        "#81C784",
        "#64B5F6",
        "#4DB6AC",
        "#BA68C8",
        "#FF94C2",
        "#998279",
        "#cacaca",
        "#D4E157",
        "#4DD0E1",
        "#F06292",
        "#646464",
        "#ffc0a8",
        "#2f7c7c",
      ]}
      color={hex}
      rectProps={{
        children: <Point />,
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
      onChange={(hsvColor) => {
        setHex(hsvaToHex(hsvColor));
      }}
      className="max-w-48 gap-1"
    />
  );
}

export default ColorPicker;
