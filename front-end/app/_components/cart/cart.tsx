import { useContext } from "react";
import { CartContext } from "../../_context/cart";
import CartItem from "./cart-item";
import { Card, CardContent } from "../ui/card";
import { formatCurrency } from "@/app/_helpers/price";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const Cart = () => {
  const { products, subTotalPrice, totalPrice, totalDiscounts } =
    useContext(CartContext);

  return (
    <div className="py-5">
      <div className="space-y-4">
        {products.map((product) => (
          <CartItem key={product.ID} cartProduct={product} />
        ))}
      </div>

      {/*TOTAIS*/}
      <div className="mt-6">
        <Card>
          <CardContent className="p-5 space-y-2">
            <div className="justify-between items-center flex text-xs">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatCurrency(subTotalPrice)}</span>
            </div>

            <Separator />

            <div className="justify-between items-center flex text-xs">
              <span className="text-muted-foreground">Descontos</span>
              <span>- {formatCurrency(totalDiscounts)}</span>
            </div>

            <Separator />

            <div className="justify-between items-center flex text-xs">
              <span className="text-muted-foreground">Entrega</span>
              <span>
                {Number(products[0].Restaurant.DeliveryFee) === 0 ? (
                  <span className="uppercase text-primary">Grátis</span>
                ) : (
                  formatCurrency(Number(products[0].Restaurant.DeliveryFee))
                )}
              </span>
            </div>

            <Separator />

            <div className="justify-between items-center flex text-xs font-semibold">
              <span>Total</span>
              <span>{formatCurrency(totalPrice)}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/*FINALIZAR PEDIDO*/}
      <Button className="w-full mt-6">Finalizar Pedido</Button>
    </div>
  );
};

export default Cart;
