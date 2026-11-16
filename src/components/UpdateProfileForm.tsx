"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfileForm() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session?.user?.name) setName(session.user.name);
  }, [session?.user?.name]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = name.trim();

    if (!trimmed) return toast.error("নাম লিখুন");

    setLoading(true);
    const { error } = await authClient.updateUser({ name: trimmed });
    setLoading(false);

    if (error) {
      toast.error(error.message || "তথ্য আপডেট করা যায়নি");
      return;
    }

    toast.success("তথ্য সফলভাবে আপডেট হয়েছে");
    router.push("/profile");
    router.refresh();
  }

  if (isPending) {
    return <div className="skeleton h-52 w-full rounded-2xl" />;
  }

  return (
    <div className="rounded-2xl border border-base-300 bg-base-100 p-6">
      <h2 className="mb-4 font-semibold">তথ্য</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-sm">
          নাম
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="আপনার নাম লিখুন"
            className="input input-bordered mt-1 w-full"
          />
        </label>

        <button disabled={loading} className="btn btn-primary w-full">
          {loading ? "অপেক্ষা করুন..." : "আপডেট"}
        </button>
      </form>

      <p className="mt-4 text-center text-sm opacity-70">
        <Link href="/profile">← প্রোফাইলে ফিরে যান</Link>
      </p>
    </div>
  );
}