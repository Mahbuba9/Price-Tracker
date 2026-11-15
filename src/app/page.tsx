import Navbar from "@/components/Navbar";
import PriceTicker from "@/components/PriceTicker";
import { getCategories, getProducts } from "@/lib/api";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return (
    <>
      <Navbar categories={categories} />
      <PriceTicker products={products} />
      <main className="mx-auto max-w-6xl p-4">Home content coming soon</main>
    </>
  );
}