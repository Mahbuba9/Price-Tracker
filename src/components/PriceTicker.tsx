import { formatPercent, formatPrice, unitLabel } from "@/lib/format";
import type { Product } from "@/lib/types";

function shortUnit(unit: string) {
  return unitLabel(unit).replace("প্রতি ", "");
}

export default function PriceTicker({ products }: { products: Product[] }) {
  const items = [...products, ...products];

  return (
    <div className="overflow-hidden border-b border-base-300 bg-base-100">
      <div className="marquee-track py-2 text-sm">
        {items.map((p, i) => {
          const dir = p.change.dir;
          const color =
            dir === "up"
              ? "text-error"
              : dir === "down"
                ? "text-success"
                : "opacity-60";
          const arrow = dir === "up" ? "▲" : dir === "down" ? "▼" : "—";

          return (
            <div
              key={`${p.id}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap border-r border-base-300 px-4"
            >
              <span>{p.image}</span>
              <span className="font-medium">{p.nameBn}</span>
              <span className="opacity-70">
                {formatPrice(p.today)} টাকা/{shortUnit(p.unit)}
              </span>
              <span className={`font-semibold ${color}`}>
                {arrow} {formatPercent(p.change.pct)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}