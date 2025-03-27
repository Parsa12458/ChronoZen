import toast from "react-hot-toast";

import { useGoals } from "./useGoals";
import GoalItem from "./GoalItem";
import GoalSkeleton from "./GoalSkeleton";

function GoalsList() {
  const { goals, isLoading, error } = useGoals();

  if (error) toast.error(error.message);

  return (
    <div className="mt-8 flex flex-wrap items-start justify-center gap-5">
      {isLoading ? (
        <GoalSkeleton />
      ) : goals?.length !== 0 ? (
        goals?.map((goal) => <GoalItem goal={goal} key={goal.id} />)
      ) : (
        <div className="mt-10 text-3xl font-bold text-darkGreen">No goals!</div>
      )}
    </div>
  );
}

export default GoalsList;
