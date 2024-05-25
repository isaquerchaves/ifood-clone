import { useEffect, useState } from "react";
import { fetchCategories, Category, Product, fetchProducts, fetchRestaurants, Restaurant } from "@/services/service";

interface UseFetchProductsResult {
  products: Product[];
  loading: boolean;
  error: Error | null;
}

export function useFetchProducts(): UseFetchProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { products, loading, error };
}

interface UseFetchCategoriesResult {
  categories: Category[];
  loading: boolean;
  error: Error | null;
}

export function useFetchCategories(): UseFetchCategoriesResult {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { categories, loading, error };
}

interface UseFetchRestaurantsResult {
  restaurants: Restaurant[];
  loading: boolean;
  error: Error | null;
}

export function useFetchRestaurants(): UseFetchRestaurantsResult {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const restaurantsData = await fetchRestaurants();
        setRestaurants(restaurantsData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { restaurants, loading, error };
}
