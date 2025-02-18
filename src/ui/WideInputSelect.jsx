import React, { useState, createContext, useContext, useEffect } from "react";
import WideLabel from "./WideLabel";
import { useOutsideClick } from "../hooks/useOutsideClick";

const WideInputSelectContext = createContext();

const useWideInputSelectContext = () => useContext(WideInputSelectContext);

const WideInputSelect = ({
  id,
  label,
  children,
  disabled,
  register,
  validationRules,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  useEffect(() => {
    if (React.Children.count(children) > 0) {
      const childrenArray = React.Children.toArray(children);
      const optionValues = childrenArray
        .filter(React.isValidElement)
        .map((child) => child.props.value);

      if (!optionValues.includes(selectedOption)) {
        const firstChild = childrenArray[0];
        if (React.isValidElement(firstChild)) {
          const { value } = firstChild.props;
          setSelectedOption(value);

          if (register) {
            register(id, validationRules).onChange({ target: { value } });
          }
        }
      }
    }
  }, [children, selectedOption, register, id, validationRules]);

  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
    setIsOpen(false);
    if (register) {
      register(id, validationRules).onChange({
        target: { value: optionValue },
      });
    }
  };

  return (
    <WideInputSelectContext.Provider
      value={{ selectedOption, handleOptionClick }}
    >
      <div
        className={`relative flex flex-col items-center justify-center gap-0.5 text-sm font-semibold ${disabled ? "opacity-50" : ""}`}
        ref={ref}
      >
        <WideLabel id={id}>{label}</WideLabel>
        <button
          name={id}
          id={id}
          className={`h-full w-40 ${disabled ? "cursor-default" : "cursor-pointer"} appearance-none rounded border border-darkGreen bg-transparent py-2 pl-5 pr-10 text-left`}
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled}
        >
          {selectedOption}
        </button>
        {isOpen && (
          <div className="absolute top-10 mt-1 w-full overflow-hidden rounded-md border border-mediumGreen bg-mintGreen shadow-lg">
            <ul className="max-h-60 overflow-y-auto">{children}</ul>
          </div>
        )}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex w-9 items-center pr-4">
          <img src="/icons/arrow-down.svg" />
        </div>
      </div>
    </WideInputSelectContext.Provider>
  );
};

function Option({ children, value }) {
  const { handleOptionClick, selectedOption } = useWideInputSelectContext();
  const isSelected = selectedOption === value;
  return (
    <li
      className={`hover:bg-gray-100 cursor-pointer bg-mintGreen px-4 py-2 ${isSelected ? "bg-paleGreen" : ""}`}
      onClick={() => handleOptionClick(value)}
    >
      {children}
    </li>
  );
}

WideInputSelect.Option = Option;

export default WideInputSelect;
