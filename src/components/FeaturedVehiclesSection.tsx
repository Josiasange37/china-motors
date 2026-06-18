"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { vehicles } from "@/data/vehicles";
import VehicleCard from "@/components/VehicleCard";

gsap.registerPlugin(ScrollTrigger);

const featuredVehicles = vehicles.slice(0, 8);

export default function FeaturedVehiclesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-fv-header] > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        "[data-fv-card]",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: "[data-fv-grid]", start: "top 75%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-slate-50">
      {/* Gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-brand-50/80 to-transparent" />

      <div className="site-container relative z-10 py-16 md:py-24">
        {/* Header row */}
        <div data-fv-header className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Featured Vehicles
            </h2>
            <p className="mt-2 text-gray-500">
              Carefully selected quality vehicles ready for export
            </p>
          </div>
          <Link
            href="/vehicles"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors shrink-0"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Vehicle grid */}
        <div data-fv-grid className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {featuredVehicles.map((vehicle) => (
            <div data-fv-card key={vehicle.id}>
              <VehicleCard vehicle={vehicle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
