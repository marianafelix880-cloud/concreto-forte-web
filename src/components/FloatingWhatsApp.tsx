import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <Button
        variant="whatsapp"
        size="lg"
        className="rounded-full w-14 h-14 md:w-16 md:h-16 shadow-2xl hover:scale-110 transition-all duration-300"
        asChild
      >
        <a
          href="https://api.whatsapp.com/send/?phone=554791826077&text=Preciso+de+concreto+usinado+para+minha+obra.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contato pelo WhatsApp"
        >
          <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;