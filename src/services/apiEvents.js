import { queryClient } from "../App";
import supabase from "./supabase";

export async function getEvents() {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .or(`userId.eq.${user.id},userId.is.null`);

  if (error) throw new Error(error.message);

  return data;
}

export async function getEventsCategories() {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("eventsCategories")
    .select("*")
    .or(`userId.eq.${user.id},userId.is.null`);

  if (error) throw new Error(error.message);

  return data;
}

export async function editEvent(newEvent) {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("events")
    .update(newEvent)
    .eq("id", newEvent.id)
    .or(`userId.eq.${user.id},userId.is.null`)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteEvent(id) {
  const user = queryClient.getQueryData(["user"]);

  const { error } = await supabase
    .from("events")
    .delete()
    .eq("id", id)
    .or(`userId.eq.${user.id},userId.is.null`);

  if (error) throw new Error(error.message);
}

export async function addEvent(newEvent) {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("events")
    .insert([{ ...newEvent, userId: user.id }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function addEventsCategory(newEventsCategory) {
  const user = queryClient.getQueryData(["user"]);

  const { data, error } = await supabase
    .from("eventsCategories")
    .insert([{ ...newEventsCategory, userId: user.id }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteEventsCategory(id) {
  const user = queryClient.getQueryData(["user"]);

  const { error } = await supabase
    .from("eventsCategories")
    .delete()
    .eq("id", id)
    .or(`userId.eq.${user.id},userId.is.null`);

  if (error) throw new Error(error.message);
}
