import { BikeIcon, TimerIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Restaurant } from "@/services/service";
import { formatCurrency } from "../_helpers/price";

interface DeliveryInfoProps {
  restaurant: Pick<Restaurant, 'DeliveryFee' | 'DeliveryTimeMinutes'>
}

const DeliveryInfo = ( {restaurant}: DeliveryInfoProps) => {
  return ( 
    <div>
    <Card className="flex justify-around py-3 mt-6">
      {/*CUSTO*/}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1 text-muted-foreground">
          <span className="text-xs">Entrega</span>
          <BikeIcon size={14} />
        </div>

        {restaurant.DeliveryFee > 0 ? (
          <p className="text-xs font-semibold">
            {formatCurrency(restaurant.DeliveryFee)}
          </p>
        ) : (
          <p className="text-xs font-semibold">Gratis</p>
        )}
      </div>

      {/*TEMPO*/}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1 text-muted-foreground">
          <span className="text-xs">Entrega</span>
          <TimerIcon size={14} />
        </div>
        <p className="text-xs font-semibold">
          {restaurant.DeliveryTimeMinutes} min
        </p>
      </div>
    </Card>
  </div>
   );
}
 
export default DeliveryInfo;