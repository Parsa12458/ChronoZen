import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editGoal as editGoalApi } from "../../services/apiGoals";
import toast from "react-hot-toast";

export function useCheckStep() {
  const queryClient = useQueryClient();
  const { mutate: checkStep, isPending: isLoading } = useMutation({
    mutationFn: editGoalApi,
    onSuccess: () => {
      toast.success("Step status updated successfully!");

      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { checkStep, isLoading };
}
