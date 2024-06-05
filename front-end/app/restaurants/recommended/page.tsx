"use client";
import Header from "@/app/_components/header";
import RestaurantItem from "@/app/_components/restaurant-item";
import { useFetchRestaurants } from "@/app/_hooks/useFetch";
import Link from "next/link";

const RecomendedRestaurants = () => {
  const { restaurants } = useFetchRestaurants();

  return (
    <>
      <Header />
      <div className="px-5 py-6">
        <h2 className="mb-6 text-lg font-semibold">
          Restaurantes Recomendados
        </h2>
        <div className="flex w-full flex-col gap-6">
          {restaurants.map((restaurant) => (
            <div className="w-full">
              <Link href={`/restaurants/${restaurant.ID}`}>
                <RestaurantItem key={restaurant.ID} restaurant={restaurant} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecomendedRestaurants;
