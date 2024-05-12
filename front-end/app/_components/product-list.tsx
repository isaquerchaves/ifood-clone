'use client'

import { useFetchProducts } from "../_hooks/useFetch";
import ProductItem from "./product-item";

const ProductList = () => {
  const products = useFetchProducts();

  // Filtrar os produtos com DiscountPercentage diferente de zero
  const productsWithDiscount = products.filter(product => product.DiscountPercentage !== 0);

  return ( 
    <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden px-5">
      {productsWithDiscount.map((product:any) => (
        <ProductItem key={product.ID} product={product} />
      ))}
    </div>
   );
}
 
export default ProductList;