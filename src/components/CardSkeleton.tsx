export default function CardSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl border border-base-300 bg-base-100 p-4"
        >
          <div className="flex items-center gap-3">
            <div className="skeleton h-11 w-11 rounded-lg" />
            <div className="flex-1 space-y-2">
              <div className="skeleton h-4 w-2/3" />
              <div className="skeleton h-3 w-1/3" />
            </div>
          </div>
          <div className="skeleton mt-4 h-3 w-16" />
          <div className="skeleton mt-2 h-6 w-24" />
        </div>
      ))}
    </div>
  );
}