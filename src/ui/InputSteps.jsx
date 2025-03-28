import { useState } from "react";
import { useFieldArray, useWatch } from "react-hook-form";
import toast from "react-hot-toast";

function InputSteps({ id, label, placeholder = "", control, register }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "steps",
  });

  const watchedSteps = useWatch({
    control,
    name: "steps",
  });

  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddStep = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      append({
        id: Date.now(),
        step: inputValue,
        checked: false,
      });
      setInputValue("");
    }
  };

  const handleFinishEditing = (e) => {
    const value = e.target.value.trim();
    if (!value) {
      toast.error("Step is required");
    } else {
      setEditingIndex(null);
    }
  };

  return (
    <div className="flex flex-col text-left">
      {label && (
        <label htmlFor={id} className="mb-0.5 text-xs font-semibold">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAddStep(e);
          }}
          placeholder={placeholder}
          className="w-full rounded border border-mediumGreen bg-transparent py-1.5 pl-3 pr-8 text-sm font-medium placeholder:text-mediumGreen/60 focus:outline-0"
        />
        <button
          type="button"
          className="absolute right-0 top-2 mr-2 h-max w-max"
          onClick={handleAddStep}
        >
          <img src="/icons/arrow-down-big.svg" alt="Add step" />
        </button>
      </div>

      <ol className="mt-2 space-y-2 text-xs leading-4">
        {fields.map((field, index) => {
          const stepValue =
            watchedSteps &&
            watchedSteps[index] &&
            watchedSteps[index].step !== undefined
              ? watchedSteps[index].step
              : field.step;

          return (
            <li key={field.id} className="flex items-center justify-between">
              {editingIndex === index ? (
                <input
                  type="text"
                  defaultValue={stepValue}
                  {...register(`steps.${index}.step`, {
                    required: "Step is required",
                  })}
                  className="w-full rounded border border-mediumGreen bg-transparent px-3 py-1 text-sm font-medium focus:outline-0"
                  onBlur={handleFinishEditing}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleFinishEditing(e);
                    }
                  }}
                />
              ) : (
                <div className="flex flex-1 items-center space-x-2">
                  <span>
                    {index + 1}.<span className="ml-1">{stepValue}</span>
                  </span>
                  <button type="button" onClick={() => setEditingIndex(index)}>
                    <img
                      src="/icons/edit.svg"
                      alt="Edit step"
                      className="w-3"
                    />
                  </button>
                </div>
              )}
              <button
                type="button"
                onClick={() => {
                  setEditingIndex(null);
                  remove(index);
                }}
                className="ml-2"
              >
                <img
                  src="/icons/remove.svg"
                  alt="Remove step"
                  className="w-4"
                />
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default InputSteps;
