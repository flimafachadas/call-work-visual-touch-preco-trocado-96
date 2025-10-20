
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { memo } from "react";
import { LogoStar } from "@/components/ui/logo-star";

const RatingsSection = memo(() => {
  const handleGoogleClick = () => {
    window.open('https://www.google.com/search?q=Israel+Coworking+Coment%C3%A1rios&rlz=1C1GCEA_enBR1115BR1115&oq=israel+cow&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDzSAQg1NDk0ajBqMagCALACAA&sourceid=chrome&ie=UTF-8#', '_blank');
  };

  const handleReclameAquiClick = () => {
    window.open('https://www.reclameaqui.com.br/empresa/israel-coworking/', '_blank');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <LogoStar size="lg" className="mr-3" />
            <h2 className="text-3xl font-bold">
              <span className="text-brand-blue">Nossa</span>{" "}
              <span className="text-brand-pink">Avaliação</span>
            </h2>
          </div>
          <p className="text-brand-dark/70 max-w-2xl mx-auto">
            A confiança dos nossos clientes é nossa maior conquista
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card 
            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gradient-to-br from-green-50 to-blue-50"
            onClick={handleGoogleClick}
          >
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <img 
                  src="https://via.placeholder.com/120x40/4285F4/FFFFFF?text=Google" 
                  alt="Google"
                  className="mx-auto mb-4"
                />
              </div>
              <div className="text-4xl font-bold text-brand-blue mb-2">
                98%
              </div>
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-brand-dark/70 text-sm">
                Avaliação dos nossos clientes
              </p>
              <p className="text-xs text-brand-dark/50 mt-2">
                Clique para ver as avaliações
              </p>
            </CardContent>
          </Card>

          <Card 
            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gradient-to-br from-orange-50 to-red-50"
            onClick={handleReclameAquiClick}
          >
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <img 
                  src="https://via.placeholder.com/120x40/E31E24/FFFFFF?text=RECLAME+AQUI" 
                  alt="Reclame Aqui"
                  className="mx-auto mb-4"
                />
              </div>
              <div className="text-4xl font-bold text-brand-red mb-2">
                0%
              </div>
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-brand-dark/70 text-sm">
                0 Reclamações
              </p>
              <p className="text-xs text-brand-dark/50 mt-2">
                Clique para ver no Reclame Aqui
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-brand-dark/50">
            * Avaliações atualizadas mensalmente
          </p>
        </div>
      </div>
    </section>
  );
});

RatingsSection.displayName = "RatingsSection";

export default RatingsSection;
