'use client'

import { useFetchCategories } from "@/app/_hooks/useFetch";
import CategoryItem from "../category-item";

const CategoryList = () => {
  const categories = useFetchCategories();

  return (
    <div className="grid grid-cols-2 gap-3">
      {categories.map( (category:any) => (
        <CategoryItem
          key={category.ID} 
          category={category}
        />
      ))}
    </div>
   );
}
 
export default CategoryList;