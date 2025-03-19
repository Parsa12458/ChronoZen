import toast from "react-hot-toast";
import HabitItem from "./HabitItem";
import HabitSkeleton from "./HabitSkeleton";
import { useHabits } from "./useHabits";

function HabitsList() {
  const { habits, isLoading, error } = useHabits();

  if (error) toast.error(error.message);

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-5">
      {isLoading ? (
        <HabitSkeleton />
      ) : habits.length !== 0 ? (
        habits?.map((habit) => <HabitItem key={habit.id} habit={habit} />)
      ) : (
        <div className="mt-10 text-3xl font-bold text-darkGreen">
          No habits!
        </div>
      )}
    </div>
  );
}

export default HabitsList;
