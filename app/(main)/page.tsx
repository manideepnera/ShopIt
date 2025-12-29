import CategoriesBar from "./home_page_sections/categories/CategoriesBar";
import ProductGrid from "@/app/(main)/components/product/ProductGrid";
import { PRODUCTS } from "@/app/(main)/data/products";
import ImageCarousel from "@/app/(main)/components/common/ImageCarousel";

export default function Home() {
  const featured = PRODUCTS.slice(0, 4);
  const offers = PRODUCTS.filter(p => p.isOffer);
  const carouselItems = [
  { image: "/banners/banner1.png", category: "fashion" },
  { image: "/banners/banner2.png", category: "electronics" },
  { image: "/banners/banner3.png", category: "grocery" },
  { image: "/banners/banner4.png", category: "beauty" },
];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
          py-6
          sm:py-10
          lg:py-15
          space-y-8
          mt-10
          lg:mt-6
        "
      >

        {/* Hero */}
        <section className="space-y-4 sm:space-y-6">
          <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Welcome to <span className="font-lusitana">Shopit</span>!
          </h4>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
            Your One-Stop Online Shop for Everything You Need.
          </p>
        </section>

        {/* Categories */}
        <section>
          <CategoriesBar />
        </section>

        {/* Carousel */}
        <section>
          <ImageCarousel  items={carouselItems} />
        </section>

        {/* Featured */}
        <section className="space-y-6">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
            Featured
          </h4>
          <ProductGrid products={featured} />
        </section>

        {/* Offers */}
        <section className="space-y-6">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
            Offers
          </h4>
          <ProductGrid products={offers} />
        </section>

        {/* Future sections */}
        {/*
        <section>Trending</section>
        <section>ShopIt AI</section>
        */}
      </main>
    </div>
  );
}
