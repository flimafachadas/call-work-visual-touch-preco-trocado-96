
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { memo } from "react";
import { LogoStar } from "@/components/ui/logo-star";

const CommentsSection = memo(() => {
  const testimonials = [
    {
      id: 1,
      name: "Matheus Dadalto",
      role: "Cliente",
      comment: "Ótimo lugar para se trabalhar. Salas organizadas e bem estruturas para qualquer situação, e ainda com uma a boa recepção que tive. Recomendo!",
      rating: 5,
      date: "Avaliação Google",
      googleUrl: "https://g.co/kgs/Zq8TFZZ",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVm3i-f9xU1hD-88cIkLsXxe0w4hLkjW9Ophnc2KJ-e1kXr25wP=w72-h72-p-rp-mo-ba2-br100"
    },
    {
      id: 2,
      name: "Rita de Kássia Andrade",
      role: "Cliente",
      comment: "Espaço maravilhoso, salas super estruturadas e a receptividade maravilhosa... Perfeito!!!",
      rating: 5,
      date: "Avaliação Google",
      googleUrl: "https://g.co/kgs/Kvki3wC",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUjZA_CXyqqySqHeQb4G0tsRxt459-3MJ_mr3FxphNPVQVX8vV8=w72-h72-p-rp-mo-br100"
    },
    {
      id: 3,
      name: "Fábio Nogueira",
      role: "Cliente",
      comment: "Excelente receptividade, espaços modernos e de muito bom gosto. Super indico.",
      rating: 5,
      date: "Avaliação Google", 
      googleUrl: "https://g.co/kgs/YbNmMcm",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWI_hPYMo7awR-2_ROspnsp-rofg5hO3P42z0F2KxOvXgeMZVwE=w72-h72-p-rp-mo-ba3-br100"
    }
  ];

  const handleTestimonialClick = (googleUrl: string) => {
    window.open(googleUrl, '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <LogoStar size="lg" className="mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-brand-blue">O que nossos</span>{" "}
              <span className="text-brand-pink">Clientes Dizem</span>
            </h2>
          </div>
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
            Depoimentos reais de quem confia no Israel Coworking
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white/80 backdrop-blur-sm"
              onClick={() => handleTestimonialClick(testimonial.googleUrl)}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-brand-pink/30 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-brand-dark/80 mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-semibold text-brand-dark text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-brand-dark/60 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-brand-dark/50">
                      {testimonial.date}
                    </p>
                    <p className="text-xs text-blue-600 hover:underline">
                      Ver no Google
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div 
            className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://www.google.com/search?q=Israel+Coworking+Coment%C3%A1rios&rlz=1C1GCEA_enBR1115BR1115&oq=israel+cow&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDzSAQg1NDk0ajBqMagCALACAA&sourceid=chrome&ie=UTF-8#', '_blank')}
          >
            <Star className="h-5 w-5 text-yellow-400 fill-current mr-2" />
            <span className="font-semibold text-brand-dark mr-2">4.9/5</span>
            <span className="text-brand-dark/70 text-sm">baseado em avaliações do Google</span>
          </div>
        </div>
      </div>
    </section>
  );
});

CommentsSection.displayName = "CommentsSection";

export default CommentsSection;
