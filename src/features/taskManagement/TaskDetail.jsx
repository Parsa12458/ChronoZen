import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import InputCheckbox from "../../ui/InputCheckbox";
import InputTextarea from "../../ui/InputTextarea";
import Button from "../../ui/Button";
import Badge from "../../ui/Badge";
import Modal from "../../ui/Modal";
import TaskForm from "./TaskForm";
import { useDeleteTask } from "./useDeleteTask";

function TaskDetail({ data }) {
  const {
    id,
    title,
    description,
    category,
    priority,
    date,
    recurringFrequency,
    time,
    reminder,
  } = data;
  const { deleteTask, isLoading: isDeleting } = useDeleteTask();

  return (
    <div className="max-w-xl">
      <div className="mb-7 flex items-center gap-3">
        <h2 className="text-2xl font-bold">Task: {title}</h2>
        <Badge
          variation="solid"
          backgroundColor={category.bgColor}
          additionalStyles={"scale-110"}
        >
          {category.name}
        </Badge>
        <Badge
          variation="outlined"
          borderColor="#6f8779"
          additionalStyles={"scale-110"}
        >
          {priority}
        </Badge>
      </div>
      <form className="grid grid-cols-2 items-start gap-x-10 gap-y-4">
        <div className="col-span-full">
          <InputTextarea
            id="description"
            label="Description"
            placeholder="Enter task description"
            type="text"
            disabled={true}
            defaultValue={description || "-"}
          />
        </div>
        <InputField
          id="date"
          label="Date"
          placeholder="Select due date"
          type="date"
          disabled={true}
          defaultValue={date}
        />
        <InputSelect
          id="recurringFrequency"
          label="Recurring Frequency"
          options={["None", "Daily", "Weekly", "Monthly", "Yearly"]}
          labelType="normal"
          disabled={true}
          defaultValue={recurringFrequency}
        />
        <InputField
          id="time"
          label="Time"
          placeholder="Select due time"
          type="time"
          disabled={true}
          defaultValue={time}
        />

        <div className="mt-4 self-center">
          <InputCheckbox
            id="reminder"
            label="Turn on reminder"
            disabled={true}
            checked={reminder}
          />
        </div>

        <div className="col-span-2 mt-7 flex justify-end gap-3 text-sm">
          <Button
            type="button"
            additionalStyles="w-max px-5 py-2 flex justify-center items-center gap-1"
            variation="red"
            onClick={() => deleteTask(id)}
            isLoading={isDeleting}
          >
            <img src="/icons/remove.svg" alt="remove icon" className="w-5" />
            <span>Remove</span>
          </Button>

          <Modal>
            <Modal.Open opens={`Edit:${id}`}>
              <Button
                type="button"
                additionalStyles="w-28 py-2 flex justify-center items-center gap-1"
                variation="secondary"
              >
                <img src="/icons/edit.svg" alt="edit icon" className="w-3.5" />
                <span>Edit</span>
              </Button>
            </Modal.Open>
            <Modal.Window name={`Edit:${id}`}>
              <TaskForm
                title={`Edit ${title}`}
                task={data}
                taskOperation="edit"
              />
            </Modal.Window>
          </Modal>
        </div>
      </form>
    </div>
  );
}

export default TaskDetail;
