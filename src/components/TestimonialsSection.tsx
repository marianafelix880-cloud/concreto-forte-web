import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Engenheiro Civil",
    company: "Construtora ABC",
    content: "Trabalho há 15 anos na construção civil e posso afirmar que é o melhor fornecedor de concreto da região. Qualidade impecável e entrega sempre no prazo.",
    rating: 5
  },
  {
    name: "Marina Costa",
    role: "Arquiteta",
    company: "Studio Arquitetura",
    content: "Já utilizei em mais de 20 projetos. O concreto tem excelente qualidade e o atendimento é excepcional. Recomendo para todos os colegas.",
    rating: 5
  },
  {
    name: "Roberto Oliveira",
    role: "Mestre de Obras",
    company: "Construções RO",
    content: "Pontualidade na entrega e preço justo. O que mais me impressiona é a consistência da qualidade. Nunca tive problemas em nenhuma entrega.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            O que nossos <span className="text-construction-orange">clientes</span> dizem
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 20 anos abastecendo obras que mudam o Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 relative">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-construction-orange/20">
                  <Quote className="h-8 w-8" />
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-construction-yellow fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-construction-orange font-medium">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-construction-gray-light px-6 py-3 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-construction-yellow fill-current" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span className="text-muted-foreground">• Mais de 500 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;