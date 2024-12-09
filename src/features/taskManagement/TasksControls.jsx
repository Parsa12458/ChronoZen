import Button from "../../ui/Button";
import InputSelect from "../../ui/InputSelect";
import InputFilter from "../../ui/InputFilter";

function TasksControls() {
  return (
    <div className="mt-9 flex gap-3">
      <Button variation="primary" additionalStyles="px-4  text-sm">
        <img src="/icons/add-white.svg" alt="add icon" className="mr-1.5 w-5" />
        <span>Add Task</span>
      </Button>
      <Button
        variation="secondary"
        additionalStyles="px-4 text-sm text-darkGreen"
      >
        <img
          src="/icons/add-darkgreen.svg"
          alt="add icon"
          className="mr-1.5 w-5"
        />
        <span>Add Category</span>
      </Button>
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
