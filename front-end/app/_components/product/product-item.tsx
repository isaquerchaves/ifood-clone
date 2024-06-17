"use client";

import { Product } from "@/services/service";
import Image from "next/image";
import { calculateProductTotalPrice, formatCurrency } from "../../_helpers/price";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link className=" min-w-[150px] w-full" href={`/products/${product.ID}`}>
      <div className="space-y-2 w-full">
        <div className="h-[150px] w-full relative">
          <Image
            src={product.ImageUrl}
            alt={product.Name}
            fill
            className="object-cover rounded-lg shadow-md"
          />
          {product.DiscountPercentage && (
            <div className="absolute top-2 left-2 bg-primary py-[2px] px-2 rounded-full text-white flex items-center gap-[2px]">
              <ArrowDownIcon size={12} />
              <span className="font-semibold text-xs">
                {product.DiscountPercentage}%
              </span>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-sm truncate">{product.Name}</h2>
          <div className="flex gap-1 items-center">
            <h3 className=" font-semibold">
              {formatCurrency(calculateProductTotalPrice(product))}
            </h3>
            {product.DiscountPercentage > 0 && (
              <span className=" line-through text-muted-foreground text-xs">
                {formatCurrency(product.Price)}
              </span>
            )}
          </div>
          <span className="text-muted-foreground text-xs block">
            {product.Restaurant.Name}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
