import { Restaurant } from "@/services/service";

export function filterRestaurants(restaurants: Restaurant[], search: string): Restaurant[] {
  const lowerCaseFilter = search.toLowerCase();
  return restaurants.filter(restaurant => 
    restaurant.Name.toLocaleLowerCase().includes(lowerCaseFilter)
  );
}