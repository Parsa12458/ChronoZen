import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editGoal as editGoalApi } from "../../services/apiGoals";
import toast from "react-hot-toast";

export function useEditGoal() {
  const queryClient = useQueryClient();
  const { mutate: editGoal, isPending: isLoading } = useMutation({
    mutationFn: editGoalApi,
    onSuccess: (goal) => {
      toast.success(`${goal.at(0).title} is successfully edited.`);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { editGoal, isLoading };
}
