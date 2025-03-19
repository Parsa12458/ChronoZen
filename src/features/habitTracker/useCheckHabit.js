import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editHabit as editHabitApi } from "../../services/apiHabits";
import toast from "react-hot-toast";

export function useCheckHabit() {
  const queryClient = useQueryClient();
  const { mutate: checkHabit, isPending: isLoading } = useMutation({
    mutationFn: editHabitApi,
    onSuccess: (habit) => {
      toast.success(
        habit.at(0).checked
          ? `Great job! ${habit.at(0).title} is complete!`
          : `${habit.at(0).title} is now marked as undone.`,
      );

      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { checkHabit, isLoading };
}
