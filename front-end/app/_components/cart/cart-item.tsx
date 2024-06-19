import { CartContext, CartProduct } from "@/app/_context/cart";
import {
  calculateProductTotalPrice,
  formatCurrency,
} from "@/app/_helpers/price";
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
  cartProduct: CartProduct;
}

const CartItem = ({ cartProduct }: CartItemProps) => {
  const {
    decreseProductQuantity,
    increseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const handleDecreseQuantityClick = () =>
    decreseProductQuantity(cartProduct.ID);

  const handleIncreseQuantityClick = () =>
    increseProductQuantity(cartProduct.ID);

  const handleDeleteClick = () => removeProductFromCart(cartProduct.ID);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 relative">
          <Image
            src={cartProduct.ImageUrl}
            alt={cartProduct.Name}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-xs">{cartProduct.Name}</h3>

          <div className="flex items-center gap-1">
            <h4 className="text-sm font-semibold">
              {formatCurrency(
                calculateProductTotalPrice(cartProduct) * cartProduct.quantity
              )}
            </h4>
            {cartProduct.DiscountPercentage > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                {formatCurrency(
                  Number(cartProduct.Price) * cartProduct.quantity
                )}
              </span>
            )}
          </div>

          {/* QUANTIDADE */}
          <div className="flex items-center text-center">
            <Button
              size="icon"
              variant="ghost"
              className="border border-solid border-muted-foreground h-7 w-7"
            >
              <ChevronLeftIcon size={16} onClick={handleDecreseQuantityClick} />
            </Button>
            <span className="block w-8 text-xs">{cartProduct.quantity}</span>
            <Button
              size="icon"
              className="h-7 w-7"
              onClick={handleIncreseQuantityClick}
            >
              <ChevronRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>

      <Button
        size="icon"
        variant="ghost"
        className="h-7 w-7 border border-solid border-muted-foreground"
        onClick={handleDeleteClick}
      >
        <TrashIcon size={18} />
      </Button>
    </div>
  );
};

export default CartItem;
