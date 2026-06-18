import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VehicleCard from "@/components/VehicleCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { allVehicles } from "@/data/vehicles";

export default function VehiclesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <div className="bg-gray-50 min-h-screen">
          <div className="site-container py-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-3 items-end">
                  <div className="relative">
                    <svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <input className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Brand, series, model" type="search" />
                  </div>
                  <button className="w-full lg:w-auto flex items-center justify-center gap-2 py-2 px-6 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-colors" type="button">
                    <svg className="lucide lucide-search" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    Search
                  </button>
                </div>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">All Vehicles</h1>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
              {allVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
