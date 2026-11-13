const BASE_URL = "https://openapi.programming-hero.com/api/bazardor";

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

export const getProducts = () => get<unknown>("/products");
export const getProductsByCategory = (category: string) =>
  get<unknown>(`/products?category=${category}`);
export const getProduct = (id: string | number) => get<unknown>(`/products/${id}`);
export const getCategories = () => get<unknown>("/categories");
export const getCategory = (slug: string) => get<unknown>(`/categories/${slug}`);