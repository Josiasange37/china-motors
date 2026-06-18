"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-footer-content] > *",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={sectionRef} className="bg-black text-gray-300">
      <div data-footer-content className="site-container py-6 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <img alt="China Auto Export" src="/logo.svg" className="h-10 w-auto mb-3 brightness-0 invert" />
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">China Auto Export Experts</p>
            <div className="flex gap-3 mt-5">
              <button className="w-9 h-9 bg-brand-400/20 hover:bg-brand-400 rounded-full flex items-center justify-center transition-colors group" type="button">
                <svg className="lucide lucide-message-circle text-brand-400 group-hover:text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </button>
              <Link href="mailto:mason@chinaautoexport.cn" className="w-9 h-9 bg-brand-400/20 hover:bg-brand-400 rounded-full flex items-center justify-center transition-colors group">
                <svg className="lucide lucide-mail text-brand-400 group-hover:text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
                  <rect height="16" rx="2" width="20" x="2" y="4" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm text-gray-400 hover:text-brand-400 transition-colors">Home</Link></li>
              <li><Link href="/vehicles" className="text-sm text-gray-400 hover:text-brand-400 transition-colors">Vehicles</Link></li>
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="text-sm text-gray-400 hover:text-brand-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <svg className="lucide lucide-mail text-brand-400 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
                  <rect height="16" rx="2" width="20" x="2" y="4" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <Link href="mailto:mason@chinaautoexport.cn" className="text-gray-400 hover:text-brand-400 transition-colors break-all">mason@chinaautoexport.cn</Link>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <svg className="lucide lucide-message-circle text-brand-400 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                <button className="text-left text-gray-400 hover:text-brand-400 transition-colors" type="button">WhatsApp Chat</button>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <svg className="lucide lucide-map-pin text-brand-400 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <Link href="https://maps.app.goo.gl/HhVmcJPZJpuiQEWA8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-400 transition-colors">
                  G15-G18 Block 63, Haibali Road, Guicheng, Nanhai District, Foshan, Guangdong, China
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-4 border-t border-gray-800 mt-2 md:mt-4 pt-4 md:pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-500">© 2026 China Auto Export. All rights reserved.</p>
            <p className="text-xs text-gray-500">www.chinaautoexport.cn</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
