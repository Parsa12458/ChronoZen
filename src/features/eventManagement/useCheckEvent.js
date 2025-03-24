import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editEvent as editEventApi } from "../../services/apiEvents";
import toast from "react-hot-toast";

export function useCheckEvent() {
  const queryClient = useQueryClient();
  const { mutate: checkEvent, isPending: isLoading } = useMutation({
    mutationFn: editEventApi,
    onSuccess: (event) => {
      toast.success(
        event.at(0).checked
          ? `Great job! ${event.at(0).title} is complete!`
          : `${event.at(0).title} is now marked as undone.`,
      );

      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { checkEvent, isLoading };
}
