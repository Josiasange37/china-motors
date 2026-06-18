import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16 bg-gray-50">
        <div className="site-container py-16">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 mb-4">
              About Us
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Your Trusted China Auto Export Partner</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Based in Foshan, Guangdong — the heart of China&apos;s automotive export industry — China Auto Export has been connecting international dealers and wholesalers with quality used vehicles from China for over a decade.
            </p>
          </div>
        </div>
      </div>
      <div className="site-container py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">10+ Years of Export Excellence</h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Founded and operated by industry veterans, China Auto Export understands the complexities of cross-border vehicle trade. We bridge the gap between China&apos;s vast automotive inventory and overseas buyers who need reliable, export-ready vehicles.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Our team handles every step — from vehicle sourcing and inspection to export documentation and shipping coordination — so you can focus on selling in your market.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gray-200 p-5">
                <p className="text-3xl font-bold text-brand-600">500+</p>
                <p className="mt-1 text-sm text-gray-500">Vehicles Available</p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-5">
                <p className="text-3xl font-bold text-brand-600">50+</p>
                <p className="mt-1 text-sm text-gray-500">Countries Served</p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-5">
                <p className="text-3xl font-bold text-brand-600">10+</p>
                <p className="mt-1 text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-5">
                <p className="text-3xl font-bold text-brand-600">24/7</p>
                <p className="mt-1 text-sm text-gray-500">Customer Support</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-black p-8 text-white">
            <h3 className="text-xl font-semibold">Why Work With Us?</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <svg className="lucide lucide-circle-check mt-0.5 shrink-0 text-brand-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                  <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-sm leading-6 text-gray-200">Direct access to China&apos;s wholesale vehicle market</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="lucide lucide-circle-check mt-0.5 shrink-0 text-brand-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                  <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-sm leading-6 text-gray-200">Multilingual team supporting English, Spanish, French, Arabic</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="lucide lucide-circle-check mt-0.5 shrink-0 text-brand-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                  <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-sm leading-6 text-gray-200">48-hour quotation turnaround on requested vehicles</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="lucide lucide-circle-check mt-0.5 shrink-0 text-brand-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                  <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-sm leading-6 text-gray-200">Full export documentation and shipping support</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="lucide lucide-circle-check mt-0.5 shrink-0 text-brand-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                  <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-sm leading-6 text-gray-200">Competitive pricing with full transparency</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 text-center">
          <Link href="/vehicles" className="inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-8 py-4 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
            Browse Our Inventory
            <svg className="lucide lucide-arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
