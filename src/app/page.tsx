import Navbar from "@/components/Navbar";
import { getCategories } from "@/lib/api";

export default async function Home() {
  const categories = await getCategories();

  return (
    <>
      <Navbar categories={categories} />
      <main className="mx-auto max-w-6xl p-4">Home content coming soon</main>
    </>
  );
}