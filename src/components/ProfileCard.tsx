"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function ProfileCard() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  async function handleSignOut() {
    await authClient.signOut();
    toast.success("সাইন আউট হয়েছে");
    router.push("/");
    router.refresh();
  }

  if (isPending) {
    return <div className="skeleton h-28 w-full rounded-2xl" />;
  }

  if (!user) {
    return (
      <div className="rounded-2xl border border-base-300 bg-base-100 p-6 text-center">
        <p className="text-sm opacity-70">প্রোফাইল দেখতে সাইন ইন করুন।</p>
        <Link href="/signin" className="btn btn-primary mt-4">
          সাইন ইন
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-2xl font-bold text-primary-content">
          {user.name?.charAt(0).toUpperCase() || "U"}
        </div>
        <div>
          <div className="text-lg font-semibold">{user.name}</div>
          <div className="text-sm opacity-70">{user.email}</div>
        </div>
      </div>

      <div className="flex gap-2">
        <Link href="/profile/update" className="btn btn-primary btn-sm sm:btn-md">
          আপডেট করুন
        </Link>
        <button
          onClick={handleSignOut}
          className="btn btn-outline btn-error btn-sm sm:btn-md"
        >
          ↩ সাইন আউট
        </button>
      </div>
    </div>
  );
}