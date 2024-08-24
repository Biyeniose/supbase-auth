import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import React from "react";

export const AuthButtons = async () => {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return undefined;
  }

  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <Link
        href="/login"
        className="rounded-md border border-green-700 bg-green-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="text-sm font-semibold leading-6 text-gray-200 rounded-md border border-green-700 py-2 px-6 hover:border-green-700"
      >
        Signup
      </Link>
    </div>
  );
};
