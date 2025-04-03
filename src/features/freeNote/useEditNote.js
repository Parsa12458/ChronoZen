import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editNote as editNoteApi } from "../../services/apiNotes";
import toast from "react-hot-toast";
import { formatDate } from "../../utils/helper";

export function useEditNote() {
  const queryClient = useQueryClient();
  const { mutate: editNote, isPending: isLoading } = useMutation({
    mutationFn: editNoteApi,
    onSuccess: (note) => {
      toast.success(
        `Note for ${formatDate(note.at(0).date)} successfully updated.`,
      );
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { editNote, isLoading };
}
