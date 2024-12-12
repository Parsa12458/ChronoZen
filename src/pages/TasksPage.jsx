import TasksControls from "../features/taskManagement/TasksControls";
import TasksList from "../features/taskManagement/TasksList";

function TasksPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Task Management</h1>
      <TasksControls />
      <TasksList />
    </div>
  );
}

export default TasksPage;
