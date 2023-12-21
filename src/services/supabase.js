import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zflbvnaexhhwvdpfbtoe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmbGJ2bmFleGhod3ZkcGZidG9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwNTQ5MTksImV4cCI6MjAxODYzMDkxOX0.rXlSIRd4WiR4lFX-dJmuhWW69sgM2H7TdCTvOw_gD5g";
export const supabase = createClient(supabaseUrl, supabaseKey);
