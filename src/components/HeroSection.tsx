import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-concrete-delivery.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Entrega de concreto usinado em obra"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container px-4 text-center text-background">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Concreto Usinado com
          <br />
          <span className="text-construction-orange">Entrega Rápida e Segura</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Receba concreto pronto direto na sua obra, com qualidade e preço justo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="cta" size="lg" className="text-lg px-8 py-4">
            Solicite Seu Orçamento Agora
          </Button>
          <Button variant="whatsapp" size="lg" className="text-lg px-8 py-4" asChild>
            <a href="https://api.whatsapp.com/send/?phone=554792568901&text=Preciso+de+consultoria+t%C3%A9cnica+para+minha+obra.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale no WhatsApp
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-construction-orange rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;