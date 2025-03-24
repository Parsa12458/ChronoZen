import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEventsCategory as deleteEventsCategoryApi } from "../../services/apiEvents";
import toast from "react-hot-toast";

export function useDeleteEventsCategory() {
  const queryClient = useQueryClient();
  const { mutate: deleteEventsCategory, isPending: isLoading } = useMutation({
    mutationFn: deleteEventsCategoryApi,
    onSuccess: () => {
      toast.success("Event category is successfully deleted.");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { deleteEventsCategory, isLoading };
}
