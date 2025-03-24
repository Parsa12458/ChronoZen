import { useQuery } from "@tanstack/react-query";
import { getEventsCategories } from "../../services/apiEvents";

export function useEventsCategories() {
  const {
    data: eventsCategories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["eventsCategories"],
    queryFn: getEventsCategories,
  });

  const sortedCategories = eventsCategories?.sort((a, b) => a.id - b.id);

  return { eventsCategories: sortedCategories, isLoading, error };
}
