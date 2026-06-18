import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getVehicleById, vehicleDetails, allVehicles } from "@/data/vehicles";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allVehicles.map((v) => ({ id: String(v.id) }));
}

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  const vehicle = getVehicleById(id);
  if (!vehicle) notFound();

  const details = vehicleDetails[id] || {};

  return (
    <main>
      <Navbar />
      <div className="pt-16 bg-gray-50 min-h-screen">
        <div className="site-container py-8">
          <Link href="/vehicles" className="inline-flex items-center gap-1 text-sm text-brand-600 hover:text-brand-700 mb-6">
            <svg className="lucide lucide-arrow-left" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
              <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
            </svg>
            Back to Vehicles
          </Link>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-100">
              <img
                alt={vehicle.title}
                src={`/images/${vehicle.image}`}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 mb-4">
                {vehicle.fuel}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{vehicle.title}</h1>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Year</p>
                  <p className="mt-1 font-semibold text-gray-900">{vehicle.year}</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Mileage</p>
                  <p className="mt-1 font-semibold text-gray-900">{vehicle.mileage} km</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Transmission</p>
                  <p className="mt-1 font-semibold text-gray-900">{vehicle.transmission}</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Price</p>
                  <p className="mt-1 font-semibold text-brand-600">{vehicle.price}</p>
                </div>
                {details.color && (
                  <div className="rounded-xl border border-gray-200 bg-white p-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Color</p>
                    <p className="mt-1 font-semibold text-gray-900">{details.color}</p>
                  </div>
                )}
                {details.engine && (
                  <div className="rounded-xl border border-gray-200 bg-white p-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Engine</p>
                    <p className="mt-1 font-semibold text-gray-900">{details.engine}</p>
                  </div>
                )}
                {details.drive && (
                  <div className="rounded-xl border border-gray-200 bg-white p-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Drive</p>
                    <p className="mt-1 font-semibold text-gray-900">{details.drive}</p>
                  </div>
                )}
                {details.seats && (
                  <div className="rounded-xl border border-gray-200 bg-white p-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Seats</p>
                    <p className="mt-1 font-semibold text-gray-900">{details.seats}</p>
                  </div>
                )}
              </div>
              {details.description && (
                <p className="mt-6 text-base leading-7 text-gray-600">{details.description}</p>
              )}
              <div className="mt-8 flex gap-3">
                <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-green-600 transition-colors" type="button">
                  <svg className="lucide lucide-message-circle" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  Inquire on WhatsApp
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 px-6 py-3.5 text-sm font-semibold text-gray-800 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-colors" type="button">
                  <svg className="lucide lucide-mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18">
                    <rect height="16" rx="2" width="20" x="2" y="4" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
