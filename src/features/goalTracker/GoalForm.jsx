import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import InputSteps from "../../ui/InputSteps";

function GoalForm({ title, onCloseModal }) {
  return (
    <div>
      <h2 className="mb-7 text-2xl font-bold">{title}</h2>
      <form className="grid grid-cols-2 items-start gap-x-10 gap-y-4">
        <InputField
          id="goalTitle"
          label="Goal Title"
          placeholder="Enter goal title"
          type="text"
        />
        <InputField
          id="goalReward"
          label="Reward"
          placeholder="Enter a reward"
          type="text"
        />
        <InputField
          id="goalDeadlien"
          label="Deadline"
          placeholder="Select due date"
          type="date"
        />
        <div className="row-span-4">
          <InputSteps
            id="goalSteps"
            label="Steps"
            placeholder="Enter each step"
          />
        </div>
        <InputSelect
          id="goalPriority"
          label="Priority"
          options={["High", "Medium", "Low"]}
          labelType="normal"
        />
        <InputSelect
          id="goalCategory"
          label="Category"
          options={["All", "Personal", "Work"]}
          labelType="normal"
        />

        <div className="col-span-2 mt-7 flex justify-end gap-3 text-sm">
          <Button
            type="button"
            additionalStyles="px-7"
            variation="secondary"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button type="submit" additionalStyles="px-7" variation="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default GoalForm;
