import { useTasks } from "./useTasks";
import TaskItem from "./TaskItem";
import TaskSkeleton from "./TaskSkeleton";
import toast from "react-hot-toast";

function TasksList() {
  const { tasks, isLoading, error } = useTasks();

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
        ) : tasks.length !== 0 ? (
          tasks?.map((task) => <TaskItem task={task} key={task.id} />)
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
