import { Truck, Shield, Award, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Entrega Ágil em Todo o Brasil",
    description: "Logística otimizada para chegar no prazo em sua obra"
  },
  {
    icon: Shield,
    title: "Qualidade Garantida no Concreto",
    description: "Controle rigoroso de qualidade em cada mistura"
  },
  {
    icon: Award,
    title: "Fornecedor de Confiança",
    description: "Mais de 20 anos de experiência no mercado"
  },
  {
    icon: DollarSign,
    title: "Preço Justo por m³",
    description: "Melhor custo-benefício sem comprometer a qualidade"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-construction-gray-light">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher nosso concreto?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Garantimos qualidade, agilidade e o melhor preço para sua obra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mx-auto w-16 h-16 bg-construction-orange/10 rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="h-8 w-8 text-construction-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;