import type { Category, Product } from "./types";

const BASE_URL = "https://openapi.programming-hero.com/api/bazardor";

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

export const getProducts = () => get<Product[]>("/products");
export const getProductsByCategory = (category: string) =>
  get<Product[]>(`/products?category=${category}`);
export const getCategories = () => get<Category[]>("/categories");