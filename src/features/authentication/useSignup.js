import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(`Welcome, ${user.fullName}! You're all set.`);
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { signup, isLoading };
}
