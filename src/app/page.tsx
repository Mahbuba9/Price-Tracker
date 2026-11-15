import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import { getProducts } from "@/lib/api";
import { toBn } from "@/lib/format";

export default async function Home() {
  const products = await getProducts();

  const risers = products
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const fallers = products
    .filter((p) => p.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <>
      <Hero />
      <main className="mx-auto max-w-6xl px-4 pb-10">
        <ProductSection title="আজ দাম বেড়েছে" icon="up" products={risers} />
        <ProductSection title="আজ দাম কমেছে" icon="down" products={fallers} />
        <ProductSection
          id="সব-পণ্য"
          title="সব পণ্য"
          subtitle={`মোট ${toBn(products.length)}টি পণ্য দেখানো হচ্ছে`}
          products={products}
        />
      </main>
    </>
  );
}
