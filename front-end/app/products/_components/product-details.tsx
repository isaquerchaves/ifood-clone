"use client";
import DeliveryInfo from "@/app/_components/delivery-info";
import DiscountBadge from "@/app/_components/discount-badge";
import ProductList from "@/app/_components/product/product-list";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import {
  formatCurrency,
  calculateProductTotalPrice,
} from "@/app/_helpers/price";
import { Product } from "@/services/service";
import {
  BikeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TimerIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
  product: Product;
  complementaryProducts: Product[] | undefined;
}

const ProductDetails = ({
  product,
  complementaryProducts,
}: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantityClick = () =>
    setQuantity((currentState) => currentState + 1);
  const handleDecreaseQuantityClick = () =>
    setQuantity((currentState) => {
      if (currentState === 1) return 1;
      return currentState - 1;
    });

  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-tl-3xl rounded-tr-3xl bg-white py-5">
      {/*RESTAURANTE*/}
      <div className="flex items-center gap-[0.375rem] px-5">
        <div className="relative h-6 w-6">
          <Image
            src={product.Restaurant.ImageUrl}
            alt={product.Restaurant.Name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <span className="text-xs text-muted-foreground">
          {product.Restaurant.Name}
        </span>
      </div>

      {/*NOME DO PRODUTO*/}
      <h1 className="font-semibold text-xl mb-3 mt-1 px-5">{product.Name}</h1>

      {/*PREÇO DO PRODUTO E QUANTIDADE*/}
      <div className="flex justify-between px-5">
        {/*PREÇO COM DESCONTO*/}
        <div className="">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-xl">
              {formatCurrency(calculateProductTotalPrice(product))}
            </h2>
            {product.DiscountPercentage > 0 && (
              <DiscountBadge product={product} />
            )}
          </div>

          {/*PREÇO ORIGINAL*/}
          <p className="text-muted-foreground text-sm">
            De: {formatCurrency(product.Price)}
          </p>
        </div>

        {/*QUANTIDADE*/}
        <div className="flex gap-2 items-center text-center">
          <Button
            size="icon"
            variant="ghost"
            className="border border-solid border-muted-foreground"
            onClick={handleDecreaseQuantityClick}
          >
            <ChevronLeftIcon />
          </Button>
          <span className="w-4">{quantity}</span>
          <Button size="icon" onClick={handleIncreaseQuantityClick}>
            <ChevronRightIcon />
          </Button>
        </div>
      </div>

      {/*DADOS DA ENTREGA*/}
      <div className="px-5">
        <DeliveryInfo restaurant={product.Restaurant} />
      </div>

      {/*DESCRIÇÃO*/}
      <div className="mt-6 space-y-3 px-5">
        <h3 className="font-semibold">Sobre</h3>
        <p className="text=sm text-muted-foreground">{product.Description}</p>
      </div>

      <div className="mt-6 space-y-3">
        <h3 className="font-semibold px-5">Sucos</h3>
        <ProductList products={complementaryProducts} />
      </div>

      <div className="mt-6 px-5">
        <Button className="w-full font-semibold">
          Adicionar à sacola
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
