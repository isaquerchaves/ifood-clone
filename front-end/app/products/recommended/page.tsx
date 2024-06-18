"use client"
import Header from "@/app/_components/header";
import Loading from "@/app/_components/loading";
import ProductItem from "@/app/_components/product/product-item";
import { useFetchProducts } from "@/app/_hooks/useFetch";

const RecommendedProductsPage = () => {
  const { products, loading } = useFetchProducts();
  
  if (loading) {
    return (
      <Loading />
    );
  }

  return ( 
    <>
      <Header />
      <div className="px-5 py-6">
        <h2 className="mb-6 text-lg font-semibold">Pedidos Recomendados</h2> 
        <div className="grid grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductItem
              key={product.ID}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
   );
}
 
export default RecommendedProductsPage;