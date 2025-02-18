import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTasksCategory as deleteTasksCategoryApi } from "../../services/apiTasks";
import toast from "react-hot-toast";

export function useDeleteTasksCategory() {
  const queryClient = useQueryClient();
  const { mutate: deleteTasksCategory, isPending: isLoading } = useMutation({
    mutationFn: deleteTasksCategoryApi,
    onSuccess: () => {
      toast.success("Task category is successfully deleted.");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { deleteTasksCategory, isLoading };
}
