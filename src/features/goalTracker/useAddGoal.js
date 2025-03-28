import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addGoal as addGoalApi } from "../../services/apiGoals";
import toast from "react-hot-toast";

export function useAddGoal() {
  const queryClient = useQueryClient();
  const { mutate: addGoal, isPending: isLoading } = useMutation({
    mutationFn: addGoalApi,
    onSuccess: (goal) => {
      toast.success(`${goal.at(0).title} is successfully added.`);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { addGoal, isLoading };
}
