import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import InputCheckbox from "../../ui/InputCheckbox";
import InputTextarea from "../../ui/InputTextarea";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { toCamelCase } from "../../utils/helper";
import { useEditTask } from "./useEditTask";
import { useTasksCategories } from "./useTasksCategories";
import { useAddTask } from "./useAddTask";
import toast from "react-hot-toast";

function TaskForm({ title, taskOperation, onCloseModal, task }) {
  // TODO: implement adding task
  const { handleSubmit, register } = useForm({
    defaultValues: {
      title: task?.title || "",
      priority: task?.priority || "high",
      description: task?.description || "",
      category: toCamelCase(task?.category?.name || "all"),
      date: task?.date || null,
      recurringFrequency: task?.recurringFrequency || "none",
      time: task?.time ? task.time.slice(0, 5) : null,
      reminder: task?.reminder || false,
    },
  });
  const { tasksCategories } = useTasksCategories();
  const { editTask, isEditing } = useEditTask();
  const { addTask, isAdding } = useAddTask();

  function onError(errors) {
    toast.dismiss();
    Object.keys(errors).forEach((key) => {
      toast.error(errors[key].message);
    });
  }

  function onSubmit(data) {
    const selectedCategory = tasksCategories.find(
      (category) => toCamelCase(category.name) === data.category,
    );
    const editData = { ...data, id: task?.id, category: selectedCategory };
    const addData = { ...data, category: selectedCategory, checked: false };
    console.log(addData);
    if (taskOperation === "edit") editTask(editData);
    if (taskOperation === "add") addTask(addData);
    onCloseModal?.();
  }

  return (
    <div>
      <h2 className="mb-7 text-2xl font-bold">{title}</h2>
      <form
        className="grid grid-cols-2 items-start gap-x-10 gap-y-4"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <InputField
          id="title"
          label="Task Title*"
          placeholder="Enter task title"
          type="text"
          register={register ? register : false}
          validationRules={{ required: "Task title is required" }}
        />
        <InputSelect
          id="priority"
          label="Priority"
          options={["High", "Medium", "Low"]}
          labelType="normal"
          register={register ? register : false}
        />
        <InputTextarea
          id="description"
          label="Description"
          placeholder="Enter task description"
          type="text"
          register={register ? register : false}
        />
        <InputSelect
          id="category"
          label="Category"
          options={["All", "Personal", "Work"]}
          labelType="normal"
          register={register ? register : false}
        />
        <InputField
          id="date"
          label="Date"
          placeholder="Select due date"
          type="date"
          register={register ? register : false}
        />
        <InputSelect
          id="recurringFrequency"
          label="Recurring Frequency"
          options={["None", "Daily", "Weekly", "Monthly", "Yearly"]}
          labelType="normal"
          register={register ? register : false}
        />
        <InputField
          id="time"
          label="Time"
          placeholder="Select due time"
          type="time"
          register={register ? register : false}
        />

        <div className="mt-4 self-center">
          <InputCheckbox
            id="reminder"
            label="Turn on reminder"
            register={register ? register : false}
          />
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
          <Button
            type="submit"
            additionalStyles="px-7"
            variation="primary"
            isLoading={isEditing || isAdding}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
