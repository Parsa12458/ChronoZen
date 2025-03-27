import { queryClient } from "../App";
import supabase from "./supabase";

export async function getGoals() {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("goals")
    .select("*")
    .or(`userId.eq.${user.id},userId.is.null`);

  if (error) throw new Error(error.message);

  return data;
}

export async function getGoalsCategories() {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("goalsCategories")
    .select("*")
    .or(`userId.eq.${user.id},userId.is.null`);

  if (error) throw new Error(error.message);

  return data;
}

export async function editGoal(newGoal) {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("goals")
    .update(newGoal)
    .eq("id", newGoal.id)
    .or(`userId.eq.${user.id},userId.is.null`)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteGoal(id) {
  const user = queryClient.getQueryData(["user"]);

  const { error } = await supabase
    .from("goals")
    .delete()
    .eq("id", id)
    .or(`userId.eq.${user.id},userId.is.null`);

  if (error) throw new Error(error.message);
}

export async function addGoal(newGoal) {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("goals")
    .insert([{ ...newGoal, userId: user.id }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function addGoalsCategory(newGoalsCategory) {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("goalsCategories")
    .insert([{ ...newGoalsCategory, userId: user.id }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteGoalsCategory(id) {
  const user = queryClient.getQueryData(["user"]);

  const { error } = await supabase
    .from("goalsCategories")
    .delete()
    .eq("id", id)
    .or(`userId.eq.${user.id},userId.is.null`);

  if (error) throw new Error(error.message);
}
