"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface CarouselItem {
  image: string;
  category: string;
}

interface Props {
  items: CarouselItem[];
  interval?: number;
}

export default function ImageCarousel({
  items,
  interval = 4000,
}: Props) {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const next = () =>
    setCurrent(prev => (prev + 1) % items.length);

  const prev = () =>
    setCurrent(prev => (prev - 1 + items.length) % items.length);

  /* ---------------- Auto Play ---------------- */
  useEffect(() => {
    autoPlayRef.current = setInterval(next, interval);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [interval]);

  const pauseAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const resumeAutoPlay = () => {
    autoPlayRef.current = setInterval(next, interval);
  };

  /* ---------------- Swipe ---------------- */
  const onTouchStart = (e: React.TouchEvent) => {
    pauseAutoPlay();
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const diff =
      touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) next();
    if (diff < -50) prev();

    touchStartX.current = null;
    resumeAutoPlay();
  };

  /* ---------------- Click ---------------- */
  const goToCategory = (category: string) => {
    router.push(`/category/${category}`);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => goToCategory(item.category)}
            className="
              relative
              w-full
              flex-shrink-0
              h-[220px]
              sm:h-[300px]
              lg:h-[480px]
              cursor-pointer
            "
          >
            <Image
              src={item.image}
              alt={item.category}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black/70"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black/70"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
