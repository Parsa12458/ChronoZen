import GoalsControls from "../features/goalTracker/GoalsControls";
import GoalsList from "../features/goalTracker/GoalsList";

function GoalsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Goal Tracker</h1>
      <GoalsControls />
      <GoalsList />
    </div>
  );
}

export default GoalsPage;
