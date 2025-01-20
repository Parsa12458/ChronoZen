import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        `Welcome back, ${user.user.user_metadata.fullName}! You're all set.`,
      );
      queryClient.invalidateQueries("user");
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { login, isLoading };
}
