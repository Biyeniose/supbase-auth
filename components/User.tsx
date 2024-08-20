import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function User() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  const handleProfileClick = async () => {
    "use server";
    return redirect("/profile");
  };

  const handlePredictClick = async () => {
    "use server";
    return redirect("/predict");
  };

  return (
    user && (
      <div className="flex items-center gap-4">
        <form action={handleProfileClick}>
          <button
            type="submit"
            className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Profile
          </button>
        </form>
        <form action={handlePredictClick}>
          <button
            type="submit"
            className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Predict
          </button>
        </form>
        <form action={signOut}>
          <button
            type="submit"
            className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Logout
          </button>
        </form>
        {user.email}
      </div>
    )
  );
}
