import { useEffect, useState } from "react";
import WideLabel from "./WideLabel";

function InputFilter({ label, options, onChange, defaultValue }) {
  const [selectedOption, setSelectedOption] = useState(defaultValue || "");

  useEffect(() => {
    setSelectedOption(defaultValue);
  }, [defaultValue]);

  return (
    <div className="relative flex flex-col items-center justify-center gap-0.5 text-sm font-semibold text-darkGreen">
      <WideLabel>{label}</WideLabel>
      <div
        className="flex h-full items-center divide-x divide-primary overflow-hidden rounded border border-primary"
        tabIndex={0}
      >
        {options.map((option, i) => (
          <div
            className={`flex h-full w-[6.5rem] cursor-pointer select-none items-center justify-center bg-lightGreen transition-all duration-200 ${option === selectedOption ? "bg-primary text-white hover:bg-primary" : "hover:bg-paleGreen"}`}
            key={i}
            id={option}
            onClick={() => {
              if (selectedOption === option) {
                setSelectedOption("");
                onChange?.("");
              } else {
                setSelectedOption(option);
                onChange?.(option);
              }
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InputFilter;
