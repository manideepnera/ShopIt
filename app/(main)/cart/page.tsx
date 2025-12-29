import Image from "next/image";
import { PRODUCTS } from "@/app/(main)/data/products";

export default function CartPage() {
  // TEMP: mock cart using existing products
  const cartItems = PRODUCTS.slice(0, 2);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Your Cart
        </h1>

        {cartItems.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-3">
            {/* Items */}
            <div className="md:col-span-2 space-y-6">
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl bg-white dark:bg-zinc-900 p-4"
                >
                  <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 capitalize">
                        {item.category}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold">
                        ₹{item.price}
                      </span>
                      <button className="text-sm text-red-500 hover:underline">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="rounded-2xl bg-white dark:bg-zinc-900 p-6 h-fit">
              <h2 className="mb-4 text-lg font-semibold">
                Order Summary
              </h2>

              <div className="flex justify-between text-sm mb-2">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>

              <div className="flex justify-between text-sm mb-4">
                <span>Delivery</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between font-semibold text-lg mb-6">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button className="w-full rounded-xl bg-black py-3 text-white">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="py-32 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Your cart is empty 🛒
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
