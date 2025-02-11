import Button from "../../ui/Button";
import InputSelect from "../../ui/InputSelect";
import InputFilter from "../../ui/InputFilter";
import Modal from "../../ui/Modal";
import TaskForm from "./TaskForm";
import Dropdown from "../../ui/Dropdown";
import InputField from "../../ui/InputField";
import ColorPicker from "../../ui/ColorPicker";
import { useTasksCategories } from "./useTasksCategories";
import toast from "react-hot-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddTasksCategory } from "./useAddTasksCategory";

function TasksControls() {
  const {
    tasksCategories = [],
    isLoading: isLoadingCategory,
    error,
  } = useTasksCategories();
  const { addTasksCategory, isLoading: isAddingCategory } =
    useAddTasksCategory();
  const [selectedColorHex, setSelectedColorHex] = useState("#6f8779");
  const { register, handleSubmit, reset } = useForm();
  // TODO: implement a way for deleting categories. also add user id to all requests so each user has his own informations and data

  function onSubmit(data) {
    reset();
    const newData = { ...data, bgColor: selectedColorHex };
    addTasksCategory(newData);
  }

  function onError(errors) {
    toast.dismiss();
    Object.keys(errors).forEach((key) => {
      toast.error(errors[key].message);
    });
  }

  if (error) toast.error(error.message);

  return (
    <div className="mt-8 flex gap-3">
      <Modal>
        <Modal.Open opens="addTask">
          <Button variation="primary" additionalStyles="px-4 text-sm">
            <img
              src="/icons/add-white.svg"
              alt="add icon"
              className="mr-1.5 w-5"
            />
            <span>Add Task</span>
          </Button>
        </Modal.Open>
        <Modal.Window name="addTask">
          <TaskForm title="Add Task" taskOperation="add" />
        </Modal.Window>
      </Modal>

      <Dropdown
        button={
          <Button
            variation="secondary"
            additionalStyles="px-4 text-sm text-darkGreen h-full"
          >
            <img
              src="/icons/add-darkgreen.svg"
              alt="add icon"
              className="mr-1.5 w-5"
            />
            <span>Add Category</span>
          </Button>
        }
        content={
          <li>
            <form
              className="flex flex-col items-start justify-center"
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <div className="flex gap-2">
                <InputField
                  placeholder="Enter Category"
                  register={register}
                  validationRules={{ required: "Enter category name" }}
                  id="name"
                  disabled={isLoadingCategory}
                />
                <Button
                  type="submit"
                  additionalStyles="px-4 h-[34px]"
                  variation="primary"
                  isLoading={isAddingCategory}
                >
                  Add
                </Button>
              </div>
              <ColorPicker onColorChange={setSelectedColorHex} />
            </form>
          </li>
        }
      />

      <InputSelect
        label="category"
        id="category"
        options={
          isLoadingCategory
            ? ["Loading..."]
            : tasksCategories.length === 0
              ? ["All"]
              : tasksCategories.map((category) => category.name)
        }
        disabled={isLoadingCategory}
      />
      <InputFilter
        label="priority"
        id="priority"
        options={["High", "Medium", "Low"]}
      />
      <InputFilter
        label="status"
        id="status"
        options={["In Progress", "Uncompleted", "Completed"]}
      />
    </div>
  );
}

export default TasksControls;
