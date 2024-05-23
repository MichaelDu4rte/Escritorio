"use client";
import React from "react";

import { createBrowserClient } from "@supabase/ssr";
import { usePathname } from "next/navigation";

export default function LoginForm() {
  const pathname = usePathname();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "/auth/callbacknext=" + pathname,
      },
    });
  };

  return (
    <button
      onClick={handleLogin}
      className="inline-flex h-12 ml-3 items-center justify-center rounded-md border border-t-green-50 bg-[linear-gradient(110deg,#000103,55%,#000103)]  px-4 font-medium text-slate-400 "
    >
      Login
    </button>
  );
}
