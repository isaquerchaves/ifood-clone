import { Product } from "@/services/service";

export const calculateProductTotalPrice = (product: Product) => {
  if (product.DiscountPercentage === 0) {
    return product.Price;
  }

  const discount = (product.Price) * (product.DiscountPercentage / 100);

  return product.Price - discount
}

export const formatCurrency = (value: number): string => {
  return `R$${Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value)}`
}