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

  return { tasksCategories, isLoading, error };
}
