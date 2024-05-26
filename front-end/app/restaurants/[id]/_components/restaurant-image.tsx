import { Button } from "@/app/_components/ui/button";
import { Restaurant } from "@/services/service";
import { ChevronLeftIcon, HeartIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RestaurantImageProps {
  restaurant: Pick<Restaurant, "Name" | "ImageUrl">
}

const RestaurantImage = ({restaurant}: RestaurantImageProps) => {
  const router = useRouter();

  const handleBackClick = () => router.back();

  return ( 
    <div className="relative w-full h-[215PX]">
        <Image
          src={restaurant.ImageUrl}
          alt={restaurant.Name}
          fill
          className="object-cover"
        />

        <Button
          className="absolute left-4 top-4 rounded-full bg-white text-foreground hover:text-white"
          size="icon"
          onClick={handleBackClick}
        >
          <ChevronLeftIcon />
        </Button>

        <Button size="icon" className="absolute top-4 right-4 rounded-full bg-gray-700">
          <HeartIcon className="fill-white" size={20} />
        </Button>
      </div>
   );
}
 
export default RestaurantImage;