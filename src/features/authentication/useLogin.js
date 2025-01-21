import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      toast.success(
        `Welcome back, ${user.user.user_metadata.fullName}! You're all set.`,
      );
      queryClient.invalidateQueries("user");
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { login, isLoading };
}
