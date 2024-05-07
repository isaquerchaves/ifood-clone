import { Category } from "@/services/service";
import Image from "next/image";

interface CategoryItemProps{
  category: Category
}

const CategoryItem = ({category}: CategoryItemProps) => {
  return ( 
    <div className="flex items-center gap-3 py-3 px-4 bg-white shadow-md rounded-full">
      <Image 
        src={category.ImageUrl}
        alt={category.Name}
        height={30}
        width={30}
      />

      <span className="font-semibold text-sm">{category.Name}</span>
    </div>
   );
}
 
export default CategoryItem;