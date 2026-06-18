"use client";

import { useEffect, useRef } from "react";
import { Car, Award, Earth, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Car, value: "500+", label: "Cars in Stock" },
  { icon: Award, value: "10", label: "Years of Experience" },
  { icon: Earth, value: "50+", label: "Countries Served" },
  { icon: TrendingUp, value: "100%", label: "High Customer Satisfaction" },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-stats-content] > *",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 -mt-20">
      <div className="site-container">
        <div className="rounded-2xl bg-white shadow-xl shadow-black/5 border border-gray-100 p-8 md:p-12 lg:p-16">
          {/* Badge */}
          <div data-stats-content className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600">
            Why buyers choose us
          </div>

          {/* Heading */}
          <h2 data-stats-content className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl max-w-3xl leading-tight">
            A cleaner, faster way to source vehicles from China for your market
          </h2>

          {/* Description */}
          <p data-stats-content className="mt-4 max-w-2xl text-base text-gray-600 leading-relaxed">
            We help overseas dealers and independent buyers access China&apos;s
            vast automotive inventory with transparent pricing, quality
            inspections, and seamless logistics — all from one trusted partner.
          </p>

          {/* Stats grid */}
          <div data-stats-content className="mt-10 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-2"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                    <Icon className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
