import { toCamelCase } from "../utils/helper";
import WideLabel from "./WideLabel";

function InputFilter({ label, options }) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-0.5 text-sm font-semibold text-darkGreen">
      <WideLabel>{label}</WideLabel>
      <div className="flex h-full items-center divide-x divide-primary overflow-hidden rounded border border-primary">
        {options.map((option, i) => (
          <div
            className="flex h-full w-[6.5rem] cursor-pointer items-center justify-center bg-lightGreen transition-all duration-200 hover:bg-paleGreen"
            key={i}
            id={toCamelCase(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InputFilter;
