import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zflbvnaexhhwvdpfbtoe.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
