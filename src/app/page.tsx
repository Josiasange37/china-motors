import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturedVehiclesSection from "@/components/FeaturedVehiclesSection";
import ServicesSection from "@/components/ServicesSection";
import WorkflowSection from "@/components/WorkflowSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <main className="bg-white">
      <Navbar />
      <HeroSection />
      <div className="flex flex-col">
        <div className="order-2 lg:order-1">
          <StatsSection />
        </div>
        <div className="order-1 lg:order-2">
          <FeaturedVehiclesSection />
        </div>
      </div>
      <ServicesSection />
      <WorkflowSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
