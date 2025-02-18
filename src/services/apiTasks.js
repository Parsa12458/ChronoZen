import { queryClient } from "../App";
import supabase from "../services/supabase";

export async function getTasks() {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .or(`userId.eq.${user.id},userId.is.null`);

  if (error) throw new Error(error.message);

  return data;
}

export async function getTasksCategories() {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("tasksCategories")
    .select("*")
    .or(`userId.eq.${user.id},userId.is.null`);

  if (error) throw new Error(error.message);

  return data;
}

export async function editTask(newTask) {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("tasks")
    .update(newTask)
    .eq("id", newTask.id)
    .or(`userId.eq.${user.id},userId.is.null`)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteTask(id) {
  const user = queryClient.getQueryData(["user"]);

  const { error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", id)
    .or(`userId.eq.${user.id},userId.is.null`);

  if (error) throw new Error(error.message);
}

export async function addTask(newTask) {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("tasks")
    .insert([{ ...newTask, userId: user.id }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function addTasksCategory(newTasksCategory) {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("tasksCategories")
    .insert([{ ...newTasksCategory, userId: user.id }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteTasksCategory(id) {
  const user = queryClient.getQueryData(["user"]);

  const { error } = await supabase
    .from("tasksCategories")
    .delete()
    .eq("id", id)
    .or(`userId.eq.${user.id},userId.is.null`);

  if (error) throw new Error(error.message);
}
