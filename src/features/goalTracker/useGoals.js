import { useQuery } from "@tanstack/react-query";
import { getGoals } from "../../services/apiGoals";

export function useGoals() {
  const {
    data: goals,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["goals"],
    queryFn: getGoals,
  });

  return { goals, isLoading, error };
}
