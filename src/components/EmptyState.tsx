import Link from "next/link";

export default function EmptyState({
  title = "কিছু পাওয়া যায়নি",
  message = "আপনি যে পাতাটি খুঁজছেন সেটি পাওয়া যায়নি।",
}: {
  title?: string;
  message?: string;
}) {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-base-300 bg-base-100 p-10 text-center">
      <div className="text-5xl">🛒</div>
      <h1 className="mt-4 text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-sm opacity-70">{message}</p>
      <Link href="/" className="btn btn-primary mt-6">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}