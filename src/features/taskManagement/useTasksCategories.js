import { useQuery } from "@tanstack/react-query";
import { getTasksCategories } from "../../services/apiTasks";

export function useTasksCategories() {
  const {
    data: tasksCategories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tasksCategories"],
    queryFn: getTasksCategories,
  });

  const sortedCategories = tasksCategories?.sort((a, b) => a.id - b.id);

  return { tasksCategories: sortedCategories, isLoading, error };
}
