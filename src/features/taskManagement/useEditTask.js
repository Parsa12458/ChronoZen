import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editTask as editTaskApi } from "../../services/apiTasks";
import toast from "react-hot-toast";

export function useEditTask() {
  const queryClient = useQueryClient();
  const { mutate: editTask, isPending: isLoading } = useMutation({
    mutationFn: editTaskApi,
    onSuccess: (task) => {
      toast.success(`${task.at(0).title} is successfully edited.`);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { editTask, isLoading };
}
