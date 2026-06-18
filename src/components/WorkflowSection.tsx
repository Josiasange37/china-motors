"use client";

import { useEffect, useRef } from "react";
import { Search, FileCheck, Truck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Select target vehicles",
    description:
      "Browse our verified inventory and pick the vehicles that match your market demand and budget requirements.",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Confirm quote & documents",
    description:
      "Receive a transparent all-in quote, review export documentation, and confirm your order with confidence.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Prepare shipment",
    description:
      "We handle inspection, logistics booking, and export clearance so your vehicles are ready for departure.",
  },
];

export default function WorkflowSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-wf-badge]",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        "[data-wf-title]",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        "[data-wf-card]",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.2,
          scrollTrigger: { trigger: "[data-wf-grid]", start: "top 75%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-slate-50 py-16 md:py-24">
      <div className="site-container">
        {/* Outer dark card */}
        <div className="rounded-3xl bg-black p-8 md:p-12 lg:p-16">
          {/* Badge */}
          <div data-wf-badge className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300">
            Simple workflow
          </div>

          {/* Title */}
          <h2 data-wf-title className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl max-w-3xl leading-tight">
            Export workflow in three clear steps
          </h2>

          {/* Steps grid */}
          <div data-wf-grid className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  data-wf-card
                  key={step.number}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/5"
                >
                  {/* Number label */}
                  <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600/20 text-sm font-bold text-brand-400">
                    {step.number}
                  </div>

                  <Icon className="mb-5 h-7 w-7 text-brand-400" />

                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-400">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
