import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Layers, Zap, Ruler } from "lucide-react";
import concreteTruckImage from "@/assets/concrete-truck.jpg";

const solutions = [
  {
    icon: Building,
    title: "Concreto para Laje",
    description: "Resistência ideal para lajes residenciais e comerciais",
    features: ["FCK 20 a 40 MPa", "Consistência controlada", "Entrega programada"]
  },
  {
    icon: Layers,
    title: "Concreto para Fundação",
    description: "Base sólida e durável para sua construção",
    features: ["Alta resistência", "Baixa permeabilidade", "Controle de qualidade"]
  },
  {
    icon: Zap,
    title: "Bombeamento de Concreto",
    description: "Alcance lugares difíceis com nossa bomba lança",
    features: ["Até 50m de altura", "Acesso facilitado", "Maior produtividade"]
  },
  {
    icon: Ruler,
    title: "Fornecimento por m³ sob Medida",
    description: "Volume exato para sua necessidade, sem desperdício",
    features: ["Cálculo preciso", "Sem sobras", "Entrega otimizada"]
  }
];

const SolutionsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossas <span className="text-construction-orange">Soluções</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos o tipo ideal de concreto para cada etapa da sua obra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-construction-orange/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-construction-orange/10 rounded-lg flex items-center justify-center">
                    <solution.icon className="h-6 w-6 text-construction-orange" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription className="text-base">{solution.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-construction-orange rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Imagem do Caminhão */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Entrega Rápida e <span className="text-construction-orange">Segura</span>
          </h3>
          <div className="relative max-w-4xl mx-auto">
            <img 
              src={concreteTruckImage} 
              alt="Caminhão betoneira entregando concreto na obra" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Nossa frota moderna garante a entrega do concreto fresco direto na sua obra, com qualidade e pontualidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;