"use client";
import { useFetchProducts } from "@/app/_hooks/useFetch";
import { notFound } from "next/navigation";
import ProductImage from "../_components/product-image";
import ProductDetails from "../_components/product-details";
import Loading from "@/app/_components/loading";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = ({ params: { id } }: ProductPageProps) => {
  const { products, loading, error } = useFetchProducts();

  if (loading) {
    return (
      <Loading />
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const product = products.find((product) => product.ID === id);

  if (!product) {
    return notFound();
  }

  const juices = products.filter(
    (products) =>
      products.RestaurantID === product.RestaurantID &&
      products.CategoryID === "4e33d8dd-86b0-41b6-9114-de37b6841015"
  );

  return (
    <div>
      {/*IMAGEM*/}
      <ProductImage product={product} />

      {/*TITULO E PREÇO*/}
      <ProductDetails product={product} complementaryProducts={juices} />
    </div>
  );
};

export default ProductPage;
