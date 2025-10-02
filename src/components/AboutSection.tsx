import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Trophy, Clock } from "lucide-react";

const stats = [
  { icon: Clock, number: "20+", label: "Anos de Experiência" },
  { icon: Users, number: "5000+", label: "Clientes Atendidos" },
  { icon: Trophy, number: "10000+", label: "Obras Realizadas" },
];

const AboutSection = () => {
  return (
    <section className="py-12 md:py-16 bg-construction-gray-light">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Tradição e <span className="text-construction-orange">Compromisso</span> com sua Obra
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              Há mais de duas décadas fornecendo concreto usinado de alta qualidade para obras 
              de todos os portes. Nossa experiência e compromisso com a excelência fazem de nós 
              o parceiro ideal para sua construção.
            </p>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {[
                "Controle rigoroso de qualidade em cada mistura",
                "Frota própria de caminhões betoneira modernos",
                "Equipe técnica especializada e experiente",
                "Atendimento personalizado para cada projeto"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-construction-orange flex-shrink-0" />
                  <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg" className="w-full sm:w-auto">
              Conheça Nossa História
            </Button>
          </div>

          {/* Stats */}
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow-lg text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
                    <div className="w-12 h-12 bg-construction-orange/10 rounded-full flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-construction-orange" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-construction-orange">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-background p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-3">Nossos Valores</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Qualidade sem compromissos</li>
                <li>✓ Pontualidade nas entregas</li>
                <li>✓ Transparência nos preços</li>
                <li>✓ Relacionamento duradouro</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;