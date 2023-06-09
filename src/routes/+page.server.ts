import { supabase } from "../lib/db";

export const load = async () => {
  const { data, error } = await supabase.from("Post").select();
	return { data, error	};
};
