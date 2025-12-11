"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export interface MobileNavProps {
  navStyle?: (visible: boolean) => React.CSSProperties;
  showNav?: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({
  navStyle = () => ({}),
  showNav = true,
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // Close overlays on md+ to avoid stale state
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) {
        setShowSearch(false);
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setShowSearch(false);
        setMenuOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Auto-focus search input when panel opens
  useEffect(() => {
    if (showSearch) {
      // small delay to allow animation to start
      requestAnimationFrame(() => searchInputRef.current?.focus());
    }
  }, [showSearch]);

  // Click outside to close panels
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node | null;
      if (!target) return;

      // if click is inside search or menu or the toggle buttons, do nothing
      if (
        (searchRef.current && searchRef.current.contains(target)) ||
        (menuRef.current && menuRef.current.contains(target))
      )
        return;

      // otherwise close both panels
      setShowSearch(false);
      setMenuOpen(false);
    }

    if (showSearch || menuOpen) {
      document.addEventListener("click", onDocClick);
    }
    return () => document.removeEventListener("click", onDocClick);
  }, [showSearch, menuOpen]);

  // Prevent body scroll when either overlay is open (mobile only)
  useEffect(() => {
    const noScroll = showSearch || menuOpen;
    if (noScroll && window.innerWidth < 768) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [showSearch, menuOpen]);

  // Helpers to compute max-height for smooth expand/collapse
  const getMaxHeight = (el: HTMLDivElement | null) => {
    if (!el) return "0px";
    // give a little extra for comfortable spacing
    return `${el.scrollHeight + 8}px`;
  };

  return (
    <nav
      style={navStyle(showNav)}
      className="md:hidden fixed left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm shadow-lg"
      aria-hidden={!showNav}
    >
      <div className="relative px-4 py-3">
        {/* TOP ROW */}
        <div className="flex items-center justify-between w-full">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <span
                className="font-serif select-none"
                style={{
                  fontFamily: "'Lusitana', serif",
                  fontWeight: 500,
                  fontSize: 32,
                  lineHeight: "40px",
                  color: "#f7dede",
                  letterSpacing: "-0.5px",
                  display: "block",
                }}
              >
                ShopIt
              </span>
            </Link>
          </div>

          {/* Search & Menu Icons */}
          <div className="flex items-center gap-2">
            {/* Search toggle */}
            <button
              aria-expanded={showSearch}
              aria-controls="mobile-search"
              onClick={() => {
                setMenuOpen(false);
                setShowSearch((prev) => !prev);
              }}
              className="w-10 h-10 rounded flex items-center justify-center"
              aria-label={showSearch ? "Close search" : "Open search"}
            >
              <img src="/icons/searchicn.svg" alt="search" className="w-5 h-5" />
            </button>

            {/* Menu toggle */}
            <button
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => {
                setShowSearch(false);
                setMenuOpen((prev) => !prev);
              }}
              className="w-10 h-10 rounded flex items-center justify-center"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <img src="/icons/menuicn.svg" alt="menu" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* SEARCH PANEL - smooth height transition (better than scaleY) */}
        <div
          id="mobile-search"
          ref={searchRef}
          className="overflow-hidden transition-all duration-200 ease-in-out"
          style={{
            maxHeight: showSearch ? getMaxHeight(searchRef.current) : "0px",
            opacity: showSearch ? 1 : 0,
            pointerEvents: showSearch ? "auto" : "none",
            transformOrigin: "top",
            marginTop: showSearch ? 12 : 0,
          }}
          aria-hidden={!showSearch}
        >
          {/* Search Bar Row - Fully Responsive */}
<div className="flex items-center justify-between w-full gap-3">

  {/* Search Bar */}
  <div
    className="flex items-center flex-1 rounded-[28px] border py-1 pl-3 pr-4 backdrop-blur-sm
               min-w-0"
    style={{
      borderColor: "rgba(224,207,207,0.2)",
      minHeight: 44,
    }}
  >
    <div className="flex items-center gap-3 min-w-[36px]">
      <img src="/icons/searchicn.svg" alt="search" className="w-5 h-5" />
    </div>

    <input
      aria-label="Search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
      className="flex-1 bg-transparent outline-none text-[#cbbaba] placeholder:text-[#cbbaba]
                 text-base min-w-0"
    />

    <div className="flex items-center gap-3 ml-2 shrink-0">
      <div className="w-[1px] h-6 bg-[rgba(224,207,207,0.15)]" />

      <button aria-label="camera" className="p-1.5 rounded-md">
        <img src="/icons/cameraicn.svg" alt="camera" className="w-5 h-5" />
      </button>

      <button aria-label="voice" className="p-1.5 rounded-md">
        <img src="/icons/micicn.svg" alt="voice" className="w-5 h-5" />
      </button>
    </div>
  </div>

  {/* QR Icon */}
  <button
    aria-label="qr"
    className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
  >
    <img src="/icons/qrcodeicn.svg" alt="qr" className="w-5 h-5" />
  </button>
</div>
        </div>

        {/* MENU PANEL - smooth height transition */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className="overflow-hidden transition-all duration-180 ease-in-out"
          style={{
            maxHeight: menuOpen ? getMaxHeight(menuRef.current) : "0px",
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? "auto" : "none",
            transformOrigin: "top",
            marginTop: menuOpen ? 12 : 0,
          }}
          aria-hidden={!menuOpen}
        >
          <div className="bg-transparent rounded-md py-2 px-1">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/wishlist"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/3"
                >
                  <img src="/icons/wishlisticn.svg" alt="wishlist" className="w-5 h-5" />
                  <span className="text-sm text-[#cbbaba]">Wishlist</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/cart"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/3"
                >
                  <img src="/icons/carticn.svg" alt="cart" className="w-5 h-5" />
                  <span className="text-sm text-[#cbbaba]">Cart</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/orders"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/3"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7h18M7 7v10a2 2 0 002 2h6a2 2 0 002-2V7"
                    />
                  </svg>
                  <span className="text-sm text-[#cbbaba]">Orders</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;