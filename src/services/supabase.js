import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://retxvvuwxujttzdsgggx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJldHh2dnV3eHVqdHR6ZHNnZ2d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3ODUxNTYsImV4cCI6MjA1MjM2MTE1Nn0.5845VOmPC9XpoeHtngFvjqAfefCYYYgCERRE1_BojL0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
