"use client";
import {
  useFetchCategories,
  useFetchCategoriesRestaurant,
  useFetchProducts,
  useFetchRestaurants,
} from "@/app/_hooks/useFetch";
import { notFound } from "next/navigation";
import RestaurantImage from "./_components/restaurant-image";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import DeliveryInfo from "@/app/_components/delivery-info";
import ProductList from "@/app/_components/product/product-list";
import Loading from "@/app/_components/loading";

interface RestaurantPageProps {
  params: {
    id: string;
  };
}

const RestaurantPage = ({ params: { id } }: RestaurantPageProps) => {
  const { restaurants, loading, error } = useFetchRestaurants();
  const { categories } = useFetchCategories();
  const { products } = useFetchProducts();

  if (loading) {
    return (
      <Loading />
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const restaurant = restaurants.find((restaurant) => restaurant.ID === id);
  const product = products.filter((product) => product.RestaurantID === id);

  // Filtrando categorias para conter apenas as que têm produtos do restaurante específico
  const categorie = categories.map(category => ({
    ...category,
    Product: category.Product.filter(product => product.RestaurantID === id)
  })).filter(category => category.Product.length > 0);

  if (!restaurant) {
    return notFound();
  }

  return (
    <div>
      <RestaurantImage restaurant={restaurant} />

      <div className="flex justify-between itens-center px-5 pt-5">
        {/*TITULO*/}
        <div className="flex items-center gap-[0.375rem]">
          <div className="relative h-8 w-8">
            <Image
              src={restaurant.ImageUrl}
              alt={restaurant.Name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="font-semibold text-xl">{restaurant.Name}</h1>
        </div>

        <div className="py-[2px] px-2 rounded-full bg-foreground text-white flex items-center gap-[3px]">
          <StarIcon size={12} className=" fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-xs">5.0</span>
        </div>
      </div>

      <div className="px-5">
        <DeliveryInfo restaurant={restaurant} />
      </div>

      <div className="mt-3 flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
        {categorie.map((categorie) => (
          <div
            key={categorie.ID}
            className="min-w-[167px] rounded-lg bg-[#F4F4F4] text-center"
          >
            <span className="text-xs text-muted-foreground">
              {categorie.Name}
            </span>
          </div>
        ))}
      </div>

        {categorie.map((category) => (
          <div className="mt-6 space-y-4" key={category.ID}>
            <h2 className="px-5  font-semibold">{category.Name}</h2>
            <ProductList products={category.Product} />
          </div>
        ))}
    </div>
  );
};

export default RestaurantPage;