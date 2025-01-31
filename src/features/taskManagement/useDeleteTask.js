import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask as deleteTaskApi } from "../../services/apiTasks";
import toast from "react-hot-toast";

export function useDeleteTask() {
  const queryClient = useQueryClient();
  const { mutate: deleteTask, isPending: isLoading } = useMutation({
    mutationFn: deleteTaskApi,
    onSuccess: () => {
      toast.success("Task is successfully deleted.");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { deleteTask, isLoading };
}
