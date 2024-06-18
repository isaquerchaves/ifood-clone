"use client";
import { Product } from "@/services/service";
import { ReactNode, createContext, useMemo, useState } from "react";
import { calculateProductTotalPrice } from "../_helpers/price";

export interface CartProduct extends Product {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  subTotalPrice: number;
  totalPrice: number;
  totalDiscounts: number;
  addProductToCart: (product: Product, quantity: number) => void;
  decreseProductQuantity: (productId: string) => void;
  increseProductQuantity: (productId: string) => void;
  removeProductFromCart: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  subTotalPrice: 0,
  totalPrice: 0,
  totalDiscounts: 0,
  addProductToCart: () => {},
  decreseProductQuantity: () => {},
  increseProductQuantity: () => {},
  removeProductFromCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const subTotalPrice = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.Price) * product.quantity
    }, 0)
  }, [products])

  const totalPrice = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + calculateProductTotalPrice(product) * product.quantity
    }, 0)
  }, [products])

  const totalDiscounts = subTotalPrice - totalPrice;

  const decreseProductQuantity = (productId: string) => {
    return setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.ID === productId) {
          if (cartProduct.quantity === 1) {
            return cartProduct;
          }
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          };
        }

        return cartProduct;
      })
    );
  };

  const increseProductQuantity = (productId: string) => {
    return setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.ID === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      })
    );
  };

  const removeProductFromCart = (productId: string) => {
    return setProducts((prev) =>
      prev.filter((product) => product.ID !== productId)
    );
  };

  const addProductToCart = (product: Product, quantity: number) => {
    // VERIFICAR SE O PRODUTO JÁ ESTÁ NO CARRINHO
    const isProductAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.ID === product.ID
    );

    // SE ELETIVER, AUMENTAR A SUA QUANTIDADE
    if (isProductAlreadyOnCart) {
      return setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.ID === product.ID) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            };
          }

          return cartProduct;
        })
      );
    }

    // SE NÃO, ADICIONAR COM A QUANTIDADE QUANTIDADE RECEBIDA
    setProducts((prev) => [...prev, { ...product, quantity: quantity }]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        subTotalPrice,
        totalPrice,
        totalDiscounts,
        addProductToCart,
        decreseProductQuantity,
        increseProductQuantity,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
