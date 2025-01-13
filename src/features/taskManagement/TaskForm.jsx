import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import InputCheckbox from "../../ui/InputCheckbox";
import InputTextarea from "../../ui/InputTextarea";
import Button from "../../ui/Button";

function TaskForm({ title, onCloseModal }) {
  return (
    <div>
      <h2 className="mb-7 text-2xl font-bold">{title}</h2>
      <form className="grid grid-cols-2 items-start gap-x-10 gap-y-4">
        <InputField
          id="taskTitle"
          label="Task Title"
          placeholder="Enter task title"
          type="text"
        />
        <InputSelect
          id="taskPriority"
          label="Priority"
          options={["High", "Medium", "Low"]}
          labelType="normal"
        />
        <InputTextarea
          id="taskDescription"
          label="Description"
          placeholder="Enter task description"
          type="text"
        />
        <InputSelect
          id="taskCategory"
          label="Category"
          options={["All", "Personal", "Work"]}
          labelType="normal"
        />
        <InputField
          id="taskDate"
          label="Date"
          placeholder="Select due date"
          type="date"
        />
        <InputSelect
          id="taskRecurringFrequency"
          label="Recurring Frequency"
          options={["None", "Daily", "Weekly", "Monthly", "Yearly"]}
          labelType="normal"
        />
        <InputField
          id="taskTime"
          label="Time"
          placeholder="Select due time"
          type="time"
        />

        <div className="mt-4 self-center">
          <InputCheckbox id="taskReminder" label="Turn on reminder" />
        </div>

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

export default TaskForm;
