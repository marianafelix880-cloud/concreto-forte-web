import concreteTruckImage from "@/assets/concrete-truck.jpg";

const TruckSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Entrega Rápida e <span className="text-construction-orange">Segura</span>
          </h2>
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

export default TruckSection;