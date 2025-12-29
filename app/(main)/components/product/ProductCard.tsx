"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "@/app/(main)/types/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${product.id}`)}
      className="
        cursor-pointer
        rounded-2xl
        bg-white
        dark:bg-zinc-900
        p-3
        shadow-sm
        hover:shadow-md
        transition
      "
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
        {product.isOffer && (
          <span className="absolute top-2 left-2 rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">
            Offer
          </span>
        )}
      </div>

      <div className="mt-3 space-y-1">
        <p className="line-clamp-2 text-sm font-medium">
          {product.title}
        </p>

        {/* Price */}
         <div className="flex items-center gap-2">
           <span className="font-semibold text-gray-900 dark:text-white">
             ₹{product.price}
           </span>

           {product.originalPrice && (
             <span className="text-xs text-gray-500 line-through">
               ₹{product.originalPrice}
             </span>
           )}
         </div>
      </div>
    </div>
  );
}

