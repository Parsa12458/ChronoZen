import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addHabitsCategory as addHabitsCategoryApi } from "../../services/apiHabits";
import toast from "react-hot-toast";

export function useAddHabitsCategory() {
  const queryClient = useQueryClient();
  const { mutate: addHabitsCategory, isPending: isLoading } = useMutation({
    mutationFn: addHabitsCategoryApi,
    onSuccess: (habitCategory) => {
      toast.success(
        `${habitCategory.at(0).name} category is successfully added.`,
      );
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { addHabitsCategory, isLoading };
}
