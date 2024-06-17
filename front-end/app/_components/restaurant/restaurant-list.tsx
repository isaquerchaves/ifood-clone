import Link from "next/link";
import { useFetchRestaurants } from "../../_hooks/useFetch";
import RestaurantItem from "./restaurant-item";

const RestaurantList = () => {
  const { restaurants } = useFetchRestaurants();

  return (
      <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden px-5">
        {restaurants.map((restaurant: any) => (
          <Link key={restaurant.ID} href={`/restaurants/${restaurant.ID}`}>
          <RestaurantItem restaurant={restaurant} />
          </Link>
        ))}
      </div>
  );
};

export default RestaurantList;
