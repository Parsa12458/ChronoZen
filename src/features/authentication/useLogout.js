import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogout() {
  const queryClient = useQueryClient();
  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("Logged out Successfully, We hope to see you again soon.");
      queryClient.invalidateQueries("user");
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { logout, isLoading };
}
