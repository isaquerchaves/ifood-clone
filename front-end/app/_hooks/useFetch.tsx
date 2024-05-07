import { useEffect, useState } from "react";
import { fetchCategories, Category } from "@/services/service";

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