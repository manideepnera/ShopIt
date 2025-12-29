import ProductGrid from "@/app/(main)/components/product/ProductGrid";
import { PRODUCTS } from "@/app/(main)/data/products";

export default function WishlistPage() {
  // TEMP: mock wishlist
  const wishlistItems = PRODUCTS.filter(p => p.isOffer);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Wishlist
        </h1>

        {wishlistItems.length > 0 ? (
          <ProductGrid products={wishlistItems} />
        ) : (
          <div className="py-32 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Your wishlist is empty 💔
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Save products you love and come back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
