"use client";
import Header from "@/app/_components/header";
import Loading from "@/app/_components/loading";
import RestaurantItem from "@/app/_components/restaurant/restaurant-item";
import { useFetchRestaurants } from "@/app/_hooks/useFetch";
import Link from "next/link";

const RecomendedRestaurants = () => {
  const { restaurants, loading } = useFetchRestaurants();

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <Header />
      <div className="px-5 py-6">
        <h2 className="mb-6 text-lg font-semibold">
          Restaurantes Recomendados
        </h2>
        <div className="flex w-full flex-col gap-6">
          {restaurants.map((restaurant) => (
            <div key={restaurant.ID} className="w-full">
              <Link href={`/restaurants/${restaurant.ID}`}>
                <RestaurantItem restaurant={restaurant} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecomendedRestaurants;
