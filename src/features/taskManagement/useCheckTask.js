import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editTask as editTaskApi } from "../../services/apiTasks";
import toast from "react-hot-toast";

export function useCheckTask() {
  const queryClient = useQueryClient();
  const { mutate: checkTask, isPending: isLoading } = useMutation({
    mutationFn: editTaskApi,
    onSuccess: (task) => {
      toast.success(
        task.at(0).checked
          ? `Great job! ${task.at(0).title} is complete!`
          : `${task.at(0).title} is now marked as undone.`,
      );

      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { checkTask, isLoading };
}
