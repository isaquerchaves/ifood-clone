"use client";

import { useFetchCategories } from "@/app/_hooks/useFetch";
import CategoryItem from "./category-item";
import Link from "next/link";

const CategoryList = () => {
  const { categories } = useFetchCategories();

  return (
    <div className="grid grid-cols-2 gap-3">
      {categories.map((category: any) => (
        <Link key={category.ID} href={`categories/${category.ID}/products`}>
          <CategoryItem category={category} />
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
