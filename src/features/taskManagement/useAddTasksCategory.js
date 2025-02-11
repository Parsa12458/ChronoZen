import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTasksCategory as addTasksCategoryApi } from "../../services/apiTasks";
import toast from "react-hot-toast";

export function useAddTasksCategory() {
  const queryClient = useQueryClient();
  const { mutate: addTasksCategory, isPending: isLoading } = useMutation({
    mutationFn: addTasksCategoryApi,
    onSuccess: (taskCategory) => {
      toast.success(
        `${taskCategory.at(0).name} category is successfully added.`,
      );
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { addTasksCategory, isLoading };
}
