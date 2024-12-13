import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import InputCheckbox from "../../ui/InputCheckbox";
import InputTextarea from "../../ui/InputTextarea";

function TaskForm({ title }) {
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
          options={["None", "Daily", "Weekly", "Monthly"]}
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
      </form>
    </div>
  );
}

export default TaskForm;
