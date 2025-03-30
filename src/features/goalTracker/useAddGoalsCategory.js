import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addGoalsCategory as addGoalsCategoryApi } from "../../services/apiGoals";
import toast from "react-hot-toast";

export function useAddGoalsCategory() {
  const queryClient = useQueryClient();
  const { mutate: addGoalsCategory, isPending: isLoading } = useMutation({
    mutationFn: addGoalsCategoryApi,
    onSuccess: (goalCategory) => {
      toast.success(
        `${goalCategory.at(0).name} category is successfully added.`,
      );
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { addGoalsCategory, isLoading };
}
