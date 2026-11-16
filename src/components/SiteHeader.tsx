import Navbar from "@/components/Navbar";
import PriceTicker from "@/components/PriceTicker";
import { getCategories, getProducts } from "@/lib/api";
import type { Category, Product } from "@/lib/types";

export default async function SiteHeader() {
  let categories: Category[] = [];
  let products: Product[] = [];

  try {
    [categories, products] = await Promise.all([
      getCategories(),
      getProducts(),
    ]);
  } catch {
    // API unreachable: show the header without categories and ticker
  }

  return (
    <>
      <Navbar categories={categories} />
      {products.length > 0 && <PriceTicker products={products} />}
    </>
  );
}