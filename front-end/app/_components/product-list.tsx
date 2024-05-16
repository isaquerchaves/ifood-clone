import ProductItem from "./product-item";

const ProductList = ({products}: any) => {

  return ( 
    <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden px-5">
      {products.map((product:any) => (
        <ProductItem key={product.ID} product={product} />
      ))}
    </div>
   );
}
 
export default ProductList;