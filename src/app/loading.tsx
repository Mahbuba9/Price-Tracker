import CardSkeleton from "@/components/CardSkeleton";

export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-10 pt-8">
      <div className="skeleton mb-6 h-48 w-full rounded-2xl" />
      <div className="skeleton mb-4 h-6 w-40" />
      <CardSkeleton count={6} />
    </main>
  );
}