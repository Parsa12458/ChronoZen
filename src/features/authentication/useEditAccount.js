import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editAccount as editAccountApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useEditAccount() {
  const queryClient = useQueryClient();
  const { mutate: editAccount, isPending: isLoading } = useMutation({
    mutationFn: editAccountApi,
    onSuccess: () => {
      toast.success("Your full name has been successfully updated!");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { editAccount, isLoading };
}
