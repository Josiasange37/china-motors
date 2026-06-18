import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const faqs = [
  {
    q: "What types of vehicles do you export?",
    a: "We export a wide range of used vehicles including SUVs, sedans, pickup trucks, and commercial vehicles from top Chinese and international brands such as Jetour, BYD, Changan, Toyota, Volkswagen, BMW, Geely, Haval, and more.",
  },
  {
    q: "Which countries do you ship to?",
    a: "We serve over 50 countries across Africa, Latin America, the Middle East, Central Asia, and Southeast Asia. Our team has experience handling logistics and documentation requirements for diverse destinations.",
  },
  {
    q: "How do I inquire about a vehicle?",
    a: "You can browse our inventory online and use the WhatsApp chat button or email us at mason@chinaautoexport.cn with the vehicle details you're interested in. We typically respond within 24 hours.",
  },
  {
    q: "How long does the quotation process take?",
    a: "Our standard quotation turnaround is 48 hours. For popular models already in stock, we can often provide pricing within the same business day.",
  },
  {
    q: "What documents are required for export?",
    a: "We handle all export documentation including the Bill of Lading, Certificate of Origin, Commercial Invoice, Packing List, and any destination-specific customs requirements. We'll guide you through exactly what you need.",
  },
  {
    q: "Can I inspect vehicles before purchase?",
    a: "Yes, we provide detailed photos, videos, and condition reports for all vehicles. Third-party inspection services can also be arranged upon request for qualified buyers.",
  },
  {
    q: "What is the payment process?",
    a: "We offer flexible payment terms for verified buyers. Typically, a deposit secures the vehicle with the balance due before shipping. Payment methods include bank transfer (T/T) and other mutually agreed arrangements.",
  },
  {
    q: "How long does shipping take?",
    a: "Shipping time depends on the destination. Typical transit times range from 15-45 days depending on the port of discharge. We work with reliable freight partners to ensure timely delivery.",
  },
  {
    q: "Do you offer any warranty on exported vehicles?",
    a: "Warranty terms vary by vehicle and destination. We clearly communicate the condition and history of each vehicle. Please contact us for specific warranty options available for your target market.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "We welcome both single-vehicle purchases and bulk wholesale orders. Special pricing is available for volume buyers and regular customers.",
  },
];

export default function FAQPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16 bg-gray-50">
        <div className="site-container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 mb-4">
              FAQ
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Frequently Asked Questions</h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Common questions about our export process, shipping, and vehicle purchasing.
            </p>
          </div>
        </div>
      </div>
      <div className="site-container py-16">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all open:border-brand-200 open:shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-gray-900 list-none">
                {faq.q}
                <svg className="lucide lucide-chevron-down h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-4 text-base leading-7 text-gray-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
