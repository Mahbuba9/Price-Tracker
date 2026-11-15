"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { banglaDate } from "@/lib/format";
import type { Category } from "@/lib/types";

export default function Navbar({ categories }: { categories: Category[] }) {
  const pathname = usePathname();

  return (
    <header className="bg-base-100 border-b border-base-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-icon.png"
            alt="বাজার দর"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <div className="leading-tight">
            <div className="text-lg font-bold">বাজার দর</div>
            <div className="text-xs opacity-70" suppressHydrationWarning>
              {banglaDate()}
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Link href="/signin" className="btn btn-ghost btn-sm sm:btn-md">
            সাইন ইন
          </Link>
          <Link href="/signup" className="btn btn-primary btn-sm sm:btn-md">
            সাইন আপ
          </Link>
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