import Button from "../../ui/Button";
import InputSelect from "../../ui/InputSelect";
import InputFilter from "../../ui/InputFilter";
import Modal from "../../ui/Modal";
import TaskForm from "./TaskForm";
import Dropdown from "../../ui/Dropdown";
import InputField from "../../ui/InputField";
import ColorPicker from "../../ui/ColorPicker";

function TasksControls() {
  return (
    <div className="mt-8 flex gap-3">
      <Button
        variation="primary"
        additionalStyles="px-4 text-sm"
        onClick={() => document.getElementById("addTask").showModal()}
      >
        <img src="/icons/add-white.svg" alt="add icon" className="mr-1.5 w-5" />
        <span>Add Task</span>
      </Button>
      <Modal id="addTask" content={<TaskForm title="Add Task" />} />

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
            <form className="flex flex-col items-start justify-center">
              <div className="flex gap-2">
                <InputField placeholder="Enter Category" />
                <Button
                  type="submit"
                  additionalStyles="px-4 h-[34px]"
                  variation="primary"
                >
                  Add
                </Button>
              </div>
              <ColorPicker />
            </form>
          </li>
        }
      />

      <InputSelect
        label="category"
        id="category"
        options={["All Categories", "Work", "Personal"]}
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
