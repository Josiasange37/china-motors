"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Search, ArrowRight, MessageCircle, ShieldCheck, Clock3, Earth, Car } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  "Toyota", "Zotye", "Porsche", "Buick", "Geely", "Haval",
  "Volkswagen", "BMW", "Jetour", "Jetour Shanhai", "Maserati",
  "Hyundai", "Changan", "Changan Oushan", "Landwind", "Lexus",
];

const years = Array.from({ length: 19 }, (_, i) => 2026 - i);

const stats = [
  { icon: Earth, label: "1-to-1 Dedicated Export Advisor" },
  { icon: Clock3, label: "48-H Quotation Turnaround" },
  { icon: ShieldCheck, label: "24/7 Cross-Border Support" },
];

const tags = [
  "Verified vehicle sources",
  "Dealer & wholesale support",
  "Fast Quote Response",
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
      tl.fromTo("[data-hero-badge]", { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo("[data-hero-title]", { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.5")
        .fromTo("[data-hero-sub]", { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.4")
        .fromTo("[data-hero-search]", { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.3")
        .fromTo("[data-hero-tags] > *", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, "-=0.3")
        .fromTo("[data-hero-btns] > *", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.5 }, "-=0.3")
        .fromTo("[data-hero-stats] > *", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.5 }, "-=0.3")
        .fromTo("[data-hero-card]", { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.8");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          alt=""
          src="/banner.jpg"
          className="h-full w-full object-cover opacity-40"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />

      {/* Radial gradient highlight */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-white/5 blur-[120px]" />

      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Blur circle decoration */}
      <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-white/[0.04] blur-[100px]" />

      <div className="site-container relative z-10 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div data-hero-badge className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-gray-300">
              <Car className="h-4 w-4" />
              China Auto Export Hub
            </div>

            {/* Heading */}
            <h1 data-hero-title className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              China Used Car Exporter <span className="text-brand-400">&</span> Wholesaler
            </h1>

            {/* Subtitle */}
            <p data-hero-sub className="max-w-xl text-lg text-gray-300 leading-relaxed">
              Source premium pre-owned vehicles directly from China&apos;s largest
              automotive markets. Reliable export partner for global dealers.
            </p>

            {/* Search form — hidden on mobile */}
            <div data-hero-search className="hidden md:block">
              <div className="flex items-center gap-0 rounded-xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl shadow-black/30 max-w-lg">
                <div className="flex items-center gap-2 px-4 flex-1">
                  <Search className="h-5 w-5 text-gray-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search by make, model or keyword..."
                    className="w-full bg-transparent py-3.5 text-sm text-white placeholder:text-gray-500 outline-none"
                  />
                </div>
                <Link
                  href="/vehicles"
                  className="flex items-center gap-2 bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors shrink-0"
                >
                  Search
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Tag pills */}
            <div data-hero-tags className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium text-gray-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div data-hero-btns className="flex flex-wrap gap-4">
              <Link
                href="/vehicles"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 hover:bg-brand-700 transition-colors"
              >
                Browse Inventory
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/vehicles"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-gray-200 hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Talk to Our Export Team
              </Link>
            </div>

            {/* Stats grid */}
            <div data-hero-stats className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Icon className="h-5 w-5 text-white/70" />
                    </div>
                    <p className="text-sm font-medium text-gray-300 leading-snug pt-0.5">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column — hidden on mobile */}
          <div data-hero-card className="hidden lg:block lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 shadow-2xl shadow-black/30">
              <h3 className="text-lg font-semibold text-white mb-5">
                Search Vehicles
              </h3>

              {/* Brand input */}
              <div className="space-y-2 mb-4">
                <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Brand
                </label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    list="brands"
                    placeholder="Select or type a brand..."
                    className="w-full rounded-lg border border-white/10 bg-black/30 py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-colors"
                  />
                  <datalist id="brands">
                    {brands.map((brand) => (
                      <option key={brand} value={brand} />
                    ))}
                  </datalist>
                </div>
              </div>

              {/* Year select */}
              <div className="space-y-2 mb-6">
                <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Year
                </label>
                <select className="w-full rounded-lg border border-white/10 bg-black/30 py-2.5 px-3 text-sm text-white outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-colors appearance-none">
                  <option value="">Any Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search buttons */}
              <div className="space-y-3">
                <Link
                  href="/vehicles"
                  className="flex items-center justify-center gap-2 w-full rounded-lg bg-brand-600 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
                >
                  <Search className="h-4 w-4" />
                  Search Vehicles
                </Link>
                <Link
                  href="/vehicles"
                  className="flex items-center justify-center gap-2 w-full rounded-lg border border-white/10 bg-white/5 py-2.5 text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
                >
                  View All Inventory
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Hint text */}
              <p className="mt-4 text-center text-xs text-gray-500">
                300+ vehicles available from trusted Chinese sources
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
