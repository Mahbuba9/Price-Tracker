import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/types";

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  icon?: "up" | "down";
  products: Product[];
};

export default function ProductSection({
  id,
  title,
  subtitle,
  icon,
  products,
}: Props) {
  return (
    <section id={id} className="scroll-mt-4 pt-8">
      <h2 className="flex items-center gap-2 text-xl font-bold">
        {icon === "up" && <span className="text-sm text-error">▲</span>}
        {icon === "down" && <span className="text-sm text-success">▼</span>}
        {title}
      </h2>
      {subtitle && <p className="mt-1 text-sm opacity-70">{subtitle}</p>}

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}