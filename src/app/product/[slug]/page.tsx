import Link from "next/link";
import { notFound } from "next/navigation";
import MarketTable from "@/components/MarketTable";
import PriceSummary from "@/components/PriceSummary";
import { getProductBySlug } from "@/lib/api";
import { formatPercent, formatPrice, unitLabel } from "@/lib/format";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const { dir, pct } = product.change;
  const color =
    dir === "up" ? "text-error" : dir === "down" ? "text-success" : "opacity-60";
  const arrow = dir === "up" ? "▲" : dir === "down" ? "▼" : "—";
  const diff = Math.abs(product.today - product.yesterday);

  return (
    <main className="mx-auto max-w-6xl px-4 pb-10 pt-6">
      <nav className="text-sm opacity-70">
        <Link href="/" className="hover:underline">হোম</Link>
        {" › "}
        <Link href={`/category/${product.category}`} className="hover:underline">
          {product.categoryNameBn}
        </Link>
        {" › "}
        <span>{product.nameBn}</span>
      </nav>

      <section className="mt-4 flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-base-200 text-4xl">
            {product.image}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{product.nameBn}</h1>
            <p className="text-sm opacity-70">
              {unitLabel(product.unit)} · {product.categoryNameBn}
            </p>
            <p className="mt-1 text-sm">
              গতকালের তুলনায় আজকে দাম{" "}
              <span className={`font-semibold ${color}`}>
                {dir === "up" ? "বেড়েছে" : dir === "down" ? "কমেছে" : "অপরিবর্তিত"}
              </span>
              {diff > 0 && <> · {formatPrice(diff)} টাকা</>}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-base-200 px-5 py-3 text-center">
          <div className="text-xs opacity-70">আজকের দাম</div>
          <div className="text-3xl font-bold">{formatPrice(product.today)}</div>
          <div className="text-xs opacity-70">
            টাকা / {unitLabel(product.unit).replace("প্রতি ", "")}
          </div>
          <div className={`mt-1 text-sm font-semibold ${color}`}>
            {arrow} {formatPercent(pct)}%
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-base-300 bg-base-100 p-5">
        <h2 className="mb-4 text-lg font-bold">দামের সারসংক্ষেপ</h2>
        <PriceSummary product={product} />

        <h2 className="mb-2 mt-8 text-lg font-bold">বাজারভিত্তিক আজকের দাম</h2>
        <MarketTable markets={product.markets} />
      </section>
    </main>
  );
}