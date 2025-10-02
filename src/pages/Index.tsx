import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import SolutionsSection from "@/components/SolutionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TruckSection from "@/components/TruckSection";
import AboutSection from "@/components/AboutSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <SolutionsSection />
      <TestimonialsSection />
      <TruckSection />
      <AboutSection />
      <MapSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
