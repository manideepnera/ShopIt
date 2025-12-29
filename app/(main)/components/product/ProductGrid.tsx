import { Product } from "@/app/(main)/types/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  return (
    <div
      className="
        grid grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        gap-4
      "
    >
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}



// -> Use it on Home Page
// <ProductGrid products={featuredProducts} />


// or for offers:

// <ProductGrid products={products.filter(p => p.isOffer)} />