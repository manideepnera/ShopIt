import { PRODUCTS } from "@/app/(main)/data/products";
import Image from "next/image";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-xl font-semibold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-zinc-50 dark:bg-black mt-10 lg:mt-8">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        <div className="grid gap-10 md:grid-cols-2">

          {/* IMAGE SECTION */}
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* INFO SECTION */}
          <div className="flex flex-col justify-center space-y-6">

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {product.title}
            </h3>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-semibold text-gray-900 dark:text-white">
                ₹{product.price}
              </span>

              {product.originalPrice && (
                <span className="text-base text-gray-500 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            {/* Meta */}
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Category:{" "}
              <span className="capitalize text-gray-900 dark:text-gray-200">
                {product.category}
              </span>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 dark:bg-zinc-700" />

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                className="
                  flex-1
                  rounded-xl
                  bg-black
                  px-6
                  py-3
                  text-white
                  font-medium
                  hover:bg-gray-900
                  transition
                "
              >
                Add to Cart
              </button>

              <button
                className="
                  flex-1
                  rounded-xl
                  border
                  border-gray-300
                  dark:border-zinc-700
                  px-6
                  py-3
                  text-gray-900
                  dark:text-white
                  hover:bg-gray-100
                  dark:hover:bg-zinc-800
                  transition
                "
              >
                Buy Now
              </button>
            </div>

            {/* Trust text */}
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Secure payments • Easy returns • Fast delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
