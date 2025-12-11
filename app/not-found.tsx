'use client';

import Link from 'next/link';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import '@/app/globals.css';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center relative overflow-hidden">
      {/* Decorative blurred shapes */}
      <div
        aria-hidden
        className="absolute -left-24 -top-24 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#FFB703]/20 to-[#8ECAE6]/10 blur-3xl opacity-30 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -right-24 -bottom-24 w-[520px] h-[520px] rounded-full bg-gradient-to-bl from-[#FB8500]/18 to-[#8ECAE6]/6 blur-3xl opacity-25 pointer-events-none"
      />

      <section className="z-10 container max-w-6xl px-6 py-12">
        <div className="bg-[#0b0b0b]/60 border border-[rgba(224,207,207,0.06)] rounded-2xl shadow-xl backdrop-blur-sm overflow-hidden">
          <div className="md:grid md:grid-cols-2 items-center gap-6">
            {/* Animation column */}
            <div className="p-6 md:p-10 flex items-center justify-center">
              <div className="w-full max-w-[320px] sm:max-w-[420px]">
                <DotLottieReact
                  src="https://lottie.host/bccab964-82bc-48d7-aa59-ba9f02f6fdb3/CdKYjrOwly.lottie"
                  loop
                  autoplay
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Content column */}
            <div className="p-6 md:p-10">
              <div className="max-w-xl mx-auto text-center md:text-left">
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
                  Page not found
                </h4>

                <p className="text-gray-400 mb-6">
                  We couldn't find the page you're looking for. It may have been moved or the URL might be
                  incorrect — let's get you back on track.
                </p>

                {/* Search input */}
                <form
                  role="search"
                  onSubmit={(e) => e.preventDefault()}
                  className="flex items-center gap-2 justify-center md:justify-start mb-6"
                >
                  <label htmlFor="site-search" className="sr-only">
                    Search the site
                  </label>
                  <input
                    id="site-search"
                    name="q"
                    placeholder="Search products, categories or articles..."
                    className="flex-1 min-w-0 bg-transparent border border-[rgba(224,207,207,0.06)] rounded-full py-2.5 px-4 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB703]/40"
                    aria-label="Search the site"
                  />
                  <button
                    type="submit"
                    className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFB703] text-black font-medium transition-transform active:translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB703]/40"
                    aria-label="Search"
                  >
                    Search
                  </button>
                </form>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#FB8500] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FB8500]/40 font-semibold transition"
                    aria-label="Back to Home"
                  >
                    Back to Home
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-[rgba(224,207,207,0.08)] text-gray-200 hover:bg-white/3 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/10"
                    aria-label="Contact support"
                  >
                    Contact support
                  </Link>
                </div>

                {/* Helpful links */}
                <div className="mt-6 text-sm text-gray-500">
                  <p>
                    Or try these:
                    <span className="ml-2 flex flex-wrap gap-2 mt-2 md:inline-block">
                      <Link href="/collections" className="underline underline-offset-2">
                        Browse collections
                      </Link>
                      <span className="mx-1">•</span>
                      <Link href="/help" className="underline underline-offset-2">
                        Help center
                      </Link>
                      <span className="mx-1">•</span>
                      <Link href="/sitemap.xml" className="underline underline-offset-2">
                        Sitemap
                      </Link>
                    </span>
                  </p>
                </div>

                {/* Small note */}
                <p className="mt-6 text-xs text-gray-600">
                  If you believe this is an error, please{' '}
                  <Link href="/contact" className="text-gray-300 underline">
                    get in touch
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
