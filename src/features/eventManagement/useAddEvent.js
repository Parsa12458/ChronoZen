import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEvent as addEventApi } from "../../services/apiEvents";
import toast from "react-hot-toast";

export function useAddEvent() {
  const queryClient = useQueryClient();
  const { mutate: addEvent, isPending: isLoading } = useMutation({
    mutationFn: addEventApi,
    onSuccess: (event) => {
      toast.success(`${event.at(0).title} is successfully added.`);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { addEvent, isLoading };
}
