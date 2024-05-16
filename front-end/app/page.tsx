"use client";

import Image from "next/image";
import Header from "./_components/header";
import Search from "./_components/search";
import CategoryList from "./_components/ui/category-list";
import ProductList from "./_components/product-list";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { useFetchProducts } from "./_hooks/useFetch";

export default function Home() {
  const products = useFetchProducts();

  // Filtrar os produtos com DiscountPercentage diferente de zero
  const productsWithDiscount = products.filter(
    (product) => product.DiscountPercentage !== 0
  );

  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <Image
          src="/promo-banner-01.png"
          alt="Até 30% de desconto em pizzas"
          height={0}
          width={0}
          className="w-full h-auto object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>

      <div className="pt-6 space-y-4">
        <div className="px-5 flex justify-between items-center">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button
            variant="ghost"
            className="text-primary p-0 hover:bg-transparent h-fit"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <ProductList products={productsWithDiscount} />
      </div>

      <div className="px-5 pt-6">
        <Image
          src="/promo-banner-02.png"
          alt="Até 30% de desconto em pizzas"
          height={0}
          width={0}
          className="w-full h-auto object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>
    </>
  );
}
