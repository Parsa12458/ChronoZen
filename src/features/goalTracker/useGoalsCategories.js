import { useQuery } from "@tanstack/react-query";
import { getGoalsCategories } from "../../services/apiGoals";

export function useGoalsCategories() {
  const {
    data: goalsCategories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["goalsCategories"],
    queryFn: getGoalsCategories,
  });

  const sortedCategories = goalsCategories?.sort((a, b) => a.id - b.id);

  return { goalsCategories: sortedCategories, isLoading, error };
}
