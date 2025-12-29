import { Product } from "@/app/(main)/types/product";

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    title: "Wireless Headphones",
    image: "/products/wirelessHeadphones.png",
    price: 2999,
    originalPrice: 3999,
    category: "electronics",
    rating: 4.5,
    isOffer: true,
  },
  {
    id: "p2",
    title: "Modern Wooden Chair",
    image: "/products/modernWoodenChair.png",
    price: 6499,
    category: "furniture",
  },
  {
    id: "p3",
    title: "Men's Casual Sneakers",
    image: "/products/mensCasualSneakers.png",
    price: 1999,
    originalPrice: 2499,
    category: "fashion",
    isOffer: true,
  },
  {
    id: "p4",
    title: "Kitchen Mixer Grinder",
    image: "/products/kitchenMixerGrinder.png",
    price: 4599,
    category: "kitchen",
  },
  {
    id: "p5",
    title: "Beard Grooming Kit",
    image: "/products/beardGroomingKit.png",
    price: 999,
    category: "grooming",
  },
];
