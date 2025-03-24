import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editEvent as editEventApi } from "../../services/apiEvents";
import toast from "react-hot-toast";

export function useEditEvent() {
  const queryClient = useQueryClient();
  const { mutate: editEvent, isPending: isLoading } = useMutation({
    mutationFn: editEventApi,
    onSuccess: (event) => {
      toast.success(`${event.at(0).title} is successfully edited.`);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { editEvent, isLoading };
}
