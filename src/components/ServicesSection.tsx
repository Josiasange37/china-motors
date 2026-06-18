"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, Earth, FileText } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: ShieldCheck,
    title: "Inspected sourcing",
    description:
      "We focus on reliable vehicle sources, clear condition communication, and practical export-ready recommendations.",
  },
  {
    icon: Earth,
    title: "Global business support",
    description:
      "From multilingual communication to destination planning, we help importers move faster with fewer back-and-forth messages.",
  },
  {
    icon: FileText,
    title: "Documents & shipping coordination",
    description:
      "We align vehicle info, export paperwork, and shipment timing so your purchase process stays predictable.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-svc-badge]",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        "[data-svc-title]",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        "[data-svc-card]",
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power3.out", stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-16 md:py-24">
      <div className="site-container">
        {/* Badge */}
        <div data-svc-badge className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600">
          Service promise
        </div>

        {/* Title */}
        <h2 data-svc-title className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl max-w-3xl leading-tight">
          Designed for wholesale buyers who need speed, clarity, and trust
        </h2>

        {/* Service cards grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                data-svc-card
                key={service.title}
                className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10"
              >
                {/* Gradient icon box */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 shadow-lg shadow-brand-500/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
