"use client";
import { useFetchRestaurants } from "@/app/_hooks/useFetch";
import { notFound } from "next/navigation";
import RestaurantImage from "./_components/restaurant-image";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import DeliveryInfo from "@/app/_components/delivery-info";

interface RestaurantPageProps {
  params: {
    id: string;
  };
}

const RestaurantPage = ({ params: { id } }: RestaurantPageProps) => {
  const { restaurants, loading, error } = useFetchRestaurants();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const restaurant = restaurants.find((restaurant) => restaurant.ID === id);

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

      <div className="flex overflow-x-scroll">
        
      </div>

    </div>
  );
};

export default RestaurantPage;
