import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editGoal as editGoalApi } from "../../services/apiGoals";
import toast from "react-hot-toast";

export function useCheckGoal() {
  const queryClient = useQueryClient();
  const { mutate: checkGoal, isPending: isLoading } = useMutation({
    mutationFn: editGoalApi,
    onSuccess: (goal) => {
      toast.success(
        goal.at(0).checked
          ? `Great job! ${goal.at(0).title} is complete!`
          : `${goal.at(0).title} is now marked as undone.`,
      );

      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { checkGoal, isLoading };
}
