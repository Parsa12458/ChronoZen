import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEvent as deleteEventApi } from "../../services/apiEvents";
import toast from "react-hot-toast";

export function useDeleteEvent() {
  const queryClient = useQueryClient();
  const { mutate: deleteEvent, isPending: isLoading } = useMutation({
    mutationFn: deleteEventApi,
    onSuccess: () => {
      toast.success("Event is successfully deleted.");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { deleteEvent, isLoading };
}
