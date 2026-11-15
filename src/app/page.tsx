import { getProducts } from "@/lib/api";
import { formatPrice, unitLabel, banglaDate } from "@/lib/format";

export default async function Home() {
  const products = await getProducts();
  const units = [...new Set(products.map((p) => p.unit))];

  return (
    <main className="p-10">
      <p>{banglaDate()}</p>
      <p>Total products: {products.length}</p>
      <p>Units found: {units.join(", ")}</p>
      <p>
        {products[0].image} {products[0].nameBn} - {formatPrice(products[0].today)} টাকা ({unitLabel(products[0].unit)})
      </p>
    </main>
  );
}