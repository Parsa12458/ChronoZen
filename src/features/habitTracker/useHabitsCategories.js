import { useQuery } from "@tanstack/react-query";
import { getHabitsCategories } from "../../services/apiHabits";

export function useHabitsCategories() {
  const {
    data: habitsCategories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["habitsCategories"],
    queryFn: getHabitsCategories,
  });

  const sortedCategories = habitsCategories?.sort((a, b) => a.id - b.id);

  return { habitsCategories: sortedCategories, isLoading, error };
}
