import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import SolutionsSection from "@/components/SolutionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteSection from "@/components/QuoteSection";
import TruckSection from "@/components/TruckSection";
import AboutSection from "@/components/AboutSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <SolutionsSection />
      <TestimonialsSection />
      <QuoteSection />
      <TruckSection />
      <AboutSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
