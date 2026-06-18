"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight, CircleCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
  "Verified vehicle sourcing from trusted Chinese markets",
  "Multilingual support for international buyers",
  "Transparent pricing with no hidden fees",
  "End-to-end logistics and export documentation",
];

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-cta-left] > *",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        "[data-cta-right] > *",
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.12, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black py-16 md:py-24">
      {/* Radial gradient overlays */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-[150px]" />
      <div className="absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-[120px]" />

      <div className="site-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — text & buttons */}
          <div data-cta-left className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-300">
              Direct import support
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              Buy direct from China with a more polished digital first impression
            </h2>

            {/* Description */}
            <p className="max-w-xl text-base leading-relaxed text-gray-400">
              Skip the middlemen and connect directly with verified Chinese
              suppliers. Our platform makes international vehicle sourcing as
              smooth as a local purchase.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 hover:bg-gray-100 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-600 px-6 py-3 text-sm font-semibold text-gray-200 hover:bg-gray-800 transition-colors"
              >
                Learn About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right column — feature checklist */}
          <div data-cta-right className="space-y-5">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-4">
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                <span className="text-base text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
