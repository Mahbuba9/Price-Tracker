"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function SignInForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [loading, setLoading] = useState(false);

  const redirectParam = params.get("redirect") || "/";
  const redirectTo =
    redirectParam.startsWith("/") && !redirectParam.startsWith("//")
      ? redirectParam
      : "/";

  useEffect(() => {
    if (params.get("reason") === "login-required") {
      toast.error("এই পাতা দেখতে আগে সাইন ইন করুন", { id: "login-required" });
    }
  }, [params]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");

    if (!email) return toast.error("ইমেইল লিখুন");
    if (!password) return toast.error("পাসওয়ার্ড লিখুন");

    setLoading(true);
    const { error } = await authClient.signIn.email({ email, password });
    setLoading(false);

    if (error) {
      toast.error(error.message || "ইমেইল বা পাসওয়ার্ড ভুল");
      return;
    }

    toast.success("সফলভাবে সাইন ইন হয়েছে");
    router.push(redirectTo);
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-base-300 bg-base-100 p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-sm">
          ইমেইল
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            className="input input-bordered mt-1 w-full"
          />
        </label>
        <label className="block text-sm">
          পাসওয়ার্ড
          <input
            name="password"
            type="password"
            placeholder="কমপক্ষে ৮ অক্ষর"
            className="input input-bordered mt-1 w-full"
          />
        </label>

        <button disabled={loading} className="btn btn-primary w-full">
          {loading ? "অপেক্ষা করুন..." : "সাইন ইন"}
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        অ্যাকাউন্ট নেই?{" "}
        <Link href="/signup" className="text-primary hover:underline">
          সাইন আপ করুন
        </Link>
      </p>
      <p className="mt-4 text-center text-sm opacity-70">
        <Link href="/">← হোম পেজে ফিরে যান</Link>
      </p>
    </div>
  );
}