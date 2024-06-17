"use client";
import Header from "@/app/_components/header";
import Loading from "@/app/_components/loading";
import ProductItem from "@/app/_components/product/product-item";
import { useFetchCategories } from "@/app/_hooks/useFetch";
import { Category, Product } from "@/services/service";
import { notFound } from "next/navigation";

interface CategoriesPageProps {
  params: {
    id: string;
  };
}

const CategoriesPage = ({ params: { id } }: CategoriesPageProps) => {
  const { categories, loading, error } = useFetchCategories();

  const nameCategories = categories.find((category) => category.ID === id);

  const filteredCategories = categories
    .map((category: Category) => ({
      ...category,
      Product: category.Product.filter((product: Product) => product.CategoryID === id)
    }))
    .filter((category: Category) => category.Product.length > 0);

  console.log(filteredCategories);

  if (loading) {
    return (
      <Loading />
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!nameCategories?.Name) {
    return notFound();
  }

  return (
    <>
      <Header />
      <div className="px-5 py-6">
        <h2 className="mb-6 text-lg font-semibold">{nameCategories?.Name}</h2>
        <div className="grid grid-cols-2 gap-6">
        {filteredCategories.map((category: Category) =>
            category.Product.map((product: Product) => (
              <ProductItem key={product.ID} product={product} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
