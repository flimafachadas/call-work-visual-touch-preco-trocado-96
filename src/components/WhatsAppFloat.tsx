
import { MessageCircle } from "lucide-react";
import { handleWhatsAppClick } from "@/utils/socialUtils";
import { memo } from "react";

const WhatsAppFloat = memo(() => {
  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 bg-company-orange/80 hover:bg-company-orange text-white p-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-1 focus:ring-company-orange/50 focus:ring-offset-1"
      aria-label="Contato via WhatsApp"
      type="button"
    >
      <img src="/lovable-uploads/03b865e3-09cd-4878-b923-a80bead5fece.png" className="h-12 w-12" alt="WhatsApp" />
    </button>
  );
});

WhatsAppFloat.displayName = "WhatsAppFloat";

export default WhatsAppFloat;
