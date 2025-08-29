import { MapPin } from "lucide-react";

const coverage = [
  "Grande São Paulo",
  "ABC Paulista", 
  "Campinas",
  "Sorocaba",
  "São José dos Campos",
  "Ribeirão Preto"
];

const MapSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Área de <span className="text-construction-orange">Atendimento</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Entregamos concreto usinado em diversas regiões
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-construction-gray-light rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-construction-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mapa Interativo</h3>
                <p className="text-muted-foreground">
                  Visualização das nossas regiões de entrega
                </p>
              </div>
            </div>
          </div>

          {/* Coverage Areas */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Regiões Atendidas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {coverage.map((area, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-construction-gray-light rounded-lg">
                  <div className="w-3 h-3 bg-construction-orange rounded-full"></div>
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="bg-construction-orange/10 p-6 rounded-lg border-l-4 border-construction-orange">
              <h4 className="font-semibold mb-2">Entrega Expressa</h4>
              <p className="text-muted-foreground">
                Sua região não está na lista? Entre em contato! 
                Avaliamos entregas especiais em um raio de até 100km.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;