import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNote as addNoteApi } from "../../services/apiNotes";
import toast from "react-hot-toast";
import { formatDate } from "../../utils/helper";

export function useAddNote() {
  const queryClient = useQueryClient();
  const { mutate: addNote, isPending: isLoading } = useMutation({
    mutationFn: addNoteApi,
    onSuccess: (note) => {
      toast.success(`New note created for ${formatDate(note.at(0).date)}`);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { addNote, isLoading };
}
