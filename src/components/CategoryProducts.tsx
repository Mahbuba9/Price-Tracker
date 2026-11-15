"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import SortSelect, { type SortOption } from "@/components/SortSelect";
import { toBn } from "@/lib/format";
import type { Product } from "@/lib/types";

export default function CategoryProducts({
  products,
}: {
  products: Product[];
}) {
  const [sort, setSort] = useState<SortOption>("default");

  const sorted = useMemo(() => {
    const list = [...products];
    if (sort === "asc") list.sort((a, b) => a.today - b.today);
    if (sort === "desc") list.sort((a, b) => b.today - a.today);
    return list;
  }, [products, sort]);

  return (
    <>
      <div className="mt-4 flex justify-end rounded-xl border border-base-300 bg-base-100 p-4">
        <SortSelect value={sort} onChange={setSort} />
      </div>

      <p className="mt-4 text-sm opacity-70">
        মোট {toBn(sorted.length)}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}