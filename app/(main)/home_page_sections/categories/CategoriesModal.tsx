"use client";
import "@/app/globals.css";

interface Props {
  categories: string[];
  onClose: () => void;
  onSelect: (category: string) => void;
}

export default function CategoriesModal({
  categories,
  onClose,
  onSelect,
}: Props) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h4>Categories</h4>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-grid">
          {categories.map(cat => (
            <button
              key={cat}
              className="category-chip"
              onClick={() => onSelect(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
