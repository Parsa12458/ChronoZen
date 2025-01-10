import { useState } from "react";

function InputSteps({ id, label, placeholder = "" }) {
  const [steps, setSteps] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingStepId, setEditingStepId] = useState(null);

  const handleAddStep = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSteps([...steps, { text: inputValue, id: Date.now() }]);
      setInputValue("");
    }
  };

  const handleEditStep = (id, newText) => {
    setSteps(
      steps.map((step) => (step.id === id ? { ...step, text: newText } : step)),
    );
  };

  const handleDeleteStep = (e, id) => {
    e.preventDefault();
    setSteps(steps.filter((step) => step.id !== id));
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
          onKeyDown={(e) => e.key === "Enter" && handleAddStep(e)}
          placeholder={placeholder}
          className="w-full rounded border border-mediumGreen bg-transparent py-1.5 pl-3 pr-8 text-sm font-medium placeholder:text-mediumGreen/60 autofill:bg-white focus:outline-0"
        />
        <button
          className="absolute right-0 top-2 mr-2 h-max w-max"
          onClick={handleAddStep}
        >
          <img src="/icons/arrow-down-big.svg" />
        </button>
      </div>

      <ol className="mt-2 space-y-2 text-xs leading-4">
        {steps.map((step, i) => (
          <li key={i}>
            {editingStepId === step.id ? (
              <div className="relative">
                <input
                  type="text"
                  value={step.text}
                  onChange={(e) => handleEditStep(step.id, e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && setEditingStepId(null)}
                  className="w-full rounded border border-mediumGreen bg-transparent px-3 py-1 text-sm font-medium placeholder:text-mediumGreen/60 autofill:bg-white focus:outline-0"
                />
              </div>
            ) : (
              <div className="flex items-start gap-2">
                <p className="flex items-start">
                  <span className="inline-block">{i + 1}.</span>
                  <span className="ml-1 inline-block">{step.text}</span>
                </p>

                <div className="-mb-0.5 ml-auto flex flex-shrink-0 items-center justify-center gap-1">
                  <button
                    onClick={() => setEditingStepId(step.id)}
                    type="button"
                  >
                    <img
                      src="/icons/edit.svg"
                      alt="user edit icon"
                      className="w-3"
                    />
                  </button>

                  <button onClick={(e) => handleDeleteStep(e, step.id)}>
                    <img
                      src="/icons/remove.svg"
                      alt="user edit icon"
                      className="w-4"
                    />
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default InputSteps;
