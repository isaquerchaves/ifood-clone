import { Product } from "@/services/service";
import { ArrowDownIcon } from "lucide-react";

interface DiscountBadgeProps {
  product: Pick<Product, "DiscountPercentage">
}

const DiscountBadge = ({product}: DiscountBadgeProps) => {
  return (
    <div className="bg-primary py-[2px] px-2 rounded-full text-white flex items-center gap-[2px]">
      <ArrowDownIcon size={12} />
      <span className="font-semibold text-xs">
        {product.DiscountPercentage}%
      </span>
    </div>
  );
};

export default DiscountBadge;
