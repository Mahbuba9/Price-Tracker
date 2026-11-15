import EmptyState from "@/components/EmptyState";
import CategoryProducts from "@/components/CategoryProducts";
import { getCategories, getProductsByCategory } from "@/lib/api";
import { toBn } from "@/lib/format";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const categories = await getCategories();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-16">
        <EmptyState
          title="ক্যাটাগরি পাওয়া যায়নি"
          message="আপনি যে ক্যাটাগরিটি খুঁজছেন সেটি নেই।"
        />
      </main>
    );
  }

  const products = await getProductsByCategory(slug);

  if (products.length === 0) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-16">
        <EmptyState
          title="কোনো পণ্য নেই"
          message="এই ক্যাটাগরিতে এখনো কোনো পণ্য যোগ করা হয়নি।"
        />
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 pb-10 pt-8">
      <div className="flex items-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-5">
        <div className="text-4xl">{category.icon}</div>
        <div>
          <h1 className="text-2xl font-bold">{category.nameBn}</h1>
          <p className="text-sm opacity-70">
            {toBn(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      <CategoryProducts products={products} />
    </main>
  );
}