
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import SocialButtons from "@/components/SocialButtons";

export default function SignUpForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");
    const confirm = String(form.get("confirm") || "");

    if (!name) return toast.error("নাম লিখুন");

    if (password.length < 8)
      return toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");

    if (password !== confirm)
      return toast.error("পাসওয়ার্ড মিলছে না");

    setLoading(true);

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "অ্যাকাউন্ট তৈরি করা যায়নি");
      return;
    }

    toast.success("অ্যাকাউন্ট তৈরি হয়েছে! এখন সাইন ইন করুন");

    await authClient.signOut();
    router.push("/signin");
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-base-300 bg-base-100 p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-sm">
          নাম
          <input
            name="name"
            type="text"
            placeholder="যেমন: রহিম উদ্দিন"
            className="input input-bordered mt-1 w-full"
          />
        </label>

        <label className="block text-sm">
          ইমেইল
          <input
            name="email"
            type="email"
            required
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

        <label className="block text-sm">
          পাসওয়ার্ড নিশ্চিত করুন
          <input
            name="confirm"
            type="password"
            placeholder="আবার লিখুন"
            className="input input-bordered mt-1 w-full"
          />
        </label>

        <button
          disabled={loading}
          className="btn btn-primary w-full"
        >
          {loading ? "অপেক্ষা করুন..." : "অ্যাকাউন্ট তৈরি করুন"}
        </button>
      </form>

      <SocialButtons redirectTo="/" />

      <p className="mt-4 text-center text-sm">
        অ্যাকাউন্ট আছে?{" "}
        <Link href="/signin" className="text-primary hover:underline">
          সাইন ইন করুন
        </Link>
      </p>

      <p className="mt-4 text-center text-sm opacity-70">
        <Link href="/">← হোম পেজে ফিরে যান</Link>
      </p>
    </div>
  );
}
