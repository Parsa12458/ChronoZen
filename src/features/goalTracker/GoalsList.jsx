import toast from "react-hot-toast";

import { useGoals } from "./useGoals";
import GoalItem from "./GoalItem";
import GoalSkeleton from "./GoalSkeleton";
import { useSelector } from "react-redux";
import { isTodayOrAfterToday } from "../../utils/helper";

function GoalsList() {
  const { goals, isLoading, error } = useGoals();
  const {
    selectedCategoryFilter,
    selectedPriorityFilter,
    selectedStatusFilter,
  } = useSelector((store) => store.goalTracker);
  const filteredGoals = goals
    ?.filter((goal) =>
      selectedCategoryFilter !== "All"
        ? goal.category.name === selectedCategoryFilter
        : true,
    )
    ?.filter((goal) =>
      selectedPriorityFilter
        ? goal.priority === selectedPriorityFilter.toLowerCase()
        : true,
    )
    ?.filter((goal) => {
      if (selectedStatusFilter === "Completed") {
        return goal.checked;
      }
      if (selectedStatusFilter === "In Progress") {
        return (
          !goal.checked &&
          (isTodayOrAfterToday(goal.deadline) || goal.deadline === null)
        );
      }
      if (selectedStatusFilter === "Uncompleted") {
        return !goal.checked;
      } else {
        return true;
      }
    });

  const sortedGoals = filteredGoals?.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  if (error) toast.error(error.message);

  return (
    <div className="mt-8 flex flex-wrap items-start justify-center gap-5">
      {isLoading ? (
        <GoalSkeleton />
      ) : sortedGoals?.length !== 0 ? (
        sortedGoals?.map((goal) => <GoalItem goal={goal} key={goal.id} />)
      ) : (
        <div className="mt-10 text-3xl font-bold text-darkGreen">No goals!</div>
      )}
    </div>
  );
}

export default GoalsList;
