import CardSkeleton from "@/components/CardSkeleton";

export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-10 pt-8">
      <div className="skeleton mb-4 h-20 w-full rounded-2xl" />
      <div className="skeleton mb-4 h-14 w-full rounded-xl" />
      <CardSkeleton count={6} />
    </main>
  );
}