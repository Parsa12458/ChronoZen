import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEventsCategory as addEventsCategoryApi } from "../../services/apiEvents";
import toast from "react-hot-toast";

export function useAddEventsCategory() {
  const queryClient = useQueryClient();
  const { mutate: addEventsCategory, isPending: isLoading } = useMutation({
    mutationFn: addEventsCategoryApi,
    onSuccess: (eventCategory) => {
      toast.success(
        `${eventCategory.at(0).name} category is successfully added.`,
      );
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { addEventsCategory, isLoading };
}
