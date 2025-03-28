import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGoal as deleteGoalApi } from "../../services/apiGoals";
import toast from "react-hot-toast";

export function useDeleteGoal() {
  const queryClient = useQueryClient();
  const { mutate: deleteGoal, isPending: isLoading } = useMutation({
    mutationFn: deleteGoalApi,
    onSuccess: () => {
      toast.success("Goal is successfully deleted.");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { deleteGoal, isLoading };
}
