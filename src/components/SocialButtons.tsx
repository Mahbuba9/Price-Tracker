"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function SocialButtons({
  redirectTo = "/",
}: {
  redirectTo?: string;
}) {
  const [loading, setLoading] = useState<string | null>(null);

  async function handleSocial(provider: "github" | "google") {
    setLoading(provider);
    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: redirectTo,
    });
    if (error) {
      setLoading(null);
      toast.error(error.message || "লগইন করা যায়নি");
    }
  }

  return (
    <div className="mt-5">
      <div className="divider text-xs opacity-70">অথবা</div>
      <div className="grid gap-2 sm:grid-cols-2">
        <button
          type="button"
          disabled={loading !== null}
          onClick={() => handleSocial("google")}
          className="btn btn-outline btn-sm sm:btn-md"
        >
          {loading === "google" ? "অপেক্ষা করুন..." : "Google দিয়ে চালিয়ে যান"}
        </button>
        <button
          type="button"
          disabled={loading !== null}
          onClick={() => handleSocial("github")}
          className="btn btn-outline btn-sm sm:btn-md"
        >
          {loading === "github" ? "অপেক্ষা করুন..." : "GitHub দিয়ে চালিয়ে যান"}
        </button>
      </div>
    </div>
  );
}