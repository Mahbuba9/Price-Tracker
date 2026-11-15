import Link from "next/link";
import { formatPercent, formatPrice, unitLabel } from "@/lib/format";
import type { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  const { dir, pct } = product.change;

  const badgeClass =
    dir === "up"
      ? "text-error"
      : dir === "down"
        ? "text-success"
        : "text-base-content/60";
  const arrow = dir === "up" ? "▲" : dir === "down" ? "▼" : "—";

  return (
    <Link
      href={`/product/${product.slug}`}
      className="block rounded-xl border border-base-300 bg-base-100 p-4 transition hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-base-200 text-2xl">
          {product.image}
        </div>
        <div className="min-w-0">
          <div className="truncate font-semibold">{product.nameBn}</div>
          <div className="text-xs opacity-70">{unitLabel(product.unit)}</div>
        </div>
      </div>

      <div className="mt-4 text-xs opacity-70">আজকের দাম</div>
      <div className="flex items-end justify-between">
        <div className="text-xl font-bold">
          {formatPrice(product.today)}{" "}
          <span className="text-sm font-normal">টাকা</span>
        </div>
        <span
          className={`rounded-full bg-base-200 px-2 py-0.5 text-xs font-semibold ${badgeClass}`}
        >
          {arrow} {formatPercent(pct)}%
        </span>
      </div>
    </Link>
  );
}