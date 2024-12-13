import { toCamelCase } from "../utils/helper";
import WideLabel from "./WideLabel";

function InputSelect({ label, id, options, labelType = "wide" }) {
  if (labelType === "wide")
    return (
      <div className="relative flex flex-col items-center justify-center gap-0.5 text-sm font-semibold">
        <WideLabel id={id}>{label}</WideLabel>
        <select
          name={id}
          id={id}
          className="h-full w-40 cursor-pointer appearance-none rounded border border-darkGreen bg-transparent py-2 pl-5 pr-10"
        >
          {options.map((option, i) => (
            <option
              value={toCamelCase(option)}
              key={i}
              className="bg-mintGreen"
            >
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex w-9 items-center pr-4">
          <img src="/icons/arrow-down.svg" />
        </div>
      </div>
    );

  if (labelType === "normal")
    return (
      <div className="flex flex-col text-left">
        <label htmlFor={id} className="mb-0.5 text-xs font-semibold">
          {label}
        </label>
        <div className="relative">
          <select
            name={id}
            id={id}
            className="h-full w-full cursor-pointer appearance-none rounded border border-darkGreen bg-transparent py-1.5 pl-5 pr-10 text-sm"
          >
            {options.map((option, i) => (
              <option
                value={toCamelCase(option)}
                key={i}
                className="bg-mintGreen"
              >
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex w-9 items-center pr-4">
            <img src="/icons/arrow-down.svg" />
          </div>
        </div>
      </div>
    );
}

export default InputSelect;
