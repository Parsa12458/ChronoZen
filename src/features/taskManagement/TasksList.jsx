import { useTasks } from "./useTasks";
import TaskItem from "./TaskItem";
import TaskSkeleton from "./TaskSkeleton";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { isTodayOrAfterToday } from "../../utils/helper";

function TasksList() {
  const { tasks, isLoading, error } = useTasks();
  const {
    selectedCategoryFilter,
    selectedPriorityFilter,
    selectedStatusFilter,
  } = useSelector((store) => store.taskManagement);
  const filteredTasks = tasks
    ?.filter((task) =>
      selectedCategoryFilter !== "All"
        ? task.category.name === selectedCategoryFilter
        : true,
    )
    ?.filter((task) =>
      selectedPriorityFilter
        ? task.priority === selectedPriorityFilter.toLowerCase()
        : true,
    )
    ?.filter((task) => {
      if (selectedStatusFilter === "Completed") {
        return task.checked;
      }
      if (selectedStatusFilter === "In Progress") {
        return (
          !task.checked &&
          (isTodayOrAfterToday(task.date) || task.date === null)
        );
      }
      if (selectedStatusFilter === "Uncompleted") {
        return !task.checked;
      } else {
        return true;
      }
    });

  if (error) toast.error(error.message);

  return (
    <div className="mt-8">
      <div className="mb-1.5 ml-[3.25rem] flex items-center justify-start">
        <span className="flex-1 text-sm font-bold">Task Title</span>
        <span className="flex-1 text-sm font-bold">Date</span>
        <span className="flex-1 text-sm font-bold">Time</span>
        <span className="flex-1 text-sm font-bold">Category</span>
        <span className="flex-1 text-sm font-bold">Priority</span>
        <span className="w-10">&nbsp;</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-1.5">
        {isLoading ? (
          <TaskSkeleton />
        ) : filteredTasks.length !== 0 ? (
          filteredTasks?.map((task) => <TaskItem task={task} key={task.id} />)
        ) : (
          <div className="mt-10 text-3xl font-bold text-darkGreen">
            No tasks!
          </div>
        )}
      </div>
    </div>
  );
}

export default TasksList;
