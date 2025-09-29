import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-construction-orange">
              Concreto Forte
            </h3>
            <p className="text-background/80 mb-4 leading-relaxed">
              Há mais de 20 anos fornecendo concreto usinado de qualidade 
              para obras em todo o Brasil.
            </p>
            <div className="space-y-2 text-sm text-background/60">
              <p>CNPJ: 60.405.446/0008-02</p>
              <p>Licença Ambiental: LO-123456</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-construction-orange" />
                <span className="text-sm">(55) 96384588</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-construction-orange" />
                <span className="text-sm">contato@concretoforte.com.br</span>
              </div>
            </div>
          </div>

          {/* Location - Joinville */}
          <div>
            <h4 className="font-semibold mb-4">Localização</h4>
            <div className="space-y-4">
              {/* Joinville */}
              <div>
                <h5 className="font-medium text-construction-orange mb-2">UNIDADE JOINVILLE</h5>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-construction-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    R. Dr. Humberto Pinheiro Vieira, 200<br />
                    Distrito Industrial<br />
                    Joinville - SC<br />
                    CEP: 89219-570
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-construction-orange" />
                  <span className="text-sm">(47) 9182-6077</span>
                </div>
              </div>
              
              <div className="flex items-start gap-2 pt-2">
                <Clock className="h-4 w-4 text-construction-orange mt-1" />
                <div className="text-sm">
                  <p>Segunda a Sexta: 6h às 18h</p>
                  <p>Sábado: 6h às 12h</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4">Precisa de Concreto?</h4>
            <p className="text-sm text-background/80 mb-4">
              Solicite seu orçamento agora mesmo e receba em até 2 horas!
            </p>
            <div className="space-y-3">
              <Button variant="cta" className="w-full">
                Solicitar Orçamento
              </Button>
              <Button variant="whatsapp" className="w-full" asChild>
                <a href="https://api.whatsapp.com/send/?phone=554791826077&text=Preciso+de+consultoria+t%C3%A9cnica+para+minha+obra.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © 2024 Concreto Forte. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-construction-orange transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/60 hover:text-construction-orange transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;