'use client';

import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#070707] text-gray-200 border-t border-[rgba(224,207,207,0.03)] mt-12">
      <div className="container max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Brand & tagline */}
        <div className="flex flex-col gap-3 ">
          <Link href="/" aria-label="ShopIt home" className="inline-flex items-center gap-3">
            <h4 className="text-lg font-lusitana tracking-tight">ShopIt</h4>
          </Link>

          <p className="text-sm text-gray-400 max-w-xs">Your One-Stop Online Shop for Everything You Need.</p>

          <div className="flex gap-2 mt-2">
            <a href="#" aria-label="Instagram" className="p-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB703]/20">
              <img src="/icons/instagram.svg" alt="" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8ECAE6]/20">
              <img src="/icons/twitter.svg" alt="" />
            </a>
            <a href="/contact" aria-label="Contact" className="p-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FB8500]/20">
              <img src="/icons/contact.svg" alt="" />
            </a>
          </div>
        </div>

        {/* Navigation links */}
        <div className="flex flex-col gap-3">
          <h5 className="text-sm font-semibold">Explore</h5>
          <nav aria-label="Footer links" className="flex flex-col gap-2 text-sm text-gray-300">
            <Link href="/collections" className="hover:underline underline-offset-2">Collections</Link>
            <Link href="/new" className="hover:underline underline-offset-2">New arrivals</Link>
            <Link href="/sale" className="hover:underline underline-offset-2">Sale</Link>
            <Link href="/help" className="hover:underline underline-offset-2">Help center</Link>
          </nav>
        </div>

        {/* Newsletter / small CTA */}
        <div className="flex flex-col gap-3">
          <h5 className="text-sm font-semibold">Get updates</h5>
          <p className="text-sm text-gray-400">Join our mailing list for early access to launches and offers.</p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-2 flex w-full max-w-md items-center gap-2"
            aria-label="Subscribe to newsletter"
          >
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              type="email"
              placeholder="you@domain.com"
              className="flex-1 min-w-0 bg-transparent border border-[rgba(224,207,207,0.06)] rounded-full py-2 px-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB703]/30"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-full bg-[#6d6d6d] text-white text-sm font-bold hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB703]/20"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-3 text-sm text-gray-500">
            <p>Secure payments:</p>
            <div className="flex items-center gap-2 mt-2" aria-hidden>
              <div className="w-10 h-6 rounded bg-white/5 flex items-center justify-center text-xs">V</div>
              <div className="w-10 h-6 rounded bg-white/5 flex items-center justify-center text-xs">M</div>
              <div className="w-10 h-6 rounded bg-white/5 flex items-center justify-center text-xs">P</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(224,207,207,0.03)] mt-6">
        <div className="container max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} ShopIt — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-xs text-gray-400 hover:underline">Terms</Link>
            <Link href="/privacy" className="text-xs text-gray-400 hover:underline">Privacy</Link>
            <Link href="/contact" className="text-xs text-gray-400 hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
