import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="whatsapp"
        size="lg"
        className="rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-all duration-300"
        asChild
      >
        <a
          href="https://api.whatsapp.com/send/?phone=554792568901&text=Preciso+de+concreto+usinado+para+minha+obra.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contato pelo WhatsApp"
        >
          <MessageCircle className="h-8 w-8" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;