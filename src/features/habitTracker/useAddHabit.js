import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addHabit as addHabitApi } from "../../services/apiHabits";
import toast from "react-hot-toast";

export function useAddHabit() {
  const queryClient = useQueryClient();
  const { mutate: addHabit, isPending: isLoading } = useMutation({
    mutationFn: addHabitApi,
    onSuccess: (habit) => {
      toast.success(`${habit.at(0).title} is successfully added.`);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { addHabit, isLoading };
}
