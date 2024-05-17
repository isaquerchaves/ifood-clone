import { useEffect, useState } from "react";
import { fetchCategories, Category, Product, fetchProducts, fetchRestaurants, Restaurant } from "@/services/service";

export function useFetchCategories(): Category[] {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(()=> {
    async function fetchData() {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    }
    fetchData();
  }, []);

  return categories;
}

export function useFetchProducts(): Product[] {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(()=> {
    async function fetchData() {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    }
    fetchData();
  }, []);

  return products;
}

export function useFetchRestaurants(): Restaurant[] {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(()=> {
    async function fetchData() {
      try {
        const restaurantsData = await fetchRestaurants();
        setRestaurants(restaurantsData);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    }
    fetchData();
  }, []);

  return restaurants;
}