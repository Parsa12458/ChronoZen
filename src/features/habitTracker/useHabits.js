import { useQuery } from "@tanstack/react-query";
import { getHabits } from "../../services/apiHabits";

export function useHabits() {
  const {
    data: habits,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["habits"],
    queryFn: getHabits,
  });

  return { habits, isLoading, error };
}
