import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteHabit as deleteHabitApi } from "../../services/apiHabits";
import toast from "react-hot-toast";

export function useDeleteHabit() {
  const queryClient = useQueryClient();
  const { mutate: deleteHabit, isPending: isLoading } = useMutation({
    mutationFn: deleteHabitApi,
    onSuccess: () => {
      toast.success("Habit is successfully deleted.");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { deleteHabit, isLoading };
}
