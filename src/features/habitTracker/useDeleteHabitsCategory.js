import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteHabitsCategory as deleteHabitsCategoryApi } from "../../services/apiHabits";
import toast from "react-hot-toast";

export function useDeleteHabitsCategory() {
  const queryClient = useQueryClient();
  const { mutate: deleteHabitsCategory, isPending: isLoading } = useMutation({
    mutationFn: deleteHabitsCategoryApi,
    onSuccess: () => {
      toast.success("Habit category is successfully deleted.");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { deleteHabitsCategory, isLoading };
}
