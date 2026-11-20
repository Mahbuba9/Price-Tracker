"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { banglaDate } from "@/lib/format";
import type { Category } from "@/lib/types";

export default function Navbar({ categories }: { categories: Category[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [open, setOpen] = useState(false);

  const user = session?.user;

  async function handleSignOut() {
    setOpen(false);
    await authClient.signOut();
    toast.success("সাইন আউট হয়েছে");
    router.push("/");
    router.refresh();
  }

  return (
    <header className="bg-base-100 border-b border-base-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Image
              src="/logo-icon.png"
              alt="বাজার দর"
              width={24}
              height={24}
              className="h-6 w-6 object-contain brightness-0 invert"
            />
          </span>
          <div className="leading-tight">
            <div className="text-lg font-bold">বাজার দর</div>
            <div className="text-xs opacity-70" suppressHydrationWarning>
              {banglaDate()}
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          {isPending ? (
            <div className="skeleton h-9 w-28 rounded-lg" />
          ) : user ? (
            <div className="relative">
              <button
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-base-200"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content">
                  {user.name?.charAt(0).toUpperCase() || "U"}
                </span>
                <span className="hidden text-sm sm:inline">
                  {user.name?.split(" ")[0]}
                </span>
                <span className="text-xs opacity-60">▾</span>
              </button>

              {open && (
                <div className="absolute right-0 z-50 mt-2 w-60 rounded-xl border border-base-300 bg-base-100 p-3 shadow-lg">
                  <div className="border-b border-base-300 pb-2">
                    <div className="font-semibold">{user.name}</div>
                    <div className="truncate text-xs opacity-70">
                      {user.email}
                    </div>
                  </div>
                  <Link
                    href="/profile"
                    onClick={() => setOpen(false)}
                    className="mt-2 block rounded-lg px-2 py-2 text-sm hover:bg-base-200"
                  >
                    👤 আমার প্রোফাইল
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full rounded-lg px-2 py-2 text-left text-sm text-error hover:bg-base-200"
                  >
                    ↩ সাইন আউট
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/signin" className="btn btn-ghost btn-sm sm:btn-md">
                সাইন ইন
              </Link>
              <Link href="/signup" className="btn btn-primary btn-sm sm:btn-md">
                সাইন আপ
              </Link>
            </>
          )}
        </div>
      </div>

      <nav className="border-t border-base-300">
        <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 text-sm">
          {categories.map((c) => (
            <li key={c.id}>
              <Link
                href={`/category/${c.slug}`}
                className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-1.5 ${
                  pathname === `/category/${c.slug}`
                    ? "bg-primary text-primary-content font-semibold"
                    : "hover:bg-base-200"
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.nameBn}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}