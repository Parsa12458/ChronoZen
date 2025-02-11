import supabase from "./supabase";

export async function getTasks() {
  const { data, error } = await supabase.from("tasks").select("*");

  if (error) throw new Error(error.message);

  return data;
}

export async function getTasksCategories() {
  const { data, error } = await supabase.from("tasksCategories").select("*");

  if (error) throw new Error(error.message);

  return data;
}

export async function editTask(newTask) {
  const { data, error } = await supabase
    .from("tasks")
    .update(newTask)
    .eq("id", newTask?.id)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteTask(id) {
  const { error } = await supabase.from("tasks").delete().eq("id", id);

  if (error) throw new Error(error.message);
}

export async function addTask(newTask) {
  const { data, error } = await supabase
    .from("tasks")
    .insert([newTask])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function addTasksCategory(newTasksCategory) {
  const { data, error } = await supabase
    .from("tasksCategories")
    .insert([newTasksCategory])
    .select();

  if (error) throw new Error(error.message);

  return data;
}
