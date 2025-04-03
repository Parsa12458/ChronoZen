import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../../services/apiNotes";

export function useNotes() {
  const {
    data: notes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  return { notes, isLoading, error };
}
