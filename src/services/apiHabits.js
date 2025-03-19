import { queryClient } from "../App";
import supabase from "../services/supabase";

export async function getHabits() {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("habits")
    .select("*")
    .or(`userId.eq.${user.id},userId.is.null`);

  if (error) throw new Error(error.message);

  return data;
}

export async function getHabitsCategories() {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("habitsCategories")
    .select("*")
    .or(`userId.eq.${user.id},userId.is.null`);

  if (error) throw new Error(error.message);

  return data;
}

export async function editHabit(newHabit) {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("habits")
    .update(newHabit)
    .eq("id", newHabit.id)
    .or(`userId.eq.${user.id},userId.is.null`)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteHabit(id) {
  const user = queryClient.getQueryData(["user"]);

  const { error } = await supabase
    .from("habits")
    .delete()
    .eq("id", id)
    .or(`userId.eq.${user.id},userId.is.null`);

  if (error) throw new Error(error.message);
}

export async function addHabit(newHabit) {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("habits")
    .insert([{ ...newHabit, userId: user.id }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function addHabitsCategory(newHabitsCategory) {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("habitsCategories")
    .insert([{ ...newHabitsCategory, userId: user.id }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteHabitsCategory(id) {
  const user = queryClient.getQueryData(["user"]);

  const { error } = await supabase
    .from("habitsCategories")
    .delete()
    .eq("id", id)
    .or(`userId.eq.${user.id},userId.is.null`);

  if (error) throw new Error(error.message);
}
