import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editHabit as editHabitApi } from "../../services/apiHabits";
import toast from "react-hot-toast";

export function useEditHabit() {
  const queryClient = useQueryClient();
  const { mutate: editHabit, isPending: isLoading } = useMutation({
    mutationFn: editHabitApi,
    onSuccess: (habit) => {
      toast.success(`${habit.at(0).title} is successfully edited.`);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { editHabit, isLoading };
}
