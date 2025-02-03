import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleSecret = process.env.SUPABASE_SUPER_SECRET_KEY!;

export const supabaseRoot = createClient<Database>(
  supabaseUrl,
  serviceRoleSecret,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  },
);
