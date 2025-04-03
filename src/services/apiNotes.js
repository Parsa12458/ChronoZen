import { queryClient } from "../App";
import supabase from "../services/supabase";

export async function getNotes() {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .or(`userId.eq.${user.id},userId.is.null`);

  if (error) throw new Error(error.message);

  return data;
}

export async function addNote(newNote) {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("notes")
    .insert([{ ...newNote, userId: user.id }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function editNote(newNote) {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("notes")
    .update(newNote)
    .eq("id", newNote.id)
    .or(`userId.eq.${user.id},userId.is.null`)
    .select();

  if (error) throw new Error(error.message);

  return data;
}
