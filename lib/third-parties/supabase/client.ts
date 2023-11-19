import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/third-parties/supabase/database.types";

const supabaseURL = process.env["NEXT_PUBLIC_SUPABASE_URL"] ?? ''
const supabaseAnonKey = process.env["NEXT_PUBLIC_SUPABASE_ANON_KEY"] ?? ''

export const supabaseClient = createClient<Database>(supabaseURL, supabaseAnonKey)
