import { useFetchRestaurants } from "../_hooks/useFetch";
import RestaurantItem from "./restaurant-item";

const RestaurantList = () => {
  const { restaurants } = useFetchRestaurants();

  return ( 
    <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden px-5">
      {restaurants.map((restaurant:any) => (
        <RestaurantItem key={restaurant.ID} restaurant={restaurant} />
      ))}
    </div>
   );
}
 
export default RestaurantList;