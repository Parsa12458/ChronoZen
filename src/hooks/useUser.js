import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/apiAuth";

export function useUser() {
  const {
    isLoading,
    isFetching,
    data: user,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    refetchOnWindowFocus: false,
  });

  return {
    isLoading: isLoading || isFetching,
    user,
    isAuthenticated: user?.role === "authenticated",
  };
}
