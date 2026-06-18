import Link from "next/link";
import type { Vehicle } from "@/data/vehicles";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Link href={`/vehicles/${vehicle.id}`}>
      <div className="group flex min-h-[320px] cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md sm:h-[380px]">
        <div className="relative h-56 flex-shrink-0 overflow-hidden bg-gray-100 sm:h-52">
          <img
            alt={vehicle.title}
            src={`/images/${vehicle.image}`}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
          />
          <div className="absolute left-3 top-3 flex gap-2">
            <span className="rounded-lg bg-white/90 px-2 py-1 text-xs font-medium text-gray-700">{vehicle.fuel}</span>
          </div>
        </div>
        <div className="flex min-h-0 flex-1 flex-col p-3 sm:p-4">
          <h3 className="line-clamp-2 text-sm font-semibold text-gray-900 sm:text-base">{vehicle.title}</h3>
          <div className="mt-3 flex h-5 flex-wrap content-start gap-x-4 gap-y-1 overflow-hidden text-xs text-gray-500">
            <span className="flex items-center gap-1" title="Registered">
              <svg aria-hidden="true" className="lucide lucide-calendar shrink-0 text-brand-500" fill="none" height="11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="11">
                <path d="M8 2v4" /><path d="M16 2v4" /><rect height="18" rx="2" width="18" x="3" y="4" /><path d="M3 10h18" />
              </svg>
              {vehicle.year}
            </span>
            <span className="flex items-center gap-1">
              <svg className="lucide lucide-gauge text-brand-500" fill="none" height="11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="11">
                <path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" />
              </svg>
              <span className="font-medium text-gray-700">{vehicle.mileage}</span> km
            </span>
            <span className="flex items-center gap-1">
              <svg className="lucide lucide-settings2" fill="none" height="11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="11">
                <path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" />
              </svg>
              {vehicle.transmission}
            </span>
          </div>
          <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
            <span className="text-lg font-bold text-brand-600">{vehicle.price}</span>
            <span className="text-xs font-medium text-brand-600">View Details →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
