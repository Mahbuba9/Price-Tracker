import { formatPrice, unitLabel } from "@/lib/format";
import type { Product } from "@/lib/types";

export default function PriceSummary({ product }: { product: Product }) {
  const mins = product.markets.map((m) => m.min);
  const maxs = product.markets.map((m) => m.max);

  const lowest = Math.min(...mins);
  const highest = Math.max(...maxs);
  const average = Math.round(
    product.markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) /
      product.markets.length
  );

  const lowestMarket = product.markets.find((m) => m.min === lowest);
  const highestMarket = product.markets.find((m) => m.max === highest);

  const cards = [
    {
      label: "সর্বনিম্ন দাম",
      value: lowest,
      note: lowestMarket ? `সবচেয়ে কম দাম পাওয়া গেছে: ${lowestMarket.market}` : "",
      color: "text-success",
    },
    {
      label: "সর্বোচ্চ দাম",
      value: highest,
      note: highestMarket ? `সবচেয়ে বেশি দাম পাওয়া গেছে: ${highestMarket.market}` : "",
      color: "text-error",
    },
    {
      label: "গড় দাম",
      value: average,
      note: `${unitLabel(product.unit)} সব বাজারের গড়`,
      color: "text-base-content",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {cards.map((c) => (
        <div
          key={c.label}
          className="rounded-xl border border-base-300 bg-base-100 p-4"
        >
          <div className="text-xs opacity-70">{c.label}</div>
          <div className={`mt-1 text-2xl font-bold ${c.color}`}>
            {formatPrice(c.value)}{" "}
            <span className="text-sm font-normal">টাকা</span>
          </div>
          <div className="mt-1 text-xs opacity-70">{c.note}</div>
        </div>
      ))}
    </div>
  );
}