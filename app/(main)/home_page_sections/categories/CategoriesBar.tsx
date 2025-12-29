"use client";
import "@/app/globals.css";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "./categories";
import CategoriesModal from "./CategoriesModal";

export default function CategoriesBar() {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = CATEGORIES.slice(0, 10);

  const goToCategory = (category: string) => {
    router.push(`/category/${category.toLowerCase()}`);
    setShowAll(false);
  };

  return (
    <>
      <div className="categories-bar">
        {visibleCategories.map(cat => (
          <button
            key={cat}
            className="category-chip"
            onClick={() => goToCategory(cat)}
          >
            {cat}
          </button>
        ))}

        <button
          className="category-chip show-all"
          onClick={() => setShowAll(true)}
        >
          Show All
        </button>
      </div>

      {showAll && (
        <CategoriesModal
          categories={CATEGORIES}
          onClose={() => setShowAll(false)}
          onSelect={goToCategory}
        />
      )}
    </>
  );
}
