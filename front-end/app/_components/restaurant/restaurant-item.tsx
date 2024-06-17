import { Restaurant } from "@/services/service";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../../_helpers/price";
import { Button } from "./../ui/button";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <div className="min-w-[266px] w-full">
      <div className="w-full h-[136px] relative">
        <Image
          src={restaurant.ImageUrl}
          alt={restaurant.Name}
          fill
          className="object-cover rounded-lg"
        />

        <div className="absolute top-2 left-2 bg-primary py-[2px] px-2 rounded-full bg-white flex items-center gap-[2px]">
          <StarIcon size={12} className=" fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-xs">5.0</span>
        </div>

        <Button
          size="icon"
          className="absolute top-2 right-2 rounded-full bg-gray-700 h-7 w-7"
        >
          <HeartIcon className="fill-white" size={16} />
        </Button>
      </div>

      <div>
        <h3 className="font-semibold text-sm">{restaurant.Name}</h3>
        <div className="flex gap-3">
          <div className="flex gap-1">
            <BikeIcon className="text-primary" size={12} />
            <span className="text-xs text-muted-foreground">
              {restaurant.DeliveryFee === 0
                ? "Entrega Gratis"
                : formatCurrency(restaurant.DeliveryFee)}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <TimerIcon className="text-primary" size={12} />
            <span className="text-xs text-muted-foreground">
              {restaurant.DeliveryTimeMinutes} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
