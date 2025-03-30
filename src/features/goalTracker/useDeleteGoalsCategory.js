import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGoalsCategory as deleteGoalsCategoryApi } from "../../services/apiGoals";
import toast from "react-hot-toast";

export function useDeleteGoalsCategory() {
  const queryClient = useQueryClient();
  const { mutate: deleteGoalsCategory, isPending: isLoading } = useMutation({
    mutationFn: deleteGoalsCategoryApi,
    onSuccess: () => {
      toast.success("Goal category is successfully deleted.");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { deleteGoalsCategory, isLoading };
}
