import ProductGrid from "@/app/(main)/components/product/ProductGrid";
import { PRODUCTS } from "@/app/(main)/data/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const products = PRODUCTS.filter(
    product => product.category === slug
  );

  return (
    <div className="px-4 py-8 mt-10 lg:mt-8 max-w-7xl mx-auto min-h-screen">
      <h4 className="mb-6 text-2xl font-bold capitalize text-gray-900 dark:text-white">
        {slug}
      </h4>

      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            No products available right now 😔
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-md">
            We’re working on adding products in this category.  
            Please check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
