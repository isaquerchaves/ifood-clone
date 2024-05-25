import { Button } from "@/app/_components/ui/button";
import { Product } from "@/services/service";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductImageProps {
  product: Pick<Product, "Name" | "ImageUrl">
}

const ProductImage = ({product}: ProductImageProps) => {
  const router = useRouter();

  const handleBackClick = () => router.back();

  return ( 
    <div className="relative w-full h-[360PX]">
        <Image
          src={product.ImageUrl}
          alt={product.Name}
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
      </div>
   );
}
 
export default ProductImage;