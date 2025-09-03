import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const leadSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  location: z.string().min(1, "Local da obra é obrigatório"),
  volume: z.string().min(1, "Volume é obrigatório"),
  deliveryDate: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

const QuoteSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema)
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('leads')
        .insert([{
          name: data.name,
          phone: data.phone,
          location: data.location,
          volume: data.volume,
          delivery_date: data.deliveryDate || null,
        }]);

      if (error) throw error;

      toast({
        title: "Orçamento solicitado com sucesso!",
        description: "Entraremos em contato em até 2 horas.",
      });
      
      reset();
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-construction-gray-light">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solicite seu <span className="text-construction-orange">Orçamento</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Receba uma proposta personalizada em até 2 horas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quote Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-construction-orange" />
                  <CardTitle>Formulário de Orçamento</CardTitle>
                </div>
                <CardDescription>
                  Preencha os dados abaixo e receba sua cotação rapidamente
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input 
                        id="name" 
                        placeholder="Seu nome" 
                        {...register("name")}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                      <Input 
                        id="phone" 
                        placeholder="(11) 99999-9999" 
                        {...register("phone")}
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Local da Obra *</Label>
                    <Input 
                      id="location" 
                      placeholder="Cidade/Bairro" 
                      {...register("location")}
                      className={errors.location ? "border-destructive" : ""}
                    />
                    {errors.location && (
                      <p className="text-sm text-destructive mt-1">{errors.location.message}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="volume">Volume Aproximado (m³) *</Label>
                      <Input 
                        id="volume" 
                        placeholder="Ex: 15 m³" 
                        {...register("volume")}
                        className={errors.volume ? "border-destructive" : ""}
                      />
                      {errors.volume && (
                        <p className="text-sm text-destructive mt-1">{errors.volume.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="deliveryDate">Data da Entrega</Label>
                      <Input 
                        id="deliveryDate" 
                        type="date" 
                        {...register("deliveryDate")}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    variant="cta" 
                    className="w-full text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Quero meu orçamento rápido"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <div className="space-y-6">
              <Card className="bg-construction-orange text-construction-orange-foreground shadow-xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Precisa de Agilidade?</h3>
                  <p className="mb-6 opacity-90">
                    Fale diretamente conosco no WhatsApp e tenha resposta imediata!
                  </p>
                  <Button variant="whatsapp" size="lg" className="w-full" asChild>
                    <a href="https://api.whatsapp.com/send/?phone=5565968693238&text=Ol%C3%A1+Gostaria+de+um+Atendimento+Especializado.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Conversar no WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Por que nos escolher?</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-construction-orange rounded-full"></div>
                      Resposta em até 2 horas
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-construction-orange rounded-full"></div>
                      Orçamento sem compromisso
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-construction-orange rounded-full"></div>
                      Entrega pontual garantida
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-construction-orange rounded-full"></div>
                      Suporte técnico especializado
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;