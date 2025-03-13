import DashboardSection from "../features/dashboard/DashboardSection";
import DashboardPieChart from "../features/dashboard/DashboardPieChart";
import Button from "../ui/Button";
import { useTasks } from "../features/taskManagement/useTasks";
import { useDispatch } from "react-redux";
import { setTasks } from "../features/dashboard/dashboardSlice";
import toast from "react-hot-toast";
import FullSpinner from "../ui/FullSpinner";
import { useEffect } from "react";

function DashboardPage() {
  const { tasks, isLoading, error } = useTasks();
  const completedTasksLength = tasks?.filter(
    (task) => task.checked === true,
  ).length;
  const uncompletedTasksLength = tasks?.filter(
    (task) => task.checked !== true,
  ).length;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(tasks));
  }, [tasks, dispatch]);

  if (error) toast.error(error.message);

  if (isLoading) return <FullSpinner />;

  return (
    <div className="grid grid-cols-3 grid-rows-[max-content_max-content_max-content_max-content] gap-5">
      <h1 className="col-span-full text-2xl font-bold">Dashboard</h1>
      <DashboardSection title="Tasks for today" data="task" />
      <DashboardSection title="Habits for today" data="habit" />
      <DashboardPieChart
        title="Tasks Status"
        data={[
          {
            name: "Completed",
            value:
              completedTasksLength === 0 && uncompletedTasksLength === 0
                ? 100
                : completedTasksLength,
          },
          { name: "Uncompleted", value: uncompletedTasksLength },
        ]}
        colors={["#6f8779", "#bb1a3a"]}
      />
      <DashboardSection title="Events for today" data="event" />
      <DashboardPieChart
        title="Today Habits Status"
        data={[
          { name: "Completed", value: 800 },
          { name: "In Progress", value: 300 },
        ]}
        colors={["#6f8779", "#F27525"]}
      />

      <Button type="primary" additionalStyles="col-start-3 col-end-4 py-3">
        Get Full Report
      </Button>
    </div>
  );
}

export default DashboardPage;
