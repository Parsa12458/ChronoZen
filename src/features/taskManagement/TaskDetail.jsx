import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import InputCheckbox from "../../ui/InputCheckbox";
import InputTextarea from "../../ui/InputTextarea";
import Button from "../../ui/Button";
import Badge from "../../ui/Badge";

function TaskDetail({ data }) {
  const {
    taskTitle,
    taskDescription,
    taskCategory,
    taskPriority,
    taskDate,
    taskRecurringFrequency,
    taskTime,
    taskReminder,
  } = data;

  return (
    <div>
      <div className="mb-7 flex items-center gap-3">
        <h2 className="text-2xl font-bold">Task: {taskTitle}</h2>
        <Badge
          variation="solid"
          backgroundColor={`${taskCategory === "Work" ? "#2D5562" : ""}${taskCategory === "Personal" ? "#AD5973" : ""}`}
          additionalStyles={"scale-110"}
        >
          {taskCategory}
        </Badge>
        <Badge
          variation="outlined"
          borderColor="#6f8779"
          additionalStyles={"scale-110"}
        >
          {taskPriority}
        </Badge>
      </div>
      <form className="grid grid-cols-2 items-start gap-x-10 gap-y-4">
        <div className="col-span-full">
          <InputTextarea
            id="taskDescription"
            label="Description"
            placeholder="Enter task description"
            type="text"
            disabled={true}
            defaultValue={taskDescription || "-"}
          />
        </div>
        <InputField
          id="taskDate"
          label="Date"
          placeholder="Select due date"
          type="date"
          disabled={true}
          defaultValue={taskDate}
        />
        <InputSelect
          id="taskRecurringFrequency"
          label="Recurring Frequency"
          options={["None", "Daily", "Weekly", "Monthly", "Yearly"]}
          labelType="normal"
          disabled={true}
          defaultValue={taskRecurringFrequency}
        />
        <InputField
          id="taskTime"
          label="Time"
          placeholder="Select due time"
          type="time"
          disabled={true}
          defaultValue={taskTime}
        />

        <div className="mt-4 self-center">
          <InputCheckbox
            id="taskReminder"
            label="Turn on reminder"
            disabled={true}
            defaultChecked={taskReminder}
          />
        </div>

        <div className="col-span-2 mt-7 flex justify-end gap-3 text-sm">
          <Button
            type="button"
            additionalStyles="w-28 py-2 flex justify-center items-center gap-1"
            variation="red"
          >
            <img src="/icons/remove.svg" alt="remove icon" className="w-5" />
            <span>Remove</span>
          </Button>
          <Button
            type="submit"
            additionalStyles="w-28 py-2 flex justify-center items-center gap-1"
            variation="secondary"
          >
            <img src="/icons/edit.svg" alt="edit icon" className="w-3.5" />
            <span>Edit</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TaskDetail;
