import HabitsControls from "../features/habitTracker/HabitsControls";
import HabitsList from "../features/habitTracker/HabitsList";

function HabitsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Habit Tracker</h1>
      <HabitsControls />
      <HabitsList />
    </div>
  );
}

export default HabitsPage;
