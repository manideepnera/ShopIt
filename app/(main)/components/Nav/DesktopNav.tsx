// components/Nav/DesktopNav.tsx
"use client";

import React from "react";
import Link from "next/link";

export interface DesktopNavProps {
  navStyle?: (visible: boolean) => React.CSSProperties;
  showNav?: boolean;
  query: string;
  setQuery: (q: string) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({
  navStyle = () => ({}),
  showNav = true,
  query,
  setQuery,
}) => {
  return (
    <nav
      style={navStyle(showNav)}
      className="hidden md:block fixed left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm shadow-lg"
      aria-hidden={!showNav}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <h5 className="text-2xl font-lusitana font-semibold text-white select-none">ShopIt</h5>
            <span className="sr-only">Maxy / ShopIt</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div
            className="flex items-center rounded-[28px] border py-1 pl-3 pr-4 backdrop-blur-sm min-w-[320px]
                transition-all duration-300"
            style={{
              borderColor: "rgba(224,207,207,0.2)",
              minHeight: 44,
            }}
          >
            <div className="flex items-center gap-3 min-w-[44px]">
              <img src="/icons/searchicn.svg" alt="search" className="w-5 h-5" />
            </div>

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none text-[#cbbaba] placeholder:text-[#cbbaba] text-base transition-all duration-200 focus:text-white focus:placeholder:text-[#e8dede]"
              aria-label="Search"
            />

            <div className="flex items-center gap-3 ml-2">
              <div className="w-[1px] h-6 bg-[rgba(224,207,207,0.15)]" />

              <button aria-label="camera" className="p-1.5 rounded-md transition-opacity duration-200 hover:opacity-70">
                <img src="/icons/cameraicn.svg" alt="camera" className="w-5 h-5" />
              </button>

              <button aria-label="voice" className="p-1.5 rounded-md transition-opacity duration-200 hover:opacity-70">
                <img src="/icons/micicn.svg" alt="voice" className="w-5 h-5" />
              </button>
            </div>
          </div>

          <Link href="/wishlist" aria-label="wishlist">
            <button className="w-9 h-9 rounded flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90 hover:opacity-80" aria-label="Open wishlist">
              <img src="/icons/wishlisticn.svg" alt="heart" className="w-6 h-6" />
            </button>
          </Link>

          <Link href="/cart" aria-label="cart">
            <button className="w-10 h-10 rounded flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90 hover:opacity-80" aria-label="Open cart">
              <img src="/icons/carticn.svg" alt="cart" className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
