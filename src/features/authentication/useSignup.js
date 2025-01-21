import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        `Welcome, ${user.user.user_metadata.fullName}! You're all set.`,
      );
      queryClient.invalidateQueries("user");
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { signup, isLoading };
}
