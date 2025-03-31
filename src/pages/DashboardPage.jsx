import DashboardSection from "../features/dashboard/DashboardSection";
import DashboardPieChart from "../features/dashboard/DashboardPieChart";
import Button from "../ui/Button";
import { useTasks } from "../features/taskManagement/useTasks";
import { useDispatch } from "react-redux";
import {
  setEvents,
  setHabits,
  setTasks,
} from "../features/dashboard/dashboardSlice";
import toast from "react-hot-toast";
import FullSpinner from "../ui/FullSpinner";
import { useEffect } from "react";
import { useHabits } from "../features/habitTracker/useHabits";
import { isTodayChecked } from "../utils/helper";
import { useEvents } from "../features/eventManagement/useEvents";

function DashboardPage() {
  // Tasks
  const { tasks, isLoading: isLoadingTasks, error: tasksError } = useTasks();
  const completedTasksLength = tasks?.filter(
    (task) => task.checked === true,
  ).length;
  const uncompletedTasksLength = tasks?.filter(
    (task) => task.checked !== true,
  ).length;

  // Habits
  const {
    habits,
    isLoading: isLoadingHabits,
    error: habitsError,
  } = useHabits();
  const completedHabitsLength = habits?.filter((habit) =>
    isTodayChecked(habit.checkedDates),
  ).length;
  const uncompletedHabitsLength = habits?.filter(
    (habit) => !isTodayChecked(habit.checkedDates),
  ).length;

  // Events
  const {
    events,
    isLoading: isLoadingEvents,
    error: eventsError,
  } = useEvents();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(tasks));
  }, [tasks, dispatch]);

  useEffect(() => {
    dispatch(setHabits(habits));
  }, [habits, dispatch]);

  useEffect(() => {
    dispatch(setEvents(events));
  }, [events, dispatch]);

  if (tasksError) toast.error(tasksError.message);
  if (habitsError) toast.error(habitsError.message);
  if (eventsError) toast.error(eventsError.message);

  if (isLoadingTasks || isLoadingHabits || isLoadingEvents)
    return <FullSpinner />;

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
        colors={["#6f8779", "#be3636"]}
      />
      <DashboardSection title="Events for today" data="event" />
      <DashboardPieChart
        title="Today Habits Status"
        data={[
          {
            name: "Completed",
            value:
              completedHabitsLength === 0 && uncompletedHabitsLength === 0
                ? 100
                : completedHabitsLength,
          },
          { name: "Uncompleted", value: uncompletedHabitsLength },
        ]}
        colors={["#6f8779", "#be3636"]}
      />
      <Button type="primary" additionalStyles="col-start-3 col-end-4 py-3">
        Get Full Report
      </Button>
    </div>
  );
}

export default DashboardPage;
