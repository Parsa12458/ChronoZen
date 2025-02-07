import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTask as addTaskApi } from "../../services/apiTasks";
import toast from "react-hot-toast";

export function useAddTask() {
  const queryClient = useQueryClient();
  const { mutate: addTask, isPending: isLoading } = useMutation({
    mutationFn: addTaskApi,
    onSuccess: (task) => {
      toast.success(`${task.at(0).title} is successfully added.`);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { addTask, isLoading };
}
