"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="site-container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img alt="China Auto Export" src="/logo.svg" className="h-9 w-auto" decoding="async" />
          </Link>
          <div className="hidden md:flex items-center gap-20">
            <Link href="/" className="text-base font-semibold text-gray-700 hover:text-brand-600 transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full" />
            </Link>
            <Link href="/vehicles" className="text-base font-semibold text-gray-700 hover:text-brand-600 transition-colors relative group">
              Vehicles
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full" />
            </Link>
            <Link href="/about" className="text-base font-semibold text-gray-700 hover:text-brand-600 transition-colors relative group">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full" />
            </Link>
            <Link href="/faq" className="text-base font-semibold text-gray-700 hover:text-brand-600 transition-colors relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full" />
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="relative group flex items-center gap-1 text-sm text-gray-600">
              <span className="font-medium">USD/CNY : 1$=¥6.7720</span>
              <svg className="lucide lucide-circle-help text-gray-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div className="pointer-events-none absolute top-full right-0 mt-2 whitespace-nowrap rounded-lg bg-gray-900 px-2.5 py-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                Refreshes daily at Beijing time 09:00
              </div>
            </div>
            <div className="relative">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors">
                <svg className="lucide lucide-globe" fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="15">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <span>🇬🇧 EN</span>
                <svg className="lucide lucide-chevron-down" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
            <Link href="/vehicles" className="px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-lg hover:bg-brand-700 transition-colors">
              Vehicles
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100" onClick={() => setMobileOpen(!mobileOpen)}>
              <svg className="lucide lucide-menu" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-2">
            <div className="flex flex-col gap-2">
              <Link href="/" className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-brand-600" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/vehicles" className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-brand-600" onClick={() => setMobileOpen(false)}>Vehicles</Link>
              <Link href="/about" className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-brand-600" onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link href="/faq" className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-brand-600" onClick={() => setMobileOpen(false)}>FAQ</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
